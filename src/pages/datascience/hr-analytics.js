import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import HRFirstPart from "@/components/CoursePage/FirstPart/HRFirstPart";
import HRSecondPart from "@/components/CoursePage/FirstPart/HRSecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Business Analytics Program")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>
        HR Analytics Certification Program | HR Analytics Course - Learnbay

        </title>
        <meta
          name="description"
          content="Advance your HR career with Learnbay's HR Analytics Certification Program. Master HR analytics skills and boost your expertise. Enroll now!          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="HR analytics course, HR analytics certification course, HR analytics certification, HR Analytics training, hr analytics course, HR Analytics course online, marketing analytics course, HR Analytics certification course, best HR Analytics course, best HR Analytics certification          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hr-analytics"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "HR Analytics Certification Program",
            "description": "Upskill yourself with cutting edge HR Analytics Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.",
            "url": "https://www.learnbay.co/datascience/hr-analytics",
            "offers": {
              "@type": "Offer",
              "price": 90000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this HR Analytics certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 90,000 + 18% GST",
                  "priceCurrency": "INR"
                }
              }
            ]



          }`,
          }}
        />
      </Head>
      <main>
        <HRFirstPart
          SecondSectionData={
            DataScienceCourseData.HRDataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.HRDataScienceCourseData[0].testimonial
          }
        />
        <HRSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.HRDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.HRDataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.HRDataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.HRDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/HRAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
