import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReviewSlider = dynamic(() =>
  import("@/components/course/reviewSlider/ReviewSlider"), 
);
const UpskillMbl = dynamic(() =>
  import("@/components/course/upskillingSection/UpskillMbl"), 
);
const UpskillingSection = dynamic(() =>
  import("@/components/course/upskillingSection/upskillingSection"), 
);
const ProjectSection = dynamic(() =>
  import("@/components/course/projectSection/ProjectSection"), 
);
const SyllabusSection = dynamic(() =>
  import("@/components/course/syllabusSection/SyllabusSection"), 
);
const ToolsSection = dynamic(() =>
  import("@/components/course/toolsSection/ToolsSection"), 
);
const CertificateSection = dynamic(() =>
  import("@/components/course/certificateSection/CertificateSection"), 
);
const JobReadySection = dynamic(() =>
  import("@/components/course/jobReadySection/JobReadySection"), 
);
const StructuredSection = dynamic(() =>
  import("@/components/course/structuredSection/StructuredSection"), 
);

const Footer = dynamic(() =>
  import("@/components/Global/Footer/Footer"), 
);
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat"), 
);
const BottomBar = dynamic(() =>
  import("@/components/Global/BottomBar/BottomBar"), 
);

const SecondPart = ({ certificateNew, sections, FAQNewData }) => {
  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        if (popData == []) {
          setPopupData([]);
        }
        popData.map((data, i) => {
          data.page.map((popupData, i) => {
            if (popupData === "Adv AI and ML Certification") {
              setPopupData(data);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  const pdfUrl = "/Brochure/Advance-AI-ML.pdf";

  return (
    <div>
      <ReviewSlider />
      <UpskillMbl />
      <UpskillingSection />
      <ProjectSection dataScienceCounselling={true} interstedInHide={true} />
      <SyllabusSection
        sections={sections}
        interstedInHide={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <ToolsSection />
      <CertificateSection certificateNew={certificateNew} />
      <FeeSection
        // EMIPOPUP
        emiType="Live online classes"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹14,094"
        greenDown1="Hybrid Classes"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
      />
      <StructuredSection />
      <JobReadySection />

      <Footer />
      <WhatsappFloat />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
    </div>
  );
};

export default SecondPart;
