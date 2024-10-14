import DecisionSection from "@/components/course/decisionSection/DecisionSection";
import HeroSection from "@/components/course/heroSection/HeroSection";
import NavbarSection from "@/components/course/navbarSection/NavbarSection";
import { ThirdSectionData } from "@/Data/ThirdSectionData";
import dynamic from "next/dynamic";
import React from "react";
const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("../../../components/Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() =>
  import("../../CoursePage/WhoIsProgram/WhoIsProgram")
);
const WhyLearnbay = dynamic(() =>
  import("../../CoursePage/WhyLearnbay/WhyLearnbay")
);
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../../CoursePage/ContactCounsellor/ContactCounsellor")
);
const CloudDevopsecond = dynamic(() =>
  import(
    "../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
const FirstSection = dynamic(() =>
  import("../../CoursePage/FirstSection/FirstSection")
);
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import PSummaryAD from "../PSummary/PSummaryAD";
import ProgramSection from "@/components/course/programSection/programSection";
import OutcomeSection from "@/components/course/outcomeSection/outcomeSection";
import WhyChooseNew from "@/components/course/whyChoose/WhyChooseNew";
import WhyChoose from "@/components/course/whyChooseSection/WhyChooseSection";
import ReviewSlider from "@/components/course/reviewSlider/ReviewSlider";
import MentorsSection from "@/components/Global/MentorsSection/MentorsSection";
import Practical from "../Practical/Practical";
const FirstPart = ({}) => {
  const seconddata = [
    {
      boldText: "IBM",
      normalText: "Certified Capstone",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "175%",
      normalText: "Average Salary Hike",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp",
    },
    { boldText: "35K+", normalText: "Trusted Learners" },
  ];
  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition.",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Scientist ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. Data Analyst",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer ", salary: "14 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Elevate Your Expertise in Data Science and AI    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Bridge your Career Gap        ",
        description:
          "Internship certificate that helps you fill your career gap.         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Flexible Learning at your Convenience        ",
        description:
          "For professionals aiming to upskill without quitting their job.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Curriculum Inclusive of Gen-AI        ",
        description: "Tailored for career transformation in a tech-driven era",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
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
      <PSummaryAD />
      <Practical />
      <ProgramSection
        mid="Early to Mid"
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

      <WhyChooseNew />
      <WhyChoose />
    </>
  );
};

export default React.memo(FirstPart);
