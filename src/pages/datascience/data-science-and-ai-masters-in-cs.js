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
        <title>Master's in Computer Science: Data Science and AI - Learnbay</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Masters degree in Data Science and AI, earn global recognition from a Master's degree certification from WOOLF university.          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="masters in data science and ai, masters in data science, data science masters programs, best data science masters programs, data science master degree          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "Course",
                "name": "Master in CS: Data Science and AI",
                "description": "A comprehensive online Master's degree program in Computer Science with specializations in Data Science and AI & Machine Learning.",
                "provider": {
                  "@type": "Organization",
                  "name": "Learnbay"
                },
                "coursePrerequisites": "Bachelor's degree in Computer Science or related field",
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "Part-time",
                  "courseWorkload": "18 months",
                  "location": {
                    "@type": "VirtualLocation",
                    "name": "Online"
                  }
                  },
                "courseCredential": "Master in CS: Data Science and AI",
                "coursePrerequisite": "Bachelor's degree in Computer Science or related field",
                "occupationalCategory": [
                  "Data Science and Data Analytics",
                  "AI & Machine Learning"
                ],
                "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
                "image": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FlearnbayMain%2Flearnbay-logo.png&w=256&q=100"
              }
} `,
          }}
        />
      </Head>
      <main>
        <FirstPart
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
