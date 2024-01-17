import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
const WhatsappFloat = dynamic(() =>
  import("@/components/Global/WhatappsFloat/WhatsappFloat")
);
const Content = dynamic(() =>
  import("../../../components/CoursePage/Content/content")
);
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);

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
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const NewProjectSection = dynamic(() =>
  import("../../../components/Global/NewProjectSection/NewProjectSection")
);

const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
import BottomBar from "@/components/Global/BottomBar/BottomBar";
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
  singlecertificate,
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
            if (popupData === "Data Analytics Program") {
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
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        interstedInHide={true}
        buttonHide={true}
      />
      <ToolsCovered />
      <Certificate
        data={CertificateData}
        singlecertificate={singlecertificate}
      />
      <FeeSection
        Fee="₹ 80,000"
        FeeEmi="₹ 5,244/month"
        weekdaybatch="Weekday Evening"
        weekendbatch="Weekday  Morning"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="JAN 10th"
        WeekendDate="JAN 12th"
        WeekdayTime="8 PM - 10 PM"
        WeekendTime="8 AM - 10 AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
    



        // EMI POPUPDATA
        emiType = "NO COST EMI"
        duration1 = "18 Months"
        totalAmount1 = "₹80,000"
        monthlyPayment1 = "₹5,244"
        greenDown1 = "Standard Intrest rate Applicable"
        duration2 = "12 Months"
        totalAmount2 = "₹80,000"
        monthlyPayment2 = "₹7,866"
    />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <NewProjectSection
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specializations"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        projectSection={projectSection}
        interstedInHide={true}
      />
      <FAQNew FAQNewData={FAQNewData} />
      <Content dataScienceCounselling={true}  DataAnalytics={true}/>
      <SeventhSection />
      <Footer />
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
