// pages/sitemap.xml.js
// Dynamic XML sitemap — Next.js 14 Pages Router
//
// HOW IT WORKS:
// Reads from public/sitemap-manifest.json (built offline by the manifest
// script) and streams the XML response in <50ms. Zero HTTP calls at
// request time.
//
// AFTER EVERY DEPLOY — run:
//   npm run build:sitemap
// This re-verifies all pages and rewrites the manifest.
//
// WHAT CHANGED FROM THE ORIGINAL:
// ✓ HTTP verification moved offline — was causing 160s timeouts on cold cache
// ✓ priority removed — Google publicly confirmed it ignores this field
// ✓ changefreq removed — Google publicly confirmed it ignores this field
// ✓ Reads from manifest JSON instead of hitting every page per request
// ✓ Graceful fallback — returns empty valid XML if manifest not found yet
// ✓ Cache-Control preserved — 1h CDN cache + 24h stale-while-revalidate
//
// HREFLANG NOTE:
// hreflang (India / USA / UAE xhtml:link tags) is NOT implemented here yet.
// It will be added in the next phase. When ready, add:
//   xmlns:xhtml="http://www.w3.org/1999/xhtml" to <urlset>
//   getHreflangAlternates() + buildHreflangTags() functions
//   ${hreflangXml} injection inside buildXml()

import fs from 'fs';
import path from 'path';

const MANIFEST_PATH = path.join(
  process.cwd(),
  'public',
  'sitemap-manifest.json'
);

// ─── XML builder ─────────────────────────────────────────────────────────────

// Escape & in URLs for XML output.
// Avoids double-encoding entities that are already escaped.
function xmlSafeUrl(url) {
  return url.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
}

function buildXml(entries) {
  const urlTags = entries
    .map(
      ({ loc, lastmod }) => `
  <url>
    <loc>${xmlSafeUrl(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('');

  // NOTE: priority and changefreq are deliberately omitted.
  // Google has publicly confirmed it ignores both fields.
  // Only <lastmod> has a real effect — and only when the value
  // is accurate (derived from actual content changes, not deploy time).
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlTags}
</urlset>`;
}

// ─── Next.js handler ─────────────────────────────────────────────────────────

function SitemapPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  let entries = [];

  // Read the pre-built manifest — zero HTTP calls, <50ms response
  try {
    const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
    const manifest = JSON.parse(raw);

    entries = manifest.map((page) => ({
      loc: page.url,
      lastmod: page.lastmod,
    }));
  } catch (err) {
    // Manifest missing — most likely build:sitemap hasn't been run yet
    // after this deploy. Log clearly and return an empty valid sitemap.
    // Do NOT cache the empty response so the next request retries.
    console.error(
      '[sitemap.xml] Manifest not found — run: npm run build:sitemap'
    );
    console.error('[sitemap.xml]', err.message);

    const empty = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.write(empty);
    res.end();
    return { props: {} };
  }

  const xml = buildXml(entries);

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default SitemapPage;
