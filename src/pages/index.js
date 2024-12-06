import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import Media from "@/components/Home/Media/Media";
import MobileTestimonial from "@/components/Home/MobileTestimonial/MobileTestimonial";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

import Navbar from "../components/Global/Navbar/Navbar";
import InfinityLogo from "@/components/Home/newUI/InfinityLogo/InfinityLogo";
import KickStart from "@/components/Home/newUI/KickStartSection/KickStart";
import NewCourse from "@/components/Home/newUI/NewCourse/NewCourse";
import ReviewSlider from "@/components/Home/newUI/reviewSlider/reviewSlider";
import CLogo from "@/components/Home/newUI/Compnays/CLogo";
import Other from "@/components/Home/newUI/OtherVS/Other";
import NewSevenSection from "@/components/Home/newUI/SeventhSectionNew/NewSevenSection";
import FormNew from "@/components/Global/Form/FormNew";
import AnimationNew from "@/components/Home/whyChooseSection/AnimationNew";
const Animation = dynamic(() =>
  import("@/components/Home/whyChooseSection/whyChooseSection")
);
const Course = dynamic(() => import("@/components/Home/Course/Course"));
const WhyLearnbay = dynamic(() =>
  import("@/components/Home/WhyLearnbay/WhyLearnbay")
);
const Realstory = dynamic(() =>
  import("@/components/Home/Realstory/Realstory")
);
const ContactUs = dynamic(() =>
  import("@/components/Home/newUI/ContactUs/ContactUs")
);
const GetHire = dynamic(() => import("@/components/Home/GetHire/GetHire"));
const TrainerSection = dynamic(() =>
  import("@/components/Global/TrainerSection/TrainerSection")
);
const SeventhSection = dynamic(() =>
  import("@/components/Global/SeventhSection/SeventhSection")
);
const Footer = dynamic(() => import("@/components/Global/Footer/Footer"));

