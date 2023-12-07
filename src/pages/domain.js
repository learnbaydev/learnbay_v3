import React from "react";
import Head from "next/head";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";

import WhoProgram from "../components/CoursePage/WhoProgram/ThirdSection";
import { ThirdSectionData } from "@/Data/ThirdSectionData";

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
      <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
      <BottomBar radio={true} />
      <Footer />
    </div>
  );
};

export default sumbit;
