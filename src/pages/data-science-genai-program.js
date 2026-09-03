import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { parseJSONData } from '@/Util/JsonConvertor';
import DSAHeader from '@/components/CoursePage/NewDSA/Header/NewDSAHeader';
import Navbar from '@/components/Global/Navbar/Navbar';
import BookDemo from '@/components/CoursePage/NewDSA/BookDemo/BookDemo';
const ProgramSection = dynamic(
  () => import('@/components/CoursePage/NewDSA/ProgramSection/ProgramSection')
);
const DSAPractical = dynamic(
  () => import('@/components/CoursePage/NewDSA/Practical/DSAPractical')
);
const AnimationNew = dynamic(
  () => import('@/components/Home/whyChooseSection/Whylb')
);
const Other = dynamic(
  () => import('@/components/Home/newUI/OtherVS_updated/Other')
);
const JobReadySection = dynamic(
  () => import('@/components/CoursePage/NewDSA/JobReadySection/JobReadySection')
);
const DSASyllabus = dynamic(
  () => import('@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus')
);
const NewCertificateSection = dynamic(
  () => import('@/components/CoursePage/newCertificate/NewCertificate')
);
const DSAFeeSection = dynamic(
  () => import('@/components/CoursePage/dsaFee/DSAFeeSection')
);
const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
const NewSevenSection = dynamic(
  () => import('@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection')
);
const MentorsSection = dynamic(
  () => import('@/components/course/MentorsSection/MentorsSection')
);
const DSAProjectSection = dynamic(
  () =>
    import('@/components/CoursePage/NewDSA/ProjectSection/DSAProjectSection')
);
const ReviewSlider = dynamic(
  () => import('@/components/Home/newUI/reviewSlider/reviewSlider')
);
import Certificate from '@/components/CoursePage/Certificate/Certificate';
const Content = dynamic(
  () => import('@/components/CoursePage/Content/content')
);
import BottomBar from '@/components/Global/BottomBar/BottomBar';
import FAQNew from '@/components/CoursePage/FAQNew/FAQNew';
import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from '@/Util/getDSABatchData';
import AlumniCompanies from '@/components/CoursePage/newUICourse/AlumniCompanies';
import LearningToPlacement from '@/components/CoursePage/newUICourse/LearningToPlacement/LearningToPlacement';
import Newheader from '@/components/CoursePage/newHeader/newHeader';
import { MasterAI } from '@/Data/Schema/DataScienceAndAIMasterSchema';
import FeeSection from '@/components/course/feeSection/FeeSectionCourse';
import UpdatedCertificate from '@/components/CoursePage/UpdatedCertificate/UpdatedCertificate';
import HighlightsSection from '@/components/CoursePage/newUICourse/Support/HighlightsSection';
import ToolsCovered from '@/components/CoursePage/ToolsCovered/ToolsCovered';
import FAQ from '@/components/AppliedAIPractitionerProgram/FAQs/FAQ';
const SyllabusNew = dynamic(
  () => import('@/components/CoursePage/Syllabus/MasterSyllabus2025')
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Program.pdf';
  let soonDate = getDSABookingSoonDate();
  let laterDate = getDSABookingLaterDate();
  // console.log(getDSABookingSoonDate(new Date('2023-03-24')));
  // console.log(getDSABookingLaterDate(new Date('2023-03-24')));
  const faqNewData = [
    {
      id: 0,
      sectionName: 'Course-Related',
      data: [
        {
          id: 0,
          ques: 'Can I do a course in Data Science and GenAI at Learnbay?',
          ans: 'Anyone willing to pursue the GenAI & Agentic AI program at Learnbay must fulfill the following criteria –',
          open: true,
          list1: 'Freshers eager to explore AI developments',
          list2: 'Working professionals willing to learn & grow',
          list3:
            'Non-technical professionals using AI tools for diverse functions',
          list4: 'Developers moving to AI-driven systems',
          list5:
            'Professionals from diverse roles (product/operations/business)',
        },
        {
          id: 1,
          ques: 'Can I pursue this course while having a full-time job or from a different time zone?',
          ans: 'Working professionals can pursue a data science and Gen AI course while continuing their full-time job or being in a different time zone. We offer 100% live online classes with flexible schedules to help you have hassle-free learning. Learners can choose their ideal time for learning without hampering their usual job tasks.',
          open: false,
        },
        {
          id: 2,
          ques: 'Are there any hands-on labs or practical tasks in the data science and Gen AI course modules?',
          ans: 'Yes. We believe in project-based learning. You will work on live projects to tackle real-time GenAI challenges faced by startups. You can have an AI Co-Lab experience to work on real-time cases and gain proven skills with 1:1 guidance. Our data science course with capstone projects empowers you to face industry risks and tackle them with proven solutions.',
          open: false,
        },
        {
          id: 3,
          ques: 'Does Learnbay Provide the Best Data Science Course for Working Professionals?',
          ans: 'Yes. We offer the best online data science training to keep you ahead of the career race. Pursuing a data science and GenAI course is worth investing in at Learnbay. It empowers you to unleash potential benefits and tackle industry-driven GenAI challenges (at AI Co-Lab). Learners with proven skills can work with emerging GenAI models and Agentic systems and certify them with alluring credentials. Lastly, you can showcase your expertise to grab rewarding GenAI roles with top-tier firms.',
          open: false,
        },
        {
          id: 4,
          ques: 'What is the duration of this course?',
          ans: 'The data science and GenAI course comes with a duration of 9 months (including weekday and weekend classes).',
          open: false,
        },
        {
          id: 5,
          ques: 'What are the extra benefits delivered via this data science and GenAI program?',
          ans: 'Learners joining our Data Science and GenAI program can avail themselves of promising career benefits. Apart from these perks, you will receive other benefits like –',
          open: false,
          list1: '3-year flexi subscription',
          list2: 'BYOP+Mentorship',
          list3: 'AI CoLab experience',
          list4: 'IBM Generative AI certification',
          list5: 'Career Services Pro (100% placement support)',
        },
      ],
    },
    {
      id: 1,
      sectionName: 'Payments and Scholarships',
      data: [
        {
          id: 0,
          ques: 'What is the cost of this Program?',
          ans: 'The Generative AI and data science course costs ₹1,20,000 + 18% GST.',
          open: true,
        },
        {
          id: 1,
          ques: 'Can I pay in installments for the course?',
          ans: 'Yes. You can opt for a no-cost EMI option to have an affordable learning experience and pay off the fees within 6, 9, or 12 months.',
          open: false,
        },
        {
          id: 2,
          ques: 'What is the refund policy for the online master’s in data science and AI program at Learnbay?',
          ans: 'Experts joining our Data Science and Generative AI course can cancel anytime for a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy.',
          open: false,
        },
      ],
    },
    {
      id: 2,
      sectionName: 'Capstone and Real-time Projects',
      data: [
        {
          id: 0,
          ques: 'How many real-time projects will there be?',
          ans: 'Our best data science course for working professionals includes 20+ real-time industry projects to expand your knowledge base.',
          open: true,
        },
        {
          id: 1,
          ques: 'Are there opportunities to work on real industry projects?',
          ans: 'Yes. Professionals hoping for a career transition to data science and GenAI will find Learnbay a promising destination. Here, you will work on real-time AI startup problems and co-create GenAI solutions at AI Co-Lab.',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I choose my capstone project, or are projects assigned?',
          ans: 'Learners joining our data science course with capstone projects will work closely with AI startups to get real-time learning. You can choose projects best suited to your career goals, domain, and expertise. Additionally, you can work on various GenAI-driven projects under the guidance of industry mentors to drive compelling growth.',
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: 'Certifications',
      data: [
        {
          id: 0,
          ques: 'Is there any accredited certification after course completion?',
          ans: 'Yes. Learners can accelerate their career growth with industry-recognized Generative AI certifications from IBM and validate their industrial expertise.',
          open: true,
        },
        {
          id: 1,
          ques: 'How do I receive my certificate, and is it a digital or printed certificate?',
          ans: 'All eligible learners with at least 70% scores in course tasks and projects can receive their certificates within 7 days of their application.',
          open: false,
        },
      ],
    },
    {
      id: 4,
      sectionName: 'Job Assistance',
      data: [
        {
          id: 0,
          ques: 'What’s the eligibility for a job assistance program at Learnbay?',
          ans: 'Learners enrolling in this Gen AI and data science program must score a minimum of 70%. Then they are eligible for a job assistance program (Career Services Pro) at Learnbay to avail themselves of rewarding offers with top MNCs.',
          open: true,
        },
        {
          id: 1,
          ques: 'How many interview calls will I get at Learnbay?',
          ans: 'Learners joining our Generative AI course online will get unlimited interview calls from top-trending 350+ industry partners.',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I opt for the placement assistance at Learnbay?',
          ans: 'Learners with a minimum score of 70% in course tasks and projects are eligible for the Career Services Pro benefit at Learnbay. Here, you will get –',
          open: false,
          list1: 'Online resume help',
          list2: 'Interview preparation via 1:1 mock sessions',
          list3: 'Promising job referrals from top-tier MNCs',
        },
        {
          id: 3,
          ques: 'Do you offer job assistance services after course completion?',
          ans: 'Yes. Learners can avail themselves of industry-aligned career support services to get mock interviews, resume help, interview prep, and career counseling sessions. Additionally, you can avail yourself of a 3-year flexi subscription to get unlimited access to study resources and support until you land a job.',
          open: false,
        },
      ],
    },
    {
      id: 5,
      sectionName: 'Mentorships',
      data: [
        {
          id: 0,
          ques: 'Until when will the learners get the mentorship facility?',
          ans: 'Our mentorship facility is available until you complete the course. Once you complete the course, you can reach out to your mentors for doubt-clearing, career assistance, and AI project support.',
          open: true,
        },
        {
          id: 1,
          ques: 'Can a Learnbay student choose to study with their desired mentor?',
          ans: 'Learners opting for our data science and GenAI course will get quality mentorship from industry experts. We have a team of experts who train and mentor you according to your career goals. Yet, if any learner faced discomfort or found any mentor unfit, he/she can request a change.',
          open: false,
        },
        {
          id: 2,
          ques: 'Are mentors available for one-on-one or group sessions?',
          ans: 'Yes. Learners opting for our data science program or any other course will get 1:1 sessions with their mentors. Apart from live training, you will undergo AI Co-Lab project sessions, 1:1 doubt-clearing, and 1:1 mock interviews.',
          open: false,
        },
        {
          id: 3,
          ques: 'Are there mentors available to help with coursework and projects?',
          ans: 'Learners enrolling in the data science and GenAI program will get endless support from reliable mentors. Our esteemed mentors will help you in completing your coursework and project tasks. Also, you will work on projects under the guidance of mentors at AI Co-Lab.',
          open: false,
        },
      ],
    },
    {
      id: 6,
      sectionName: 'Support',
      data: [
        {
          id: 0,
          ques: 'How can I contact technical support if I face any problems with the course platform?',
          ans: 'Once you register for the course, you will get 24×7 technical support that resolves any queries. You can also reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course platform.',
          open: true,
        },
        {
          id: 1,
          ques: 'Is there a discussion forum or community for learners to communicate and seek support?',
          ans: 'Learners will get a personalized Learnbay app with a list of learners and their mentors. They can directly reach out to their mentors to solve queries and discuss doubts with peers.',
          open: false,
        },
        {
          id: 2,
          ques: 'How long will I get job referrals?',
          ans: 'You will have unlimited access to job referrals that suit your career goals, interests, and domain expertise.',
          open: false,
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>IBM Certified Data Science & GenAI Program - Learnbay</title>
        <meta
          name="description"
          content="Upskill with Learnbay's IBM-certified Data Science & GenAI Program. Learn Python, ML, NLP, RAG, and Agents through industry projects with job assistance."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ibm data science certification,
data science and generative ai program,
data science and gen ai certification,
data science and gen ai training  program
"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-genai-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IBM Certified Data Science & GenAI Program  - Learnbay"
        />
        <meta
          property="og:description"
          content="Upskill with Learnbay's IBM-certified Data Science & GenAI Program. Learn Python, ML, NLP, RAG, and Agents through industry projects with job assistance."
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
          content="https://www.learnbay.co/data-science-genai-program"
        />
        <meta
          name="twitter:title"
          content="IBM Certified Data Science & GenAI Program  - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upskill with Learnbay's IBM-certified Data Science & GenAI Program. Learn Python, ML, NLP, RAG, and Agents through industry projects with job assistance."
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
          href="https://www.learnbay.co/data-science-genai-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
       "@context": "http://schema.org",
  "@type": "Course",
  "name": "IBM Certified Data Science & GenAI Program  - Learnbay",
  "description": "Upskill with Learnbay's IBM-certified Data Science & GenAI Program. Learn Python, ML, NLP, RAG, and Agents through industry projects with job assistance.",
  "url": "https://www.learnbay.co/data-science-genai-program",
  "offers": {
    "@type": "offer",
    "price": "120000",
    "pricecurrency": "INR",
    "category": "Educational"
  },
   "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/data-science-genai-program"
      },
  "coursePrerequisites": "You should know about Python, Machine Learning, & basic Deep Learning before joining the program.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P9M",
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
"@context": "https://schema.org/",
"@type": "Product",
"name": "Data Science and GenAI Program",
"image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
"brand": {
"@type": "Brand",
"name": "Learnbay"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.8",
"bestRating": "5",
"worstRating": "1",
"ratingCount": "1887"
}
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
      "name": "Can I do a course in Data Science and GenAI at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone willing to pursue the GenAI & Agentic AI program at Learnbay must fulfill the following criteria – Freshers eager to explore AI developments, Working professionals willing to learn & grow, Non-technical professionals using AI tools for diverse functions, Developers moving to AI-driven systems, Professionals from diverse roles (product/operations/business)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue this course while having a full-time job or from a different time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Working professionals can pursue a data science and Gen AI course while continuing their full-time job or being in a different time zone. We offer 100% live online classes with flexible schedules to help you have hassle-free learning. Learners can choose their ideal time for learning without hampering their usual job tasks."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hands-on labs or practical tasks in the data science and Gen AI course modules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We believe in project-based learning that will empower our learners to excel in their careers. You will work on live projects to tackle real-time GenAI challenges faced by startups. You can have an AI Co-Lab experience to work on real-time cases and gain proven skills with 1:1 guidance. Our data science course with capstone projects empowers you to face industry risks and tackle them with proven solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Does Learnbay Provide the Best Data Science Course for Working Professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer the best online data science training to keep you ahead of the career race. Pursuing a data science and GenAI course is worth investing in at Learnbay. It empowers you to unleash potential benefits and tackle industry-driven GenAI challenges (at AI Co-Lab). Learners with proven skills can work with emerging GenAI models and Agentic systems and certify them with alluring credentials. Lastly, you can showcase your expertise to grab rewarding GenAI roles with top-tier firms."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of this course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The data science and GenAI course comes with a duration of 9 months (including weekday and weekend classes)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the extra benefits delivered via this data science and GenAI program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Data Science and GenAI program can avail themselves of promising career benefits. Apart from these perks, you will receive other benefits like – 3-year flexi subscription, BYOP+Mentorship, AI CoLab experience, IBM Generative AI certification, Career Services Pro (100% placement support)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of this Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI and data science course costs ₹1,20,000 + 18% GST."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can opt for a no-cost EMI option to have an affordable learning experience and pay off the fees within 6,9, or 12 months."
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the online master's in data science and AI program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experts joining our Data Science and Generative AI course can cancel anytime for a valid reason. For further details, refer to Learnbay's Refund/Cancellation Policy."
      }
    },
    {
      "@type": "Question",
      "name": "How many real-time projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our best data science course for working professionals includes 20+ real-time industry projects to expand your knowledge base."
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professionals hoping for a career transition to data science and GenAI will find Learnbay a promising destination. Here, you will work on real-time AI startup problems and co-create GenAI solutions at AI Co-Lab."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my capstone project, or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our data science course with capstone projects will work closely with AI startups to get real-time learning. You can choose projects best suited to your career goals, domain, and expertise. Additionally, you can work on various GenAI-driven projects under the guidance of industry mentors to drive compelling growth."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners can accelerate their career growth with industry-recognized Generative AI certifications from IBM and validate their industrial expertise."
      }
    },
    {
      "@type": "Question",
      "name": "How do I receive my certificate, and is it a digital or printed certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All eligible learners with at least 70% scores in course tasks and projects can receive their certificates within 7 days of their application."
      }
    },
    {
      "@type": "Question",
      "name": "What's the eligibility for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this Gen AI and data science program must score a minimum of 70%. Then they are eligible for a job assistance program (Career Services Pro) at Learnbay to avail themselves of rewarding offers with top MNCs."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Generative AI course online will get unlimited interview calls from top-trending 350+ industry partners."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the placement assistance at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners with a minimum score of 70% in course tasks and projects are eligible for the Career Services Pro benefit at Learnbay. Here, you will get – Online resume help, Interview preparation via 1:1 mock sessions, Promising job referrals from top-tier MNCs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners can avail themselves of industry-aligned career support services to get mock interviews, resume help, interview prep, and career counseling sessions. Additionally, you can avail yourself of a 3-year flexi subscription to get unlimited access to study resources and support until you land a job."
      }
    },
    {
      "@type": "Question",
      "name": "Until when will the learners get the mentorship facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mentorship facility is available until you complete the course. Once you complete the course, you can reach out to your mentors for doubt-clearing, career assistance, and AI project support."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Learnbay student choose to study with their desired mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners opting for our data science and GenAI course will get quality mentorship from industry experts. We have a team of experts who train and mentor you according to your career goals. Yet, if any learner faced discomfort or found any mentor unfit, he/she can request a change."
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors available for one-on-one or group sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners opting for our data science program or any other course will get 1:1 sessions with their mentors. Apart from live training, you will undergo AI Co-Lab project sessions, 1:1 doubt-clearing, and 1:1 mock interviews."
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in the data science and GenAI program will get endless support from reliable mentors. Our esteemed mentors will help you in completing your coursework and project tasks. Also, you will work on projects under the guidance of mentors at AI Co-Lab."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact technical support if I face any problems with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you register for the course, you will get 24×7 technical support that resolves any queries. You can also reach the desired service providers who can help you with any technical issues (login, sessions, projects, chat, or course materials) with the course."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for learners to communicate and seek support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will get a personalized Learnbay app with a list of learners and their mentors. They can directly reach out to their mentors to solve queries and discuss doubts with peers."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will have unlimited access to job referrals that suit your career goals, interests, and domain expertise."
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
          courseId={'ds-genai-program'}
        />
        <AlumniCompanies
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="250" guided="30" leftPart="IBM_AI" />

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
        <DSAProjectSection
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
          brochurePdf={pdfUrl}
        />

        <Other />
        {/*  <DSASyllabus
          sections={NewDSAData[0].sections}
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
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
            '3-step admission process',
            'eligibility',
            'counselling',
            'enrollment',
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
  const module = await import('../Data/data-science-and-gen-ai-program-data');
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
