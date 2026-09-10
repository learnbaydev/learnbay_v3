import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { slugToId } from './slug';

export { slugToId };

export const BLOG_DIR = path.join(process.cwd(), 'src/blog');

// Every layout a post may opt into. An unknown or misspelled `layout` falls
// back to v1 rather than failing the build — `fallback: 'blocking'` means a bad
// value would otherwise surface as a 500 on a freshly requested path.
export const LAYOUTS = ['v1', 'v2'];
export const DEFAULT_LAYOUT = 'v1';

export function resolveLayout(value) {
  const layout = String(value || '').trim();
  return LAYOUTS.includes(layout) ? layout : DEFAULT_LAYOUT;
}

export function getPostSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

// A few posts embed <style> blocks with unscoped `table`/`td` rules. Once
// rendered they leak site-wide and fight the responsive post styles, so strip
// them and let the layout's stylesheet own post styling.
function stripAuthoredStyleTags(raw) {
  return raw.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
}

function extractHeadings(content) {
  const headings = [];
  content.replace(/^(#{1,6})\s+(.*)$/gm, (match, hashes, text) => {
    const rawText = text.replace(/[*_~`]/g, '').trim();
    headings.push({
      id: slugToId(rawText),
      text: rawText,
      level: hashes.length,
    });
    return match;
  });
  return headings;
}

function readRaw(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return matter(fs.readFileSync(filePath, 'utf8'));
}

// Card-sized summary of another post, used by the v2 rail and the related
// articles carousel. Returns null when the referenced slug does not exist so a
// stale reference in frontmatter drops the card instead of breaking the build.
export function getPostSummary(slug) {
  const file = readRaw(slug);
  if (!file) return null;
  const { data } = file;
  return {
    slug,
    title: data.title || 'Untitled',
    category: data.category || '',
    date: data.date || '',
    readTime: data.readTime || '',
    image: data.image || null,
    accent: data.accent || null,
  };
}

function summarize(slugs) {
  return (Array.isArray(slugs) ? slugs : [])
    .map((slug) => getPostSummary(slug))
    .filter(Boolean);
}

export function loadPost(slug) {
  const file = readRaw(slug);
  if (!file) return null;

  const { data, content: rawContent } = file;
  const content = stripAuthoredStyleTags(rawContent);
  const layout = resolveLayout(data.layout);

  const postData = {
    layout,
    title: data.title || 'Untitled',
    date: data.date || 'Unknown Date',
    author: data.author || 'Author',
    image: data.image || '/default-image.jpg',
    imagephone: data.imagephone || '/default-image.jpg',
    alt: data.alt || 'Default alt text',
    Stitle: data.Stitle || data.title || 'Untitled',
    description: data.description || 'Default description',
    readTime: data.readTime || 'Read time',
    keywords: data.keywords || 'default, keywords',
    content,
    headings: extractHeadings(content),
    faqs: data.faqs || [],
    authorUrl: data.authorUrl || 'https://www.learnbay.co/',
    canonicalUrl: data.canonicalUrl || `https://www.learnbay.co/blogs/${slug}`,
    publishedDate: data.publishedDate || data.date,
    publisherLogo:
      'https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp',
  };

  // v2-only frontmatter. Kept off the v1 payload so existing posts serialize
  // exactly the props they did before.
  if (layout === 'v2') {
    postData.eyebrow = data.eyebrow || '';
    postData.category = data.category || '';
    postData.titleHighlight = data.titleHighlight || '';
    postData.standfirst = data.standfirst || data.description || '';
    postData.caption = data.caption || '';
    postData.facts = data.facts || [];
    postData.authorInitials = data.authorInitials || initialsOf(postData.author);
    postData.authorBio = data.authorBio || '';
    postData.programCard = data.programCard || null;
    postData.finalCta = data.finalCta || null;
    postData.data = data.data || {};
    postData.editorsPicks = summarize(data.editorsPicks);
    postData.relatedPosts = summarize(data.relatedPosts);
  }

  return postData;
}

function initialsOf(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

// The "Next Blog" link at the foot of a v1 post: the next file in directory
// order, matching the behaviour the old page shipped.
export function getNextPost(slug) {
  const fileNames = fs.readdirSync(BLOG_DIR);
  const currentIndex = fileNames.findIndex(
    (file) => file.replace(/\.md$/, '') === slug
  );
  if (currentIndex === -1 || currentIndex + 1 >= fileNames.length) return null;

  const nextFile = fileNames[currentIndex + 1];
  const nextData = matter(
    fs.readFileSync(path.join(BLOG_DIR, nextFile), 'utf8')
  ).data;

  return {
    slug: nextFile.replace(/\.md$/, ''),
    title: nextData.title || 'Next Post',
  };
}
