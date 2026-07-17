// /api/posts/check-slug  POST { slug, ignoreId? } -> { slug, url, available, message? }
//
// Live availability check for a post's FINAL blog URL. Guards against both a
// published .md and another working doc using the same slug. `ignoreId` is the
// post being edited, so it never conflicts with itself.

import { requireRole, ROLES } from '@/lib/auth';
import { sanitizeSlug, slugConflict } from '@/lib/posts';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const slug = sanitizeSlug((req.body && req.body.slug) || '');
  if (!slug) {
    return res.status(200).json({ slug: '', available: false, message: 'Add a title to generate the URL.' });
  }
  const conflict = await slugConflict(slug, req.body?.ignoreId);
  return res.status(200).json({
    slug,
    url: `/blogs/${slug}`,
    available: !conflict.taken,
    where: conflict.where,
    message: conflict.message,
  });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
