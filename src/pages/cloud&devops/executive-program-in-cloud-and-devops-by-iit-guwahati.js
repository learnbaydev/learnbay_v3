import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import IITCloudDevopsFirstPart from "@/components/CoursePage/FirstPart/IITCloudDevopsFirstPart";
import IITCloudDevopsSecondPart from "@/components/CoursePage/FirstPart/IITCloudDevopsSecondPart";



const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);
  
  return (
    <>
      <Head>
        <title>Executive Certification in Cloud and Devops -Learnbay</title>
        <meta
          name="description"
          content="Enroll in the best data structures and algorithms course at Learnbay. Get familiar with basic & advanced concepts in DSA and system design."
        />
      
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data structures and algorithms course, best data structures and algorithms course, dsa course, best course for data structures and algorithms, dsa course online, data structures and algorithms in python, learn data structures and algorithms, data structures and algorithms online course, data structures online course, best dsa course online"
        />
        
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/generative-ai-course-for-professionals"
        />

{/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data Structures Algorithms and System Design Course",
      "description": "Elevate your tech skills through our Data Structures Algorithms and System Design Course and switch from service-based to product-based companies. Earn globally recognized IBM and Microsoft Certifications.",
      "url": "https://www.learnbay.co/fullstack/dsa-system-design",
      "offers": {
        "@type": "Offer",
        "price": 115000,
        "priceCurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P10W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,15,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`
  }}
/> */}

      </Head>
      <main>
        <IITCloudDevopsFirstPart
        summaryData={
          DataScienceCourseData.IITCloudDevopsData[0].summarySection
        }
          SecondSectionData={
            DataScienceCourseData.IITCloudDevopsData[0].secondSection
          }
          whyChooseData={
            DataScienceCourseData.IITCloudDevopsData[0].whyChooseData
          }
        />
<IITCloudDevopsSecondPart


          masterSyllabusMobile={
            DataScienceCourseData.IITCloudDevopsData[0]
              .masterSyllabusMobile
          }
          toolsData={
            DataScienceCourseData.IITCloudDevopsData[0]
            .toolsData
          }
          CertificateData={
            DataScienceCourseData.IITCloudDevopsData[0].Certificate
          }

          certificateNew={
            DataScienceCourseData.IITCloudDevopsData[0].certificateNew
          }
          FAQNewData={DataScienceCourseData.IITCloudDevopsData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/IITCloudDevopsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
