import dynamic from "next/dynamic";

import PsummaryForm from "../PSummary/PsummaryForm";
import React, { useEffect, useState } from "react";
import HeroSectionAI from "@/components/course/heroSection/HeroSectionAI";

const Navbar = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const Practical = dynamic(() => import("../Practical/Practical"));
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);
const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);
const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChoose/WhyChooseNew")
);
const AIFirstPart = ({ ProggramSectionData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pdfUrl = "/Brochure/Advance-AI-ML.pdf";

  return (
    <>
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <HeroSectionAI
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
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
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/bg_AI_MLS.webp"
        purpleButton={true}
        PointsDiv={true}
      />

      {isMobile && <PSummaryAD />}
      {!isMobile && (
        <PsummaryForm
          showForm={true}
          interstedInHide={true}
          dataScienceCounselling={true}
          dataScience={true}
        />
      )}
      <Practical />
      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />

      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default React.memo(AIFirstPart);
