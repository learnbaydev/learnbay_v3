import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { parseJSONData } from "@/Util/JsonConvertor";
import FullStackSoftwareDevelopmentFirstPart from "@/components/CoursePage/FirstPart/FullStackSoftwareDevelopmentFirstPart";
import FullStackSoftwareDevelopmentSecondPart from "@/components/CoursePage/FirstPart/FullStackSoftwareDevelopmentSecondPart";

const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);
  // POPUP GET METHOD
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
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
              // console.log(popupData);
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

      console.log(data.status);
      if (data.status === 200) {
        const { batchDate } = await data.json();

        setBatchDateData(batchDate);

        console.log("Batch Date Response:", batchDate);
      }
    };
    fetchBatch();
  }, []);

  return (
    <>
      <Head>
        <title>Full-Stack Software Development Program - Learnbay</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Software Development Certification Program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-software-development-program"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "Course",
                "name": "Software Development Certification Program",
                "description": "Upskill and switch from service-based to product-based companies with our Software development Certification Program.",
                "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
                 "provider": {
                      "@type": "Organization",
                      "name": "Learnbay",
                      "Url": "https://www.learnbay.co/"
                    },
                "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.", 
                "hasCourseInstance": [
                  {
                    "@type": "CourseInstance",
                    "courseMode": "Online, In-Person",
                    "courseFee": {
                      "@type": "PriceSpecification",
                      "price": "₹ 1,15,000 + 18% GST",
                      "priceCurrency": "INR"
                    }
                  }
                ]
              }
} `,
          }}
        />
      </Head>
      <main>
        <FullStackSoftwareDevelopmentFirstPart
          SecondSectionData={
            DataScienceCourseData.FSSPDataScienceCourseData[0].secondSection
          }
        />

        <FullStackSoftwareDevelopmentSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.FSSPDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          FAQNewData={DataScienceCourseData.FSSPDataScienceCourseData[0].faq}
        />

        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/FullStackSoftwareProgram");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
