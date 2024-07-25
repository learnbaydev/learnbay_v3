// pages/api/sitemap.xml.js
import { getServerSideSitemap } from 'next-sitemap';
import { getAllPages } from '../../lib/getAllPages';

export async function getServerSideProps(ctx) {
  const pages = getAllPages();
  return getServerSideSitemap(ctx, pages);
}

export default function Sitemap() {
  // This page will be generated dynamically
}
