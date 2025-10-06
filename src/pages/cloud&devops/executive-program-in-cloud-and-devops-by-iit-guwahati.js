import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import IITCloudDevopsFirstPart from "@/components/CoursePage/FirstPart/IITCloudDevopsFirstPart";
import IITCloudDevopsSecondPart from "@/components/CoursePage/FirstPart/IITCloudDevopsSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Executive Certification in Cloud and DevOps | Learnbay</title>
        <meta
          name="description"
          content="Learn advanced Cloud & DevOps skills with Learnbay's Executive Program. Gain practical experience with the top tools and strategies to excel in the tech field."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud computing certification course,
cloud computing and devops course,
devops and cloud computing course,
cloud and devops course,
advanced certification in cloud computing & devops,
executive course in cloud & devops,
advanced cloud & devops course"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud&devops/executive-program-in-cloud-and-devops-by-iit-guwahati"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud&devops/executive-program-in-cloud-and-devops-by-iit-guwahati"
        />
        <meta
          property="og:title"
          content="Executive Course in Cloud & DevOps | Learnbay"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Learn advanced Cloud & DevOps skills with Learnbay's Executive Program. Gain practical experience with the top tools and strategies to excel in the tech field."
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Executive Course in Cloud & DevOps | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Learn advanced Cloud & DevOps skills with Learnbay's Executive Program. Gain practical experience with the top tools and strategies to excel in the tech field."
        />
        <meta
          name="twitter:description"
          content="Learn advanced Cloud & DevOps skills with Learnbay's Executive Program. Gain practical experience with the top tools and strategies to excel in the tech field."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
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
        <IITCloudDevopsFirstPart
          summaryData={
            DataScienceCourseData.IITCloudDevopsData[0].summarySection
          }
          SecondSectionData={
            DataScienceCourseData.IITCloudDevopsData[0].secondSection
          }
          whyChooseData={
            DataScienceCourseData.IITCloudDevopsData[0].whyChooseData
          }
        />
        <IITCloudDevopsSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.IITCloudDevopsData[0].masterSyllabusMobile
          }
          toolsData={DataScienceCourseData.IITCloudDevopsData[0].toolsData}
          CertificateData={
            DataScienceCourseData.IITCloudDevopsData[0].Certificate
          }
          certificateNew={
            DataScienceCourseData.IITCloudDevopsData[0].certificateNew
          }
          genAiData={DataScienceCourseData.IITCloudDevopsData[0].genAiData}
          FAQNewData={DataScienceCourseData.IITCloudDevopsData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/IITCloudDevopsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
