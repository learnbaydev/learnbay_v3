// src/pages/api/blog/_guard.js
//
// The composer API touches the local filesystem, so it must NEVER run on a
// public production deployment (serverless filesystems are read-only/ephemeral
// anyway). It is allowed when:
//   - NODE_ENV !== 'production'  (local dev), OR
//   - BLOG_COMPOSER_ENABLED === 'true'  (explicit opt-in, e.g. an internal box)
//
// If you put this behind auth/middleware, you can relax this further.

export function isEnabled() {
  return (
    process.env.NODE_ENV !== 'production' ||
    process.env.BLOG_COMPOSER_ENABLED === 'true'
  );
}

// Writes the 403 and returns false when disabled; returns true when allowed.
export function assertEnabled(res) {
  if (isEnabled()) return true;
  res.status(403).json({
    error:
      'Blog composer API is disabled in production. Set BLOG_COMPOSER_ENABLED=true to enable.',
  });
  return false;
}
