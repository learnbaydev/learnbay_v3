import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/FoundationFirstPart";
import SecondPart from "@/components/CoursePage/FirstPart/FoundationSecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";


function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
        Data Science Foundation Program - Learnbay
        </title>
        <meta
          name="description"
          content="Are you searching for the Data Science Foundation Program? Learnbay is providing the best online Data Science Foundation Program and AI Program . Enroll now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science and ai course, Data Science Foundation Program course, data science and ai, ai and data science course, artificial intelligence and data science course, advanced certification in data science and ai"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-certification-courses"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Data Science Foundation Program",
  "description": "Our Data Science Foundation Program brings you a wide knowledge of Data Science and AI and helps you to make precise data-driven decisions.",
  "url": "https://www.learnbay.co/datascience/data-science-certification-courses",
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
  "coursePrerequisites": "There are no prerequisites for Data Science Foundation Program and AI Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
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
      </Head>
      <main>
        <Navbar dataScienceCounselling={true} interstedInHide={true} />
      
        <FirstPart
          SecondSectionData={
            DataScienceCourseData.DataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DataScienceCourseData[0].testimonial
          }
        />
      </main>
      <main>
        <SecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceCourseData[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/FoundationDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}