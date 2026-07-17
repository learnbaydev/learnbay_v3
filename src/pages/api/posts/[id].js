// /api/posts/[id]
//   GET    -> fetch a working doc for editing (author or ADMIN)
//   PUT    -> save content/frontmatter; pushes a revision (canEdit only)
//   DELETE -> delete a draft (author on draft, or ADMIN)

import { requireRole, ROLES } from '@/lib/auth';
import { STATUS, findPostById, postsCollection, toObjectId, sanitizeSlug, slugConflict } from '@/lib/posts';
import { canEdit, isAdmin, isAuthor } from '@/lib/postWorkflow';
import { serializePost, pickContent } from './index';

async function handler(req, res) {
  const { user } = req;
  const post = await findPostById(req.query.id);
  if (!post) return res.status(404).json({ error: 'Post not found.' });

  const mayView = isAdmin(user) || isAuthor(user, post);

  if (req.method === 'GET') {
    if (!mayView) return res.status(403).json({ error: 'Forbidden.' });
    return res.status(200).json({ post: serializePost(post) });
  }

  if (req.method === 'PUT') {
    if (!canEdit(user, post)) {
      return res.status(403).json({ error: 'This post cannot be edited in its current state.' });
    }
    const content = pickContent(req.body || {});
    const now = new Date();

    // The slug IS the final blog URL: allow changing it while the post isn't
    // live, always verifying the URL is free first.
    const nextSlug = sanitizeSlug((req.body && req.body.slug) || '');
    if (nextSlug && nextSlug !== post.slug) {
      if (post.status === STATUS.PUBLISHED) {
        return res.status(409).json({
          error: `Cannot change the URL of a published post. Unpublish "${post.slug}" first, then change the slug.`,
        });
      }
      const conflict = await slugConflict(nextSlug, post._id);
      if (conflict.taken) return res.status(409).json({ error: conflict.message });
      content.slug = nextSlug;
    }

    const posts = await postsCollection();
    await posts.updateOne(
      { _id: post._id },
      {
        $set: { ...content, updatedAt: now, version: (post.version || 1) + 1 },
        $push: {
          revisions: {
            version: (post.version || 1) + 1,
            content: content.content,
            savedBy: toObjectId(user.userId),
            savedAt: now,
          },
        },
      }
    );
    const updated = await findPostById(req.query.id);
    return res.status(200).json({ post: serializePost(updated) });
  }

  if (req.method === 'DELETE') {
    const ownDraft = isAuthor(user, post) && post.status === STATUS.DRAFT;
    if (!isAdmin(user) && !ownDraft) {
      return res.status(403).json({ error: 'Only a draft can be deleted by its author.' });
    }
    const posts = await postsCollection();
    await posts.deleteOne({ _id: post._id });
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).json({ error: `Method ${req.method} not allowed.` });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
