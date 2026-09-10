import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Global/Navbar/Navbar';
import AuthorCard from '@/components/Blog/AuthorCard';
import { AUTHORS } from '@/lib/blog/authors';
import { getPostsByAuthor } from '@/lib/blog/posts';
import styles from '@/components/Blog/AuthorPage.module.css';

const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

const CANONICAL = 'https://www.learnbay.co/blogs/authors';

const Authors = ({ authors }) => (
  <>
    <Head>
      <title>Blog Authors | Learnbay</title>
      <meta
        name="description"
        content="The writers behind Learnbay's blog — engineers, researchers and career specialists covering AI, data science and upskilling."
      />
      <link rel="canonical" href={CANONICAL} />
      <link
        rel="icon"
        href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
      />
      <meta property="og:title" content="Blog Authors | Learnbay" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL} />
    </Head>

    <Navbar popup dataScience interstedInHide />

    <div className={styles.page}>
      <div className={styles.wrap}>
        <Link href="/blogs/best-ai-courses-in-bangalore-with-placement-assistance" className={styles.back}>
          ← Back to blogs
        </Link>

        <h1 className={styles.title}>Our authors</h1>
        <p className={styles.intro}>
          The writers behind the Learnbay blog — covering AI, data science,
          engineering careers and what hiring managers actually test for.
        </p>

        <div className={styles.cards}>
          {authors.map((author) => (
            <AuthorCard
              key={author.slug}
              author={author}
              postCount={author.postCount}
              linkTo
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export async function getStaticProps() {
  // Busiest author first, so the index leads with the most active writer.
  const authors = AUTHORS.map((author) => ({
    ...author,
    postCount: getPostsByAuthor(author.name).length,
  })).sort((a, b) => b.postCount - a.postCount);

  return { props: { authors } };
}

export default Authors;
