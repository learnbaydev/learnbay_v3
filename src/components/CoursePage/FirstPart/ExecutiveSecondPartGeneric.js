import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/reviewSlider")
);
const ExecutiveSecondPart = () => {
  return (
    <>
    <ReviewSlider />
    <ToolsSection />
    </>
  );
};

export default ExecutiveSecondPart;
