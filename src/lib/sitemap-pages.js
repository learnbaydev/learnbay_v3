// lib/sitemap-pages.js
// Discovers all static page URLs from the pages/ file tree and appends
// dynamic routes (blog posts etc.) via fetchDynamicPages().
//
// ─── DEPLOYMENT NOTE — lastmod accuracy ───────────────────────────────────────
// lastmod is derived from each file's mtime (last-modified time on disk).
//
//   ✓  Accurate — FTP or rsync deploy (only changed files get new timestamps)
//   ✗  Broken  — git pull or full directory copy/zip extract
//               (ALL files get the same timestamp = today's date)
//
// If you ever switch to git pull, replace stat.mtime with getGitLastmod()
// (commented out below).
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'fs';
import path from 'path';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toYMD(dateValue) {
  return new Date(dateValue).toISOString().slice(0, 10);
}

// Alternative to mtime — use if you deploy via git pull.
// Returns the date of the last git commit that touched this file.
//
// import { execSync } from 'child_process';
// function getGitLastmod(absPath) {
//   try {
//     const iso = execSync(
//       `git log -1 --format="%aI" -- "${absPath}"`,
//       { encoding: 'utf8' }
//     ).trim();
//     return iso ? iso.slice(0, 10) : toYMD(Date.now());
//   } catch {
//     return toYMD(Date.now());
//   }
// }

// Convert a file path like:
//   src/pages/datascience/bangalore/data-science-course.js
// into a URL slug like:
//   /datascience/bangalore/data-science-course
function filePathToUrlSlug(filePath) {
  return (
    '/' +
    filePath
      .replace(/^src\/pages\//, '') // strip src/pages/ prefix
      .replace(/\.js$/, '') // strip .js extension
      .replace(/\/index$/, '') // /foo/index → /foo
    // NOTE: the .replace(/&/g, '%26') line from the original has been removed.
    // The cloud&devops folder is being renamed to cloud-and-devops, so no
    // ampersand will exist in any folder name after migration.
    // If any other folder name still contains &, add this line back.
  );
}

// ─── SKIP lists ───────────────────────────────────────────────────────────────

const SKIP_EXACT = new Set([
  '/', // homepage is added explicitly at the top of getAllPages()
  '/404',
  '/_app',
  '/_document',
  '/sitemap.xml',
  '/robots.txt',

  // ── Utility and internal pages ────────────────────────────────────────────
  // These pages are excluded from the sitemap AND must have either:
  //   (a) Disallow in robots.txt, OR
  //   (b) <meta name="robots" content="noindex"> on the page itself
  // Sitemap exclusion alone does NOT prevent Google from indexing them.
  '/demo', // 301 → /free-demo-class        (add to next.config.js)
  '/domain', // 301 → /courses/domain-electives (add to next.config.js)
  '/submit-info',
  '/enroll',
  '/loan-process',
  '/degree-upgrade',
  '/resume-builder',
  '/learning-learnbay',
  '/learning-learnbay-select',
  '/master-application',
  '/master-application-guwahati',
  '/career-apply-now',
  '/career-portal',
  '/career-report',
  '/verify-certificate',
  '/referrals',
  '/organic',
  '/organic/generic',
  '/campaign/dmd',
  '/reviews-old',

  // ── cloud&devops → cloud-and-devops migration ─────────────────────────────
  // Old folder is being deleted. 301 redirects live in next.config.js.
  // These entries are a safety net — if any file is accidentally left
  // behind during the folder delete, it won't appear in the sitemap.

  // xyz is a deprecated course page.
  // It redirects directly to /cloud-and-devops/master-course-page (1 hop).
  // It does NOT exist in the new cloud-and-devops folder.
  // All three variants must be excluded.
]);

const SKIP_PREFIX = ['/api/', '/Thank-you', '/NewThankYouCounselling'];

// Pages matching these patterns are drafts or staging copies — always exclude
const SKIP_PATTERN = [/-copy$/, /-v2$/, /\/testing$/];

// ─── Page-type classifier ─────────────────────────────────────────────────────
// Returns: homepage | course | blog | policy | default
//
// CHANGE FROM ORIGINAL:
// Was using slug.includes('bangalore') / slug.includes('dubai') etc.
// (keyword string matching on city names). This misfired on pages like:
//   /india/karnataka/bangalore/data-science/data-science-course/
//   → was classified as 'city', should be 'course'
// Also misfired on course pages whose slugs happened to contain a city name.
//
// Now uses URL path structure (prefix matching) which is accurate and
// unambiguous. Geo-targeted pages (/india/, /usa/, /uae/ etc.) are
// course pages with location targeting — classified as 'course'.
function classifyUrl(slug) {
  if (slug === '/') return 'homepage';

  // Policy pages — exact match on known paths
  if (
    /^\/(privacy-policy|terms-conditions|refund-cancellation-policy)$/.test(
      slug
    )
  ) {
    return 'policy';
  }

  // Blog posts
  if (slug.startsWith('/blogs/')) return 'blog';

  // Geo-targeted course pages (domestic and international)
  // /india/{state}/{city}/{domain}/{intent}/
  // /usa/{state}/{city}/{domain}/{intent}/
  // /uae/{emirate}/{domain}/{intent}/
  // These are course pages with location targeting — not pure 'city' pages.
  if (
    /^\/(india|usa|uae|uk|canada|australia|germany|singapore|malaysia)\//.test(
      slug
    )
  ) {
    return 'course';
  }

  // Non-geo course directories
  const courseRoots = [
    '/datascience/',
    '/fullstack/',
    '/artificial-intelligence/',
    '/cloud-and-devops/', // UPDATED from '/cloud&devops/'
    '/cyber-security/',
    '/genai',
    '/ai-engineering',
    '/advanced-cloud',
    '/advanced-cyber',
    '/executive-program',
    '/data-science-',
    '/ai-co-lab',
    '/corporate-ai-training',
    '/cloud-and-devops-for',
  ];
  if (courseRoots.some((r) => slug.startsWith(r) || slug.includes(r))) {
    return 'course';
  }

  return 'default';
}

