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
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Complete+Final+of+Cloud+and+Devops+Engineering+For+DBA+Professionals++(5)_compressed.pdf";

  const faqNewData = [
    {
      id: 0,
      sectionName: "COURSE-RELATED",
      data: [
        {
          id: 0,
          ques: "What is the duration of the Cloud and DevOps Engineering Program for database administrators?",
          ans: "You can become a certified DevOps and cloud professional with our 150+ hours of live instructor-led training sessions.",
          open: true,
        },
        {
          id: 1,
          ques: "What prerequisites are required to enroll in this program?",
          ans: "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience.",
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
          ans: "This course will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools with hands-on training.",
          open: false,
        },
        {
          id: 4,
          ques: "How do I stay updated on course content and any changes in the Cloud Computing Course with Real-Time Projects?",
          ans: "Learnbay enables learners to stay updated with recent developments through its customized application. It also has an interface to chat online with respective groups and mentors for further clarification.",
          open: false,
        },
        {
          id: 5,
          ques: "How does this program prepare aspirants for real-world cloud and DevOps challenges?",
          ans: "The DevOps Training with Capstone Projects prepares IT professionals to tackle database problems faced by startups, enabling them to fine-tune performance, optimize core operations, and scale outcomes.",
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
          ques: "How much does the Cloud & DevOps Engineering Certification for database admins cost?",
          ans: "The course fee is INR 1,20,000 plus 18% GST.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there any payment instalment options available for this course?",
          ans: "Yes, we have an instalment payment facility where you can make expenses through a Credit card, UPI, or Internet banking.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I pay for the course using credit cards, and are there other payment methods accepted?",
          ans: "Yes, you can pay for the course using credit cards. Some other payment options, UPI or Internet banking, are also available.",
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
          ans: "No, you don’t have to pay extra for course materials, textbooks, or certification exams. Everything is covered within the course fees.",
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
          ques: "Could you elaborate on the capstone project and its significance in the Google Cloud Course?",
          ans: "Capstone projects enable tech experts to enhance their ability to tackle real-world business scenarios. It helps build a project portfolio and validates your skills in the eyes of recruiters, increasing your earning limits.",
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
          ans: "Yes, we provide globally recognized certifications, which enrich your career and validate your skills for better job prospects.",
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
          ans: "This program supports career-building with seamless training sessions and hands-on tool learning to future-proof your skills with assured job offers as database administrators.",
          open: false,
        },
        {
          id: 1,
          ques: "What distinguishes this course from others in the market?",
          ans: "Learnbay's program is different from others in the following ways –",
          open: false,
          dscoursefaq1: true,
          list1: "Industry-driven syllabus with AWS, Microsoft Azure, and GCP",
          list2: "Assured interview calls from 350+ Industry partners",
          list3: "Domain-specific training (for database administrators)",
          list4:
            "1:1 live interactions, doubt-clearing, and resume preparation",
        },
        {
          id: 2,
          ques: "What resources are in place to help graduates secure positions in the field of database administration?",
          ans: "Learnbay offers industry-paced training including:",
          open: false,
          dscoursefaq1: true,
          list1: "Comprehensive knowledge-building and live projects",
          list2: "Training on in-demand Cloud & DevOps tools",
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
          ans: "Yes, we provide industry-driven mentorship from faculty at promising MNCs. Mentors guide you with real-world experiences to tackle issues with proven solutions.",
          open: false,
        },
        {
          id: 1,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Our experienced mentors will help you with coursework, case studies, practical exercises, and live capstone projects, providing insights into database handling.",
          open: false,
        },
        {
          id: 2,
          ques: "How can I connect with a mentor?",
          ans: "An industry-specific mentor is assigned to you. You can contact them 24/7 directly via the Learnbay app, phone, or app chat sessions.",
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
          ques: "What kind of support is available for students enrolled in the Cloud and DevOps Engineering?",
          ans: "Learners receive support for technical/non-technical issues, mentor contact, 1:1 doubt-clearing, course materials, and job assistance.",
          open: false,
        },
        {
          id: 2,
          ques: "How can students get assistance with course materials or clarification on concepts related to cloud technology and DevOps?",
          ans: "Dedicated mentorship is available for clarifying concepts and building holistic knowledge. You can directly reach your mentor for specific doubts.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there specific support options for those preparing for Cloud & DevOps exams?",
          ans: "The placement service provides 1:1 doubt clearing, mock interviews, mentorship, resume building, and soft skills training for exam or interview prep.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Cloud & DevOps Certification for Database Admins - Learnbay
        </title>
        <meta
          name="description"
          content="Upgrade your DBA career with Cloud & DevOps training. Learn cloud databases, DevOps automation, AWS tools, and hands-on projects with experts."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Cloud and DevOps database administrator certification,
Cloud and DevOps engineering for database admin,
Cloud DevOps training for Database administrator,
DevOps course for Database administrator,
Cloud certification for Database administrator,
Cloud and DevOps engineering certification for DBA,
devops database administrator
"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud-and-devops-for-database-administrators"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cloud & DevOps Certification for Database Admins - Learnbay"
        />
        <meta
          property="og:description"
          content="Upgrade your DBA career with Cloud & DevOps training. Learn cloud databases, DevOps automation, AWS tools, and hands-on projects with experts"
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
          content="https://www.learnbay.co/cloud-and-devops-for-database-administrators"
        />
        <meta
          name="twitter:title"
          content="Cloud & DevOps Certification for Database Admins - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upgrade your DBA career with Cloud & DevOps training. Learn cloud databases, DevOps automation, AWS tools, and hands-on projects with experts."
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
          href="https://www.learnbay.co/cloud-and-devops-for-database-administrators"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
             "@context": "http://schema.org",
  "@type": "Course",
  "name": "Cloud & DevOps Certification for Database Admins - Learnbay",
  "description": "Upgrade your DBA career with Cloud & DevOps training. Learn cloud databases, DevOps automation, AWS tools, and hands-on projects with experts.",
  "url": "https://www.learnbay.co/cloud-and-devops-for-database-administrators",
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
  "coursePrerequisites": "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience.",
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
      "name": "What is the duration of the Cloud and DevOps Engineering Program for system administrators?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can become a certified DevOps and cloud professional with our 150+ hours of live instructor-led online sessions. "
      }
    },
    {
      "@type": "Question",
      "name": "What prerequisites are required to enroll in this program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience. "
      }
    },
    {
      "@type": "Question",
      "name": "Is this Cloud Computing Course suitable for beginners in IT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, this certification is not an ideal match for freshers, irrespective of the domain. It demands a minimum of 1 year of working experience in the tech domain. "
      }
    },
    {
      "@type": "Question",
      "name": "What cloud platforms are covered in the Cloud and DevOps Engineering Program for system admin professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This course will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools with hands-on training. "
      }
    },
    {
      "@type": "Question",
      "name": "How do I stay updated on course content and any changes in the Cloud Computing Course with Real-Time Projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay has a customized application that enables learners to stay updated with recent developments. It also has an interface to chat online with the respective groups and mentors for further doubt clearance. Any updates in the course content or related things are communicated via the online app or sessions. "
      }
    },
    {
      "@type": "Question",
      "name": "How does the program get updated with the recent developments in Cloud technology and DevOps practices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay follows each significant industrial development worldwide and its impacts on specific job roles. Quality industry research, networking with industry experts, and collaborations with 350+ MNCs keep us informed of the latest trends in these practices. In the same way, our course modules are continuously updated according to recent developments. This includes AWS, Microsoft Azure, and GCP. "
      }
    },
    {
      "@type": "Question",
      "name": "How does this program prepare aspirants for real-world cloud and DevOps challenges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The DevOps Training with Capstone Projects prepares IT professionals to face real-world production-grade system challenges. Its trainer-led training sessions by industry mentors help you get versed in real-time issues linked to Cloud & DevOps practices. "
      }
    },
    {
      "@type": "Question",
      "name": "How much does the Cloud & DevOps Engineering Course for system admin professionals cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course fee is INR 1,20,000 plus 18% GST. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there any payment instalment options available for this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have an instalment payment facility where you can make expenses through a Credit card, UPI, or Internet banking. "
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay for the course using credit cards, and are there other payment methods accepted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can pay for the course using credit cards. Some other payment options, like UPI or Internet banking, are also available."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a refund policy in case I need to withdraw from the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer an effortless refund or cancellation policy for those who need to withdraw from the program. For further details, refer to [Learnbay’s Refund/Cancellation Policy](https://www.learnbay.co/refund-cancellation-policy). "
      }
    },
    {
      "@type": "Question",
      "name": "Are there any additional costs for course materials, textbooks, or certification exams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you don’t have to pay additionally for course materials, textbooks, or certification exams. With just the payment of course fees, you can get started with the learning.\n\n "
      }
    },
    {
      "@type": "Question",
      "name": "How many capstone projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will get four capstone projects with this program. "
      }
    },
    {
      "@type": "Question",
      "name": "Could you elaborate on the capstone project and its significance in the Google Cloud Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capstone projects enable techies to enhance their proficiency to see through actual business scenarios and tackle them. It equips you with a set of skills that employers value. This helps in increasing your earning limits. It consists of stimulating projects that help you practice the in-demand tools. It helps to evaluate your skills and knowledge. Thus, making room for improvement to sustain in the desired field. Additionally, the project work builds a project portfolio and validates your skills in the eyes of recruiters.\n\n\n\n\n"
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
      "name": "Is the certification internationally recognised?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the certification is globally recognised, which enriches your career and validates the learned skills for better job prospects. "
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
        "text": "The certification has no other expenses included apart from the course fees.\n\n\n\n"
      }
    },
    {
      "@type": "Question",
      "name": "How does this program cater to individuals interested in pursuing a career as a certified Cloud & DevOps professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This program aims to support career-building with promising job roles. IT experts eager to pursue a career as a Cloud or DevOps Engineer will get seamless training sessions. Hands-on learning of tools helps learners future-proof their skills with assured job offers. It's 100% dedicated placement support helps system administrators crack promising job offers across MNCs and other reputed companies."
      }
    },
    {
      "@type": "Question",
      "name": "What distinguishes this Cloud Engineering Course from others in the market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay believes in real-time upskilling to enrich the existing skill sets and attain career success. Its DevOps Training for Working Professionals is different from others in the following ways –\n\nIndustry-driven syllabus with AWS, Microsoft Azure, and GCP\nGuaranteed calls for Interviews from 350+ Industry partners \nGlobally recognised project certification from Microsoft\nDomain-specific training (for System admin professionals)\n100%  live interactions with industry mentors\n1:1 doubt-clearing support\nResume preparation "
      }
    },
    {
      "@type": "Question",
      "name": "What resources or support systems are in place to help graduates secure positions in the field of system administration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay offers industry-paced training to help graduates secure a promising position as a certified system administrator. The resources or support they offer are –\n\nComprehensive knowledge-building and practical training \nLive projects for practical learning\nTraining on in-demand Cloud & DevOps tools\n100% placement support\nIndustry recognised certifications from Microsoft & Learnbay\n\n\n"
      }
    },
    {
      "@type": "Question",
      "name": "Is there any support or mentorship provided during the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we believe in industry-driven mentorship to justify a career transition. We have renowned faculty from promising MNCs who mentor our aspirants. Once you enrol in the course, we will allocate you a mentor or instructor to guide you throughout the coursework. Mentors guide you with real-world experiences so that you can tackle the issues with proven solutions. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our experienced mentors are there to help you with coursework, case studies, practical exercises, and fresh capstone projects. Learners will gain insights into real-world applications of system-based operations and DevOps tools. Mentors help learners with 1:1 doubt-clearing, project handling, and coursework activities. Thus, you will get complete support from your mentor with valuable results."
      }
    },
    {
      "@type": "Question",
      "name": "How can I connect with a mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An industry-specific mentor is assigned to learners enrolling in the program. You can contact your mentor 24/7 directly via the Learnbay app. You can contact them personally over the phone or via app chat sessions. "
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
      "name": "What kind of support is available for students enrolled in the Cloud and DevOps Engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After enrolling in the DevOps Training, learners will get support for–\n\nTechnical/non-technical issues\nContacting mentors \n1:1 doubt-clearing\nCourse materials\nCoursework and project handling help\nJob assistance"
      }
    },
    {
      "@type": "Question",
      "name": "How can students get assistance with course materials or clarification on concepts related to cloud technology and DevOps?",
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
        "text": "The placement service is a learner-centric solution for learners preparing for DevOps certification exams or placement. It helps learners with 1:1 doubt clearing, mock interviews, mentorship, resume building, and soft skills training. Learners can reach their mentors at any time to get support in certification exams or to appear in job interviews.\n\n\n\n\n"
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Engineering-For-DBA-Professionalslink.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompaniesCloudDevopsDA
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Complete+Final+of+Cloud+and+Devops+Engineering+For+DBA+Professionals++(5)_compressed.pdf"
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
  const module = await import(
    "../Data/cloud-and-devops-for-database-administrators-data"
  );
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
