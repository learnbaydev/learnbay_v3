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
  import("@/components/course/whyChooseSection/whyChooseSection")
);
const ExecutiveFirstPart = () => {
    const pdfUrl = "/Brochure/Iit-Data-Analytics-Certifications.pdf"
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
      
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}

      />
      <DecisionSection />
      <ProgramSection   dataScienceCounselling={true} interstedInHide={true} />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default ExecutiveFirstPart;
