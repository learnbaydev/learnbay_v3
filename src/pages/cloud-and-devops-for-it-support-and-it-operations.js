import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import { parseJSONData } from "@/Util/JsonConvertor";
import HighlightsAdminSection from "@/components/CoursePage/FirstPart/Support_noimage/highlightcloudAdmin";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
import Newheader from "@/components/CoursePage/newHeaderCloudAndDevOps/newHeader";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import AlumniCompaniesCloudDevopsISIO from "@/components/CoursePage/newUICourse/AlumniCompaniesCloudDevopsISIO";
import LearningToPlacementISIO from "@/components/CoursePage/newUICourse/LearningToPlacementISIO/LearningToPlacement";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import highlightsData from "@/Data/highlightsDataISIO";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
const AnimationNew3 = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimitedISIO")
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
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Cloud+and+Devops+Engineering+For+ITS+%26+ITOps+Professionals++(3)_compressed.pdf";

  const faqNewData = [
    {
      id: 0,
      sectionName: "COURSE-RELATED",
      data: [
        {
          id: 0,
          ques: "What is the duration of the Cloud and DevOps Engineering Program for IT Support & Operations?",
          ans: "You can become a certified DevOps and cloud professional by participating in 150+ hours of live online sessions. This DevOps training is instructor-led with flexible sessions.",
          open: true,
        },
        {
          id: 1,
          ques: "What prerequisites are required to enroll in this program?",
          ans: "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience. Professionals working as IT support and IT Ops Engineers are the most welcomed for this certification.",
          open: false,
        },
        {
          id: 2,
          ques: "Is this Cloud Computing Course suitable for beginners in IT?",
          ans: "No, this certification is not an ideal match for freshers, irrespective of the domain. It demands a minimum of 1 year of working experience in the IT domain.",
          open: false,
        },
        {
          id: 3,
          ques: "What cloud platforms are covered in the Cloud and DevOps Engineering Program for IT support professionals?",
          ans: "During the cloud computing classes, we will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools with hands-on training.",
          open: false,
        },
        {
          id: 4,
          ques: "Are there any real-world projects or case studies included in the program?",
          ans: "The Google Cloud Course includes four real-time industrial projects. Real-time projects help experts explore the application-based learning of the relevant tools and tackle issues well.",
          open: false,
        },
        {
          id: 5,
          ques: "How do I stay updated on course content and any changes in the Cloud Computing Course with Real-Time Projects?",
          ans: "Learnbay has a customized application that enables learners to stay updated with recent developments. It also has an interface to chat online with the respective groups and mentors for further doubt clearance.",
          open: false,
        },
        {
          id: 6,
          ques: "How does the program get updated with the recent developments in Cloud technology and DevOps practices?",
          ans: "Learnbay follows each significant industrial or latest developments worldwide. Our course syllabi are continuously updated according to recent developments, including AWS, Microsoft Azure, and GCP.",
          open: false,
        },
        {
          id: 7,
          ques: "How does this program prepare students for real-world cloud and DevOps challenges?",
          ans: "The DevOps Training with Capstone Projects prepares students to face real-world challenges in IT support and operations through trainer-led sessions and insights into domain specializations and generative AI.",
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
          ques: "How much does the Cloud Computing Course with Real-Time Projects for ITS and ITOps cost?",
          ans: "The course fee is INR 1,20,000 plus 18% GST.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there any payment instalment options available for the Cloud Computing Course for ITs and ITOps?",
          ans: "Yes, we have an instalment payment facility where you can make expenses through a Credit card, UPI, or Internet banking.",
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
          ques: "Is there a refund policy in case I need to withdraw from the program?",
          ans: "Yes, we offer an effortless refund or cancellation policy for those who need to withdraw from the program. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
          open: false,
        },
        {
          id: 4,
          ques: "Are there any additional costs for course materials, textbooks, or certification exams?",
          ans: "No, you don’t have to pay additionally for course materials, textbooks, or certification exams. With just the payment of course fees, you can get started with the learning.",
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
          ques: "How many capstone projects will there be?",
          ans: "You will get four capstone projects with this program.",
          open: false,
        },
        {
          id: 1,
          ques: "Could you elaborate on the capstone project and its significance in the Google Cloud Course?",
          ans: "Capstone projects encompass the proficiency to see through actual business scenarios and tackle them with proven expertise. It builds a project portfolio and validates your skills in the eyes of recruiters.",
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
          ans: "Yes. You will obtain globally accredited certifications from Microsoft and Learnbay once you complete the course and projects.",
          open: false,
        },
        {
          id: 1,
          ques: "Is the certification internationally recognised?",
          ans: "Yes, the certification is globally recognised, which enriches your career and validates the learned skills for better job prospects.",
          open: false,
        },
        {
          id: 2,
          ques: "What type of certification do I receive upon course completion?",
          ans: "Upon completion of the course, you will receive –",
          open: false,
          dscoursefaq1: true,
          list1: "Microsoft Certified: Azure Solutions Architect Expert",
          list2: "Microsoft Certified: Azure Fundamentals",
          list3: "Microsoft Certified: Azure Administrator Associate",
          list4: "One Course Completion Certificate from Learnbay",
        },
        {
          id: 3,
          ques: "Are there any additional costs associated with the course?",
          ans: "The certification has no other expenses included apart from the course fees.",
          open: false,
        },
      ],
    },
    {
      id: 4,
      sectionName: "JOB ASSISTANCE",
      data: [
        {
          id: 0,
          ques: "How does this program cater to individuals interested in pursuing a career as a certified cloud professional?",
          ans: "This program aims to support career-building with promising job roles through hands-on learning of tools and 100% dedicated placement support across MNCs and reputed companies.",
          open: false,
        },
        {
          id: 1,
          ques: "What distinguishes this Cloud Engineering Course from others in the market?",
          ans: "Learnbay’s training is different from others in the following ways –",
          open: false,
          dscoursefaq1: true,
          list1: "Industry-driven syllabus with AWS, Microsoft Azure, and GCP",
          list2: "Guaranteed interview calls from Industry partners",
          list3: "Domain-specific training (IT Support & Operations)",
          list4: "ATS-friendly resume preparation and 1:1 doubt-clearing",
        },
        {
          id: 2,
          ques: "What resources or support systems are in place to help graduates secure positions in the field of Cloud operations and DevOps?",
          ans: "Learnbay offers industry-paced training to help graduates secure positions. The resources include –",
          open: false,
          dscoursefaq1: true,
          list1: "Comprehensive knowledge-building and live projects",
          list2: "Training on in-demand Cloud & DevOps tools",
          list3: "100% placement support",
          list4: "Industry-recognised certifications from Microsoft",
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
          ans: "Yes, we provide industry-driven mentorship from renowned faculty from MNCs. You will be allocated a mentor to guide you through real-world experiences.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Our experienced mentors are there to help with coursework, case studies, practical exercises, and fresh capstone projects through 1:1 doubt-clearing.",
          open: false,
        },
        {
          id: 2,
          ques: "How can I connect with a mentor?",
          ans: "An industry-specific mentor is assigned to you. You can contact them 24/7 directly via the Learnbay app, phone, or chat sessions.",
          open: false,
        },
        {
          id: 3,
          ques: "What is the typical response time for mentor support?",
          ans: "Within 10-15 minutes, you can get mentor support to resolve queries concerning coursework or live projects.",
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
          ques: "Are there dedicated support channels for addressing technical issues during the course?",
          ans: "Learnbay has a centralised technical support system available 24/7 to solve queries related to login, training sessions, or other technical activities.",
          open: false,
        },
        {
          id: 1,
          ques: "What kind of support is available for students enrolled in the Cloud and DevOps Engineering for ITS & ITOps Professionals?",
          ans: "Learners get support for technical/non-technical issues, mentor contact, 1:1 clarification, course materials, and job assistance.",
          open: false,
        },
        {
          id: 2,
          ques: "How can students get assistance with course materials or clarification on concepts related to cloud technology and DevOps?",
          ans: "You can directly reach your mentor for 360-degree knowledge-building and clarification on Cloud and DevOps concepts.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there specific support options for those preparing for Cloud & DevOps exams?",
          ans: "Our placement service includes 1:1 doubt clearing, mock interviews, and resume building specifically for those preparing for certification exams or job interviews.",
          open: false,
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>
          Cloud & DevOps Course for IT Support & Operations - Learnbay
        </title>
        <meta
          name="description"
          content="Advance your IT support career into Cloud & DevOps with Learnbay. Learn cloud operations, alert handling, & automation through practical learning. Join now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="cloud and devops course for it support,
cloud and devops course for it operations,
devops course for it support,
cloud & devops training for it support,
cloud certification for it professionals
"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud-and-devops-for-it-support-and-it-operations"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cloud & DevOps Course for IT Support & Operations - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your IT support career into Cloud & DevOps with Learnbay. Learn cloud operations, alert handling, & automation through practical learning. Join now!"
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
          content="https://www.learnbay.co/cloud-and-devops-for-it-support-and-it-operations"
        />
        <meta
          name="twitter:title"
          content="Cloud & DevOps Course for IT Support & Operations - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Advance your IT support career into Cloud & DevOps with Learnbay. Learn cloud operations, alert handling, & automation through practical learning. Join now!"
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
          href="https://www.learnbay.co/cloud-and-devops-for-it-support-and-it-operations"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
  "@type": "Course",
  "name": "Cloud & DevOps Course for IT Support & Operations - Learnbay",
  "description": "Advance your IT support career into Cloud & DevOps with Learnbay. Learn cloud operations, alert handling, & automation through practical learning. Join now!",
  "url": "https://www.learnbay.co/cloud-and-devops-for-it-support-and-it-operations",
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
  "coursePrerequisites": "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience. Professionals working as IT support and IT Ops Engineers are the most welcomed for this certification..",
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-ITS-%26-ITOps-Professionalslink.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompaniesCloudDevopsISIO
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Cloud+and+Devops+Engineering+For+ITS+%26+ITOps+Professionals++(3)_compressed.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacementISIO time="150" guided="10" />

        <HighlightsAdminSection cloud={true} highlightsData={highlightsData} />

        <AnimationNew3 />
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-ITS-%26-ITOps-Professionalslink.pdf"
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
  const module = await import(
    "../Data/cloud-and-devops-for-it-support-and-it-operations-data"
  );
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
