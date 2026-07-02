// src/pages/blog-composer.jsx
//
// Route: /blog-composer
// Internal authoring tool — loaded client-side only (the editor uses
// browser APIs) and kept out of search indexes.

import dynamic from 'next/dynamic';
import Head from 'next/head';

const BlogComposer = dynamic(() => import('@/components/BlogComposer'), {
  ssr: false,
  loading: () => (
    <p style={{ padding: 40, fontFamily: 'system-ui, sans-serif', color: '#8a8f9c' }}>
      Loading composer…
    </p>
  ),
});

export default function BlogComposerPage() {
  return (
    <>
      <Head>
        <title>Blog Composer | Learnbay (internal)</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <BlogComposer />
    </>
  );
}
