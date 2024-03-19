import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import ExecutiveFirstPart from "@/components/CoursePage/FirstPart/ExecutiveFirstPart";
const ExecutiveSecondPart = dynamic(() =>
  import("@/components/CoursePage/FirstPart/ExecutiveSecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Executive program in Data Science & AI</title>
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




      </Head>
      <main>
        <ExecutiveFirstPart
        WolfLink ={true}
        formbtn={true}
          TestimonialData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].testimonial
          }

        />
        <ExecutiveSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.ExcutiveProgramAIDS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].Certificate

          }
          projectSection={
            DataScienceCourseData.ExcutiveProgramAIDS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.ExcutiveProgramAIDS[0].faq }
          />
      
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/ExecutiveProgramData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
