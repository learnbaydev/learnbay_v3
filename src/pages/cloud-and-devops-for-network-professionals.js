import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import { parseJSONData } from "@/Util/JsonConvertor";
import HighlightsAdminSection from "@/components/CoursePage/FirstPart/Support_noimage/highlightcloudAdmin";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
import Newheader from "@/components/CoursePage/newHeaderCloudAndDevOps/newHeader";
import NewTools from "@/components/CoursePage/newTools/NewTools";
import AlumniCompaniesCloudDevopsNP from "@/components/CoursePage/newUICourse/AlumniCompaniesCloudDevopsNP";
import LearningToPlacementNP from "@/components/CoursePage/newUICourse/LearningToPlacementNP/LearningToPlacement";
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import highlightsData from "@/Data/highlightsDataNP";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
const AnimationNew1 = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimitedNP")
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
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Cloud_and_Devops_Engineering_For_Network_Professionals.pdf";
  const faqNewData = [
    {
      id: 0,
      sectionName: "COURSE-RELATED",
      data: [
        {
          id: 0,
          ques: "What is the duration of the Cloud and DevOps Engineering Program for network professionals?",
          ans: "With our 150+ hours of live instructor-led training sessions, you can establish yourself as a certified professional in Cloud or DevOps.",
          open: true,
        },
        {
          id: 1,
          ques: "What prerequisites are required to enroll in this program?",
          ans: "This program is suitable for entry to mid-level working professionals with a minimum of 1 year of work experience in the IT domain.",
          open: false,
        },
        {
          id: 2,
          ques: "Is this Cloud Computing Course suitable for freshers in IT?",
          ans: "No, this certification is not an ideal match for freshers. It requires a minimum of 1 year of working experience in the tech domain.",
          open: false,
        },
        {
          id: 3,
          ques: "What cloud platforms are covered in the Cloud and DevOps Engineering Program?",
          ans: "This course will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS tools with a hands-on learning experience.",
          open: false,
        },
        {
          id: 4,
          ques: "How do I stay updated on course content and any changes in the Cloud Computing Course with Real-Time Projects?",
          ans: "Learnbay enables learners to stay updated with recent developments through its customized application. This app enables you to chat online with the respective groups and mentors for further clarification on course doubts.",
          open: false,
        },
        {
          id: 5,
          ques: "How does this program prepare aspirants for real-world cloud and DevOps challenges?",
          ans: "The DevOps Training with capstone projects prepares IT professionals to tackle network challenges faced by startups and deliver scalable results.",
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
          ques: "How much does the Cloud & DevOps Engineering Certification (for network professionals) cost?",
          ans: "The course fee is INR 1,20,000 + 18% GST.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there any payment instalment options available for this course?",
          ans: "Yes, we have an instalment payment facility to pay the fee through a Credit card, UPI, or Internet banking.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I pay for the course using credit cards, and are there other payment methods accepted?",
          ans: "Yes, you can pay for the course using credit cards in addition to UPI or Internet banking.",
          open: false,
        },
        {
          id: 3,
          ques: "Is there a refund policy in case I need to withdraw from the program?",
          ans: "Yes, we offer an easy refund or cancellation policy for those who need to withdraw from the program. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
          open: false,
        },
        {
          id: 4,
          ques: "Are there any additional costs for course materials, textbooks, or certification exams?",
          ans: "No, you don’t have to pay extra for course materials, textbooks, or certification exams. With just the payment of course fees, you can get started with the learning.",
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
          ques: "How many live capstone projects will there be?",
          ans: "You will get four live capstone projects with this program.",
          open: false,
        },
        {
          id: 1,
          ques: "Could you elaborate on the capstone project and its significance in this program?",
          ans: "Capstone projects enable tech experts to enhance their ability to tackle real-world network challenges. It equips you with skills startups value and builds a professional portfolio for recruiters.",
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
          ans: "Yes. You will obtain industry-accredited certifications from Microsoft and Learnbay once you complete the course and projects.",
          open: false,
        },
        {
          id: 1,
          ques: "Is the certification globally recognised?",
          ans: "Yes, we provide globally recognized credentials to enrich your career and validate your skills to grab competitive jobs.",
          open: false,
        },
        {
          id: 2,
          ques: "What type of certification do I receive upon course completion?",
          ans: "Upon completion of the course, you will receive –",
          open: false,
          dscoursefaq1: true,
          list1: "Three Microsoft certifications",
          list2: "One Course Completion Certificate from Learnbay",
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
          ques: "How does this program cater to individuals interested in pursuing a career as a certified Cloud & DevOps professional?",
          ans: "IT experts eager to pursue a career as a Cloud or DevOps Engineer will get seamless training sessions and hands-on learning of tools to future-proof their skills with assured job offers.",
          open: false,
        },
        {
          id: 1,
          ques: "What distinguishes this course from others in the market?",
          ans: "Its DevOps Training for Working Professionals is different from others in the following ways –",
          open: false,
          dscoursefaq1: true,
          list1: "Industry-driven modules with AWS, Microsoft Azure, and GCP",
          list2: "Assured interview calls from 350+ Industry partners",
          list3: "Domain-specific training (for network professionals)",
          list4: "ATS-friendly resume optimization and 1:1 doubt-clearing",
        },
        {
          id: 2,
          ques: "What resources are in place to help graduates secure positions in the field of networking?",
          ans: "Learnbay offers industry-paced training including:",
          open: false,
          dscoursefaq1: true,
          list1: "Comprehensive knowledge-building and practical training",
          list2: "Live projects and training on in-demand Cloud & DevOps tools",
          list3: "100% placement services",
          list4: "Industry recognised certifications from Microsoft",
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
          ans: "Yes, we believe in industry-driven mentorship. We have renowned faculty from MNCs who guide you with real-world experiences and proven solutions.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Our experienced mentors will help you with coursework, case studies, practical exercises, and live capstone projects with 1:1 doubt-clearing.",
          open: false,
        },
        {
          id: 2,
          ques: "How can I connect with a mentor?",
          ans: "You can contact your mentor 24/7 directly via the Learnbay app, personally over the phone, or via app chat sessions.",
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
          ans: "Learnbay has a centralised technical support system available 24/7 to solve queries related to login, training sessions, or attendance.",
          open: false,
        },
        {
          id: 1,
          ques: "What kind of support is available for professionals enrolled in the Cloud and DevOps Engineering program?",
          ans: "Learners get support for technical/non-technical issues, 1:1 doubt-clearing, course materials, project guidance, and career assistance.",
          open: false,
        },
        {
          id: 2,
          ques: "How can learners get assistance with course materials or clarification on concepts?",
          ans: "Dedicated mentorship is available for clarifying concepts. You can directly reach your mentor for further clarification on Cloud and DevOps concepts.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there specific support options for those preparing for Cloud & DevOps exams?",
          ans: "Our placement service helps with 1:1 doubt clearing, mock interviews, resume building, and soft skills training specifically for certification exams.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Cloud and DevOps Engineering Masters Program - Learnbay</title>
        <meta
          name="description"
          content="Build a future-proof tech career with Learnbay's Cloud & DevOps Engineering Masters Program. Learn real-world tools, hands-on projects, and get career support."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Clouds and DevOps Network professionals certification,
Clouds and DevOps Engineering Network professionals,
DevOps certification for Network professionals,
Cloud engineering for Network professionals,
Clouds and DevOps Network professional program
"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud-and-devops-for-network-professionals"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cloud & DevOps training for Network Professionals - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your networking career with Learnbay's cloud & DevOps training. Learn AWS, cloud security, automation, and DevOps through live classes. Enrol now!"
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
          content="https://www.learnbay.co/cloud-and-devops-for-network-professionals"
        />
        <meta
          name="twitter:title"
          content="Cloud & DevOps training for Network Professionals - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Advance your networking career with Learnbay's cloud & DevOps training. Learn AWS, cloud security, automation, and DevOps through live classes. Enrol now!"
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
          href="https://www.learnbay.co/cloud-and-devops-for-network-professionals"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
   "@context": "http://schema.org",
  "@type": "Course",
  "name": "Cloud & DevOps training for Network Professionals - Learnbay",
  "description": "Advance your networking career with Learnbay's cloud & DevOps training. Learn AWS, cloud security, automation, and DevOps through live classes. Enrol now!",
  "url": "https://www.learnbay.co/cloud-and-devops-for-network-professionals",
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
  "coursePrerequisites": "This program is suitable for entry to mid-level working professionals with a minimum of 1 year of work experience in the IT domain.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of the Cloud and DevOps Engineering Program for network professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With our 150+ hours of live instructor-led training sessions, you can establish yourself as a certified professional in Cloud or DevOps. "
      }
    },
    {
      "@type": "Question",
      "name": "What prerequisites are required to enroll in this program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This program is suitable for entry to mid-level working professionals with a minimum of 1 year of work experience in the IT domain. "
      }
    },
    {
      "@type": "Question",
      "name": "Is this Cloud Computing Course suitable for freshers in IT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, this certification is not an ideal match for freshers. It requires a minimum of 1 year of working experience in the tech domain. "
      }
    },
    {
      "@type": "Question",
      "name": "What cloud platforms are covered in the Cloud and DevOps Engineering Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This course will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS tools with a hands-on learning experience. "
      }
    },
    {
      "@type": "Question",
      "name": "How do I stay updated on course content and any changes in the Cloud Computing Course with Real-Time Projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay enables learners to stay updated with recent developments through its customized application. This app enables you to chat online with the respective groups and mentors for further clarification on course doubts. "
      }
    },
    {
      "@type": "Question",
      "name": "How does this program prepare aspirants for real-world cloud and DevOps challenges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The DevOps Training with capstone projects prepares IT professionals to tackle network challenges faced by startups and deliver scalable results. "
      }
    },
    {
      "@type": "Question",
      "name": "How much does the Cloud & DevOps Engineering Certification (for network professionals) cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course fee is INR 1,20,000 + 18% GST. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there any payment instalment options available for this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have an instalment payment facility to pay the fee through a Credit card, UPI, or Internet banking. "
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay for the course using credit cards, and are there other payment methods accepted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can pay for the course using credit cards in addition to UPI or Internet banking."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a refund policy in case I need to withdraw from the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer an easy refund or cancellation policy for those who need to withdraw from the program. For further details, refer to [Learnbay’s Refund/Cancellation Policy](https://www.learnbay.co/refund-cancellation-policy). "
      }
    },
    {
      "@type": "Question",
      "name": "Are there any additional costs for course materials, textbooks, or certification exams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don’t have to pay extra for course materials, textbooks, or certification exams. With just the payment of course fees, you can get started with the learning.\n\n"
      }
    },
    {
      "@type": "Question",
      "name": "How many live capstone projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will get four live capstone projects with this program. "
      }
    },
    {
      "@type": "Question",
      "name": "Could you elaborate on the capstone project and its significance in this program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capstone projects with this course enable tech experts to enhance their ability to tackle real-world network challenges. It equips you with a set of skills that industrial employers and startups value. This helps in increasing your earning limits. It consists of hands-on projects that help you practice the in-demand tools, making room for improvement to sustain in the desired field. Additionally, the project work helps you build a project portfolio and validates your skills in the eyes of recruiters.\n\n\n"
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You will obtain industry-accredited certifications from Microsoft and Learnbay once you complete the course and projects.  "
      }
    },
    {
      "@type": "Question",
      "name": "Is the certification globally recognised?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide globally recognized credentials to enrich your career and validate your skills to grab competitive jobs. "
      }
    },
    {
      "@type": "Question",
      "name": "What type of certification do I receive upon course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upon completion of the course, you will receive –\n\nThree Microsoft certifications\nOne Course Completion Certificate from Learnbay"
      }
    },
    {
      "@type": "Question",
      "name": "Are there any additional costs associated with the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The certification has no other expenses included apart from the course fees.\n\n"
      }
    },
    {
      "@type": "Question",
      "name": "How does this program cater to individuals interested in pursuing a career as a certified Cloud & DevOps professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This program aims to support career-building with promising job roles. IT experts eager to pursue a career as a Cloud or DevOps Engineer will get seamless training sessions. Hands-on learning of tools helps learners future-proof their skills with assured job offers as certified network professionals. "
      }
    },
    {
      "@type": "Question",
      "name": "What distinguishes this course from others in the market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay believes in real-time upskilling to enrich the existing skill sets and attain career success. Its DevOps Training for Working Professionals is different from others in the following ways –\n\nIndustry-driven modules with AWS, Microsoft Azure, and GCP\nAssured interview calls from 350+ Industry partners \nGlobally recognised project certification from Microsoft\nDomain-specific training (for network professionals)\n100%  live interactions with mentors\n1:1 doubt-clearing sessions\nResume optimization"
      }
    },
    {
      "@type": "Question",
      "name": "What resources are in place to help graduates secure positions in the field of networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay offers industry-paced training to help graduates secure a promising position as a certified cloud professional. The resources or support they offer are –\n\nComprehensive knowledge-building and practical training \nLive projects for practical learning\nTraining on in-demand Cloud & DevOps tools\n100% placement services\nIndustry recognised certifications from Microsoft & Learnbay\n\n "
      }
    },
    {
      "@type": "Question",
      "name": "Is there any support or mentorship provided during the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we believe in industry-driven mentorship to justify a career transition. We have renowned faculty from promising MNCs who mentor our aspirants. Once you enrol in the course, we will allocate you a mentor or instructor to guide you throughout the coursework. Mentors guide you with real-world experiences to tackle the issues with proven solutions. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our experienced mentors will help you with coursework, case studies, practical exercises, and live capstone projects. Mentors help learners with 1:1 doubt-clearing, project handling, and coursework activities. Thus, you will get complete support from your mentor with valuable results."
      }
    },
    {
      "@type": "Question",
      "name": "How can I connect with a mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact your mentor 24/7 directly via the Learnbay app. You can contact them personally over the phone or via app chat sessions. "
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical response time for mentor support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After enrolling in the Cloud & DevOps Engineering Program, you can get along with your mentor for each discussion or need. Our mentors are there to support your queries at any time (during and after the training sessions). So, within 10-15 minutes, you can get mentor support to resolve queries concerning coursework or live projects. \n\n"
      }
    },
    {
      "@type": "Question",
      "name": "Are there dedicated support channels for addressing technical issues during the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay has a centralised technical support system to help learners with related issues during the course. This technical support is available 24/7 to solve all your queries as soon as possible. In case you face technical problems during login, logout, training sessions, attendance, or other activities, our dedicated experts are there to help. "
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support is available for professionals enrolled in the Cloud and DevOps Engineering program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After enrolling in the DevOps Training, learners will get support for–\n\nTechnical/non-technical issues\nContacting mentors \n1:1 doubt-clearing\nCourse materials\nCoursework and project handling guidance\nCareer assistance"
      }
    },
    {
      "@type": "Question",
      "name": "How can learners get assistance with course materials or clarification on concepts related to cloud technology and DevOps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dedicated mentorship is an effective solution for clarifying concepts and building holistic knowledge. You can directly reach your mentor in case of doubts or further clarification on Cloud and DevOps concepts."
      }
    },
    {
      "@type": "Question",
      "name": "Are there specific support options for those preparing for Cloud & DevOps exams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The placement service is a learner-centric solution for learners preparing for DevOps certification exams or placement. It helps learners with 1:1 doubt clearing, mock interviews, mentorship, resume building, and soft skills training. Learners can reach out to their mentors at any time for support with certification exams or job interviews."
      }
    }
  ]

            }`,
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-Network-Professionalslink.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
          courseId={"cloud-network-pro"}
        />
        <AlumniCompaniesCloudDevopsNP
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-Network-Professionalslink.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacementNP time="150" guided="10" />

        <HighlightsAdminSection cloud={true} highlightsData={highlightsData} />

        <AnimationNew1 />
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-Network-Professionalslink.pdf"
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
    "../Data/cloud-and-devops-for-network-professionals-data"
  );
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
