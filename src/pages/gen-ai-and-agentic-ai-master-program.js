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
import FAQNew from "@/components/CoursePage/FAQNew/FAQNew";
import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from "@/Util/getDSABatchData";
import AlumniCompanies from "@/components/CoursePage/newUICourse/AlumniCompanies";
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacementinfinity/LearningToPlacement";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import HighlightsSection from "@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+%26+Agentic+AI+Master+Program+for+Tech+Professionals+(4)_compressed.pdf";

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
          ques: "Can I do a Gen AI and Agentic AI Course at Learnbay?",
          ans: "Yes, mid-career working professionals with a minimum of 1+ years of IT experience can pursue our Gen AI Program. Apart from this, one must have a basic understanding of Python, ML, and Deep Learning. ",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
          ans: "Yes. Working professionals can enroll in a Generative AI course online and get the flexibility of balancing their work-study obligations. This course offers 100% live online interactive sessions. Experts can choose and plan their batches for weekday or weekend sessions. ",
          open: false,
        },
        {
          id: 2,
          ques: "Are there any hands-on labs or practical tasks in the course modules?",
          ans: "Yes. The Generative AI course focuses on project-based learning. Here, you will work on real-time AI startup projects to tackle GenAI and Agentic AI challenges and gain insights. ",
          open: false,
        },
        {
          id: 3,
          ques: "Is a Gen AI course for working professionals worth it?",
          ans: "Pursuing a Generative AI course for working professionals is a notable career investment. Working professionals can design GenAI applications, build AI agents, and integrate LLMs for smooth workflows. Also, earning IBM credentials and working with real-time AI startups can escalate career success metrics with exciting gains. ",
          open: false,
        },
        {
          id: 4,
          ques: "What is the duration of the Gen AI Course for working professionals?",
          ans: "The Generative AI course for working professionals comes with a duration of 9 months with live projects. ",
          open: false,
        },
        {
          id: 5,
          ques: "What extra advantages does this Gen AI and Agentic AI program offer?",
          ans: "Learners joining our Generative AI course online will receive endless career benefits. Apart from this, you will receive extra benefits like –",
          open: false,
          list1: "3-year flexi subscription",
          list2: "BYOP + Mentorship",
          list3: "AI CoLab experience with 2 AI startup certifications",
          list4: "IBM Certification",
          list5: "Career Services Pro (100% placement support)",
        },
      ],
    },

    {
      id: 1,
      sectionName: "Domain Specialization",
      data: [
        {
          id: 0,
          ques: "What is domain specialization?",
          ans: "Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to an industry. Domain-specific learning is vital for experts who want to retain their careers with enriched benefits (hikes, bonuses, promotions, etc). ",
          open: true,
        },
        {
          id: 1,
          ques: "What are the available domain elective options?",
          ans: "Our GenAI & Agentic AI for working professionals with domain specialization promises a rewarding future. Here, you can choose any two domain electives to transition your role to GenAI & Agentic AI specialists. The available domains are – ",
          open: false,
          list1: "BFSI",
          list2: "Healthcare",
          list3: "Retail",
          list4: "Cloud & DevOps",
          list5: "Managers & Leaders",
          list6: "Software Developers",
          list7: "Manufacturing",
        },
      ],
    },

    {
      id: 2,
      sectionName: "Payments and Scholarships",
      data: [
        {
          id: 0,
          ques: "What is the cost of the Generative AI course online?",
          ans: "The Generative AI course fee is ₹1,59,000 + 18% GST.",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pay in installments for the Generative AI Developer Course?",
          ans: "You can pay course fees in installments under a no-cost EMI option in 6, 9, or 12 months. You can also opt for interest-free loans, credit cards, or UPI with the necessary documents (Aadhaar card, PAN card, and salary slip). ",
          open: false,
        },
        {
          id: 2,
          ques: "Is there any scholarship/discount available for the Gen AI course online?",
          ans: "The GenAI and Agentic AI Course for working professionals offers a 15% – 20% discount for early birds. We also offer group discounts as per the following terms and conditions.",
          open: false,
          list1: "Group of 2: 5% extra discount",
          list2: "Group of 3: 8% extra discount",
          list3: "Group of 4+: Up to 10% discount",
          note: "Apart from discounts, experts can receive up to a 25% scholarship while enrolling in the course. You can check with our sales team at +91 7795687988 for further details.",
        },

        {
          id: 3,
          ques: "What is the refund policy for the Advance Gen AI Program at Learnbay?",
          ans: "Working professionals joining our Generative AI course can cancel anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy. ",
          open: false,
        },
      ],
    },

    {
      id: 3,
      sectionName: "Capstone and Real-time Projects",
      data: [
        {
          id: 0,
          ques: "How many capstone projects are included?",
          ans: "The program includes 12+ fresh capstone projects focused on real-world GenAI and Agentic AI use cases.",
          open: true,
        },
        {
          id: 1,
          ques: "Are there opportunities to work on real industry projects?",
          ans: "Yes. Working professionals can work on AI startup projects to tackle real-world problems and co-create GenAI solutions. Additionally, throughout the program tenure, learners will work on various domain-specific projects followed by 12+ capstone projects. ",
          open: false,
        },
        {
          id: 2,
          ques: "Can I choose my capstone project, or are projects assigned?",
          ans: "Once you enroll in the Gen AI program for working professionals, you can choose projects best suited to your career roles, interests, and goals. Learners go through group project work under the mentorship of industry experts. ",
          open: false,
        },
      ],
    },

    {
      id: 4,
      sectionName: "Certifications",
      data: [
        {
          id: 0,
          ques: "Is there any accredited certification after course completion?",
          ans: "Yes. working professionals can accelerate their career growth with industry-recognized certifications from IBM and Microsoft. In addition, they can earn AI startup certifications to validate their GenAI-rich expertise. Altogether, you will receive – ",
          open: true,
          list1: "IBM Generative AI Certification",
          list2: "Microsoft Azure Certification",
          list3: "AI CoLab Startup Certification",
        },
        {
          id: 1,
          ques: "How do I receive my certificate, and is it a digital or printed certificate?",
          ans: "All eligible learners with scores of at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days. ",
          open: false,
        },
      ],
    },

    {
      id: 5,
      sectionName: "Job Assistance",
      data: [
        {
          id: 0,
          ques: "What’s the eligibility for job assistance at Learnbay?",
          ans: "Learners enrolling in this Generative AI course must complete the tasks and projects with a minimum score of 70%. Then they are eligible for a job assistance program at Learnbay to unleash exciting career growth options. ",
          open: true,
        },
        {
          id: 1,
          ques: "How many interview calls will I receive?",
          ans: "Working professionals joining our Generative AI course online will get unlimited interview calls from top-trending 350+ industry partners.  ",
          open: false,
        },
        {
          id: 2,
          ques: "What does Career Services Pro include?",
          ans: "Anyone with a minimum score of 70% in course tasks and projects is eligible for the Career Services PRO feature. Under this feature, you will get –",
          open: false,
          list1: "1:1 mock interviews with industry experts",
          list2: "Resume optimization sessions",
          list3: "Job referrals from top MNCs",
        },
        {
          id: 3,

          ques: "Do you offer job assistance services after course completion?",
          ans: "Yes. We offer 100% job assistance services to learners opting for a Gen AI course online. Working professionals can avail themselves of the career services pro benefits once they complete the course. The program supports learners with premium career-enrich perks – from 1:1 interview prep to CV updates.  ",
          open: false,
        },
      ],
    },

    {
      id: 6,
      sectionName: "Mentorships",
      data: [
        {
          id: 0,
          ques: "Until when will students receive mentorship?",
          ans: "Working professionals will get mentorship until they complete the course. After completing the course tasks and projects, you can reach out to your mentors for doubt-clearing, career assistance, and project guidance. ",
          open: true,
        },
        {
          id: 1,
          ques: "Can a Learnbay student choose to study with their desired mentor?",
          ans: "Learnbay has a team of reliable mentors with relevant industry experience. Each learner is assigned a mentor who can justify upskilling and meet a learner’s career goals and interests. If a student does not find the mentor fit for training, he/she can request a new mentor. Learnbay supports quality upskilling; hence, students can change their mentors and study from the ones they desire. ",
          open: false,
        },
        {
          id: 2,
          ques: "Are mentors available for one-on-one sessions?",
          ans: "Yes. Our reliable mentors are available for a 1:1 session for live training, doubt-clearing, and project queries. ",
          open: false,
        },
        {
          id: 3,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Learners enrolling in the Gen AI program for working professionals get the scope of learning under reliable industry training. These mentors are liable for guiding each learner with course tasks and real-time projects at AI CoLab. So, yes, you will get hassle-free help from your mentor while working on fresh capstone projects and course modules. ",
        },
      ],
    },

    {
      id: 7,
      sectionName: "Support",
      data: [
        {
          id: 0,
          ques: "How can I contact technical support?",
          ans: "Once you register for the course, you will get 24×7 learner support that resolves any learning queries. You can call our helpline number to reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course platform. ",
          open: true,
        },
        {
          id: 1,
          ques: "Is there a learner discussion forum or community?",
          ans: "Learners will get a custom-fit Learnbay app with a list of learners and their mentors mentioned. They can directly reach out to their mentors to resolve queries in case of need and discuss doubts with peers. ",
          open: false,
        },
        {
          id: 2,
          ques: "How long will I receive job referrals?",
          ans: "You are qualified to get job referrals once you complete the course. Under the Career Services Pro package, a learner can avail of continuous job referrals to get placed across 350+ industry partners.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          GenAI & Agentic AI Master Program for Professionals - Learnbay
        </title>
        <meta
          name="description"
          content="Advance your career with Learnbay’s GenAI & Agentic AI Master Program for Working Professionals. Build AI agents, RAG, & LLMOps projects with career support.
"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="generative ai master program for working professionals,
generative ai certification for working professionals,
genai and agentic ai for working professionals,
genai agentic ai master program for working professionals,
agentic ai certification for working professionals,
generative ai and agentic ai course for working professionals


"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/gen-ai-and-agentic-ai-master-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GenAI & Agentic AI Master Program for Professionals - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your career with Learnbay’s GenAI & Agentic AI Master Program for Working Professionals. Build AI agents, RAG, & LLMOps projects with career support."
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
          content="https://www.learnbay.co/gen-ai-and-agentic-ai-master-program"
        />
        <meta
          name="twitter:title"
          content="GenAI & Agentic AI Master Program for Professionals - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Advance your career with Learnbay’s GenAI & Agentic AI Master Program for Working Professionals. Build AI agents, RAG, & LLMOps projects with career support."
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
          href="https://www.learnbay.co/gen-ai-and-agentic-ai-master-program "
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
      "@type": "Course",
      "name": "GenAI & Agentic AI Master Program for Professionals - Learnbay",
      "description": "Advance your career with Learnbay’s GenAI & Agentic AI Master Program for Working Professionals. Build AI agents, RAG, & LLMOps projects with career support.",
      "url": "https://www.learnbay.co/gen-ai-and-agentic-ai-master-program",
      "offers": {
        "@type": "offer",
        "price": "159000",
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
          "courseWorkload": "P9M",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,59,000 + 18% GST",
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
      "name": "Can I do a Gen AI and Agentic AI Course at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, mid-career working professionals with a minimum of 1+ years of IT experience can pursue our Gen AI Program. Apart from this, one must have a basic understanding of Python, ML, and Deep Learning."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Working professionals can enroll in a Generative AI course online and get the flexibility of balancing their work-study obligations. This course offers 100% live online interactive sessions. Experts can choose and plan their batches for weekday or weekend sessions."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hands-on labs or practical tasks in the course modules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Generative AI course focuses on project-based learning. Here, you will work on real-time AI startup projects to tackle GenAI and Agentic AI challenges and gain insights."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Gen AI course for working professionals worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pursuing a Generative AI course for working professionals is a notable career investment. working professionals can design GenAI applications, build AI agents, and integrate LLMs for smooth workflows. Also, earning IBM credentials and working with real-time AI startups can escalate career success metrics with exciting gains."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of the Gen AI Course for working Professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI course for working professionals comes with a duration of 9 months with live projects."
      }
    },
    {
      "@type": "Question",
      "name": "What are the extra advantages delivered through a Gen AI and Agentic AI program for working professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Generative AI course online will receive endless career benefits. Apart from this, you will receive extra benefits like – 3-year flexi subscription, BYOP+Mentorship, AI CoLab experience with 2 industry certifications from AI startups, IBM certification, Career Services Pro (100% placement support)."
      }
    },
    {
      "@type": "Question",
      "name": "What is domain specialization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to an industry. Domain-specific learning is vital for experts who want to retain their careers with enriched benefits (hikes, bonuses, promotions, etc)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the available domain elective options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our GenAI & Agentic AI for working professionals with domain specialization promises a rewarding future. Here, you can choose any two domain electives to transition your role to GenAI & Agentic AI specialists. The available domains are – BFSI, Healthcare, Retail, Cloud & DevOps, Managers & Leaders, Software Developers, Manufacturing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of the Generative AI course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI course costs ₹1,59,000 + 18% GST."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the Generative AI Developer Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can pay course fees in installments under a no-cost EMI option in 6, 9, or 12 months. You can also opt for interest-free loans, credit cards, or UPI with the necessary documents (Aadhaar card, PAN card, and salary slip)."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any scholarship/discount available for the Gen AI course online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The GenAI and Agentic AI Course for working professionals offers a 15% – 20% discount for early birds. We also offer group discounts as per the following terms and conditions. Group of 2: 5% extra discount, Group of 3: 8% additional discount, Group of 4+: Max 10% discount. Apart from discounts, experts can receive up to a 25% scholarship while enrolling in the course. You can check with our sales team at +91 7795687988 for further details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the Advance Gen AI Program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Working professionals joining our Generative AI course can cancel anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy."
      }
    },
    {
      "@type": "Question",
      "name": "How many capstone projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI course for working professionals includes 12+ fresh capstone projects to refine domain knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. working professionals can work on AI startup projects to tackle real-world problems and co-create GenAI solutions. Additionally, throughout the program tenure, learners will work on various domain-specific projects followed by 12+ capstone projects."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my capstone project, or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you enroll in the Gen AI program for working professionals, you can choose projects best suited to your career roles, interests, and goals. Learners go through group project work under the mentorship of industry experts."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Working professionals can accelerate their career growth with industry-recognized certifications from IBM and Microsoft. In addition, they can earn AI startup certifications to validate their GenAI-rich expertise. Altogether, you will receive – IBM Generative AI Certification, Microsoft Azure Certifications, AI CoLab Certifications."
      }
    },
    {
      "@type": "Question",
      "name": "How do I receive my certificate, and is it a digital or printed certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All eligible learners with scores of at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the eligibility for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this Generative AI course must complete the tasks and projects with a minimum score of 70%. Then they are eligible for a job assistance program at Learnbay to unleash exciting career growth options."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "working professionals joining our Generative AI course online will get unlimited interview calls from top-trending 350+ industry partners."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the Career Services Pro feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone with a minimum score of 70% in course tasks and projects is eligible for the Career Services PRO feature. Under this feature, you will get – 1:1 career-focused mock interviews with 350+ industry partners, Online resume build-up sessions, Promising job referrals from top-ranked MNCs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer 100% job assistance services to learners opting for a Gen AI course online. Working professionals can avail themselves of the career services pro benefits once they complete the course. The program supports learners with premium career-enrich perks – from 1:1 interview prep to CV updates."
      }
    },
    {
      "@type": "Question",
      "name": "Until when will the students get the mentorship facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "working professionals will get mentorship until they complete the course. After completing the course tasks and projects, you can reach out to your mentors for doubt-clearing, career assistance, and project guidance."
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
        "text": "Yes. Our reliable mentors are available for a 1:1 session for live training, doubt-clearing, and project queries."
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in the Gen AI program for working professionals get the scope of learning under reliable industry training. These mentors are liable for guiding each learner with course tasks and real-time projects at AI CoLab. So, yes, you will get hassle-free help from your mentor while working on fresh capstone projects and course modules."
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
        "text": "Learners will get a custom-fit Learnbay app with a list of learners and their mentors mentioned. They can directly reach out to their mentors to resolve queries in case of need and discuss doubts with peers."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are qualified to get job referrals once you complete the course. Under the Career Services Pro package, a learner can avail of continuous job referrals to get placed across 350+ industry partners."
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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+%26+Agentic+AI+Master+Program+for+Tech+Professionals+(4)_compressed.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+%26+Agentic+AI+Master+Program+for+Tech+Professionals+(4)_compressed.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="300" guided="40" />
        {/* <ProgramSection
          programSectionData={NewDSAData[0].ProgramSection}
          dataScienceCounselling={true}
          interstedInHide={true}
          upSkillingHide={true}
        /> */}
        {/* <DSAPractical /> */}
        <HighlightsSection aiCloab={true} />
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/GenAI+%26+Agentic+AI+Master+Program+for+Tech+Professionals+2025_compressed+.pdf"
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
          Fee="₹ 1,59,000"
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
  const module = await import("../Data/GenAIandAgenticAIMasterProgram-Data");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
