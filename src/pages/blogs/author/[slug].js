import Head from 'next/head';
import { useRouter } from 'next/router';

import AuthorProfile from '@/components/Blog/author/AuthorProfile';
import { AUTHORS, getAuthorBySlug } from '@/lib/blog/authors';
import { TOPICS, getAuthorGuides } from '@/lib/blog/listing';

const AuthorPage = ({ author, guides, topics, writers }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  if (!author) return <div>404 - Author Not Found</div>;

  const canonical = `https://www.learnbay.co/blogs/author/${author.slug}`;

  return (
    <>
      <Head>
        <title>{`${author.name} | Learnbay Blog`}</title>
        <meta name="description" content={author.about || author.bio} />
        <link rel="canonical" href={canonical} />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${author.name} | Learnbay Blog`} />
        <meta property="og:description" content={author.bio} />
        <meta
          property="og:image"
          content={
            author.portrait?.startsWith('http') ? author.portrait : author.photo
          }
        />
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

      <AuthorProfile
        author={author}
        guides={guides}
        topics={topics}
        writers={writers}
      />
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

  // Everyone with at least one guide, for the desk switcher.
  const writers = AUTHORS.map((writer) => ({
    slug: writer.slug,
    name: writer.name,
    count: getAuthorGuides(writer.name).length,
  })).filter((writer) => writer.count > 0);

  return {
    // Topics go through props: listing.js reads the filesystem, so it must only
    // be used here, never in render, or it gets pulled into the client bundle.
    props: {
      author,
      guides: getAuthorGuides(author.name),
      topics: TOPICS,
      writers,
    },
  };
}

export default AuthorPage;
