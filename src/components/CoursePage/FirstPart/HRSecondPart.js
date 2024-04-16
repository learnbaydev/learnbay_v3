import BottomBar from "@/components/Global/BottomBar/BottomBar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const Certificate = dynamic(() => import("../Certificate/Certificate"));
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const FeeSection = dynamic(() => import("../FeeSection/FeeSection"));

const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);

const SliderTab = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));

const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCall")
);

const NewProjectSection = dynamic(() =>
  import("../../Global/NewProjectSection/NewProjectSection")
);
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
);

const FAQNew = dynamic(() => import("../FAQNew/FAQNewDomain"));
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const Content = dynamic(() => import("../Content/content"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
}) => {
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
            if (popupData === "Business Analytics Program") {
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
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="HR Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/HR+Analytics+Certification+Program.pdf"
        buttonHide={true}
        interstedInHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹80,000"
        FeeEmi="₹ 5,244/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON-FRI"
        weekend="SAT-SUN"
        WeekdayDate="APR 12th"
        WeekendDate="MAY 12th"
        WeekendTime="9:30 AM - 1:00 PM"
        WeekdayTime="8.00 PM - 10.00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        titleCourse="HR Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/HR+Analytics+Certification+Program.pdf"
        dataScience={true}
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹80,000"
        monthlyPayment1="₹5,244"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹80,000"
        monthlyPayment2="₹7,867"
      />
      <MentorsSection />
      <SliderTab WithoutService={true} />
      <PlacementCall HRAnalyst={true} />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        titleCourse="HR Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/HR+Analytics+Certification+Program.pdf"
        projectSection={projectSection}
        interstedInHide={true}
      />
      <FAQNew FAQNewData={FAQNewData} />
      <Content
        dataScienceCounselling={true}
        HRContent={true}
        interstedInHide={true}
      />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
