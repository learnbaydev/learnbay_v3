// pages/sitemap.xml.js
// Dynamic XML sitemap — Next.js 14 Page Router
// • lastmod    → from file's mtime on disk (updates on every deploy/edit)
// • HTTP 200   → each URL is verified before inclusion
// • noindex    → pages with noindex meta or header are excluded
// • priority   → set by page type (homepage 1.0 → policy 0.3)
// • changefreq → set by page type

import { getAllPages } from '../lib/sitemap-pages';

// ─── SEO config per page type ─────────────────────────────────────────────────
const PAGE_CONFIG = {
  homepage: { priority: '1.0', changefreq: 'daily' },
  course: { priority: '0.9', changefreq: 'weekly' },
  city: { priority: '0.8', changefreq: 'weekly' },
  blog: { priority: '0.6', changefreq: 'monthly' },
  policy: { priority: '0.3', changefreq: 'yearly' },
  default: { priority: '0.5', changefreq: 'monthly' },
};

// ─── URL-level filters (applied before any HTTP request) ─────────────────────
const EXCLUDED_PATTERNS = [
  /[?&](page|utm_|session_id|fbclid|gclid)/i,
  /\/(admin|login|dashboard)\//i,
  /#/,
];

function shouldExclude(url) {
  return EXCLUDED_PATTERNS.some((re) => re.test(url));
}

// ─── HTTP 200 + noindex check ─────────────────────────────────────────────────
async function isIndexable(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual', // 301/302 → excluded
      headers: { 'User-Agent': 'LearnbaySitemapBot/1.0' },
      signal: AbortSignal.timeout(8000),
    });

    if (res.status !== 200) return false;

    const xRobots = res.headers.get('x-robots-tag') || '';
    if (/noindex/i.test(xRobots)) return false;

    const html = await res.text();
    // Match both attribute orderings of <meta name="robots" content="...noindex...">
    if (
      /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
    )
      return false;
    if (
      /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(
        html
      )
    )
      return false;

    return true;
  } catch {
    return false;
  }
}

// ─── XML builder ─────────────────────────────────────────────────────────────
// Escape any characters that are invalid inside XML <loc> tags
function xmlSafeUrl(url) {
  return url.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
}

function buildXml(entries) {
  const urlTags = entries
    .map(
      ({ loc, lastmod, changefreq, priority }) => `
  <url>
    <loc>${xmlSafeUrl(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlTags}
</urlset>`;
}

// ─── Next.js handler ──────────────────────────────────────────────────────────
function SitemapPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.learnbay.co'
  ).replace(/\/$/, '');

  // 1. Collect all candidate pages from the file system
  const allPages = await getAllPages();

  // 2. Drop URLs that match exclusion patterns
  const candidates = allPages.filter((p) => !shouldExclude(p.url));

  // 3. Verify each URL (HTTP 200 + noindex) in parallel batches of 10
  const BATCH = 10;
  const validEntries = [];

  for (let i = 0; i < candidates.length; i += BATCH) {
    const batch = candidates.slice(i, i + BATCH);
    const results = await Promise.all(
      batch.map(async (page) => {
        const fullUrl = page.url.startsWith('http')
          ? page.url
          : `${siteUrl}${page.url}`;
        const ok = await isIndexable(fullUrl);
        if (!ok) return null;

        const cfg = PAGE_CONFIG[page.type] || PAGE_CONFIG.default;
        return {
          loc: fullUrl,
          lastmod: page.lastmod,
          changefreq: cfg.changefreq,
          priority: cfg.priority,
        };
      })
    );
    validEntries.push(...results.filter(Boolean));
  }

  // 4. Stream XML response
  const xml = buildXml(validEntries);
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default SitemapPage;
