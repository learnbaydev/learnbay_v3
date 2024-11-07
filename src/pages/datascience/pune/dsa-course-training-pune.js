import { DSBangaloreSchema } from "@/Data/Schema/DSBangalore";
import Realstory from "@/components/Home/Realstory/Realstory";
import Map from "@/components/Seo/Maps/Maps";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSAPuneData } from "../../../CityData/Pune/DSAPuneData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);

const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
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

  const items = [
    "Data Science Foundation",
    "Python for Data Science",
    "Statistics for Data Science",
    "Maths for Data Science",
    "Machine Learning",
    "Data Preparation with Pandas",
    "Data Visualisation with Python",
    "Tableau Foundations for Data analysis",
    "Big Data Foundation",
    "Model deployment (Flask-API)",
    "R Language Essentials",
    "Deep Learning",
    "SQL for Data Science",
  ];
  const pdfUrl = "/Brochure/Advanced-Data-Science.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Structures & Algorithms Course | DSA Training in Pune</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Gain in-demand DSA Skills in Pune! This Course Offers Expert Instruction and Real-World Practice for Coding Interviews and Software Careers."
        />
        <meta
          name="keywords"
          content="Data Science course in Bangalore, Data Science training in Bangalore, Data Science institute in Bangalore, best Data Science institute in Bangalore, data scientist course in Bangalore, data scientist certification in Bangalore, Data Science training institute in Bangalore, advanced Data Science course in Bangalore, Data Science course with Placement Assistance, Data Science course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangalore/data-science-course-training-in-bangalore"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangalore/data-science-course-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="Data Science Course Training In Bangalore with Placement Assistance"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Data Science Course in Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
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
          content="Data Science Course Training In Bangalore with Placement Assistance"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Science Course Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Data Science Course Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay - Data Science Course Training In Bangalore",
              "description": "Are you searching for the best data science courses online in Bangalore? Learnbay is providing the best online data science course training in Banglore.",
              "url": "https://www.learnbay.co/datascience/bangalore/data-science-course-training-in-bangalore",
              "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1090 , 1st floor, 18th cross road HSR layout sector 3",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560102",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.91198279090605,
                "longitude": 77.64117409764793
              },
              "telephone": "(+91) 77956 87988",
              "email": "contacts@learnbay.co",
              "openingHoursSpecification": [
                    {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "10:00",
                    "closes": "18:00"
                  },
                   {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Saturday"
                    ],
                    "opens": "10:00",
                    "closes": "15:00"
                 }
              ],
              "priceRange": "₹ 1,35,000 + 18% GST",
              "servesCuisine": "Data Science Education",
              "areaServed": "Bangalore",
              "paymentAccepted": "Cash, Credit Card, Debit Card, EMI"
              },
              "sameAs": [
                  "https://www.facebook.com/learnbay/",
                            "https://twitter.com/Learnbay",
                            "https://www.instagram.com/learnbayofficial/",
                            "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                            "https://www.linkedin.com/company/learnbay/"
              ]
              }
             
              
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Learnbay - Data Science Course Training In Bangalore",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "12693"
  }
              }
             
              
} `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(DSBangaloreSchema),
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Structures and Algorithms Training in Pune"
          firstTopPara="Exhibit Your Coding Deft"
          cityParaCont="Accelerate a rewarding tech career with new-age knowledge and coding expertise via our DSA course in Pune. Join us to effortlessly crack top product-based interviews and craft a lucrative career in DSA. Also, earn globally recognized IBM & Microsoft credentials to exhibit your potential in the present tech age.  "
        />
        <SecondSection SecondSectionData={DSAPuneData[0].secondSection} />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹70,000"
            FeeEmi="₹6,883/month"
            weekendbatch="Weekday Evening (DSA BATCHES)"
            weekdaybatch="Weekday Evening (DSA BATCHES)"
            weekday="MON-WED-FRI"
            weekend="MON-WED-FRI"
            WeekendDate="JAN 26th"
            WeekdayDate="JAN 10th "
            WeekendTime="08:00PM - 10:00PM"
            WeekdayTime="08:00PM - 10:00PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
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
            totalAmount1="₹70,000"
            monthlyPayment1="₹6,883/month"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹70,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
           DSAPune={true}
              DomainHead1={DSAPuneData[0].DomainHead1}
              DomainBot1={DSAPuneData[0].DomainBot1}
              DomainBot2={DSAPuneData[0].DomainBot2}
              DomainBot3={DSAPuneData[0].DomainBot3}
              DomainList1={DSAPuneData[0].DomainList1}
              DomainList2={DSAPuneData[0].DomainList2}
              DomainList3={DSAPuneData[0].DomainList3}
              DomainList4={DSAPuneData[0].DomainList4}
              DomainList5={DSAPuneData[0].DomainList5}
              DomainList6={DSAPuneData[0].DomainList6}
              DomainList7={DSAPuneData[0].DomainList7}
              DomainList8={DSAPuneData[0].DomainList8}
              DomainList9={DSAPuneData[0].DomainList9}
              DomainList10={DSAPuneData[0].DomainList10}
              Domainlink1={DSAPuneData[0].Domainlink1}
              Domainlink2={DSAPuneData[0].Domainlink2}
              Domainlink3={DSAPuneData[0].Domainlink3}
              Domainlink4={DSAPuneData[0].Domainlink4}
              Domainlink5={DSAPuneData[0].Domainlink5}
              Domainlink6={DSAPuneData[0].Domainlink6}
              Domainlink7={DSAPuneData[0].Domainlink7}
              Domainlink8={DSAPuneData[0].Domainlink8}
              Domainlink9={DSAPuneData[0].Domainlink9}
              Domainlink10={DSAPuneData[0].Domainlink10}
              CertificationHead1={DSAPuneData[0].CertificationHead1}
              CertificationBot1={DSAPuneData[0].CertificationBot1}
              src={DSAPuneData[0].src}
              src22={DSAPuneData[0].src22}
              src33={DSAPuneData[0].src33}
              ModuleHead1={DSAPuneData[0].ModuleHead1}
              ModuleBot1={DSAPuneData[0].ModuleBot1}
              ModuleBot2={DSAPuneData[0].ModuleBot2}
              syllabush1={DSAPuneData[0].syllabush1}
              syllabusb1={DSAPuneData[0].syllabusb1}
              SyllabusBotlist11={DSAPuneData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSAPuneData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSAPuneData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSAPuneData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSAPuneData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSAPuneData[0].SyllabusBotlist16}
              syllabush2={DSAPuneData[0].syllabush2}
              syllabusb2={DSAPuneData[0].syllabusb2}
              SyllabusBotlist21={DSAPuneData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSAPuneData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSAPuneData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSAPuneData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSAPuneData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSAPuneData[0].SyllabusBotlist26}
              syllabush3={DSAPuneData[0].syllabush3}
              syllabusb3={DSAPuneData[0].syllabusb3}
              SyllabusBotlist31={DSAPuneData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSAPuneData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSAPuneData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSAPuneData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSAPuneData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSAPuneData[0].SyllabusBotlist36}
              syllabush4={DSAPuneData[0].syllabush4}
              syllabusb4={DSAPuneData[0].syllabusb4}
              SyllabusBotlist41={DSAPuneData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSAPuneData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSAPuneData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSAPuneData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSAPuneData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSAPuneData[0].SyllabusBotlist46}
              syllabussrc={DSAPuneData[0].syllabussrc}
              JobHead1={DSAPuneData[0].JobHead1}
              JobBot1={DSAPuneData[0].JobBot1}
              JobBot2={DSAPuneData[0].JobBot2}
              JobHead2={DSAPuneData[0].JobHead2}
              JobBot3={DSAPuneData[0].JobBot3}
              JobHead3={DSAPuneData[0].JobHead3}
              JobBot7={DSAPuneData[0].JobBot7}
              JobHead4={DSAPuneData[0].JobHead4}
              JobBot8={DSAPuneData[0].JobBot8}
              JobBot9={DSAPuneData[0].JobBot9}
              JobHead6={DSAPuneData[0].JobHead6}
              JobBot11={DSAPuneData[0].JobBot11}
              ProjectsBot1={DSAPuneData[0].ProjectsBot1}
              src1={DSAPuneData[0].src1}
              ProjectsH1={DSAPuneData[0].ProjectsH1}
              Projectsp1={DSAPuneData[0].Projectsp1}
              src2={DSAPuneData[0].src2}
              ProjectsH2={DSAPuneData[0].ProjectsH2}
              Projectsp2={DSAPuneData[0].Projectsp2}
              src3={DSAPuneData[0].src3}
              ProjectsH3={DSAPuneData[0].ProjectsH3}
              Projectsp3={DSAPuneData[0].Projectsp3}
              src4={DSAPuneData[0].src4}
              ProjectsH4={DSAPuneData[0].ProjectsH4}
              Projectsp4={DSAPuneData[0].Projectsp4}
              AlumniBot1={DSAPuneData[0].AlumniBot1}
              Asrc1={DSAPuneData[0].Asrc1}
              AlumniH1={DSAPuneData[0].AlumniH1}
              Alumnip1={DSAPuneData[0].Alumnip1}
              Asrc2={DSAPuneData[0].Asrc2}
              AlumniH2={DSAPuneData[0].AlumniH2}
              Alumnip2={DSAPuneData[0].Alumnip2}
              Asrc3={DSAPuneData[0].Asrc3}
              AlumniH3={DSAPuneData[0].AlumniH3}
              Alumnip3={DSAPuneData[0].Alumnip3}
              Asrc4={DSAPuneData[0].Asrc4}
              AlumniH4={DSAPuneData[0].AlumniH4}
              Alumnip4={DSAPuneData[0].Alumnip4}
              alt1={DSAPuneData[0].alt1}
              alt2={DSAPuneData[0].alt2}
              alt3={DSAPuneData[0].alt3}
              alt4={DSAPuneData[0].alt4}
              alt5={DSAPuneData[0].alt5}
              alt6={DSAPuneData[0].alt6}
              alt7={DSAPuneData[0].alt7}
              alt8={DSAPuneData[0].alt8}
              alt9={DSAPuneData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSAPuneData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map BangaloreMap={true} />
        <CityText CityText={true} />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
