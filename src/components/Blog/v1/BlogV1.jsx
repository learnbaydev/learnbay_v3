import styles from './BlogV1.module.css';
import Footer from '@/components/Global/Footer/Footer';
import dynamic from 'next/dynamic';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';

import { Children, useEffect, useState, useRef, useMemo } from 'react';
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

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const BlogV1 = ({ postData, nextPost }) => {
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

  return (
    <>
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

export default BlogV1;
