import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MLMumbaiCourseData } from "../../../CityData/Mumbai/machineLearningCourseTrainingInMumbaiData";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRight")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
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
    <div className={styles.container}>
      <Head>
        <title>
          Machine Learning Certification Course in Mumbai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the most comprehensive and affordable Machine Learning Training program in Mumbai with best placement assistance. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Mumbai, Machine learning training in Mumbai, Machine learning institute in Mumbai, best Machine learning institute in Mumbai, Machine learning course in Mumbai, Machine learning certification in Mumbai, Machine learning training institute in Mumbai, advanced Machine learning course in Mumbai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/mumbai/machine-learning-course-training-in-mumbai"
        />
        <meta
          property="og:title"
          content="Machine Learning Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Machine Learning Course in Mumbai. Learnbay is Advanced Machine Learning Course Training Institute in Mumbai. Machine Learning Course in Mumbai will enhance your career"
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
          content="Machine Learning Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning Course in Mumbai. Learnbay is Advanced Machine Learning Course Training Institute in Mumbai. Machine Learning Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Machine Learning Course in Mumbai. Learnbay is Advanced Machine Learning Course Training Institute in Mumbai. Machine Learning Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/mumbai/machine-learning-course-training-in-mumbai"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
       
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          dataScience={true}
          titleCourse="Machine Learning Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstToparaImg="Advance Program"
          firstHeading="Machine Learning Course Training in Mumbai "
          firstTopPara="Industrial project-based job-oriented training"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={MLMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MLMumbaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 90,000"
            FeeEmi="₹ 5,900/month"
            weekdaybatch="Weekday Evening"
            weekendbatch="Weekend  Morning"
            WeekdayDate="DEC 24th"
            WeekendDate="Jan 10th"
            WeekendTime="09:30 AM - 1:00 PM"
             WeekdayTime="08:00 PM - 10:00 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              certificate1={true}
              ProgramBot1={MLMumbaiCourseData[0].ProgramBot1}
              ProgramHead3={MLMumbaiCourseData[0].ProgramHead3}
              ProgramBot3={MLMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={MLMumbaiCourseData[0].ProgramBot31}
              ProgramBot4={MLMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={MLMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={MLMumbaiCourseData[0].ProgramBot6}
              Courselink1={MLMumbaiCourseData[0].Courselink1}
              Courselink2={MLMumbaiCourseData[0].Courselink2}
              Courselink3={MLMumbaiCourseData[0].Courselink3}
              Courselink4={MLMumbaiCourseData[0].Courselink4}
              Courselink5={MLMumbaiCourseData[0].Courselink5}
              Course1={MLMumbaiCourseData[0].Course1}
              Course2={MLMumbaiCourseData[0].Course2}
              Course3={MLMumbaiCourseData[0].Course3}
              Course4={MLMumbaiCourseData[0].Course4}
              Course5={MLMumbaiCourseData[0].Course5}
              DomainHead1={MLMumbaiCourseData[0].DomainHead1}
              DomainBot1={MLMumbaiCourseData[0].DomainBot1}
              DomainBot2={MLMumbaiCourseData[0].DomainBot2}
              DomainBot3={MLMumbaiCourseData[0].DomainBot3}
              DomainList1={MLMumbaiCourseData[0].DomainList1}
              DomainList2={MLMumbaiCourseData[0].DomainList2}
              DomainList3={MLMumbaiCourseData[0].DomainList3}
              DomainList4={MLMumbaiCourseData[0].DomainList4}
              DomainList5={MLMumbaiCourseData[0].DomainList5}
              DomainList6={MLMumbaiCourseData[0].DomainList6}
              DomainList7={MLMumbaiCourseData[0].DomainList7}
              DomainList8={MLMumbaiCourseData[0].DomainList8}
              DomainList9={MLMumbaiCourseData[0].DomainList9}
              DomainList10={MLMumbaiCourseData[0].DomainList10}
              Domainlink1={MLMumbaiCourseData[0].Domainlink1}
              Domainlink2={MLMumbaiCourseData[0].Domainlink2}
              Domainlink3={MLMumbaiCourseData[0].Domainlink3}
              Domainlink4={MLMumbaiCourseData[0].Domainlink4}
              Domainlink5={MLMumbaiCourseData[0].Domainlink5}
              Domainlink6={MLMumbaiCourseData[0].Domainlink6}
              Domainlink7={MLMumbaiCourseData[0].Domainlink7}
              Domainlink8={MLMumbaiCourseData[0].Domainlink8}
              Domainlink9={MLMumbaiCourseData[0].Domainlink9}
              Domainlink10={MLMumbaiCourseData[0].Domainlink10}
              CertificationBot1={MLMumbaiCourseData[0].CertificationBot1}
              src={MLMumbaiCourseData[0].src}
              src22={MLMumbaiCourseData[0].src22}
              src33={MLMumbaiCourseData[0].src33}
              ModuleBot1={MLMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={MLMumbaiCourseData[0].ModuleBot2}
              syllabush1={MLMumbaiCourseData[0].syllabush1}
              syllabusb1={MLMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={MLMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={MLMumbaiCourseData[0].syllabush2}
              syllabusb2={MLMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={MLMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={MLMumbaiCourseData[0].syllabush3}
              syllabusb3={MLMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={MLMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={MLMumbaiCourseData[0].syllabush4}
              syllabusb4={MLMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={MLMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={MLMumbaiCourseData[0].syllabussrc}
              JobBot1={MLMumbaiCourseData[0].JobBot1}
              JobHead2={MLMumbaiCourseData[0].JobHead2}
              JobBot3={MLMumbaiCourseData[0].JobBot3}
              JobBot4={MLMumbaiCourseData[0].JobBot4}
              ProjectsBot1={MLMumbaiCourseData[0].ProgramBot1}
              src1={MLMumbaiCourseData[0].src1}
              ProjectsH1={MLMumbaiCourseData[0].ProjectsH1}
              Projectsp1={MLMumbaiCourseData[0].Projectsp1}
              src2={MLMumbaiCourseData[0].src2}
              ProjectsH2={MLMumbaiCourseData[0].ProjectsH2}
              Projectsp2={MLMumbaiCourseData[0].Projectsp2}
              src3={MLMumbaiCourseData[0].src3}
              ProjectsH3={MLMumbaiCourseData[0].ProjectsH3}
              Projectsp3={MLMumbaiCourseData[0].Projectsp3}
              src4={MLMumbaiCourseData[0].src4}
              ProjectsH4={MLMumbaiCourseData[0].ProjectsH4}
              Projectsp4={MLMumbaiCourseData[0].Projectsp4}
              AlumniBot1={MLMumbaiCourseData[0].AlumniBot1}
              Asrc1={MLMumbaiCourseData[0].Asrc1}
              AlumniH1={MLMumbaiCourseData[0].AlumniH1}
              Alumnip1={MLMumbaiCourseData[0].Alumnip1}
              Asrc2={MLMumbaiCourseData[0].Asrc2}
              AlumniH2={MLMumbaiCourseData[0].AlumniH2}
              Alumnip2={MLMumbaiCourseData[0].Alumnip2}
              Asrc3={MLMumbaiCourseData[0].Asrc3}
              AlumniH3={MLMumbaiCourseData[0].AlumniH3}
              Alumnip3={MLMumbaiCourseData[0].Alumnip3}
              Asrc4={MLMumbaiCourseData[0].Asrc4}
              AlumniH4={MLMumbaiCourseData[0].AlumniH4}
              Alumnip4={MLMumbaiCourseData[0].Alumnip4}
              alt1={MLMumbaiCourseData[0].alt1}
              alt2={MLMumbaiCourseData[0].alt2}
              alt3={MLMumbaiCourseData[0].alt3}
              alt4={MLMumbaiCourseData[0].alt4}
              alt5={MLMumbaiCourseData[0].alt5}
              alt6={MLMumbaiCourseData[0].alt6}
              alt7={MLMumbaiCourseData[0].alt7}
              alt8={MLMumbaiCourseData[0].alt8}
              alt9={MLMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MLMumbaiCourseData[0].CityTextB}
          CityText={MLMumbaiCourseData[0].CityText}
          CityTextLB={MLMumbaiCourseData[0].CityTextLB}
          CityTextL={MLMumbaiCourseData[0].CityTextL}
        />
        <Footer />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </div>
  );
}
