import dynamic from "next/dynamic";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import GenAiProFirstPart from "@/components/CoursePage/FirstPart/GenAiProFirstPart";
import GenAiProSecondPart from "@/components/CoursePage/FirstPart/GenAiProSecondPart";


const OfferPopup = dynamic(() =>
  import("../../components/Global/OfferPopup/OfferPopup")
);

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);
  const JobData = {
    title: "Decode Your Tech Carer Path to Competitive Success",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Transform with Coding Expertise",
        description:
          "Build a highly desired software developer/engineer role with our multifaceted training.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title:
          "Learn and Practice with Real-time coding projects in an industry-leading setup",
        description:
          "Exhibit real-time coding mastery to tackle algorithmic ordeals.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "From Novice to Specialist",
        description:
          "Master, from basics to advanced DSA concepts to specify your reign in the tech field. ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <Head>
        <title>Advance GenAI Developer Program For Professionals-Learnbay</title>
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
        <GenAiProFirstPart
        summaryData={
          DataScienceCourseData.GENAIPROCourseData[0].summarySection
        }
          SecondSectionData={
            DataScienceCourseData.GENAIPROCourseData[0].secondSection
          }
          whyChooseData={
            DataScienceCourseData.GENAIPROCourseData[0].whyChooseData
          }
        />

        <GenAiProSecondPart


          masterSyllabusMobile={
            DataScienceCourseData.GENAIPROCourseData[0]
              .masterSyllabusMobile
          }

          toolsData={
            DataScienceCourseData.GENAIPROCourseData[0]
            .toolsData
          }
          
          CertificateData={
            DataScienceCourseData.GENAIPROCourseData[0].Certificate
          }


          certificateNew={
            DataScienceCourseData.GENAIPROCourseData[0].certificateNew
          }

          genAiData={
            DataScienceCourseData.GENAIPROCourseData[0].genAiData
          } 
          FAQNewData={DataScienceCourseData.GENAIPROCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/generativeAiProcourseData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
