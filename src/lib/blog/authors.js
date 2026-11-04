/**
 * Blog author registry.
 *
 * Bios and photos are taken verbatim from the existing author pages on
 * blog.learnbay.co; the founders' LinkedIn URLs come from the About Us page.
 * `slug` matches the old blog's `/author/<slug>` paths so redirects map 1:1.
 *
 * `name` must match the `author:` value in a post's frontmatter exactly — that
 * is what joins a post to its author.
 */
export const AUTHORS = [
  {
    slug: 'sonalisha-mohanty',
    name: 'Sonalisha Mohanty',
    photo:
      'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/sonalisha.webp',
    // Published as http:// on the old blog; stored as https here.
    linkedin: 'https://www.linkedin.com/in/sonalisha-mohanty-637578259',
    bio: 'Sonalisha is an MBA. But her tech enthusiasm has made her a passionate blogger on emerging tech innovations. Her keen interest in trending technologies and data management has attracted her to blogging and learning emerging innovations.',
  },
  {
    slug: 'nivin-biswas',
    name: 'Nivin Biswas',
    photo:
      'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/nivin.webp',
    linkedin: 'https://www.linkedin.com/in/nivin-biswas-7b3197178',
    bio: 'A tech blogger and researcher in artificial intelligence, data science, and full-stack development. He holds expertise in machine learning models, artificial intelligence, and scripting languages like Python and Java.',
  },
  {
    slug: 'manas-kochar',
    name: 'Manas Kochar',
    photo:
      'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/manas-kochar.webp',
    linkedin: 'https://www.linkedin.com/in/manas-kochar-7451ba127',
    bio: 'An enthusiastic blogger with a strong background in content creation and a hard-core interest in emerging technologies, mainly hot topics and happenings in AI and machine learning.',
  },
  {
    slug: 'abhishek-gupta',
    name: 'Abhishek Gupta',
    photo:
      'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Abhishek+Gupta+(1).jpg',
    linkedin: 'https://www.linkedin.com/in/abhishek-gupta-716552115/',
    role: 'Co-founder and CBO, Learnbay',
    bio: 'Abhishek Gupta is the co-founder and CBO of Learnbay. He holds 7+ years of experience in business development, with a strong background as an instructor in management training and technology. Additionally holding expertise in data science, machine learning, data structure, and system designing.',
  },
];

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug) || null;
}

export function getAuthorByName(name) {
  if (!name) return null;
  const wanted = String(name).trim().toLowerCase();
  return AUTHORS.find((author) => author.name.toLowerCase() === wanted) || null;
}

/**
 * The profile URL for a post's `author:` value, or null when that name has no
 * registry entry — so an unrecognised byline renders as plain text instead of
 * linking to a 404.
 */
export function getAuthorHref(name) {
  const author = getAuthorByName(name);
  return author ? `/blogs/author/${author.slug}` : null;
}

export function initialsOf(name) {
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
