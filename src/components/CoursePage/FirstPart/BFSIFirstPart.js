import dynamic from "next/dynamic";
import React from "react";

import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import Navbar from "@/components/Global/Navbar/Navbar";
import { AiOutlineContainer } from "react-icons/ai";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
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
  import("../cloud&devops/DevOpsSecondSection/DevOpsSecondSection")
);
const MasterSecondSection  = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(()=>
import( "../../MastersCourse/JobAbroad/JobAbroad"
)
);
const BusinessAnalyticsFirstPart = ({ SecondSectionData, TestimonialData }) => {
  const seconddata = [
    { boldText: "0+", normalText: "Countries Recognition", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp" },
    { CboldText: "0+", normalText: "Transferrable ECTS Credits", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp" },
    { boldText: "3K+", normalText: "Trusted Learners", },
    
  ];
  const BASecond = {
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "10 Real-World + 2 Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Data Scientist (BFSI) ",
        salary: " 17.3 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "AI Specialist (BFSI) ",
        salary: " 27.6 LPA",
      },
      { icon: <BsDatabaseUp />, role: "Risk Analyst ", salary: " 18 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-770-min.webp",
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
    title: "Advance Data Science for International Careers",
    points: [
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Earn a Degree Without Pausing Your Career",
        description: "Flexible online degrees from LearnBay's ExcelVarsity for working pros.",
      },
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Skill Up for Swift Promotions",
        description: "Curriculum designed for rapid career advancement and leadership roles.",
      },
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Step into High-Value Research Careers",
        description: "Degree for prestigious research jobs and institutional collaborations.",
      },
   
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BA-min.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Data Science & AI for BFSI Professionals"
        cityParaCont="Empower Your BFSI Journey with Data Science and AI Skills"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+for+BFSI+Professionals.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BFSIHeader-min.webp"
        firstToparaImg=""
        firstHeading="Data Science & AI for BFSI Professionals"
        firstTopPara=""
        idss="ecI6FD8ElDs"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BFSIHeader-min.webp"
        videoId="ecI6FD8ElDs"
        topHide={true}
      />
         <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={BASecond} />
      <JobAbroad data={JobData}/>
      {/* <SecondSection SecondSectionData={SecondSectionData} /> */}
      <SecondNavbar hideProjectLab={true} />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Month of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in BFSI"
        forth="Developing skills in BFSI for future opportunities"
      />
      {/* <WhyLearnbay idss="ZPOTy4PEnNU" /> */}
      <GetHire />
      <ContactConsellor
        dataScience={true}
        titleCourse="Data Science & AI for BFSI Professionals"
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Certification+Program+for+BFSI+Professionals.pdf"
      />
    </>
  );
};

export default React.memo(BusinessAnalyticsFirstPart);
