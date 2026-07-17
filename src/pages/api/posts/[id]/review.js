// POST /api/posts/[id]/review — ADMIN decision on an in_review post.
//   body: { action: 'accept' | 'request_changes', comment? }
//   accept          -> publish (write .md, mark DB published) + revalidate
//   request_changes -> status changes_requested (+ required comment)
// Notifies the author either way.

import { requireRole, ROLES } from '@/lib/auth';
import { STATUS, findPostById, postsCollection, usersCollection, toObjectId } from '@/lib/posts';
import { canTransition, transitionStamp, makeComment } from '@/lib/postWorkflow';
import { publishPost } from '@/lib/publish';
import { revalidateBlog } from '@/lib/revalidate';
import { notifyPublished, notifyChangesRequested } from '@/lib/mailer';

async function authorEmail(post) {
  if (!post.authorId) return null;
  const users = await usersCollection();
  const u = await users.findOne({ _id: toObjectId(String(post.authorId)) });
  return u?.email || null;
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const { user } = req;
  const { action, comment } = req.body || {};
  const post = await findPostById(req.query.id);
  if (!post) return res.status(404).json({ error: 'Post not found.' });
  if (post.status !== STATUS.IN_REVIEW) {
    return res.status(409).json({ error: 'Post is not awaiting review.' });
  }
  const posts = await postsCollection();

  if (action === 'accept') {
    const check = canTransition(user, STATUS.IN_REVIEW, STATUS.PUBLISHED);
    if (!check.ok) return res.status(403).json({ error: check.reason });

    // Record reviewer + optional note, then hand off to the publish flow.
    const set = { reviewerId: toObjectId(user.userId), reviewedAt: new Date() };
    const update = { $set: set };
    if (comment) update.$push = { comments: makeComment(user, comment) };
    await posts.updateOne({ _id: post._id }, update);

    const fresh = await findPostById(req.query.id);
    let result;
    try {
      result = await publishPost(fresh, user);
    } catch (err) {
      return res.status(500).json({ error: `Publish failed: ${err.message}` });
    }
    const revalidated = await revalidateBlog(res, post.slug);

    const to = await authorEmail(post);
    if (to) notifyPublished({ to, postTitle: post.title || post.slug, slug: post.slug });

    return res.status(200).json({
      ok: true,
      status: STATUS.PUBLISHED,
      url: `/blogs/${post.slug}`,
      revalidated,
      // Post is live regardless; flag only if the git mirror didn't land.
      gitWarning: result?.git?.ok === false && !result.git.skipped ? result.git.error : undefined,
    });
  }

  if (action === 'request_changes') {
    if (!comment || !String(comment).trim()) {
      return res.status(400).json({ error: 'A comment is required when requesting changes.' });
    }
    const check = canTransition(user, STATUS.IN_REVIEW, STATUS.CHANGES_REQUESTED);
    if (!check.ok) return res.status(403).json({ error: check.reason });

    await posts.updateOne(
      { _id: post._id },
      {
        $set: transitionStamp(STATUS.CHANGES_REQUESTED, user),
        $push: { comments: makeComment(user, comment) },
      }
    );

    const to = await authorEmail(post);
    if (to) {
      notifyChangesRequested({
        to,
        postTitle: post.title || post.slug,
        reviewerName: user.name,
        comment,
        editUrl: `/admin/edit/${post._id}`,
      });
    }
    return res.status(200).json({ ok: true, status: STATUS.CHANGES_REQUESTED });
  }

  return res.status(400).json({ error: "action must be 'accept' or 'request_changes'." });
}

export default requireRole([ROLES.ADMIN], handler);
