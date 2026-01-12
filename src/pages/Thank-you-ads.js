import Head from "next/head";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import Footer from "../components/Global/Footer/Footer";
import ThankYouAds from "../components/ThankYouAds/ThankYouAds";
const Thankyouads = () => {
  return (
    <>
      <Head>
        <title>Learnbay - Thank you ads</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay thank you, Explore more information for a smooth learning experience. Come join us today!"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <ThankYouAds />
      <Footer />
      <WhatsappFloat />
    </>
  );
};

export default Thankyouads;
