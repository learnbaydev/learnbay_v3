import Head from 'next/head';

import BlogHome from '@/components/Blog/home/BlogHome';
import { FEATURE_VIDEO, VIDEOS } from '@/components/Blog/home/homeData';
import { getAuthorHref } from '@/lib/blog/authors';
import { getBlogListing } from '@/lib/blog/listing';

const SITE = 'https://www.learnbay.co';
const CANONICAL = `${SITE}/blogs`;
const TITLE = 'Learnbay Blog: AI Career Guides, Reports & Roadmaps';
const DESCRIPTION =
  'AI and data science career guides, hiring reports and learning roadmaps for working professionals. Sourced data, clear next steps, free to read.';
const SOCIAL_DESCRIPTION =
  'Career guides, hiring reports and learning roadmaps for professionals moving into AI and data science. Free to read.';
const TWITTER_DESCRIPTION =
  'Career guides, hiring reports and learning roadmaps for professionals moving into AI and data science.';
const IMAGE_ALT = 'Learnbay blog: AI career guides, reports and roadmaps';
const KEYWORDS = [
  'AI career guides',
  'AI career roadmap',
  'data science roadmap',
  'AI hiring report India',
  'AI jobs report 2026',
  'GenAI learning path',
  'data science career guide',
  'AI skills to learn',
  'Learnbay blog',
];
const LOGO =
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png';
const ORG_ID = `${SITE}/#organization`;

const iso = (timestamp) =>
  timestamp ? new Date(timestamp).toISOString() : undefined;

// "6:45" → "PT6M45S", "1:38:39" → "PT1H38M39S".
const isoDuration = (clock) => {
  const [s = 0, m = 0, h = 0] = String(clock).split(':').map(Number).reverse();
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}${s}S`;
};

function buildSchema({ lead, posts }) {
  const allPosts = [lead, ...posts].filter(Boolean);
  const latest = Math.max(0, ...allPosts.map((post) => post.timestamp || 0));

  const organization = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Learnbay',
    url: SITE,
    logo: { '@type': 'ImageObject', url: LOGO },
    sameAs: [
      'https://www.linkedin.com/company/learnbay/',
      'https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA',
      'https://twitter.com/Learnbay',
      'https://www.facebook.com/learnbay/',
      'https://instagram.com/learnbayofficial',
    ],
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Learnbay', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: CANONICAL },
    ],
  };

  const itemList = {
    '@type': 'ItemList',
    '@id': `${CANONICAL}#guides`,
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${CANONICAL}/${post.slug}`,
      name: post.title,
    })),
  };

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': `${CANONICAL}#webpage`,
    url: CANONICAL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'WebSite', name: 'Learnbay', url: SITE },
    publisher: { '@id': ORG_ID },
    breadcrumb: { '@id': breadcrumb['@id'] },
    mainEntity: { '@id': itemList['@id'] },
    ...(lead?.image && { primaryImageOfPage: lead.image }),
  };

  const blog = {
    '@type': 'Blog',
    '@id': `${CANONICAL}#blog`,
    name: 'Learnbay Blog',
    url: CANONICAL,
    description: DESCRIPTION,
    inLanguage: 'en-IN',
    keywords: KEYWORDS.join(', '),
    publisher: { '@id': ORG_ID },
    ...(latest && { dateModified: iso(latest) }),
    blogPost: allPosts.map((post) => {
      const authorHref = getAuthorHref(post.author);
      return {
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${CANONICAL}/${post.slug}`,
        ...(post.description && { description: post.description }),
        ...(post.image && { image: post.image }),
        ...(post.timestamp && { datePublished: iso(post.timestamp) }),
        ...(post.author && {
          author: {
            '@type': 'Person',
            name: post.author,
            ...(authorHref && { url: `${SITE}${authorHref}` }),
          },
        }),
        publisher: { '@id': ORG_ID },
      };
    }),
  };

  const videos = [FEATURE_VIDEO, ...VIDEOS].map((video) => ({
    '@type': 'VideoObject',
    name: video.title,
    description: video.description || video.title,
    thumbnailUrl: [
      video.thumb,
      `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    ],
    uploadDate: video.uploadDate,
    duration: isoDuration(video.duration),
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: { '@id': ORG_ID },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      collectionPage,
      breadcrumb,
      itemList,
      blog,
      ...videos,
    ],
  };
}

const Blogs = (props) => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(', ')} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={CANONICAL} />
      <link
        rel="icon"
        href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Learnbay" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={SOCIAL_DESCRIPTION} />
      {props.lead?.image && (
        <>
          <meta property="og:image" content={props.lead.image} />
          <meta property="og:image:alt" content={IMAGE_ALT} />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Learnbay" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
      {props.lead?.image && (
        <>
          <meta name="twitter:image" content={props.lead.image} />
          <meta name="twitter:image:alt" content={IMAGE_ALT} />
        </>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSchema(props)),
        }}
      />
    </Head>

    <BlogHome {...props} />
  </>
);

export async function getStaticProps() {
  return { props: getBlogListing() };
}

export default Blogs;
