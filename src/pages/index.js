import BottomBar from "@/components/Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import HomeLine from "@/components/Home/HomeLine/HomeLine";
import Media from "@/components/Home/Media/Media";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Global/Navbar/Navbar";
const Course = dynamic(() => import("@/components/Home/Course/Course"));
const WhyLearnbay = dynamic(() =>
  import("@/components/Home/WhyLearnbay/WhyLearnbay")
);
const OfferPopup = dynamic(() =>
  import("../components/Global/OfferPopup/OfferPopup")
);
const ProjectSection = dynamic(() =>
  import("@/components/Home/ProjectSection/ProjectSection")
);
const Testimonial = dynamic(() =>
  import("@/components/Global/Testimonial/Testimonial")
);
const ContactUs = dynamic(() =>
  import("@/components/Home/ContactUs/ContactUs")
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
  const testimonial = [
    {
      id: 1,
      name: "Preksha Mishra",
      working: "HCL",
      link: "vSjfKdIzUjY",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha-testimonial.webp",
      sDesc:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
      lDesc:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/hcl.webp",
      statLogo: "140% Hike",
    },
    {
      id: 2,
      name: "Shubham Kumar",
      working: "Cendrol Technology",
      link: "JoKquvfAhZU",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Shubham-kumar-thumb+.webp",
      sDesc:
        "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
      lDesc:
        "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/cendrol.webp",
      statLogo: "  210% Hike",
    },
    {
      id: 4,
      name: "Arvind Kumar",
      working: "The Math Company",
      link: "hewBtR_WoDM",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/aravind-k-thumb.webp",
      sDesc:
        "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
      lDesc:
        "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/themath.webp",
      statLogo: " 150% Hike",
    },
    {
      id: 5,
      name: "Jaya sinha",
      working: "Amazon",
      link: "A-BkcEM0rQM",
      proImg:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya-sinha-thumb.webp",
      sDesc:
        "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
      lDesc:
        "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
      complogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/amazon.webp",
      statLogo: " 150% Hike",
    },
  ];
  const data = [
    {
      id: 1,
      domain:
        "Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+2-min.webp",
      SDesc: "8th August",
      url: "https://www.financialexpress.com/jobs-career/education-learnbay-achieves-300-surge-to-expand-workforce-amidst-impressive-job-market-recognition-3203466/",
    },
    {
      id: 2,
      domain:
        "Augmented Intelligence: How Humans and Machines Team Up in Future Data Science",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/CXO+today.webp",
      SDesc: "25th September",
      url: "https://cxotoday.com/specials/augmented-intelligence-how-humans-and-machines-team-up-in-future-data-science/",
    },
    {
      id: 3,
      domain:
        "Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/image+7.png",
      SDesc: "25th April",
      url: "https://businessnewsthisweek.com/education/professional-upskilling-startup-learnbay-launches-three-new-cutting-edge-domain-courses/",
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
      domain: "The Rising Horizon: Data Science and AI in the EdTech 2.0 Era",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/express+computer.webp",
      SDesc: "24th November",
      url: "https://www.expresscomputer.in/guest-blogs/the-rising-horizon-data-science-and-ai-in-the-edtech-2-0-era/106062/",
    },
    {
      id: 7,
      domain: "How data science can disrupt the fintech industry?",
      CLogo:
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/media/dataquest.webp",
      SDesc: "13th January",
      url: "https://www.dqindia.com/how-data-science-can-disrupt-the-fintech-industry/",
    },
  ];
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  return (
    <>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
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
      <Navbar
        radio={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <FirstSection
        dataScienceCounselling={true}
        radio={true}
        interstedInHide={true}
      />
      <HomeLine />
      <Course dataScience={true} radio={true} interstedInHide={true} />
      <WhyLearnbay ids="YWxTtvb3x-U" />
      <ProjectSection ids="YWxTtvb3x-U" nolinkO={true} linkomb={true} />
      <GetHire />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial redirectDS={true} heading="" Testimonial={testimonial} />
      <ContactUs
        dataScienceCounselling={true}
        radio={true}
        interstedInHide={true}
      />
      <Media projectData={data} />
      <SeventhSection />
      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
      {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
    </>
  );
}
