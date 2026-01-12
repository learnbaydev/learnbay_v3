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
  import("@/components/Home/whyChooseSection/Whylb")
);
const Other = dynamic(() =>
  import("@/components/Home/newUI/OtherVS_updated/Other")
);
const JobReadySection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/JobReadySection/JobReadySection")
);
const DSASyllabus = dynamic(() =>
  import("@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus")
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
const DSAProjectSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/ProjectSection/DSAProjectSection")
);
const ReviewSlider = dynamic(() =>
  import("@/components/Home/newUI/reviewSlider/reviewSlider")
);
import Certificate from "@/components/CoursePage/Certificate/Certificate";
const Content = dynamic(() =>
  import("@/components/CoursePage/Content/content")
);
import BottomBar from "@/components/Global/BottomBar/BottomBar";
import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";
import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from "@/Util/getDSABatchData";
import AlumniCompanies from "@/components/CoursePage/newUICourse/AlumniCompanies";
import LearningToPlacement from "@/components/CoursePage/newUICourse/LearningToPlacement/LearningToPlacement";
import Newheader from "@/components/CoursePage/newHeader/newHeader";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";
import FeeSection from "@/components/course/feeSection/FeeSectionCourse";
import UpdatedCertificate from "@/components/CoursePage/UpdatedCertificate/UpdatedCertificate";
import HighlightsSection from "@/components/CoursePage/newUICourse/Support/HighlightsSection";
import ToolsCovered from "@/components/CoursePage/ToolsCovered/ToolsCovered";
const SyllabusNew = dynamic(() =>
  import("@/components/CoursePage/Syllabus/MasterSyllabus2025")
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data+Science+and+GenAI+Master+Program+(3)_compressed.pdf";
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
          ques: "Can I do a Master's in Data Science and GenAI at Learnbay?",
          ans: "Yes, IT and non-IT working professionals with a minimum of 1 year of experience in any domain can pursue this course. Also, learners with no programming skills can join this Generative AI course.",
          open: true,
          note: "Freshers and students cannot pursue this data science certification. However, interested learners can join our data science and AI program for freshers.",
        },
        {
          id: 1,
          ques: "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
          ans: "Working professionals can pursue a data science and Gen AI course while continuing their full-time job or being in a different time zone. We offer hybrid learning and 100% live online classes to help you have hassle-free learning.",
          open: false,
        },
        {
          id: 2,
          ques: "Are there any hands-on labs or practical tasks in the Gen AI course modules?",
          ans: "Yes. We believe in project-based learning. You will work on live projects to tackle real-time GenAI challenges faced by startups. You can have an AI Co-Lab experience to work on real-time cases and gain proven skills with 1:1 guidance.",
          open: false,
        },
        {
          id: 3,
          ques: "Does Learnbay Provide the Best Data Science Course for Working Professionals?",
          ans: "Yes. Pursuing a data science and AI master certification is worth investing in at Learnbay. It empowers you to unleash potential benefits and tackle industry-driven GenAI challenges (at AI Co-Lab) with emerging GenAI models and Agentic systems.",
          open: false,
        },
        {
          id: 4,
          ques: "What is the duration of a Generative AI Certification for Engineers or non-tech experts?",
          ans: "The data science and GenAI master certification course comes with a duration of 13 months (including weekday and weekend classes).",
          open: false,
        },
        {
          id: 5,
          ques: "What are the extra benefits delivered via this data science and GenAI master certification program?",
          ans: "Learners joining our Master's in Data Science and GenAI program receive several perks:",
          open: false,
          list1:
            "Mastering industry-specific GenAI tools (AutoGPT, LangChain, etc.)",
          list2: "GenAI and Agentic AI Projects at AI Co-Lab",
          list3: "3-year Flexi pass",
          list4: "IBM & Microsoft certifications (Course, projects, and GenAI)",
          list5: "AI Startup Project Certification (2 AI Co-Lab certificates)",
          list6: "Dedicated placement support",
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
          ans: "Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to one industry. This learning is vital for experts who want to retain their careers with enriched benefits like hikes and promotions.",
          open: true,
        },
        {
          id: 1,
          ques: "What are the available elective domain options?",
          ans: "You can choose any two domain electives for upskilling and project work. The available domains are:",
          open: false,
          list1: "BFSI",
          list2: "Healthcare",
          list3: "Retail",
          list4: "Managers",
          list5: "SDE",
          list6: "Manufacturing",
        },
      ],
    },
    {
      id: 2,
      sectionName: "Payments and Scholarships",
      data: [
        {
          id: 0,
          ques: "What is the cost of this IBM and Microsoft Certified Data Science Program?",
          ans: "The Generative AI and data science certification course costs ₹1,59,000 + 18% GST.",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pay in installments for the Generative AI Course?",
          ans: "Yes, we offer easy financing options including a no-cost EMI. You can pay INR 13,250/month. Learners can choose ideal EMI plans of 6, 9, and 12 months.",
          open: false,
        },
        {
          id: 2,
          ques: "What is the refund policy for the online master’s in data science and AI program at Learnbay?",
          ans: "Experts joining our Generative AI course can cancel anytime for a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
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
          ques: "How many real-time projects will there be?",
          ans: "Our best data science course for working professionals includes 12+ executive-level real-time industry projects to expand your knowledge base.",
          open: true,
        },
        {
          id: 1,
          ques: "Are there opportunities to work on real industry projects?",
          ans: "Yes. You will work on real-time AI startup problems and co-create GenAI solutions at AI Co-Lab.",
          open: false,
        },
        {
          id: 2,
          ques: "What is an AI Co-Lab Experience?",
          ans: "Professionals work on real-world startup problems under a mentor’s guidance. This allows you to tackle GenAI and Agentic AI-driven challenges and co-create with emerging AI startups.",
          open: false,
        },
        {
          id: 3,
          ques: "Can I choose my capstone project, or are projects assigned?",
          ans: "You can choose projects best suited to your career goals, domain, and expertise. You will work closely with AI startups and industry mentors.",
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
          ans: "Yes. Working professionals will receive globally accredited certifications from IBM, Microsoft, and real AI startups. You will earn:",
          open: true,
          list1: "One IBM course completion, Generative AI Certificate",
          list2: "Three Microsoft Azure AI Fundamentals",
          list3: "Two AI Co-Lab Project Certificates",
        },
        {
          id: 1,
          ques: "How will an AI Startup project certification help my career grow?",
          ans: "Handling real-time challenges with emerging AI startups showcases your practical expertise to potential employers.",
          open: false,
        },
        {
          id: 2,
          ques: "How do I receive my certificate, and is it a digital or printed certificate?",
          ans: "Eligible learners with at least 70% scores in tasks and projects will receive digital certificates within 7 days of application.",
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
          ques: "What’s the eligibility for a job assistance program at Learnbay?",
          ans: "Learners must score a minimum of 70% in course tasks and projects to be eligible for the job assistance program.",
          open: true,
        },
        {
          id: 1,
          ques: "How many interview calls will I get at Learnbay?",
          ans: "Learners will get unlimited interview calls from top-trending 350+ industry partners.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I opt for the placement assistance at Learnbay?",
          ans: "Yes, eligible learners receive resume optimization, 1:1 mock interview sessions, and job referrals from top-tier MNCs.",
          open: false,
        },
        {
          id: 3,
          ques: "Do you offer job assistance services after course completion?",
          ans: "Yes. We offer mock interviews, resume optimization, and career counseling. You also get a 3-year flexi subscription for unlimited resource access until you land a job.",
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
          ques: "When will the learners get the mentorship facility?",
          ans: "Mentorship is available until course completion. Afterward, you can reach out for doubt-clearing, career assistance, and AI startup project support.",
          open: true,
        },
        {
          id: 1,
          ques: "Can a Learnbay student choose to study with their desired mentor?",
          ans: "Yes. If a learner finds a mentor unfit or faces discomfort, they can request a change.",
          open: false,
        },
        {
          id: 2,
          ques: "Are mentors available for one-on-one or group sessions?",
          ans: "Yes. Learners get 1:1 sessions for live learning, AI Co-Lab projects, doubt-clearing, and mock interviews.",
          open: false,
        },
      ],
    },
    {
      id: 7,
      sectionName: "Support",
      data: [
        {
          id: 0,
          ques: "How can I contact technical support if I face any problems?",
          ans: "You get 24x7 technical support for issues related to login, sessions, projects, or course materials.",
          open: true,
        },
        {
          id: 1,
          ques: "Is there a discussion forum or community for learners?",
          ans: "Yes, learners get a personalized app to reach mentors directly and discuss doubts with peers.",
          open: false,
        },
        {
          id: 2,
          ques: "How long will I get job referrals?",
          ans: "A learner can avail themselves of continuous job referrals across 350+ industry partners after course completion.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Data Science & GenAI Master Certification Program - Learnbay
        </title>
        <meta
          name="description"
          content="Enhance your career with Learnbay's Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science master certification, data science and genAI master certification program, data science and genAI master program, data science and generative AI master certification course, generative AI and data science master certification, data science and generative AI, generative ai and data science , data science and generative ai course"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Science & GenAI Master Certification Program | Learnbay"
        />
        <meta
          property="og:description"
          content="Enhance your career with Learnbay's Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <meta
          name="twitter:title"
          content="Data Science & GenAI Master Certification Program | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Enhance your career with Learnbay’s Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!"
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
          href="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Data Science and GenAI Master Certification Program",
  "description": "The Data Science and Generative AI Master Certification Program equips you with in-demand skills in data science, machine learning, and GenAI to solve real-world business problems through hands-on projects and expert-led training.",
"url": "https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program",
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
  "coursePrerequisites": "There are no prerequisites for the Data Science and GenAI Master Certification Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P13M",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,59,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]
          }}
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
      "name": "Can I do a Master's in Data Science and GenAI at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, IT and non-IT working professionals with a minimum of 1 year of experience in any domain can pursue this course. Also, learners with no programming skills can join this Generative AI course. Note: Freshers and students cannot pursue this data science certification. However, interested learners can join our data science and AI program for freshers. "
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Working professionals can pursue a data science and Gen AI course while continuing their full-time job or being in a different time zone. We offer hybrid learning and 100% live online classes to help you have hassle-free learning. Learners can choose their ideal time for learning without hampering their usual job tasks. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hands-on labs or practical tasks in the Gen AI course modules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We believe in project-based learning that will empower our learners to excel in their careers. You will work on live projects to tackle real-time GenAI challenges faced by startups. You can have an AI Co-Lab experience to work on real-time cases and gain proven skills with 1:1 guidance. Our data science course with capstone projects empowers you to face industry risks and tackle them with proven solutions. "
      }
    },
    {
      "@type": "Question",
      "name": "Does Learnbay Provide the Best Data Science Course for Working Professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer the best online data science training to keep you ahead of the career race. Pursuing a data science and AI master certification is worth investing in at Learnbay. It empowers you to unleash potential benefits and tackle industry-driven GenAI challenges (at AI Co-Lab). Learners with proven skills can work with emerging GenAI models and Agentic systems and certify them with alluring credentials. Lastly, you can showcase your expertise to grab rewarding GenAI roles with top-tier firms. "
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of a Generative AI Certification for Engineers or non-tech experts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The data science and GenAI master certification course comes with a duration of 13 months (including weekday and weekend classes). "
      }
    },
    {
      "@type": "Question",
      "name": "What are the extra benefits delivered via this data science and GenAI master certification program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Master's in Data Science and GenAI program can avail themselves of promising career benefits. We offer live training sessions with a project-based upskilling advantage. Apart from these perks, you will receive other benefits like –Mastering industry-specific GenAI and Agentic AI tools (AutoGPT, Lang Chain, BabyAGI, etc.) to co-create solutions for AI startups, GenAI and Agentic AI Projects at AI Co-Lab, 3-year Flexi pass, IBM & Microsoft certifications (Course, projects, and GenAI), AI Startup Project Certification (2 AI Co-Lab certificates), Dedicated placement support"
      }
    },
    {
      "@type": "Question",
      "name": "What is domain specialization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to one industry. Domain-specific learning is vital for experts who want to retain their careers with enriched benefits (hikes, bonuses, promotions, etc)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the available elective domain options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our data science program with domain specialization promises a rewarding future for tech and non-tech experts. Here, you can choose any two domain electives for upskilling and project work. The available domains are – BFSI, Healthcare, Retail, Managers, SDE, Manufacturing"
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of this IBM and Microsoft Certified Data Science Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI and data science certification course costs ₹1,59,000 + 18% GST. "
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the Generative AI Course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe in a hassle-free learning environment. Hence, our data science program with domain specialization offers easy financing options. You can opt for a no-cost EMI option to have an affordable learning experience. You can pay INR 13,250/month and kick-start your learning journey. Also, learners can choose ideal EMI plans of 6,9, and 12 months. "
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the online master’s in data science and AI program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experts joining our Generative AI course can cancel anytime for a valid reason. For further details, refer to [Learnbay’s Refund/Cancellation Policy](https://www.learnbay.co/refund-cancellation-policy). "
      }
    },
    {
      "@type": "Question",
      "name": "How many real-time projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our best data science course for working professionals includes 12+ executive-level real-time industry projects to expand your knowledge base. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professionals hoping for a career transition to data science and AI will find Learnbay a promising destination. Here, you will work on real-time AI startup problems and co-create GenAI solutions at AI Co-Lab. "
      }
    },
    {
      "@type": "Question",
      "name": "What is an AI Co-Lab Experience? ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professionals enrolling in this master’s program will work on real-world startup problems. Working with AI startups will enable you to tackle GenAI and Agentic AI-driven challenges effectively. Learners will work on these projects at AI Co-Lab under a mentor’s guidance to devise optimal solutions and co-create with emerging AI startups. "
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my capstone project, or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our data science course with capstone projects will work closely with AI startups to get real-time learning. You can choose projects best suited to your career goals, domain, and expertise. Additionally, you can work on various GenAI-driven projects under the guidance of industry mentors to drive compelling growth. "
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Working professionals pursuing this course will receive globally accredited certifications from IBM, Microsoft, and real AI startups. These credentials are equivalent to an accredited master’s degree in data science courses. These prestigious credentials will help you unlock your potential and grab promising offers. Learners will earn – One IBM course completion, Generative AI Certificate, Three Microsoft Azure AI Fundamentals, Two AI Co-Lab Project Certificates"
      }
    },
    {
      "@type": "Question",
      "name": "How will an AI Startup project certification help my career grow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professionals enrolling in this certification course will handle real-time challenges that emerging AI startups face. Successful completion of these projects will help you earn the AI startup project certification that will showcase your real-time expertise. "
      }
    },
    {
      "@type": "Question",
      "name": "How do I receive my certificate, and is it a digital or printed certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All eligible learners with at least 70% scores in course tasks and projects can receive their certificates with industry recognition. You will receive digital certificates with your name, course details, and authorization within 7 days of your application. "
      }
    },
    {
      "@type": "Question",
      "name": "What’s the eligibility for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this Gen AI and data science program with domain specialization must score a minimum of 70%. Then they are eligible for a job assistance program at Learnbay to avail themselves of rewarding offers with top MNCs. "
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Generative AI course online will get unlimited interview calls from top-trending 350+ industry partners.  "
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the placement assistance at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners with a minimum 70% score in course tasks and projects are eligible for the placement services at Learnbay. Here, you will get – Online resume optimization, Interview preparation via 1:1 mock sessions, Promising job referrals from top-tier MNCs"
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners can avail themselves of industry-aligned career support services once they complete their coursework and projects. Our placement services help you with mock interviews, resume optimization, interview prep, and career counseling sessions. Additionally, you can avail yourself of a 3-year flexi subscription to get unlimited access to study resources and support until you land a job. "
      }
    },
    {
      "@type": "Question",
      "name": "When will the learners get the mentorship facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mentorship facility is available until you complete the course. Once you complete the course, you can reach out to your mentors for doubt-clearing, career assistance, and AI startup project support."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Learnbay student choose to study with their desired mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners opting for our data science and artificial intelligence certification course will get quality mentorship from industry experts. We have a team of experts who train and mentor you according to your career goals. Yet, if any learner faced discomfort or found any mentor unfit, he/she can request a change. "
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors available for one-on-one or group sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners opting for our data science certification program or any other course will get 1:1 sessions with their mentors. Apart from live learning, you will undergo AI Co-Lab project sessions, 1:1 doubt-clearing, and 1:1 mock interviews. "
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in the data science and AI master certification program will get endless support from reliable mentors. Our esteemed mentors will help you in completing your coursework and project tasks. Also, you will work on projects under the guidance of mentors at AI Co-Lab. "
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact technical support if I face any problems with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you register for the course, you will get 24×7 technical support that resolves any queries. You can also reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course. "
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for learners to communicate and seek support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will get a personalized Learnbay app with a list of learners and their mentors. They can directly reach out to their mentors to solve queries in case of need and discuss doubts with peers. "
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are qualified to avail yourself of job referrals once you complete the course. Under the career assistance benefit, a learner can avail themselves of continuous job referrals to get placed across 350+ industry partners."
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="370" guided="60" leftPart="3YEAR" />

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
        <DSAProjectSection
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
        />

        <Other />
        {/*  <DSASyllabus
          sections={NewDSAData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data_Science_and_Generative_AI_Master_Certification%2BProgram.pdf"
          brochurePdf={pdfUrl}
          downloadBrochure={true}
        />*/}
        <SyllabusNew
          masterSyllabusMobile={NewDSAData[0].masterSyllabusMobile}
          onlyGENAIPage={true}
        />

        <ToolsCovered />

        <UpdatedCertificate data={NewDSAData[0].Certificate} />
        {/* <Certificate
          noTabs={true}
          data={NewDSAData[0].certificateNew}
          DSAFresherCertHeading={true}
        /> */}

        {/* <NewCertificateSection certificateNew={NewDSAData[0].certificateNew} /> */}
        <DSAFeeSection
          Fee="₹ 1,59,000 "
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
  const module = await import("../../Data/NewDataScienceOneData");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
