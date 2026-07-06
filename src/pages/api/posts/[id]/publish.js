// POST /api/posts/[id]/publish — ADMIN publishes/republishes a working doc
// directly (e.g. an unpublished post going back live, or an admin fast-track).
// Editorial accept-and-publish goes through /review instead.

import { requireRole, ROLES } from '@/lib/auth';
import { STATUS, findPostById } from '@/lib/posts';
import { canTransition } from '@/lib/postWorkflow';
import { publishPost } from '@/lib/publish';
import { revalidateBlog } from '@/lib/revalidate';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const post = await findPostById(req.query.id);
  if (!post) return res.status(404).json({ error: 'Post not found.' });

  const check = canTransition(req.user, post.status, STATUS.PUBLISHED);
  if (!check.ok) return res.status(409).json({ error: check.reason });

  try {
    await publishPost(post);
  } catch (err) {
    return res.status(500).json({ error: `Publish failed: ${err.message}` });
  }
  const revalidated = await revalidateBlog(res, post.slug);
  return res.status(200).json({ ok: true, url: `/blogs/${post.slug}`, revalidated });
}

export default requireRole([ROLES.ADMIN], handler);
