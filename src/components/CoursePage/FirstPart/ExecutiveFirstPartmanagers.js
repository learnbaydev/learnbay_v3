import DecisionSection from "@/components/course/decisionSection/DecisionSection";
import HeroSection from "@/components/course/heroSection/HeroSection";
import dynamic from "next/dynamic";
const Navbar = dynamic(() =>
  import("@/components/course/navbarSection/NavbarSection")
);
const ProgramSection = dynamic(() =>
  import("@/components/course/programSection/programSection")
);

const OutcomeSection = dynamic(() =>
  import("@/components/course/outcomeSection/outcomeSection")
);

const WhyChooseSection = dynamic(() =>
  import("@/components/course/whyChooseSection/WhyChooseSection")
);
const ExecutiveFirstPartmanagers = () => {
  const pdfUrl = "/Brochure/Executive-iit-guwahati-generic.pdf";
  return (
    <>
      {" "}
      <Navbar
        dataScienceCounselling={true}
        dataScience={true}
        fullStack={true}
        backgorunimg={true}
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
      />
      <HeroSection
        thumbnailurl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/managers_YT.webp"
        spanTag="Curriculum Inclusive of Gen-AI"
        spanIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
        title="Executive Program in Data Science & AI for"
        orgTitle="Managers and Tech Leaders"
        descrption="Learn to leverage the power of data and AI to solve complex
                    business challenges, enhance decision-making, and lead
                    high-impact projects in your organization."
        isSpecialPage={true}
        isGuwahati={true}
        interstedInHide={true}
        dataScienceCounselling={true}
        dataScience={true}
        brochurePdf={pdfUrl}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
        noIIt={true}
        OrangeButton={true}
        applicationIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
        ProgramIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
        trainingIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
        CloseDes="Application closes on"
        CloseBotDate="29 Sept, 2024"
        DurationBot="Program Duration"
        DurationBotDate="11 Months"
        TrainingBot="Training Format"
        BotWidth={60}
        BotHeight={60}
        backgroundGradient="radial-gradient(circle at 10% 10%, rgba(6, 59, 92, 0.9) 1%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(254, 122, 54, 0.3) 1%, transparent 40%), #212121"
    
    
  showRightForm={true}
    />
      <DecisionSection noIIt={true} />
      <ProgramSection
        mid="Mid"
        senoir="Senior"
        yearExp="4+ Years of Experience"
        to="to"
        PointOne="Project Manager "
pointTwo="Tech Lead(IT/Non-IT)"
PointOneIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/project_ma.webp"
pointTwoIcon="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/eligible_de.webp"
rightImg="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_right_side.webp"
        dataScienceCounselling={true}
        interstedInHide={true}
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Executive-iit-guwahati-generic.pdf"
      />
      <OutcomeSection />
      <WhyChooseSection />
    </>
  );
};

export default ExecutiveFirstPartmanagers;
