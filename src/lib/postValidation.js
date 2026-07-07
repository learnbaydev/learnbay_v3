// Authoring-quality rules, shared by the editor (live UI) and the submit API
// (hard enforcement). Pure + client-safe: no mongodb/fs imports.

// Meta length targets. Char ranges are enforced everywhere; pixel ranges are
// advisory (measured only in the browser via canvas — see PostEditor).
export const META = {
  // SEO title (frontmatter `Stitle`, rendered as <title>).
  title: { minChars: 30, maxChars: 60, minPx: 200, maxPx: 600, font: '20px Arial' },
  // Meta description (frontmatter `description`).
  description: { minChars: 70, maxChars: 160, minPx: 430, maxPx: 920, font: '13px Arial' },
};

// Minimum links required in the body before a post may be submitted for review.
export const LINK_MIN = { internal: 1, outbound: 2 };

// Fields an author must fill before submitting (author/date/readTime are
// auto-populated, so they are not listed here as user-entered requirements).
export const REQUIRED_FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'Stitle', label: 'SEO title' },
  { key: 'description', label: 'Meta description' },
  { key: 'keywords', label: 'Keywords' },
  { key: 'image', label: 'Cover image URL' },
  { key: 'alt', label: 'Cover image alt text' },
  { key: 'content', label: 'Content' },
];

export function charCount(s = '') {
  return String(s || '').trim().length;
}

// Extract every href from markdown `[text](url)` and raw-HTML `<a href="url">`,
// then classify. Relative URLs and *.learnbay.co are internal; other absolute
// http(s) URLs are outbound. Anchors / mailto / tel are ignored.
export function countLinks(content = '') {
  const urls = [];
  const htmlRe = /<a\s[^>]*href\s*=\s*["']([^"']+)["']/gi;
  const mdRe = /\[[^\]]*\]\(\s*([^)\s]+)/g;
  let m;
  while ((m = htmlRe.exec(content))) urls.push(m[1]);
  while ((m = mdRe.exec(content))) urls.push(m[1]);

  let internal = 0;
  let outbound = 0;
  for (const raw of urls) {
    const u = String(raw).trim();
    if (!u || u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('tel:')) continue;
    if (!/^https?:\/\//i.test(u)) {
      internal += 1; // relative link, e.g. /courses or /blogs/x
      continue;
    }
    try {
      const host = new URL(u).hostname.replace(/^www\./, '');
      if (host === 'learnbay.co' || host.endsWith('.learnbay.co')) internal += 1;
      else outbound += 1;
    } catch {
      /* malformed URL — ignore */
    }
  }
  return { internal, outbound, total: internal + outbound };
}

// Full pre-submit check. Returns { ok, errors, links, meta }.
export function validateForReview(doc = {}) {
  const errors = [];

  for (const f of REQUIRED_FIELDS) {
    if (!String(doc[f.key] || '').trim()) errors.push(`${f.label} is required.`);
  }

  const titleChars = charCount(doc.Stitle);
  if (titleChars < META.title.minChars || titleChars > META.title.maxChars) {
    errors.push(`SEO title must be ${META.title.minChars}–${META.title.maxChars} characters (currently ${titleChars}).`);
  }

  const descChars = charCount(doc.description);
  if (descChars < META.description.minChars || descChars > META.description.maxChars) {
    errors.push(`Meta description must be ${META.description.minChars}–${META.description.maxChars} characters (currently ${descChars}).`);
  }

  const links = countLinks(doc.content);
  if (links.internal < LINK_MIN.internal) {
    errors.push(`Add at least ${LINK_MIN.internal} internal link (found ${links.internal}).`);
  }
  if (links.outbound < LINK_MIN.outbound) {
    errors.push(`Add at least ${LINK_MIN.outbound} outbound links (found ${links.outbound}).`);
  }

  return { ok: errors.length === 0, errors, links, meta: { titleChars, descChars } };
}
