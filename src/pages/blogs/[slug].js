// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { useRouter } from 'next/router';
// import styles from './slug.module.css';
// import Footer from '@/components/Global/Footer/Footer';
// import dynamic from 'next/dynamic';
// import rehypeRaw from 'rehype-raw';
// import Link from 'next/link';

// import {
//   Children,
//   useEffect,
//   useState,
//   useRef,
//   useCallback,
//   useMemo,
// } from 'react';
// import Head from 'next/head';
// import Navbar from '@/components/Global/Navbar/Navbar';
// import { TestingCourseData } from '@/CityData/testingData/testingData';

// const RelatedCourses = dynamic(
//   () => import('@/components/testingComponent/RelatedCourses/RelatedCourses')
// );
// const ReactMarkdown = dynamic(() => import('react-markdown'));

// const extractText = (children) =>
//   Children.toArray(children)
//     .map((child) =>
//       typeof child === 'string'
//         ? child
//         : typeof child?.props?.children === 'string'
//           ? child.props.children
//           : Array.isArray(child?.props?.children)
//             ? child.props.children.join('')
//             : ''
//     )
//     .join('')
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w-]/g, '');

// const Blog = ({ postData, nextPost }) => {
//   const router = useRouter();
//   const [isTOCOpen, setIsTOCOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const tocRef = useRef(null);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth <= 861);
//     checkScreen();
//     const debouncedResize = debounce(checkScreen, 150);
//     window.addEventListener('resize', debouncedResize);
//     return () => window.removeEventListener('resize', debouncedResize);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobile &&
//         isTOCOpen &&
//         tocRef.current &&
//         !tocRef.current.contains(event.target)
//       ) {
//         setIsTOCOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobile, isTOCOpen]);

//   const markdownComponents = useMemo(
//     () => ({
//       h1: ({ node, ...props }) => {
//         const id = extractText(props.children);
//         return <h1 id={id} {...props} />;
//       },
//       h2: ({ node, ...props }) => {
//         const id = extractText(props.children);
//         return <h2 id={id} {...props} />;
//       },
//       h3: ({ node, ...props }) => {
//         const id = extractText(props.children);
//         return <h3 id={id} {...props} />;
//       },
//     }),
//     []
//   );

//   if (router.isFallback) return <div>Loading...</div>;
//   if (!postData) return <div>404 - Blog Post Not Found</div>;

//   const canonicalURL = `https://www.learnbay.co${router.asPath}`;

//   return (
//     <>
//       <Head>
//         <title>{postData.Stitle || 'Learnbay blogs'}</title>
//         <meta
//           name="description"
//           content={postData.description || 'Welcome to Learnbay Blogs'}
//         />
//         <meta property="og:title" content={postData.title} />
//         <meta
//           property="og:description"
//           content={postData.description || 'Welcome to Learnbay Blogs'}
//         />
//         <meta
//           name="keywords"
//           content={postData.keywords || 'default, keywords'}
//         />
//         <meta property="og:image" content={postData.image} />
//         <meta
//           name="twitter:card"
//           content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/blogs/blogcover.webp"
//         />
//         <link rel="canonical" href={canonicalURL} />
//         <link
//           rel="icon"
//           href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
//         />
//       </Head>

//       <Navbar popup dataScience interstedInHide />

//       <div className={styles.blogPage}>
//         <img
//           src={
//             isMobile && postData.imagephone
//               ? postData.imagephone
//               : postData.image
//           }
//           alt={postData.alt}
//           width="100%"
//           height="auto"
//           className={styles.blogHeader}
//         />

//         <div className={styles.metaContainer}>
//           <h1 className={styles.blogTitle}>{postData.title}</h1>
//           <div className={styles.metaInfo}>
//             <span className={styles.author}>By: {postData.author}</span>
//             <span className={styles.readTime}>
//               Read Time : {postData.readTime}
//             </span>
//             <span className={styles.date}>Publish on: {postData.date}</span>
//           </div>
//         </div>

//         <div className={styles.blogContainer}>
//           <div
//             ref={tocRef}
//             className={`${styles.sidebar} ${
//               isMobile ? styles.mobileSidebar : ''
//             }`}
//           >
//             {isMobile && (
//               <button
//                 className={styles.toggleButton}
//                 onClick={() => setIsTOCOpen(!isTOCOpen)}
//               >
//                 {isTOCOpen
//                   ? 'Hide Table of Contents ▲'
//                   : 'Show Table of Contents ▼'}
//               </button>
//             )}

//             {(!isMobile || isTOCOpen) && (
//               <div className={styles.tocContent}>
//                 <h2>Table of Contents</h2>
//                 <ul>
//                   {postData.headings.map((heading, index) => (
//                     <li key={index}>
//                       <a href={`#${heading.id}`}>
//                         {heading.text} <hr className={styles.hr} />{' '}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div className={styles.blogContent}>
//             <ReactMarkdown
//               rehypePlugins={[rehypeRaw]}
//               components={markdownComponents}
//             >
//               {postData.content}
//             </ReactMarkdown>

