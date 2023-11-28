import React from "react";
import Head from "next/head";
import Refund from "../components/StaticPage/refund/refund";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";

function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay - Refund and Cancellations Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn more about Learnbay's refund policy and cancellation conditions. Your satisfaction is our top priority."
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/refund-cancellation-policy"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Refund />
        <Footer />
        <BottomBar radio={true} />
      </main>
    </div>
  );
}

export default refund;
