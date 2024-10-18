import dynamic from "next/dynamic";
import React from "react";

// Dynamic imports for all components
const Navbar = dynamic(() => import("@/components/Global/Navbar/Navbar"));
const FirstSection = dynamic(() =>
  import("@/components/CoursePage/FirstSection/FirstSection")
);
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);
const SecondNavbar = dynamic(() =>
  import("../../CoursePage/SecondNavbar/SecondNavbar")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const WhyLearnbay = dynamic(() =>
  import("../../CoursePage/WhyLearnbay/WhyLearnbay")
);
const CloudDevopsecond = dynamic(() =>
  import("../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection")
);
const Realstory = dynamic(() =>
  import("../../Home/Realstory/Realstory")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const TbBrandGoogleAnalyticsSvg = dynamic(() =>
  import("@/Data/svgData/TbIcons")
);
import { FaReact } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const ExecutiveFirstPart = ({


}) => {
  const seconddata = [
    { boldText: "IBM", normalText: "Certified Capstone", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp" },
    { CboldText: "175%", normalText: "Average Salary Hike", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp" },
    { boldText: "35K+", normalText: "Trusted Learners", },
    
  ];
  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Scientist: ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalyticsSvg/>,
        role: "Sr. Data Analyst:",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer: ", salary: "14 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Fast-Track Your Career in AI   ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Comprehensive Mastery of AI and Data Science:     ",
        description:
          "Gain in-depth knowledge and practical skills in AI and Data Science     ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Complimentary Advance Gen-AI Module     ",
        description:
          "Tailored for career transformation in a tech-driven era      ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "3 years of Job and Placement support     ",
        description:
          "Online and flexible, ideal for busy professionals:      ",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/guwati-job.webp",
      width: 410,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  const pdfUrl = "/Brochure/Executive-program-iit.pdf"
  return (
    <>
      {" "}
      <Navbar popup={true} dataScienceCounselling={true} />
      <FirstSection
        dataScienceCounselling={true}
        dataScience={true}
        FirstTyped="Guaranteed Interview Calls"
        SecondTyped="Capstone Project Certificate"
        ThirdTyped="Live Interactive Classes"
        titleCourse="AI & ML Program for tech professionals"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Executive+program+in+Data+Science+%26+AI-+IIT_compress.pdf"
        brochurePdf={pdfUrl}
        idss="KcQfbuwJBmU"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
        firstToparaImg="Data Science & AI"
        firstHeading="Executive program in  "
        firstTopPara="Expand beyond technology        "
        softwareBtnHide={true}
        // thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ai-f-one.webp"
        // videoId="KcQfbuwJBmU"
        radio={true}
        upSkillingHide={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/excutive-bg.webp"



      />
      <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad
        data={JobData}
      />
      <SecondNavbar dataScienceCounselling={true} />
      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />
      <WhoIsProgram
        first="Non-tech professionals with 6 months experience"
        second="Minimum 1 year of IT work experience        "
        third="Mid-career professionals interested in data science & AI"
        forth="Achieving higher career growth in data science and AI "
      />
      {/* <Testimonial redirectDS={true} Testimonial={TestimonialData} /> */}
      <WhyLearnbay idss="ZPOTy4PEnNU" NoGuwahati ={true} />
    </>
  );
};

export default ExecutiveFirstPart;
