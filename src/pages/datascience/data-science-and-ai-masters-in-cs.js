import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import FirstPart from "@/components/MastersCourse/PagePart/FirstPart";
const SecondPart = dynamic(() =>
  import("@/components/MastersCourse/PagePart/SecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  // POPUP GET METHOD
  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);

              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data.status === 200) {
        const { batchDate } = await data.json();

        setBatchDateData(batchDate);
      }
    };
    fetchBatch();
  }, []);

  return (
    <>
      <Head>
        <title>Masters in Computer Science: Data Science and AI</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Masters in Computer Science: Data Science and AI Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Masters in Computer Science: Data Science and AI"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
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
