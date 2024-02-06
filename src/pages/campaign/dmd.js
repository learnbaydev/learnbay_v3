import React from 'react'
import Navbar from "@/components/Global/Navbar/Navbar";
import DmdPart from "@/components/CoursePage/FirstPart/DmdPart";
import { parseJSONData } from "@/Util/JsonConvertor";





function dmd({ DataScienceCourseDataJson }

  ) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);


  return (
    <div>
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
  )
}

export default dmd
export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
