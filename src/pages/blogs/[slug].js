import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import styles from "./slug.module.css";
import Footer from "@/components/Global/Footer/Footer";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Children, useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Global/Navbar/Navbar";
import RelatedCourses from "@/components/testingComponent/RelatedCourses/RelatedCourses";
import { TestingCourseData } from "@/CityData/testingData/testingData";

// Helper to extract clean heading text
const extractText = (children) => {
  return Children.toArray(children)
    .map((child) =>
      typeof child === "string"
        ? child
        : typeof child?.props?.children === "string"
        ? child.props.children
        : Array.isArray(child?.props?.children)
        ? child.props.children.join("")
        : ""
    )
    .join("")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

const Blog = ({ postData, nextPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!postData) {
    return <div>404 - Blog Post Not Found</div>;
  }

  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 861);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <Head>
        <title>{postData.Stitle} | My Blog</title>
        <meta
          name="description"
          content={postData.description || "Default description"}
        />
        <meta property="og:title" content={postData.title} />
        <meta
          property="og:description"
          content={postData.description || "Default description"}
        />
        <meta
          name="keywords"
          content={postData.keywords || "default, keywords"}
        />
        <meta property="og:image" content={postData.image} />
          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/blogs/placement-success-story-in-data-science"
        />
        <meta
          name="twitter:title"
          content={postData.title}
        
        />
        <meta
          name="twitter:description"
          content={postData.description || "Welcome to learnbay blogs"} />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/blogs/placement-success-story-in-data-science"
        />
      </Head>
         <Navbar popup={true} dataScience={true} interstedInHide={true} />
      <div className={styles.blogPage}>
        <div
          className={styles.blogHeader}
          style={{ backgroundImage: `url(${postData.image})` }}
        ></div>

        <div className={styles.metaContainer}>
          <h1 className={styles.blogTitle}>{postData.title}</h1>
          <div className={styles.metaInfo}>
            <span className={styles.author}>By: {postData.author}</span>
            <span className={styles.readTime}>Read Time : {postData.readTime}</span>
            <span className={styles.date}>Publish on: {postData.date}</span>
          </div>
        </div>

        <div className={styles.blogContainer}>
        <div className={`${styles.sidebar} ${isMobile ? styles.mobileSidebar : ''}`}>
  {isMobile && (
    <button className={styles.toggleButton} onClick={() => setIsTOCOpen(!isTOCOpen)}>
      {isTOCOpen ? 'Hide Table of Contents ▲' : 'Show Table of Contents ▼'}
    </button>
  )}

  {(!isMobile || isTOCOpen) && (
    <div className={styles.tocContent}>
      <h2>Table of Contents</h2>
      <ul>
        {postData.headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


          <div className={styles.blogContent}>
            <ReactMarkdown
              components={{
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
              }}
            >
              {postData.content}
            </ReactMarkdown>

            {nextPost && (
              <div className={styles.nextPost}>
                <Link href={`/blog/${nextPost.slug}`}>
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

export async function getStaticPaths() {
  const blogDirectory = path.join(process.cwd(), "src/blog");
  const fileNames = fs.readdirSync(blogDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    }));

  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  try {
    const blogDirectory = path.join(process.cwd(), "src/blog");
    const filePath = path.join(blogDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) {
      return { notFound: true };
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const headings = [];
    content.replace(/^(#{1,6})\s+(.*)$/gm, (match, p1, p2) => {
      const rawText = p2.replace(/[*_~`]/g, "");
      const id = rawText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      headings.push({ id, text: rawText, level: p1.length });
      return match;
    });

    const postData = {
      title: data.title || "Untitled",
      date: data.date || "Unknown Date",
      author: data.author || "author",
      image: data.image || "/default-image.jpg",
      Stitle: data.Stitle || data.title || "Untitled",
      description: data.description || "Default description",
      readTime: data.readTime || "read time",
      keywords: data.keywords || "default, keywords",
      content,
      headings,
    };

    const fileNames = fs.readdirSync(blogDirectory);
    const currentSlugIndex = fileNames.findIndex(
      (file) => file.replace(/\.md$/, "") === params.slug
    );

    let nextPost = null;
    if (currentSlugIndex !== -1 && currentSlugIndex + 1 < fileNames.length) {
      const nextPostFile = fileNames[currentSlugIndex + 1];
      const nextPostContent = fs.readFileSync(
        path.join(blogDirectory, nextPostFile),
        "utf8"
      );
      const nextPostData = matter(nextPostContent).data;

      nextPost = {
        slug: nextPostFile.replace(/\.md$/, ""),
        title: nextPostData.title || "Next Post",
      };
    }

    return {
      props: {
        postData,
        nextPost,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true }; 
  }
}


export default Blog;