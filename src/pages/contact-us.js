import React from "react";
import Head from "next/head";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global//Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import ContactUs from "../components/StaticPage/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Learnbay - Contact Us</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Contact Learnbay for questions, support, and information about our master's programs and courses. To start your career, get in touch with our experts now."
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/contact-us" />
      </Head>
      <main>
        {" "}
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          interstedInHide={true}
          radio={true}
        />
        <ContactUs />
        <BottomBar radio={true} />
        <Footer />
      </main>
    </div>
  );
}

export default contactus;
