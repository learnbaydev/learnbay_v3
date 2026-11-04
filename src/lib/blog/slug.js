/**
 * Heading-id helper, kept in its own module because it runs on both sides.
 *
 * `posts.js` touches `fs` and `path` at module scope, and `package.json` stubs
 * both to `false` in the browser field — so importing this from a component
 * would drag a module into the client bundle that throws as soon as it loads.
 */
export function slugToId(text) {
  return String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export default slugToId;
