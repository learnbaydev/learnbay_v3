import Head from 'next/head';

import BlogHome from '@/components/Blog/home/BlogHome';
import { getBlogListing } from '@/lib/blog/listing';

const CANONICAL = 'https://www.learnbay.co/blogs';
const TITLE =
  'Learnbay Blog: AI Course Comparisons, Hiring Data & Career Roadmaps';
const DESCRIPTION =
  'Comparison guides, hiring data and career roadmaps for working professionals moving into AI. Every number sourced, every ranking shows its method.';

const Blogs = (props) => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={CANONICAL} />
      <link
        rel="icon"
        href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
      />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL} />
      {props.lead?.image && (
        <meta property="og:image" content={props.lead.image} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Learnbay" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Learnbay Blog',
            url: CANONICAL,
            description: DESCRIPTION,
            publisher: { '@type': 'Organization', name: 'Learnbay' },
            blogPost: [props.lead, ...props.posts]
              .filter(Boolean)
              .map((post) => ({
                '@type': 'BlogPosting',
                headline: post.title,
                url: `${CANONICAL}/${post.slug}`,
                ...(post.timestamp && {
                  datePublished: new Date(post.timestamp).toISOString(),
                }),
                ...(post.author && {
                  author: { '@type': 'Person', name: post.author },
                }),
              })),
          }),
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
