// Mirrors published blog files into git via the GitHub Contents API, so every
// publish/unpublish lands in the repo's history (attributed to the author) —
// without touching the running site. Pushing does NOT trigger a deploy here;
// the post is already live via the runtime .md write + ISR revalidation.
//
// Everything is BEST-EFFORT: a git failure must never break publishing. Callers
// get { ok, skipped?, error? } and surface a warning; the prebuild reconcile
// (scripts/sync-blog-files.mjs) heals any drift on the next build.
//
// Env:
//   GITHUB_TOKEN   fine-grained PAT, Contents: Read & Write on the repo (required)
//   GITHUB_REPO    default "learnbaydev/learnbay_v3"
//   GITHUB_BRANCH  default "prod"

const API = 'https://api.github.com';
const REPO = process.env.GITHUB_REPO || 'learnbaydev/learnbay_v3';
const BRANCH = process.env.GITHUB_BRANCH || 'prod';

// Read the token lazily so the module is import-safe without it.
const token = () => process.env.GITHUB_TOKEN;

export function gitConfigured() {
  return Boolean(token() && REPO);
}

async function gh(path, options = {}) {
  return fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });
}

// Current blob sha for a path on the target branch, or null if it doesn't exist.
async function getSha(path) {
  const res = await gh(`/repos/${REPO}/contents/${path}?ref=${encodeURIComponent(BRANCH)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  return Array.isArray(data) ? null : data.sha;
}

// Attribute the commit to the CMS user when their email is usable.
function authorOf(user) {
  const email = user?.email;
  if (email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { name: user.name || email, email };
  }
  return null;
}

async function write(path, body) {
  return gh(`/repos/${REPO}/contents/${path}`, { method: 'PUT', body: JSON.stringify(body) });
}

// Create/update a file. Retries once on a sha conflict (concurrent edit).
export async function commitFile({ path, content, message, user }) {
  if (!gitConfigured()) return { ok: false, skipped: true };
  try {
    const author = authorOf(user);
    const base = {
      message,
      branch: BRANCH,
      content: Buffer.from(content, 'utf8').toString('base64'),
      ...(author ? { author, committer: author } : {}),
    };

    let sha = await getSha(path);
    let res = await write(path, { ...base, ...(sha ? { sha } : {}) });

    if (res.status === 409 || res.status === 422) {
      sha = await getSha(path); // stale sha — refetch and retry once
      res = await write(path, { ...base, ...(sha ? { sha } : {}) });
    }
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return { ok: true, branch: BRANCH };
  } catch (err) {
    console.warn('[gitContent] commit failed:', err?.message || err);
    return { ok: false, error: err?.message || String(err) };
  }
}

// Delete a file. A missing file is treated as success (already gone).
export async function deleteFile({ path, message, user }) {
  if (!gitConfigured()) return { ok: false, skipped: true };
  try {
    const sha = await getSha(path);
    if (!sha) return { ok: true, alreadyAbsent: true };
    const author = authorOf(user);
    const res = await gh(`/repos/${REPO}/contents/${path}`, {
      method: 'DELETE',
      body: JSON.stringify({ message, branch: BRANCH, sha, ...(author ? { author, committer: author } : {}) }),
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return { ok: true, branch: BRANCH };
  } catch (err) {
    console.warn('[gitContent] delete failed:', err?.message || err);
    return { ok: false, error: err?.message || String(err) };
  }
}

export function blogFilePath(slug) {
  return `src/blog/${slug}.md`;
}
