// /api/posts
//   GET  -> working-store listing. ADMIN sees all; BLOGGER sees own only.
//           ?status=<state>  filter by workflow state
//           ?view=published  (ADMIN) list the published .md files instead
//   POST -> create a new draft (ADMIN/BLOGGER)
//
// Published posts are .md files (see publish.js); the DB holds only non-published
// working docs, except retained published-mirror docs (durability).

import { requireRole, ROLES } from '@/lib/auth';
import {
  STATUS,
  FRONTMATTER_KEYS,
  sanitizeSlug,
  postsCollection,
  listPosts,
  listPublished,
  slugConflict,
  toObjectId,
} from '@/lib/posts';

export function serializePost(doc) {
  if (!doc) return null;
  return {
    ...doc,
    _id: String(doc._id),
    id: String(doc._id),
    authorId: doc.authorId ? String(doc.authorId) : null,
    reviewerId: doc.reviewerId ? String(doc.reviewerId) : null,
  };
}

// Copy the managed frontmatter keys off a request body.
export function pickContent(body) {
  const out = {};
  for (const key of FRONTMATTER_KEYS) {
    if (body[key] !== undefined) out[key] = body[key];
  }
  out.content = typeof body.content === 'string' ? body.content : '';
  // No mobile image supplied → reuse the cover image, so both fields carry the
  // same URL everywhere (DB doc and the published .md frontmatter).
  if (!out.imagephone && out.image) out.imagephone = out.image;
  return out;
}

async function handler(req, res) {
  const { user } = req;

  if (req.method === 'GET') {
    // Admin view of the published files (to offer unpublish).
    if (req.query.view === 'published') {
      if (user.role !== ROLES.ADMIN) return res.status(403).json({ error: 'Forbidden.' });
      const published = listPublished().map(({ slug, frontmatter, mtime }) => ({
        slug,
        title: frontmatter.title || slug,
        author: frontmatter.author || '',
        status: STATUS.PUBLISHED,
        updatedAt: mtime,
      }));
      return res.status(200).json({ posts: published });
    }

    const opts = { status: req.query.status };
    if (user.role !== ROLES.ADMIN) {
      // Bloggers only ever see their own working docs.
      opts.mine = true;
      opts.authorId = user.userId;
    } else if (req.query.mine) {
      opts.mine = true;
      opts.authorId = user.userId;
    }
    const docs = await listPosts(opts);
    return res.status(200).json({ posts: docs.map(serializePost) });
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const slug = sanitizeSlug(body.slug || body.title || '');
    if (!slug) return res.status(400).json({ error: 'A title or slug is required.' });
    // The final blog URL must be unique across published files and working docs.
    const conflict = await slugConflict(slug);
    if (conflict.taken) return res.status(409).json({ error: conflict.message });

    const now = new Date();
    const doc = {
      slug,
      status: STATUS.DRAFT,
      ...pickContent(body),
      authorId: toObjectId(user.userId),
      reviewerId: null,
      comments: [],
      revisions: [],
      version: 1,
      createdAt: now,
      updatedAt: now,
    };
    if (!doc.title) doc.title = body.title || slug;

    const posts = await postsCollection();
    const result = await posts.insertOne(doc);
    return res.status(201).json({ post: serializePost({ ...doc, _id: result.insertedId }) });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} not allowed.` });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
