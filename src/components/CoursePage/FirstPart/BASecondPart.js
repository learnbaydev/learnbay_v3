import BottomBar from "@/components/Global/BottomBar/BottomBar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);

const MentorsSection = dynamic(() =>
  import("../../../components/Global/MentorsSection/MentorsSection")
);

const SliderTab = dynamic(() =>
  import("../../../components/Global/SliderTabs/SliderTabs")
);

const PlacementCall = dynamic(() =>
  import("../../../components/Global/PlacementCall/PlacementCall")
);

const NewProjectSection = dynamic(() =>
  import("../../../components/Global/NewProjectSection/NewProjectSection")
);

const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const Content = dynamic(() => import("../../CoursePage/Content/content"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
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
        titleCourse="Business Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        buttonHide={true}
        interstedInHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 95,000"
        FeeEmi="₹ 6,228/month"
        weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT-SUN"
        weekend="MON-FRI"
        WeekdayDate="July 7th"
        WeekendDate="JUNE 7th"
        WeekendTime="8.00 PM - 10.00 PM"
        WeekdayTime="9:30 AM - 1:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        titleCourse="Business Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        dataScience={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹95,000"
        monthlyPayment1="₹6,228"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹95,000"
        monthlyPayment2="₹9,342"
      />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        titleCourse="Business Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program+newone.pdf"
        projectSection={projectSection}
        interstedInHide={true}
      />
      <FAQNew FAQNewData={FAQNewData} />
      <Content Banalytics={true} dataScienceCounselling={true} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