//             {nextPost && (
//               <div className={styles.nextPost}>
//                 <Link href={`/blogs/${nextPost.slug}`}>
//                   Next Blog: {nextPost.title}
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         <RelatedCourses relatedCourses={TestingCourseData[0].relatedCourses} />
//         <Footer />
//       </div>
//     </>
//   );
// };

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// export async function getStaticPaths() {
//   const blogDirectory = path.join(process.cwd(), 'src/blog');
//   const fileNames = fs.readdirSync(blogDirectory);

//   const paths = fileNames
//     .filter((fileName) => fileName.endsWith('.md'))
//     .map((fileName) => ({
//       params: { slug: fileName.replace(/\.md$/, '') },
//     }));

//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }) {
//   try {
//     const blogDirectory = path.join(process.cwd(), 'src/blog');
//     const filePath = path.join(blogDirectory, `${params.slug}.md`);

//     if (!fs.existsSync(filePath)) return { notFound: true };

//     const fileContent = fs.readFileSync(filePath, 'utf8');
//     const { data, content } = matter(fileContent);

//     const headings = [];
//     content.replace(/^(#{1,6})\s+(.*)$/gm, (match, p1, p2) => {
//       const rawText = p2.replace(/[*_~`]/g, '');
//       const id = rawText
//         .toLowerCase()
//         .replace(/\s+/g, '-')
//         .replace(/[^\w-]/g, '');
//       headings.push({ id, text: rawText, level: p1.length });
//       return match;
//     });

//     const postData = {
//       title: data.title || 'Untitled',
//       date: data.date || 'Unknown Date',
//       author: data.author || 'Author',
//       image: data.image || '/default-image.jpg',
//       imagephone: data.imagephone || '/default-image.jpg',
//       alt: data.alt || 'Default alt text',
//       Stitle: data.Stitle || data.title || 'Untitled',
//       description: data.description || 'Default description',
//       readTime: data.readTime || 'Read time',
//       keywords: data.keywords || 'default, keywords',
//       content,
//       headings,
//       faqs: data.faqs || [],
//       authorUrl: data.authorUrl || 'https://www.learnbay.co/',
//       canonicalUrl:
//         data.canonicalUrl || `https://www.learnbay.co/blogs/${params.slug}`,
//       publishedDate: data.publishedDate || data.date,
//       publisherLogo:
//         'https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp',
//     };

//     const fileNames = fs.readdirSync(blogDirectory);
//     const currentIndex = fileNames.findIndex(
//       (file) => file.replace(/\.md$/, '') === params.slug
//     );

//     let nextPost = null;
//     if (currentIndex !== -1 && currentIndex + 1 < fileNames.length) {
//       const nextFile = fileNames[currentIndex + 1];
//       const nextContent = fs.readFileSync(
//         path.join(blogDirectory, nextFile),
//         'utf8'
//       );
//       const nextData = matter(nextContent).data;
//       nextPost = {
//         slug: nextFile.replace(/\.md$/, ''),
//         title: nextData.title || 'Next Post',
//       };
//     }

//     return { props: { postData, nextPost } };
//   } catch (error) {
//     console.error('Error in getStaticProps:', error);
//     return { notFound: true };
//   }
// }

// export default Blog;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import styles from './slug.module.css';
import Footer from '@/components/Global/Footer/Footer';
import dynamic from 'next/dynamic';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