export default function Home() {
  const data = [
    {
      id: 1,
      domain:
        "Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "12th JULY",
      url: "https://www.financialexpress.com/education-2/learnbay-goes-offline-with-brick-and-mortar-centres-ends-fy22-with-a-net-profit-of-rs-3-2-crore/2590829/",
    },
    {
      id: 2,
      domain: "How data science can disrupt the fintech industry?",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/dataquest.webp",
      SDesc: "13th January",
      url: "https://www.dqindia.com/how-data-science-can-disrupt-the-fintech-industry/",
    },
    {
      id: 3,
      domain:
        "Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/PM-Logo.webp",
      SDesc: "2and August",
      url: "https://thepeoplemanagement.com/the-future-of-hr-will-be-defined-by-a-blended-workforce-nisha-kumari-md-learnbay/",
    },
    {
      id: 4,
      domain:
        "Learnbay introduces domain specialisation programme for sustainable career transition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "1st August",
      url: "https://www.financialexpress.com/jobs-career/education-learnbay-introduces-domain-specialisation-programme-for-sustainable-career-transition-2613104/",
    },
    {
      id: 5,
      domain: "Metaverse in Education: A New Mainstay or a Passing Trend??",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/express+computer.webp",
      SDesc: "21st August",
      url: "https://www.expresscomputer.in/artificial-intelligence-ai/metaverse-in-education-a-new-mainstay-or-a-passing-trend/102446/",
    },
    {
      id: 6,
      domain:
        "Augmented Intelligence: How Humans and Machines Team Up in Future Data Science",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/CXO+today.webp",
      SDesc: "25th September",
      url: "https://cxotoday.com/specials/augmented-intelligence-how-humans-and-machines-team-up-in-future-data-science/",
    },

    {
      id: 7,
      domain: "The Rising Horizon: Data Science and AI in the EdTech 2.0 Era",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/mt-Logo.webp",
      SDesc: "25th May",
      url: "https://www.manufacturingtodayindia.com/sectors/smart-manufacturing-roles-for-data-professionals",
    },
    {
      id: 8,
      domain:
        "Learnbay Collaborates with Woolf to Launch Master's Degree in Computer Science & Data Science Specializations",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
      SDesc: "20th November",
      url: "https://www.business-standard.com/content/press-releases-ani/learnbay-collaborates-with-woolf-to-launch-master-s-degree-in-computer-science-data-science-specializations-123112000350_1.html",
    },
    // {
    //   id: 9,
    //   domain:
    //     "How healthcare professionals can transition to data science career        ",
    //   CLogo:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
    //   SDesc: "20th April",
    //   url: "https://www.expresshealthcare.in/news/how-healthcare-professionals-can-transition-to-data-science-career/438946/",
    // },
    // {
    //   id: 10,
    //   domain:
    //     "Krishna Kumar, Founder and CEO, Learnbay, Providing Comprehensive Data Science, AI,& ML Education With Career Advancement Support ",
    //   CLogo:
    //     "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/business-standard-logo.webp",
    //   SDesc: "7th Feb",
    //   url: "https://startuptalky.com/krishna-kumar-learnbay-edtech-industry-recap22/",
    // },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  // console.log(popupData);

  return (
    <>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="Learnbay Training Institute, Learnbay Data Science, Best Training Institute, Classroom Training, online Training, best institute for cloud computing,best online learning platform for technology, best it training institute, best institute for data analyst course, best institute for data science course"
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
                  "@type": "course",
                  "name": "Master's Degree in Computer Science: Data Science and AI",
                  "description": "A comprehensive Master's degree program with specializations in Data Science and AI.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Learnbay"
                  },
                   "occupationalCategory": [
                    "Data Science and Analytics",
                    "AI & Machine Learning"
                  ],
                  "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
                  "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                      "@type": "QuantitativeValue",
                      "value": 250000,
                      "currencyCode": "INR"
                    },
                    "availability": "http://schema.org/InStock",
                    "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs",
                    "category": "Data Science and Analytics"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "startDate": "2023-11-15",
                    "endDate": "2024-05-15",
                    "courseMode": "Online",
                    "courseWorkload": "P10W"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Course",
                  "name": "Advance Data Science and AI Certification",
                  "description": "An advanced certification course in Data Science and AI.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Learnbay"
                  },
                  "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses",
                  "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                      "@type": "QuantitativeValue",
                      "value": 125000,
                      "currencyCode": "INR"
                    },
                    "availability": "http://schema.org/InStock",
                    "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses",
                    "category": "Data Science"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "startDate": "2023-11-15",
                    "endDate": "2024-05-15",
                    "courseMode": "Online",
                    "courseWorkload": "P10W"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Course",
                  "name": "Advance AI and ML Certification Program",
                  "description": "An advanced certification program in Artificial Intelligence and Machine Learning.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Learnbay"
                  },
                  "url": "https://www.learnbay.co/datascience/artificial-intelligence-certification-course",
                  "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                      "@type": "QuantitativeValue",
                      "value": 110000,
                      "currencyCode": "INR"
                    },
                    "availability": "http://schema.org/InStock",
                    "url": "https://www.learnbay.co/datascience/artificial-intelligence-certification-course",
                    "category": "AI & Machine Learning"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "startDate": "2023-11-15",
                    "endDate": "2024-06-15",
                    "courseMode": "Online",
                    "courseWorkload": "P10W"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Course",
                  "name": "Business Analytics Program",
                  "description": "A comprehensive program in Business Analytics with real-world projects.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Learnbay"
                  },
                  "url": "https://www.learnbay.co/datascience/business-analytics-certification-course",
                  "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                      "@type": "QuantitativeValue",
                      "value": 90000,
                      "currencyCode": "INR"
                    },
                    "availability": "http://schema.org/InStock",
                    "url": "https://www.learnbay.co/datascience/business-analytics-certification-course",
                    "category": "Business Analytics"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "startDate": "2023-11-15",
                    "endDate": "2024-07-15",
                    "courseMode": "Online",
                    "courseWorkload": "P10W"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Course",
                  "name": "Data Analytics Program",
                  "description": "Upskill yourself to the top within 6 months with a curriculum designed by industry experts.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Learnbay"
                  },
                  "url": "https://www.learnbay.co/datascience/data-analytics-certification-course",
                  "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                      "@type": "QuantitativeValue",
                      "value": 80000,
                      "currencyCode": "INR"
                    },
                    "availability": "http://schema.org/InStock",
                    "url": "https://www.learnbay.co/datascience/data-analytics-certification-course",
                    "category": "Data Analytics"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "startDate": "2023-11-15",
                    "endDate": "2024-08-15",
                    "courseMode": "Online",
                    "courseWorkload": "P10W"
                  }
                }
              },
             {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Course",
              "name": "Software Development Certification Program",
              "description": "Upskill and switch from service-based to product-based companies with our Software Development Certification Program.",
              "provider": {
                "@type": "Organization",
                "name": "Learnbay"
              },
              "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "QuantitativeValue",
                  "value": 115000,
                  "currencyCode": "INR"
                },
                "availability": "http://schema.org/InStock",
                "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
                "category": "Software Development"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "startDate": "2023-11-15",
                "endDate": "2024-08-15",
                "courseMode": "Online",
                "courseWorkload": "P10W"
              }
            }
          }
            ]

          } `,
          }}
        />
      </Head>
      <Navbar radio={true} dataScienceCounselling={true} />
      <FirstSection
        dataScienceCounselling={true}
        radio={true}
        idss="ZPOTy4PEnNU"
      />
      <InfinityLogo />
      <KickStart />
      <NewCourse dataScience={true} radio={true} />
      {/* <Course dataScience={true} radio={true} /> */}
      {/* <WhyLearnbay ids="YWxTtvb3x-U" /> */}

      <AnimationNew />
      <ReviewSlider idss="eautK0odE7Q"/>
      {/* <div className="realstory">
        <Realstory />
      </div> */}
      <ContactUs dataScienceCounselling={true} radio={true} />
      <CLogo />
      <Other />
      {/* <TrainerSection idss="eautK0odE7Q" /> */}
      {/* <GetHire /> */}
      <MobileTestimonial radio={true} dataScienceCounselling={true} />
      <Media projectData={data} />
      <NewSevenSection radio={true} dataScienceCounselling={true} />
      {/* <SeventhSection /> */}

      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar dataScienceCounselling={true} radio={true} />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </>
  );
}
