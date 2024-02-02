import dynamic from "next/dynamic";
import React from "react";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
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
  import("../cloud&devops/DevOpsSecondSection/DevOpsSecondSection")
);
const MasterSecondSection  = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const FirstSection = dynamic(() => import("../FirstSection/FirstSection"));
const JobAbroad = dynamic(()=>
import( "../../MastersCourse/JobAbroad/JobAbroad"
)
);

import { AiOutlineContainer } from "react-icons/ai";
import { BsDatabaseUp, BsDisplay, BsPeople } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const FirstPart = ({ SecondSectionData, TestimonialData }) => {
  const seconddata = [
    { boldText: "IBM", normalText: "Certified Capstone", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp" },
    { CboldText: "175%", normalText: "Average Salary Hike", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp" },
    { boldText: "35K+", normalText: "Trusted Learners", },
    
  ];
  const DsSecond = {
    title1: "Project-Based Learning",
    image1: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+773.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "3 Real-World Capstone Projects",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask-group-_32_-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Data Scientist ",
        salary: " 14LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Data Analyst ",
        salary: " 11 LPA",
      },
      { icon: <BsDatabaseUp />, role: "Data Engineer ", salary: "10.9 LPA" },
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
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job1.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Foundation Tack in Data Science & AI"
        cityParaCont="Gain work experience of data scientist with real projects"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+Foundation+Program+Learnbay.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="Data Science & AI"
        firstHeading="Foundation Track in"
        firstTopPara="Curriculum designed by industry experts"
        idss="tBKOlgHS-k8"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Foundation+program-min.webp"
        videoId="tBKOlgHS-k8"
   
        ibmOnly={true}
      />
       <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={DsSecond} />
      <JobAbroad data ={JobData}/>

      <SecondNavbar
        hideProjectLab={true}
        interstedInHide={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+Foundation+Program+Learnbay.pdf"
        titleCourse="Data Science Foundation Program"
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data science"
        forth="Developing skills in data science for future opportunities"
      />
      {/* <WhyLearnbay idss="ZPOTy4PEnNU" /> */}
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science Foundation Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+Foundation+Program+Learnbay.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
