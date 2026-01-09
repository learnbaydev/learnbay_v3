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
  import("@/components/Home/whyChooseSection/Whylb")
);
const Other = dynamic(() =>
  import("@/components/Home/newUI/OtherVS_updated/Other")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const DSASyllabus = dynamic(() =>
  import("@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus")
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
const DSAProjectSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/ProjectSection/DSAProjectSection")
);
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
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacement/LearningToPlacement";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import HighlightsSection from "@/components/CoursePage/newUICourse/Support/HighlightsSection";
import ToolsCovered from "@/components/CoursePage/ToolsCovered/ToolsCovered";
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus2025")
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data+Science+and+GenAI+Program+(3)_compressed.pdf";
  let soonDate = getDSABookingSoonDate();
  let laterDate = getDSABookingLaterDate();
  // console.log(getDSABookingSoonDate(new Date('2023-03-24')));
  // console.log(getDSABookingLaterDate(new Date('2023-03-24')));

  return (
    <>
      <Head>
        <title>
          Data Science & GenAI Master Certification Program - Learnbay
        </title>
        <meta
          name="description"
          content="Enhance your career with Learnbay's Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science master certification, data science and genAI master certification program, data science and genAI master program, data science and generative AI master certification course, generative AI and data science master certification, data science and generative AI, generative ai and data science , data science and generative ai course"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Science & GenAI Master Certification Program | Learnbay"
        />
        <meta
          property="og:description"
          content="Enhance your career with Learnbay's Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
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
          content="Data Science & GenAI Master Certification Program | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Enhance your career with Learnbay’s Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
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
  "name": "Data Science and GenAI Master Certification Program",
  "description": "The Data Science and Generative AI Master Certification Program equips you with in-demand skills in data science, machine learning, and GenAI to solve real-world business problems through hands-on projects and expert-led training.",
"url": "https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program",
  "offers": {
    "@type": "offer",
    "price": "159000",
    "pricecurrency": "INR",
    "category": "Educational"
  },
   "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
  "coursePrerequisites": "There are no prerequisites for the Data Science and GenAI Master Certification Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P13M",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,59,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]
          }}
`,
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="250" guided="30" leftPart="IBM_AI" />

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
        <DSAProjectSection
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
        />

        <Other />
        {/*  <DSASyllabus
          sections={NewDSAData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
          downloadBrochure={true}
        />*/}
        <SyllabusNew
          masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
          onlyGENAIPage={true}
        />

        <ToolsCovered />

        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        {/* <Certificate
          noTabs={true}
          data={NewDSAData[0].certificateNew}
          DSAFresherCertHeading={true}
        /> */}

        {/* <NewCertificateSection certificateNew={NewDSAData[0].certificateNew} /> */}
        <DSAFeeSection
          Fee="₹ 1,20,000 "
          FeeEmi="₹ 13,250/ month"
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
  const module = await import("../Data/data-science-and-gen-ai-program-data");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
