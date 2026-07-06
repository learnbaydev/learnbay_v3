// Pure constants shared by client and server. This module must NOT import
// mongodb/fs (or anything that does), so it can be pulled into client bundles
// (component render uses ROLES/STATUS) without dragging Node-only deps along.

export const STATUS = {
  DRAFT: 'draft',
  IN_REVIEW: 'in_review',
  CHANGES_REQUESTED: 'changes_requested',
  PUBLISHED: 'published',
  UNPUBLISHED: 'unpublished',
};

export const ROLES = { ADMIN: 'ADMIN', BLOGGER: 'BLOGGER' };

// Full frontmatter contract — superset of what the old API managed, so faqs /
// publishedDate / canonicalUrl / authorUrl survive the DB<->file round-trip.
export const FRONTMATTER_KEYS = [
  'title',
  'Stitle',
  'description',
  'keywords',
  'date',
  'author',
  'readTime',
  'image',
  'imagephone',
  'alt',
  'publishedDate',
  'canonicalUrl',
  'authorUrl',
  'faqs',
];
