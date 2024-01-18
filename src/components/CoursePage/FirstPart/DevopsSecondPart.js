import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
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
const DevOpsProject = dynamic(() =>
  import("../DevOps/DevOpsProject/DevOpsProject")
);

const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const Content = dynamic(() => import("../Content/content"));

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  mbldevops,
  FAQNewData,
  devops,
  devopfee,
  adsHide,
  interstedInHide,
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
            if (
              popupData ===
              "Cloud Computing & DevOps Certification Program"
            ) {
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
    <div style={{ marginTop: "50px" }}>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={interstedInHide}
        titleCourse="Cloud Computing & DevOps Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
        buttonHide={true}
      />
      <ToolsCovered devops={true} mbldevops={mbldevops} />
      <Certificate data={CertificateData} />
      <FeeSection
        devopfee={devopfee}
        adsHide={adsHide}
        Fee=" ₹ 70,000"
        FeeEmi="₹ 4,589/month"
        weekdaybatch="Weekend Batch"
        weekendbatch="Weekday Batch"
        weekday="SAT-SUN"
        weekend="(MON-TUE-WED-THU)"
        WeekdayDate="JAN 14th"
        WeekendDate="FEB 23rd"
        WeekendTime="8 PM - 10 PM"
        WeekdayTime="09:30 AM - 1:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={interstedInHide}
        dataScience={true}
        titleCourse="Cloud Computing & DevOps Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
      
        // <EMI POPUP
        emiType = "NO COST EMI"
        duration1 = "18 Months"
        totalAmount1 = "₹70,000"
        monthlyPayment1 = "₹4,589"
        greenDown1 = "Standard Intrest rate Applicable"
        duration2 = "12 Months"
        totalAmount2 = "₹70,000"
        monthlyPayment2 = "5,833"
      />

      <MentorsSection />
      <SliderTab />
      {adsHide ? "" : <PlacementCall devops={devops} />}

      <DevOpsProject
        adsHide={adsHide}
        titleCourse="Cloud Computing & DevOps Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
        dataScience={true}
        interstedInHide={true}
      />

      {adsHide ? "" : <FAQNew FAQNewData={FAQNewData} />}
      <Content dataScienceCounselling={true} CDevops={true} />
      <SeventhSection />
      {adsHide ? "" : <Footer />}
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <WhatsappFloat />
      {adsHide ? (
        ""
      ) : (
        <>
          {popupData.length == 0 ? (
            ""
          ) : (
            <OfferPopup popupData={popupData} devops={devops} />
          )}
        </>
      )}
    </div>
  );
};

export default SecondPart;
