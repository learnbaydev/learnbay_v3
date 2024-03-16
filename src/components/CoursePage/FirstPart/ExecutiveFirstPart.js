import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import MasterSecondSection from "../../MastersCourse/MasterSecondSection/MasterSecondSection";
import JobAbroad from "../../MastersCourse/JobAbroad/JobAbroad";
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
const ExecutiveFirstPart = ({
  TestimonialData,
  WolfLink,
  formbtn,

 
}) => {
  const seconddata = [
    {
      boldText: "60+",
      normalText: "Countries Recognition",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "90+",
      normalText: "Transferrable ECTS Credits",
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
        icon: <TbBrandGoogleAnalytics />,
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
  return (
    <>
      {" "}
      <Navbar popup={true} dataScienceCounselling={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        FirstTyped="Guaranteed Interview Calls"
        SecondTyped="Capstone Project Certificate"
        ThirdTyped="Live Interactive Classes"
        titleCourse="AI & ML Program for tech professionals"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
        idss="KcQfbuwJBmU"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-ml-main.webp"
        firstToparaImg="Data Science & AI"
        firstHeading="Executive program in  "
        firstTopPara="Learnbay Excelvarsity"
        // thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ai-f-one.webp"
        // videoId="KcQfbuwJBmU"
        radio={true}
        upSkillingHide={true}
        fullStack={true}
        backgorunimg ={true}
        isSpecialPage={true}
        isguwati={true}
      
       
      
        

       
        
        
     
  
  
      />
      <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad
        data={JobData}
     
        formbtn={formbtn}
      
        
      />
      <SecondNavbar dataScienceCounselling={true} />
      <Realstory/>
      <TrainerSection idss="eautK0odE7Q" />
      {/* <Testimonial redirectDS={true} Testimonial={TestimonialData} /> */}
      <WhyLearnbay idss="ZPOTy4PEnNU" />
    </>
  );
};

export default ExecutiveFirstPart;
