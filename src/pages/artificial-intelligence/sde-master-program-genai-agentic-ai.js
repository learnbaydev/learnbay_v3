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
import FAQ from '@/components/AppliedAIPractitionerProgram/FAQs/FAQ';
import {
  getDSABookingLaterDate,
  getDSABookingSoonDate,
} from '@/Util/getDSABatchData';
import AlumniCompanies from '@/components/CoursePage/newUICourse/AlumniCompanies';
import LearningToPlacement from '@/components/CoursePage/newUICourse/LearningToPlacementinfinity/LearningToPlacement';
import Newheader from '@/components/CoursePage/newHeader/newHeader';
import { MasterAI } from '@/Data/Schema/DataScienceAndAIMasterSchema';
import FeeSection from '@/components/course/feeSection/FeeSectionCourse';
import UpdatedCertificate from '@/components/CoursePage/UpdatedCertificate/UpdatedCertificate';
import HighlightsSection from '@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection';
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/SDE_Master_Program_for_Tech_Professionals.pdf';

  let soonDate = getDSABookingSoonDate();
  let laterDate = getDSABookingLaterDate();
  // console.log(getDSABookingSoonDate(new Date('2023-03-24')));
  // console.log(getDSABookingLaterDate(new Date('2023-03-24')));
  const faqNewData = [
    {
      id: 0,
      sectionName: 'COURSE-RELATED',
      data: [
        {
          id: 0,
          ques: 'Who is qualified for the SDE Master’s program with GenAI and Agentic AI at Learnbay?',
          ans: 'Software developers and engineers with a minimum of 1+ years of industry experience can pursue this master’s program.',
          open: true,
        },
        {
          id: 1,
          ques: 'What learning modules are covered in the Software Development Program at Learnbay?',
          ans: 'The learning modules with the SDE master’s program majorly include DSA, system design, GenAI, and Agentic AI concepts.',
          open: false,
        },
        {
          id: 2,
          ques: 'How long does it take to complete the SDE Master’s Program?',
          ans: 'The course duration is 7 – 8 months, including flexible training sessions.',
          open: false,
        },
        {
          id: 3,
          ques: 'How long can I have access to the course materials and resources?',
          ans: 'Professionals joining our SDE master’s program will have unlimited access to course materials and resources according to a 3-year flexi pass for live interactive classes.',
          open: false,
        },
      ],
    },
    {
      id: 1,
      sectionName: 'Domain Specialization',
      data: [
        {
          id: 0,
          ques: 'What is domain specialization?',
          ans: 'Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to an industry. Domain-specific learning is vital for experts who want to retain their careers with enriched benefits (hikes, bonuses, promotions, etc).',
          open: true,
        },
        {
          id: 1,
          ques: 'What are the available domain elective options?',
          ans: 'Our SDE master’s program with GenAI and Agentic AI promises a rewarding future. Here, you can choose any two domain electives to transition your role to GenAI & Agentic AI specialists. The available domain electives are –',
          open: false,
          list1: 'GenAI for Software Development and SDE Roles',
          list2: 'AI for Cloud, DevOps, and LLM Infrastructure',
          list3: 'AI-Powered Backend Engineering for AI Systems',
          list4: 'Distributed Systems & Microservices for AI Applications',
          list5: 'Multi-Agent Systems & Workflow Automation with Agentic AI',
          list6: 'GenAI & Agentic AI for Product Managers',
        },
      ],
    },
    {
      id: 2,
      sectionName: 'PAYMENTS & SCHOLARSHIPS',
      data: [
        {
          id: 0,
          ques: 'What is the course fee for the Software Development Course?',
          ans: 'The course costs INR 1,59,000 plus 18% GST.',
          open: true,
        },
        {
          id: 1,
          ques: 'What financing options are open for the SDE Master’s program?',
          ans: 'Learnbay extends a pocket-friendly career switch with its flexible installment options, with a no-cost EMI for 6, 9, and 12 months.',
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: 'CAPSTONE PROJECTS',
      data: [
        {
          id: 0,
          ques: 'How many real-time projects will there be?',
          ans: 'The SDE master’s program includes 29+ real-world GenAI and Agentic AI projects to refine your domain knowledge. Additionally, you will work on 4+ capstone projects (2 projects each per domain elective).',
          open: true,
        },
        {
          id: 1,
          ques: 'Are there opportunities to work on real industry projects?',
          ans: 'Yes. Experts enrolling in the GenAI-rich SDE master’s course will work on real-time AI projects to gain valuable insights. You will be assigned domain-specific GenAI and Agentic AI projects at AI Co-Labs to refine your skills with autonomous agents.',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I choose my capstone project, or are projects assigned?',
          ans: 'Once you enroll in the master’s program, you can choose projects useful to your domain, career interests, and goals. Additionally, you will work on AI projects to tackle real-time GenAI & Agentic AI challenges.',
          open: false,
        },
        {
          id: 3,
          ques: 'How does Learnbay’s capstone project prep help learners?',
          ans: 'The SDE master’s program with Capstone Projects is essential in modern upskilling times. It helps you gain industry best practices and get structured learning for developing GenAI and Agentic AI-rich expertise. This helps to refine your problem-solving skills. Learners will work on capstone projects to confront LLMs and work collaboratively with autonomous agents in software development.',
          open: false,
        },
      ],
    },
    {
      id: 4,
      sectionName: 'CERTIFICATIONS',
      data: [
        {
          id: 0,
          ques: 'Is certification essential for career transformation in software development?',
          ans: 'Certification is crucial to confirm your expertise with the latest GenAI-driven evolutions. Our SDE master’s program helps you master the GenAI and Agentic AI intricacies in the software development process at the front and backend, exhibiting a global-level career with massive progress.',
          open: true,
        },
        {
          id: 1,
          ques: 'Is there any accredited certification after course completion?',
          ans: 'Yes. Our SDE master’s course offers –',
          open: false,
          list1: 'One IBM Generative AI Certification',
          list2: 'Three Microsoft Azure Certifications',
          list3: 'Two AI Co-Lab certifications',
        },
      ],
    },
    {
      id: 5,
      sectionName: 'JOB ASSISTANCE',
      data: [
        {
          id: 0,
          ques: 'What is dedicated placement assistance for working professionals at Learnbay?',
          ans: 'Learnbay offers the best SDE Master’s Program with placement. Our career-driven placement support assures you of hassle-free transitions and swift promotions in your domain. It includes mock interviews, resume optimization, and interview calls from reputed firms.',
          open: true,
        },
        {
          id: 1,
          ques: 'Who is eligible for the career assistance program at Learnbay?',
          ans: 'Working professionals (learners) who obtain at least 70% marks in tasks and projects become eligible for our placement assistance.',
          open: false,
        },
        {
          id: 2,
          ques: "How is Learnbay's Career Services Pro different from others?",
          ans: 'You become eligible for our placement program when you get upskilled with our SDE Master’s program. It offers -',
          open: false,
          list1: 'Technical mock interviews',
          list2: 'Resume building (ATS-friendly)',
          list3: 'Job referrals',
        },
      ],
    },
    {
      id: 6,
      sectionName: 'MENTORSHIPS',
      data: [
        {
          id: 0,
          ques: 'Who are the mentors at Learnbay?',
          ans: 'Our prestigious mentors are from top-tier MNCs such as IBM, Google, Microsoft, and Amazon. We appoint reliable industry experts as mentors to help you with live training, 1:1 doubt-clearing sessions, and comprehensive knowledge-building.',
          open: true,
        },
        {
          id: 1,
          ques: 'Can I reach out to my mentors to clear up any doubts regarding the course?',
          ans: 'Any learner pursuing the SDE master’s program will get hands-on learning (AI CoLab) and personalized doubt-clearing. Mentors are liable for helping aspirants find the ideal solutions to their doubts in coursework and projects.',
          open: false,
        },
        {
          id: 2,
          ques: 'Do the mentors take live classes or play recorded sessions during the training?',
          ans: 'Industry mentors at Learnbay take live online classes for the learners to teach them in-depth concepts. Recordings are also available after the sessions to help until the learner gets placed.',
          open: false,
        },
        {
          id: 3,
          ques: 'How long can I avail myself of the mentorship facility?',
          ans: 'Our mentors provide 100% live online training until the course is complete. During placement preparation, a learner can opt for 1:1 doubt-clearing and interview prep. Mentorship ends after completion of tasks, assessments, and projects.',
          open: false,
        },
        {
          id: 4,
          ques: 'Can learners choose to study with their desired mentors at Learnbay?',
          ans: "Every batch has a distinct mentor. However, if you are not comfortable with your mentor's training strategy, management can help resolve it by replacing them with other desirable mentors.",
          open: false,
        },
      ],
    },
    {
      id: 7,
      sectionName: 'SUPPORT',
      data: [
        {
          id: 0,
          ques: 'Are there dedicated support channels for addressing technical issues?',
          ans: 'Learnbay has a centralized technical support team available round-the-clock to help with login issues, training sessions, and project-related queries.',
          open: true,
        },
        {
          id: 1,
          ques: 'What types of support are available for learners joining the SDE Master Program?',
          ans: 'After enrolling in the course, learners will get support for –',
          open: false,
          list1: 'Technical/non-technical concerns & Mentorship',
          list2: 'Domain-specific career guidance',
          list3: 'Personalized (1:1) doubt-clearing sessions',
          list4: 'Capstone project preparation & AI CoLab experience',
          list5: 'IBM & AI Startup certifications & Job assistance',
        },
        {
          id: 2,
          ques: 'Is there a discussion forum or community for learners?',
          ans: 'Learners will get a customized Learnbay app with their mentors mentioned to directly communicate and discuss doubts with peers.',
          open: false,
        },
        {
          id: 3,
          ques: 'How long will I get job referrals?',
          ans: 'You can get job referrals until you successfully crack a promising job in the software industry.',
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>SDE Master Program For Software Developers - Learnbay</title>
        <meta
          name="description"
          content="Master GenAI, Agentic AI, DSA & system design to crack top SDE roles. Build real-world AI projects and become industry-ready. Enroll now!
"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="SDE master program for software developer,
SDE program for software developers,
SDE master certification for software developers,
SDE master program for developers,
SDE program for developers,
SDE master program,
Software developer master program

"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="SDE Master Program For Software Developers - Learnbay"
        />
        <meta
          property="og:description"
          content="Master GenAI, Agentic AI, DSA & system design to crack top SDE roles. Build real-world AI projects and become industry-ready. Enroll now!"
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
          content="https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai"
        />
        <meta
          name="twitter:title"
          content="SDE Master Program For Software Developers - Learnbay
"
        />
        <meta
          name="twitter:description"
          content="Master GenAI, Agentic AI, DSA & system design to crack top SDE roles. Build real-world AI projects and become industry-ready. Enroll now!"
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
          href="https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
       "@context": "http://schema.org",
      "@type": "Course",
      "name": "SDE Master Program For Software Developers - Learnbay",
      "description": "Master GenAI, Agentic AI, DSA & system design to crack top SDE roles. Build real-world AI projects and become industry-ready. Enroll now!\\n",
      "url": "https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai",
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
      "coursePrerequisites": "You should have knowledge of Python, Machine Learning, & Deep Learning.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P11M",
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
"@context": "https://schema.org/",
"@type": "Product",
"name": "SDE Master Program Generative AI and Agentic AI",
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
"ratingCount": "1972"
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
  "mainEntity": [{
    "@type": "Question",
    "name": "Who is qualified for the SDE Master’s program with GenAI and Agentic AI at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Software developers and engineers with a minimum of 1+ years of industry experience can pursue this master’s program."
    }
  },{
    "@type": "Question",
    "name": "What learning modules are covered in the Software Development Program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The learning modules with the SDE master’s program majorly include DSA, system design, GenAI, and Agentic AI concepts."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to complete the SDE Master’s Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course duration is 7 – 8 months, including flexible training sessions."
    }
  },{
    "@type": "Question",
    "name": "How long can I have access to the course materials and resources?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Professionals joining our SDE master’s program will have unlimited access to course materials and resources according to a 3-year flexi pass for live interactive classes."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Domain specialization refers to the process of gaining field expertise in a specific subject or area of interest related to an industry. Domain-specific learning is vital for experts who want to retain their careers with enriched benefits (hikes, bonuses, promotions, etc)."
    }
  },{
    "@type": "Question",
    "name": "What are the available domain elective options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our SDE master’s program with GenAI and Agentic AI promises a rewarding future. Here, you can choose any two domain electives to transition your role to GenAI & Agentic AI specialists. The available domain electives are – \\n\\nGenAI for Software Development and SDE Roles\\nAI for Cloud, DevOps, and LLM Infrastructure\\nAI-Powered Backend Engineering for AI Systems\\nDistributed Systems & Microservices for AI Applications\\nMulti-Agent Systems & Workflow Automation with Agentic AI\\nGenAI & Agentic AI for Product Managers"
    }
  },{
    "@type": "Question",
    "name": "What is the course fee for the Software Development Course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course costs INR 1,59,000 plus 18% GST."
    }
  },{
    "@type": "Question",
    "name": "What financing options are open for the SDE Master’s program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay extends a pocket-friendly career switch with its flexible installment options, with a no-cost EMI for 6, 9, and 12 months."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will there be?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The SDE master’s program includes 29+ real-world GenAI and Agentic AI projects to refine your domain knowledge. Additionally, you will work on 4+ capstone projects (2 projects each per domain elective)."
    }
  },{
    "@type": "Question",
    "name": "Are there opportunities to work on real industry projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Experts enrolling in the GenAI-rich SDE master’s course will work on real-time AI projects to gain valuable insights. You will be assigned domain-specific GenAI and Agentic AI projects at AI Co-Labs to refine your skills with autonomous agents."
    }
  },{
    "@type": "Question",
    "name": "Can I choose my capstone project, or are projects assigned?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Once you enroll in the master’s program, you can choose projects useful to your domain, career interests, and goals. Additionally, you will work on AI projects to tackle real-time GenAI & Agentic AI challenges."
    }
  },{
    "@type": "Question",
    "name": "How does Learnbay’s capstone project prep help learners?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The SDE master’s program with Capstone Projects is essential in modern upskilling times. It helps you gain industry best practices and get structured learning for developing GenAI and Agentic AI-rich expertise. This helps to refine your problem-solving skills. Learners will work on capstone projects to confront LLMs and work collaboratively with autonomous agents in software development."
    }
  },{
    "@type": "Question",
    "name": "Is certification essential for career transformation in software development?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Certification is crucial to confirm your expertise with the latest GenAI-driven evolutions. Today’s technological advancements encourage real-time upskilling. Meanwhile, the demand for certified IT professionals makes certifications crucial for a 360-degree career change. Our SDE master’s program helps you master the GenAI and Agentic AI intricacies in the software development process at the front and backend. It empowers you with the ability to exhibit a global-level career with massive progress."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Our SDE master’s course offers –\\n\\nOne IBM Generative AI Certification\\nThree Microsoft Azure Certifications\\nTwo AI Co-Lab certifications"
    }
  },{
    "@type": "Question",
    "name": "What is dedicated placement assistance for working professionals at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers the best SDE Master’s Program with placement. Our career-driven placement support assures you of hassle-free transitions and swift promotions in your domain. It includes mock interviews, resume optimization, and interview calls from reputed firms."
    }
  },{
    "@type": "Question",
    "name": "Who is eligible for the career assistance program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Working professionals (learners) who obtain at least 70% marks in tasks and projects become eligible for our placement assistance."
    }
  },{
    "@type": "Question",
    "name": "How is Learnbay's Career Services Pro different from others?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You become eligible for our placement program when you get upskilled with our SDE Master’s program. It offers -\\n\\nTechnical mock interviews \\nResume building (ATS-friendly)\\nJob referrals"
    }
  },{
    "@type": "Question",
    "name": "Who are the mentors at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay is dedicated to offering accessible and industry-relevant training to help working professionals build attractive careers. Our prestigious mentors are from top-tier MNCs from diverse domains such as IBM, Google, Microsoft, and Amazon. We appoint reliable industry experts as mentors to help you with live training, 1:1 doubt-clearing sessions, and comprehensive knowledge-building. Learners will also obtain exceptional skills via personalized learning support for a smooth career change."
    }
  },{
    "@type": "Question",
    "name": "Can I reach out to my mentors to clear up any doubts regarding the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Any learner pursuing the SDE master’s program will get hands-on learning (AI CoLab) and personalized doubt-clearing. Mentors are liable for helping aspirants find the ideal solutions to their doubts in coursework and projects. At the end of the course, a doubt-clearing session is conducted to help the aspirants better comprehend the concepts."
    }
  },{
    "@type": "Question",
    "name": "Do the mentors take live classes or play recorded sessions during the training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Industry mentors at Learnbay take live online classes for the learners to teach them in-depth concepts. In the live training sessions, learners benefit from refining their skills and clearing their doubts. After the end of the sessions till getting placed, the aspirants need quality upskilling, where these recordings are helpful."
    }
  },{
    "@type": "Question",
    "name": "Do counseling sessions help professionals make wise decisions before enrolling in a course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay provides the extent of understanding of the curriculum details and their role in shaping a bright career in a chosen domain. Our career experts or counselors help learners master the latest concepts, followed by capstone projects. Before joining the software development master’s course, you also get the advantage of attending demo sessions by industry experts with customized advice. Thus, it helps working professionals make the right decision in career building."
    }
  },{
    "@type": "Question",
    "name": "How long can I avail myself of the mentorship facility?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors provide 100% live online training or hybrid sessions to the learners until they complete the course. Follows, during the placement preparation, a learner can opt for 1:1 doubt-clearing sessions and interview preparation. Mentorship ends after the learner completes each task, assessment, and project work."
    }
  },{
    "@type": "Question",
    "name": "Can learners choose to study with their desired mentors at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has a distinct mentor. However, if you are not comfortable with your mentor's training strategy, you can submit the issue to management. They will help resolve it by replacing them with other desirable mentors."
    }
  },{
    "@type": "Question",
    "name": "Are there dedicated support channels for addressing technical issues during the software development program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay has a centralized technical support team to help learners with related issues during the coursework. This technical support is available round-the-clock to solve all your course and project-related queries. Additionally, if you face technical issues during login, logout, training sessions, or other activities, our reliable tech experts are there to assist with the respective concern."
    }
  },{
    "@type": "Question",
    "name": "What types of support are available for learners joining the SDE Master Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the course, learners will get support for –\\n\\nTechnical/non-technical concerns\\nMentorship\\nDomain-specific career guidance\\nPersonalized (1:1) doubt-clearing sessions\\nCaptone project preparation\\nAI CoLab experience \\nIBM & AI Startup certifications\\nJob assistance"
    }
  },{
    "@type": "Question",
    "name": "Is there a discussion forum or community for learners to communicate and seek support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners will get a customized Learnbay app with their mentors mentioned. They can directly communicate with their mentors to resolve queries and discuss doubts with peers."
    }
  },{
    "@type": "Question",
    "name": "How long will I get job referrals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can get job referrals until you successfully crack a promising job in the software industry."
    }
  }]

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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/SDE_Master_Program_for_Tech_Professionals.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
          courseId={'sde-genai-master'}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/SDE_Master_Program_for_Tech_Professionals.pdf"
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/SDE+Master+Program+with+GenAI+%26+Agentic+AI2025_compressed.pdf"
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
    await import('../../Data/SDEMasterProgramGenAIandAgenticAI-Data');
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
