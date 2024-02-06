import BottomBar from "@/components/Global/BottomBar/BottomBar";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import GetHire from "@/components/Home/GetHire/GetHire";
import dynamic from "next/dynamic";
import { ThirdSectionData } from "@/Data/ThirdSectionData";
import ProjectSection from "@/components/OrganicGeneric/ProjectSection/ProjectSection";
import EightSection from "../EightSection/EightSection";
import Footer from "@/components/Global/Footer/Footer";
import Course from "@/components/Home/Course/CourseDmd";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
import styles from "@/components/CoursePage/FirstSectionDmd/FirstSection.module.css";
const FirstSection = dynamic(() =>
  import("@/components/CoursePage/FirstSectionDmd/FirstSection")
);
const Certificate = dynamic(() =>
  import("@/components/CoursePage/Certificate/Certificate")
);

const Transpro = dynamic(() =>
  import("@/components/Dmd/Transpro/Transpro")
);
const SliderTab = dynamic(() =>
  import("@/components/Dmd/SliderTab/SliderTabs")
);
const Webinar = dynamic(() =>
  import("@/components/Dmd/ReactWebinar/Webinar")
);
const DmdPart = ({
  CertificateData,
  S3RightImage,
}) => {
  return (
    <div>
      <FirstSection
        dataScienceCounselling={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Adavance Cloud Computing & DevOps Certification Program"
        cityParaCont="Elevate your career to a Cloud Solution Architect or DevOps Engineer"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
        firstToparaImg=""
        firstHeading="Cloud Computing & DevOps Certification Program"
        firstTopPara="Crack Interview in top MNCs "
        idss="gaQYhVPCudQ"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/cd-f.webp"
      S3RightImage={S3RightImage}
      softwareBtnHide={true}
      />
      <HomeLine />
      <Transpro />
      <div className={styles.Margin}>
      <Course  dataScience={true}
        radio={true}
        organicADS={true}
        newDesign={true}
        dataScienceGeneric={true} />
        </div>
      <Certificate data={CertificateData} />
     <Webinar/>
     <SliderTab/>
       <ProjectSection
        nolinkO={false}
        organic={true}
        linkomb={false}
        popup={true}
        dataScienceGeneric={true}
        radio={true}
        HideDmd={true}
      />
      <div className={styles.MarginGet}>
        <div   className={styles.gethirediv}>
       <GetHire/>
       </div>
      </div>
      <Webinar/>
      <SeventhSection />
      <Footer
        organicADSS={true}
        adPage={true}
        adPageCity={true}
        iconnolink={true}
        faqhead={true}
        courseGn={true}
        Ocourses={true}
        mailno={true}
        getappsOraginc={true}
        nolinklogo={true}
      />
      <BottomBar />
    </div>
  );
};
export default DmdPart;