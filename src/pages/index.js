import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';

// Dynamic imports
import FirstSection from '@/components/Home/FirstSection/FirstSection';
import HeroSection from '../components/homeNew/HeroSecation/HeroSection';
import PartnersSlider from '@/components/homeNew/PartnerSlides/Partner';
import ProgramSection from '@/components/homeNew/ProgramSection/ProgramSection';
import TabsCard from '@/components/homeNew/TabsCard/TabsCard';
import NewUpSkill from '@/components/homeNew/newUpskill/NewUpSkill';
import RealWorld from '@/components/homeNew/RealWorld/RealWorld';
// import HandsOn from "@/components/HomeNew/HandsOn/HandsOn";
// import RealPeople from "@/components/HomeNew/RealPeople/RealPeople";
const BottomBar = dynamic(
  () => import('@/components/Global/BottomBar/BottomBar')
);
const WhatsappFloat = dynamic(
  () => import('@/components/Global/WhatappsFloat/WhatsappFloat')
);
const Media = dynamic(() => import('@/components/Home/Media/Media'));
const MobileTestimonial = dynamic(
  () => import('@/components/Home/MobileTestimonial/MobileTestimonial')
);
const Navbar = dynamic(() => import('@/components/Global/Navbar/Navbar'));
const InfinityLogo = dynamic(
  () => import('@/components/Home/newUI/InfinityLogo/InfinityLogo')
);
const KickStart = dynamic(
  () => import('@/components/Home/newUI/KickStartSection/KickStart')
);
const NewCourse = dynamic(
  () => import('@/components/Home/newUI/NewCourse/NewCourse')
);
const ReviewSlider = dynamic(
  () => import('@/components/Home/newUI/reviewSlider/reviewSlider')
);
const CLogo = dynamic(() => import('@/components/Home/newUI/Compnays/CLogo'));
const Other = dynamic(() => import('@/components/Home/newUI/OtherVS/Other'));
const NewSevenSection = dynamic(
  () => import('@/components/Home/newUI/SeventhSectionNew/NewSevenSection')
);
const AnimationNew = dynamic(
  () => import('@/components/Home/whyChooseSection/AnimationNew')
);
const LearningToPlacement = dynamic(
  () =>
    import('@/components/CoursePage/newUICourse/LearningToPlacementhome/LearningToPlacementhome')
);

const ContactUs = dynamic(
  () => import('@/components/Home/newUI/ContactUs/ContactUs')
);
const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

