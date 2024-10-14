import HeroSection from "@/components/course/heroSection/HeroSection";
import NavbarSection from "@/components/course/navbarSection/NavbarSection";

import dynamic from "next/dynamic";
import React from "react";

import PSummaryAD from "../PSummary/PSummaryAD";
import ProgramSection from "@/components/course/programSection/programSection";
import OutcomeSection from "@/components/course/outcomeSection/outcomeSection";
import WhyChooseNew from "@/components/course/whyChoose/WhyChooseNew";

import Practical from "../Practical/Practical";
import WhyChooseSection from "@/components/course/whyChooseSection/whyChooseSection";
const FirstPart = ({ ProggramSectionData, summaryData }) => {
  const pdfUrl = "/Brochure/Advanced-Data-Science.pdf";
  return (
    <>
      <NavbarSection
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
      />
      <HeroSection
        thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/managers_YT.webp"
        spanTag="Project-based learning"
        spanIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ada_AI_icon.webp"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
        title="Advanced Data Science & AI Program with"
        orgTitle=" Domain Specialization"
        descrption="Unlock the power of data with our comprehensive program, featuring hands-on learning, real-world projects, and domain specialization in fields like BFSI, healthcare, and retail."
        noIIt={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Bots.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Cal_bots.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/build_bots.webp"
        CloseDes="Program Eligibility "
        CloseBotDate="Min 1 year"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={70}
        BotHeight={56}
        backgroundGradient="radial-gradient(circle at 10% 10%, rgba(6, 59, 92, 0.9) 1%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(254, 122, 54, 0.3) 1%, transparent 40%), #212121"
        showRightForm={true}
      />
      <PSummaryAD summaryData={summaryData} />
      <Practical />
      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        yearExp="1+ Years of Experience"
        PointOne="Data Analyst "
        pointTwo="Non-Techies"
        PointOneIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Datas.webp"
        pointTwoIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_ytwos.webp"
        rightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />

      <OutcomeSection />
<WhyChooseSection/>
    </>
  );
};

export default React.memo(FirstPart);
