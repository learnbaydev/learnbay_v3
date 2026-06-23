import { MasterAI } from '@/Data/Schema/DataScienceAndAIMasterSchema';
import { parseJSONData } from '@/Util/JsonConvertor';
import HighlightsAdminSection from '@/components/CoursePage/FirstPart/Support_noimage/highlightcloudAdmin';
import BookDemo from '@/components/CoursePage/NewDSA/BookDemo/BookDemo';
import UpdatedCertificate from '@/components/CoursePage/UpdatedCertificate/UpdatedCertificate';
import GenAIProject from '@/components/CoursePage/genAiProject/GenAIProject';
import Newheader from '@/components/CoursePage/newHeaderCloudAndDevOps/newHeader';
import NewTools from '@/components/CoursePage/newTools/NewTools';
import AlumniCompaniesCloudDevopsDA from '@/components/CoursePage/newUICourse/AlumniCompaniesCloudDevopsDA';
import LearningToPlacementDA from '@/components/CoursePage/newUICourse/LearningToPlacementDA/LearningToPlacement';
import BottomBar from '@/components/Global/BottomBar/BottomBar';
import Navbar from '@/components/Global/Navbar/Navbar';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import highlightsData from '@/Data/highlightsDataDA';
import FAQ from '@/components/AppliedAIPractitionerProgram/FAQs/FAQ';
const AnimationNew4 = dynamic(
  () => import('@/components/Home/whyChooseSection/whylblimitedDA')
);
const JobReadySection = dynamic(
  () => import('@/components/CoursePage/NewDSA/JobReadySection/JobReadySection')
);
const DSASyllabus = dynamic(
  () => import('@/components/CoursePage/NewDSA/DSASyllabusSection/DSASyllabus')
);
const DSAFeeSection = dynamic(
  () => import('@/components/CoursePage/dsaFee/DSAFeeSection')
);
const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));
const NewSevenSection = dynamic(
  () => import('@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection')
);
const MentorsSection = dynamic(
  () => import('@/components/course/MentorsSection/MentorsSection')
);
const ReviewSlider = dynamic(
  () => import('@/components/Home/newUI/reviewSlider/reviewSlider')
);
const SyllabusNew = dynamic(
  () => import('@/components/CoursePage/Syllabus/MasterSyllabus2025')
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Advanced_Cloud_and_Devops_Program.pdf';

  const faqNewData = [
    {
      id: 0,
      sectionName: 'COURSE-RELATED',
      data: [
        {
          id: 0,
          ques: 'What is the duration of the Cloud Computing and DevOps Certification Program?',
          ans: 'You can become a certified DevOps Engineer in 150+ hours (5 months) of instructor-led training with flexible training sessions (weekdays & weekends).',
          open: true,
        },
        {
          id: 1,
          ques: 'What prerequisites are required to enroll in this certification program?',
          ans: 'The cloud technology course is beginner-friendly, and IT/non-IT experts can opt for this. You can join this program with a basic knowledge of statistics/mathematics and fundamental concepts of IT. It teaches technical skills with programming languages from scratch.',
          open: false,
        },
        {
          id: 2,
          ques: 'Is this certification program suitable for beginners in IT?',
          ans: 'Yes, this certification is suitable for beginners in the IT domain. Freshers in IT can enroll in Cloud networking courses to learn in-demand tools. IT pros eager to learn promising DevOps practices and Cloud skills can opt for this program.',
          open: false,
        },
        {
          id: 3,
          ques: 'What cloud platforms are covered in the program?',
          ans: 'During the cloud computing classes, we will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools to craft an unbeatable Cloud and DevOps career.',
          open: false,
        },
        {
          id: 4,
          ques: 'Are there any real-world projects or case studies included in the program?',
          ans: 'The Advanced Cloud Computing and DevOps Certification Program includes ten real-time projects and some case studies in different learning modules. Real-time projects help experts explore the practical use of learned tools and tackle issues well.',
          open: false,
        },
        {
          id: 5,
          ques: 'How do I stay updated on course content and any changes in the program?',
          ans: 'Learnbay has a customized application that enables learners to stay updated with recent developments. It also has an interface to chat online with the respective groups and mentors for further doubt clearance.',
          open: false,
        },
        {
          id: 6,
          ques: 'How does the program get updated with the recent developments in Cloud technology and DevOps practices?',
          ans: 'Learnbay follows significant industrial/job market incidents across the global IT sector. Quality research, networking with industry experts, and tie-ups with industry partners keep us updated with the latest trends. Accordingly, our syllabus is revamped as per developments with AWS, Microsoft Azure, and GCP.',
          open: false,
        },
        {
          id: 7,
          ques: 'How does this program prepare students for real-world cloud and DevOps challenges?',
          ans: 'This program prepares students through instructor-led training sessions by industry experts. These sessions help you get versed in real-time issues linked to Cloud & DevOps practices and gain insights into domain specializations.',
          open: false,
        },
      ],
    },
    {
      id: 1,
      sectionName: 'PAYMENTS & SCHOLARSHIPS',
      data: [
        {
          id: 0,
          ques: 'How much does the Cloud Computing and DevOps Certification Program cost?',
          ans: 'The DevOps & Cloud Computing course fee is INR 1,20,000 plus 18% GST.',
          open: false,
        },
        {
          id: 1,
          ques: 'Are there any installment options available for program payments?',
          ans: 'Yes, we have an installment payment facility where you can pay in 6, 9, and 12 months of EMI through Credit card, UPI, or Internet banking.',
          open: false,
        },
        {
          id: 2,
          ques: 'Can I pay for the course using credit cards, and are there other payment methods accepted?',
          ans: 'Yes, you can pay for the course using credit cards. Some other payment options, like UPI or Internet banking, are also available.',
          open: false,
        },
        {
          id: 3,
          ques: 'Is financial aid or scholarships available for the Cloud Computing and DevOps Certification Program?',
          ans: 'Learnbay offers scholarships to eligible students after reviewing their profiles. Eligible learners will receive up to a 25% scholarship for the desired course.',
          open: false,
        },
        {
          id: 4,
          ques: 'How can I apply for scholarships, and what are the eligibility criteria?',
          ans: 'You must contact and book a 15–20 minute counseling session with a career counselor to get details of the course and scholarship schemes.',
          open: false,
        },
        {
          id: 5,
          ques: 'Are there any discounts for early registration in the program?',
          ans: 'Yes, we offer early bird discounts of 15% – 20%. Additionally, group discounts are available:',
          open: false,
          dscoursefaq1: true,
          list1: 'Group of 2: 5% extra discount',
          list2: 'Group of 3: 8% additional discount',
          list3: 'Group of 4+: Max 10% discount',
        },
        {
          id: 6,
          ques: 'Is there a refund policy in case I need to withdraw from the program?',
          ans: 'Yes, we offer an effortless refund or cancellation policy. For further details, refer to Learnbay’s Refund/Cancellation Policy.',
          open: false,
        },
        {
          id: 7,
          ques: 'Are there any additional costs for course materials, textbooks, or certification exams?',
          ans: 'No, you don’t have to pay additionally for course materials, textbooks, or certification exams. Upskilling is included in the course fees.',
          open: false,
        },
      ],
    },
    {
      id: 2,
      sectionName: 'CAPSTONE AND REAL-TIME PROJECTS',
      data: [
        {
          id: 0,
          ques: 'How many real-time projects will there be?',
          ans: 'You will get 50+ Hours of Industrial Projects and 12+ Hours of Capstone Projects with this program across different domains.',
          open: false,
        },
        {
          id: 1,
          ques: 'How will the project be executed?',
          ans: 'Learners choose projects based on domain electives. Mentors guide you throughout the project tasks at offline project innovation labs.',
          open: false,
        },
        {
          id: 2,
          ques: 'Could you elaborate on the capstone project and its significance?',
          ans: 'Capstone projects enable you to tackle real business scenarios with proven expertise. They help assess your skills, build an unbeatable portfolio, and validate your expertise to employers.',
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: 'CERTIFICATION',
      data: [
        {
          id: 0,
          ques: 'Is there any accredited certification after course completion?',
          ans: 'Yes. You will obtain globally accredited certifications from Microsoft once you complete the course and projects.',
          open: false,
        },
        {
          id: 1,
          ques: 'Is the certification internationally recognized?',
          ans: 'Yes, the certification is globally recognized, validating your skills for better job prospects internationally.',
          open: false,
        },
        {
          id: 2,
          ques: 'What type of certification do I receive upon course completion?',
          ans: 'Upon completion of the course, you will receive:',
          open: false,
          dscoursefaq1: true,
          list1: 'Three course certificates from Microsoft',
          list2: 'One Course Completion Certificate from Learnbay',
        },
      ],
    },
    {
      id: 4,
      sectionName: 'JOB ASSISTANCE',
      data: [
        {
          id: 0,
          ques: 'How does this program cater to individuals interested in pursuing a career as a DevOps engineer?',
          ans: 'The program offers hands-on tool learning and 100% dedicated placement support to help experts crack promising job offers across MNCs/MAANG.',
          open: false,
        },
        {
          id: 1,
          ques: 'What distinguishes this cloud computing course from others in the market?',
          ans: "Learnbay's program is unique due to:",
          open: false,
          dscoursefaq1: true,
          list1: 'Industry-driven syllabus (AWS, Azure, GCP)',
          list2:
            'Guaranteed interview calls and Microsoft project certification',
          list3: 'Domain-specific training and 1:1 interactions',
          list4: 'On-demand video doubt-clearing and customized resume prep',
        },
        {
          id: 2,
          ques: 'Can you provide details on the job assistance provided?',
          ans: 'Eligible learners (min. 70% in assessments) receive end-to-end support including:',
          open: false,
          dscoursefaq1: true,
          list1: '1:1 Mock Interviews with 450+ experts',
          list2: 'Resume Building and 1:1 LinkedIn Review',
          list3: 'Uninterrupted Job and Placement Support',
          list4: '24/7 contact with mentors',
        },
      ],
    },
    {
      id: 5,
      sectionName: 'MENTORSHIPS',
      data: [
        {
          id: 0,
          ques: 'Is there any support or mentorship provided during the course?',
          ans: 'Yes, we assign a mentor from promising MNCs/MAANG to guide you with real work experiences throughout the course.',
          open: false,
        },
        {
          id: 1,
          ques: 'Are there mentors available to help with coursework and projects?',
          ans: 'Experienced mentors help with 1:1 doubt-clearing, offline project handling, and coursework activities to ensure valuable results.',
          open: false,
        },
        {
          id: 2,
          ques: 'How can I connect with a mentor?',
          ans: 'You can contact your assigned industry-specific mentor 24/7 via the Learnbay app, phone, or chat sessions.',
          open: false,
        },
        {
          id: 3,
          ques: 'What is the typical response time for mentor support?',
          ans: 'Support is available during and after training sessions, with a typical response time of 10-15 minutes for resolving queries.',
          open: false,
        },
      ],
    },
    {
      id: 6,
      sectionName: 'SUPPORT',
      data: [
        {
          id: 0,
          ques: 'Are there dedicated support channels for technical issues?',
          ans: 'Yes, a centralized technical support system is available 24/7 to solve issues related to login, training sessions, and attendance.',
          open: false,
        },
        {
          id: 1,
          ques: 'What kind of support is available for enrolled students?',
          ans: 'Support covers technical/non-technical issues, 1:1 clarification, course materials, project handling, and career assistance.',
          open: false,
        },
        {
          id: 2,
          ques: 'How can students get assistance with course materials or concepts?',
          ans: 'You can directly reach your mentor via the Learnbay app for 360-degree knowledge-building and concept clarification.',
          open: false,
        },
        {
          id: 3,
          ques: 'Are there specific support options for those preparing for DevOps certification exams?',
          ans: 'Our Career Assistance service provides 1:1 doubt clearing, mock interviews, and soft skills training specifically for exam and interview readiness.',
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
          content="Advanced Cloud & DevOps program,
Advanced cloud & devOps certification,
Advanced Cloud & DevOps training,
Best advanced program for Cloud & DevOps,
Best certification for advanced cloud and DevOps,
"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud-and-devops/advanced-cloud-computing-and-devops-program"
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
          content="https://www.learnbay.co/cloud-and-devops/advanced-cloud-computing-and-devops-program"
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
          href="https://www.learnbay.co/cloud-and-devops/advanced-cloud-computing-and-devops-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
        "@context": "http://schema.org",
      "@type": "Course",
      "name": "Advanced Cloud and DevOps Training Program - Learnbay",
      "description": "Future-proof your career with advanced cloud & DevOps training, live classes, real-world capstone projects, and expert mentorship. Join now!",
      "url": "https://www.learnbay.co/cloud-and-devops/advanced-cloud-computing-and-devops-program",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
"@context": "https://schema.org/",
"@type": "Product",
"name": "Advanced Cloud & DevOps Program",
"image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
"brand": {
"@type": "Brand",
"name": "Learnbay"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.7",
"bestRating": "5",
"worstRating": "1",
"ratingCount": "1639"
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
    "name": "What is the duration of the Cloud Computing and DevOps Certification Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can become a certified DevOps Engineer in 150+ hours ( 5 months) of instructor-led training with flexible training sessions (weekdays & weekends)."
    }
  },{
    "@type": "Question",
    "name": "What prerequisites are required to enroll in this certification program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cloud technology course is beginner-friendly, and IT/non-IT experts can opt for this. You can join this program with a basic knowledge of statistics/mathematics and fundamental concepts of IT. It teaches technical skills with programming languages from scratch."
    }
  },{
    "@type": "Question",
    "name": "Is this certification program suitable for beginners in IT?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, this certification is suitable for beginners in the IT domain. Freshers in IT can enroll in Cloud networking courses to learn in-demand tools. IT pros eager to learn promising DevOps practices and Cloud skills can opt for this program. You will get an open learning experience with renowned faculty and become job-ready."
    }
  },{
    "@type": "Question",
    "name": "What cloud platforms are covered in the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "During the cloud computing classes, we will cover Google Cloud Platform, Microsoft Azure, and Amazon AWS concepts and tools to craft an unbeatable Cloud and DevOps career."
    }
  },{
    "@type": "Question",
    "name": "Are there any real-world projects or case studies included in the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Advanced Cloud Computing and DevOps Certification Program includes ten real-time projects and some case studies in different learning modules. Real-time projects help experts explore the practical use of learned tools and tackle issues well. Case studies and practical exercises help learners enrich their knowledge concerning the latest trends."
    }
  },{
    "@type": "Question",
    "name": "How do I stay updated on course content and any changes in the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay has a customized application that enables learners to stay updated with recent developments. It also has an interface to chat online with the respective groups and mentors for further doubt clearance. Any updates in the course content or related things are communicated via the online app or sessions."
    }
  },{
    "@type": "Question",
    "name": "How does the program get updated with the recent developments in Cloud technology and DevOps practices?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay follows each significant industrial/job market incident across the global IT sector and its impacts on specific job roles. Quality industry research, networking with industry experts, and tie-ups with industry partners keep us updated with the latest trends in Cloud and DevOps practices. In the same way, our course syllabus has been revamped as per the recent developments with AWS, Microsoft Azure, and GCP."
    }
  },{
    "@type": "Question",
    "name": "How does this program prepare students for real-world cloud and DevOps challenges?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This program prepares students to face real-world cloud computing and DevOps challenges. Its instructor-led training sessions by industry experts shall help you get versed in real-time issues linked to Cloud & DevOps practices. You gain real insights into your domain specializations that prepare you for the future."
    }
  },{
    "@type": "Question",
    "name": "How much does the Cloud Computing and DevOps Certification Program cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The DevOps & Cloud Computing course fee is INR 1,20,000 plus 18% GST."
    }
  },{
    "@type": "Question",
    "name": "Are there any installment options available for program payments?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we have an installment payment facility where you can pay in 6, 9, and 12 months of EMI. You can make payments through Credit card, UPI, or Internet banking."
    }
  },{
    "@type": "Question",
    "name": "Can I pay for the course using credit cards, and are there other payment methods accepted?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay for the course using credit cards. Some other payment options, like UPI or Internet banking, are also available."
    }
  },{
    "@type": "Question",
    "name": "Is financial aid or scholarships available for the Cloud Computing and DevOps Certification Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers scholarships to eligible students after reviewing their profiles. Eligible learners will receive up to a 25% scholarship for the desired course."
    }
  },{
    "@type": "Question",
    "name": "How can I apply for scholarships, and what are the eligibility criteria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You must contact and book a counseling session with a career counselor to get details of the course and scholarship schemes. It will be a telephone discussion of 15 – 20 minutes."
    }
  },{
    "@type": "Question",
    "name": "Are there any discounts for early registration in the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer early bird discounts of 15% – 20% for learners registering in the program at first. Yet, a group discount is available for the learners who join with one or more friends. 

Group of 2: 5% extra discount
Group of 3: 8% additional discount
Group of 4+: Max 10% discount"
    }
  },{
    "@type": "Question",
    "name": "Is there a refund policy in case I need to withdraw from the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer an effortless refund or cancellation policy for those who need to withdraw from the program. For further details, refer to Learnbay’s Refund/Cancellation Policy."
    }
  },{
    "@type": "Question",
    "name": "Are there any additional costs for course materials, textbooks, or certification exams?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, you don’t have to pay additionally for course materials, textbooks, or certification exams. With just payment of course fees, you can start upskilling."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will there be?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You will get 50+ Hours of Industrial Projects and 12+ Hours of Capstone Projects with this program in different domains or areas of expertise."
    }
  },{
    "@type": "Question",
    "name": "How will the project be executed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners can choose the project based on their domain electives and learning goals. Mentors will guide you throughout the project tasks at the offline project innovation labs."
    }
  },{
    "@type": "Question",
    "name": "Could you elaborate on the capstone project and its significance in the certification program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Capstone projects encompass the skills to see through real business scenarios and tackle them with proven expertise. It arms you with a set of skills that are valued by employers and expands your earning potential. It consists of stimulated projects that help you practice the in-demand tools. It helps to assess your skills and knowledge and makes room for improvement to sustain in the desired field. Plus, capstone projects have the significance of building an unbeatable project portfolio and validating your skills."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. You will obtain globally accredited certifications from Microsoft once you complete the course and projects."
    }
  },{
    "@type": "Question",
    "name": "Is the certification internationally recognized?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, the certification is globally recognized, which enriches your career and validates the learned skills for better job prospects."
    }
  },{
    "@type": "Question",
    "name": "What type of certification do I receive upon course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Upon completion of the course, you will receive three course certificates from Microsoft and a Course Completion Certificate from Learnbay"
    }
  },{
    "@type": "Question",
    "name": "Are there any additional costs associated with the certification?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The certification has no other costs included apart from the course fees."
    }
  },{
    "@type": "Question",
    "name": "How does this program cater to individuals interested in pursuing a career as a DevOps engineer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Cloud Computing and DevOps Certification Program aims to support career-building with promising job roles. Working experts eager to pursue a career as a DevOps Engineer will get uninterrupted training sessions. Hands-on learning of tools helps learners future-proof their skills with assured job offers. It's 100% dedicated placement support helps experts crack promising job offers across MNCs/MAANG with better pay cheques."
    }
  },{
    "@type": "Question",
    "name": "What distinguishes this cloud computing course from others in the market?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay believes in real-time upskilling to enrich the existing skill sets and attain career success. Its Cloud Computing and DevOps Certification Program is different from others in the following ways –

Industry-driven syllabus with AWS, Microsoft Azure, and GCP
Guaranteed calls for Interviews from Industry partners 
Globally recognized project certification from Microsoft
Domain-specific training 
100% 1:1 live interactions with industry experts
On-demand video doubt-clearing support
Customized resume preparation"
    }
  },{
    "@type": "Question",
    "name": "Can you provide details on the job assistance provided after completing the Cloud Computing and DevOps Certification Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After completing the Cloud Computing and DevOps Certification Program, end-to-end job assistance is offered to learners. Learners with a minimum of 70% in assessments and completed projects are eligible to get job assistance from Learnbay. We have a Career assistance and job referral for eligible learners, where they will get benefits like – 

Uninterrupted Job and Placement Support
Complete access to course materials and resources
1:1 Mock Interviews with any of 450+ Industry Experts 
24/7 contact with Mentors
Resume Building Session
1:1 LinkedIn Review Session
Dedicated Placement Team for soft skills training"
    }
  },{
    "@type": "Question",
    "name": "What resources or support systems are in place to help graduates secure positions in the field of cloud computing and DevOps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers industry-paced training to help graduates secure a promising position in Cloud Computing and DevOps. Resources or support they offer are –

360-degree knowledge-building training 
Live projects for practical learning
Training on in-demand Cloud & DevOps tools
100% placement support 
Globally recognized certifications ( Microsoft)"
    }
  },{
    "@type": "Question",
    "name": "Explain job referral and career assistance by Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay’s job referral and career assistance aims to support a successful career transition in a preferred role. It has features like –

AI-Optimized Resume, ATS-friendly, and Job-ready
5 Mock Interviews with Industry Experts 
1:1 LinkedIn Review Session
Dedicated Placement Team

You can opt for Career assistance for the Cloud and DevOps Program to crack in-demand jobs in the IT sector."
    }
  },{
    "@type": "Question",
    "name": "Is there any support or mentorship provided during the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we believe in industry-driven mentorship to justify a career transition. We have renowned faculty from promising MNCs/MAANG who mentor our learners. Once you enroll in the course, we will assign you a mentor/instructor to guide you throughout the course. Mentors guide you with real work experiences so that you can tackle the issues with proven solutions."
    }
  },{
    "@type": "Question",
    "name": "Are there mentors available to help with coursework and projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our experienced mentors are there to help you with coursework, case studies, practical exercises, and fresh capstone projects. Learners will gain insights into real-world applications of Cloud and DevOps practices. Mentors help learners with 1:1 doubt-clearing, offline project handling, and coursework activities. Thus, you will get complete support from your mentor with valuable results."
    }
  },{
    "@type": "Question",
    "name": "How can I connect with a mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "An industry-specific mentor is assigned to learners, enrolling in the Cloud Computing and DevOps Program. You can contact your mentor 24/7 directly via the Learnbay app. You can contact them personally over the phone or via app chat sessions."
    }
  },{
    "@type": "Question",
    "name": "What is the typical response time for mentor support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the Cloud Computing and DevOps Program, you can get along with your mentor for each discussion or need. Our mentors are there to support your queries at any time (during and after the training sessions). So, within 10-15 minutes, you can get mentor support to resolve queries concerning coursework or live projects."
    }
  },{
    "@type": "Question",
    "name": "Are there dedicated support channels for addressing technical issues during the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay has a centralized technical support system to help learners with related issues during the course. This technical support is available 24/7 to solve all your queries as soon as possible. In case you face technical issues during login, logout, training sessions, attendance, or other issues, our dedicated experts are there to help."
    }
  },{
    "@type": "Question",
    "name": "What kind of support is available for students enrolled in the Cloud Computing and DevOps Certification Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the Cloud Computing and DevOps Certification Program, learners will get support for –

Technical/non-technical issues
Contacting mentors 
1:1 clarification
Course materials
Coursework and project handling help
Career assistance (Job assistance)"
    }
  },{
    "@type": "Question",
    "name": "How can students get assistance with course materials or clarification on concepts related to cloud technology and DevOps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dedicated mentorship is an effective solution for clarification of concepts and 360-degree knowledge-building. You can directly reach your mentor in case of doubts or further clarifications on Cloud and DevOps concepts. The Learnbay app is the medium of contact where you can raise your doubts about course materials and training."
    }
  },{
    "@type": "Question",
    "name": "Are there specific support options for those preparing for DevOps certification exams?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Career assistance is an exclusively designed solution for learners preparing for DevOps certification exams or placement. It helps learners with 1:1 doubt clearing, mock interviews, mentorship, resume building, and soft skills training. Learners can reach their mentors at any time to get support in certification exams or appear in job interviews."
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
          courseId={'adv-cloud-devops'}
        />
        <AlumniCompaniesCloudDevopsDA
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Advanced_Cloud_and_Devops_Program.pdf"
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
        <div style={{ marginTop: '50px' }}>
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
            '3-step admission process',
            'eligibility',
            'counselling',
            'enrollment',
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
  const module =
    await import('../../Data/advanced-cloud-and-devops-program-data');
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
