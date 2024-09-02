import Footer from "@/components/Global/Footer/Footer";
import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import CertificateSection from "@/components/course/certificateSection/CertificateSection";
import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import dynamic from "next/dynamic";
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"));
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

const ExecutiveSecondPart = ({ sections, FAQNewData }) => {
  const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf";
  return (
    <>
      <ReviewSlider />
      <MentorsSection />
      <UpskillingSection />
      <ProjectSection dataScienceCounselling={true} interstedInHide={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <ToolsSection />
      <CertificateSection />
      <FeeSection  

// EMIPOPUP
      emiType="NO COST EMI"
      duration1="18 Months"
      totalAmount1="₹2,10,000"
      monthlyPayment1="₹8,178"
      greenDown1="Standard Intrest rate Applicable"
      duration2="12 Months"
      totalAmount2="₹2,10,000"
      monthlyPayment2="₹9,342"
      dataScienceCounselling={true}/>
      <JobReadySection />
      <StructuredSection />
      <FAQNew FAQNewData={FAQNewData} isGuwahati={true} isSpecial={true} />
      <Footer />
    </>
  );
};

export default ExecutiveSecondPart;
