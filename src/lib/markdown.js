// Shared markdown helpers for the blog CMS.
//
// The published renderer (src/pages/blogs/[slug].js) keeps its own copy of the
// heading-id logic to guarantee zero SEO drift; this module is used by the new
// CMS surfaces (composer preview, /blogs index) so they derive slugs, ids, and
// the table of contents identically to the renderer.

// Slug rule shared with the API's sanitizeSlug — filenames must be safe and
// cannot escape src/blog (no path traversal).
export function slugify(raw) {
  if (typeof raw !== 'string') return '';
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Heading-id derivation identical to the renderer's `extractText`, so preview
// anchors match the published page.
export function headingId(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Same regex scan the renderer's getStaticProps uses to build the TOC.
export function extractHeadings(content) {
  const headings = [];
  String(content || '').replace(/^(#{1,6})\s+(.*)$/gm, (match, hashes, rawText) => {
    const text = rawText.replace(/[*_~`]/g, '');
    headings.push({ id: headingId(text), text, level: hashes.length });
    return match;
  });
  return headings;
}

// Rough read-time estimate (200 wpm) for authoring convenience.
export function estimateReadTime(content) {
  const words = String(content || '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}