// ─── Static page discovery ────────────────────────────────────────────────────

export async function getAllPages() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');

  // Recursively walk the pages directory and collect all .js files
  function walk(dir, base) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = path.join(base, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(walk(full, rel));
      } else if (
        entry.isFile() &&
        entry.name.endsWith('.js') &&
        !entry.name.endsWith('.module.css')
      ) {
        files.push({ absPath: full, relPath: rel });
      }
    }
    return files;
  }

  const files = walk(pagesDir, 'src/pages');
  const pages = [];

  // Homepage — always added first with its own explicit entry
  const indexStat = fs.statSync(path.join(pagesDir, 'index.js'));
  pages.push({
    url: '/',
    type: 'homepage',
    lastmod: toYMD(indexStat.mtime),
  });

  for (const { absPath, relPath } of files) {
    const slug = filePathToUrlSlug(relPath);

    // Skip dynamic route files ([slug].js, [id].js etc.)
    // Their URLs depend on data, not file names.
    // They are handled separately in fetchDynamicPages() below.
    if (slug.includes('[')) continue;

    // Apply all skip rules
    if (SKIP_EXACT.has(slug)) continue;
    if (SKIP_PREFIX.some((p) => slug.startsWith(p))) continue;
    if (SKIP_PATTERN.some((re) => re.test(slug))) continue;

    const stat = fs.statSync(absPath);
    const lastmod = toYMD(stat.mtime);
    const type = classifyUrl(slug);

    pages.push({ url: slug, type, lastmod });
  }

  // Append dynamic routes (blog posts, dynamic course/city pages)
  const dynamicPages = await fetchDynamicPages();
  pages.push(...dynamicPages);

  return pages;
}

// ─── Dynamic routes ───────────────────────────────────────────────────────────
// [slug].js files cannot be discovered from the file system alone.
// Each dynamic source must be listed here with its own data fetch.
//
// IMPORTANT: Use real CMS/DB updatedAt timestamps here — NOT mtime.
// These pages change content independently of any file on disk.
async function fetchDynamicPages() {
  const pages = [];

  // ── Blog posts  /blogs/[slug].js ─────────────────────────────────────────
  try {
    // OPTION A — fetch slugs from your CMS API
    // Uncomment and adapt to your CMS:
    //
    // const res  = await fetch('https://your-cms.io/api/posts?fields=slug,updatedAt');
    // const data = await res.json();
    // for (const post of data.posts) {
    //   pages.push({
    //     url:     `/blogs/${post.slug}`,
    //     type:    'blog',
    //     lastmod: toYMD(post.updatedAt),
    //   });
    // }

    // OPTION B — read from a static blog-manifest.json
    // Generate this file from your CMS at deploy time and commit it.
    // Format: [{ "slug": "post-slug", "updatedAt": "2025-04-01" }, ...]
    const blogManifest = path.join(
      process.cwd(),
      'public',
      'blog-manifest.json'
    );
    if (fs.existsSync(blogManifest)) {
      const posts = JSON.parse(fs.readFileSync(blogManifest, 'utf8'));
      for (const post of posts) {
        pages.push({
          url: `/blogs/${post.slug}`,
          type: 'blog',
          lastmod: toYMD(post.updatedAt || Date.now()),
        });
      }
    }
  } catch (err) {
    // Fail open — log the error but don't crash the sitemap.
    // Static pages will still be returned correctly.
    console.error('[sitemap] fetchDynamicPages — blog error:', err.message);
  }

  // ── Other dynamic routes ──────────────────────────────────────────────────
  // Add more blocks here as needed, e.g. dynamic city/course pages.

  return pages;
}
