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

const ProgramSyllabus = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ProgramSyllabus/ProgramSyllabus"
  )
);

const FinalProjectSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/FinalProjectSection/FinalProjectSection"
  )
);

// const AiColabExperienceSection = dynamic(() =>
//   import(
//     "@/components/AppliedAIPractitionerProgram/AiColabExperienceSection/AiColabExperienceSection"
//   )
// );

const CertificationsSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/CertificationsSection/CertificationsSection"
  )
);

const StartupCertificateSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/StartupCertificateSection/StartupCertificateSection"
  )
);

const ProgramSnapshotSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ProgramSnapshotSection/ProgramSnapshotSection"
  )
);

const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
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
        <ToolsAndPlatforms />
        <ProgramSyllabus />
        <FinalProjectSection />
        {/* <AiColabExperienceSection /> */}
        <CertificationsSection />
        <StartupCertificateSection />
        <ProgramSnapshotSection />
        <Footer />

        <WhatsappFloat />
      </div>
    </main>
  );
};

export default AppliedAIPractitionerProgram;
