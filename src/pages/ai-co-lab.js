import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { DSABangaloreCourseData } from "../CityData/Bangalore/DSAbangaloreData";
import Footer from "@/components/Global/Footer/Footer";
import Form from "@/components/Global/Form/Form";
import Navbar from "@/components/Global/Navbar/Navbar";
import Popup from "@/components/Global/Popup/Popup";
import styles from "@/styles/Home.module.css";
import NewSevenSection from "@/components/CoursePage/NewDSA/NewSevenSection/NewSevenSection";

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
const PieChart = dynamic(() => import("@/components/piechart/piechart"), {
  ssr: false,
});

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
        <title> AI Co-Lab – Live Gen-AI Startup Projects | Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join AI Co-Lab by LearnBay — work on real AI startup projects, build GenAI and automation solutions, gain dual certification, and portfolio-ready experience."
        />
        <meta
          name="keywords"
          content="AI startup project experience, AI co-lab program india, work on real-world AI projects, AI automation & agentic AI projects, AI job-ready skills, GenAI projects, AI co-lab"
        />

        <meta property="og:url" content="https://www.learnbay.co/ai-co-lab" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Co-Lab – Live Gen-AI  Startup Projects | Learnbay"
        />
        <meta
          property="og:description"
          content="Join AI Co-Lab by LearnBay — work on real AI startup projects, build GenAI and automation solutions, gain dual certification, and portfolio-ready experience."
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
          content="https://www.learnbay.co/ai-co-lab"
        />
        <meta
          name="twitter:title"
          content="AI Co-Lab – Live Gen-AI  Startup Projects | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Join AI Co-Lab by LearnBay — work on real AI startup projects, build GenAI and automation solutions, gain dual certification, and portfolio-ready experience."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/ai-co-lab" />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "AI Co-Lab",
              description:
                "Work on real AI startup projects, build GenAI and automation solutions, gain dual certification and portfolio-ready experience with LearnBay.",
              url: "https://www.learnbay.co/ai-co-lab",
              provider: {
                "@type": "Organization",
                name: "Learnbay",
                url: "https://www.learnbay.co/",
              },
            }),
          }}
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
        <LabFirst
          title={"Hello"}
          spanTag={"hi"}
          points={"points"}
          mentorText={"mentortext"}
          mentorFromImg={"mentorFromImg"}
          titleCourse="Data Structure Algorithms & System Design"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud_and_Devops_Master_Certification.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <Lbdifference />
        <UnderstandingProcess />
        <Benefits />
        <AchievementCertificate
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud_and_Devops_Master_Certification.pdf"
          brochurePdf={pdfUrl}
          interstedInHide={true}
        />
        <WisdomFromLeaders />
        <PieChart />
        <NewSevenSection />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
