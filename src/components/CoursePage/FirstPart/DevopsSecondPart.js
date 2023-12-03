import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
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

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  mbldevops,
  FAQNewData,
  devops,
  devopfee ,
  
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
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advance Cloud Computing & DevOps Certification Program"
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
        buttonHide={true}
      />
      <ToolsCovered  devops={true} 
      mbldevops={mbldevops} />
      <Certificate data={CertificateData} />
      <FeeSection
        devopfee ={devopfee }
        Fee=" ₹ 1,35,000"
        FeeEmi="₹ 8,850/month"
        weekdaybatch="Weekday Evening"
        weekendbatch="Weekday  Evening"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="DEC 1st"
        WeekendDate="DEC 15th"
        WeekendTime="08:00 PM - 10:00 PM"
        WeekdayTime="08:00 PM - 10:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Advance Cloud Computing & DevOps Certification Program"
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
      
      />

      <MentorsSection />
      <SliderTab />
      <PlacementCall  devops={devops}/>

      <DevOpsProject
        titleCourse="Advance Cloud Computing & DevOps Certification Program"
        brochureLink="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/cloud-computing/Cloud-and-syllab.pdf"
        dataScience={true}
        interstedInHide={true}
      />

      <FAQNew FAQNewData={FAQNewData} />
      <Footer />
      <BottomBar />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
