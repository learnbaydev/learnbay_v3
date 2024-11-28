import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import GenAiMLeadersFirstPart from "@/components/CoursePage/FirstPart/GenAiMLeadersFirstPart";
import GenAiMLeadersSecondPart from "@/components/CoursePage/FirstPart/GenAiMLeadersSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Advance Gen AI Course For Managers & Tech Leaders - Learnbay
        </title>
        <meta
          name="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="generative ai for managers, gen ai for managers, generative ai course for managers, gen ai course for managers"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/generative-ai-course-for-managers"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/generative-ai-course-for-managers"
        />
        <meta
          property="og:title"
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Advance Gen AI Course For Managers & Tech Leaders - Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          name="twitter:description"
          content="Master Advance Gen AI Course with Learnbay. Enhance your leadership skills by leveraging AI for making strategic and impactful decisions."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />

        {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data Structures Algorithms and System Design Course",
      "description": "Elevate your tech skills through our Data Structures Algorithms and System Design Course and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
      "offers": {
        "@type": "Offer",
        "price": 115000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P10W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,15,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`
  }}
/> */}
      </Head>
      <main>
        <GenAiMLeadersFirstPart
          summaryData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .summarySection
          }
          SecondSectionData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .secondSection
          }
          whyChooseData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .whyChooseData
          }
        />

        <GenAiMLeadersSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .masterSyllabusMobile
          }
          toolsData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].toolsData
          }
          CertificateData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0]
              .certificateNew
          }
          genAiData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].genAiData
          }
          FAQNewData={
            DataScienceCourseData.GENAIManagersLeadersCourseData[0].faq
          }
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/generativeManagersLeaderscourseData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
