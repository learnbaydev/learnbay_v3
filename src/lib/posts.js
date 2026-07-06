// Data access for the blog CMS.
//
// Two stores, per the approved design:
//   - MongoDB `posts` collection: every non-published (draft/in_review/
//     changes_requested/unpublished) working doc + workflow metadata.
//   - src/blog/<slug>.md files: the PUBLISHED set, served by the existing
//     renderer. The 21 legacy posts live only as files (no DB doc).
//
// This module centralizes collection access, the frontmatter contract, and the
// published-file helpers. The DB<->file handoff itself lives in publish.js.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/lib/mongodb';
import { slugify } from '@/lib/markdown';
import { STATUS, FRONTMATTER_KEYS } from '@/lib/blogConstants';

export const BLOG_DIR = path.join(process.cwd(), 'src/blog');

// Re-exported so existing server-side imports (`from '@/lib/posts'`) keep working.
export { STATUS, FRONTMATTER_KEYS };

// Re-exported under the old name so callers/tests reading the retired API still
// have one slug rule.
export const sanitizeSlug = slugify;

// ---- collections ----------------------------------------------------------

export async function getDb() {
  const { db } = await connectToDatabase();
  return db;
}

export async function postsCollection() {
  return (await getDb()).collection('posts');
}

export async function usersCollection() {
  return (await getDb()).collection('users');
}

// Create the indexes described in the plan. Idempotent — safe to call on boot
// or from the seed script.
export async function ensureIndexes() {
  const posts = await postsCollection();
  await posts.createIndex({ slug: 1 }, { unique: true });
  await posts.createIndex({ status: 1, updatedAt: -1 });
  await posts.createIndex({ authorId: 1, status: 1 });
  const users = await usersCollection();
  await users.createIndex({ email: 1 }, { unique: true });
}

export function toObjectId(id) {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

// ---- frontmatter <-> markdown ---------------------------------------------

// Pick only the frontmatter keys that have a value, preserving order.
export function buildFrontmatter(doc) {
  const fm = {};
  for (const key of FRONTMATTER_KEYS) {
    const v = doc[key];
    if (v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)) fm[key] = v;
  }
  if (!fm.title) fm.title = doc.title || doc.slug || 'Untitled';
  return fm;
}

// Serialize a post doc to file contents (frontmatter + markdown body).
export function toMarkdown(doc) {
  return matter.stringify(doc.content || '', buildFrontmatter(doc));
}

// Parse a .md file into { frontmatter, content }.
export function parseMarkdown(raw) {
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

// ---- published-file helpers (the PUBLISHED store) -------------------------

function slugToPath(slug) {
  return path.join(BLOG_DIR, `${slug}.md`);
}

export function publishedExists(slug) {
  return fs.existsSync(slugToPath(slug));
}

export function listPublishedSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((n) => n.endsWith('.md'))
    .map((n) => n.replace(/\.md$/, ''));
}

// Lightweight listing for the /blogs index and sitemap: slug + frontmatter +
// file mtime (used as sitemap lastmod). Reads are cheap (21 small files).
export function listPublished() {
  return listPublishedSlugs()
    .map((slug) => {
      try {
        const file = slugToPath(slug);
        const { frontmatter } = parseMarkdown(fs.readFileSync(file, 'utf8'));
        return { slug, frontmatter, mtime: fs.statSync(file).mtime };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

export function readPublished(slug) {
  if (!publishedExists(slug)) return null;
  const { frontmatter, content } = parseMarkdown(fs.readFileSync(slugToPath(slug), 'utf8'));
  return { slug, frontmatter, content };
}

export function writePublishedFile(doc) {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(slugToPath(doc.slug), toMarkdown(doc), 'utf8');
}

export function deletePublishedFile(slug) {
  if (publishedExists(slug)) fs.unlinkSync(slugToPath(slug));
}

// ---- posts collection CRUD ------------------------------------------------

export async function findPostById(id) {
  const _id = toObjectId(id);
  if (!_id) return null;
  return (await postsCollection()).findOne({ _id });
}

export async function findPostBySlug(slug) {
  return (await postsCollection()).findOne({ slug });
}

// Does this slug collide anywhere (working DB doc OR published file)?
export async function slugTaken(slug) {
  if (publishedExists(slug)) return true;
  return Boolean(await findPostBySlug(slug));
}

export async function listPosts({ authorId, status, mine } = {}) {
  const query = {};
  if (status) query.status = status;
  if (mine && authorId) query.authorId = toObjectId(authorId);
  return (await postsCollection())
    .find(query)
    .sort({ updatedAt: -1 })
    .toArray();
}
