#!/usr/bin/env node
/*
 * SEO preflight checks - run before merging or deploying.
 *
 *   node scripts/seo-preflight.js
 *
 * Exits 0 if everything passes, 1 if any check fails. Safe to wire into CI.
 *
 * Catches the specific classes of bug that have reached production before:
 *   - sitemap.xml that does not parse (broke discovery 30 Jun - 3 Jul 2026)
 *   - a page removed without a redirect, or a redirect pointing at a 404
 *   - JSON-LD that is invalid once the template literal is evaluated
 *   - canonical tags with stray whitespace or pointing at routes that do not exist
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://www.learnbay.co';

let failures = 0;
let warnings = 0;

function head(t) {
  console.log('\n' + t + '\n' + '-'.repeat(t.length));
}
function pass(t) {
  console.log('  PASS  ' + t);
}
function fail(t, detail) {
  failures++;
  console.log('  FAIL  ' + t);
  (detail || []).slice(0, 25).forEach((d) => console.log('          ' + d));
}
function warn(t, detail) {
  warnings++;
  console.log('  WARN  ' + t);
  (detail || []).slice(0, 10).forEach((d) => console.log('          ' + d));
}

/* ---------- shared helpers ---------- */

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(js|jsx)$/.test(e.name)) out.push(p);
  }
  return out;
}

// Every route the app can actually serve.
function realRoutes() {
  const routes = new Set([BASE]);
  const pagesDir = path.join(ROOT, 'src/pages');
  for (const f of walk(pagesDir)) {
    if (f.includes(path.sep + 'api' + path.sep)) continue;
    const base = path.basename(f);
    if (base.startsWith('_') || base === '404.js') continue;
    let r = f
      .slice(pagesDir.length)
      .replace(/\\/g, '/')
      .replace(/\.jsx?$/, '');
    if (r.endsWith('/index')) r = r.slice(0, -6);
    routes.add(BASE + r);
  }
  const blogDir = path.join(ROOT, 'src/blog');
  if (fs.existsSync(blogDir))
    for (const f of fs.readdirSync(blogDir))
      if (f.endsWith('.md')) routes.add(BASE + '/blogs/' + f.slice(0, -3));
  return routes;
}

const norm = (u) => String(u).trim().replace(/\/+$/, '') || BASE;

// Locate every `__html: \`...\`` block and say whether it is a JSON-LD script.
function findBlocks(s) {
  const out = [];
  const re = /__html:\s*`/g;
  let m;
  while ((m = re.exec(s))) {
    const start = m.index + m[0].length;
    let i = start,
      depth = 0,
      end = -1;
    while (i < s.length) {
      const c = s[i];
      if (c === '\\') {
        i += 2;
        continue;
      }
      if (c === '$' && s[i + 1] === '{') {
        depth++;
        i += 2;
        continue;
      }
      if (c === '}' && depth > 0) {
        depth--;
        i++;
        continue;
      }
      if (c === '`' && depth === 0) {
        end = i;
        break;
      }
      i++;
    }
    if (end < 0) continue;
    const ctx = s.slice(Math.max(0, m.index - 400), m.index);
    out.push({ start, end, isLd: /application\/ld\+json/.test(ctx) });
    re.lastIndex = end;
  }
  return out;
}

/*
 * Evaluate a template literal's escape sequences the way JS does.
 * This matters: a single "\n" written in the source is an escape that becomes a
 * REAL newline at runtime, which JSON forbids inside a string. Validating the
 * raw source text instead of the evaluated string gives false passes.
 */
function evalTemplate(raw) {
  let o = '';
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (c !== '\\') {
      o += c;
      continue;
    }
    const n = raw[++i];
    if (n === undefined) {
      o += '\\';
      break;
    }
    if (n === 'n') o += '\n';
    else if (n === 'r') o += '\r';
    else if (n === 't') o += '\t';
    else if (n === 'b') o += '\b';
    else if (n === 'f') o += '\f';
    else if (n === 'v') o += '\v';
    else if (n === '0') o += '\0';
    else if (n === 'u') {
      if (raw[i + 1] === '{') {
        const e = raw.indexOf('}', i);
        o += String.fromCodePoint(parseInt(raw.slice(i + 2, e), 16));
        i = e;
      } else {
        o += String.fromCharCode(parseInt(raw.substr(i + 1, 4), 16));
        i += 4;
      }
    } else if (n === 'x') {
      o += String.fromCharCode(parseInt(raw.substr(i + 1, 2), 16));
      i += 2;
    } else o += n;
  }
  return o;
}

