import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/course/heroSection/HeroSection";
import DecisionSection from "@/components/course/decisionSection/DecisionSection";
import { TRUE } from "sass";
import ProgramSummary from "@/components/course/pSummary/ProgramSummary";
const Navbar = dynamic(() =>
  import("@/components/Global/Navbar/Navbar")
);
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);

const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);

const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/whyChooseSection")
);
const ExecutiveFirstPartGeneric = () => {
  const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf";
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
        title="Executive Program in Data Science & AI for"
        orgTitle="Managers and Leaders"
        descrption="Learn to leverage the power of data and AI to solve complex business challenges, enhance decision-making, and lead high-impact projects in your organization."
        spanTag="Curriculum Inclusive of Gen-AI"
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
        noIIt={true}
    
      />
      <ProgramSummary/>
      <ProgramSection
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default ExecutiveFirstPartGeneric;
