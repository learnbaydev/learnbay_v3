import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import BrochureDemoSection from "@/components/ThankYouNew/BrochureDemoSection";
import SessionSection from "@/components/ThankYouNew/SessionSection";
import WhyChooseUsSection from "@/components/ThankYouNew/WhyChooseUsSection";
import Footer from "../components/Global/Footer/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

const ThankYouDemo = ({ initialName, initialPhone }) => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const courseId = sessionStorage.getItem("pending_syllabus");
    if (courseId) {
      setPdfUrl(courseId);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Learnbay - Thank you</title>
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
      <div style={{ marginTop: "80px" }}>
        <BrochureDemoSection pdfUrl={pdfUrl} />

        <SessionSection />
        <WhyChooseUsSection />
        <main
          style={{ padding: "32px", maxWidth: 1000, margin: "0 auto" }}
        ></main>
      </div>
      <Footer />
      <WhatsappFloat />
    </>
  );
};
export default ThankYouDemo;
