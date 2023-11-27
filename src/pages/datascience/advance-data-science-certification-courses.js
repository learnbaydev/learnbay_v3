import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/FirstPart";
import SecondPart from "@/components/CoursePage/FirstPart/SecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Artificial Intelligence and Data Science Course - Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Advanced Data Science and AI Program with domain specialization"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar dataScienceCounselling={true} interstedInHide={true} />
        <FirstSection
          dataScienceCounselling={true}
          interstedInHide={true}
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Elevate your tech career with our Master's programs"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Adv-dsai-_1_-min.webp"
          firstToparaImg="with Domain Specialization"
          firstHeading="Advance Data Science & AI Program"
          firstTopPara="Curriculum Inclusive of Gen-AI "
          idss="YWxTtvb3x-U"
        />
        <FirstPart
          SecondSectionData={
            DataScienceCourseData.DataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DataScienceCourseData[0].testimonial
          }
        />
      </main>
      <main>
        <SecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceCourseData[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/AdvanceDataScienceCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
