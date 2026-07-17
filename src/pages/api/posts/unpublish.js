// POST /api/posts/unpublish — ADMIN takes a published post offline.
//   body: { slug }
// Works for CMS posts and legacy .md-only posts. Rehydrates a DB unpublished
// doc from the file, deletes the file, and revalidates so the URL 404s and drops
// out of /blogs and the sitemap immediately.

import { requireRole, ROLES } from '@/lib/auth';
import { STATUS, sanitizeSlug, publishedExists } from '@/lib/posts';
import { canTransition } from '@/lib/postWorkflow';
import { unpublishPost } from '@/lib/publish';
import { revalidateBlog } from '@/lib/revalidate';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const slug = sanitizeSlug((req.body && req.body.slug) || '');
  if (!slug) return res.status(400).json({ error: 'A slug is required.' });
  if (!publishedExists(slug)) {
    return res.status(404).json({ error: `No published post "${slug}".` });
  }

  const check = canTransition(req.user, STATUS.PUBLISHED, STATUS.UNPUBLISHED);
  if (!check.ok) return res.status(403).json({ error: check.reason });

  let result;
  try {
    result = await unpublishPost(slug, req.user);
  } catch (err) {
    return res.status(500).json({ error: `Unpublish failed: ${err.message}` });
  }
  const revalidated = await revalidateBlog(res, slug);
  return res.status(200).json({
    ok: true,
    status: STATUS.UNPUBLISHED,
    revalidated,
    gitWarning: result?.git?.ok === false && !result.git.skipped ? result.git.error : undefined,
  });
}

export default requireRole([ROLES.ADMIN], handler);
