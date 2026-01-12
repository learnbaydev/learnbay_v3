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
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+and+Agentic+AI+Program+(3)_compressed.pdf";

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
          ques: "Can I do a GenAI & Agentic AI Program at Learnbay?",
          ans: "Anyone willing to pursue the GenAI & Agentic AI program at Learnbay must fulfill the following criteria –",
          open: true,
          list1: "Freshers eager to explore AI developments",
          list2: "Working professionals willing to learn & grow",
          list3:
            "Non-technical professionals using AI tools for diverse functions",
          list4: "Developers moving to AI-driven systems",
          list5:
            "Professionals from diverse roles (product/operations/business)",
        },
        {
          id: 1,
          ques: "Can I pursue a Generative AI course while having a full-time job or from a different time zone?",
          ans: "Yes. Aspirants can enroll in a Generative AI course online with a full-time job or from a different time zone. This course offers 100% live online sessions, allowing you to balance your learning goals with job duties. Experts can choose and plan their batches for weekday or weekend sessions.",
          open: false,
        },
        {
          id: 2,
          ques: "Are there any hands-on labs or practical tasks in the course modules?",
          ans: "Yes. The GenAI & Agentic AI program focuses on project-based learning. Here, you will work on real-time AI projects to tackle GenAI and Agentic AI challenges and gain insights.",
          open: false,
        },
        {
          id: 3,
          ques: "Is a Gen AI course worth it?",
          ans: "Pursuing a GenAI & Agentic AI course is a notable career investment. Learners can develop AI-first thinking skills to tackle automated workflows and seamlessly operate with LLMOps. This course enables you to gain GenAI fundamentals and master Agentic AI models to reshape your career path.",
          open: false,
        },
        {
          id: 4,
          ques: "What is the duration of the GenAI & Agentic AI Program?",
          ans: "The course duration is 5 months, including coursework and live projects.",
          open: false,
        },
        {
          id: 5,
          ques: "What are the unique career perks delivered through a GenAI & Agentic AI program?",
          ans: "Learners joining our Data Science and Generative AI course online will receive proven career benefits. Apart from this, you will receive extra benefits like –",
          open: false,
          list1: "3-year flexi subscription",
          list2: "BYOP+Mentorship",
          list3: "AI CoLab experience",
          list4: "IBM Generative AI certification",
          list5: "Career Services Pro (100% placement support)",
        },
      ],
    },
    {
      id: 1,
      sectionName: "Payments and Scholarships",
      data: [
        {
          id: 0,
          ques: "What is the cost of the GenAI & Agentic AI course online?",
          ans: "This course costs ₹1,20,000 + 18% GST.",
          open: true,
        },
        {
          id: 1,
          ques: "Can I pay in installments for the Generative AI & Agentic AI Course?",
          ans: "You can pay course fees in installments under a no-cost EMI option in 6, 9, or 12 months. You can also opt for interest-free loans, credit cards, or UPI with the necessary documents (Aadhaar card, PAN card, and salary slip).",
          open: false,
        },
        {
          id: 2,
          ques: "Is there any scholarship/discount available for the Gen AI course online?",
          ans: "The GenAI and Agentic AI Course offers a 15% – 20% discount for early birds. We also offer group discounts as per the following terms and conditions:",
          open: false,
          list1: "Group of 2: 5% extra discount",
          list2: "Group of 3: 8% additional discount",
          list3: "Group of 4+: Max 10% discount",
          note: "Apart from discounts, experts can receive up to a 25% scholarship while enrolling. Contact us at +91 7795687988 for further details.",
        },
        {
          id: 3,
          ques: "What is the refund policy for the GenAI & Agentic AI Program at Learnbay?",
          ans: "You can cancel the course anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy.",
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
          ques: "How many live projects will there be?",
          ans: "The GenAI course includes 17+ live projects to refine domain knowledge.",
          open: true,
        },
        {
          id: 1,
          ques: "Are there opportunities to work on real industry projects?",
          ans: "Yes. Aspirants can work on real-time enterprise-grade AI projects to tackle real-world problems with GenAI solutions. Additionally, throughout the program tenure, learners will work on various live projects to sharpen their expertise.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I choose my capstone project, or are projects assigned?",
          ans: "Once you enroll in the Gen AI program, you can choose projects best suited to your career roles, interests, and goals. Learners will also work on various projects under the mentorship of industry experts.",
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
          ans: "Yes. Learners can accelerate their career growth with industry-recognized Generative AI certifications from IBM and validate their industrial expertise.",
          open: true,
        },
        {
          id: 1,
          ques: "How do I receive my certificate, and is it a digital or printed certificate?",
          ans: "All eligible learners with scores of at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days.",
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
          ans: "Learners enrolling in this course must complete the tasks and projects with a minimum score of 70%. Then they are eligible for Career Services Pro benefits at Learnbay with exciting options.",
          open: true,
        },
        {
          id: 1,
          ques: "How many interview calls will I get at Learnbay?",
          ans: "Aspirants joining our GenAI course online will get unlimited interview calls from top-trending allied partners.",
          open: false,
        },
        {
          id: 2,
          ques: "Can I opt for the Career Services Pro feature?",
          ans: "Anyone with a minimum score of 70% in course tasks and projects is eligible for the Career Services PRO feature. Under this feature, you will get –",
          open: false,
          list1:
            "1:1 career-focused mock interviews with 350+ industry partners",
          list2: "Resume help",
          list3: "Promising job referrals from top-ranked MNCs",
        },
        {
          id: 3,
          ques: "Do you offer job assistance services after course completion?",
          ans: "Yes. We offer 100% job assistance services to learners opting for a Gen AI course online via our career services pro feature. The program supports learners with premium career-enrich perks – from 1:1 interview prep to CV updates.",
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
          ans: "Learners will get mentorship until they complete the course. After completing the course tasks and projects, you can reach out to your mentors for doubt-clearing, career assistance, and project guidance.",
          open: true,
        },
        {
          id: 1,
          ques: "Can a Learnbay student choose to study with their desired mentor?",
          ans: "Learnbay has a team of reliable mentors with relevant industry experience. If a student does not find the mentor fit for training, he/she can request a new mentor. Learnbay supports quality upskilling; hence, students can change their mentors and study from the ones they desire.",
          open: false,
        },
        {
          id: 2,
          ques: "Are mentors available for one-on-one or group sessions?",
          ans: "Yes. Our reliable mentors are available for a 1:1 session for live training, doubt-clearing, and project queries.",
          open: false,
        },
        {
          id: 3,
          ques: "Are there mentors available to help with coursework and projects?",
          ans: "Learners enrolling in the Gen AI program get the scope of learning from industry experts. These mentors are liable for guiding each learner with course tasks and real-time projects at AI CoLab.",
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
          ans: "Once you register for the course, you will get 24×7 learner support that resolves any learning queries. You can call our helpline number to reach the desired service providers who can help you with any technical issues.",
          open: true,
        },
        {
          id: 1,
          ques: "Is there a discussion forum or community for learners to communicate and seek support?",
          ans: "Learners will get a custom-fit Learnbay app with a list of learners and their mentors. They can directly reach out to their mentors to resolve queries and discuss doubts with peers.",
          open: false,
        },
        {
          id: 2,
          ques: "How long will I get job referrals?",
          ans: "You will get promising job referrals from us for 3 years.",
          open: false,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Gen AI and Agentic AI Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Advance your career with Learnbay's GenAI & Agentic AI program. Get live classes, IBM certification and projects to learn LLMs, AI agents and real-world AI.
"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="genai and agentic ai program,
genai certification course,
agentic ai training program,
genai and agentic ai certification


"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/genai-agentic-ai-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gen AI and Agentic AI Certification Program - Learnaby"
        />
        <meta
          property="og:description"
          content="Advance your career with Learnbay's GenAI & Agentic AI program. Get live classes, IBM certification and projects to learn LLMs, AI agents and real-world AI."
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
          content="https://www.learnbay.co/genai-agentic-ai-program"
        />
        <meta
          name="twitter:title"
          content="Gen AI and Agentic AI Certification Program - Learnaby"
        />
        <meta
          name="twitter:description"
          content="Advance your career with Learnbay's GenAI & Agentic AI program. Get live classes, IBM certification and projects to learn LLMs, AI agents and real-world AI."
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
          href="https://www.learnbay.co/genai-agentic-ai-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
     
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Gen AI and Agentic AI Certification Program - Learnaby",
  "description": "Advance your career with Learnbay's GenAI & Agentic AI program. Get live classes, IBM certification and projects to learn LLMs, AI agents and real-world AI.",
  "url": "https://www.learnbay.co/genai-agentic-ai-program",
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
            __html: JSON.stringify(MasterAI),
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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+and+Agentic+AI+Program+(3)_compressed.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/GenAI+and+Agentic+AI+Program+(3)_compressed.pdf"
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/GenAI-Developer-Program.pdf"
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
  const module = await import("../Data/GenAIandAgenticAIProgramData2025");
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
