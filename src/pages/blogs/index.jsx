// Public blog index. Enumerates the published .md files (the published set) and
// renders SEO-friendly cards. ISR-backed: revalidated on publish/unpublish so a
// post appears/disappears here in step with the sitemap.

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Global/Navbar/Navbar';
import { listPublished } from '@/lib/posts';

const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

const SITE = 'https://www.learnbay.co';

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog — Learnbay</title>
        <meta name="description" content="Latest articles from Learnbay on data science, AI, cloud, and careers." />
        <link rel="canonical" href={`${SITE}/blogs`} />
        <meta property="og:title" content="Learnbay Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/blogs`} />
      </Head>

      <Navbar popup dataScience interstedInHide />

      <main style={S.wrap}>
        <header style={S.header}>
          <h1 style={S.h1}>Learnbay Blog</h1>
          <p style={S.sub}>Insights on data science, AI, cloud, and building a tech career.</p>
        </header>

        <div style={S.grid}>
          {posts.map((p) => (
            <Link key={p.slug} href={`/blogs/${p.slug}`} style={S.card}>
              {p.image && <img src={p.image} alt={p.alt || p.title} style={S.thumb} loading="lazy" />}
              <div style={S.body}>
                <h2 style={S.cardTitle}>{p.title}</h2>
                {p.description && <p style={S.desc}>{p.description}</p>}
                <div style={S.meta}>
                  {p.author && <span>{p.author}</span>}
                  {p.readTime && <span>· {p.readTime}</span>}
                  {p.date && <span>· {p.date}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = listPublished()
    .map(({ slug, frontmatter, mtime }) => ({
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      image: frontmatter.image || '',
      alt: frontmatter.alt || '',
      author: frontmatter.author || '',
      readTime: frontmatter.readTime || '',
      date: frontmatter.date || '',
      _sort: new Date(mtime).getTime() || 0,
    }))
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort, ...rest }) => rest);

  return { props: { posts }, revalidate: 3600 };
}

const S = {
  wrap: { maxWidth: 1160, margin: '0 auto', padding: '90px 20px 60px', fontFamily: '"Segoe UI", system-ui, sans-serif' },
  header: { marginBottom: 32 },
  h1: { fontSize: '2.4rem', color: '#2372bc', margin: 0 },
  sub: { color: '#555', fontSize: '1.1rem', marginTop: 8 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 },
  card: { display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #eee', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', color: 'inherit', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' },
  thumb: { width: '100%', height: 180, objectFit: 'cover' },
  body: { padding: 18 },
  cardTitle: { fontSize: '1.2rem', color: '#222', margin: '0 0 8px', lineHeight: 1.35 },
  desc: { fontSize: '0.95rem', color: '#555', margin: '0 0 12px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' },
  meta: { fontSize: '0.8rem', color: '#999', display: 'flex', gap: 6, flexWrap: 'wrap' },
};
