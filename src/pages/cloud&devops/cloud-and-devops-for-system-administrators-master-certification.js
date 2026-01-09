import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import { parseJSONData } from "@/Util/JsonConvertor";
import HighlightsAdminSection from "@/components/CoursePage/FirstPart/Support_noimage/highlightcloudAdmin";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import AlumniCompanies from "@/components/CoursePage/newUICourse/AlumniCompanies";
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacement/LearningToPlacement";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import highlightsData from "@/Data/HighlightsAdminSectionData";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
// import newCloudAndDevopsSyllabus from "@/components/newCloudAndDevopsSyllabus/newCloudAndDevopsSyllabus";
const AnimationNew = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimited")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const NewCloudAndDevopsSyllabus = dynamic(() =>
  import("@/components/newCloudAndDevopsSyllabus/newCloudAndDevopsSyllabus")
);
const DSASyllabus = dynamic(() =>
  import("@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus")
);
const DSAFeeSection = dynamic(() =>
  import("@/components/CoursePage/dsaFee/DSAFeeSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/course/MentorsSection/MentorsSection")
);
const ReviewSlider = dynamic(() =>
  import("@/components/Home/newUI/reviewSlider/reviewSlider")
);
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus2025")
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI-Powered+Cloud+DevOps+Engineering+Master+Program+(8)_compressed+.pdf";
  return (
    <>
      <Head>
        <title>AI-Powered Cloud And DevOps Engineering Course - Learnbay</title>
        <meta
          name="description"
          content="Advance your career with Learnbay’s AI-Powered Cloud DevOps Master Certification Program. Attend live classes, projects, and multi-cloud training. Enrol now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Cloud and DevOps Engineering program,
Cloud and DevOps Master certification,
Cloud and DevOps certification,
Cloud and DevOps Engineering Master certification,
Cloud and DevOps Engineering certification program,
Cloud and DevOps engineering master program,
Cloud and DevOps certification program,
"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI-Powered Cloud and DevOps Engineering Course - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your career with Learnbay’s AI-Powered Cloud DevOps Master Certification Program. Attend live classes, projects, and multi-cloud training. Enrol now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification"
        />
        <meta
          name="twitter:title"
          content="AI-Powered Cloud and DevOps Engineering Course - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Advance your career with Learnbay’s AI-Powered Cloud DevOps Master Certification Program. Attend live classes, projects, and multi-cloud training. Enrol now!"
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
          href="https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
       "@context": "http://schema.org",
  "@type": "Course",
  "name": "AI-Powered Cloud And DevOps Engineering Course - Learnbay",
  "description": "Advance your career with Learnbay’s AI-Powered Cloud DevOps Master Certification Program. Attend live classes, projects, and multi-cloud training. Enrol now!",
  "url": "https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification",
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
  "coursePrerequisites": "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience. Professionals such as system administrators, solution architects, support engineers, and IT experts are the most welcomed for this certification.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P8M",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,59,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]

    }
`,
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI-Powered+Cloud+DevOps+Engineering+Master+Program+(8)_compressed+.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI-Powered+Cloud+DevOps+Engineering+Master+Program+(8)_compressed+.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="250" guided="40" leftPart="3YEAR" />
        <HighlightsAdminSection cloud={true} highlightsData={highlightsData} />
        <AnimationNew />
        <JobReadySection />
        <ReviewSlider idss="eautK0odE7Q" showRealStories={false} />
        <MentorsSection />
        <GenAIProject
          genAiData={NewDSAData[0].genAiData}
          GENAIMAN={true}
          noClud={true}
        />
        {/* <DSASyllabus
          sections={NewDSAData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud%26DevOpsEngineeringMasterCertificationDec25.pdf"
          brochurePdf={pdfUrl}
          downloadBrochure={true}
        /> */}
        <div style={{ marginTop: "50px" }}>
          <SyllabusNew
            masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
            onlyGENAIPage={true}
          />
        </div>
        <NewTools toolsData={NewDSAData[0].toolsData} />
        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        <DSAFeeSection
          Fee="₹ 1,59,000 "
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
        />
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
  const module = await import(
    "../../Data/CloudAndDevOpsforSystemAdministratorsMasterCertificationData"
  );
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
