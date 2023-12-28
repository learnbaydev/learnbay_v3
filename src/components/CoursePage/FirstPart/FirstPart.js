import React from "react";
import dynamic from "next/dynamic";

import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
import { ThirdSectionData } from "@/Data/ThirdSectionData";
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
import { FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
const FirstPart = ({ SecondSectionData, TestimonialData }) => {
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
        icon: <FaReact/>,
        role: "Sr. Data Scientist ",
        salary: " 27 LPA",
      },
      { icon: <TbBrandGoogleAnalytics />, role: "Sr. Data Analyst", salary: " 15 LPA" },
      { icon: <BsPersonGear />, role: "ML Engineer ", salary: "14 LPA" },
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
     <SecondSection SecondSectionData={SecondSectionData} />
      <CloudDevopsecond data={DsSecond} />
      <SecondNavbar
        interstedInHide={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
      />
      <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data science"
        forth="Developing skills in data science for future opportunities"
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
