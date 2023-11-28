import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const MentorsSection = dynamic(() =>
  import("../../../components/Global/MentorsSection/MentorsSection")
);
const SliderTab = dynamic(() =>
  import("../../../components/Global/SliderTabs/SliderTabs")
);
const PlacementCall = dynamic(() =>
  import("../../../components/Global/PlacementCall/PlacementCall")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);

const FullStackSoftwareDevelopmentSecondPart = ({
  masterSyllabusMobile,
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
            if (popupData === "Full Stack Developer course") {
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
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        buttonHide={true}
        interstedInHide={true}
      />
      {/* <Certificate data={FSSPDataScienceCourseData[0].Certificate} /> */}
      <FeeSection
        Fee="₹ 1,15,000"
        FeeEmi="₹ 7,538/month"
        weekdaybatch="Weekday Evening (JAVA BATCHES)"
        weekendbatch="Weekday Evening (DSA BATCHES)"
        weekday="MON-WED-FRI"
        weekend="MON-WED-FRI"
        WeekdayDate="DEC 15th"
        WeekendDate="DEC 22nd"
        WeekendTime="08:00PM - 10:00PM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        dataScience={true}
        interstedInHide={true}
      />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection />
      <Footer />
      <BottomBar />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default FullStackSoftwareDevelopmentSecondPart;
