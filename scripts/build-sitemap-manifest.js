// scripts/build-sitemap-manifest.js
//
// Verifies every page for HTTP 200 + noindex and writes the result to
// public/sitemap-manifest.json. The sitemap handler (pages/sitemap.xml.js)
// reads from this file — so zero HTTP calls happen at request time.
//
// ── HOW TO RUN ───────────────────────────────────────────────────────────────
//
//   node scripts/build-sitemap-manifest.js
//
// ── ADD TO package.json ──────────────────────────────────────────────────────
//
//   "scripts": {
//     "build:sitemap": "node scripts/build-sitemap-manifest.js"
//   }
//
// ── WHEN TO RUN ──────────────────────────────────────────────────────────────
//
//   Run manually after every deploy where:
//   • New pages are added or existing pages are removed
//   • A page's noindex status changes
//   • The cloud-and-devops folder migration is deployed
//
//   Takes ~30–90 seconds for 200 pages. No user traffic is affected —
//   this runs entirely offline against your live server.
//
// ── OUTPUT ───────────────────────────────────────────────────────────────────
//
//   public/sitemap-manifest.json
//   Format: [{ url, type, lastmod, indexable: true }, ...]
//
//   Commit this file to your repo. It ensures the sitemap always has
//   content even on a fresh server start before build:sitemap is run.
//
// ─────────────────────────────────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const { getAllPages } = require('../src/lib/sitemap-pages');

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.learnbay.co'
).replace(/\/$/, '');
console.log('SITE_URL', SITE_URL);
const OUTPUT = path.join(process.cwd(), 'public', 'sitemap-manifest.json');
const BATCH_SIZE = 10; // pages verified in parallel per round
const BATCH_GAP = 200; // ms pause between rounds — avoids hammering your server
const TIMEOUT_MS = 8000; // per-page fetch timeout

// ─── Indexability check ───────────────────────────────────────────────────────

// async function isIndexable(url) {
//   try {
//     const res = await fetch(url, {
//       method: 'GET',
//       redirect: 'manual', // 301 / 302 → not indexable, exclude from sitemap
//       headers: { 'User-Agent': 'LearnbaySitemapBot/1.0' },
//       signal: AbortSignal.timeout(TIMEOUT_MS),
//     });

//     // Must return HTTP 200 — anything else excluded
//     if (res.status !== 200) return false;

//     // Check x-robots-tag response header
//     const xRobots = res.headers.get('x-robots-tag') || '';
//     if (/noindex/i.test(xRobots)) return false;

//     // Check HTML body for <meta name="robots" content="noindex">
//     // Both attribute orderings must be checked
//     const html = await res.text();

//     if (
//       /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
//     ) {
//       return false;
//     }
//     if (
//       /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(
//         html
//       )
//     ) {
//       return false;
//     }

//     return true;
//   } catch {
//     // Timeout, DNS failure, connection refused etc. — exclude the page
//     return false;
//   }
// }

async function isIndexable(url) {
  try {
    console.log(`[CHECKING] ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual', // 301 / 302 → not indexable, exclude from sitemap
      headers: { 'User-Agent': 'LearnbaySitemapBot/1.0' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    // Must return HTTP 200 — anything else excluded
    if (res.status !== 200) {
      console.log(`[EXCLUDED] ${url} → HTTP ${res.status} (${res.statusText})`);
      return false;
    }

    // Check x-robots-tag response header
    const xRobots = res.headers.get('x-robots-tag') || '';
    if (/noindex/i.test(xRobots)) {
      console.log(
        `[EXCLUDED] ${url} → X-Robots-Tag contains "noindex": ${xRobots}`
      );
      return false;
    }

    // Check HTML body for meta robots noindex
    const html = await res.text();

    if (
      /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
    ) {
      console.log(
        `[EXCLUDED] ${url} → Meta robots tag contains noindex (name first)`
      );
      return false;
    }

    if (
      /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(
        html
      )
    ) {
      console.log(
        `[EXCLUDED] ${url} → Meta robots tag contains noindex (content first)`
      );
      return false;
    }

    console.log(`[INDEXABLE] ${url}`);
    return true;
  } catch (error) {
    console.log(
      `[EXCLUDED] ${url} → Fetch failed: ${error?.name || 'Unknown'} - ${
        error?.message || 'No error message'
      }`
    );

    return false;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n[build:sitemap] ─────────────────────────────────────────');
  console.log(`[build:sitemap] Site    : ${SITE_URL}`);
  console.log(`[build:sitemap] Output  : ${OUTPUT}`);
  console.log('[build:sitemap] ─────────────────────────────────────────\n');

  // 1. Collect all candidate pages
  console.log('[build:sitemap] Collecting pages from file system...');
  const allPages = await getAllPages();
  console.log(`[build:sitemap] Found ${allPages.length} candidate pages\n`);

  // 2. Verify indexability in batches
  console.log(`[build:sitemap] Verifying in batches of ${BATCH_SIZE}...\n`);

  const manifest = [];
  let included = 0;
  let excluded = 0;

  for (let i = 0; i < allPages.length; i += BATCH_SIZE) {
    const batch = allPages.slice(i, i + BATCH_SIZE);
    const batchNo = Math.floor(i / BATCH_SIZE) + 1;
    const total = Math.ceil(allPages.length / BATCH_SIZE);
    console.log(`[build:sitemap] Batch ${batchNo}/${total}`);

    const results = await Promise.all(
      batch.map(async (page) => {
        const fullUrl = page.url.startsWith('http')
          ? page.url
          : `${SITE_URL}${page.url}`;

        const ok = await isIndexable(fullUrl);

        if (!ok) {
          console.log(`  ✗  ${page.url}`);
          excluded++;
          return null;
        }

        console.log(`  ✓  ${page.url}`);
        included++;
        return {
          url: fullUrl,
          type: page.type,
          lastmod: page.lastmod,
          indexable: true,
        };
      })
    );

    manifest.push(...results.filter(Boolean));

    // Pause between batches — don't hammer your own server
    if (i + BATCH_SIZE < allPages.length) {
      await new Promise((r) => setTimeout(r, BATCH_GAP));
    }
  }

  // 3. Write manifest
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2), 'utf8');

  console.log('\n[build:sitemap] ─────────────────────────────────────────');
  console.log(`[build:sitemap] Pages checked  : ${allPages.length}`);
  console.log(`[build:sitemap] Included       : ${included}`);
  console.log(`[build:sitemap] Excluded       : ${excluded}`);
  console.log(`[build:sitemap] Manifest saved : ${OUTPUT}`);
  console.log('[build:sitemap] ─────────────────────────────────────────\n');
}

main().catch((err) => {
  console.error('\n[build:sitemap] FATAL:', err.message);
  process.exit(1); // non-zero exit so npm run reports failure visibly
});
