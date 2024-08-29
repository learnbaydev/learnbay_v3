import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import CertificateSection from "@/components/course/certificateSection/CertificateSection";
import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/reviewSlider")
);
const FeeSection = dynamic(() =>
  import("@/components/course/feeSection/feeSection")
);
const JobReadySection = dynamic(() =>
  import("@/components/course/jobReadySection/jobReadySection")
);
const StructuredSection = dynamic(() =>
  import("@/components/course/stucturedSection/StucturedSection")
);
const UpskillingSection = dynamic(() =>
  import("@/components/course/upskillingSection/upskillingSection")
);
const ExecutiveSecondPart = ({sections}) => {
  return (
    <>
    <ReviewSlider />
    <MentorsSection />
    <UpskillingSection />
    <ProjectSection />
    {/* <SyllabusSection sections={sections} /> */}
    <ToolsSection />
    <CertificateSection />
    <FeeSection />
    <JobReadySection />
    <StructuredSection />
    </>
  );
};

export default ExecutiveSecondPart;
