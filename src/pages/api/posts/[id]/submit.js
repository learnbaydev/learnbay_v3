// POST /api/posts/[id]/submit — author (or ADMIN) submits a draft /
// changes_requested post for review. Notifies admins.

import { requireRole, ROLES } from '@/lib/auth';
import { STATUS, findPostById, postsCollection, usersCollection } from '@/lib/posts';
import { canTransition, isAuthor, isAdmin, transitionStamp } from '@/lib/postWorkflow';
import { notifySubmitted } from '@/lib/mailer';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const { user } = req;
  const post = await findPostById(req.query.id);
  if (!post) return res.status(404).json({ error: 'Post not found.' });
  if (!isAdmin(user) && !isAuthor(user, post)) {
    return res.status(403).json({ error: 'Not your post.' });
  }

  const check = canTransition(user, post.status, STATUS.IN_REVIEW);
  if (!check.ok) return res.status(409).json({ error: check.reason });

  const posts = await postsCollection();
  await posts.updateOne({ _id: post._id }, { $set: transitionStamp(STATUS.IN_REVIEW, user) });

  // Notify all active admins (best-effort).
  try {
    const users = await usersCollection();
    const admins = await users.find({ role: ROLES.ADMIN, active: true }).toArray();
    await Promise.all(
      admins
        .filter((a) => a.email)
        .map((a) =>
          notifySubmitted({
            to: a.email,
            postTitle: post.title || post.slug,
            authorName: user.name,
            reviewUrl: `/admin/review/${post._id}`,
          })
        )
    );
  } catch (err) {
    console.warn('[submit] admin notify failed:', err?.message || err);
  }

  return res.status(200).json({ ok: true, status: STATUS.IN_REVIEW });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
