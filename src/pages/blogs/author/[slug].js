import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Navbar from '@/components/Global/Navbar/Navbar';
import AuthorCard from '@/components/Blog/AuthorCard';
import { AUTHORS, getAuthorBySlug } from '@/lib/blog/authors';
import { getPostsByAuthor } from '@/lib/blog/posts';
import styles from '@/components/Blog/AuthorPage.module.css';

const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

const FALLBACK_THUMB =
  'https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp';

const AuthorProfile = ({ author, posts }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  if (!author) return <div>404 - Author Not Found</div>;

  const canonical = `https://www.learnbay.co/blogs/author/${author.slug}`;

  return (
    <>
      <Head>
        <title>{`${author.name} | Learnbay Blog`}</title>
        <meta name="description" content={author.bio} />
        <link rel="canonical" href={canonical} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${author.name} | Learnbay Blog`} />
        <meta property="og:description" content={author.bio} />
        <meta property="og:image" content={author.photo} />
        <meta property="og:url" content={canonical} />

        {/* Person schema ties the byline on each post to a real profile. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: author.name,
              description: author.bio,
              image: author.photo,
              url: canonical,
              ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
              worksFor: { '@type': 'Organization', name: 'Learnbay' },
            }),
          }}
        />
      </Head>

      <Navbar popup dataScience interstedInHide />

      <div className={styles.page}>
        <div className={styles.wrap}>
          <Link href="/blogs/authors" className={styles.back}>
            ← All authors
          </Link>

          <AuthorCard author={author} postCount={posts.length} />

          <h2 className={styles.postsHead}>
            {posts.length
              ? `Articles by ${author.name}`
              : `No articles by ${author.name} yet`}
          </h2>

          {posts.length ? (
            <div className={styles.posts}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className={styles.post}
                >
                  <img
                    className={styles.postThumb}
                    src={post.image || FALLBACK_THUMB}
                    alt={post.title}
                    loading="lazy"
                  />
                  <span className={styles.postBody}>
                    {post.category && (
                      <span className={styles.postCategory}>
                        {post.category}
                      </span>
                    )}
                    <span className={styles.postTitle}>{post.title}</span>
                    <span className={styles.postMeta}>
                      {[post.date, post.readTime].filter(Boolean).join(' · ')}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>
              Articles by this author will appear here.
            </p>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: AUTHORS.map((author) => ({ params: { slug: author.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) return { notFound: true };

  return { props: { author, posts: getPostsByAuthor(author.name) } };
}

export default AuthorProfile;
