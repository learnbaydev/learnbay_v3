import Head from "next/head";
import Navbar from "@/components/Global/Navbar/Navbar";
import { parseJSONData } from "@/Util/JsonConvertor";
import DmdPart from "@/components/CoursePage/FirstPart/DmdPart";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";

export default function Dmd({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);
  return (
    <div>
      <Head>
        <title>404 - Page Not Found </title>
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} adPage={true} />
        <DmdPart
          CertificateData={
            DataScienceCourseData.DataScienceCourseData[0].Certificate
          }
          S3RightImage={true}
          adsHide={true}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
