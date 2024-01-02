import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../components/ExpertEdge/ExNavbar/Navbar/Navbar";
import Slider from "@/components/ExpertEdge/MasterClass/MasterClass";
import FirstSection from "@/components/ExpertEdge/FirstSection/FirstSection";
import SecondSection from "@/components/ExpertEdge/SecondSection/SecondSection";
import Course from "@/components/ExpertEdge/CourseSection/Course";
const Testimonial = dynamic(() =>
  import("@/components/Global/Testimonial/Testimonial")
);
const Faq = dynamic(() => import("../components/ExpertEdge/ExpertFAQ/FAQ/Faq"));


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
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/microsoft.webp",
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
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/microsoft.webp",
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
        "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/microsoft.webp",
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
      </Head>
      <Navbar
        radio={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      
      
      <FirstSection
        cityParaCont="Learn today's most in-demand skills with our free courses"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/firstEdge.webp"
        firstToparaImg="Data Science"
        firstHeading="Master  Data Science  Skills for free from Industry Experts"
      />
      <SecondSection />
      <Course />
    < Faq />
     
      <Footer />
    </>
  );
}
