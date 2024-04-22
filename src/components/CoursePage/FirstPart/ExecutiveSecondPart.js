import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BottomBar from "../../Global/BottomBar/BottomBar";
const GetHire = dynamic(() => import("../../MastersCourse/GetHire/GetHire"));
const ContactCounsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const SyllabusNew = dynamic(() =>
  import("../../CoursePage/Syllabus/MasterSyllabus")
);
const ToolsCovered = dynamic(() =>
  import("../../CoursePage/ToolsCovered/ToolsCovered")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const Certificate = dynamic(() =>
  import("../../MastersCourse/Certificate/Certificate")
);
const FeeSection = dynamic(() =>
  import("../../CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
  import("../../Global/MentorsSection/MentorsSection")
);
const SliderTabs = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
  import("../../Global/PlacementCall/PlacementCall")
);
const NewProjectSection = dynamic(() =>
  import("../../Global/NewProjectSection/NewProjectSection")
);

const SeventhSection = dynamic(() =>
  import("../../Global/SeventhSection/SeventhSection")
);
const MobileTestimonial = dynamic(() =>
  import("@/components/Home/MobileTestimonial/MobileTestimonial")
);

const Footer = dynamic(() => import("../../Global/Footer/Footer"));
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"));

const ExecutiveSecondPart = ({
  CertificateData,
  masterSyllabusMobile,
  projectSection,
  FAQNewData,
  noguwatiimg,
  isguwati,
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
  return (
    <>
      <GetHire />
      <ContactCounsellor dataScienceCounselling={true} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        MastersContent={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Executive+program+in+Data+Science+%26+AI-+IIT_compress.pdf"
        isguwati={true}
      />
      <ToolsCovered
        deskImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Tools-Logo.png"
        mobImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Mobile-Tools-Covered.png"
      />
      <Certificate data={CertificateData} Imgno={true} isguwati={true} />
      <FeeSection
        Fee="₹ 1,90,000"
        FeeEmi="12,455/month."
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekday  Batch"
        weekday="MON - FRI"
        weekend="MON - FRI"
        WeekdayDate="May 17th"
        WeekendDate="May 10th"
        WeekdayTime="8:00 AM - 10:00 AM"
        WeekendTime="8:00 PM - 10:00 PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        // EMI POPUPDATA
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹ 12,456"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹1,90,000"
        monthlyPayment2="₹18,683"
      />

      <SliderTabs />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Executive+program+in+Data+Science+%26+AI-+IIT_compress.pdf"
        projectSection={projectSection}
      />
      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <FAQNew FAQNewData={FAQNewData} isguwati={true} isSpecial={true} />

      <SeventhSection />
      <Footer />
      <BottomBar masterdegree={true} dataScienceCounselling={true} />
      <WhatsappFloat />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </>
  );
};

export default ExecutiveSecondPart;
