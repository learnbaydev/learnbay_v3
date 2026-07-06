// Server-side session helpers + the shared API guard the repo lacked.

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import { ROLES } from '@/lib/postWorkflow';

export { ROLES };

// Normalized current user, or null. Shape: { userId, email, name, role }.
export async function getSessionUser(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.userId) return null;
  return {
    userId: session.user.userId,
    email: session.user.email,
    name: session.user.name,
    role: session.user.role,
  };
}

// Higher-order wrapper for API routes. Usage:
//   export default requireRole(['ADMIN'], async (req, res) => { ... req.user ... })
// Pass no roles (or []) to require only that the caller is authenticated.
export function requireRole(roles, handler) {
  const allowed = Array.isArray(roles) ? roles : [];
  return async function guarded(req, res) {
    const user = await getSessionUser(req, res);
    if (!user) return res.status(401).json({ error: 'Not authenticated.' });
    if (allowed.length && !allowed.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden.' });
    }
    req.user = user;
    return handler(req, res);
  };
}

// For getServerSideProps on /admin pages: returns a redirect prop when the user
// is missing or lacks an allowed role, else null.
export async function guardPage(ctx, roles) {
  const user = await getSessionUser(ctx.req, ctx.res);
  if (!user) {
    return { redirect: { destination: `/login?callbackUrl=${encodeURIComponent(ctx.resolvedUrl || '/admin')}`, permanent: false } };
  }
  if (Array.isArray(roles) && roles.length && !roles.includes(user.role)) {
    return { redirect: { destination: '/admin', permanent: false } };
  }
  return null;
}
