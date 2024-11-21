import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import PSummary from "../pSummary/PSummary";
import AnimationDSA from "@/components/Home/whyChooseSection/AnimationDSA";
const FullStackSecondSection = dynamic(() =>
  import("../FullStackSecondSection/FullStackSecondSection")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));

const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(() =>
  import("../../MastersCourse/JobAbroad/JobAbroad")
);

const FullStackSoftwareDevelopmentFirstPart = ({ SecondSectionData, summaryData }) => {
 
  const JobData = {
    title: "Decode Your Tech Carer Path to Competitive Success",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Transform with Coding Expertise",
        description:
          "Build a highly desired software developer/engineer role with our multifaceted training.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Learn and Practice with Real-time coding projects in an industry-leading setup",
        description:
          "Exhibit real-time coding mastery to tackle algorithmic ordeals.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "From Novice to Specialist",
        description:
          "Master, from basics to advanced DSA concepts to specify your reign in the tech field. ",
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
  const pdfUrl = "/Brochure/Data-Structure-System-Design.pdf";
  return (
    <div>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Structure Algorithms & System Design"
        cityParaCont="Master coding & land promising DSA roles with leading product-based companies"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fullhead.webp"
        firstToparaImg="System Design"
        firstHeading="Data Structure Algorithms &"
        firstTopPara="Ace PRODUCT-BASED interviews in Top MNCs"
        idss="0cspp1jXAbM"
        interstedInHide={true}
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/sf-f.webp"
        videoId="0cspp1jXAbM"
            backgorunimg={true}
      backgroundImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/dsa_backgrounds.webp"
      />

      {/* <MasterSecondSection data={seconddata} /> */}
      <PSummary summaryData={summaryData}/>
      <JobAbroad
        data={JobData}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <FullStackSecondSection />

      <WhoIsProgram
        first="BE/B.Tech, MBA, MCA/M.Tech, B.Sc, CS"
        second="Software Developers with min. 1 year of experience"
        third="Students pursuing BE/B.Tech, MBA, MCA/M.Tech, B.Sc, CS"
        forth="For individuals seeking coding mastery, programming libraries, and API skills"
      />
      <AnimationDSA/>
      <GetHire />
      <ContactConsellor
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
    </div>
  );
};

export default React.memo(FullStackSoftwareDevelopmentFirstPart);
