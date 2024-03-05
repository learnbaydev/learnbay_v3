import { ThirdSectionData } from "@/Data/ThirdSectionData";
import dynamic from "next/dynamic";
import React from "react";
const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
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
const CloudDevopsecond = dynamic(() =>
  import(
    "../../CoursePage/cloud&devops/DevOpsSecondSection/DevOpsSecondSection"
  )
);
import styles from "../../../styles/Home.module.css"
import { DataScienceCourseData } from "../../../Data/DataScinceCourseOnly";

import FAQNew from "../FAQNew/FAQNew";
const FirstSection = dynamic(() =>
  import("../../CoursePage/FirstSection/FirstSection")
);

const MasterSecondSection = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const CitiesRight = dynamic(() =>
  import("../../Seo/CitiesRight/CitiesRight")
);
const CitiesLeft = dynamic(()=>
import ("../../Seo/CitiesLeft/CitiesLeft"));
const Course = dynamic(() => import("../../Home/Course/DSCourse"));
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

import { AiOutlineContainer } from "react-icons/ai";
import { BsDisplay, BsPeople, BsPersonGear } from "react-icons/bs";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
const FirstPart = ({ SecondSectionData, TestimonialData,  }) => {
  const seconddata = [
    {
      boldText: "IBM",
      normalText: "Certified Capstone",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp",
    },
    {
      CboldText: "175%",
      normalText: "Average Salary Hike",
      imageUrl:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp",
    },
    { boldText: "35K+", normalText: "Trusted Learners" },
  ];
  const DsSecond = {
    title1: "Domain Specialization",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-one.webp",
    points: [
      "Leverage your prior work experience for  relevant career transition.",
      "Aim for higher salary hikes.",
    ],
    image2:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <FaReact />,
        role: "Sr. Data Scientist ",
        salary: " 27 LPA",
      },
      {
        icon: <TbBrandGoogleAnalytics />,
        role: "Sr. Data Analyst",
        salary: " 15 LPA",
      },
      { icon: <BsPersonGear />, role: "ML Engineer ", salary: "14 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group-768-min.webp",
    image4:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Mask+group+(10).webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "8-10 Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };
  const JobData = {
    title: "Elevate Your Expertise in Data Science and AI    ",
    points: [
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Bridge your Career Gap        ",
        description:
          "Internship certificate that helps you fill your career gap.         ",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Flexible Learning at your Convenience        ",
        description:
          "For professionals aiming to upskill without quitting their job.",
      },
      {
        imgSrc:
          "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Curriculum Inclusive of Gen-AI        ",
        description: "Tailored for career transformation in a tech-driven era",
      },
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };
  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Science Courses – Learnbay        "
        cityParaCont="Experience the analytical power of data science with Learnbay’s industry-paced upskilling programs designed to propel competitive success rates. Enroll in our data science courses to break into the perplexity of emerging data-driven culture.     "
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="– Learnbay"
        firstHeading="Data Science Courses       "
        firstTopPara="  "
        idss="djokazk1d-0"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-fs.webp"
        videoId="djokazk1d-0"
        DSWolf={true}
      />
      <MasterSecondSection data={seconddata} />
      <Course
        // radio={true}
       
        // interstedInHide={true}
        newDesign={true}
      
        DomainInput={true}
        interstedInHide={true}
        DatascienOnlycourse={true}
      />
       <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              OnlyDatascience ={true}
              ProgramBot1={DataScienceCourseData[0].ProgramBot1}
              ProgramHead3={DataScienceCourseData[0].ProgramHead3}
              ProgramBot3={DataScienceCourseData[0].ProgramBot3}
              ProgramBot31={DataScienceCourseData[0].ProgramBot31}
              ProgramBot4={DataScienceCourseData[0].ProgramBot4}
              ProgramBot5={DataScienceCourseData[0].ProgramBot5}
              ProgramBot6={DataScienceCourseData[0].ProgramBot6}
              Courselink1={DataScienceCourseData[0].Courselink1}
              Courselink2={DataScienceCourseData[0].Courselink2}
              Courselink3={DataScienceCourseData[0].Courselink3}
              Courselink4={DataScienceCourseData[0].Courselink4}
              Courselink5={DataScienceCourseData[0].Courselink5}
              Course1={DataScienceCourseData[0].Course1}
              Course2={DataScienceCourseData[0].Course2}
              Course3={DataScienceCourseData[0].Course3}
              Course4={DataScienceCourseData[0].Course4}
              Course5={DataScienceCourseData[0].Course5}
              DomainHead1={DataScienceCourseData[0].DomainHead1}
              DomainBot1={DataScienceCourseData[0].DomainBot1}
              DomainBot2={DataScienceCourseData[0].DomainBot2}
              DomainBot3={DataScienceCourseData[0].DomainBot3}
              DomainList1={DataScienceCourseData[0].DomainList1}
              DomainList2={DataScienceCourseData[0].DomainList2}
              DomainList3={DataScienceCourseData[0].DomainList3}
              DomainList4={DataScienceCourseData[0].DomainList4}
              DomainList5={DataScienceCourseData[0].DomainList5}
              DomainList6={DataScienceCourseData[0].DomainList6}
              Domainlink1={DataScienceCourseData[0].Domainlink1}
              Domainlink2={DataScienceCourseData[0].Domainlink2}
              Domainlink3={DataScienceCourseData[0].Domainlink3}
              Domainlink4={DataScienceCourseData[0].Domainlink4}
              Domainlink5={DataScienceCourseData[0].Domainlink5}
              Domainlink6={DataScienceCourseData[0].Domainlink6}
              Domainlink7={DataScienceCourseData[0].Domainlink1}
              Domainlink8={DataScienceCourseData[0].Domainlink1}
              Domainlink9={DataScienceCourseData[0].Domainlink1}
              Domainlink10={DataScienceCourseData[0].Domainlink1}
              DomainBot40={DataScienceCourseData[0].DomainBot40}
              DomainBot41={DataScienceCourseData[0].DomainBot41}
              CertificationHead1={DataScienceCourseData[0].CertificationHead1}
              CertificationBot1={DataScienceCourseData[0].CertificationBot1}
              CertificationHead29={DataScienceCourseData[0].CertificationHead29}
              CertificationBot2={DataScienceCourseData[0].CertificationBot2}
              CertificationHead30={DataScienceCourseData[0].CertificationHead30}
              CertificationBot3={DataScienceCourseData[0].CertificationBot3}
              CertificationHead31={DataScienceCourseData[0].CertificationHead31}
              CertificationBot4={DataScienceCourseData[0].CertificationBot4}
              CertificationHead32={DataScienceCourseData[0].CertificationHead32}
              CertificationBot5={DataScienceCourseData[0].CertificationBot5}
              src={DataScienceCourseData[0].src}
              src22={DataScienceCourseData[0].src22}
              src33={DataScienceCourseData[0].src33}
                           JobHead1={DataScienceCourseData[0].JobHead1}
                           DSNoModule={true}
              MasterJobBot1={DataScienceCourseData[0].MasterJobBot1}
              MasterJobBot2={DataScienceCourseData[0].MasterJobBot2}
              JobHead2={DataScienceCourseData[0].JobHead2}
              JobBot3={DataScienceCourseData[0].JobBot3}
              Joblist1={DataScienceCourseData[0].Joblist1}
              Joblist2={DataScienceCourseData[0].Joblist2}
              Joblist3={DataScienceCourseData[0].Joblist3}
              Joblist4={DataScienceCourseData[0].Joblist4}
              Joblist5={DataScienceCourseData[0].Joblist5}
              Joblist6={DataScienceCourseData[0].Joblist6}
              Joblist7={DataScienceCourseData[0].Joblist7}
              Joblist8={DataScienceCourseData[0].Joblist8}
              Joblist9={DataScienceCourseData[0].Joblist9}
              Joblist10={DataScienceCourseData[0].Joblist10}
              Joblist11={DataScienceCourseData[0].Joblist11}
              Joblist12={DataScienceCourseData[0].Joblist12}
              Joblist13={DataScienceCourseData[0].Joblist13}
              JobHead19={DataScienceCourseData[0].JobHead19}
              JobBot20={DataScienceCourseData[0].JobBot20}
              JobHead20={DataScienceCourseData[0].JobHead20}
              Joblist14={DataScienceCourseData[0].Joblist14}
              Joblist15={DataScienceCourseData[0].Joblist15}
              Joblist16={DataScienceCourseData[0].Joblist16}
              Joblist17={DataScienceCourseData[0].Joblist17}
              JobHead21={DataScienceCourseData[0].JobHead21}
              JobBot21={DataScienceCourseData[0].JobBot21}
              JobBot22={DataScienceCourseData[0].JobBot22}
              Joblist21={DataScienceCourseData[0].Joblist21}
              Joblist22={DataScienceCourseData[0].Joblist22}
             
              JobBot23={DataScienceCourseData[0].JobBot23}
             
              modulelist={true}
              joblist={true}
              showData={true}
              hideDSonly={true}
              JobHead22={DataScienceCourseData[0].JobHead22}
              JobBot24={DataScienceCourseData[0].JobBot24}
              Joblist23={DataScienceCourseData[0].Joblist23}
              Joblist24={DataScienceCourseData[0].Joblist24}
              Joblist25={DataScienceCourseData[0].Joblist25}
              Joblist26={DataScienceCourseData[0].Joblist26}
              Joblist27={DataScienceCourseData[0].Joblist27}
              Joblist28={DataScienceCourseData[0].Joblist28}
              Joblist29={DataScienceCourseData[0].Joblist29}
              Joblist30={DataScienceCourseData[0].Joblist30}
              JobBot25={DataScienceCourseData[0].JobBot25}
              JobBot50={DataScienceCourseData[0].JobBot50}
              ProjectsHead1={DataScienceCourseData[0].ProjectsHead1}
              ProjectsBot1={DataScienceCourseData[0].ProjectsBot1}
              ProjectsBot2={DataScienceCourseData[0].ProjectsBot2}
              ProjectsBot3={DataScienceCourseData[0].ProjectsBot3}
              ProjectsBot4={DataScienceCourseData[0].ProjectsBot4}
              ProjectsBot5={DataScienceCourseData[0].ProjectsBot5}
              ProjectsBot6={DataScienceCourseData[0].ProjectsBot6}
              ProjectsBot7={DataScienceCourseData[0].ProjectsBot7}
              src1={DataScienceCourseData[0].src1}
              ProjectsH1={DataScienceCourseData[0].ProjectsH1}
              Projectsp1={DataScienceCourseData[0].Projectsp1}
              src2={DataScienceCourseData[0].src2}
              src40={DataScienceCourseData[0].src40}
              Dsonlymsatercer={true}
              ProjectsH2={DataScienceCourseData[0].ProjectsH2}
              Projectsp2={DataScienceCourseData[0].Projectsp2}
              src3={DataScienceCourseData[0].src3}
              ProjectsH3={DataScienceCourseData[0].ProjectsH3}
              Projectsp3={DataScienceCourseData[0].Projectsp3}
              src4={DataScienceCourseData[0].src4}
              ProjectsH4={DataScienceCourseData[0].ProjectsH4}
              Projectsp4={DataScienceCourseData[0].Projectsp4}
              AlumniBot1={DataScienceCourseData[0].AlumniBot1}
              Asrc1={DataScienceCourseData[0].Asrc1}
              AlumniH1={DataScienceCourseData[0].AlumniH1}
              Alumnip1={DataScienceCourseData[0].Alumnip1}
              Asrc2={DataScienceCourseData[0].Asrc2}
              AlumniH2={DataScienceCourseData[0].AlumniH2}
              Alumnip2={DataScienceCourseData[0].Alumnip2}
              Asrc3={DataScienceCourseData[0].Asrc3}
              AlumniH3={DataScienceCourseData[0].AlumniH3}
              Alumnip3={DataScienceCourseData[0].Alumnip3}
              Asrc4={DataScienceCourseData[0].Asrc4}
              AlumniH4={DataScienceCourseData[0].AlumniH4}
              Alumnip4={DataScienceCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceCourseData[0].faq} />
            </div>
          </div>
        </div>


      <CloudDevopsecond data={DsSecond} dataScience={true} />

      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />

      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}

      <WhyLearnbay idss="ZPOTy4PEnNU" />
      <GetHire />
    </>
  );
};

export default React.memo(FirstPart);
