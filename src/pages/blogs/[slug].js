import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { getPostSlugs, loadPost, getNextPost } from '@/lib/blog/posts';

// One layout per post, picked by the `layout` key in the markdown frontmatter.
// Loading them dynamically keeps a v1 post from shipping the v2 stylesheet and
// block library, and vice versa.
const BlogV1 = dynamic(() => import('@/components/Blog/v1/BlogV1'));
const BlogV2 = dynamic(() => import('@/components/Blog/v2/BlogV2'));

const normalizeDate = (dateStr) => {
  if (!dateStr) return null;
  if (dateStr.includes('T')) return dateStr;

  // Convert DD/MM/YYYY → ISO
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}T00:00:00+05:30`;
};

const Blog = ({ postData, nextPost }) => {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (!postData) return <div>404 - Blog Post Not Found</div>;

  const canonicalURL = `https://www.learnbay.co${router.asPath}`;

  return (
    <>
      {/* Shared across both layouts, so the SEO markup cannot drift between
          the old and new designs. */}
      <Head>
        <title>{postData.Stitle || 'Learnbay blogs'}</title>
        <meta
          name="description"
          content={postData.description || 'Welcome to Learnbay Blogs'}
        />
        <meta
          name="keywords"
          content={postData.keywords || 'default, keywords'}
        />
        <link rel="canonical" href={postData.canonicalUrl || canonicalURL} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        {/* OG Tags */}
        <meta
          property="og:url"
          content={postData.canonicalUrl || canonicalURL}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.Stitle || postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.image} />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content={postData.canonicalUrl || canonicalURL}
        />
        <meta
          name="twitter:title"
          content={postData.Stitle || postData.title}
        />
        <meta name="twitter:description" content={postData.description} />
        <meta name="twitter:image" content={postData.image} />

        {/* Author / Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': postData.canonicalUrl || canonicalURL,
              },
              headline: postData.title,
              image: postData.image,
              author: {
                '@type': 'Person',
                name: postData.author,
                url: postData.authorUrl,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Learnbay',
                logo: {
                  '@type': 'ImageObject',
                  url: postData.publisherLogo,
                },
              },
              datePublished: normalizeDate(postData.publishedDate),
            }),
          }}
        />

        {/* FAQ Schema — only injected if faqs exist */}
        {postData.faqs?.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: postData.faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}
      </Head>

      {postData.layout === 'v2' ? (
        <BlogV2 post={postData} />
      ) : (
        <BlogV1 postData={postData} nextPost={nextPost} />
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const postData = loadPost(params.slug);
    if (!postData) return { notFound: true };

    // The "Next Blog" link is a v1 affordance; v2 ends on its related-articles
    // carousel instead.
    const nextPost =
      postData.layout === 'v1' ? getNextPost(params.slug) : null;

    return { props: { postData, nextPost } };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
}

export default Blog;