import {
  Children,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import Head from 'next/head';
import Navbar from '@/components/Global/Navbar/Navbar';
import { TestingCourseData } from '@/CityData/testingData/testingData';

const RelatedCourses = dynamic(
  () => import('@/components/testingComponent/RelatedCourses/RelatedCourses')
);
const ReactMarkdown = dynamic(() => import('react-markdown'));

const extractText = (children) =>
  Children.toArray(children)
    .map((child) =>
      typeof child === 'string'
        ? child
        : typeof child?.props?.children === 'string'
          ? child.props.children
          : Array.isArray(child?.props?.children)
            ? child.props.children.join('')
            : ''
    )
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

const Blog = ({ postData, nextPost }) => {
  const router = useRouter();
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tocRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 861);
    checkScreen();
    const debouncedResize = debounce(checkScreen, 150);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isTOCOpen &&
        tocRef.current &&
        !tocRef.current.contains(event.target)
      ) {
        setIsTOCOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isTOCOpen]);

  const normalizeDate = (dateStr) => {
    if (!dateStr) return null;

    // If already ISO, return as-is
    if (dateStr.includes('T')) return dateStr;

    // Convert DD/MM/YYYY → ISO
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}T00:00:00+05:30`;
  };

  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h1 id={id} {...props} />;
      },
      h2: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h2 id={id} {...props} />;
      },
      h3: ({ node, ...props }) => {
        const id = extractText(props.children);
        return <h3 id={id} {...props} />;
      },
      // Posts author wide, inline-styled tables. Give every one a horizontal
      // scroll container so narrow screens can reach the off-screen columns
      // instead of clipping them against body { overflow-x: hidden }.
      table: ({ node, ...props }) => (
        <div className={styles.tableScroll}>
          <table {...props} />
        </div>
      ),
      // Drop the authored width/height attributes so the stylesheet can scale
      // embedded images down to the column.
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

  if (router.isFallback) return <div>Loading...</div>;
  if (!postData) return <div>404 - Blog Post Not Found</div>;

  const canonicalURL = `https://www.learnbay.co${router.asPath}`;

  return (
    <>
      {/* ✅ UPDATED HEAD WITH OG + AUTHOR + FAQ SCHEMA */}
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

      <Navbar popup dataScience interstedInHide />

      <div className={styles.blogPage}>
        <img
          src={
            isMobile && postData.imagephone
              ? postData.imagephone
              : postData.image
          }
          alt={postData.alt}
          className={styles.blogHeader}
        />

        <div className={styles.metaContainer}>
          <h1 className={styles.blogTitle}>{postData.title}</h1>
          <div className={styles.metaInfo}>
            <span className={styles.author}>By: {postData.author}</span>
            <span className={styles.readTime}>
              Read Time : {postData.readTime}
            </span>
            <span className={styles.date}>Publish on: {postData.date}</span>
          </div>
        </div>

        <div className={styles.blogContainer}>
          <div
            ref={tocRef}
            className={`${styles.sidebar} ${
              isMobile ? styles.mobileSidebar : ''
            }`}
          >
            {isMobile && (
              <button
                className={styles.toggleButton}
                onClick={() => setIsTOCOpen(!isTOCOpen)}
              >
                {isTOCOpen
                  ? 'Hide Table of Contents ▲'
                  : 'Show Table of Contents ▼'}
              </button>
            )}

            {(!isMobile || isTOCOpen) && (
              <div className={styles.tocContent}>
                <h2>Table of Contents</h2>
                <ul>
                  {postData.headings.map((heading, index) => (
                    <li key={index}>
                      <a href={`#${heading.id}`}>
                        {heading.text} <hr className={styles.hr} />{' '}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.blogContent}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {postData.content}
            </ReactMarkdown>

            {nextPost && (
              <div className={styles.nextPost}>
                <Link href={`/blogs/${nextPost.slug}`}>
                  Next Blog: {nextPost.title}
                </Link>
              </div>
            )}
          </div>
        </div>

        <RelatedCourses relatedCourses={TestingCourseData[0].relatedCourses} />
        <Footer />
      </div>
    </>
  );
};

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export async function getStaticPaths() {
  const blogDirectory = path.join(process.cwd(), 'src/blog');
  const fileNames = fs.readdirSync(blogDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, '') },
    }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  try {
    const blogDirectory = path.join(process.cwd(), 'src/blog');
    const filePath = path.join(blogDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) return { notFound: true, revalidate: 60 };

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: rawContent } = matter(fileContent);

    // A few posts embed <style> blocks with unscoped `table`/`td` rules. Once
    // rendered they leak site-wide and fight the responsive styles below, so
    // strip them and let slug.module.css own post styling.
    const content = rawContent.replace(
      /<style\b[^>]*>[\s\S]*?<\/style>/gi,
      ''
    );

    const headings = [];
    content.replace(/^(#{1,6})\s+(.*)$/gm, (match, p1, p2) => {
      const rawText = p2.replace(/[*_~`]/g, '');
      const id = rawText
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      headings.push({ id, text: rawText, level: p1.length });
      return match;
    });

    const postData = {
      title: data.title || 'Untitled',
      date: data.date || 'Unknown Date',
      author: data.author || 'Author',
      image: data.image || '/default-image.jpg',
      imagephone: data.imagephone || '/default-image.jpg',
      alt: data.alt || 'Default alt text',
      Stitle: data.Stitle || data.title || 'Untitled',
      description: data.description || 'Default description',
      readTime: data.readTime || 'Read time',
      keywords: data.keywords || 'default, keywords',
      content,
      headings,
      faqs: data.faqs || [],
      authorUrl: data.authorUrl || 'https://www.learnbay.co/',
      canonicalUrl:
        data.canonicalUrl || `https://www.learnbay.co/blogs/${params.slug}`,
      publishedDate: data.publishedDate || data.date,
      publisherLogo:
        'https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp',
    };

    const fileNames = fs.readdirSync(blogDirectory);
    const currentIndex = fileNames.findIndex(
      (file) => file.replace(/\.md$/, '') === params.slug
    );

    let nextPost = null;
    if (currentIndex !== -1 && currentIndex + 1 < fileNames.length) {
      const nextFile = fileNames[currentIndex + 1];
      const nextContent = fs.readFileSync(
        path.join(blogDirectory, nextFile),
        'utf8'
      );
      const nextData = matter(nextContent).data;
      nextPost = {
        slug: nextFile.replace(/\.md$/, ''),
        title: nextData.title || 'Next Post',
      };
    }

    // ISR: keep static SEO/perf but let publish/unpublish + edits refresh without
    // a full rebuild. On-demand res.revalidate() (on publish/unpublish) updates
    // instantly; this interval is a self-heal net.
    return { props: { postData, nextPost }, revalidate: 3600 };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true, revalidate: 60 };
  }
}

export default Blog;