export default function Home() {
  const data = [
    {
      id: 1,
      domain:
        'Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp',
      SDesc: '12th JULY',
      url: 'https://www.financialexpress.com/education-2/learnbay-goes-offline-with-brick-and-mortar-centres-ends-fy22-with-a-net-profit-of-rs-3-2-crore/2590829/',
    },
    {
      id: 2,
      domain: 'How data science can disrupt the fintech industry?',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/dataquest.webp',
      SDesc: '13th January',
      url: 'https://www.dqindia.com/how-data-science-can-disrupt-the-fintech-industry/',
    },
    {
      id: 3,
      domain:
        'Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/PM-Logo.webp',
      SDesc: '2and August',
      url: 'https://thepeoplemanagement.com/the-future-of-hr-will-be-defined-by-a-blended-workforce-nisha-kumari-md-learnbay/',
    },
    {
      id: 4,
      domain:
        'Learnbay introduces domain specialisation programme for sustainable career transition',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp',
      SDesc: '1st August',
      url: 'https://www.financialexpress.com/jobs-career/education-learnbay-introduces-domain-specialisation-programme-for-sustainable-career-transition-2613104/',
    },
    {
      id: 5,
      domain: 'Metaverse in Education: A New Mainstay or a Passing Trend??',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/express+computer.webp',
      SDesc: '21st August',
      url: 'https://www.expresscomputer.in/artificial-intelligence-ai/metaverse-in-education-a-new-mainstay-or-a-passing-trend/102446/',
    },
    {
      id: 6,
      domain:
        'Augmented Intelligence: How Humans and Machines Team Up in Future Data Science',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/CXO+today.webp',
      SDesc: '25th September',
      url: 'https://cxotoday.com/specials/augmented-intelligence-how-humans-and-machines-team-up-in-future-data-science/',
    },

    {
      id: 7,
      domain: 'The Rising Horizon: Data Science and AI in the EdTech 2.0 Era',
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/mt-Logo.webp',
      SDesc: '25th May',
      url: 'https://www.manufacturingtodayindia.com/sectors/smart-manufacturing-roles-for-data-professionals',
    },
    {
      id: 8,
      domain:
        "Learnbay Collaborates with Woolf to Launch Master's Degree in Computer Science & Data Science Specializations",
      CLogo:
        'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp',
      SDesc: '20th November',
      url: 'https://www.business-standard.com/content/press-releases-ani/learnbay-collaborates-with-woolf-to-launch-master-s-degree-in-computer-science-data-science-specializations-123112000350_1.html',
    },
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta
          name="description"
          content="Achieve your professional goals with Learnbay's IBM, Microsoft, and IIT-certified Data Science, Gen AI & Agentic AI courses. Enroll now."
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="Learnbay Training Institute, Learnbay Data Science, Best Training Institute, Classroom Training, online Training, best institute for cloud computing, best online learning platform for technology, best it training institute, best institute for data analyst course, best institute for data science course"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        {!isMobile && (
          <link
            rel="preload"
            href="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mbl_home_two.webp"
            as="image"
          />
        )}
        {!isMobile && (
          <link
            rel="preload"
            href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.webp"
            as="image"
          />
        )}

        <meta property="og:url" content="https://www.learnbay.co" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online IT Certification Courses and Professional Programs"
        />
        <meta
          property="og:description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta property="twitter:url" content="https://www.learnbay.co" />
        <meta
          name="twitter:title"
          content="Online IT Certification Courses and Professional Programs"
        />
        <meta
          name="twitter:description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Course List",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Advanced Data Science & GenAI Master Program",
        "description": "Enhance your career with Learnbay's Data Science & GenAI Master Certification. Develop your skills through live training, hands-on projects, and more. Join now!",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "Advanced Data Science & GenAI Master Certification",
        "url": "https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program",
        "offers": {
          "@type": "Offer",
          "price": "159000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program",
          "category": "Data Science & GenAI"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "AI-Powered Cloud & DevOps Master Program",
        "description": "Advance your career with Learnbay’s AI-Powered Cloud DevOps Master Certification Program. Attend live classes, projects, and multi-cloud training. Enrol now!",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "AI-Powered Cloud & DevOps Master Certification",
        "url": "https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification",
        "offers": {
          "@type": "Offer",
          "price": "159000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/cloud&devops/cloud-and-devops-for-system-administrators-master-certification",
          "category": "Cloud & DevOps"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "GenAI & AgenticAI for Cloud & DevOps",
        "description": "Become an AI-ready Cloud & DevOps engineer with Learnbay’s GenAI & Agentic AI program. Learn LLMs, agents, & build AI-powered CICD & ops workflows. Apply now.",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "GenAI & AgenticAI for Cloud & DevOps Certification",
        "url": "https://www.learnbay.co/genai-agentic-ai-for-cloud-devops",
        "offers": {
          "@type": "Offer",
          "price": "120000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/genai-agentic-ai-for-cloud-devops",
          "category": "GenAI & Agentic AI"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "AI Engineering Master Program",
        "description": "Accelerate your tech career with Learnbay’s AI Engineering Master Program. Learn GenAI, Agentic AI, RAG, and production AI through real projects. Join Now.",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "AI Engineering Master Certification",
        "url": "https://www.learnbay.co/ai-engineering-master-program",
        "offers": {
          "@type": "Offer",
          "price": "159000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/ai-engineering-master-program",
          "category": "Software Developer Program"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "GenAI & Agentic AI Master Program",
        "description": "Advance your career with Learnbay’s GenAI & Agentic AI Master Program for Working Professionals. Build AI agents, RAG, & LLMOps projects with career support.",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "GenAI & Agentic AI Master Certification",
        "url": "https://www.learnbay.co/genai-and-agentic-ai-master-program",
        "offers": {
          "@type": "Offer",
          "price": "159000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/genai-and-agentic-ai-master-program",
          "category": "GenAI & Agentic AI "
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
{
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "name": "SDE Master Program With GenAI & Agentic AI",
        "description": "Master GenAI, Agentic AI, DSA & system design to crack top SDE roles. Build real-world AI projects and become industry-ready. Enroll now!",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "SDE Master Certification With GenAI & Agentic AI",
        "url": "https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai",
        "offers": {
          "@type": "Offer",
          "price": "159000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/artificial-intelligence/sde-master-program-genai-agentic-ai",
          "category": "Software Developer Program"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Course",
        "name": "Applied AI Practitioner Program",
        "description": "Master 35+ AI tools with IIT Patna certification. 4-month applied AI practitioner program for professionals. Real startup projects, no coding required. Enroll now.",
        "provider": {
          "@type": "Organization",
          "name": "Learnbay",
          "sameAs": "https://www.learnbay.co"
        },
        "educationalCredentialAwarded": "Applied AI Practitioner Certification",
        "url": "https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program",
        "offers": {
          "@type": "Offer",
          "price": "120000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.learnbay.co/artificial-intelligence/applied-ai-practitioner-program",
          "category": "GenAI & Agentic AI"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "startDate": "2026-02-20",
          "endDate": "2026-12-20",
          "courseMode": "Online",
          "courseWorkload": "P43W"
        }
      }
    }
  ]
 } `,
          }}
        />
      </Head>
      <Navbar radio={true} dataScienceCounselling={true} />

      <HeroSection />
      <InfinityLogo />
      {/* <PartnersSlider /> */}
      <ProgramSection />
      <KickStart />
      <div id="course-section">
        <NewCourse dataScience={true} radio={true} />
      </div>
      <LearningToPlacement />
      <AnimationNew />
      <ReviewSlider idss="eautK0odE7Q" showRealStories={true} />
      <ContactUs dataScienceCounselling={true} radio={true} />
      <CLogo />
      <Other />
      <MobileTestimonial radio={true} dataScienceCounselling={true} />
      <Media projectData={data} />
      <NewSevenSection radio={true} dataScienceCounselling={true} />
      {/* <TabsCard dataScience={true} radio={true} /> */}
      {/* <NewUpSkill /> */}
      {/* <RealWorld /> */}
      {/* <FirstSection
        dataScienceCounselling={true}
        radio={true}
        idss="ZPOTy4PEnNU"
      /> */}
      {/* <HandsOn />
      <RealPeople />
     
       
      */}

      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar dataScienceCounselling={true} radio={true} />
    </>
  );
}
