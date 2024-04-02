import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";

import AdaProgramFirst from "@/components/CoursePage/FirstPart/AdaProgramFirstPart";
const AdaProgramSecondPart = dynamic(() =>
  import("@/components/CoursePage/FirstPart/AdaProgramSecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Advanced data Anatics Program</title>
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
        <AdaProgramFirst
        WolfLink ={true}
        formbtn={true}
          TestimonialData={
            DataScienceCourseData.ADAProgram[0].testimonial
          }

        />
        <AdaProgramSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.ADAProgram[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.ADAProgram[0].Certificate

          }
          projectSection={
            DataScienceCourseData.ADAProgram[0].projectSection
          }
          FAQNewData={DataScienceCourseData.ADAProgram[0].faq}
          />
      
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataAnalyticsProgramData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
