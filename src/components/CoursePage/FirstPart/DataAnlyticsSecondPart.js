import BottomBar from "@/components/Global/BottomBar/BottomBar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LJourney from "../LJourney/LJourney";
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
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
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
            if (popupData === "Adv AI and ML Certification") {
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
          <LJourney/>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Data Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        interstedInHide={true}
        buttonHide={true}
      />
      <ToolsCovered foundation={true} />
      <Certificate
        data={CertificateData}
        projectWithCertificate={true}
        singlecertificate={true}
      />
      <FeeSection
        Fee="₹85,000"
        FeeEmi="₹5,572/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - FRI"
        weekend="SAT - SUN"
        WeekdayDate="June 14th"
        WeekendDate="June 16th"
        WeekendTime="9:30 AM - 1:00 PM"
        WeekdayTime="8:00 AM - 10:00 AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Data Analytics Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹85,000"
        monthlyPayment1="₹5,572"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹85,000"
        monthlyPayment2="₹8,358"
      />
      <MentorsSection />
      <SliderTab WithoutService={true} />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        titleCourse="Data Analytics Certification Programs"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
        projectSection={projectSection}
        interstedInHide={true}
      />
      <FAQNew FAQNewData={FAQNewData} />
      <Content dataScienceCounselling={true} DataAnalytics={true} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
