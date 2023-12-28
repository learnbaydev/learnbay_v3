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
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
const FirstPart = ({ TestimonialData }) => {
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
    formbl: [
      { icon: <BsPeople />, text: "Mock Interview Sessions" },
    ],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  return (
    <>
      {" "}
      <Navbar popup={true} dataScienceCounselling={true} />
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        dataScienceCounselling={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        cityParaCont="Elevate your tech career with our Master's programs"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/coursepageB.webp"
        firstToparaImg="with domain specialization"
        firstHeading="Advanced Data Science and AI Program"
      />
      <MasterSecondSection />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad />
      <SecondNavbar dataScienceCounselling={true} />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} Testimonial={TestimonialData} />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
    </>
  );
};

export default FirstPart;
