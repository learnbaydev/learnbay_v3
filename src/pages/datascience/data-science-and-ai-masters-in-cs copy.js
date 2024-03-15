import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import FirstPart from "@/components/MastersCourse/PagePart/FirstPart";
const SecondPart = dynamic(() =>
  import("@/components/MastersCourse/PagePart/SecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Advance Your Career with a Master's in Data Science and AI - Learnbay</title>
        <meta
          name="description"
          content="Elevate your career with a Master's in Computer Science specializing in Data Science and AI. Gain advanced skills, harness cutting-edge technologies, and become a leader in the evolving digital landscape."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="masters in data science and ai, masters in data science, data science masters programs, best data science masters programs, data science master degree          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Master in CS: Data Science and AI",
      "description": "Upskill yourself with cutting edge Masters degree in Data Science and AI, earn global recognition from a Master's degree certification from WOOLF university.",
      "provider": {
        "@type": "Organization",
        "name": "Learnbay"
      },
      "occupationalCategory": [
        "Data Science and Analytics",
        "AI & Machine Learning"
      ],
      "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
      "offers": {
        "@type": "Offer",
        "price": 250000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "coursePrerequisites": "Bachelor's degree in Computer Science or related field",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online",
        "courseWorkload": "P10W",
        "location": {
          "@type": "VirtualLocation",
          "name": "Online"
        }
      },
      "courseCredential": "Master in CS: Data Science and AI",
      "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
    }`
  }}
/>

      </Head>
      <main>
        <FirstPart
        WolfLink ={true}
        formbtn={true}
          TestimonialData={
            DataScienceCourseData.DataScienceMastersinCS[0].testimonial
          }

        />
        <SecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceMastersinCS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceMastersinCS[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceMastersinCS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceMastersinCS[0].faq}
          />
      
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DataScienceAiMastersinCS");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}