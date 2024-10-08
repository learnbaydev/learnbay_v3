import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/MastersCourse/FirstSection/FirstSection";
import MasterSecondSection from "../MasterSecondSection/MasterSecondSection";
import JobAbroad from "../JobAbroad/JobAbroad";
const SecondNavbar = dynamic(() =>
  import("../../CoursePage/SecondNavbar/SecondNavbar")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhyLearnbay = dynamic(() =>
  import("../../MastersCourse/WhyLearnbay/WhyLearnbay")
);
const CloudDevopsecond = dynamic(() =>
  import(
    "../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
const Realstory = dynamic(() =>
  import(
    "../../Home/Realstory/Realstory"
  )
);
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import HeroSectionMaster from "@/components/course/heroSection/HeroSectionMaster";
import NavbarSection from "@/components/course/navbarSection/NavbarSection";
import PSummaryAD from "@/components/CoursePage/PSummary/PSummaryAD";
import Practical from "@/components/CoursePage/Practical/Practical";
import ProgramSection from "@/components/course/programSection/programSection";
import OutcomeSection from "@/components/course/outcomeSection/outcomeSection";
import WhyChooseSection from "@/components/course/whyChoose/WhyChooseNew";
import AnimationNew from "@/components/Home/whyChooseSection/AnimationNew";
const FirstPart = ({
  ProggramSectionData

 
}) => {

    const pdfUrl = "/Brochure/Masters-in-CS.pdf"
  return (
    <>
      {" "}
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

      
<PSummaryAD/>
<Practical />


      <ProgramSection
        ProggramSectionData={ProggramSectionData}
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />


<OutcomeSection />
<AnimationNew/>

    </>
  );
};

export default FirstPart;
