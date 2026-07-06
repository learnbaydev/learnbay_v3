// /api/admin/users  (ADMIN only)
//   GET  -> list users (no password hashes)
//   POST -> create a user { email, name, role, password }
// This is how BLOGGER/ADMIN accounts are provisioned (no public signup).

import bcrypt from 'bcryptjs';
import { requireRole, ROLES } from '@/lib/auth';
import { usersCollection } from '@/lib/posts';

const VALID_ROLES = [ROLES.ADMIN, ROLES.BLOGGER];

function publicUser(u) {
  return {
    id: String(u._id),
    email: u.email,
    name: u.name || '',
    role: u.role,
    active: u.active !== false,
    provider: u.provider || 'local',
    lastLoginAt: u.lastLoginAt || null,
  };
}

async function handler(req, res) {
  const users = await usersCollection();

  if (req.method === 'GET') {
    const list = await users.find({}, { projection: { passwordHash: 0 } }).sort({ createdAt: 1 }).toArray();
    return res.status(200).json({ users: list.map(publicUser) });
  }

  if (req.method === 'POST') {
    const { email, name, role, password } = req.body || {};
    const normEmail = String(email || '').trim().toLowerCase();
    if (!normEmail || !normEmail.includes('@')) {
      return res.status(400).json({ error: 'A valid email is required.' });
    }
    if (!VALID_ROLES.includes(role)) {
      return res.status(400).json({ error: `role must be one of ${VALID_ROLES.join(', ')}.` });
    }
    if (!password || String(password).length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }
    if (await users.findOne({ email: normEmail })) {
      return res.status(409).json({ error: 'A user with that email already exists.' });
    }

    const now = new Date();
    const doc = {
      email: normEmail,
      name: String(name || '').trim() || normEmail,
      role,
      active: true,
      provider: 'local',
      passwordHash: await bcrypt.hash(String(password), 10),
      createdAt: now,
      updatedAt: now,
    };
    const result = await users.insertOne(doc);
    return res.status(201).json({ user: publicUser({ ...doc, _id: result.insertedId }) });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} not allowed.` });
}

export default requireRole([ROLES.ADMIN], handler);
