import React from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/CoursePage/FirstSection/FirstSection";
import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() => import("../SecondNavbar/SecondNavbar"));
import { ThirdSectionData } from "@/Data/ThirdSectionData";
const WhoProgram = dynamic(() => import("../WhoProgram/ThirdSection"));
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() => import("../WhoIsProgram/WhoIsProgram"));
const WhyLearnbay = dynamic(() => import("../WhyLearnbay/WhyLearnbay"));
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const DataAnlyticsFirstPart = ({ SecondSectionData, TestimonialData }) => {
  return (
    <>
      <Navbar dataScienceCounselling={true} interstedInHide={true} />
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        dataScience={true}
        ThirdTyped="Live Interactive Classes"
        titleCourse="Data Analytics Certification Program"
        cityParaCont="Upskill yourself to the top within 6 months with curricullum designed by industry experts"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
        FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-header.webp"
        firstToparaImg=""
        firstHeading="Data Analytics Certification Program"
        firstTopPara="Upskill yourself to the top within 6 months with curricullum designed by industry expert"
        idss="bfl64ANfSV0"
      />
      <SecondSection SecondSectionData={SecondSectionData} />
      <SecondNavbar
        titleCourse="Data Analytics Certification Program"
        dataScience={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
      />
      <WhoProgram
        dataScience={true}
        interstedInHide={true}
        leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Non-tech professionals with 6 months experience"
        second="Minimum 1 year of IT work experience"
        third="Mid-career professionals interested in data science & AI"
        forth="Achieving higher career growth in data science and AI"
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
      <ContactConsellor
        titleCourse="Data Analytics Certification Program"
        dataScience={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program.pdf"
      />
    </>
  );
};

export default React.memo(DataAnlyticsFirstPart);
