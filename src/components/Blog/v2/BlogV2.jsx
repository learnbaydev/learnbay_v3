import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';

import Navbar from '@/components/Global/Navbar/Navbar';
import Footer from '@/components/Global/Footer/Footer';
import remarkBlocks from '@/lib/blog/remarkBlocks';
import { slugToId } from '@/lib/blog/slug';

import Hero from './Hero';
import Rail from './Rail';
import BlockRenderer, { BlockDataProvider } from './BlockRenderer';
import RelatedArticles from './sections/RelatedArticles';
import Subscribe from './sections/Subscribe';
import FinalCta from './sections/FinalCta';
import styles from './BlogV2.module.css';

const ReactMarkdown = dynamic(() => import('react-markdown'));

// The design's two faces. Loaded here rather than in _app so v1 posts and the
// rest of the site keep shipping only Poppins.
const display = Plus_Jakarta_Sans({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--lb-font-display',
});

const text = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--lb-font-text',
});

// Plugin order matters: `remarkDirective` parses the `:::name` syntax into
// directive nodes, then `remarkBlocks` rewrites them into block divs.
const REMARK_PLUGINS = [remarkGfm, remarkDirective, remarkBlocks];
const REHYPE_PLUGINS = [rehypeRaw];

// Heading ids must match the ones `extractHeadings` derived server-side, or the
// rail's TOC links point nowhere.
const headingId = (children) => {
  const flatten = (node) =>
    typeof node === 'string'
      ? node
      : Array.isArray(node)
        ? node.map(flatten).join('')
        : typeof node?.props?.children !== 'undefined'
          ? flatten(node.props.children)
          : '';
  return slugToId(flatten(children).replace(/[*_~`]/g, '').trim());
};

const BlogV2 = ({ post }) => {
  const markdownComponents = useMemo(
    () => ({
      // Every directive arrives as a <div data-block>; BlockRenderer swaps in
      // the real component and passes plain divs straight through.
      div: BlockRenderer,
      h2: ({ node, children, ...props }) => (
        <h2 id={headingId(children)} {...props}>
          {children}
        </h2>
      ),
      h3: ({ node, children, ...props }) => (
        <h3 id={headingId(children)} {...props}>
          {children}
        </h3>
      ),
      table: ({ node, ...props }) => (
        <div className={styles.tableScroll}>
          <table {...props} />
        </div>
      ),
      img: ({ node, width, height, ...props }) => (
        <img loading="lazy" {...props} />
      ),
      iframe: ({ node, width, height, ...props }) => (
        <div className={styles.videoWrap}>
          <iframe loading="lazy" {...props} />
        </div>
      ),
    }),
    []
  );

  // The rail lists h2s and their h3 children; deeper levels would crowd it.
  const tocHeadings = useMemo(
    () => post.headings.filter((heading) => heading.level <= 3),
    [post.headings]
  );

  return (
    <div className={`${styles.root} ${display.variable} ${text.variable}`}>
      <Navbar popup dataScience interstedInHide />

      <Hero post={post} />

      <div className={styles.shell}>
        <article className={styles.prose}>
          <BlockDataProvider value={post.data}>
            <ReactMarkdown
              remarkPlugins={REMARK_PLUGINS}
              rehypePlugins={REHYPE_PLUGINS}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </BlockDataProvider>
        </article>

        <div className={styles.rail}>
          <Rail post={post} headings={tocHeadings} />
        </div>
      </div>

      <RelatedArticles posts={post.relatedPosts} />
      <Subscribe config={post.subscribe} />
      <FinalCta config={post.finalCta} />

      <Footer />
    </div>
  );
};

export default BlogV2;
