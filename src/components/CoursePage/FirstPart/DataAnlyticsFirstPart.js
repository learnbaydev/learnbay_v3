import React from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
import { ThirdSectionData } from "@/Data/ThirdSectionData";
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const CloudDevopsecond = dynamic(() =>
  import(
    "../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
import { BsDatabaseUp } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
const DataAnlyticsFirstPart = ({ SecondSectionData, TestimonialData, ibmOnly, }) => {
  const DsSecond = {
    title1: "Project-Based Learning",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "3 Real-World Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact/>,
        role: "Sr. Data Analyst",
        salary: " 15 LPA",
      },
      { icon: <TbBrandGoogleAnalytics />, role: "BI Developer", salary: " 10 LPA" },
      { icon: <BsDatabaseUp />, role: "Database Admin ", salary: "13 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-770-min.webp",
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
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Data Analytics Certification Program"
        cityParaCont="Upskill yourself to the top within 6 months with curriculum designed by industry experts"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/dahead.webp"
        firstToparaImg=""
        firstHeading="Data Analytics Certification Program"
        firstTopPara="Curriculum designed by industry experts"
        idss="y_0IdhFKJKM"
        ibmOnly={ibmOnly}
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/da-f.webp"
        videoId="y_0IdhFKJKM"
        softwareBtnHide={true}
     
      />
         <CloudDevopsecond data={DsSecond} />
      {/* <SecondSection SecondSectionData={SecondSectionData} /> */}
      <SecondNavbar
        titleCourse="Data Analytics Certification Program"
        dataScience={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
      />
      {/* <WhoProgram
        dataScience={true}
        interstedInHide={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      /> */}
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data analytics"
        forth="Developing skills in data analytics for future opportunities"
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
      <ContactConsellor
        titleCourse="Data Analytics Certification Program"
        dataScience={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
      />
    </>
  );
};

export default React.memo(DataAnlyticsFirstPart);
