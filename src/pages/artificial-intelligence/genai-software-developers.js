import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { parseJSONData } from "@/Util/JsonConvertor";
import DSAHeader from "@/components/CoursePage/NewDSA/Header/NewDSAHeader";
import Navbar from "@/components/Global/Navbar/Navbar";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
const ProgramSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/ProgramSection/ProgramSection")
);
const DSAPractical = dynamic(() =>
  import("@/components/CoursePage/NewDSA/Practical/DSAPractical")
);
const AnimationNew = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimited")
);
const Other = dynamic(() =>
  import("@/components/Home/newUI/OtherVS_updated/Other")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus")
);
const NewCertificateSection = dynamic(() =>
  import("@/components/CoursePage/newCertificate/NewCertificate")
);
const DSAFeeSection = dynamic(() =>
  import("@/components/CoursePage/dsaFee/DSAFeeSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/course/MentorsSection/MentorsSection")
);
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
const ReviewSlider = dynamic(() =>
  import("@/components/Home/newUI/reviewSlider/reviewSlider")
);
import Certificate from "@/components/CoursePage/Certificate/Certificate";
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import FAQNew from "@/components/CoursePage/FAQNew/FAQNew";
import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from "@/Util/getDSABatchData";
import AlumniCompanies from "@/components/CoursePage/newUICourse/AlumniCompanies";
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacementinfinity/LearningToPlacement";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import HighlightsSection from "@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection";
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/GenAI+Developer+Master+Certification+Program.pdf";

  let soonDate = getDSABookingSoonDate();
  let laterDate = getDSABookingLaterDate();
  // console.log(getDSABookingSoonDate(new Date('2023-03-24')));
  // console.log(getDSABookingLaterDate(new Date('2023-03-24')));

  return (
    <>
      <Head>
        <title>Best Data Science & AI Online Course - Learnbay</title>
        <meta
          name="description"
          content="Become a data science expert. Join Learnbay’s AI Master Certification Program. Gain expertise, elevate your skills, and grow your career."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science and ai course, advanced data science course, data science and ai, ai and data science course, artificial intelligence and data science course, advanced certification in data science and ai"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science & AI Online Course - Learnbay"
        />
        <meta
          property="og:description"
          content="Become a data science expert. Join Learnbay’s AI Master Certification Program. Gain expertise, elevate your skills, and grow your career."
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <meta
          name="twitter:title"
          content="Best Data Science and AI Master Certification Program Online"
        />
        <meta
          name="twitter:description"
          content="Unleash your potential with the best online Data Science and AI Master Certification Program. Elevate your skills, gain expertise, and propel your career."
        />
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
          href="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Advance data science and AI Certification",
  "description": "Our Advance Data Science and AI Course brings you a wide knowledge of Data Science and AI and helps you to make precise data-driven decisions.",
  "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses",
  "offers": {
    "@type": "offer",
    "price": "125000",
    "pricecurrency": "INR",
    "category": "Educational"
  },
   "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
  "coursePrerequisites": "There are no prerequisites for Advanced Data Science and AI Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P10W",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,25,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]
    }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(MasterAI),
          }}
        />
      </Head>
      <main>
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          interstedInHide={true}
        />
        <Newheader
          violet={true}
          title1={NewDSAData[0].header[0].title1}
          orgTitle={NewDSAData[0].header[0].orgTitle}
          title={NewDSAData[0].header[0].title}
          title2={NewDSAData[0].header[0].title2}
          spanTag={NewDSAData[0].header[0].spanTag}
          spanIcon={NewDSAData[0].header[0].spanIcon}
          points={NewDSAData[0].header[0].points}
          mentorText={NewDSAData[0].header[0].mentorText}
          mentorFromImg={NewDSAData[0].header[0].mentorFromImg}
          descrption={NewDSAData[0].header[0].descrption}
          svgDSA={NewDSAData[0].header[0].svgDSA}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/GenAI+Developer+Master+Certification+Programv1.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/GenAI+Developer+Master+Certification+Programv1.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="130" guided="40" />

        {/* <ProgramSection
          programSectionData={NewDSAData[0].ProgramSection}
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        /> */}
        {/* <DSAPractical /> */}
        <HighlightsSection />

        <AnimationNew />
        <JobReadySection />
        <ReviewSlider idss="eautK0odE7Q" showRealStories={true} />
        <MentorsSection />
        <GenAIProject genAiData={NewDSAData[0].genAiData} Duration={true} />
        <Other />
        <SyllabusNew
          masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
          onlyGENAIPage={true}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse=""
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/GenAI-Developer-Program.pdf"
          brochurePdf={pdfUrl}
          buttonHide={true}
          interstedInHide={true}
          genAIIIT={true}
        />

        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        {/* <Certificate
          noTabs={true}
          data={NewDSAData[0].certificateNew}
          DSAFresherCertHeading={true}
        /> */}

        {/* <NewCertificateSection certificateNew={NewDSAData[0].certificateNew} /> */}
        <DSAFeeSection
          Fee="₹ 95,000 "
          FeeEmi="₹ 7,916/ month"
          // Hybrid Classes
          hybridFee="₹ 1,55,000"
          hybridEmi="₹ 10,161/ month"
          // EMIPOPUP
          emiType="Live online classes"
          duration1="12 Months"
          totalAmount1="₹1,90,000"
          monthlyPayment1="₹14,094"
          greenDown1="Hybrid Classes"
          duration2="12 Months"
          totalAmount2="₹2,10,000"
          monthlyPayment2="₹12,455"
          dataScienceCounselling={true}
          iitGuwatiGen={true}
          interstedInHide={true}
        />
        <BookDemo
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
          Admission="Admission Process"
          Content="Our 3-step admission process clearly guides you through checking your eligibility, selecting the right course via expert counselling, and smoothly completing your enrollment. It's designed for simplicity and clarity."
          highlight={[
            "3-step admission process",
            "eligibility",
            "counselling",
            "enrollment",
          ]}
          first="Evaluation Call"
          second="Screening Call"
          third="Block your seat"
          // greenButton={true}
        />

        {/* <FAQNew FAQNewData={NewDSAData[0].faq} background={true} /> */}
        {/* <Content
          dataScienceCounselling={true}
          DSANewContent={true}
          background={true}
        /> */}
        <NewSevenSection
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        />
        <Footer />
        <BottomBar dataScienceCounselling={true} interstedInHide={true} />
        <WhatsappFloat />
      </main>
    </>
  );
};

export default NewDSA;

export async function getStaticProps() {
  const module = await import("../../Data/genaisoftware");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
