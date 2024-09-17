import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/course/heroSection/HeroSection";
import DecisionSection from "@/components/course/decisionSection/DecisionSection";
const Navbar = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);

const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);

const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/WhyChooseSection")
);
const ExecutiveFirstPartGeneric = () => {
    const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf"
  return (
    <>
      {" "}
      <Navbar
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}

      />
      <HeroSection
   thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/first_yt_thumb.webp"
      spanTag="E&ICT Academy IIT Guwahati"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"

      />
      <DecisionSection />
      <ProgramSection   dataScienceCounselling={true} interstedInHide={true}    brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf" />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default ExecutiveFirstPartGeneric;
