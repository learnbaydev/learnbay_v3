import React from "react";
import Form from "../components/StaticPage/CareerPortal/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global//Footer/Footer";
import Image from "next/image";
import Head from "next/head";

const applyNow = () => {
  return (
    <div>
      <Head>
        <title>Apply Now</title>
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} careerForm={true} />
      <div className={styles.Wrapper}>
        <div className={styles.left}>
          <h6>Get a Better Future with Us</h6>
          <Form />
        </div>
        <div className={styles.right}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Submit-info.png"
            width="441"
            height="600"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default applyNow;
