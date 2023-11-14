import Head from "next/head";
import Navbar from "../components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import { DataScienceCourseData } from "../Data/AdvanceDataScienceCourse";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
const Course = dynamic(() => import("@/components/Home/Course/Course"));
const WhyLearnbay = dynamic(() =>
  import("@/components/Home/WhyLearnbay/WhyLearnbay")
);
const ProjectSection = dynamic(() =>
  import("@/components/Home/ProjectSection/ProjectSection")
);
const Testimonial = dynamic(() =>
  import("@/components/Global/Testimonial/Testimonial")
);
const ContactUs = dynamic(() =>
  import("@/components/Home/ContactUs/ContactUs")
);
const GetHire = dynamic(() => import("@/components/Home/GetHire/GetHire"));
const TrainerSection = dynamic(() =>
  import("@/components/Home/TrainerSection/TrainerSection")
);
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));

export default function Home() {
  return (
    <>
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
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar
        radio={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <FirstSection
        dataScienceCounselling={true}
        radio={true}
        interstedInHide={true}
      />
      <HomeLine />
      <Course dataScience={true} radio={true} />
      <WhyLearnbay ids="bfl64ANfSV0" />
      <ProjectSection ids="bfl64ANfSV0" />
      <GetHire />
      <TrainerSection ids="eautK0odE7Q" />
      <Testimonial
        redirectDS={true}
        heading=""
        Testimonial={DataScienceCourseData[0].testimonial}
      />
      <ContactUs dataScienceCounselling={true} radio={true} />
      <SeventhSection />
      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar radio={true} />
    </>
  );
}
