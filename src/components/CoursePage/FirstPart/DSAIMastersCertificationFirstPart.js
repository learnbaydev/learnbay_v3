import HeroSectionMaster from "@/components/course/heroSection/HeroSectionMaster";
import NavbarSection from "@/components/course/navbarSection/NavbarSection";
import dynamic from "next/dynamic";
import React from "react";

import PSummaryAD from "../PSummary/PSummaryAD";
import Practical from "../Practical/Practical";
import ProgramSection from "@/components/course/programSection/programSection";
import ReviewSlider from "@/components/course/reviewSlider/ReviewSlider";
import UpskillMbl from "@/components/course/upskillingSection/UpskillMbl";
import UpskillingSection from "@/components/course/upskillingSection/upskillingSection";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import OutcomeSection from "@/components/course/outcomeSection/outcomeSection";
import AnimationNew from "@/components/Home/whyChooseSection/AnimationNew";
const FirstPart = ({ ProggramSectionData, summaryData, customClassName }) => {
  const pdfUrl = "/Brochure/AI-Master-Certification.pdf";
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

      <HeroSectionMaster
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf"
        noIIt={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Bots.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/blue_Cal_bots.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/build_bots.webp"
        CloseDes="Program Eligibility"
        CloseBotDate="Min 1 year"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={70}
        BotHeight={56}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/CS_master_BG+(1).webp"
        PointsDiv={true}
      />
      <PSummaryAD
        summaryData={summaryData}
        customClassName="customAlignmentClass"
      />
      <Practical />

      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />

<OutcomeSection />

<AnimationNew />

      <ReviewSlider />
      <MentorsSection />
      <UpskillMbl />

      <UpskillingSection />
    </>
  );
};

export default React.memo(FirstPart);
