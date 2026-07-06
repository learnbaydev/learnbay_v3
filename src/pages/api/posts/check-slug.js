// /api/posts/check-slug  POST { slug } -> { slug, available }
// Guards the unique slug across BOTH the DB working store and published files.

import { requireRole, ROLES } from '@/lib/auth';
import { sanitizeSlug, slugTaken } from '@/lib/posts';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const slug = sanitizeSlug((req.body && req.body.slug) || '');
  if (!slug) return res.status(400).json({ error: 'Invalid slug.', available: false });
  // Allow the caller to exclude their own current slug (editing case).
  const ignore = sanitizeSlug((req.body && req.body.ignore) || '');
  if (slug === ignore) return res.status(200).json({ slug, available: true });
  return res.status(200).json({ slug, available: !(await slugTaken(slug)) });
}

export default requireRole([ROLES.ADMIN, ROLES.BLOGGER], handler);
