import React from "react";
import { parseJSONData } from "@/Util/JsonConvertor";
import Header from "@/components/CoursePage/NewCyberECCouncil/NewCyberECCouncilHeader";
import Navbar from "@/components/Global/Navbar/Navbar";
import ProgramSection from "@/components/CoursePage/NewDSA/ProgramSection/ProgramSection";
import NewCyberSecurityECCouncilPractical from "@/components/CoursePage/NewDSA/Practical/NewCyberSecurityECCouncilPractical";
import AnimationGEN from "@/components/Home/whyChooseSection/AnimationGEN";
import JobReadySection from "@/components/CoursePage/NewDSA/JobReadySection/JobReadySection";
import SyllabusSection from "@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus";
import NewCyberECCouncilCertificate from "@/components/CoursePage/NewCyberECCouncil/NewCyberECCouncilCertificate/NewCyberECCouncilCertificate";
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import ReviewSlider from "@/components/Home/newUI/reviewSlider/reviewSlider";

const CyberSecurityECCouncil = ({ NewCyberSecurityECCouncilDataJson }) => {
  const NewCyberSecurityECCouncilData = parseJSONData(
    NewCyberSecurityECCouncilDataJson
  );

  const pdfUrl = "/Brochure/Advance-Cyber-security.pdf";
  return (
    <main>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <Header
        title={NewCyberSecurityECCouncilData[0].header[0].title}
        orgTitle={NewCyberSecurityECCouncilData[0].header[0].orgTitle}
        spanTag={NewCyberSecurityECCouncilData[0].header[0].spanTag}
        spanIcon={NewCyberSecurityECCouncilData[0].header[0].spanIcon}
        descrption={NewCyberSecurityECCouncilData[0].header[0].descrption}
        collaborationImg={
          NewCyberSecurityECCouncilData[0].header[0].collaborationImg
        }
        subtitle={NewCyberSecurityECCouncilData[0].header[0].subtitle}
        applicationIcon={
          NewCyberSecurityECCouncilData[0].header[0].applicationIcon
        }
        BotWidth={NewCyberSecurityECCouncilData[0].header[0].BotWidth}
        BotHeight={NewCyberSecurityECCouncilData[0].header[0].BotHeight}
        ProgramIcon={NewCyberSecurityECCouncilData[0].header[0].ProgramIcon}
        trainingIcon={NewCyberSecurityECCouncilData[0].header[0].trainingIcon}
        CloseDes={NewCyberSecurityECCouncilData[0].header[0].CloseDes}
        CloseBotDate={NewCyberSecurityECCouncilData[0].header[0].CloseBotDate}
        DurationBot={NewCyberSecurityECCouncilData[0].header[0].DurationBot}
        DurationBotDate={
          NewCyberSecurityECCouncilData[0].header[0].DurationBotDate
        }
        TrainingBot={NewCyberSecurityECCouncilData[0].header[0].TrainingBot}
        TrainingBotFormat={
          NewCyberSecurityECCouncilData[0].header[0].TrainingBotFormat
        }
        downloadBrochure={true}
        backgroundImg={NewCyberSecurityECCouncilData[0].header[0].backgroundImg}
        isCyberSecurity={true}
        dataScience={true}
        dataScienceCounselling={true}
        titleCourse="Advance Certification in Cyber Security & Ethical Hacking"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
        brochurePdf={pdfUrl}
        interstedInHide={true}
      />
      <ProgramSection
        programSectionData={NewCyberSecurityECCouncilData[0].ProgramSection}
        dataScienceCounselling={true}
        interstedInHide={true}
        upSkillingHide={true}
      />
      <NewCyberSecurityECCouncilPractical />
      <AnimationGEN
        whyChooseData={NewCyberSecurityECCouncilData[0].whyChooseData}
        cyber={true}
      />
      <JobReadySection />
      <SyllabusSection
        sections={NewCyberSecurityECCouncilData[0].sections}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advance Certification in Cyber Security & Ethical Hacking"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance-Cyber-security.pdf"
        brochurePdf={pdfUrl}
      />
      <NewCyberECCouncilCertificate certificateData={NewCyberSecurityECCouncilData[0].certificateNew}/>

      <DSAFeeSection
         Fee="₹60,000"
         FeeEmi="₹ 3,933/month"
         weekendbatch="Weekday Evening"
         weekdaybatch="Weekday Evening"
         weekday="MON-WED-FRI"
         weekend="MON-WED-FRI"
         WeekendDate="JAN 26th"
         WeekdayDate="JAN 10th "
         WeekendTime="08:00PM - 10:00PM"
         WeekdayTime="08:00PM - 10:00PM"
         FeeContent3="Flexible payment"
         // <EMI POPUP
         emiType="NO COST EMI"
         duration1="18 Months"
         totalAmount1="₹60,000"
         monthlyPayment1="₹3,933"
         greenDown1="Standard Intrest rate Applicable"
         duration2="12 Months"
         totalAmount2="₹60,000"
         monthlyPayment2="₹5,900"
      />
      <ReviewSlider />
      <MentorsSection />
    </main>
  );
};

export default CyberSecurityECCouncil;

export async function getStaticProps() {
  const module = await import("../Data/NewCyberSecurityECCouncilData");
  const data = module.default;

  const NewCyberSecurityECCouncilDataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { NewCyberSecurityECCouncilDataJson } };
}
