import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { AIChennaiCourseData } from "../../../CityData/Chennai/artificialIntelligenceAICourseTrainingChennai";
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
const FAQNew = dynamic(() =>
  import("../../../components/Seo/FAQNew/FAQNew")
);

export default function Home() {        
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Artificial Intelligence Course in Chennai - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay provides Artificial Intelligence Training In Chennai For Managers and Leaders. Learn directly from industry leaders via live classes and live projects."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Chennai, Artificial Intelligence training in Chennai, Artificial Intelligence institute in Chennai, best Artificial Intelligence institute in Chennai, Artificial Intelligence course in Chennai, Artificial Intelligence certification in Chennai, Artificial Intelligence training institute in Chennai, advanced Artificial Intelligence course in Chennai, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/artificial-intelligence-ai-course-training-chennai"
        />
        <meta
          property="og:title"
          content="Artificial Intelligence course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Artificial Intelligence course in Chennai. Learnbay is Advanced Artificial Intelligence course Training Institute in Chennai. Artificial Intelligence course in Chennai will enhance your career"
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
          content="Artificial Intelligence course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artificial Intelligence course in Chennai. Learnbay is Advanced Artificial Intelligence course Training Institute in Chennai. Artificial Intelligence course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artificial Intelligence course in Chennai. Learnbay is Advanced Artificial Intelligence course Training Institute in Chennai. Artificial Intelligence course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/chennai/artificial-intelligence-ai-course-training-chennai"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${AIChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIChennaiCourseData[0].script4} `,
          }}
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
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          dataScienceCounselling={true}
          firstToparaImg="For Managers and Leaders"
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          idss="osYNvuuI1_8"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstHeading="Artificial Intelligence(Ai) Course Training In chennai"
          firstTopPara="Industry-curated Training With Domain Specialization"
        />
        <SecondSection
          SecondSectionData={AIChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,10,000"
            FeeEmi="₹ 7,211/month"
            WeekdayDate="NOV 17th"
            WeekendDate="NOV 26th"
            WeekendTime="09:30 AM - 1:00 PM"
            WeekdayTime="08:00 AM - 10:00 AM"
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
              ProgramHead1={AIChennaiCourseData[0].ProgramHead1}
              ProgramBot1={AIChennaiCourseData[0].ProgramBot1}
              ProgramBot2={AIChennaiCourseData[0].ProgramBot2}
              ProgramHead3={AIChennaiCourseData[0].ProgramHead3}
              ProgramHead2={AIChennaiCourseData[0].ProgramHead2}
              ProgramHead5={AIChennaiCourseData[0].ProgramHead5}
              ProgramHead4={AIChennaiCourseData[0].ProgramHead4}
              ProgramBot3={AIChennaiCourseData[0].ProgramBot3}
              ProgramBot31={AIChennaiCourseData[0].ProgramBot31}
              ProgramBot32={AIChennaiCourseData[0].ProgramBot32}
              ProgramBot4={AIChennaiCourseData[0].ProgramBot4}
              ProgramBot5={AIChennaiCourseData[0].ProgramBot5}
              ProgramBot6={AIChennaiCourseData[0].ProgramBot6}
              ProgramBot8={AIChennaiCourseData[0].ProgramBot8}
              ProgramBot9={AIChennaiCourseData[0].ProgramBot9}
              ProgramBot10={AIChennaiCourseData[0].ProgramBot10}
              Courselink1={AIChennaiCourseData[0].Courselink1}
              Courselink2={AIChennaiCourseData[0].Courselink2}
              Courselink3={AIChennaiCourseData[0].Courselink3}
              Courselink4={AIChennaiCourseData[0].Courselink4}
              Courselink5={AIChennaiCourseData[0].Courselink5}
              Course1={AIChennaiCourseData[0].Course1}
              Course2={AIChennaiCourseData[0].Course2}
              Course3={AIChennaiCourseData[0].Course3}
              Course4={AIChennaiCourseData[0].Course4}
              Course5={AIChennaiCourseData[0].Course5}
              DomainHead1={AIChennaiCourseData[0].DomainHead1}
              DomainBot1={AIChennaiCourseData[0].DomainBot1}
              DomainBot2={AIChennaiCourseData[0].DomainBot2}
              DomainBot3={AIChennaiCourseData[0].DomainBot3}
              DomainList1={AIChennaiCourseData[0].DomainList1}
              DomainList2={AIChennaiCourseData[0].DomainList2}
              DomainList3={AIChennaiCourseData[0].DomainList3}
              DomainList4={AIChennaiCourseData[0].DomainList4}
              DomainList5={AIChennaiCourseData[0].DomainList5}
              DomainList6={AIChennaiCourseData[0].DomainList6}
              DomainList7={AIChennaiCourseData[0].DomainList7}
              DomainList8={AIChennaiCourseData[0].DomainList8}
              DomainList9={AIChennaiCourseData[0].DomainList9}
              DomainList10={AIChennaiCourseData[0].DomainList10}
              Domainlink1={AIChennaiCourseData[0].Domainlink1}
              Domainlink2={AIChennaiCourseData[0].Domainlink2}
              Domainlink3={AIChennaiCourseData[0].Domainlink3}
              Domainlink4={AIChennaiCourseData[0].Domainlink4}
              Domainlink5={AIChennaiCourseData[0].Domainlink5}
              Domainlink6={AIChennaiCourseData[0].Domainlink6}
              Domainlink7={AIChennaiCourseData[0].Domainlink7}
              Domainlink8={AIChennaiCourseData[0].Domainlink8}
              Domainlink9={AIChennaiCourseData[0].Domainlink9}
              Domainlink10={AIChennaiCourseData[0].Domainlink10}
              CertificationHead1={AIChennaiCourseData[0].CertificationHead1}
              CertificationBot1={AIChennaiCourseData[0].CertificationBot1}
              CertificationBot2={AIChennaiCourseData[0].CertificationBot2}
              src={AIChennaiCourseData[0].src}
              src22={AIChennaiCourseData[0].src22}
              src33={AIChennaiCourseData[0].src33}
              ModuleHead1={AIChennaiCourseData[0].ModuleHead1}
              ModuleBot1={AIChennaiCourseData[0].ModuleBot1}
              ModuleBot2={AIChennaiCourseData[0].ModuleBot2}
              ModuleHead2={AIChennaiCourseData[0].ModuleHead2}
              ModuleBot3={AIChennaiCourseData[0].ModuleBot3}
              syllabush1={AIChennaiCourseData[0].syllabush1}
              syllabusb1={AIChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIChennaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIChennaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIChennaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIChennaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIChennaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIChennaiCourseData[0].SyllabusBotlist16}
              syllabush2={AIChennaiCourseData[0].syllabush2}
              syllabusb2={AIChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIChennaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIChennaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIChennaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIChennaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIChennaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIChennaiCourseData[0].SyllabusBotlist26}
              syllabush3={AIChennaiCourseData[0].syllabush3}
              syllabusb3={AIChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIChennaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIChennaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIChennaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIChennaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIChennaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIChennaiCourseData[0].SyllabusBotlist36}
              syllabush4={AIChennaiCourseData[0].syllabush4}
              syllabusb4={AIChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIChennaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIChennaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIChennaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIChennaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIChennaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIChennaiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIChennaiCourseData[0].syllabussrc}
              JobHead1={AIChennaiCourseData[0].JobHead1}
              JobBot1={AIChennaiCourseData[0].JobBot1}
              JobBot2={AIChennaiCourseData[0].JobBot2}
              JobBot5={AIChennaiCourseData[0].JobBot5}
              JobHead2={AIChennaiCourseData[0].JobHead2}
              JobBot3={AIChennaiCourseData[0].JobBot3}
              JobBot4={AIChennaiCourseData[0].JobBot4}
              JobBot6={AIChennaiCourseData[0].JobBot6}
              ProjectsBot1={AIChennaiCourseData[0].ProjectsBot1}
              ProjectsHead1={AIChennaiCourseData[0].ProjectsHead1}
              ProjectsBot2={AIChennaiCourseData[0].ProjectsBot2}
              src1={AIChennaiCourseData[0].src1}
              ProjectsH1={AIChennaiCourseData[0].ProjectsH1}
              Projectsp1={AIChennaiCourseData[0].Projectsp1}
              src2={AIChennaiCourseData[0].src2}
              ProjectsH2={AIChennaiCourseData[0].ProjectsH2}
              Projectsp2={AIChennaiCourseData[0].Projectsp2}
              src3={AIChennaiCourseData[0].src3}
              ProjectsH3={AIChennaiCourseData[0].ProjectsH3}
              Projectsp3={AIChennaiCourseData[0].Projectsp3}
              src4={AIChennaiCourseData[0].src4}
              ProjectsH4={AIChennaiCourseData[0].ProjectsH4}
              Projectsp4={AIChennaiCourseData[0].Projectsp4}
              AlumniBot1={AIChennaiCourseData[0].AlumniBot1}
              Asrc1={AIChennaiCourseData[0].Asrc1}
              AlumniH1={AIChennaiCourseData[0].AlumniH1}
              Alumnip1={AIChennaiCourseData[0].Alumnip1}
              Asrc2={AIChennaiCourseData[0].Asrc2}
              AlumniH2={AIChennaiCourseData[0].AlumniH2}
              Alumnip2={AIChennaiCourseData[0].Alumnip2}
              Asrc3={AIChennaiCourseData[0].Asrc3}
              AlumniH3={AIChennaiCourseData[0].AlumniH3}
              Alumnip3={AIChennaiCourseData[0].Alumnip3}
              Asrc4={AIChennaiCourseData[0].Asrc4}
              AlumniH4={AIChennaiCourseData[0].AlumniH4}
              Alumnip4={AIChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIChennaiCourseData[0].CityTextB}
          CityText={AIChennaiCourseData[0].CityText}
          CityTextLB={AIChennaiCourseData[0].CityTextLB}
          CityTextL={AIChennaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
