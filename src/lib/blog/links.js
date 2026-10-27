/**
 * Outbound-link policy for blog posts: everything that is not ours gets
 * `nofollow` and opens in a new tab.
 *
 * Applied in the renderer rather than written into each post, so a citation
 * added later cannot forget it.
 */

// Matches learnbay.co and any subdomain of it, and nothing that merely ends
// with the string (e.g. "notlearnbay.co").
const OWN_HOST = /(^|\.)learnbay\.co$/i;

export function isExternalHref(href) {
  if (typeof href !== 'string') return false;
  const value = href.trim();

  // Relative paths, in-page anchors, mailto: and tel: are ours by definition.
  if (!/^(https?:)?\/\//i.test(value)) return false;

  try {
    const url = new URL(value.startsWith('//') ? `https:${value}` : value);
    return !OWN_HOST.test(url.hostname);
  } catch {
    // An href we cannot parse is not something to hand link equity to either,
    // but neither is it safely rewritable — leave it untouched.
    return false;
  }
}

export function externalLinkProps(href) {
  return isExternalHref(href)
    ? { rel: 'nofollow noopener noreferrer', target: '_blank' }
    : {};
}

// Learnbay's brochure bucket. A post that links a PDF from here gets the lead
// form first; the file only downloads once the form has gone through.
const GATED_HOST = /^brochureslearnbay\.s3[.-]/i;

export function isGatedHref(href) {
  if (typeof href !== 'string') return false;
  try {
    return GATED_HOST.test(new URL(href.trim()).hostname);
  } catch {
    return false;
  }
}
