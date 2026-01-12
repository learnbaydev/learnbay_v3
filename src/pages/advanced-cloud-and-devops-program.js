import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import { parseJSONData } from "@/Util/JsonConvertor";
import HighlightsAdminSection from "@/components/CoursePage/FirstPart/Support_noimage/highlightcloudAdmin";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
import Newheader from "@/components/CoursePage/newHeaderCloudAndDevOps/newHeader";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import AlumniCompaniesCloudDevopsDA from "@/components/CoursePage/newUICourse/AlumniCompaniesCloudDevopsDA";
import LearningToPlacementDA from "@/components/CoursePage/newUICourse/LearningToPlacementDA/LearningToPlacement";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import highlightsData from "@/Data/highlightsDataDA";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
const AnimationNew4 = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimitedDA")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const DSASyllabus = dynamic(() =>
  import("@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus")
);
const DSAFeeSection = dynamic(() =>
  import("@/components/CoursePage/dsaFee/DSAFeeSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/course/MentorsSection/MentorsSection")
);
const ReviewSlider = dynamic(() =>
  import("@/components/Home/newUI/reviewSlider/reviewSlider")
);
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus2025")
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Advanced%2BCloud%2Band%2BDevops%2BProgram%2B(2)_compressed.pdf";

  const faqNewData = [
    {
      id: 0,
      sectionName: "COURSE-RELATED",
      data: [
        {
          id: 0,
          ques: "What is the duration of the Cloud Computing and DevOps Certification Program?",
          ans: "You can become a certified DevOps Engineer in 150+ hours (5 months) of instructor-led training with flexible training sessions (weekdays & weekends).",
          open: true,
        },
        {
          id: 1,
          ques: "What prerequisites are required to enroll in this certification program?",
          ans: "The cloud technology course is beginner-friendly, and IT/non-IT experts can opt for this. You can join this program with a basic knowledge of statistics/mathematics and fundamental concepts of IT. It teaches technical skills with programming languages from scratch.",
          open: false,
        },
        {
          id: 2,
          ques: "Is this certification program suitable for beginners in IT?",
          ans: "Yes, this certification is suitable for beginners in the IT domain. Freshers in IT can enroll in Cloud networking courses to learn in-demand tools. IT pros eager to learn promising DevOps practices and Cloud skills can opt for this program.",
          open: false,
        },
        {
          id: 3,
          ques: "What cloud platforms are covered in the program?",
          ans: "During the cloud computing classes, we will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools to craft an unbeatable Cloud and DevOps career.",
          open: false,
        },
        {
          id: 4,
          ques: "Are there any real-world projects or case studies included in the program?",
          ans: "The Advanced Cloud Computing and DevOps Certification Program includes ten real-time projects and some case studies in different learning modules. Real-time projects help experts explore the practical use of learned tools and tackle issues well.",
          open: false,
        },
        {
          id: 5,
          ques: "How do I stay updated on course content and any changes in the program?",
          ans: "Learnbay has a customized application that enables learners to stay updated with recent developments. It also has an interface to chat online with the respective groups and mentors for further doubt clearance.",
          open: false,
        },
        {
          id: 6,
          ques: "How does the program get updated with the recent developments in Cloud technology and DevOps practices?",
          ans: "Learnbay follows significant industrial/job market incidents across the global IT sector. Quality research, networking with industry experts, and tie-ups with industry partners keep us updated with the latest trends. Accordingly, our syllabus is revamped as per developments with AWS, Microsoft Azure, and GCP.",
          open: false,
        },
        {
          id: 7,
          ques: "How does this program prepare students for real-world cloud and DevOps challenges?",
          ans: "This program prepares students through instructor-led training sessions by industry experts. These sessions help you get versed in real-time issues linked to Cloud & DevOps practices and gain insights into domain specializations.",
          open: false,
        },
      ],
    },
    {
      id: 1,
      sectionName: "PAYMENTS & SCHOLARSHIPS",
      data: [
        {
          id: 0,
          ques: "How much does the Cloud Computing and DevOps Certification Program cost?",
          ans: "The DevOps & Cloud Computing course fee is INR 1,20,000 plus 18% GST.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there any installment options available for program payments?",
          ans: "Yes, we have an installment payment facility where you can pay in 6, 9, and 12 months of EMI through Credit card, UPI, or Internet banking.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I pay for the course using credit cards, and are there other payment methods accepted?",
          ans: "Yes, you can pay for the course using credit cards. Some other payment options, like UPI or Internet banking, are also available.",
          open: false,
        },
        {
          id: 3,
          ques: "Is financial aid or scholarships available for the Cloud Computing and DevOps Certification Program?",
          ans: "Learnbay offers scholarships to eligible students after reviewing their profiles. Eligible learners will receive up to a 25% scholarship for the desired course.",
          open: false,
        },
        {
          id: 4,
          ques: "How can I apply for scholarships, and what are the eligibility criteria?",
          ans: "You must contact and book a 15–20 minute counseling session with a career counselor to get details of the course and scholarship schemes.",
          open: false,
        },
        {
          id: 5,
          ques: "Are there any discounts for early registration in the program?",
          ans: "Yes, we offer early bird discounts of 15% – 20%. Additionally, group discounts are available:",
          open: false,
          dscoursefaq1: true,
          list1: "Group of 2: 5% extra discount",
          list2: "Group of 3: 8% additional discount",
          list3: "Group of 4+: Max 10% discount",
        },
        {
          id: 6,
          ques: "Is there a refund policy in case I need to withdraw from the program?",
          ans: "Yes, we offer an effortless refund or cancellation policy. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
          open: false,
        },
        {
          id: 7,
          ques: "Are there any additional costs for course materials, textbooks, or certification exams?",
          ans: "No, you don’t have to pay additionally for course materials, textbooks, or certification exams. Upskilling is included in the course fees.",
          open: false,
        },
      ],
    },
    {
      id: 2,
      sectionName: "CAPSTONE AND REAL-TIME PROJECTS",
      data: [
        {
          id: 0,
          ques: "How many real-time projects will there be?",
          ans: "You will get 50+ Hours of Industrial Projects and 12+ Hours of Capstone Projects with this program across different domains.",
          open: false,
        },
        {
          id: 1,
          ques: "How will the project be executed?",
          ans: "Learners choose projects based on domain electives. Mentors guide you throughout the project tasks at offline project innovation labs.",
          open: false,
        },
        {
          id: 2,
          ques: "Could you elaborate on the capstone project and its significance?",
          ans: "Capstone projects enable you to tackle real business scenarios with proven expertise. They help assess your skills, build an unbeatable portfolio, and validate your expertise to employers.",
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: "CERTIFICATION",
      data: [
        {
          id: 0,
          ques: "Is there any accredited certification after course completion?",
          ans: "Yes. You will obtain globally accredited certifications from Microsoft once you complete the course and projects.",
          open: false,
        },
        {
          id: 1,
          ques: "Is the certification internationally recognized?",
          ans: "Yes, the certification is globally recognized, validating your skills for better job prospects internationally.",
          open: false,
        },
        {
          id: 2,
          ques: "What type of certification do I receive upon course completion?",
          ans: "Upon completion of the course, you will receive:",
          open: false,
          dscoursefaq1: true,
          list1: "Three course certificates from Microsoft",
          list2: "One Course Completion Certificate from Learnbay",
        },
      ],
    },
    {
      id: 4,
      sectionName: "JOB ASSISTANCE",
      data: [
        {
          id: 0,
          ques: "How does this program cater to individuals interested in pursuing a career as a DevOps engineer?",
          ans: "The program offers hands-on tool learning and 100% dedicated placement support to help experts crack promising job offers across MNCs/MAANG.",
          open: false,
        },
        {
          id: 1,
          ques: "What distinguishes this cloud computing course from others in the market?",
          ans: "Learnbay's program is unique due to:",
          open: false,
          dscoursefaq1: true,
          list1: "Industry-driven syllabus (AWS, Azure, GCP)",
          list2:
            "Guaranteed interview calls and Microsoft project certification",
          list3: "Domain-specific training and 1:1 interactions",
          list4: "On-demand video doubt-clearing and customized resume prep",
        },
        {
          id: 2,
          ques: "Can you provide details on the job assistance provided?",
          ans: "Eligible learners (min. 70% in assessments) receive end-to-end support including:",
          open: false,
          dscoursefaq1: true,
          list1: "1:1 Mock Interviews with 450+ experts",
          list2: "Resume Building and 1:1 LinkedIn Review",
          list3: "Uninterrupted Job and Placement Support",
          list4: "24/7 contact with mentors",
        },
      ],
    },
    {
      id: 5,
      sectionName: "MENTORSHIPS",
      data: [
        {
          id: 0,
          ques: "Is there any support or mentorship provided during the course?",
          ans: "Yes, we assign a mentor from promising MNCs/MAANG to guide you with real work experiences throughout the course.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Experienced mentors help with 1:1 doubt-clearing, offline project handling, and coursework activities to ensure valuable results.",
          open: false,
        },
        {
          id: 2,
          ques: "How can I connect with a mentor?",
          ans: "You can contact your assigned industry-specific mentor 24/7 via the Learnbay app, phone, or chat sessions.",
          open: false,
        },
        {
          id: 3,
          ques: "What is the typical response time for mentor support?",
          ans: "Support is available during and after training sessions, with a typical response time of 10-15 minutes for resolving queries.",
          open: false,
        },
      ],
    },
    {
      id: 6,
      sectionName: "SUPPORT",
      data: [
        {
          id: 0,
          ques: "Are there dedicated support channels for technical issues?",
          ans: "Yes, a centralized technical support system is available 24/7 to solve issues related to login, training sessions, and attendance.",
          open: false,
        },
        {
          id: 1,
          ques: "What kind of support is available for enrolled students?",
          ans: "Support covers technical/non-technical issues, 1:1 clarification, course materials, project handling, and career assistance.",
          open: false,
        },
        {
          id: 2,
          ques: "How can students get assistance with course materials or concepts?",
          ans: "You can directly reach your mentor via the Learnbay app for 360-degree knowledge-building and concept clarification.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there specific support options for those preparing for DevOps certification exams?",
          ans: "Our Career Assistance service provides 1:1 doubt clearing, mock interviews, and soft skills training specifically for exam and interview readiness.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Advanced Cloud and DevOps Training Program - Learnbay</title>
        <meta
          name="description"
          content="Future-proof your career with advanced cloud & DevOps training, live classes, real-world capstone projects, and expert mentorship. Join now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Advanced Cloud & DevOps program
Advanced cloud & devOps certification
Advanced Cloud & DevOps training
Best advanced program for Cloud & DevOps
Best certification for advanced cloud and DevOps
"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/advanced-cloud-and-devops-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Advanced Cloud and DevOps Training Program - Learnbay"
        />
        <meta
          property="og:description"
          content="Future-proof your career with advanced cloud & DevOps training, live classes, real-world capstone projects, and expert mentorship. Join now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/advanced-cloud-and-devops-program"
        />
        <meta
          name="twitter:title"
          content="Advanced Cloud and DevOps Training Program - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Future-proof your career with advanced cloud & DevOps training, live classes, real-world capstone projects, and expert mentorship. Join now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />

        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/advanced-cloud-and-devops-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
        "@context": "http://schema.org",
      "@type": "Course",
      "name": "Advanced Cloud and DevOps Training Program - Learnbay",
      "description": "Future-proof your career with advanced cloud & DevOps training, live classes, real-world capstone projects, and expert mentorship. Join now!",
      "url": "https://www.learnbay.co/advanced-cloud-and-devops-program",
      "offers": {
        "@type": "offer",
        "price": "120000",
        "pricecurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "You should know about Python, Machine Learning, & basic Deep Learning before joining the program.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P5M",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,20,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]

    }
`,
          }}
        />
      </Head>
      <main>
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          interstedInHide={true}
        />
        <Newheader
          title1={NewDSAData[0].header[0].title1}
          orgTitle={NewDSAData[0].header[0].orgTitle}
          title={NewDSAData[0].header[0].title}
          title2={NewDSAData[0].header[0].title2}
          spanTag={NewDSAData[0].header[0].spanTag}
          spanIcon={NewDSAData[0].header[0].spanIcon}
          points={NewDSAData[0].header[0].points}
          mentorText={NewDSAData[0].header[0].mentorText}
          mentorFromImg={NewDSAData[0].header[0].mentorFromImg}
          descrption={NewDSAData[0].header[0].descrption}
          svgDSA={NewDSAData[0].header[0].svgDSA}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-DBA-Professionalslink.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompaniesCloudDevopsDA
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Advanced%2BCloud%2Band%2BDevops%2BProgram%2B(2)_compressed.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacementDA time="150" guided="10" />

        <HighlightsAdminSection cloud={true} highlightsData={highlightsData} />

        <AnimationNew4 />
        <JobReadySection />
        <ReviewSlider idss="eautK0odE7Q" showRealStories={false} />
        <MentorsSection />
        <GenAIProject
          genAiData={NewDSAData[0].genAiData}
          GENAIMAN={true}
          noClud={true}
        />
        {/* <DSASyllabus
          sections={NewDSAData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-DBA-Professionalslink.pdf"
          brochurePdf={pdfUrl}
          downloadBrochure={true}
        /> */}
        <div style={{ marginTop: "50px" }}>
          <SyllabusNew
            masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
            onlyGENAIPage={true}
          />
        </div>
        <NewTools toolsData={NewDSAData[0].toolsData} />
        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        <DSAFeeSection
          Fee="₹ 1,20,000 "
          FeeEmi="₹ 13,250/ month"
          // Hybrid Classes
          hybridFee="₹ 1,55,000"
          hybridEmi="₹ 10,161/ month"
          // EMIPOPUP
          emiType="Live online classes"
          duration1="12 Months"
          totalAmount1="₹1,90,000"
          monthlyPayment1="₹14,094"
          greenDown1="Hybrid Classes"
          duration2="12 Months"
          totalAmount2="₹2,10,000"
          monthlyPayment2="₹12,455"
          dataScienceCounselling={true}
          iitGuwatiGen={true}
          interstedInHide={true}
        />
        <BookDemo
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
          Admission="Admission Process"
          Content="Our 3-step admission process clearly guides you through checking your eligibility, selecting the right course via expert counselling, and smoothly completing your enrollment. It's designed for simplicity and clarity."
          highlight={[
            "3-step admission process",
            "eligibility",
            "counselling",
            "enrollment",
          ]}
          first="Evaluation Call"
          second="Screening Call"
          third="Block your seat"
        />
        <NewSevenSection
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        />
        <FAQ FaqData={faqNewData} />
        <Footer />
        <BottomBar dataScienceCounselling={true} interstedInHide={true} />
        <WhatsappFloat />
      </main>
    </>
  );
};

export default NewDSA;

export async function getStaticProps() {
  const module = await import("../Data/advanced-cloud-and-devops-program-data");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
