import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Footer from "@/components/Global/Footer/Footer";
import SeventhSection from "@/components/Global/SeventhSection/SeventhSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
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

const FAQNew = dynamic(() => import("../FAQNew/FAQNew"));
const Content = dynamic(() => import("../Content/content"));
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
  Foundation,
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
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Freshers"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        buttonHide={true}
      />
      <ToolsCovered Intern={true} />
      <Certificate
        data={CertificateData}
        // projectWithCertificate={true}
        singlecertificate={true}
        FreshersDoubleCertificate={true}
      />
      <FeeSection
        Fee="₹75,000"
        FeeEmi="₹ 4,917/month"
        weekdaybatch="Weekend Batch"
        weekendbatch="Weekday  Batch"
        weekday="SAT - SUN"
        weekend="MON - FRI"
        WeekdayDate="APR 21st"
        WeekendDate="APR 19th"
        WeekdayTime="9:30 AM - 1:00 PM"
        WeekendTime="8:00 AM - 10:00 AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        titleCourse="Data Science & AI Certification Program For Freshers"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹75,000"
        monthlyPayment1="₹4,917"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹75,000"
        monthlyPayment2="₹7,375"
      />

      <MentorsSection />
      <SliderTab WithoutService={true} />
      <PlacementCall Foundation={true} />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Freshers"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data_Science_%26_AI_For_Freshers.pdf"
        projectSection={projectSection}
      />

      {/* <FAQNew FAQNewData={FAQNewData} /> */}
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </div>
  );
};

export default SecondPart;
