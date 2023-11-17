import React from "react";
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
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Software Development Certification Program"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
        buttonHide={true}
      />
      {/* <Certificate data={FSSPDataScienceCourseData[0].Certificate} /> */}
      <FeeSection
        Fee="₹ 1,15,000"
        FeeEmi="₹ 7,538/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekday Batch"
        weekday="MON-WED-FRI"
        weekend="MON-WED-FRI"
        WeekdayDate="Nov 17th"
        WeekendDate="Nov 24th"
        WeekendTime="07:30AM - 09:30AM"
        WeekdayTime="08:00PM - 10:00PM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
      />
      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection />
      <Footer />
      <BottomBar />
      <WhatsappFloat />
    </div>
  );
};

export default FullStackSoftwareDevelopmentSecondPart;
