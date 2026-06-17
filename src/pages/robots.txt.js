// pages/robots.txt.js
// Dynamically serves robots.txt.
//
// WHAT CHANGED FROM THE ORIGINAL:
// ✓ Disallow: /*?*  →  Disallow: /*?
//     /*?* is incorrect syntax. Trailing * is redundant and misfires
//     in some crawlers. /*? is the correct Google wildcard for blocking
//     all query-string URLs.
//
// ✓ Sitemap: /sitemap.xml  →  Sitemap: /sitemap_index.xml
//     Points to the segmented sitemap index rather than a single file.
//     Allows per-segment monitoring in GSC as the site scales.
//
// ✓ Utility / internal pages added to Disallow
//     These pages were excluded from the sitemap in code but NOT blocked
//     in robots.txt — Google could still crawl and index them via internal
//     links or external backlinks. Both defences are required.
//
// ✓ cloud&devops paths added to Disallow
//     Prevents crawl budget waste on old paths during the folder migration
//     window while Google processes the 301 redirects.
//
// ✓ Cache-Control added
//     robots.txt was previously uncacheable. 24h CDN cache is appropriate
//     since it changes rarely.
//
// ✓ Content-Type: charset=utf-8 added
//     Explicit charset prevents any client guessing the encoding.

function RobotsPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.learnbay.co'
  ).replace(/\/$/, ''); // strip trailing slash to prevent double-slash in Sitemap URL

  const content = `User-agent: *
Allow: /

# ── Core blocks ──────────────────────────────────────────────────────────────
Disallow: /admin/
Disallow: /login/
Disallow: /api/

# Block all query-string URLs (UTM params, session IDs, pagination etc.)
# Correct syntax is /*?  —  the trailing * in the original /*?* was redundant
# and may behave unexpectedly in non-Google crawlers.
Disallow: /*?

# ── Utility and conversion pages ─────────────────────────────────────────────
# These are excluded from the sitemap in code (sitemap-pages.js SKIP_EXACT)
# but must also be blocked here. Sitemap exclusion alone does not prevent
# Google from crawling and indexing a page it discovers via links.
Disallow: /Thank-you
Disallow: /NewThankYouCounselling
Disallow: /submit-info
Disallow: /enroll
Disallow: /loan-process
Disallow: /career-portal
Disallow: /career-apply-now
Disallow: /career-report
Disallow: /verify-certificate
Disallow: /referrals
Disallow: /organic
Disallow: /master-application
Disallow: /master-application-guwahati
Disallow: /resume-builder
Disallow: /degree-upgrade
Disallow: /learning-learnbay
Disallow: /learning-learnbay-select

# ── Legacy paths being migrated ───────────────────────────────────────────────
# cloud&devops folder is renamed to cloud-and-devops.
# 301 redirects for these paths live in next.config.js.
# Blocking here stops Googlebot spending crawl budget on them
# while it processes the redirects. Keep these permanently —
# removing them later has no downside, but the 301s must stay.
Disallow: /cloud&devops/
Disallow: /cloud%26devops/

# ── Internal / campaign paths ─────────────────────────────────────────────────
Disallow: /campaign/
Disallow: /reviews-old

# ── Sitemap ───────────────────────────────────────────────────────────────────
# Points to the sitemap index (segmented architecture).
# Multiple Sitemap: lines are valid if you want to register
# child sitemaps individually.
Sitemap: ${siteUrl}/sitemap_index.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    's-maxage=86400, stale-while-revalidate=604800'
  );
  res.write(content);
  res.end();

  return { props: {} };
}

export default RobotsPage;
