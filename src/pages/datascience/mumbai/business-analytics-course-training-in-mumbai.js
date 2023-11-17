import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { BAMumbaiCourseData } from "../../../CityData/Mumbai/businessAnalyticsCourseTrainingMumbaiData";
import FeeSection from "../../../components/CoursePage/FeeSection/FeeSection";
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
  import("../../../components/Seo/CitiesLeft/CitiesLeftDomain")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRightdomain")
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
        <title>Best Business Analyst Certification Course in Mumbai</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll now in Learnbay's Business Analyst Program in Mumbai For Top-notch Training, Live Projects, IBM Certification and Best Career Placement Assistance."
        />
        <meta
          name="keywords"
          content="Enroll now in Learnbay's Business Analyst Program in Mumbai For Top-notch Training, Live Projects, IBM Certification and Best Career Placement Assistance."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/mumbai/business-analytics-course-training-in-mumbai"
        />
        <meta
          property="og:title"
          content="Business Analytics Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Business Analytics Course in Mumbai. Learnbay is Advanced Business Analytics Course Training Institute in Mumbai. Business Analytics Course in Mumbai will enhance your career"
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
          content="Business Analytics Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Business Analytics Course in Mumbai. Learnbay is Advanced Business Analytics Course Training Institute in Mumbai. Business Analytics Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Business Analytics Course in Mumbai. Learnbay is Advanced Business Analytics Course Training Institute in Mumbai. Business Analytics Course in Mumbai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/mumbai/business-analytics-course-training-in-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Business Analyst Program Training Mumbai"
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
            __html: `${BAMumbaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BAMumbaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BAMumbaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BAMumbaiCourseData[0].script4} `,
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
          dataScience={true}
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          idss="4j80WXLTvGE"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="Training In Mumbai"
          firstHeading="Business Analytics Course"
          firstTopPara="Industry-paced Project-based Training"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future."
        />
        <SecondSection
          SecondSectionData={BAMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BAMumbaiCourseData[0].testimonial}
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
              ProgramHead1={BAMumbaiCourseData[0].ProgramHead1}
              ProgramBot1={BAMumbaiCourseData[0].ProgramBot1}
              ProgramBot2={BAMumbaiCourseData[0].ProgramBot2}
              ProgramHead3={BAMumbaiCourseData[0].ProgramHead3}
              ProgramBot3={BAMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={BAMumbaiCourseData[0].ProgramBot31}
              ProgramBot32={BAMumbaiCourseData[0].ProgramBot32}
              ProgramBot4={BAMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={BAMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={BAMumbaiCourseData[0].ProgramBot6}
              Courselink1={BAMumbaiCourseData[0].Courselink1}
              Courselink2={BAMumbaiCourseData[0].Courselink2}
              Courselink3={BAMumbaiCourseData[0].Courselink3}
              Courselink4={BAMumbaiCourseData[0].Courselink4}
              Courselink5={BAMumbaiCourseData[0].Courselink5}
              Course1={BAMumbaiCourseData[0].Course1}
              Course2={BAMumbaiCourseData[0].Course2}
              Course3={BAMumbaiCourseData[0].Course3}
              Course4={BAMumbaiCourseData[0].Course4}
              Course5={BAMumbaiCourseData[0].Course5}
              DomainHead1={BAMumbaiCourseData[0].DomainHead1}
              DomainBot1={BAMumbaiCourseData[0].DomainBot1}
              DomainBot2={BAMumbaiCourseData[0].DomainBot2}
              DomainBot3={BAMumbaiCourseData[0].DomainBot3}
              DomainList1={BAMumbaiCourseData[0].DomainList1}
              DomainList2={BAMumbaiCourseData[0].DomainList2}
              DomainList3={BAMumbaiCourseData[0].DomainList3}
              DomainList4={BAMumbaiCourseData[0].DomainList4}
              DomainList5={BAMumbaiCourseData[0].DomainList5}
              DomainList6={BAMumbaiCourseData[0].DomainList6}
              DomainList7={BAMumbaiCourseData[0].DomainList7}
              DomainList8={BAMumbaiCourseData[0].DomainList8}
              DomainList9={BAMumbaiCourseData[0].DomainList9}
              DomainList10={BAMumbaiCourseData[0].DomainList10}
              Domainlink1={BAMumbaiCourseData[0].Domainlink1}
              Domainlink2={BAMumbaiCourseData[0].Domainlink2}
              Domainlink3={BAMumbaiCourseData[0].Domainlink3}
              Domainlink4={BAMumbaiCourseData[0].Domainlink4}
              Domainlink5={BAMumbaiCourseData[0].Domainlink5}
              Domainlink6={BAMumbaiCourseData[0].Domainlink6}
              Domainlink7={BAMumbaiCourseData[0].Domainlink7}
              Domainlink8={BAMumbaiCourseData[0].Domainlink8}
              Domainlink9={BAMumbaiCourseData[0].Domainlink9}
              Domainlink10={BAMumbaiCourseData[0].Domainlink10}
              // CertificationBot1={BAMumbaiCourseData[0].CertificationBot1}
              src={BAMumbaiCourseData[0].src}
              src22={BAMumbaiCourseData[0].src22}
              src33={BAMumbaiCourseData[0].src33}
              ModuleHead1={BAMumbaiCourseData[0].ModuleHead1}
              ModuleBot1={BAMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={BAMumbaiCourseData[0].ModuleBot2}
              syllabush1={BAMumbaiCourseData[0].syllabush1}
              syllabusb1={BAMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={BAMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BAMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BAMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BAMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BAMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BAMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={BAMumbaiCourseData[0].syllabush2}
              syllabusb2={BAMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={BAMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BAMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BAMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BAMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BAMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BAMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={BAMumbaiCourseData[0].syllabush3}
              syllabusb3={BAMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={BAMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BAMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BAMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BAMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BAMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BAMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={BAMumbaiCourseData[0].syllabush4}
              syllabusb4={BAMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={BAMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BAMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BAMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BAMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BAMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BAMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={BAMumbaiCourseData[0].syllabussrc}
              JobHead1={BAMumbaiCourseData[0].JobHead1}
              JobBot1={BAMumbaiCourseData[0].JobBot1}
              JobBot5={BAMumbaiCourseData[0].JobBot5}
              JobHead2={BAMumbaiCourseData[0].JobHead2}
              JobBot3={BAMumbaiCourseData[0].JobBot3}
              JobBot4={BAMumbaiCourseData[0].JobBot4}
              ProjectsHead1={BAMumbaiCourseData[0].ProjectsHead1}
              ProjectsBot1={BAMumbaiCourseData[0].ProjectsBot1}
              src1={BAMumbaiCourseData[0].src1}
              ProjectsH1={BAMumbaiCourseData[0].ProjectsH1}
              Projectsp1={BAMumbaiCourseData[0].Projectsp1}
              src2={BAMumbaiCourseData[0].src2}
              ProjectsH2={BAMumbaiCourseData[0].ProjectsH2}
              Projectsp2={BAMumbaiCourseData[0].Projectsp2}
              src3={BAMumbaiCourseData[0].src3}
              ProjectsH3={BAMumbaiCourseData[0].ProjectsH3}
              Projectsp3={BAMumbaiCourseData[0].Projectsp3}
              src4={BAMumbaiCourseData[0].src4}
              ProjectsH4={BAMumbaiCourseData[0].ProjectsH4}
              Projectsp4={BAMumbaiCourseData[0].Projectsp4}
              AlumniBot1={BAMumbaiCourseData[0].AlumniBot1}
              Asrc1={BAMumbaiCourseData[0].Asrc1}
              AlumniH1={BAMumbaiCourseData[0].AlumniH1}
              Alumnip1={BAMumbaiCourseData[0].Alumnip1}
              Asrc2={BAMumbaiCourseData[0].Asrc2}
              AlumniH2={BAMumbaiCourseData[0].AlumniH2}
              Alumnip2={BAMumbaiCourseData[0].Alumnip2}
              Asrc3={BAMumbaiCourseData[0].Asrc3}
              AlumniH3={BAMumbaiCourseData[0].AlumniH3}
              Alumnip3={BAMumbaiCourseData[0].Alumnip3}
              Asrc4={BAMumbaiCourseData[0].Asrc4}
              AlumniH4={BAMumbaiCourseData[0].AlumniH4}
              Alumnip4={BAMumbaiCourseData[0].Alumnip4}
              alt1={BAMumbaiCourseData[0].alt1}
              alt2={BAMumbaiCourseData[0].alt2}
              alt3={BAMumbaiCourseData[0].alt3}
              alt4={BAMumbaiCourseData[0].alt4}
              alt5={BAMumbaiCourseData[0].alt5}
              alt6={BAMumbaiCourseData[0].alt6}
              alt7={BAMumbaiCourseData[0].alt7}
              alt8={BAMumbaiCourseData[0].alt8}
              alt9={BAMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={BAMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BAMumbaiCourseData[0].CityTextB}
          CityText={BAMumbaiCourseData[0].CityText}
          CityTextLB={BAMumbaiCourseData[0].CityTextLB}
          CityTextL={BAMumbaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
