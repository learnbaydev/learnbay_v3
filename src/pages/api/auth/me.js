// Current authenticated user, for client UI state.
import { requireRole } from '@/lib/auth';

export default requireRole([], async function handler(req, res) {
  return res.status(200).json({ user: req.user });
});
