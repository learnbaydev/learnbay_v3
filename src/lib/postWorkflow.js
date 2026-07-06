// Editorial state machine — the single source of truth for who may move a post
// between states. API handlers MUST gate on canTransition/canEdit before
// touching the DB or files; never trust the client.

// Import from the client-safe constants module — NOT from posts.js — so this
// file (used in client component render via ROLES) never pulls mongodb/fs into
// the browser bundle.
import { STATUS, ROLES } from '@/lib/blogConstants';

export { ROLES };

export function isAdmin(user) {
  return user?.role === ROLES.ADMIN;
}

export function isAuthor(user, post) {
  return Boolean(user && post?.authorId && String(post.authorId) === String(user.userId));
}

// Content (body/frontmatter) is editable by the author only while draft or
// changes_requested; ADMIN may edit any working doc.
export function canEdit(user, post) {
  if (isAdmin(user)) return true;
  if (!isAuthor(user, post)) return false;
  return post.status === STATUS.DRAFT || post.status === STATUS.CHANGES_REQUESTED;
}

// Allowed transitions: { [from]: { [to]: 'admin' | 'author' | 'either' } }.
const TRANSITIONS = {
  [STATUS.DRAFT]: { [STATUS.IN_REVIEW]: 'author' },
  [STATUS.CHANGES_REQUESTED]: { [STATUS.IN_REVIEW]: 'author', [STATUS.DRAFT]: 'author' },
  [STATUS.IN_REVIEW]: {
    [STATUS.PUBLISHED]: 'admin',
    [STATUS.CHANGES_REQUESTED]: 'admin',
    [STATUS.DRAFT]: 'either', // withdraw
  },
  [STATUS.PUBLISHED]: { [STATUS.UNPUBLISHED]: 'admin' },
  [STATUS.UNPUBLISHED]: { [STATUS.IN_REVIEW]: 'author', [STATUS.PUBLISHED]: 'admin' },
};

// Returns { ok, reason }. `from` for a published legacy file (no DB doc) is
// passed explicitly by the caller as STATUS.PUBLISHED.
export function canTransition(user, from, to) {
  const rule = TRANSITIONS[from]?.[to];
  if (!rule) return { ok: false, reason: `Cannot move from ${from} to ${to}.` };
  if (rule === 'admin' && !isAdmin(user)) return { ok: false, reason: 'Admin only.' };
  if (rule === 'author' && !isAdmin(user) && user?.role !== ROLES.BLOGGER) {
    return { ok: false, reason: 'Not permitted.' };
  }
  return { ok: true };
}

// Timestamp/field patch for a transition — merged into the DB $set by callers.
export function transitionStamp(to, user) {
  const now = new Date();
  const patch = { status: to, updatedAt: now };
  if (to === STATUS.IN_REVIEW) patch.submittedAt = now;
  if (to === STATUS.CHANGES_REQUESTED || to === STATUS.PUBLISHED) {
    patch.reviewedAt = now;
    patch.reviewerId = user?.userId ? user.userId : null;
  }
  if (to === STATUS.UNPUBLISHED) patch.unpublishedAt = now;
  return patch;
}

// A comment subdocument for the editorial thread.
export function makeComment(user, body) {
  return {
    userId: user?.userId || null,
    name: user?.name || 'Unknown',
    role: user?.role || null,
    body: String(body || ''),
    createdAt: new Date(),
  };
}
