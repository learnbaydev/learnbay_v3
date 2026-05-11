import { parseJSONData } from '@/Util/JsonConvertor';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import FirstPart from '@/components/MastersCourse/PagePart/FirstPart';
const SecondPart = dynamic(
  () => import('@/components/MastersCourse/PagePart/SecondPart')
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>Master’s in Data Science & AI Course - Learnbay</title>
        <meta
          name="description"
          content="Advance with Learnbay’s Master's in Data Science & AI. Gain industry-ready skills and succeed in a data-driven world. Join today."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="masters in data science and ai, masters in data science, data science masters programs, best data science masters programs, data science master degree          "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Master’s in Data Science & AI Course - Learnbay"
        />
        <meta
          property="og:description"
          content="Advance with Learnbay’s Master's in Data Science & AI. Gain industry-ready skills and succeed in a data-driven world. Join today."
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
          content="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />
        <meta
          name="twitter:title"
          content="Advance Your Career with a Master's in Data Science and AI - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Elevate your career with Learnbay's Master's in Data Science and AI program. Gain the skills you need to succeed in today's data-driven world. Enroll now!"
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
          href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "http://schema.org",
  "@type": "Course",
  "name": "Master's Degree in CS: Data Science and Generative AI",
  "description": "Advance with Learnbay’s Master's in Data Science & AI. Gain industry-ready skills and succeed in a data-driven world. Join today.",
  "provider": {
    "@type": "Organization",
    "name": "Learnbay"
  },
  "about": [
    "Data Science and Analytics",
    "AI & Machine Learning"
  ],
  "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
  "offers": {
    "@type": "Offer",
    "price": 325000,
    "priceCurrency": "INR",
    "category": "Educational"
  },
  "coursePrerequisites": "Bachelor's degree in Computer Science or related field",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "P18M",
    "location": {
      "@type": "VirtualLocation",
      "name": "Online"
    }
  },
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
}`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
"@context": "https://schema.org/",
"@type": "Product",
"name": "Master of Science in Computer Science with a Specialisation Certificate in
Data Science and AI",
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
"ratingCount": "1863"
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
      "name": "Can I do a Master's in artificial intelligence and data science?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, anyone with a bachelor's degree in any domain can pursue a master's in Data Science and AI for a successful career transition. Working professionals with a good academic record and basic knowledge of statistics/mathematics can opt for this master's program."
      }
    },
    {
      "@type": "Question",
      "name": "What Career Can You Have with an MS in Artificial Intelligence & Data Science Degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A master’s degree in Data Science unlocks career opportunities in various industries and many domains. Some promising career roles are Data Scientist or Data Engineer, AI Research Scientist, Business Intelligence Analyst, MLOPs Engineer, Product analytics, Data Analyst, Natural Language Processing (NLP) Engineer."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue this degree while working full-time or from a different time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 2 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hands-on labs or practical exercises in the course curriculum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners need to go through practical sessions along with theoretical ones. The course curriculum has practical exercises for each module and learners need to complete the tasks within the given time by their mentors. Plus, each specialization module has 3 capstone projects for hands-on learning across offline experience centers. The projects are kind of simulated ones."
      }
    },
    {
      "@type": "Question",
      "name": "Is a master's in data science worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A master’s in data science and AI is worthy enough to support career transitions for working pros. Learners in any discipline can opt for this course if eager to expand their skills, earning potential, and job options. It provides a chance to redefine your skill sets and career at a global level."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for different specializations in data science and AI master's degrees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you enroll in a master’s in Data Science and AI program, you will have the scope to choose any specialization you wish. This program has two specialization options. Specialization 1, Data Science and Analytics (12 months), Specialization 2, Artificial Intelligence & ML (12 months)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Duration of a Data Science and AI Master's degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Data Science and AI Master’s Degree comes with a duration of 18 months (part-time program). During the course sessions, a learner will get the benefits like – Live-interactive training sessions, Coursework, Project activities."
      }
    },
    {
      "@type": "Question",
      "name": "What are the additional benefits provided in this master's degree program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This master’s degree program in Data Science and AI has everything that helps professionals rebuild their careers worldwide. Apart from an industry-driven course curriculum, this program offers extra benefits like – An accredited master’s degree from Woolf, Globally recognized and equivalent to a master’s degree in the US, Canada, Europe, and 60+ Western countries, Dual certification (IBM & Microsoft), Immigration Opportunities, MNC/MAANG experts as mentors, Career Service Pro (100% placement support)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of the data science and AI master's degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The data science and AI master’s degree costs ₹3,25,000 + 18% GST"
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay in installments for the Data Science and AI master's degree Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay offers flexible financing options for learners to have constant upskilling. You can pay INR 21,306/month in installments under a no-cost EMI option within 18 months. You can also opt for interest-free loans with the necessary documents (Aadhar card, PAN card, & salary slip)."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any scholarship/discount available for the Data Science and AI master's degree Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A group discount is available for the learners who join with one or more friends. Group of 2: 5% extra discount, Group of 3: 8% additional discount, Group of 4+: Max 10% discount. For further details, you can check with our sales team at +91 7795687988"
      }
    },
    {
      "@type": "Question",
      "name": "What is the refund policy for the Master's degree program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before enrolling on the Master’s degree program at Learnbay, Learners are advised to go through its Refund/Cancellation Policy."
      }
    },
    {
      "@type": "Question",
      "name": "How many capstone projects will be there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Data Science and AI master’s course includes two specializations and learners can opt for any one. Each specialization module has 3 capstone projects. In short, learners will have to work on 3 capstone projects as per their domain electives."
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, learners get the chance to work on real industry projects and gain hands-on experience for better exposure to business challenges. Learnbay offers an open learning platform that supports real-time skills upgrades."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my own project for the capstone or are projects assigned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you enroll in the master’s program, you can choose your domain. Learners opting for the master’s degree program can choose their projects as per their domain specialization. Learners go through group project work under the guidance of industry experts/mentors."
      }
    },
    {
      "@type": "Question",
      "name": "Is the degree globally recognized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Your master’s degree from Learnbay, awarded through Woolf, is a globally recognized master’s degree that opens doors to international opportunities across Europe, the US, Canada and other markets. The degree holds strong credibility among global employers, giving learners a competitive edge in the global job market."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Learnbay offers an accredited dual certification once you complete the course. Along with a reputed degree, learners get a project experience certificate from IBM & course completion certificates from IBM & Microsoft."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the eligibility for a job assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling in this master’s program must complete the course with a minimum of 70% marks. Learners must complete all their practical tasks, assessments, and projects to get the job assistance program benefits. Then they are eligible for a job assistance program at Learnbay, that offers the scope of getting placed across one of the 300+ leading MNCs & unicorn startups."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For this master’s program, learners will get Job-readiness with interview support from MNCs/MAANG worldwide. Based on their domain specialization, learners will get interview calls and if found suitable, can apply for further processes."
      }
    },
    {
      "@type": "Question",
      "name": "Can I opt for the Career Service Pro feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners, who successfully complete the course (training, tasks, and projects) with a minimum of 70% marks are eligible for the Career Service Pro feature. Under this feature, they will get- 3 years of Job and Placement help, 6 Mock Interviews with Industry Experts, 1:1 Review Session, Job-readiness with interview support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer job placement or job assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Learnbay offers 100% job assistance services to learners opting for a master’s program. Learners get a career service pro package after course completion. The program supports learners with 100% job assistance with resume preparation and job calls."
      }
    },
    {
      "@type": "Question",
      "name": "Until when will the Learnbay students get the facility of mentorship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The learners will get the facility of mentorship till they complete the course. After completion of the program, learners can reach their mentors for doubt-clearing, job assistance, and live project guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Learnbay student choose to study from their desired mentor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After enrolling each study at Learnbay is assigned a mentor. In case, a student does not find the mentor suitable for training, then he/she can request a new mentor. Learnbay supports quality upskilling hence, students are free to change their mentors and study from the desired ones."
      }
    },
    {
      "@type": "Question",
      "name": "Are mentors available for one-on-one sessions or group sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, mentors are available for one-on-one sessions or group sessions in respective projects or courses. If a learner opts for a 1:1 session for course training, doubt-clearing, or project queries, mentors are available for them."
      }
    },
    {
      "@type": "Question",
      "name": "Are there mentors available to help with coursework and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners enrolling for this course get the scope of learning under dedicated mentorship. These mentors are responsible for helping each learner with coursework and projects. So, yes, you will get uninterrupted help from your mentor while working on fresh capstone projects and course modules."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reach out for technical support if I encounter any issues with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After registering with the course, you will get 24x7 learner support that resolves any query from your side. You can call the helpline number to reach the desired service providers to help you out with any technical issues (login, sessions, projects, chat, or course materials) with the course platform."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for students to interact and seek help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will get a customized Learnbay application where batch-wise students are added along with their mentors. They can directly reach out to their mentors to resolve queries in case of need and also discuss doubts with peers."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get Job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are eligible to avail of job referrals once you successfully complete your course. Under the Career Service Pro package, a learner is entitled to get 3 years of continuous job referrals to get placed across 300+ leading MNCs & unicorn startups."
      }
    }
  ]


            }`,
          }}
        />
      </Head>
      <main>
        <FirstPart
          WolfLink={true}
          formbtn={true}
          TestimonialData={
            DataScienceCourseData.DataScienceMastersinCS[0].testimonial
          }
          courseId={'masters-cs-ds-genai'}
        />
        <SecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DataScienceMastersinCS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DataScienceMastersinCS[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DataScienceMastersinCS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceMastersinCS[0].faq}
        />

        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import('../../Data/DataScienceAiMastersinCS');
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
