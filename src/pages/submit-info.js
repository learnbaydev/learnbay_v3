import React from "react";
import Form from "../components/Global/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import Image from "next/image";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Counselling Form - Apply</title>
        <meta
          name="description"
          content="Submit your information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} />
      <div className={styles.Wrapper}>
        <div className={styles.left}>
          <h6>Apply For Counselling</h6>
          <Form dataScienceCounselling={true} radio={true} />
        </div>
        <div className={styles.right}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Submit-info.png"
            width="441"
            height="600"
          />
        </div>
      </div>
      <BottomBar radio={true} />
      <Footer />
    </div>
  );
};

export default sumbit;
