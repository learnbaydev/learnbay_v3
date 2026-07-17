// Reconcile src/blog/*.md against MongoDB — the safety net that stops git from
// undoing the CMS.
//
//   published   in Mongo -> write   src/blog/<slug>.md   (restores CMS posts a
//                                                          stale checkout lacks)
//   unpublished in Mongo -> delete  src/blog/<slug>.md   (stops a git checkout
//                                                          resurrecting a post)
//   not in Mongo         -> LEFT ALONE (the legacy posts keep working; no
//                                       migration required)
//
// Runs automatically before every `npm run build` (prebuild), and manually via
// `npm run blog:sync`. Fails loudly if Mongo is unreachable so a DB outage can
// never silently republish something you unpublished. Escape: SKIP_BLOG_SYNC=1.

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import matter from 'gray-matter';
import { MongoClient } from 'mongodb';

dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local', override: true });

if (process.env.SKIP_BLOG_SYNC === '1') {
  console.log('[blog:sync] SKIP_BLOG_SYNC=1 — skipping reconcile.');
  process.exit(0);
}

const BLOG_DIR = path.join(process.cwd(), 'src/blog');
const { MONGODB_URI } = process.env;

// Must mirror src/lib/blogConstants.js
const FRONTMATTER_KEYS = [
  'title', 'Stitle', 'description', 'keywords', 'date', 'author', 'readTime',
  'image', 'imagephone', 'alt', 'publishedDate', 'canonicalUrl', 'authorUrl', 'faqs',
];

function toMarkdown(doc) {
  const fm = {};
  for (const key of FRONTMATTER_KEYS) {
    const v = doc[key];
    if (v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)) fm[key] = v;
  }
  if (!fm.title) fm.title = doc.title || doc.slug || 'Untitled';
  if (!fm.imagephone && fm.image) fm.imagephone = fm.image;
  return matter.stringify(doc.content || '', fm);
}

if (!MONGODB_URI) {
  console.error('[blog:sync] MONGODB_URI is not set. The build cannot verify which posts are published.');
  console.error('            Set MONGODB_URI, or re-run with SKIP_BLOG_SYNC=1 if you accept the risk.');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);
let wrote = 0;
let removed = 0;

try {
  await client.connect();
  const posts = client.db('learnbay').collection('posts');
  const docs = await posts.find({ status: { $in: ['published', 'unpublished'] } }).toArray();

  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  for (const doc of docs) {
    if (!doc.slug) continue;
    const file = path.join(BLOG_DIR, `${doc.slug}.md`);

    if (doc.status === 'published') {
      const next = toMarkdown(doc);
      const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
      if (current !== next) {
        fs.writeFileSync(file, next, 'utf8');
        wrote += 1;
        console.log(`[blog:sync] wrote   ${doc.slug}.md (published)`);
      }
    } else if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      removed += 1;
      console.log(`[blog:sync] removed ${doc.slug}.md (unpublished)`);
    }
  }

  const live = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).length;
  console.log(`[blog:sync] done — ${wrote} written, ${removed} removed, ${live} published file(s) on disk.`);
} catch (err) {
  console.error('[blog:sync] FAILED:', err.message);
  console.error('            Refusing to build with an unverified blog state.');
  process.exitCode = 1;
} finally {
  await client.close();
}
