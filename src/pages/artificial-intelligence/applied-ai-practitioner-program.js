import React from "react";
import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/HeroSection")
);

const WhoCanApply = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/WhoCanApply")
);
const WhyThisProgram = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/WhyThisProgram")
);
const HowThisProgramHelpYourDomain = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/HowThisProgramHelpYourDomain"
  )
);
const ToolsAndPlatforms = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/ToolsAndPlatforms")
);
const YourJourney = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/YourJourney")
);
const AppliedAIPractitionerProgram = () => {
  return (
    <main>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <div style={{ marginTop: "80px", backgroundColor: "purple" }}>
        <HeroSection />
        <WhyThisProgram />
        <WhoCanApply />
        <HowThisProgramHelpYourDomain />
        <YourJourney />
        <ToolsAndPlatforms />
      </div>
    </main>
  );
};

export default AppliedAIPractitionerProgram;
