import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NewSevenSection from "@/components/Global/SeventhSectionNew/NewSevenSection";

import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import StructuredSection from "@/components/course/structuredSection/StructuredSection";
import Achive from "@/components/course/jobReadySection/Achive";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import CertificateSection from "@/components/course/certificateSection/CertificateSection";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";


const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const Content = dynamic(() => import("../Content/content"));



const SecondPart = ({
  sections,
  FAQNewData,
  certificateNew,
}) => {
  const [popupData, setPopupData] = useState([]);

  // const emiPopupProps = {
  //   emiType: 'No Cost EMI',
  //   duration1: '18 months',
  //   totalAmount1: '₹2,50,000',
  //   monthlyPayment1: '₹16,389',
  //   greenDown1: 'Standard Interest Rates Applicable',
  //   duration2: '24 months',
  //   totalAmount2: '₹2,50,000',
  //   monthlyPayment2: '₹12,292',
  //   greenDown2: 'Another Green Down Text',
  // };
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl = "/Brochure/AI-Master-Certification.pdf";
  return (
    <div>

     
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
Fee="₹ 1,35,000 "
FeeEmi="₹ 7,500/ month"

// Hybrid Classes
hybridFee="₹ 1,50,000"
hybridEmi="₹ 8,333/ month"


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
      <Achive />

      <FAQNew FAQNewData={FAQNewData} />
      <NewSevenSection />
      <Content/>
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </div>
  );
};

export default SecondPart;
