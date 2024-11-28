import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/ManagersFirstPart";
import SecondPart from "@/components/CoursePage/FirstPart/ManagersSecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Data Science & AI Course for Managers and Leaders | Learnbay
        </title>
        <meta
          name="description"
          content="Elevate your leadership and strategic skills with our AI & Data Science  Program for Managers and Leaders. Lead the Future with data-driven excellence!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science for managers, data science course for managers and leaders, data science course for managers, data science for leaders, artificial intelligence and data science for leaders, artificial intelligence course for managers, ai course for managers, data science for business leaders"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-ai-for-managers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Data Science and AI Program For Managers and Leaders",
  "description": "Our Data Science and AI Program For Managers and Leaders brings you a wide knowledge of Data Science and AI and helps you to make precise data-driven decisions.",
  "url": "https://www.learnbay.co/datascience/data-science-ai-for-managers",
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
  "coursePrerequisites": "There are no prerequisites for Data Science and AI Program For Managers and Leaders and AI Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
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
  const data = await import("../../Data/ManagersDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
