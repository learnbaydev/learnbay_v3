import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/MastersCourse/FirstSection/FirstSection";
import MasterSecondSection from "../MasterSecondSection/MasterSecondSection";
import JobAbroad from "../JobAbroad/JobAbroad";
const SecondNavbar = dynamic(() =>
  import("../../CoursePage/SecondNavbar/SecondNavbar")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../Global/Testimonial/Testimonial")
);
const WhyLearnbay = dynamic(() =>
  import("../../MastersCourse/WhyLearnbay/WhyLearnbay")
);

const FirstPart = ({ TestimonialData }) => {
  return (
    <>
      {" "}
      <Navbar popup={true} dataScienceCounselling={true} />
      <FirstSection
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        dataScienceCounselling={true}
        titleCourse="Masters in Computer Science: Data Science and AI"
        cityParaCont="Elevate your tech career with our Master's programs"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters%2Bin%2BCS%2BData%2BScience%2B%2526%2BAI.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/coursepageB.webp"
        firstToparaImg="with domain specialization"
        firstHeading="Advanced Data Science and AI Program"
      />
      <MasterSecondSection />
      <JobAbroad />
      <SecondNavbar dataScienceCounselling={true} />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} Testimonial={TestimonialData} />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
    </>
  );
};

export default FirstPart;
