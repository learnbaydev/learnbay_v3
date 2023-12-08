import Head from "next/head";
import dynamic from "next/dynamic";
import FirstSection from "../../components/OrganicGeneric/FirstSection/FirstSection";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Global/Navbar/Navbar";
import Footer from "../../components/Global/Footer/Footer";
import WhatsappFloat from "../../components/Global/WhatappsFloat/WhatsappFloat";
import Switch from "../../components/OrganicGeneric/switch/switch";
import HomeLine from "../../components//Home/HomeLine/HomeLine";
import Testimonial from "../../components/OrganicGeneric/Testimonial/Testimonial";
const SeventhSection = dynamic(() =>
  import("../../components/Global/SeventhSection/SeventhSection")
);
const Course = dynamic(() => import("../../components/Home/Course/Course"));
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import BoxShape from "../../components/OrganicGeneric/BoxShape/BoxShape";
import BottomBar from "@/components/Global/BottomBar/BottomBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar
        popup={true}
        dataScienceGeneric={true}
        radio={true}
        event={true}
        adPage={true}
      />

      <FirstSection
        first="Tools"
        second="Tips"
        third="Technology"
        popup={true}
        dataScienceGeneric={true}
        radio={true}
        organicADS={true}
      />
      <HomeLine />
      <div className={styles.boxWrap}>
        <h2>Get Certified & Move Towards Your Dream Job</h2>
        <p className={styles.boxp}>
          Our Domain Specialisation and Industry Certified Capstone Projects
          helps you to make your past work experience relevant
        </p>
        <div className={styles.boxShape}>
          <BoxShape />
        </div>
      </div>
      <Course
        dataScience={true}
        radio={false}
        organicADS={true}
        newDesign={true}
        dataScienceGeneric={true}
      />
      <Switch organicADS={true} />
      <Testimonial />
      <ContactUs popup={true} dataScienceGeneric={true} radio={true} />
      <SeventhSection whatsappShow={true} />
      <Footer organicADSS={true} adPage={true} adPageCity={true} />
      <WhatsappFloat chat360code1={true} />
      <BottomBar dataScienceGeneric={true} />
    </div>
  );
}
