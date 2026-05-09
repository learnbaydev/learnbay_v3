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
  () => import('@/components/Home/whyChooseSection/whylblimited')
);
const Other = dynamic(
  () => import('@/components/Home/newUI/OtherVS_updated/Other')
);
const JobReadySection = dynamic(
  () => import('@/components/CoursePage/NewDSA/JobReadySection/JobReadySection')
);
const SyllabusNew = dynamic(
  () => import('@/components/CoursePage/Syllabus/MasterSyllabus2025')
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
import GenAIProject from '@/components/CoursePage/genAiProject/GenAIProject';
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
import LearningToPlacement from '@/components/CoursePage/newUICourse/LearningToPlacementChild/LearningToPlacement';
import Newheader from '@/components/CoursePage/newHeader/newHeader';
import { MasterAI } from '@/Data/Schema/DataScienceAndAIMasterSchema';
import FeeSection from '@/components/course/feeSection/FeeSectionCourse';
import UpdatedCertificate from '@/components/CoursePage/UpdatedCertificate/UpdatedCertificate';
import HighlightsSection from '@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection';
import FAQ from '@/components/AppliedAIPractitionerProgram/FAQs/FAQ';
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Managers_and_Leaders_GenAI_and_Agentic_AI_Program.pdf';

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
          ques: 'Can I do a Gen AI Course for Managers & Leaders at Learnbay?',
          ans: 'Yes. Any professional with years of work experience in an industry can pursue our Generative AI course for managers and leaders.',
          open: true,
        },
        {
          id: 1,
          ques: 'Can I pursue an Agentic AI and Gen AI for managers course while working full-time or from a distinct time zone?',
          ans: 'Mid- to senior-level experts in leadership roles can opt for this Gen AI course with the flexibility to maintain work-study balance. Hence, managers can opt for upskilling with a full-time job or from a distinct time zone, considering our flexible weekday or weekend batches. ',
          open: false,
        },
        {
          id: 2,
          ques: 'Are there any hands-on labs or practical exercises in the course curriculum?',
          ans: 'Yes. The Generative AI course for managers and leaders offers a hands-on learning scope where you can work on practical projects and exercises. Our modules are revised considering the latest AI-driven trends to enrich your skills. Managers can learn to have AI-driven business shifts, build teams with AI experts, and devise AI initiatives for resolving issues. ',
          open: false,
        },
        {
          id: 3,
          ques: 'Is a Gen AI course for managers worth it?',
          ans: 'Pursuing a Generative AI for managers course is worth investing in due to its expansive career benefits. Experts can acquire proven skills to tackle business issues amidst GenAI growth. You will work on AI-specific projects to optimize your judgment and scale up business decisions for promising gains. ',
          open: false,
        },
        {
          id: 4,
          ques: 'What is the duration of the GenAI and Agentic AI Program for Leaders and Managers?',
          ans: 'The course duration is 5 months (flexible weekday and weekend batches) and involves live projects.',
          open: false,
        },
        {
          id: 5,
          ques: 'What additional benefits are provided in this Gen AI program for managers?',
          ans: 'Learners joining our GenAI and Agentic AI program for managers will receive promising career perks.  Apart from this, you will receive extra benefits like – ',
          open: false,
          list1:
            'Acquiring cutting-edge GenAI-rich skills (OpenAI APIs, Lang Chain, LLMs, RAG, etc.)',
          list2: 'BYOP+mentorship to resolve your own business problems',
          list3: 'AI CoLab experience with AI-driven projects',
          list4: '3-year flexi subscription',
          list5: 'Career Services PRO (100% assured interviews)',
          list6: 'IBM Generative AI Certification',
        },
      ],
    },

    {
      id: 1,
      sectionName: 'Payments and Scholarships',
      data: [
        {
          id: 0,
          ques: 'What is the cost of the GenAI Program for Managers and Leaders?',
          ans: 'The program fee is ₹1,20,000 plus 18% GST.',
          open: true,
        },
        {
          id: 1,
          ques: 'Can I pay in installments for the Generative AI Course for Managers & Leaders?',
          ans: 'Yes. Learners opting for this course can pay in installments under a no-cost EMI option within 6, 9, or 12 months. Learners can also opt for interest-free loans, credit cards, or UPI for hassle-free learning. ',
          open: false,
        },
        {
          id: 2,
          ques: 'Is there any scholarship/discount available for leaders and managers for the Gen AI course?',
          ans: 'The GenAI and Agentic AI Program for Managers and Leaders offers an early bird discount of 15% – 20%, followed by attractive group discounts.',
          open: false,
          list1: 'Group of 2: 5% extra discount',
          list2: 'Group of 3: 8% additional discount',
          list3: 'Group of 4+: Up to 10% discount',
          note: 'Apart from these deals, learners can avail themselves of up to 25% scholarship when registering for the course. You can check with our sales team at +91 7795687988 for further details. ',
        },
        {
          id: 3,
          ques: 'What is the refund policy for the GenAI and Agentic AI Program for Managers and Leaders at Learnbay?',
          ans: 'Experts can stop their learning anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy. ',
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
          ans: 'The Generative AI for Managers course includes 28+ executive-level real-time industrial projects to demonstrate success with exciting offers. ',
          open: true,
        },
        {
          id: 1,
          ques: 'Are there possibilities to work on real-time industry projects?',
          ans: 'Yes. Learners opting for this course will work on real-time projects to boost industry knowledge. Our eminent mentors are here to guide you throughout the project-handling stage at our AI CoLab. These projects are designed to equip you with real-time industry insights, refining your expertise. ',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I choose my project for the capstone, or are projects assigned?',
          ans: 'Yes. Learners joining the Gen AI course for managers can choose their best-suited projects with their mentor’s advice. You can assess your skills, career goals, and interests while selecting the projects. ',
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
          ans: 'Yes. Learners joining the Gen AI course for managers will receive an IBM GenAI certification to validate their AI expertise and land promising roles.',
          open: true,
        },
        {
          id: 2,
          ques: 'How do I receive my certificate, and is it a digital or printed certificate?',
          ans: 'All eligible learners with scores of 70% can earn globally acknowledged IBM certificates in digital form that will reach you within 7 days. ',
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
          ques: 'Who is eligible for a job assistance program at Learnbay?',
          ans: 'Learners enrolling in this Gen AI course must complete the course tasks, live projects, and case studies with a minimum score of 70%. It makes you eligible for a job assistance program at Learnbay (Career Services PRO) to pursue the exciting leadership opportunities.  ',
          open: true,
        },
        {
          id: 1,
          ques: 'How many interview calls will I get at Learnbay?',
          ans: 'Learners joining our Generative AI for Managers course will get promising job calls from top-rated 350+ industry partners until they land promising jobs.',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I opt for the Career Services Pro feature?',
          ans: 'Mid- to senior working experts with 70% score in the course and live projects are eligible for Learnbay’s Career Services PRO feature. Here, you will get –',
          open: false,
          list1: 'Career-driven 1:1 mock interviews with allied partners',
          list2: 'Resume help',
          list3: 'Favorable job referrals from top-rated MNCs/MAANG/FAANG',
        },
        {
          id: 3,
          ques: 'Do you offer job placement or assistance services after course completion?',
          ans: 'Yes. Experts pursuing a Gen AI course for managers can avail of 100% job and placement services at Learnbay – from interview prep to CV-making. ',
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
          ques: 'When will the learners receive the mentorship?',
          ans: 'We believe in industry-relevant mentorship to expand career potential and growth options. Our learners can avail themselves of the mentorship facility until they complete the course. Our mentors are here for doubt-clearing, career support, and offline project advice. ',
          open: true,
        },
        {
          id: 1,
          ques: 'Can a Learnbay student choose to study with their desired mentor?',
          ans: 'Learnbay has a team of dedicated mentors with pertinent industry insights. Our learners are assigned to respected mentors who can justify upskilling and fulfill a learner’s career interests. If you find a mentor unfit for training, you can request your desired mentor. We support quality upskilling, and our learners are free to change their mentors and study from the ones they desire. ',
          open: false,
        },
        {
          id: 2,
          ques: 'Are mentors available for one-on-one or group sessions?',
          ans: 'Yes. Our reliable mentors are available for live training sessions during projects or course tasks. If learners opt for a 1:1 training session, doubt-clearing, or project-related queries, mentors are open to them. ',
          open: false,
        },
        {
          id: 3,
          ques: 'Are there mentors available to help with coursework and projects?',
          ans: 'Experts joining the GenAI and Agentic AI for Managers and Leaders course can get reliable industry-driven training. Our mentors are accountable for guiding learners with course tasks, case studies, and live projects. So, yes, you will get hassle-free help from your mentor while working on real-time projects and course tasks. ',
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
          ques: 'How can I reach out for technical support if I face any problems with the course platform?',
          ans: 'Once you join the Generative AI course for managers, you will get 24x7 support that resolves any learning query. You can call our helpline number to reach the expected service providers who can help you with any technical matters (login, sessions, projects, chat, or course materials) with the course platform. ',
          open: true,
        },
        {
          id: 1,
          ques: 'Is there a discussion forum or community for learners to communicate, discuss, and seek help?',
          ans: 'Learners will get a personalized Learnbay app with each bit of course, project, and mentor details. They can directly reach out to their mentors to fix course/project queries and discuss doubts with peers. ',
          open: false,
        },
        {
          id: 2,
          ques: 'How long will I receive job referrals?',
          ans: 'With the Career Services Pro, you can avail yourself of endless job referrals until you get placed. ',
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          GenAI & Agentic AI Course for Managers & Leaders - Learnbay
        </title>
        <meta
          name="description"
          content="Advance your management career with GenAI & Agentic AI skills. Master business transformation, workflow automation & AI leadership with real projects. Join Now.
"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="genai course for managers and leaders,
agentic ai course for managers,
generative ai training for business leaders,
genai and agentic ai leadership program,
ai course for managers


"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/genai-agentic-ai-managers-leaders"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GenAI & Agentic AI Course for Managers & Leaders - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance your management career with GenAI & Agentic AI skills. Master business transformation, workflow automation & AI leadership with real projects. Join Now."
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
          content="https://www.learnbay.co/genai-agentic-ai-managers-leaders"
        />
        <meta
          name="twitter:title"
          content="GenAI & Agentic AI Course for Managers & Leaders - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Advance your management career with GenAI & Agentic AI skills. Master business transformation, workflow automation & AI leadership with real projects. Join Now."
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
          href="https://www.learnbay.co/genai-agentic-ai-managers-leaders"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "GenAI & Agentic AI Course for Managers & Leaders - Learnbay",
  "description": "Advance your management career with GenAI & Agentic AI skills. Master business transformation, workflow automation & AI leadership with real projects. Join Now.",
  "url": "https://www.learnbay.co/genai-agentic-ai-managers-leaders",
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
"@context": "https://schema.org/",
"@type": "Product",
"name": "Generative AI and Agentic AI Program For Managers and Leaders",
"image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
"brand": {
"@type": "Brand",
"name": "Learnbay"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"bestRating": "5",
"worstRating": "1",
"ratingCount": "1573"
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
      "name": "Can I do a Gen AI Course for Managers & Leaders at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Any professional with years of work experience in an industry can pursue our Generative AI course for managers and leaders."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue an Agentic AI and Gen AI for managers course while working full-time or from a distinct time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mid- to senior-level experts in leadership roles can opt for this Gen AI course with the flexibility to maintain work-study balance. Hence, managers can opt for upskilling with a full-time job or from a distinct time zone, considering our flexible weekday or weekend batches."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hands-on labs or practical exercises in the course curriculum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Generative AI course for managers and leaders offers a hands-on learning scope where you can work on practical projects and exercises. Our modules are revised considering the latest AI-driven trends to enrich your skills. Managers can learn to have AI-driven business shifts, build teams with AI experts, and devise AI initiatives for resolving issues."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Gen AI course for managers worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pursuing a Generative AI for managers course is worth investing in due to its expansive career benefits. Experts can acquire proven skills to tackle business issues amidst GenAI growth. You will work on AI-specific projects to optimize your judgment and scale up business decisions for promising gains."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of the GenAI and Agentic AI Program for Leaders and Managers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The course duration is 5 months (flexible weekday and weekend batches) and involves live projects."
      }
    },
    {
      "@type": "Question",
      "name": "What are the additional benefits provided by this Gen AI program for managers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our GenAI and Agentic AI program for managers will receive promising career perks. Apart from this, you will receive extra benefits like – Acquiring cutting-edge GenAI-rich skills (OpenAI APIs, Lang Chain, LLMs, RAG, etc.), BYOP+mentorship to resolve your own business problems, AI CoLab experience with AI-driven projects, 3-year flexi subscription, Career Services PRO (100% assured interviews), IBM Generative AI Certification."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of the GenAI Program for Managers and Leaders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program costs ₹1,20,000 plus 18% GST."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the Generative AI Course for Managers & Leaders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners opting for this course can pay in installments under a no-cost EMI option within 6, 9, or 12 months. Learners can also opt for interest-free loans, credit cards, or UPI for hassle-free learning."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any scholarship/discount available for leaders and managers for the Gen AI course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The GenAI and Agentic AI Program for Managers and Leaders offers an early bird discount of 15% – 20%, followed by attractive group discounts. Group of 2: 5% extra discount, Group of 3: 8% additional discount, Group of 4+: Max 10% discount. Apart from these deals, learners can avail themselves of up to 25% scholarship when registering for the course. You can check with our sales team at +91 7795687988 for further details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the GenAI and Agentic AI Program for Managers and Leaders at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experts can stop their learning anytime with a valid reason. For further details, refer to Learnbay's Refund/Cancellation Policy."
      }
    },
    {
      "@type": "Question",
      "name": "How many real-time projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Generative AI for Managers course includes 28+ executive-level real-time industrial projects to demonstrate success with exciting offers."
      }
    },
    {
      "@type": "Question",
      "name": "Are there possibilities to work on real-time industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners opting for this course will work on real-time projects to boost industry knowledge. Our eminent mentors are here to guide you throughout the project-handling stage at our AI CoLab. These projects are designed to equip you with real-time industry insights, refining your expertise."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my project for the capstone, or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners joining the Gen AI course for managers can choose their best-suited projects with their mentor's advice. You can assess your skills, career goals, and interests while selecting the projects."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners joining the Gen AI course for managers will receive an IBM GenAI certification to validate their AI expertise and land promising roles."
      }
    },
    {
      "@type": "Question",
      "name": "How do I receive my certificate, and is it a digital or printed certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All eligible learners with scores of 70% can earn globally acknowledged IBM certificates in digital form that will reach you within 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this Gen AI course must complete the course tasks, live projects, and case studies with a minimum score of 70%. It makes you eligible for a job assistance program at Learnbay (Career Services PRO) to pursue the exciting leadership opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our Generative AI for Managers course will get promising job calls from top-rated 350+ industry partners until they land promising jobs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the Career Services Pro feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mid- to senior working experts with 70% score in the course and live projects are eligible for Learnbay's Career Services PRO feature. Here, you will get – Career-driven 1:1 mock interviews with allied partners, Resume help, Favorable job referrals from top-rated MNCs/MAANG/FAANG."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job placement or assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Experts pursuing a Gen AI course for managers can avail of 100% job and placement services at Learnbay – from interview prep to CV-making."
      }
    },
    {
      "@type": "Question",
      "name": "When will the learners receive the mentorship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe in industry-relevant mentorship to expand career potential and growth options. Our learners can avail themselves of the mentorship facility until they complete the course. Our mentors are here for doubt-clearing, career support, and offline project advice."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Learnbay student choose to study with their desired mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay has a team of dedicated mentors with pertinent industry insights. Our learners are assigned to respected mentors who can justify upskilling and fulfill a learner's career interests. If you find a mentor unfit for training, you can request your desired mentor. We support quality upskilling, and our learners are free to change their mentors and study from the ones they desire."
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors available for one-on-one or group sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our reliable mentors are available for live training sessions during projects or course tasks. If learners opt for a 1:1 training session, doubt-clearing, or project-related queries, mentors are open to them."
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Experts joining the GenAI and Agentic AI for Managers and Leaders course can get reliable industry-driven training. Our mentors are accountable for guiding learners with course tasks, case studies, and live projects. So, yes, you will get hassle-free help from your mentor while working on real-time projects and course tasks."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reach out for technical support if I face any problems with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you join the Generative AI course for managers, you will get 24x7 support that resolves any learning query. You can call our helpline number to reach the expected service providers who can help you with any technical matters (login, sessions, projects, chat, or course materials) with the course platform."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for learners to communicate, discuss, and seek help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will get a personalized Learnbay app with each bit of course, project, and mentor details. They can directly reach out to their mentors to fix course/project queries and discuss doubts with peers."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With the Career Services Pro, you can avail yourself of endless job referrals until you get placed."
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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Managers_and_Leaders_GenAI_and_Agentic_AI_Program.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
          courseId={'genai-managers'}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Managers_and_Leaders_GenAI_and_Agentic_AI_Program.pdf"
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
          Fee="₹1,20,000"
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
  const module =
    await import('../Data/GenAIandAgenticAIProgramManagersLeadersData2025');
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
