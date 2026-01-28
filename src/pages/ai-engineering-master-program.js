import FAQ from '@/components/AppliedAIPractitionerProgram/FAQs/FAQ';
import HighlightsSection from '@/components/CoursePage/FirstPart/Support_noimage/HighlightsSection';
import GenAIProject from '@/components/CoursePage/genAiProject/GenAIProject';
import BookDemo from '@/components/CoursePage/NewDSA/BookDemo/BookDemo';
import Newheader from '@/components/CoursePage/newHeader/newHeader';
import AlumniCompanies from '@/components/CoursePage/newUICourse/AlumniCompanies';
import LearningToPlacement from '@/components/CoursePage/newUICourse/LearningToPlacementinfinity/LearningToPlacement';
import UpdatedCertificate from '@/components/CoursePage/UpdatedCertificate/UpdatedCertificate';
import BottomBar from '@/components/Global/BottomBar/BottomBar';
import Navbar from '@/components/Global/Navbar/Navbar';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import { parseJSONData } from '@/Util/JsonConvertor';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
const NewSevenSection = dynamic(
  () => import('@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection')
);
const MentorsSection = dynamic(
  () => import('@/components/course/MentorsSection/MentorsSection')
);
const ReviewSlider = dynamic(
  () => import('@/components/Home/newUI/reviewSlider/reviewSlider')
);
const Content = dynamic(
  () => import('@/components/CoursePage/Content/content')
);
const NewDSA = ({ DSADataJson }) => {
  const NewDSAData = parseJSONData(DSADataJson);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI+Engineering+Program_compressed.pdf';

  const faqNewData = [
    {
      id: 0,
      sectionName: 'Course-Related',
      data: [
        {
          id: 0,
          ques: 'What is the duration of the AI Engineering Master Program?',
          ans: 'The program offers around 9 months of an intensive track. Within this time span, it will cover 100+ hours of live instructor-led learning on programming foundations to Agentic AI workflows. Later on, you will get capstone projects and job assistance.',
          open: true,
        },
        {
          id: 1,
          ques: 'Is this a live training Program or recorded sessions?',
          ans: 'Learnbay’s AI Engineering Program is a 100% live instructor-led program. In all the sessions, you get direct interaction with your trainers, who are highly experienced industry experts from top tech companies. This kind of learning scope helps you experience real-time debugging and AI system design.',
          open: false,
        },
        {
          id: 2,
          ques: 'What technical topics are covered in the curriculum?',
          ans: 'Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI automation, and Vector Databases are included in the syllabus, as the key focus is on product-grade AI skills. Alongside the course has MLOps, CI/CD for AI and how to build GenAI microservices modules too.',
          open: false,
        },
        {
          id: 3,
          ques: 'What is the “Flexi Pass” benefit at Learnbay?',
          ans: 'The Flexi Pass is a 3-year complementary subscription that allows you to attend multiple batches and multiple trainers for up to 3 years of time. This offers working professionals an added advantage in flexible learning and managing a proper professional and upskilling time balance.',
          open: false,
        },
      ],
    },
    {
      id: 1,
      sectionName: 'Eligibility and Prerequisites',
      data: [
        {
          id: 0,
          ques: 'Who is the ideal candidate for this AI engineering course?',
          ans: 'This course is custom-built for tech professionals. That means software Developers, Solution Architects, System Admins, and Support Engineers looking to lead the shift into AI Engineering are perfect for this course.',
          open: false,
        },
        {
          id: 1,
          ques: 'Do I need prior experience in AI or Machine Learning?',
          ans: 'A foundation in programming, APIs, and architecture is enough to join this course, while this program is designed to ‘add’ AI skills to your existing technical base. But yes, this AI engineering Master course offers preparatory modules for those needing a refresher on basics.',
          open: false,
        },
        {
          id: 2,
          ques: 'Is there a minimum work experience requirement?',
          ans: 'Yes, the program demands at least 1 year of work experience in the IT industry. Through this course, such IT professionals will be able to upgrade themselves for 2026-ready AI roles.',
          open: false,
        },
        {
          id: 3,
          ques: 'Can I pursue this AI Engineering Program while having a full-time job or from a different time zone?',
          ans: 'IT professionals enrolling for this AI Engineering Training Program can easily balance their work schedules and study goals. They will get the flexibility to choose their batches from multiple timings on both weekdays and weekends.',
          open: false,
        },
        {
          id: 4,
          ques: 'Why should I join Learnbay’s MasterTrack Program?',
          ans: 'If you’re an IT professional, enrolling in our MasterTrack program can be advantageous for you –',
          open: false,
          dscoursefaq1: true,
          list1: '3-Year flexi subscription to upgrade your skills and evolve',
          list2:
            'AI Co-Lab experience in tackling trending AI Engineering projects',
          list3:
            'BYOP+Mentorship to resolve your own issues under a mentor’s guidance',
          list4: 'IBM and Microsoft credentials to validate your AI skills',
        },
      ],
    },
    {
      id: 2,
      sectionName: 'Payments and Scholarships',
      data: [
        {
          id: 0,
          ques: 'What is the fee for the AI Engineering Master Program?',
          ans: 'The AI Engineering Online course for tech professionals costs ₹1,59,000 + 18% GST. This investment includes 9 months of intensive learning, globally recognized certification, and custom-fit career support.',
          open: false,
        },
        {
          id: 1,
          ques: 'Are there any financing or EMI options available?',
          ans: 'Yes, you can opt for an interest-free (no-cost EMI) plan with the necessary documents (Aadhaar card, PAN card, and salary slip). You can check your eligibility with our support team before admission.',
          open: false,
        },
        {
          id: 2,
          ques: 'Does Learnbay offer any scholarships for AI Engineering Master Course?',
          ans: 'Being an early bird, you can avail yourself of a 15% – 20% discount. Additionally, experts can receive up to a 25% scholarship while enrolling in the course. Group discounts include:',
          open: false,
          dscoursefaq1: true,
          list1: 'Group of 2: 5% extra discount',
          list2: 'Group of 3: 8% additional discount',
          list3: 'Group of 4+: Max 10% discount',
        },
        {
          id: 3,
          ques: 'What is the refund policy for the AI Engineering Program at Learnbay?',
          ans: 'Experts joining our course can cancel anytime with a valid reason. For further details, refer to Learnbay’s Refund/Cancellation Policy.',
          open: false,
        },
      ],
    },
    {
      id: 3,
      sectionName: 'Capstone and Real-time Projects',
      data: [
        {
          id: 0,
          ques: 'How many projects can I work on during this course?',
          ans: 'The AI engineering online course by Learnbay includes 100 hours of real-time industrial project work. Most of the focus remains on building and deploying autonomous AI agents and Gen-AI-driven architectures.',
          open: false,
        },
        {
          id: 1,
          ques: 'Can I choose my capstone project, or are projects assigned?',
          ans: 'You can choose projects useful to your domain, career interests, and goals. Additionally, you will work on AI startup projects and can even Bring Your Own Problem (BYOP) to work on.',
          open: false,
        },
      ],
    },
    {
      id: 4,
      sectionName: 'Certifications',
      data: [
        {
          id: 0,
          ques: 'Is there any accredited certification after course completion?',
          ans: 'Yes. Once you complete the course and project tasks, you will receive globally valued IBM and Microsoft Certifications—one Project Experience Certificate and one GenAI/Agentic AI Mastery Certificate.',
          open: false,
        },
        {
          id: 1,
          ques: 'How do I receive my certificate, and is it a digital or printed certificate?',
          ans: 'All eligible learners with at least 70% in course tasks and projects can earn globally recognized certificates. Your digitally available certificates will reach you within 7 days.',
          open: false,
        },
      ],
    },
    {
      id: 5,
      sectionName: 'Job Assistance',
      data: [
        {
          id: 0,
          ques: 'Do you offer job placement services after completing the course?',
          ans: 'Yes. We offer dedicated job assistance services including 1:1 interview prep and CV updating for all eligible learners.',
          open: false,
        },
        {
          id: 1,
          ques: 'How many interview calls will I get at Learnbay?',
          ans: 'Learners from the IT sector joining our AI Engineering Certification online will get unlimited interview calls from our top allied partners.',
          open: false,
        },
        {
          id: 2,
          ques: 'How does Learnbay’s Job Referrals and Career Acceleration Services support my job search?',
          ans: 'Under this feature, you will get:',
          open: false,
          dscoursefaq1: true,
          list1: 'Unlimited job referrals',
          list2: 'Direct access to hiring managers in top MNCs',
          list3: 'ATS-Optimized resume building',
        },
      ],
    },
    {
      id: 6,
      sectionName: 'Mentorships',
      data: [
        {
          id: 0,
          ques: 'Until when will the students get the mentorship facility?',
          ans: 'The learners will get the mentorship until they complete the course. After that, you can still reach out for doubt-clearing, placement support, and project guidance.',
          open: false,
        },
        {
          id: 1,
          ques: 'Can a Learnbay student choose to study with their desired mentor?',
          ans: 'Yes. If a student does not find the assigned mentor fit for training, he/she can request a new mentor to meet their career goals and interests.',
          open: false,
        },
      ],
    },
    {
      id: 7,
      sectionName: 'Support',
      data: [
        {
          id: 0,
          ques: 'How can I contact technical support?',
          ans: 'Once you register, you get 24/7 learner support. You can call our helpline number to resolve any technical issues regarding login, sessions, or course materials.',
          open: false,
        },
        {
          id: 1,
          ques: 'What is the interview preparation process?',
          ans: 'You get 5+ mock interview sessions conducted by top industry experts, focusing on AI system design and Agentic workflow questions.',
          open: false,
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>AI Engineering Master Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Accelerate your tech career with Learnbay’s AI Engineering Master Program. Learn GenAI, Agentic AI, RAG, and production AI through real projects. Join Now."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ai engineering course, ai engineer program, ai engineering master program, ai engineering training program, ai engineering certification program"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/ai-engineering-master-program"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Engineering Master Certification Program - Learnbay"
        />
        <meta
          property="og:description"
          content="Accelerate your tech career with Learnbay’s AI Engineering Master Program. Learn GenAI, Agentic AI, RAG, and production AI through real projects. Join Now."
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
          content="https://www.learnbay.co/ai-engineering-master-program
"
        />
        <meta
          name="twitter:title"
          content="AI Engineering Master Certification Program - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Accelerate your tech career with Learnbay’s AI Engineering Master Program. Learn GenAI, Agentic AI, RAG, and production AI through real projects. Join Now."
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
          href="https://www.learnbay.co/ai-engineering-master-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                        "@context": "http://schema.org",
                    "@type": "Course",
                    "name": "AI Engineering Master Certification Program - Learnbay",
                    "description": "Accelerate your tech career with Learnbay’s AI Engineering Master Program. Learn GenAI, Agentic AI, RAG, and production AI through real projects. Join Now.",
                    "url": "https://www.learnbay.co/ai-engineering-master-program",
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
                    "coursePrerequisites": "This program is suitable for entry to mid-level IT professionals with a minimum of 1 year of work experience. Professionals such as system administrators, solution architects, support engineers, and IT experts are the most welcomed for this certification.",
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
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI+Engineering+Program_compressed.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
          courseId={'ai-engineering-master-program'}
        />
        <AlumniCompanies
          brochureLinks="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI+Engineering+Program_compressed.pdf"
          brochurePdf={pdfUrl}
        />
        <LearningToPlacement time="300" guided="40" />

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
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/AI+Engineering+Program_compressed.pdf"
          brochurePdf={pdfUrl}
          buttonHide={true}
          interstedInHide={true}
          genAIIIT={true}
        />
        <UpdatedCertificate data={NewDSAData[0].Certificate} />

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
  const module = await import('../Data/AIEngineeringMasterProgramData2026');
  const data = module.default;

  const DSADataJson = JSON.stringify(data, (key, value) =>
    value === undefined ? null : value
  );

  return { props: { DSADataJson } };
}
