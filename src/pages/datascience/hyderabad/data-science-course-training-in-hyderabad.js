import { DSHyderabadSchema } from "@/Data/Schema/DSHyderabadSchema";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataScienceHyderabadCourseData } from "../../../CityData/Hyderabad/dataScienceCourseTrainingInHyderabad";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
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
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
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
    const pdfUrl = "/Brochure/Advanced-Data-Science.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Data Science Courses Training in Hyderabad - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Are you searching for the best data science courses online in Hyderabad? Learnbay is providing the best online data science course training in Hyderabad. Visit now."
        />
        <meta
          name="keywords"
          content="data science course in Hyderabad, data science training in Hyderabad, data science institute in Hyderabad, best data science institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, data science training institute in Hyderabad, advanced data science course in Hyderabad, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Data Science Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Hyderabad. Data science course in Hyderabad will enhance your career"
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
          content="Data Science Course in Hyderabad | Data Science Training in Hyderabad"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Hyderabad. Learnbay is Advanced Data Science Course Training Institute in Hyderabad. Data science course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Hyderabad. Learnbay is Advanced Data Science Course Training Institute in Hyderabad. Data science course in Hyderabad will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(DSHyderabadSchema),
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
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Hyderabad with IBM Certification. Our advanced Data Science training in Hyderabad will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters to gain the most in-demand data science and AI skills."
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Data Science Course in Hyderabad"
          firstTopPara="Foundational and Advance Job-ready Program"
        />
        <SecondSection
          SecondSectionData={DataScienceHyderabadCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,35,000"
            FeeEmi="₹8,850/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekday Batch"
            weekday="MON - FRI"
            weekend="MON - FRI"
            WeekdayDate="August 16th"
            WeekendDate="August 2nd"
            WeekendTime="8:00 PM - 10:00 PM"
            WeekdayTime="8:00 AM - 10:00 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Advanced Data Science and AI Program with domain specialization"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Master+Certification+Program.pdf"
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,35,000"
            monthlyPayment1="₹8,850"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,35,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSHyderabad={true}
              DomainHead1={DataScienceHyderabadCourseData[0].DomainHead1}
              DomainBot1={DataScienceHyderabadCourseData[0].DomainBot1}
              DomainBot2={DataScienceHyderabadCourseData[0].DomainBot2}
              DomainBot3={DataScienceHyderabadCourseData[0].DomainBot3}
              DomainList1={DataScienceHyderabadCourseData[0].DomainList1}
              DomainList2={DataScienceHyderabadCourseData[0].DomainList2}
              DomainList3={DataScienceHyderabadCourseData[0].DomainList3}
              DomainList4={DataScienceHyderabadCourseData[0].DomainList4}
              DomainList5={DataScienceHyderabadCourseData[0].DomainList5}
              DomainList6={DataScienceHyderabadCourseData[0].DomainList6}
              DomainList7={DataScienceHyderabadCourseData[0].DomainList7}
              DomainList8={DataScienceHyderabadCourseData[0].DomainList8}
              DomainList9={DataScienceHyderabadCourseData[0].DomainList9}
              DomainList10={DataScienceHyderabadCourseData[0].DomainList10}
              Domainlink1={DataScienceHyderabadCourseData[0].Domainlink1}
              Domainlink2={DataScienceHyderabadCourseData[0].Domainlink2}
              Domainlink3={DataScienceHyderabadCourseData[0].Domainlink3}
              Domainlink4={DataScienceHyderabadCourseData[0].Domainlink4}
              Domainlink5={DataScienceHyderabadCourseData[0].Domainlink5}
              Domainlink6={DataScienceHyderabadCourseData[0].Domainlink6}
              Domainlink7={DataScienceHyderabadCourseData[0].Domainlink7}
              Domainlink8={DataScienceHyderabadCourseData[0].Domainlink8}
              Domainlink9={DataScienceHyderabadCourseData[0].Domainlink9}
              Domainlink10={DataScienceHyderabadCourseData[0].Domainlink10}
              CertificationBot1={
                DataScienceHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataScienceHyderabadCourseData[0].CertificationBot2
              }
              src={DataScienceHyderabadCourseData[0].src}
              src22={DataScienceHyderabadCourseData[0].src22}
              src33={DataScienceHyderabadCourseData[0].src33}
              ModuleHead1={DataScienceHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={DataScienceHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceHyderabadCourseData[0].ModuleBot2}
              syllabush1={DataScienceHyderabadCourseData[0].syllabush1}
              syllabusb1={DataScienceHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataScienceHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataScienceHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataScienceHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataScienceHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataScienceHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataScienceHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataScienceHyderabadCourseData[0].syllabush2}
              syllabusb2={DataScienceHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataScienceHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataScienceHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataScienceHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataScienceHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataScienceHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataScienceHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataScienceHyderabadCourseData[0].syllabush3}
              syllabusb3={DataScienceHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataScienceHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataScienceHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataScienceHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataScienceHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataScienceHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataScienceHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataScienceHyderabadCourseData[0].syllabush4}
              syllabusb4={DataScienceHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataScienceHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataScienceHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataScienceHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataScienceHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataScienceHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataScienceHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataScienceHyderabadCourseData[0].syllabussrc}
              JobHead1={DataScienceHyderabadCourseData[0].JobHead1}
              JobBot1={DataScienceHyderabadCourseData[0].JobBot1}
              JobBot2={DataScienceHyderabadCourseData[0].JobBot2}
              JobBot5={DataScienceHyderabadCourseData[0].JobBot5}
              JobHead2={DataScienceHyderabadCourseData[0].JobHead2}
              JobBot3={DataScienceHyderabadCourseData[0].JobBot3}
              JobBot4={DataScienceHyderabadCourseData[0].JobBot4}
              JobBot6={DataScienceHyderabadCourseData[0].JobBot6}
              ProjectsHead1={DataScienceHyderabadCourseData[0].ProjectsHead1}
              ProjectsBot1={DataScienceHyderabadCourseData[0].ProjectsBot1}
              ProjectsBot2={DataScienceHyderabadCourseData[0].ProjectsBot2}
              src1={DataScienceHyderabadCourseData[0].src1}
              ProjectsH1={DataScienceHyderabadCourseData[0].ProjectsH1}
              Projectsp1={DataScienceHyderabadCourseData[0].Projectsp1}
              src2={DataScienceHyderabadCourseData[0].src2}
              ProjectsH2={DataScienceHyderabadCourseData[0].ProjectsH2}
              Projectsp2={DataScienceHyderabadCourseData[0].Projectsp2}
              src3={DataScienceHyderabadCourseData[0].src3}
              ProjectsH3={DataScienceHyderabadCourseData[0].ProjectsH3}
              Projectsp3={DataScienceHyderabadCourseData[0].Projectsp3}
              src4={DataScienceHyderabadCourseData[0].src4}
              ProjectsH4={DataScienceHyderabadCourseData[0].ProjectsH4}
              Projectsp4={DataScienceHyderabadCourseData[0].Projectsp4}
              AlumniBot1={DataScienceHyderabadCourseData[0].AlumniBot1}
              Asrc1={DataScienceHyderabadCourseData[0].Asrc1}
              AlumniH1={DataScienceHyderabadCourseData[0].AlumniH1}
              Alumnip1={DataScienceHyderabadCourseData[0].Alumnip1}
              Asrc2={DataScienceHyderabadCourseData[0].Asrc2}
              AlumniH2={DataScienceHyderabadCourseData[0].AlumniH2}
              Alumnip2={DataScienceHyderabadCourseData[0].Alumnip2}
              Asrc3={DataScienceHyderabadCourseData[0].Asrc3}
              AlumniH3={DataScienceHyderabadCourseData[0].AlumniH3}
              Alumnip3={DataScienceHyderabadCourseData[0].Alumnip3}
              Asrc4={DataScienceHyderabadCourseData[0].Asrc4}
              AlumniH4={DataScienceHyderabadCourseData[0].AlumniH4}
              Alumnip4={DataScienceHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataScienceHyderabadCourseData[0].CityTextB}
          CityText={DataScienceHyderabadCourseData[0].CityText}
          CityTextLB={DataScienceHyderabadCourseData[0].CityTextLB}
          CityTextL={DataScienceHyderabadCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
