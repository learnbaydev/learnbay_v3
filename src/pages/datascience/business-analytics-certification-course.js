import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import BAFirstPart from "@/components/CoursePage/FirstPart/BAFirstPart";
import BASecondPart from "@/components/CoursePage/FirstPart/BASecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Popup Data
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }

      // Fetch Batch Data
      const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (batchResponse.status === 200) {
        const { batchDate } = await batchResponse.json();
        setBatchDateData(batchDate);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>
        Business Analytics Certification Program - Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Business Analytics and Data Science Skills, Techniques by enrolling into the Learnbay's Business Analaytics Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Business Analytics and AI Program with domain specialization"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/business-analytics-certification-course"
        />
      </Head>
      <main>
        <BAFirstPart
          SecondSectionData={
            DataScienceCourseData.BADataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.BADataScienceCourseData[0].testimonial
          }
        />
        <BASecondPart
          masterSyllabusMobile={
            DataScienceCourseData.BADataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.BADataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.BADataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.BADataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/BusinessAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
