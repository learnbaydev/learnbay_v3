import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Archivo, Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Global/Navbar/Navbar';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import tokens from '@/components/AppliedAIv2/tokens.module.css';

/* The 2026 redesign sets its own type. These are scoped to this page through
   CSS variables rather than replacing the site-wide Poppins. */
const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

const archivo = Archivo({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

const Hero = dynamic(() => import('@/components/AppliedAIv2/Hero/Hero'));
const Marquee = dynamic(() => import('@/components/AppliedAIv2/Marquee/Marquee'));
const StatBand = dynamic(() => import('@/components/AppliedAIv2/StatBand/StatBand'));
const WhyProgram = dynamic(() => import('@/components/AppliedAIv2/WhyProgram/WhyProgram'));
const WhoCanApply = dynamic(() => import('@/components/AppliedAIv2/WhoCanApply/WhoCanApply'));
const Domains = dynamic(() => import('@/components/AppliedAIv2/Domains/Domains'));
const Tools = dynamic(() => import('@/components/AppliedAIv2/Tools/Tools'));
const Curriculum = dynamic(() => import('@/components/AppliedAIv2/Curriculum/Curriculum'));
const CoLab = dynamic(() => import('@/components/AppliedAIv2/CoLab/CoLab'));
const Capstone = dynamic(() => import('@/components/AppliedAIv2/Capstone/Capstone'));
const Certification = dynamic(() => import('@/components/AppliedAIv2/Certification/Certification'));
const Comparison = dynamic(() => import('@/components/AppliedAIv2/Comparison/Comparison'));
const Reviews = dynamic(() => import('@/components/AppliedAIv2/Reviews/Reviews'));
const FeeCohort = dynamic(() => import('@/components/AppliedAIv2/FeeCohort/FeeCohort'));
const Employers = dynamic(() => import('@/components/AppliedAIv2/Employers/Employers'));
const AdvisorBooking = dynamic(() => import('@/components/AppliedAIv2/AdvisorBooking/AdvisorBooking'));
const Faq = dynamic(() => import('@/components/AppliedAIv2/Faq/Faq'));
const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

const AppliedAIPractitionerProgram = () => {
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
        "price": "₹ 1,20,000 + 18% GST",
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
"name": "Applied AI Practitioner Program",
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
"ratingCount": "1894"
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
    "name": "What is the Applied AI Practitioner Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This AI practitioner certification program is a 4-month, mentor-led program designed to help learners build end-to-end AI products, co-pilots, and automation systems with real-time AI startup collaboration."
    }
  },{
    "@type": "Question",
    "name": "Who is qualified for the Applied AI Practitioner Program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This program applies to both tech and non-tech professionals, leaders, and entrepreneurs. Tech and non-tech professionals with 1 – 10+ years of experience can join the course. In addition, leaders and entrepreneurs with 5 – 10+ years of experience can pursue the course to gain AI expertise."
    }
  },{
    "@type": "Question",
    "name": "Do I need coding experience to join?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. As the program includes low-code and no-code workflows, it is suitable even for non-technical professionals."
    }
  },{
    "@type": "Question",
    "name": "What learning modules are covered in the Applied AI Practitioner Program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The learning modules of this program cover theoretical and practical concepts of AI, empowering learners to build AI products and co-pilots. The course includes 6 terms that start with basic AI reasoning and LLM workflows. Further modules cover GenAI and multimodal AI concepts, agentic AI and automation, app development and deployment, AIOps, and optimization techniques."
    }
  },{
    "@type": "Question",
    "name": "What skills will I gain by the end?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By the end of the course, tech and non-tech professionals and entrepreneurs will learn LLM workflows, content creation via GenAI, agentic  AI automation, no-code app designing, deployment, and AIOps monitoring."
    }
  },{
    "@type": "Question",
    "name": "What tools and technologies will I learn?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By the end of this AI Practitioner course, you will master LLMs, RAG, multimodal GenAI, Power BI, no-code builders, vector stores, API integrations, AIOps tools, automation, and deployment workflows."
    }
  },{
    "@type": "Question",
    "name": "Is this program beginner-friendly?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The Applied AI program starts with fundamental AI reasoning and LLM basics, which gradually move to Agentic AI, AIOps, and automation workflows."
    }
  },{
    "@type": "Question",
    "name": "What are the learning modes at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Applied AI Practitioner Program allows you to have flexible learning without disrupting your job. You can either opt for 100% live online sessions (online coursework and projects) or choose hybrid mode (online coursework but offline projects). However, it's up to the learners to choose the right learning mode."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to complete the Applied AI Practitioner Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Applied AI Practitioner Program is a 4-month live program including weekday and weekend batches. The course duration encompasses coursework, project work (AI Co-Lab), placement assistance, and certifications."
    }
  },{
    "@type": "Question",
    "name": "How long can I have access to the course materials and resources?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in the course can avail themselves of a 3-year flexible subscription at Learnbay. It allows you to have unlimited access to learning materials and resources. In short, you can learn at your own pace until you land your dream job."
    }
  },{
    "@type": "Question",
    "name": "Why is the Applied AI Practitioner Program different from others?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Applied AI Practitioner program sets your career apart from others by equipping you with the following benefits –\\n\\nBuild real-world AI projects\\nWork with AI startups \\nMaster no-code deployments, machine learning, AIOps, and automation\\nEarn global certifications in collaboration with IIT Patna Vishlesan I-Hub Foundation"
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Domain specialization justifies a practice of gaining field expertise as per the learner’s core subject or area of career interest. Domain-focused learning allows learners to gain in-depth awareness of core fields and expand their existing knowledge. Domain awareness helps learners to address crucial business challenges with AI-specific solutions."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The AI practitioner certification program aims to enhance domain awareness to address real-world business problems across diverse fields. The available domains are – \\n\\nSales and Marketing\\nBFSI\\nHealthcare & Life Sciences\\nManufacturing & Supply Chain\\nSoftware Development Professionals\\nProduct Management Professionals"
    }
  },{
    "@type": "Question",
    "name": "Can I devise AI automation solutions for my own domain?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. professionals from diverse domains can pursue this applied accelerated artificial intelligence program to build AI-driven solutions. Plus, business leaders and entrepreneurs can also master proven ways to utilize AI for fulfilling evolving goals."
    }
  },{
    "@type": "Question",
    "name": "What is the course fee for the Applied AI Practitioner program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Course fees are 1,20,000 (excluding GST)."
    }
  },{
    "@type": "Question",
    "name": "What financing options are available for the AI Practitioner Certification Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "3, 6, and 9-month easy EMI plans are available."
    }
  },{
    "@type": "Question",
    "name": "What is AI Co-Lab at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AI co-lab is an open learning platform where learners work on GenAI and Agentic AI-specific projects in real-time. Learners co-create and collaborate with AI startups to address real-world business problems in diverse domains."
    }
  },{
    "@type": "Question",
    "name": "What benefits can I expect from the AI Co-Lab project work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners will work with AI startups and real-time projects that will help them with the following benefits –\\n\\nReliable real-world experience in addressing Agentic AI and Generative AI-driven challenges\\nAI startup certification\\nIndustry-wide recognition of AI skills"
    }
  },{
    "@type": "Question",
    "name": "Are there opportunities to work on live industry projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Professionals and entrepreneurs opting for the Applied AI Practitioner program powered by IIT Patna Vishlesan I-Hub Foundation ensure real-time learning. Learners can work on Agentic AI and GenAI-focused projects to address core challenges while collaborating with AI startups."
    }
  },{
    "@type": "Question",
    "name": "How does Learnbay’s Applied AI project help learners?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Applied AI Practitioner program, in alliance with IIT Patna Vishlesan I-Hub Foundation, provides real-time learning experiences. Learners can get hands-on industry exposure, which is useful in addressing real-world AI challenges. Plus, learners can earn AI startup credentials that validate their expertise in handling real-time cases."
    }
  },{
    "@type": "Question",
    "name": "How does Learnbay's project-based preparation with AI Co-Lab help professionals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Today’s crucial job interviews and recruiters demand real-time AI expertise to address industry challenges. \\n\\nAI Co-Lab powered project-based preparation at Learnbay helps you build your career as an applied AI engineer. You can add such real-world skills to your resume and answer the interview questions with actual insights. \\n\\nLearners can refine skills on GenAI-driven apps, RAG, automation systems, and agentic workflows."
    }
  },{
    "@type": "Question",
    "name": "What are the AI projects that I will work on?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Anyone enrolling in this course can become a certified AI practitioner with real-world expertise. During the course, you will work on industry-specific projects under the AI CoLab partnership, such as –\\n\\nBuilding AI knowledge assistant systems\\nDesigning an AI content studio without coding \\nBuild an AI workflow Co-Pilot\\nDesigning and deploying an AI assistant web app\\nCreating AIOps dashboards"
    }
  },{
    "@type": "Question",
    "name": "Is certification essential for becoming a certified AI practitioner?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The modern business landscape demands real-time expertise in AI-driven systems to efficiently address key problems. Certification from AI startups will help professionals strengthen their positions with industry exposure. Learnbay’s applied AI training programs with IIT Patna certification validate your skills, unlocking promising opportunities."
    }
  },{
    "@type": "Question",
    "name": "What certifications will I receive in the Applied AI Practitioner program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Professionals enrolling in the AI practitioner certification program will earn two certificates, such as –\\n\\nIIT Patna Vishlesan I-Hub Foundation Certificate \\nIBM certification\\nAI Startup Certificate"
    }
  },{
    "@type": "Question",
    "name": "Why is the AI Startup certificate important for professionals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The applied accelerated artificial intelligence training prepares you for becoming a certified AI practitioner. Earning an AI startup certification validates your real-time expertise in addressing AI-driven problems. It is the proof that you have worked in a real-world AI startup and solved their issues efficiently."
    }
  },{
    "@type": "Question",
    "name": "Do you offer career assistance services after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Professionals enrolling in our Applied AI training programs can avail themselves of reliable placement services. Here you will get –\\n\\nMock interview sessions\\n1:1 doubt-clearing \\nResume optimization\\nUnlimited job calls from top firms"
    }
  },{
    "@type": "Question",
    "name": "Who is eligible for the career assistance program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tech/non-tech professionals and entrepreneurs joining the course must achieve at least 70% marks in coursework and projects to get placement assistance."
    }
  },{
    "@type": "Question",
    "name": "How many interview calls will I get at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners pursuing the applied AI practitioner program will get endless interview calls from top-tier 350+ allied partners."
    }
  },{
    "@type": "Question",
    "name": "Can I reach out to my mentors for doubt-clearing during or after the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Learners enrolling in the course can reach their mentors for doubt-clearing. The mentors help learners understand AI concepts properly, which will help them handle real-world projects."
    }
  },{
    "@type": "Question",
    "name": "Do the mentors take live classes or play recorded sessions during the training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers 100% live online and hybrid classes where you will learn key concepts and work on projects via AI Co-Lab. \\n\\nMentors will offer 100% live instructor-led training sessions to help you grasp proven GenAI and Agentic AI concepts. Even in hybrid training modes, learners will get online sessions from respective mentors during coursework. \\n\\nHowever, you have to work on AI projects with AT startups in real-time to enrich your industry exposure."
    }
  },{
    "@type": "Question",
    "name": "How long can I get the mentorship facility?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors provide 100% live online training or hybrid sessions until you complete the course. In addition, we offer a 3-year flexi pass to our learners, where they can get uninterrupted mentorship facilities. Our mentorship facility covers training sessions, doubt-clearing, project work, and placements."
    }
  },{
    "@type": "Question",
    "name": "Can professionals choose to study with their desired mentors at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Anyone opting for the Applied AI Practitioner Program, powered by IIT Patna Vishlesan I-Hub Foundation, can choose their desired mentors. In case learners are not satisfied with their mentors, they can ask for a change."
    }
  },{
    "@type": "Question",
    "name": "How can I contact technical support if I face any problems with the course platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Once you register for the course, you will get uninterrupted technical assistance to address your queries. You can also reach Learnbay’s service providers to resolve any issues related to login, sessions, projects, chat, or course materials."
    }
  },{
    "@type": "Question",
    "name": "Is there a discussion forum or community for learners to communicate and seek support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners will have access to Learnbay’s customized learning app with detailed information about training sessions, projects at AI Co-Lab, and mentors. Here, learners can discuss their queries related to coursework and projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get job referrals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners must qualify themselves to get exciting job referrals. Once you complete the course with the required scores, you will get job referrals from us to get placed as a certified AI practitioner across 350+ industry partners."
    }
  }]

            }`,
          }}
        />
      </Head>

      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />

      <div
        className={`${tokens.page} ${jakarta.variable} ${instrumentSerif.variable} ${archivo.variable}`}
        style={{ marginTop: '80px' }}
      >
        <Hero />
        <Marquee />
        <StatBand />
        <WhyProgram />
        <WhoCanApply />
        <Domains />
        <Tools />
        <Curriculum />
        <CoLab />
        <Capstone />
        <Certification />
        <Comparison />
        <Reviews />
        <FeeCohort />
        <Employers />
        <AdvisorBooking />
        <Faq />
        <Footer />
        <WhatsappFloat />
      </div>
    </main>
  );
};

export default AppliedAIPractitionerProgram;
