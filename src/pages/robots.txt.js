// pages/robots.txt.js
// Dynamically serves robots.txt and declares the sitemap location.

function RobotsPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.learnbay.co';

  const content = `User-agent: *
Allow: /

# Block internal / utility paths
Disallow: /admin/
Disallow: /login/
Disallow: /api/
Disallow: /*?*          # block all query-string URLs (UTM params, pagination, etc.)

Sitemap: ${siteUrl}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(content);
  res.end();

  return { props: {} };
}

export default RobotsPage;
