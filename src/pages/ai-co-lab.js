import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { DSABangaloreCourseData } from "../CityData/Bangalore/DSAbangaloreData";
import Footer from "@/components/Global/Footer/Footer";
import Form from "@/components/Global/Form/Form";
import Navbar from "@/components/Global/Navbar/Navbar";
import Popup from "@/components/Global/Popup/Popup";
import FeeSection from "@/components/Seo/FeeSection/FeeSection";
import styles from "@/styles/Home.module.css";

const LabFirst = dynamic(() => import("@/components/Seo/Co-lab/co-lab"));
const Lbdifference = dynamic(() =>
  import("@/components/Seo/Lbdifference/lbdifference")
);

const UnderstandingProcess = dynamic(() =>
  import("@/components/Seo/UnderstandingProcess/UnderstandingProcess")
);

const Benefits = dynamic(() => import("@/components/Seo/Benefits/Benefits"));

const AchievementCertificate = dynamic(() =>
  import("@/components/AchievementCertificate/AchievementCertificate")
);
const WisdomFromLeaders = dynamic(() =>
  import("@/components/WisdomFromLeaders/WisdomFromLeaders")
);
const PieChart = dynamic(() => import("@/components/piechart/piechart"));

// const OfferPopup = dynamic(() => import("@/components/Global/OfferPopup/OfferPopup"));
// const popupData = DSABangaloreCourseData.popupData;
const FAQNew = dynamic(() => import("@/components/Seo/FAQNew/FAQNew"));
export default function Home() {
  const [popups, setPopups] = useState(false);

  const pdfUrl =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/data-dtructure-system-design.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Structures & Algorithms | DSA Course in Bangalore</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Advance Your Coding Skills with Expert DSA Training in Bangalore. Learn Key Algorithms and Data Structures to Excel in Tech Careers and Coding Interviews."
        />
        <meta
          name="keywords"
          content="dsa course in bangalore, data structures and algorithms training in bangalore, data structure training in bangalore, data structures and algorithms course in bangalore, best datastructures & algorithms training institute in bangalore, best institute for data structures and algorithms in bangalore, data structures and algorithms classes in bangalore, dsa courses in bangalore"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/dsa-course-training-bangalore"
        />
        <meta
          property="og:title"
          content="Data Structures & Algorithms | DSA Course in Bangalore"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Level up your coding expertise via a DSA course in Bangalore and leap forward to craft a compelling tech career with leading MNCs/MAANG. Enroll in our job-enriched course to build data management, algorithmic optimization, and critical thinking skills. "
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Structures & Algorithms | DSA Course in Bangalore"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Full stack software developer course Bangalore. We are Advanced Full stack software developer course Certification Training Institute in Bangalore. Full stack software developer course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/dsa-course-training-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <LabFirst />
        <Lbdifference />
        <UnderstandingProcess />
        <Benefits />
        <AchievementCertificate />
        <WisdomFromLeaders />
        <PieChart />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
