import React from "react";
// import dynamic from "next/dynamic";
// import Header from "@/app/components/course/hero/DSAHeader";
// import BottomBar from "@/app/components/global/BottomBar/BottomBar";
// import BookDemo from "@/app/components/course/BookDemo/BookDemo";
import { parseJSONData } from "@/Util/JsonConvertor";
import DSAHeader from "@/components/CoursePage/NewDSA/Header/NewDSAHeader";
import Navbar from "@/components/Global/Navbar/Navbar";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
import ProgramSection from "@/components/CoursePage/NewDSA/ProgramSection/ProgramSection";
import DSAPractical from "@/components/CoursePage/NewDSA/Practical/DSAPractical";
import AnimationDSA from "@/components/CoursePage/NewDSA/DSAAnimationNew/DSAAnimationNew";
import JobReadySection from "@/components/CoursePage/NewDSA/JobReadySection/JobReadySection";
import DSASyllabus from "@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus";
import NewCertificateSection from "@/components/CoursePage/newCertificate/NewCertificate";
import DSAFeeSection from "@/components/CoursePage/dsaFee/DSAFeeSection";
import Footer from "@/components/Global/Footer/Footer";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import NewSevenSection from "@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection";
import MentorsSection from "@/components/course/MentorsSection/MentorsSection";
import DSAProjectSection from "@/components/CoursePage/NewDSA/ProjectSection/DSAProjectSection";
import ReviewSlider from "@/components/Home/newUI/reviewSlider/reviewSlider";
// const Practical = dynamic(() =>
//   import("@/app/components/course/practical/DSAPractical")
// );
// const ProgramSection = dynamic(
//   () => import("@/app/components/course/programsection/programSection"),
//   { ssr: false }
// );
// const AnimationNew = dynamic(() =>
//   import("@/app/components/course/whyChoose/DSAAnimationNew")
// );
// const ReviewSlider = dynamic(() =>
//   import("@/app/components/global/reviewSlider/ReviewSlider")
// );
// const NewSevenSection = dynamic(() =>
//   import("@/app/components/global/newSevenSection/NewSevenSection")
// );
// const JobReadySection = dynamic(() =>
//   import("@/app/components/course/jobReadySection/JobReadySection")
// );
// const MentorsSection = dynamic(
//   () => import("@/app/components/course/mentor/Mentor"),
//   { ssr: false }
// );
// const SyllabusSection = dynamic(
//   () => import("@/app/components/course/syllabus/SyllabusSection"),
//   { ssr: false }
// );
// const FeeContent = dynamic(() =>
//   import("@/app/components/course/feeSection/FeeSection")
// );
// const ProjectSection = dynamic(
//   () => import("@/app/components/course/projectSection/DSAProjectSection"),
//   { ssr: false }
// );
// const CertificateSection = dynamic(() =>
//   import("@/app/components/course/certificateSection/DSACertificateSection")
// );

const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl = "/Brochure/Data-Structure-System-Design.pdf";

  return (
    <main>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <DSAHeader
        title1={NewDSAData[0].header[0].title1}
        orgTitle={NewDSAData[0].header[0].orgTitle}
        title2={NewDSAData[0].header[0].title2}
        spanTag={NewDSAData[0].header[0].spanTag}
        spanIcon={NewDSAData[0].header[0].spanIcon}
        points={NewDSAData[0].header[0].points}
        mentorText={NewDSAData[0].header[0].mentorText}
        mentorFromImg={NewDSAData[0].header[0].mentorFromImg}
        descrption={NewDSAData[0].header[0].descrption}
        interstedInHide={true}
      />
      <BookDemo interstedInHide={true} />
      <ProgramSection
        programSectionData={NewDSAData[0].ProgramSection}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
        dataScience={true}
        interstedInHide={true}
      />
      <DSAPractical />
      <AnimationDSA />
      <JobReadySection />
      <DSASyllabus
        sections={NewDSAData[0].sections}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
        // brochureLink={DSAJsonData.brochureLink}
        // brochurePdf={DSAJsonData.brochurePdf}
        // downloadBrochure={true}
      />
      <NewCertificateSection certificateNew={NewDSAData[0].certificateNew} />
      <DSAFeeSection
        Fee="₹ 95,000"
        FeeEmi="₹ 6,333/month"
        weekendbatch="Weekend Morning (DSA BATCHES)"
        weekdaybatch="Weekend Morning (DSA BATCHES)"
        weekday="SAT-SUN"
        weekend="SAT-SUN"
        WeekendDate="23rd Feb"
        WeekdayDate="8th Feb"
        WeekendTime="09:30AM - 12:30PM"
        WeekdayTime="09:30AM - 12:30PM"
        FeeContent3="Flexible payment"
        // <EMI POPUP
        emiType="NO COST EMI"
        duration1="18 Months"
        totalAmount1="₹95,000"
        monthlyPayment1="₹6,333"
        greenDown1="Standard Intrest rate Applicable"
        duration2="12 Months"
        totalAmount2="₹95,000"
        monthlyPayment2="₹9,228"
        />
        <ReviewSlider idss="eautK0odE7Q"  />
      <MentorsSection />
      <DSAProjectSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
      />
      <NewSevenSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Structure Algorithms & System Design"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/DSA.pdf"
        brochurePdf={pdfUrl}
      />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
    </main>
  );
};

export default NewDSA;

export async function getStaticProps() {
  const module = await import("../../Data/NewDSAData");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
