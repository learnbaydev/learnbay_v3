import React from "react";
import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/HeroSection/HeroSection")
);

const WhoCanApply = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/WhoCanApply/WhoCanApply")
);
const WhyThisProgram = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/WhyThisProgram/WhyThisProgram"
  )
);
const HowThisProgramHelpYourDomain = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/HowThisProgramHelpYourDomain/HowThisProgramHelpYourDomain"
  )
);
const ToolsAndPlatforms = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ToolsAndPlatforms/ToolsAndPlatforms"
  )
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
      <div style={{ marginTop: "80px" }}>
        <HeroSection />
        <WhyThisProgram />
        <WhoCanApply />
        <HowThisProgramHelpYourDomain />
        {/* <YourJourney /> */}
        <ToolsAndPlatforms />
      </div>
    </main>
  );
};

export default AppliedAIPractitionerProgram;