function jsonLdError(raw) {
  let t = evalTemplate(raw);
  if (/\$\{/.test(raw)) t = t.replace(/\$\{[^}]*\}/g, '"X"');
  try {
    JSON.parse(t);
    return null;
  } catch (e) {
    return e.message;
  }
}

/* ---------- 1. sitemap.xml ---------- */

function checkSitemap(routes) {
  head('1. sitemap.xml');
  const p = path.join(ROOT, 'public/sitemap.xml');
  if (!fs.existsSync(p)) return fail('sitemap.xml not found');
  const raw = fs.readFileSync(p, 'utf8');

  // Tag balance catches the stray <url> that has broken this file twice.
  const open = (raw.match(/<url>/g) || []).length;
  const close = (raw.match(/<\/url>/g) || []).length;
  const locs = (raw.match(/<loc>[\s\S]*?<\/loc>/g) || []).map((x) =>
    x.replace(/<\/?loc>/g, '').trim()
  );
  if (open !== close || open !== locs.length)
    fail(
      `tag balance is wrong: ${open} <url>, ${close} </url>, ${locs.length} <loc>`,
      [
        'a <url> was probably opened and never closed - Google rejects the whole file',
      ]
    );
  else pass(`tag balance (${open} entries)`);

  // Well-formedness, without pulling in an XML dependency.
  const stack = [];
  let wellFormed = true;
  let badTag = '';
  for (const m of raw.matchAll(/<(\/?)([A-Za-z_][\w:.-]*)[^>]*?(\/?)>/g)) {
    const [, closing, name, selfClose] = m;
    if (selfClose) continue;
    if (closing) {
      if (stack.pop() !== name) {
        wellFormed = false;
        badTag = name;
        break;
      }
    } else stack.push(name);
  }
  if (!wellFormed || stack.length) {
    fail('XML is not well-formed', [
      badTag
        ? `mismatched closing tag </${badTag}>`
        : `unclosed tag <${stack[stack.length - 1]}>`,
    ]);
  } else pass('XML is well-formed');

  const decoded = locs.map((u) => u.replace(/&amp;/g, '&'));
  const dupes = decoded.filter((u, i) => decoded.indexOf(u) !== i);
  dupes.length
    ? fail('duplicate URLs', [...new Set(dupes)])
    : pass('no duplicate URLs');

  const malformed = decoded.filter(
    (u) => !u.startsWith(BASE) || u !== u.trim()
  );
  malformed.length
    ? fail(
        'URLs not on the canonical https://www. host, or with whitespace',
        malformed
      )
    : pass('all URLs use the canonical host');

  const routeSet = new Set([...routes].map(norm));
  const missing = decoded.filter((u) => !routeSet.has(norm(u)));
  missing.length
    ? fail('sitemap URLs with no backing page (these would 404)', missing)
    : pass(`every URL resolves to a real page (${decoded.length} checked)`);
}

/* ---------- 2. JSON-LD ---------- */

function checkJsonLd() {
  head('2. JSON-LD structured data');
  const bad = [];
  let total = 0;
  for (const f of walk(path.join(ROOT, 'src'))) {
    const s = fs.readFileSync(f, 'utf8');
    for (const b of findBlocks(s)) {
      if (!b.isLd) continue;
      total++;
      const err = jsonLdError(s.slice(b.start, b.end));
      if (err) {
        const line = s.slice(0, b.start).split('\n').length;
        bad.push(`${path.relative(ROOT, f)}:${line}  ${err.slice(0, 70)}`);
      }
    }
  }
  bad.length
    ? fail(`${bad.length} of ${total} blocks are invalid once evaluated`, bad)
    : pass(`all ${total} blocks parse as evaluated at runtime`);
}

/* ---------- 3. redirects ---------- */

