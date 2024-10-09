import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BottomBar from "../../Global/BottomBar/BottomBar";
import ReviewSlider from "@/components/course/reviewSlider/ReviewSlider";
import UpskillMbl from "@/components/course/upskillingSection/UpskillMbl";
import UpskillingSection from "@/components/course/upskillingSection/upskillingSection";
import ProjectSection from "@/components/course/projectSection/ProjectSection";
import SyllabusSection from "@/components/course/syllabusSection/SyllabusSection";
import ToolsSection from "@/components/course/toolsSection/ToolsSection";
import CertificateSection from "@/components/course/certificateSection/CertificateSection";
import StructuredSection from "@/components/course/structuredSection/StructuredSection";
import JobReadySection from "@/components/course/jobReadySection/JobReadySection";
import Achive from "@/components/course/jobReadySection/Achive";
import NewSevenSection from "@/components/Global/SeventhSectionNew/NewSevenSection";
import AnimationNew from "@/components/Home/whyChooseSection/AnimationNew";

const FeeSection = dynamic(() => import("../../course/feeSection/FeeSectionCourse"));

const Content = dynamic(() => import("../../CoursePage/Content/content"));


const Footer = dynamic(() => import("../../Global/Footer/Footer"));
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"));

const SecondPart = ({ FAQNewData, sections, certificateNew }) => {
  const [popupData, setPopupData] = useState([]);
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
            if (popupData === "Master in Cs") {
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
  const pdfUrl = "/Brochure/Masters-in-CS.pdf";
  return (
    <>
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
      <Achive />

      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <FAQNew FAQNewData={FAQNewData} />
      <Content Masterscontent={true} dataScienceCounselling={true} />
      <NewSevenSection />
      <Footer />
      <BottomBar masterdegree={true} dataScienceCounselling={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </>
  );
};

export default SecondPart;
