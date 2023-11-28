import React from "react";
import dynamic from "next/dynamic";

import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
import { ThirdSectionData } from "@/Data/ThirdSectionData";
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("../../../components/Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/Global/Testimonial/Testimonial")
);
const WhoIsProgram = dynamic(() =>
  import("../../CoursePage/WhoIsProgram/WhoIsProgram")
);
const WhyLearnbay = dynamic(() =>
  import("../../CoursePage/WhyLearnbay/WhyLearnbay")
);
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../../CoursePage/ContactCounsellor/ContactCounsellor")
);
const FirstPart = ({ SecondSectionData, TestimonialData }) => {
  return (
    <>
      <SecondSection SecondSectionData={SecondSectionData} />
      <SecondNavbar
        interstedInHide={true}
        dataScience={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
      />
      <WhoProgram
        dataScience={true}
        leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in data science"
        forth="Developing skills in data science for future opportunities"
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
      <ContactConsellor
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advance Data Science & AI Program with Domain Specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
      />
    </>
  );
};

export default React.memo(FirstPart);