async function checkRedirects(routes) {
  head('3. redirects (next.config.js)');
  let cfg;
  try {
    cfg = require(path.join(ROOT, 'next.config.js'));
  } catch (e) {
    return fail('could not load next.config.js', [e.message]);
  }
  if (typeof cfg.redirects !== 'function')
    return warn('no redirects() defined');
  const rules = await cfg.redirects();
  pass(`loaded ${rules.length} rules`);

  const badSource = rules
    .filter((r) => !r.source.startsWith('/'))
    .map((r) => r.source);
  badSource.length
    ? fail(
        'sources must be paths beginning with "/" (these never match)',
        badSource
      )
    : pass('every source is a valid path');

  const ws = rules
    .filter(
      (r) =>
        r.destination !== r.destination.trim() || r.source !== r.source.trim()
    )
    .map((r) => `${r.source} -> ${JSON.stringify(r.destination)}`);
  ws.length
    ? fail('stray whitespace in source or destination', ws)
    : pass('no stray whitespace');

  const routeSet = new Set([...routes].map(norm));
  const dead = rules
    .filter(
      (r) => r.destination.startsWith('/') && !r.destination.includes(':')
    )
    .filter((r) => !routeSet.has(norm(BASE + r.destination.split('?')[0])))
    .map((r) => `${r.source} -> ${r.destination}`);
  dead.length
    ? fail(
        'redirects pointing at a page that does not exist (301 into a 404)',
        dead
      )
    : pass('every internal destination resolves to a real page');

  const sources = new Map(rules.map((r) => [r.source, r.destination]));
  const chains = rules
    .filter((r) => {
      const d = r.destination.replace(BASE, '') || '/';
      return d !== r.source && sources.has(d);
    })
    .map(
      (r) =>
        `${r.source} -> ${r.destination} -> ${sources.get(r.destination.replace(BASE, ''))}`
    );
  chains.length
    ? warn('redirect chains (two hops - collapse to one)', chains)
    : pass('no redirect chains');
}

/* ---------- 4. canonical tags ---------- */

function checkCanonicals(routes) {
  head('4. canonical tags');
  const routeSet = new Set([...routes].map(norm));
  const whitespace = [];
  const unresolvable = [];
  let total = 0;
  const pagesDir = path.join(ROOT, 'src/pages');
  for (const f of walk(pagesDir)) {
    if (f.includes(path.sep + 'api' + path.sep)) continue;
    const s = fs.readFileSync(f, 'utf8');
    const m =
      s.match(/rel=["']canonical["']\s*\n?\s*href=["']([^"']+)["']/) ||
      s.match(/href=["']([^"']+)["']\s*\n?\s*rel=["']canonical["']/);
    if (!m) continue;
    total++;
    const href = m[1].replace(/&amp;/g, '&');
    const rel = path.relative(ROOT, f);
    if (href !== href.trim())
      whitespace.push(`${rel}  ${JSON.stringify(href)}`);
    if (!routeSet.has(norm(href)))
      unresolvable.push(`${rel}  -> ${href.trim()}`);
  }
  whitespace.length
    ? fail('canonical URLs with stray whitespace', whitespace)
    : pass('no whitespace in canonical URLs');
  unresolvable.length
    ? fail('canonicals pointing at a page that does not exist', unresolvable)
    : pass(`all ${total} canonicals resolve to a real page`);
}

/* ---------- 5. images without dimensions (CLS) ---------- */

function checkImageDimensions() {
  head('5. layout shift risk (raw <img> without width/height)');
  const hits = [];
  for (const f of walk(path.join(ROOT, 'src/components'))) {
    const s = fs.readFileSync(f, 'utf8');
    for (const m of s.matchAll(/<img\b[^>]*?\/?>/gs)) {
      const tag = m.group ? m.group(0) : m[0];
      if (/\bwidth\s*=/.test(tag) && /\bheight\s*=/.test(tag)) continue;
      hits.push(
        `${path.relative(ROOT, f)}:${s.slice(0, m.index).split('\n').length}`
      );
    }
  }
  hits.length
    ? warn(
        `${hits.length} raw <img> without both width and height (each can shift layout)`,
        hits
      )
    : pass('every raw <img> declares width and height');
}

/* ---------- run ---------- */

(async () => {
  console.log('SEO preflight - ' + ROOT);
  const routes = realRoutes();
  checkSitemap(routes);
  checkJsonLd();
  await checkRedirects(routes);
  checkCanonicals(routes);
  checkImageDimensions();

  console.log('\n' + '='.repeat(60));
  if (failures) {
    console.log(`RESULT: ${failures} check(s) FAILED, ${warnings} warning(s)`);
    console.log('Do not deploy until these are resolved.');
    process.exit(1);
  }
  console.log(
    `RESULT: all checks passed${warnings ? `, ${warnings} warning(s) to review` : ''}`
  );
  process.exit(0);
})();
