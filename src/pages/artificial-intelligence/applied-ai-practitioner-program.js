import React from "react";
import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/HeroSection/HeroSection")
);

const WhoCanApply = dynamic(() =>
  import("@/components/AppliedAIPractitionerProgram/WhoCanApply/WhoCanApply")
);
const WhyThisProgram = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/WhyThisProgram/WhyThisProgram"
  )
);
const HowThisProgramHelpYourDomain = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/HowThisProgramHelpYourDomain/HowThisProgramHelpYourDomain"
  )
);
const ToolsAndPlatforms = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ToolsAndPlatforms/ToolsAndPlatforms"
  )
);

const ProgramSyllabus = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ProgramSyllabus/ProgramSyllabus"
  )
);

const FinalProjectSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/FinalProjectSection/FinalProjectSection"
  )
);

// const AiColabExperienceSection = dynamic(() =>
//   import(
//     "@/components/AppliedAIPractitionerProgram/AiColabExperienceSection/AiColabExperienceSection"
//   )
// );

const CertificationsSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/CertificationsSection/CertificationsSection"
  )
);

const StartupCertificateSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/StartupCertificateSection/StartupCertificateSection"
  )
);

const ProgramSnapshotSection = dynamic(() =>
  import(
    "@/components/AppliedAIPractitionerProgram/ProgramSnapshotSection/ProgramSnapshotSection"
  )
);

const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";

// import { list } from "postcss";
// import FAQAppliedAINew from "@/components/CoursePage/FAQNew/FAQAppliedAINew";
const NewSevenSection = dynamic(() =>
  import("@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection")
);

import FAQ from "@/components/AppliedAIPractitionerProgram/FAQs/FAQ";

