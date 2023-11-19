import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Global/Footer/Footer";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const SyllabusNew = dynamic(() => import("../Syllabus/MasterSyllabus"));
const ToolsCovered = dynamic(() => import("../ToolsCovered/ToolsCovered"));
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

const NewProjectSection = dynamic(() =>
  import("../../../components/Global/NewProjectSection/NewProjectSection")
);

const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
}) => {
  return (
    <div>
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        buttonHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      <FeeSection
        Fee="₹ 1,25,000"
        FeeEmi="₹ 8,194/month"
        weekdaybatch="Weekday Batch"
        weekendbatch="Weekend Batch"
        weekday="MON - FRI"
        weekend="SAT-SUN"
        WeekdayDate="NOV 17th"
        WeekendDate="NOV 26th"
        WeekendTime="09:30 AM - 1:00 PM"
        WeekdayTime="08:00 AM - 10:00 AM"
        FeeContent3="Flexible payment"
        FeeContent4="Easy loan procedure"
        FeeContent5="15 days refund policy"
        FeeContent6="No additional cost"
        dataScienceCounselling={true}
      />

      <MentorsSection />
      <SliderTab />
      <PlacementCall />

      <NewProjectSection
        dataScience={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        projectSection={projectSection}
      />

      <FAQNew FAQNewData={FAQNewData} />
      <Footer />
      <BottomBar />
      <WhatsappFloat />
    </div>
  );
};

export default SecondPart;
