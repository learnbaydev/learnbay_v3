
import dynamic from "next/dynamic";

import PsummaryForm from "../PSummary/PsummaryForm";
import React, { useEffect, useState } from "react";

const Navbar = dynamic(() => import("@/components/course/navbarSection/NavbarSection"));
const HeroSection = dynamic(() => import("@/components/course/heroSection/HeroSection"));
const PSummaryAD = dynamic(() => import("../PSummary/PSummaryAD"));
const Practical = dynamic(() => import("../Practical/Practical"));
const ProgramSection = dynamic(() => import("@/components/course/programSection/programSection"));
const OutcomeSection = dynamic(() => import("@/components/course/outcomeSection/outcomeSection"));
const WhyChooseSection = dynamic(() => import("@/components/course/whyChoose/WhyChooseNew"));
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
const TrainerSection = dynamic(() => import("../../Global/TrainerSection/TrainerSection"));
const Testimonial = dynamic(() => import("../../Global/Testimonial/Testimonial"));
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() => import("../ContactCounsellor/ContactCounsellor"));
const CloudDevopsecond = dynamic(() => import("../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"));
const MasterSecondSection = dynamic(() => import("../../MastersCourse/MasterSecondSection/MasterSecondSection"));
const JobAbroad = dynamic(() => import("../../MastersCourse/JobAbroad/JobAbroad"));
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

const AIFirstPart = ({ SecondSectionData, TestimonialData }) => {
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
        title="Artificial Intelligence and "
        orgTitle="Machine Learning Program"
        descrption="Unlock the power of data with our comprehensive program, featuring hands-on learning, real-world projects, and domain specialization in fields like BFSI, healthcare, and retail."
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
      {!isMobile && <PsummaryForm showForm={true} interstedInHide={true} dataScienceCounselling={true} dataScience={true}/> }
      <Practical />
      <ProgramSection
        mid="Early to Mid"
        yearExp="1+ Years of Experience"
        PointOne="Data Analyst"
        pointTwo="Non-Techies"
        PointOneIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_Datas.webp"
        pointTwoIcon="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/icon_ytwos.webp"
        rightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
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
