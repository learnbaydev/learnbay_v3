import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { parseJSONData } from "@/Util/JsonConvertor";
import DSAHeader from "@/components/CoursePage/NewDSA/Header/NewDSAHeader";
import Navbar from "@/components/Global/Navbar/Navbar";
import BookDemo from "@/components/CoursePage/NewDSA/BookDemo/BookDemo";
const ProgramSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/ProgramSection/ProgramSection")
);
const DSAPractical = dynamic(() =>
  import("@/components/CoursePage/NewDSA/Practical/DSAPractical")
);
const AnimationNew = dynamic(() =>
  import("@/components/Home/whyChooseSection/whylblimited")
);
const Other = dynamic(() =>
  import("@/components/Home/newUI/OtherVS_updated/Other")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus2025")
);
const NewCertificateSection = dynamic(() =>
  import("@/components/CoursePage/newCertificate/NewCertificate")
);
const DSAFeeSection = dynamic(() =>
  import("@/components/CoursePage/dsaFee/DSAFeeSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
);
const MentorsSection = dynamic(() =>
  import("@/components/course/MentorsSection/MentorsSection")
);
import GenAIProject from "@/components/CoursePage/genAiProject/GenAIProject";
const ReviewSlider = dynamic(() =>
  import("@/components/Home/newUI/reviewSlider/reviewSlider")
);
import Certificate from "@/components/CoursePage/Certificate/Certificate";
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);
import BottomBar from "@/components/Global/BottomBar/BottomBar";

