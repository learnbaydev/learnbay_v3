// POST /api/posts/[id]/comments — add an editorial note (author or ADMIN).
// No state change; used for back-and-forth discussion on a working doc.

import { requireRole, ROLES } from '@/lib/auth';
import { findPostById, postsCollection } from '@/lib/posts';
import { isAdmin, isAuthor, makeComment } from '@/lib/postWorkflow';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const { user } = req;
  const body = (req.body && req.body.comment) || '';
  if (!String(body).trim()) return res.status(400).json({ error: 'Comment is empty.' });

  const post = await findPostById(req.query.id);
  if (!post) return res.status(404).json({ error: 'Post not found.' });
  if (!isAdmin(user) && !isAuthor(user, post)) {
    return res.status(403).json({ error: 'Forbidden.' });
  }

  const comment = makeComment(user, body);
  const posts = await postsCollection();
  await posts.updateOne({ _id: post._id }, { $push: { comments: comment }, $set: { updatedAt: new Date() } });
  return res.status(201).json({ comment: { ...comment, createdAt: comment.createdAt.toISOString() } });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
