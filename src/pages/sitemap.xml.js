// Dynamic /sitemap.xml.
//
// Non-blog URLs are preserved verbatim from src/lib/sitemap-base.xml (the former
// static public/sitemap.xml, minus its blog entries which are stripped here).
// Blog URLs are generated LIVE from the published .md files, so unpublishing a
// post removes it from the sitemap on the very next crawl — no rebuild.

import fs from 'fs';
import path from 'path';
import { listPublished } from '@/lib/posts';

const SITE = 'https://www.learnbay.co';
const BASE_FILE = path.join(process.cwd(), 'src/lib/sitemap-base.xml');

function nonBlogUrlBlocks() {
  let base = '';
  try {
    base = fs.readFileSync(BASE_FILE, 'utf8');
  } catch {
    return [];
  }
  const blocks = base.match(/<url>[\s\S]*?<\/url>/g) || [];
  // Drop any legacy blog entries; blogs are emitted live below.
  return blocks.filter((b) => !b.includes('/blogs/'));
}

function blogUrlBlocks() {
  return listPublished().map(({ slug, mtime }) => {
    const lastmod = new Date(mtime || Date.now()).toISOString();
    return `\t<url>\n\t\t<loc>${SITE}/blogs/${slug}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n\t\t<changefreq>monthly</changefreq>\n\t\t<priority>0.60</priority>\n\t</url>`;
  });
}

function buildSitemap() {
  const urls = [...nonBlogUrlBlocks(), ...blogUrlBlocks()];
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') +
    '\n</urlset>\n'
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=600');
  res.write(buildSitemap());
  res.end();
  return { props: {} };
}

// Never rendered — getServerSideProps writes the response directly.
export default function SiteMap() {
  return null;
}
