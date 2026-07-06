// PATCH /api/admin/users/[id]  (ADMIN only)
//   body: { role?, active?, password? } — change role, (de)activate, reset password.

import bcrypt from 'bcryptjs';
import { requireRole, ROLES } from '@/lib/auth';
import { usersCollection, toObjectId } from '@/lib/posts';

const VALID_ROLES = [ROLES.ADMIN, ROLES.BLOGGER];

async function handler(req, res) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', ['PATCH']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const _id = toObjectId(req.query.id);
  if (!_id) return res.status(400).json({ error: 'Invalid id.' });

  const users = await usersCollection();
  const target = await users.findOne({ _id });
  if (!target) return res.status(404).json({ error: 'User not found.' });

  const { role, active, password } = req.body || {};
  const set = { updatedAt: new Date() };

  if (role !== undefined) {
    if (!VALID_ROLES.includes(role)) return res.status(400).json({ error: 'Invalid role.' });
    // Guard against removing the last active admin.
    if (target.role === ROLES.ADMIN && role !== ROLES.ADMIN) {
      const admins = await users.countDocuments({ role: ROLES.ADMIN, active: true });
      if (admins <= 1) return res.status(409).json({ error: 'Cannot demote the last active admin.' });
    }
    set.role = role;
  }
  if (active !== undefined) {
    if (target.role === ROLES.ADMIN && active === false) {
      const admins = await users.countDocuments({ role: ROLES.ADMIN, active: true });
      if (admins <= 1) return res.status(409).json({ error: 'Cannot deactivate the last active admin.' });
    }
    set.active = Boolean(active);
  }
  if (password !== undefined) {
    if (String(password).length < 8) return res.status(400).json({ error: 'Password too short.' });
    set.passwordHash = await bcrypt.hash(String(password), 10);
  }

  await users.updateOne({ _id }, { $set: set });
  return res.status(200).json({ ok: true });
}

export default requireRole([ROLES.ADMIN], handler);
