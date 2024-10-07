import BottomBar from "@/components/Global/BottomBar/BottomBar";
import NewSevenSection from "@/components/Global/SeventhSectionNew/NewSevenSection";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import CLogo from "@/components/Home/Compnays/CLogo";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import InfinityLogo from "@/components/Home/InfinityLogo/InfinityLogo";
import KickStart from "@/components/Home/KickStartSection/KickStart";
import Media from "@/components/Home/Media/Media";
import MobileTestimonial from "@/components/Home/MobileTestimonial/MobileTestimonial";
import NewCourse from "@/components/Home/NewCourse/NewCourse";
import Other from "@/components/Home/OtherVS/Other";
import WhyChooseSection from "@/components/Home/whyChooseSection/whyChooseSection";
import ReviewSlider from "@/components/course/reviewSlider/ReviewSlider";
import dynamic from "next/dynamic";
import Head from "next/head";
import { schemaData } from "@/CityData/Schemadata/Data";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Global/Navbar/Navbar";
const WhyLearnbay = dynamic(() =>
  import("@/components/Home/WhyLearnbay/WhyLearnbay")
);
const OfferPopup = dynamic(() =>
  import("../components/Global/OfferPopup/OfferPopup")
);
const ProjectSection = dynamic(() =>
  import("@/components/Home/ProjectSection/ProjectSection")
);
const Realstory = dynamic(() =>
  import("@/components/Home/Realstory/Realstory")
);
const ContactUs = dynamic(() =>
  import("@/components/Home/ContactUs/ContactUs")
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
  ];
  const [popupData, setPopupData] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
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
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/shades.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/mbl_shadows.webp"
          as="image"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} // Use imported schema data
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

      <WhyChooseSection />

      <ReviewSlider />

      <ContactUs dataScienceCounselling={true} radio={true} />
      <CLogo />
      <Other />
      <MobileTestimonial radio={true} dataScienceCounselling={true} />
      <Media projectData={data} />
      <NewSevenSection radio={true} dataScienceCounselling={true} />

      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar dataScienceCounselling={true} radio={true} />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </>
  );
}
