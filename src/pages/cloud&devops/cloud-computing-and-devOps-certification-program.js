import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/DevOpsFirstpart";
import SecondPart from "@/components/CoursePage/FirstPart/DevopsSecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/CoursePage/cloud&devops/Devopsfirstsection/DevopFirstSection";

function Blockchain({ CloudAndDevOpsCourseDataJson }) {
  const CloudAndDevOpsCourseData = parseJSONData(CloudAndDevOpsCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Cloud Computing & DevOps Certification Program - Learnbay
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
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Learnbay-Favicon-L.png"
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
          titleCourse="Adavance Cloud Computing & DevOps Certification Program"
          cityParaCont="Elevate your career to a Cloud Solution Architect or DevOps Engineer"
          brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
          firstToparaImg=""
          firstHeading="Advance Cloud Computing & DevOps Certification Program"
          firstTopPara="Crack Interview in top MNCs "
          idss="gaQYhVPCudQ"
        />
        <FirstPart
          SecondSectionData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].secondSection
          }
         
        />
      </main>
      <main>
        <SecondPart
          masterSyllabusMobile={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].masterSyllabusMobile
          }
          devops ={true}
          mbldevops={true}
          CertificateData={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].Certificate
          }
          projectSection={
            CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].projectSection
          }
          FAQNewData={CloudAndDevOpsCourseData.CloudAndDevOpsCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/CloudAndDevOpsCourse");
  function getCloudAndDevOpsCourseDataJSON(CloudAndDevOpsCourseData) {
    return JSON.stringify(CloudAndDevOpsCourseData);
  }
  const CloudAndDevOpsCourseDataJson = getCloudAndDevOpsCourseDataJSON(data);
  return { props: { CloudAndDevOpsCourseDataJson } };
}
