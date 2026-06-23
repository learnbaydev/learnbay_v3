import Head from 'next/head';
import { parseJSONData } from '@/Util/JsonConvertor';

import Navbar from '@/components/Global/Navbar/Navbar';
import AwsFirstPart from '@/components/CoursePage/FirstPart/AwsFirstPart';
import AwsSecondPart from '@/components/CoursePage/FirstPart/AwsSecondPart';

function Blockchain({ AwsAndDevOpsCourseDataJson }) {
  const AwsAndDevOpsCourseData = parseJSONData(AwsAndDevOpsCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Master Cloud Computing & DevOps with Advanced Certification
        </title>
        <meta
          name="description"
          content=" Kickstart your tech career with job-ready AWS training course and certification. Includes IBM projects, interview prep, and 1:1 mentoring. Enroll now."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud computing certification , aws training and certification, google cloud computing certification, cloud engineering certification, cloud computing online courses, amazon aws training, azure devops certification, microsoft azure cloud computing"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud-and-devops/aws-cloud-computing-and-devops"
        />
      </Head>
      <main>
        <Navbar dataScienceCounselling={true} />

        <AwsFirstPart
          SecondSectionData={
            AwsAndDevOpsCourseData.AwsAndDevOpsCourseData[0].secondSection
          }
        />
      </main>
      <main>
        <AwsSecondPart
          masterSyllabusMobile={
            AwsAndDevOpsCourseData.AwsAndDevOpsCourseData[0]
              .masterSyllabusMobile
          }
          devops={true}
          mbldevops={true}
          CertificateData={
            AwsAndDevOpsCourseData.AwsAndDevOpsCourseData[0].certificateNew
          }
          devopfee={true}
          projectSection={
            AwsAndDevOpsCourseData.AwsAndDevOpsCourseData[0].projectSection
          }
          FAQNewData={AwsAndDevOpsCourseData.AwsAndDevOpsCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import('../../Data/AwsCloudDevOpsdata');
  function getAwsAndDevOpsCourseDataJSON(AwsAndDevOpsCourseData) {
    return JSON.stringify(AwsAndDevOpsCourseData);
  }
  const AwsAndDevOpsCourseDataJson = getAwsAndDevOpsCourseDataJSON(data);
  return { props: { AwsAndDevOpsCourseDataJson } };
}
