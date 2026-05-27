// lib/sitemap-pages.js
// NO external imports. Derives every URL and its lastmod directly
// from the pages/ file tree using Node.js fs — zero dependency on
// any CMS, DB, or API module.

import fs from 'fs';
import path from 'path';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toYMD(dateValue) {
  return new Date(dateValue).toISOString().slice(0, 10);
}

// Convert a file path like  src/pages/datascience/bangalore/data-science-course-training-in-bangalore.js
// into a URL slug like       /datascience/bangalore/data-science-course-training-in-bangalore
function filePathToUrlSlug(filePath) {
  return (
    '/' +
    filePath
      .replace(/^src\/pages\//, '') // strip prefix
      .replace(/\.js$/, '') // strip extension
      .replace(/\/index$/, '') // /foo/index → /foo
      .replace(/&/g, '%26') // encode & (e.g. cloud&devops folder) — & is invalid in XML/URLs
  );
}

// ─── Pages to SKIP entirely (never add to sitemap) ────────────────────────────
const SKIP_EXACT = new Set([
  '/', // index handled explicitly
  '/404',
  '/_app',
  '/_document',
  '/sitemap.xml',
  '/robots.txt',
  '/demo',
  '/domain',
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
]);

const SKIP_PREFIX = [
  '/api/', // all API routes
  '/Thank-you', // thank-you pages
  '/NewThankYouCounselling',
];

// Pages with "-copy" or "-v2" in name are duplicate/draft pages — exclude
const SKIP_PATTERN = [/-copy$/, /-v2$/, /\/testing$/];

// ─── Page-type classifier ─────────────────────────────────────────────────────
// Returns one of: homepage | course | city | blog | policy | default
function classifyUrl(slug) {
  if (slug === '/') return 'homepage';

  if (
    slug === '/privacy-policy' ||
    slug === '/terms-conditions' ||
    slug === '/refund-cancellation-policy'
  )
    return 'policy';

  if (slug.startsWith('/blogs/')) return 'blog';

  // City pages — any page whose slug contains a known city or geo keyword
  const cityKeywords = [
    'bangalore',
    'mumbai',
    'hyderabad',
    'chennai',
    'delhi',
    'pune',
    'noida',
    'kolkata',
    'kochi',
    'jaipur',
    'indore',
    'coimbatore',
    'bhubaneswar',
    'nagpur',
    'patna',
    'marathahalli',
    'canada',
    'dubai',
    'usa',
    'uk',
    'australia',
    'germany',
    'singapore',
    'malaysia',
    'nigeria',
    'southafrica',
    'egypt',
    'bangladesh',
    'austin',
  ];
  if (cityKeywords.some((c) => slug.includes(c))) return 'city';

  // Course pages — everything else under known course directories
  const courseRoots = [
    '/datascience/',
    '/fullstack/',
    '/artificial-intelligence/',
    '/cloud&devops/',
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
  if (courseRoots.some((r) => slug.startsWith(r) || slug.includes(r)))
    return 'course';

  return 'default';
}

// ─── Main export ──────────────────────────────────────────────────────────────
export async function getAllPages() {
  // Resolve the pages directory relative to the project root (process.cwd())
  const pagesDir = path.join(process.cwd(), 'src', 'pages');

  // Recursively collect all .js files under src/pages
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

  // Always add homepage first
  const indexStat = fs.statSync(path.join(pagesDir, 'index.js'));
  pages.push({
    url: '/',
    type: 'homepage',
    lastmod: toYMD(indexStat.mtime),
  });

  for (const { absPath, relPath } of files) {
    const slug = filePathToUrlSlug(relPath);

    // Skip non-page files (dynamic routes like [slug].js are handled separately)
    if (slug.includes('[')) continue;

    // Apply all skip rules
    if (SKIP_EXACT.has(slug)) continue;
    if (SKIP_PREFIX.some((p) => slug.startsWith(p))) continue;
    if (SKIP_PATTERN.some((re) => re.test(slug))) continue;

    // Get dynamic lastmod from the file's last-modified time on disk.
    // This updates automatically every time you edit and deploy the file.
    const stat = fs.statSync(absPath);
    const lastmod = toYMD(stat.mtime);
    const type = classifyUrl(slug);

    pages.push({ url: slug, type, lastmod });
  }

  return pages;
}