const AppliedAIPractitionerProgram = () => {
  const faqNewData = [
    {
      id: 0,
      sectionName: "Course Related",
      data: [
        {
          id: 0,
          ques: "What is the Applied AI Practitioner Program?",
          ans: "This AI practitioner certification program is a 4-month, mentor-led program designed to help learners build end-to-end AI products, co-pilots, and automation systems with real-time AI startup collaboration.",
          open: true,
        },
        {
          id: 1,
          ques: "Who is qualified for the Applied AI Practitioner Program at Learnbay? ",
          ans: "This program applies to both tech and non-tech professionals, leaders, and entrepreneurs. Tech and non-tech professionals with 1 – 10+ years of experience can join the course. In addition, leaders and entrepreneurs with 5 – 10+ years of experience can pursue the course to gain AI expertise. ",
          open: false,
        },
        {
          id: 2,
          ques: "Do I need coding experience to join?",
          ans: "No. As the program includes low-code and no-code workflows, it is suitable even for non-technical professionals.",
          open: false,
        },
        {
          id: 3,
          ques: "What learning modules are covered in the Applied AI Practitioner Program at Learnbay? ",
          ans: "The learning modules of this program cover theoretical and practical concepts of AI, empowering learners to build AI products and co-pilots. The course includes 6 terms that start with basic AI reasoning and LLM workflows. Further modules cover GenAI and multimodal AI concepts, agentic AI and automation, app development and deployment, AIOps, and optimization techniques.",
          open: false,
        },
        {
          id: 4,
          ques: "What skills will I gain by the end?",
          ans: "By the end of the course, tech and non-tech professionals and entrepreneurs will learn LLM workflows, content creation via GenAI, agentic  AI automation, no-code app designing, deployment, and AIOps monitoring.",
          open: false,
        },
        {
          id: 5,
          ques: "What tools and technologies will I learn?",
          ans: "By the end of this AI Practitioner course, you will master LLMs, RAG, multimodal GenAI, Power BI, no-code builders, vector stores, API integrations, AIOps tools, automation, and deployment workflows.",
          open: false,
        },
        {
          id: 6,
          ques: "Is this program beginner-friendly?",
          ans: "Yes. The Applied AI program starts with fundamental AI reasoning and LLM basics, which gradually move to Agentic AI, AIOps, and automation workflows.",
          open: false,
        },
        {
          id: 7,
          ques: "What are the learning modes at Learnbay? ",
          ans: "The Applied AI Practitioner Program allows you to have flexible learning without disrupting your job. You can either opt for 100% live online sessions (online coursework and projects) or choose hybrid mode (online coursework but offline projects). However, it's up to the learners to choose the right learning mode. ",
          open: false,
        },
        {
          id: 8,
          ques: "How long does it take to complete the Applied AI Practitioner Program?",
          ans: "The Applied AI Practitioner Program is a 4-month live program including weekday and weekend batches. The course duration encompasses coursework, project work (AI Co-Lab), placement assistance, and certifications",
          open: false,
        },
        {
          id: 9,
          ques: "How long can I have access to the course materials and resources? ",
          ans: "Learners enrolling in the course can avail themselves of a 3-year flexible subscription at Learnbay. It allows you to have unlimited access to learning materials and resources. In short, you can learn at your own pace until you land your dream job. ",
          open: false,
        },
        {
          id: 10,
          ques: "Why is the Applied AI Practitioner Program different from others?",
          ans: `The Applied AI Practitioner program sets your career apart from others by equipping you with the following benefits -`,
          open: false,
          dscoursefaq1: true,
          list1: "Build real-world AI projects",
          list2: "Work with AI startups",
          list3:
            "Master no-code deployments, machine learning, AIOps, and automation",
          list4:
            "Earn global certifications in collaboration with IIT Patna Vishlesan I-Hub Foundation",
        },
      ],
    },
    {
      id: 1,
      sectionName: "Domain Electives",
      data: [
        {
          id: 0,
          ques: "What is domain specialization?",
          ans: "Domain specialization justifies a practice of gaining field expertise as per the learner’s core subject or area of career interest. Domain-focused learning allows learners to gain in-depth awareness of core fields and expand their existing knowledge. Domain awareness helps learners to address crucial business challenges with AI-specific solutions. ",
          open: true,
        },
        {
          id: 1,
          ques: "What are the available elective domain options?",
          ans: `The AI practitioner certification program aims to enhance domain awareness to address real-world business problems across diverse fields. The available domains are –`,
          open: false,
          list1: "Sales and Marketing",
          list2: "BFSI",
          list3: "Healthcare & Life Sciences",
          list4: "Manufacturing & Supply Chain",
        },
        {
          id: 2,
          ques: "Can I devise AI automation solutions for my own domain?",
          ans: "Yes. professionals from diverse domains can pursue this applied accelerated artificial intelligence program to build AI-driven solutions. Plus, business leaders and entrepreneurs can also master proven ways to utilize AI for fulfilling evolving goals.",
        },
      ],
    },
    {
      id: 2,
      sectionName: "Payments and Scholarships",
      data: [
        {
          id: 0,
          ques: "What is the course fee for the Applied AI Practitioner program? ",
          ans: "Course fee is ₹ 1,10,000 + 18% GST. ",
          open: true,
        },
        {
          id: 1,
          ques: "What financing options are available for the AI Practitioner Certification Program? ",
          ans: "3, 6, and 9-month easy EMI plans are available.",
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: "Projects & AI Co-Lab ",
      data: [
        {
          id: 0,
          ques: "What is AI Co-Lab at Learnbay?",
          ans: "AI co-lab is an open learning platform where learners work on GenAI and Agentic AI-specific projects in real-time. Learners co-create and collaborate with AI startups to address real-world business problems in diverse domains. ",
          open: true,
        },
        {
          id: 1,
          ques: "What benefits can I expect from the AI Co-Lab project work?",
          ans: `Learners will work with AI startups and real-time projects that will help them with the following benefits –`,
          open: false,
          list1:
            "Reliable real-world experience in addressing Agentic AI and Generative AI-driven challenges",
          list2: "AI startup certification",
          list3: "Industry-wide recognition of AI skills",
        },
        {
          id: 2,
          ques: "Are there opportunities to work on live industry projects?",
          ans: "Yes. Professionals and entrepreneurs opting for the Applied AI Practitioner program powered by IIT Patna Vishlesan I-Hub Foundation ensure real-time learning. Learners can work on Agentic AI and GenAI-focused projects to address core challenges while collaborating with AI startups. ",
          open: false,
        },
        {
          id: 3,
          ques: "How does Learnbay’s Applied AI project help learners? ",
          ans: "The Applied AI Practitioner program, in alliance with IIT Patna Vishlesan I-Hub Foundation, provides real-time learning experiences. Learners can get hands-on industry exposure, which is useful in addressing real-world AI challenges. Plus, learners can earn AI startup credentials that validate their expertise in handling real-time cases.",
        },
        {
          id: 4,
          ques: "How does Learnbay's project-based preparation with AI Co-Lab help professionals? ",
          ans: "Today’s crucial job interviews and recruiters demand real-time AI expertise to address industry challenges.",

          list1:
            "AI Co-Lab powered project-based preparation at Learnbay helps you build your career as an applied AI engineer.",

          list2:
            "You can add such real-world skills to your resume and answer the interview questions with actual insights.",

          list3:
            "Learners can refine skills on GenAI-driven apps, RAG, automation systems, and agentic workflows.",
        },
        {
          id: 5,
          ques: "What are the AI projects that I will work on?",
          ans: `Anyone enrolling in this course can become a certified AI practitioner with real-world expertise. During the course, you will work on industry-specific projects under the AI CoLab partnership, such as –`,
          list1: "Building AI knowledge assistant systems",
          list2: "Designing an AI content studio without coding ",
          list3: "Build an AI workflow Co-Pilot",
          list4: "Designing and deploying an AI assistant web app",
          list5: "Creating AIOps dashboards ",
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
          ques: "Is certification essential for becoming a certified AI practitioner?",
          ans: "Yes. The modern business landscape demands real-time expertise in AI-driven systems to efficiently address key problems. Certification from AI startups will help professionals strengthen their positions with industry exposure. Learnbay’s applied AI training programs with IIT Patna certification validate your skills, unlocking promising opportunities.",
        },
        {
          id: 1,
          ques: "What certifications will I receive in the Applied AI Practitioner program? ",
          ans: `Professionals enrolling in the AI practitioner certification program will earn two certificates, such as –`,
          list1: "IIT Patna Vishlesan I-Hub Foundation Certificate ",
          list2: "AI Startup Certificate",
        },
        {
          id: 2,
          ques: "Why is the AI Startup certificate important for professionals? ",
          ans: "The applied accelerated artificial intelligence training prepares you for becoming a certified AI practitioner. Earning an AI startup certification validates your real-time expertise in addressing AI-driven problems. It is the proof that you have worked in a real-world AI startup and solved their issues efficiently. ",
        },
      ],
    },
    {
      id: 5,
      sectionName: "Job Assistance",
      data: [
        {
          id: 0,
          ques: "Do you offer career assistance services after course completion?",

          ans: `Yes. Professionals enrolling in our Applied AI training programs can avail themselves of reliable placement services. Here you will get –`,
          list1: "Mock interview sessions",
          list2: "1:1 doubt-clearing ",
          list3: "Resume optimization",
          list4: "Unlimited job calls from top firms",
          open: true,
        },
        {
          id: 1,
          ques: "Who is eligible for the career assistance program at Learnbay? ",
          ans: "Tech/non-tech professionals and entrepreneurs joining the course must achieve at least 70% marks in coursework and projects to get placement assistance. ",
          open: false,
        },
        {
          id: 2,
          ques: "How many interview calls will I get at Learnbay?",
          ans: "Learners pursuing the applied AI practitioner program will get endless interview calls from top-tier 350+ allied partners. ",
          open: false,
        },
      ],
    },
    {
      id: 6,
      sectionName: "Mentorship",
      data: [
        {
          id: 0,
          ques: "Can I reach out to my mentors for doubt-clearing during or after the course? ",

          ans: "Yes. Learners enrolling in the course can reach their mentors for doubt-clearing. The mentors help learners understand AI concepts properly, which will help them handle real-world projects. ",
          open: true,
        },
        {
          id: 1,
          ques: "Do the mentors take live classes or play recorded sessions during the training? ",
          ans: "Learnbay offers 100% live online and hybrid classes where you will learn key concepts and work on projects via AI Co-Lab. ",

          list1:
            "Mentors will offer 100% live instructor-led training sessions to help you grasp proven GenAI and Agentic AI concepts. Even in hybrid training modes, learners will get online sessions from respective mentors during coursework. ",

          list2:
            "However, you have to work on AI projects with AT startups in real-time to enrich your industry exposure. ",
          open: false,
        },
        {
          id: 2,
          ques: "How long can I get the mentorship facility?",
          ans: "Our mentors provide 100% live online training or hybrid sessions until you complete the course. In addition, we offer a 3-year flexi pass to our learners, where they can get uninterrupted mentorship facilities. Our mentorship facility covers training sessions, doubt-clearing, project work, and placements.",
        },
        {
          id: 3,
          ques: "Can professionals choose to study with their desired mentors at Learnbay?",
          ans: "Anyone opting for the Applied AI Practitioner Program, powered by IIT Patna Vishlesan I-Hub Foundation, can choose their desired mentors. In case learners are not satisfied with their mentors, they can ask for a change. ",
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
          ques: "How can I contact technical support if I face any problems with the course platform? ",

          ans: "Once you register for the course, you will get uninterrupted technical assistance to address your queries. You can also reach Learnbay’s service providers to resolve any issues related to login, sessions, projects, chat, or course materials.",
          open: true,
        },

        {
          id: 1,
          ques: "Is there a discussion forum or community for learners to communicate and seek support?",
          ans: "Learners will have access to Learnbay’s customized learning app with detailed information about training sessions, projects at AI Co-Lab, and mentors. Here, learners can discuss their queries related to coursework and projects. ",
          open: false,
        },
        {
          id: 2,
          ques: "How long will I get job referrals?",
          ans: "Learners must qualify themselves to get exciting job referrals. Once you complete the course with the required scores, you will get job referrals from us to get placed as a certified AI practitioner across 350+ industry partners.",
          open: false,
        },
      ],
    },
  ];

  return (
    <main>
      <Head>
        <title>
          Applied AI Practitioner Program | IIT Patna | 35+ AI Tools
        </title>

        <meta
          name="description"
          content="Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now."
        />

        <meta
          name="keywords"
          content="applied AI practitioner program, AI certification, IIT Patna, AI course, generative AI training, no-code AI, LLM course, AI tools, professional AI course, AI practitioner certification"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Applied AI Practitioner Program | IIT Patna | 35+ AI Tools"
        />
        <meta
          property="og:description"
          content="Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now"
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
          content="https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program"
        />
        <meta
          name="twitter:title"
          content="Applied AI Practitioner Program | IIT Patna | 35+ AI Tools"
        />
        <meta
          name="twitter:description"
          content="Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Applied AI Practitioner Program | IIT Patna | 35+ AI Tools"
        />
        <meta
          property="og:description"
          content="Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now"
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
          content="https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program"
        />
        <meta
          name="twitter:title"
          content="Applied AI Practitioner Program | IIT Patna | 35+ AI Tools"
        />
        <meta
          name="twitter:description"
          content="Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now"
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
          href="https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
      "@type": "Course",
      "name": "Applied AI Practitioner Program | IIT Patna | 35+ AI Tools",
      "description": "Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now.",
      "url": "https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program",
      "offers": {
        "@type": "offer",
        "price": "₹ 1,10,000 + 18% GST",
        "pricecurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "No prior coding experience is needed.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P17W",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,10,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]
    }`,
          }}
        />
      </Head>

      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <div style={{ marginTop: "80px" }}>
        <HeroSection />
        <WhyThisProgram />
        <WhoCanApply />
        <HowThisProgramHelpYourDomain />
        <ToolsAndPlatforms />
        <ProgramSyllabus />
        <FinalProjectSection />
        {/* <AiColabExperienceSection /> */}
        <CertificationsSection />
        <StartupCertificateSection />
        <ProgramSnapshotSection />
        {/* <FAQAppliedAINew /> */}
        <FAQ FaqData={faqNewData} />
        <Footer />

        <WhatsappFloat />
      </div>
    </main>
  );
};

export default AppliedAIPractitionerProgram;