import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from "@/Util/getDSABatchData";
import AlumniCompanies from "@/components/CoursePage/newUICourse/AlumniCompanies";
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacementChild/LearningToPlacement";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import HighlightsSection from "@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI_and_Agentic_AI_for_Cloud_and_DevOps.pdf";

  let soonDate = getDSABookingSoonDate();
  let laterDate = getDSABookingLaterDate();
  // console.log(getDSABookingSoonDate(new Date('2023-03-24')));
  // console.log(getDSABookingLaterDate(new Date('2023-03-24')));
  const faqNewData = [
    {
      id: 0,
      sectionName: "Course-Related",
      data: [
        {
          id: 0,
          ques: "Can I do a GenAI and Agentic AI Course for Cloud and DevOps professionals at Learnbay?",
          ans: "Yes. Professionals with good knowledge in cloud and devops knowledge or with at least one year of work experience in the same field are eligible to join the course.",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
          ans: "Cloud and devOps experts enrolling for this Generative AI course online can easily balance their work schedules and study goals. They will get the flexibility to choose their batches from multiple timings on both weekdays and weekends. Our 100% live online sessions allow professionals to optimize their domain expertise without giving up their current jobs.",
          open: false,
        },
        {
          id: 2,
          ques: "Why should I join Learnbay’s MasterTrack Program?",
          ans: "If you’re a cloud and devOps professional, enrolling in our MasterTrack program can be advantageous for you –",
          open: false,
          list1: "3-Year flexi subscription to upgrade your skills and evolve",
          list2:
            "AI CoLab experience in tackling trending GenAI and AI Devops projects.",
          list3:
            "BYOP+Mentorship to resolve your own issues under a mentor’s guidance",
          list4: "IBM credentials to validate your AI skills",
        },
        {
          id: 3,
          ques: "Is a Gen AI course for Cloud and DevOps professionals worth it?",
          ans: "Pursuing a Gen AI in DevOps course can be a beneficial career investment for Cloud professionals. It enables experts to enhance product designs, control quality issues, ensure predictive maintenance, and optimize supply chains. Lastly, adding IBM certificates can help you thrive globally.",
          open: false,
        },
        {
          id: 4,
          ques: "What is the duration of the Gen AI course for DevOps professionals?",
          ans: "The course duration is 5 months (flexible batches), including coursework and projects.",
          open: false,
        },
      ],
    },
    {
      id: 1,
      sectionName: "Payments and Scholarships",
      data: [
        {
          id: 0,
          ques: "What is the cost of the Generative AI course online?",
          ans: "The Agentic AI in DevOps course for the cloud and DevOps professionals costs ₹1,20,000 + 18% GST.",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pay in installments for the Generative AI Course?",
          ans: "Yes, you can opt for an interest-free no-cost EMI plan with the necessary documents (Aadhaar card, PAN card, and salary slip).",
          open: false,
        },
        {
          id: 2,
          ques: "Is there any scholarship/discount available for the Gen AI course online?",
          ans: "Being an early bird, you can avail yourself of a 15% – 20% discount. Yet, learners who join with one or more friends can avail of group discounts per the following terms and conditions.",
          open: false,
          list1: "Group of 2: 5% extra discount",
          list2: "Group of 3: 8% additional discount",
          list3: "Group of 4+: Max 10% discount",
          note: "Apart from discounts, experts can receive up to a 25% scholarship while enrolling in the course. You can contact our sales team at +91 7795687988 for further details on special offers.",
        },
        {
          id: 3,
          ques: "What is the refund policy for the Gen AI and Agentic AI Program at Learnbay?",
          ans: "Experts joining our course can cancel anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
          open: false,
        },
      ],
    },
    {
      id: 2,
      sectionName: "Capstone and Real-time Projects",
      data: [
        {
          id: 0,
          ques: "How many real-time projects will there be?",
          ans: "The Generative AI course for Cloud professionals includes 26+ real-time industrial projects to refine your domain knowledge.",
          open: true,
        },
        {
          id: 1,
          ques: "Are there opportunities to work on real industry projects?",
          ans: "Yes. Experts enrolling in the Generative AI course for DevOps experts will work on real-time AI projects to gain valuable insights. You will be assigned domain-specific GenAI and Agentic AI projects at AI Co-Labs to refine your skills in LLM-powered Cloud and DevOps systems and autonomous agents.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I choose my capstone project, or are projects assigned?",
          ans: "After enrolling in the GenAI and Agentic AI program for Cloud and DevOps professionals, you can choose projects useful to your domain, career interests, and goals. Additionally, you will work on AI startup projects to tackle real-time GenAI & Agentic AI challenges.",
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: "Certifications",
      data: [
        {
          id: 0,
          ques: "Is there any accredited certification after course completion?",
          ans: "Yes. Learners joining this course will receive certifications to stand out in the career competition. Once you complete the course and project tasks, you will receive a globally valued IBM Generative AI Certification.",
          open: true,
        },
        {
          id: 1,
          ques: "How do I receive my certificate, and is it a digital or printed certificate?",
          ans: "All eligible learners with at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days.",
          open: false,
        },
      ],
    },
    {
      id: 4,
      sectionName: "Job Assistance",
      data: [
        {
          id: 0,
          ques: "What’s the eligibility for a job assistance program at Learnbay?",
          ans: "Learners enrolling in this Generative AI course for DevOps professionals must complete the tasks and projects with a minimum score of 70% to unlock exciting career options through the placement program.",
          open: true,
        },
        {
          id: 1,
          ques: "How many interview calls will I get at Learnbay?",
          ans: "Learners from the Cloud and DevOps sector joining our Generative AI course online will get unlimited interview calls from our top allied partners.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I opt for the placement services?",
          ans: "Anyone with a minimum score of 70% in course tasks and projects is eligible for the Career Services Pro. Under this feature, you will get –",
          open: false,
          list1: "1:1 mock interviews with allied partners",
          list2: "Resume help",
          list3: "Job referrals from top-ranked Cloud computing firms",
        },
        {
          id: 3,
          ques: "Do you offer job placement services after completing the course?",
          ans: "Yes. We offer 100% job assistance services to learners opting for a Gen AI course online. The program supports learners with premium career-enrich perks – from 1:1 interview prep to updating CVs.",
          open: false,
        },
      ],
    },
    {
      id: 5,
      sectionName: "Mentorships",
      data: [
        {
          id: 0,
          ques: "Until when will the students get the mentorship facility?",
          ans: "The learners will get the mentorship until they complete the course. After completing the course tasks and projects, you can reach out to your mentors for doubt-clearing, placement support, and project guidance.",
          open: true,
        },
        {
          id: 1,
          ques: "Can a Learnbay student choose to study with their desired mentor?",
          ans: "Learnbay has a team of reliable mentors with relevant industry experience. Each learner is assigned a mentor who can justify upskilling and meet a learner’s career goals and interests. If a student does not find the mentor fit for training, he/she can request a new mentor. Learnbay supports quality upskilling; hence, students can change their mentors and study from the ones they desire.",
          open: false,
        },
        {
          id: 2,
          ques: "Are mentors available for one-on-one or group sessions?",
          ans: "Yes. Our reputable mentors are available for 1:1 or group sessions in respective projects or courses. If a learner opts for a 1:1 session for live training, doubt-clearing, or project queries, mentors are available for them.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Learners enrolling in the course will get reliable industry training. Our mentors help each learner with course tasks and real-time GenAI and Agentic AI projects. So, yes, you will get hassle-free help from your mentor while working on capstone projects and course modules.",
          open: false,
        },
      ],
    },
    {
      id: 6,
      sectionName: "Support",
      data: [
        {
          id: 0,
          ques: "How can I contact technical support if I face any problems with the course platform?",
          ans: "Once you register for the course, you will get 24×7 learner support that resolves any learning queries. You can call our helpline number to reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course platform.",
          open: true,
        },
        {
          id: 1,
          ques: "Is there a discussion forum or community for learners to communicate and seek support?",
          ans: "Learners will get a customized Learnbay app with their mentors mentioned. They can directly communicate with their mentors to resolve queries and discuss doubts with peers.",
          open: false,
        },
        {
          id: 2,
          ques: "How long will I get job referrals?",
          ans: "You can get job referrals until you successfully crack a promising job in the Cloud and DevOps domain.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          GenAI and Agentic AI Program for Cloud & DevOps - Learnbay
        </title>
        <meta
          name="description"
          content="Become an AI-ready Cloud & DevOps engineer with Learnbay’s GenAI & Agentic AI program. Learn LLMs, agents, & build AI-powered CICD & ops workflows. Apply now.
"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="genai and agentic ai course for cloud devops,
generative ai certification for devops engineers,
genai course for cloud and devops,
agentic ai course for devops professionals,
genai certification for cloud and devops


"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/genai-agentic-ai-for-cloud-devops"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GenAI and Agentic AI Program for Cloud & DevOps - Learnbay"
        />
        <meta
          property="og:description"
          content="Become an AI-ready Cloud & DevOps engineer with Learnbay’s GenAI & Agentic AI program. Learn LLMs, agents, & build AI-powered CICD & ops workflows. Apply now."
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
          content="https://www.learnbay.co/genai-agentic-ai-for-cloud-devops"
        />
        <meta
          name="twitter:title"
          content="GenAI and Agentic AI Program for Cloud & DevOps - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Become an AI-ready Cloud & DevOps engineer with Learnbay’s GenAI & Agentic AI program. Learn LLMs, agents, & build AI-powered CICD & ops workflows. Apply now."
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
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/genai-agentic-ai-for-cloud-devops"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "GenAI and Agentic AI Program for Cloud & DevOps - Learnbay",
      "description": "Become an AI-ready Cloud & DevOps engineer with Learnbay’s GenAI & Agentic AI program. Learn LLMs, agents, & build AI-powered CICD & ops workflows. Apply now.",
      "url": "https://www.learnbay.co/genai-agentic-ai-for-cloud-devops",
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
    }`,
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
      "name": "Can I do a GenAI and Agentic AI Course for Cloud and DevOps professionals at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professionals with good knowledge in cloud and devops knowledge or with at least one year of work experience in the same field are eligible to join the course."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloud and devOps experts enrolling for this Generative AI course online can easily balance their work schedules and study goals. They will get the flexibility to choose their batches from multiple timings on both weekdays and weekends. Our 100% live online sessions allow professionals to optimize their domain expertise without giving up their current jobs."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I join Learnbay’s MasterTrack Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you’re a cloud and devOps professional, enrolling in our MasterTrack program can be advantageous for you – 3-Year flexi subscription to upgrade your skills and evolve, AI CoLab experience in tackling trending GenAI and AI Devops projects., BYOP+Mentorship to resolve your own issues under a mentor’s guidance, IBM credentials to validate your AI skills."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Gen AI course for Cloud and DevOps professionals worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pursuing a Gen AI in devops course can be a beneficial career investment for Cloud professionals. It enables experts to enhance product designs, control quality issues, ensure predictive maintenance, and optimize supply chains. Lastly, adding IBM certificates can help you thrive globally."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of the Gen AI course for DevOps professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course duration is 5 months (flexible batches), including coursework and projects."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of the Generative AI course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Agentic AI in DevOps course for the cloud and DevOps professionals costs ₹1,20,000 + 18% GST."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the Generative AI Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can opt for an interest-free no-cost EMI plan with the necessary documents (Aadhaar card, PAN card, and salary slip)."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any scholarship/discount available for the Gen AI course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Being an early bird, you can avail yourself of a 15% – 20% discount. Yet, learners who join with one or more friends can avail of group discounts per the following terms and conditions. Group of 2: 5% extra discount, Group of 3: 8% additional discount, Group of 4+: Max 10% discount. Apart from discounts, experts can receive up to a 25% scholarship while enrolling in the course. You can contact our sales team at +91 7795687988 for further details on special offers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the Gen AI and Agentic AI Program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experts joining our course can cancel anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy."
      }
    },
    {
      "@type": "Question",
      "name": "How many real-time projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI course for Cloud professionals includes 26+ real-time industrial projects to refine your domain knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Experts enrolling in the Generative AI course for DevOps experts will work on real-time AI projects to gain valuable insights. You will be assigned domain-specific GenAI and Agentic AI projects at AI Co-Labs to refine your skills in LLM-powered Cloud and DevOps systems and autonomous agents."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my capstone project, or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After enrolling in the GenAI and Agentic AI program for Cloud and DevOps professionals, you can choose projects useful to your domain, career interests, and goals. Additionally, you will work on AI startup projects to tackle real-time GenAI & Agentic AI challenges."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners joining this course will receive certifications to stand out in the career competition. Once you complete the course and project tasks, you will receive a globally valued IBM Generative AI Certification."
      }
    },
    {
      "@type": "Question",
      "name": "How do I receive my certificate, and is it a digital or printed certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All eligible learners with at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the eligibility for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this Generative AI course for DevOps professionals must complete the tasks and projects with a minimum score of 70% to unlock exciting career options through the placement program."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners from the Cloud and DevOps sector joining our Generative AI course online will get unlimited interview calls from our top allied partners."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the placement services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone with a minimum score of 70% in course tasks and projects is eligible for the Career Services Pro. Under this feature, you will get – 1:1 mock interviews with allied partners, Resume help, Job referrals from top-ranked Cloud computing firms."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job placement services after completing the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer 100% job assistance services to learners opting for a Gen AI course online. The program supports learners with premium career-enrich perks – from 1:1 interview prep to updating CVs."
      }
    },
    {
      "@type": "Question",
      "name": "Until when will the students get the mentorship facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The learners will get the mentorship until they complete the course. After completing the course tasks and projects, you can reach out to your mentors for doubt-clearing, placement support, and project guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Learnbay student choose to study with their desired mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay has a team of reliable mentors with relevant industry experience. Each learner is assigned a mentor who can justify upskilling and meet a learner’s career goals and interests. If a student does not find the mentor fit for training, he/she can request a new mentor. Learnbay supports quality upskilling; hence, students can change their mentors and study from the ones they desire."
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors available for one-on-one or group sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our reputable mentors are available for 1:1 or group sessions in respective projects or courses. If a learner opts for a 1:1 session for live training, doubt-clearing, or project queries, mentors are available for them."
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in the course will get reliable industry training. Our mentors each learner with course tasks and real-time GenAI and Agentic AI projects. So, yes, you will get hassle-free help from your mentor while working on capstone projects and course modules."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact technical support if I face any problems with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you register for the course, you will get 24×7 learner support that resolves any learning queries. You can call our helpline number to reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course platform."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for learners to communicate and seek support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will get a customized Learnbay app with their mentors mentioned. They can directly communicate with their mentors to resolve queries and discuss doubts with peers."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get job referrals until you successfully crack a promising job in the Cloud and DevOps domain."
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
          violet={true}
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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI_and_Agentic_AI_for_Cloud_and_DevOps.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI_and_Agentic_AI_for_Cloud_and_DevOps.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="150" guided="10" />

        {/* <ProgramSection
          programSectionData={NewDSAData[0].ProgramSection}
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        /> */}
        {/* <DSAPractical /> */}
        <HighlightsSection />

        <AnimationNew />
        <JobReadySection />
        <ReviewSlider idss="eautK0odE7Q" showRealStories={true} />
        <MentorsSection />
        <GenAIProject genAiData={NewDSAData[0].genAiData} Duration={true} />
        <Other />
        <SyllabusNew
          masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
          onlyGENAIPage={true}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse=""
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Managers+and+Leaders+GenAI+and+Agentic+AI+Program2025_compressed.pdf"
          brochurePdf={pdfUrl}
          buttonHide={true}
          interstedInHide={true}
          genAIIIT={true}
        />

        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        {/* <Certificate
          noTabs={true}
          data={NewDSAData[0].certificateNew}
          DSAFresherCertHeading={true}
        /> */}

        {/* <NewCertificateSection certificateNew={NewDSAData[0].certificateNew} /> */}
        <DSAFeeSection
          Fee="₹ 1,20,000"
          FeeEmi="₹ 7,916/ month"
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
          // greenButton={true}
        />

        {/* <FAQNew FAQNewData={NewDSAData[0].faq} background={true} /> */}
        {/* <Content
          dataScienceCounselling={true}
          DSANewContent={true}
          background={true}
        /> */}
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
    "../Data/GenAIandAgenticAIProgramForCloudAndDevopsData2025"
  );
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
