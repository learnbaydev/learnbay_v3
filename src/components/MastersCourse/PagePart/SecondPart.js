import React from "react";
import dynamic from "next/dynamic";
import BottomBar from "../../Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const GetHire = dynamic(() => import("../GetHire/GetHire"));
const ContactCounsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const SyllabusNew = dynamic(() =>
  import("../../CoursePage/Syllabus/MasterSyllabus")
);
const ToolsCovered = dynamic(() =>
  import("../../CoursePage/ToolsCovered/ToolsCovered")
);
const Certificate = dynamic(() => import("../Certificate/Certificate"));
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
const Footer = dynamic(() => import("../../Global/Footer/Footer"));

const SecondPart = ({
  CertificateData,
  masterSyllabusMobile,
  projectSection,
}) => {
  return (
    <>
      <GetHire />
      <ContactCounsellor dataScienceCounselling={true} interstedInHide={true} />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
      />
      <ToolsCovered
        deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
        mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
      />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 2,50,000"
        FeeEmi="12,292/month."
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - FRI"
        weekend="SAT-SUN"
        WeekdayDate="DEC 14th"
        WeekendDate="NOV 5th"
        WeekendTime="09:30 AM - 1:00 PM"
        WeekdayTime="08:00 PM - 10:00 PM"
        CutFee="₹ 3,25,000/-"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <MentorsSection />
      <SliderTabs />
      <PlacementCall />
      <NewProjectSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
        projectSection={projectSection}
      />
      {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
      <SeventhSection />
      <Footer />
      <BottomBar masterdegree={true} />
      <WhatsappFloat />
    </>
  );
};

export default SecondPart;
