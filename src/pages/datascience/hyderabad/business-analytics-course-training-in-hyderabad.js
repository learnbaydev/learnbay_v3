import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BusinessAnalyticsHyderabadCourseData } from '../../../CityData/Hyderabad/businessAnalyticsCourseTrainingInHyderabad';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Navbar from '../../../components/Global/Navbar/Navbar';
import Popup from '../../../components/Global/Popup/Popup';
import FeeSection from '../../../components/Seo/FeeSection/FeeSection';
import Testimonial from '../../../components/Seo/Testimonial/Testimonial';
import styles from '../../../styles/Home.module.css';
const FirstSection = dynamic(
  () => import('../../../components/Seo/FirstSection/FirstSection')
);
const SecondSection = dynamic(
  () => import('../../../components/Seo/SecondSection/SecondSection')
);
const ProgramInfo = dynamic(
  () => import('../../../components/Seo/ProgramInfo/ProgramInfo')
);
const SeventhSection = dynamic(
  () => import('../../../components/Seo/SeventhSection/SeventhSection')
);
const ProgramFee = dynamic(
  () => import('../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee')
);
const CityText = dynamic(
  () => import('../../../components/Seo/CityText/CityText')
);
const CitiesLeft = dynamic(
  () => import('../../../components/Seo/CitiesLeft/CitiesLeft')
);
const CitiesRight = dynamic(
  () => import('../../../components/Seo/CitiesRight/CitiesRightdomain')
);
const FAQNew = dynamic(() => import('../../../components/Seo/FAQNew/FAQNew'));
const OfferPopup = dynamic(
  () => import('../../../components/Global/OfferPopup/OfferPopup')
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
      const data = await fetch('/api/Popup/popupGenerate', {
        method: 'GET',
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
            if (popupData === 'Adv Data Science and AI') {
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
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/DABA_2026.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Business Analyst Course in Hyderabad [2026] | IBM Certification
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Best Business Analytics Training in Hyderabad in 2026 by Learnbay. Learn GenAI, earn IBM & IIT Patna dual certification, and assured placement assistance. "
        />
        <meta
          name="keywords"
          content="Business Analytics course in Hyderabad, Business Analytics training in Hyderabad, Business Analytics institute in Hyderabad, best Business Analytics institute in Hyderabad, Business Analytics course in Hyderabad, Business Analytics certification in Hyderabad, Business Analytics training institute in Hyderabad, advanced Business Analytics course in Hyderabad, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Business Analyst Course in Hyderabad [2026] | IBM Certification"
        />
        <meta
          property="og:description"
          content="Best Business Analytics Training in Hyderabad in 2026 by Learnbay. Learn GenAI, earn IBM & IIT Patna dual certification, and assured placement assistance."
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
          content="https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad"
        />
        <meta
          name="twitter:title"
          content="Business Analyst Course in Hyderabad [2026] | IBM Certification"
        />
        <meta
          name="twitter:description"
          content="Best Business Analytics Training in Hyderabad in 2026 by Learnbay. Learn GenAI, earn IBM & IIT Patna dual certification, and assured placement assistance."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
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
  "@type": "Product",
  "name": "Business Analyst Course in Hyderabad [2026] | IBM Certification",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "1509"
  }
}
}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
             "@context": "https://schema.org",
  "@type": "Course",
  "name": "Business Analyst Course in Hyderabad [2026] | IBM Certification",
  "description": "Best Business Analytics Training in Hyderabad in 2026 by Learnbay. Learn GenAI, earn IBM & IIT Patna dual certification, and assured placement assistance.",
  "url": "https://www.learnbay.co/datascience/hyderabad/business-analytics-course-training-in-hyderabad",
  "provider": {
    "@type": "Organization",
    "name": "Learnbay",
    "sameAs": "https://www.learnbay.co/"
  },
  "offers": {
    "@type": "Offer",
    "price": "120000",
    "priceCurrency": "INR",
    "category": "Educational"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "P6M",
    "offers": {
      "@type": "Offer",
      "price": "120000",
      "priceCurrency": "INR"
    }
  }
}
  }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are the prerequisites for the Business Analytics Training Course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Business Analytics certification course in Hyderabad, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
    }
  },{
    "@type": "Question",
    "name": "What if I miss a few classes due to an emergency?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
    }
  },{
    "@type": "Question",
    "name": "What is a Flexi Subscription in the Business Analytics Certification course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of the Business Analytics Course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the Business Analytics course training in Hyderabad is about 6-7 months, including weekend and weekday batches."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of Business Analytics training at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online Business Analytics training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is the total fee for the Business Analytics Program in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total program fee for the Business Analytics Program is INR 1,20,000/- inclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for INR 1,20,000/-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for the Business Analytics Program? What is Group Discount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "What is the refund policy for the Business Analytics Program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the program."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a set of 5 Real-time projects from multiple industries live Healthcare, Banking, Finance, Insurance, Retail, etc."
    }
  },{
    "@type": "Question",
    "name": "How will the project be executed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will be awarded IBM accredited Business Analytics Certificate on successful course completion."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance program in Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments, Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How many interview calls will I get at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year."
    }
  },{
    "@type": "Question",
    "name": "What is a job-readiness program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
    }
  },{
    "@type": "Question",
    "name": "Will I get job referrals at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer dedicated placement assistance by referring your profile through our partnered consultancies and companies."
    }
  },{
    "@type": "Question",
    "name": "Until when will the students get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors will provide data science training to the students until the completion of the course."
    }
  },{
    "@type": "Question",
    "name": "Can a Learnbay student choose to study from their desired mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
    }
  },{
    "@type": "Question",
    "name": "When is the job assistance provided at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
    }
  },{
    "@type": "Question",
    "name": "How long will I get Job referrals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
    }
  }]
}
 }`,
          }}
        />
      </Head>
      <main>
        {' '}
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
          FirstTyped="Job-ready with interview support"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          dataScienceCounselling={true}
          interstedInHide={true}
          titleCourse="Business Analytics Course Training In Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/manager+header+image.webp"
          firstHeading="Business Analytics Course Training In Hyderabad"
          firstToparaImg="For Non-tech Professionals"
          firstTopPara="IBM Certified Business Analytics Course for Early Professionals"
          idss="CHut_wm-P2s"
          iitptnaandms={true}
        />
        <SecondSection
          SecondSectionData={
            BusinessAnalyticsHyderabadCourseData[0].secondSection
          }
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BusinessAnalyticsHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,20,000"
            FeeEmi="₹ 6,228/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekend Batch"
            weekday="MON-FRI"
            weekend="SAT- SUN"
            WeekdayDate="Oct 18th"
            WeekendDate="Nov 17th"
            WeekendTime="9:30 AM - 1:00 PM"
            WeekdayTime="8:00 PM - 10:30 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            titleCourse="Business Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf"
            brochurePdf={pdfUrl}
            dataScience={true}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹95,000"
            monthlyPayment1="₹6,228"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹95,000"
            monthlyPayment2="₹9,342"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              hydrabad={true}
              ProgramHead1={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead1
              }
              ProgramBot1={BusinessAnalyticsHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={BusinessAnalyticsHyderabadCourseData[0].ProgramBot2}
              ProgramHead3={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead3
              }
              ProgramBot3={BusinessAnalyticsHyderabadCourseData[0].ProgramBot3}
              ProgramBot66={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot66
              }
              ProgramBot32={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot32
              }
              ProgramHead4={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead4
              }
              ProgramBot4={BusinessAnalyticsHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead5
              }
              ProgramBot5={BusinessAnalyticsHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead6
              }
              ProgramBot6={BusinessAnalyticsHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead7
              }
              ProgramBot8={BusinessAnalyticsHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={BusinessAnalyticsHyderabadCourseData[0].ProgramBot9}
              DomainHead1={BusinessAnalyticsHyderabadCourseData[0].DomainHead1}
              DomainBot1={BusinessAnalyticsHyderabadCourseData[0].DomainBot1}
              DomainBot2={BusinessAnalyticsHyderabadCourseData[0].DomainBot2}
              DomainBot3={BusinessAnalyticsHyderabadCourseData[0].DomainBot3}
              DomainList1={BusinessAnalyticsHyderabadCourseData[0].DomainList1}
              DomainList2={BusinessAnalyticsHyderabadCourseData[0].DomainList2}
              DomainList3={BusinessAnalyticsHyderabadCourseData[0].DomainList3}
              DomainList4={BusinessAnalyticsHyderabadCourseData[0].DomainList4}
              DomainList5={BusinessAnalyticsHyderabadCourseData[0].DomainList5}
              DomainList6={BusinessAnalyticsHyderabadCourseData[0].DomainList6}
              DomainList7={BusinessAnalyticsHyderabadCourseData[0].DomainList7}
              DomainList8={BusinessAnalyticsHyderabadCourseData[0].DomainList8}
              DomainList9={BusinessAnalyticsHyderabadCourseData[0].DomainList9}
              DomainList10={
                BusinessAnalyticsHyderabadCourseData[0].DomainList10
              }
              Domainlink1={BusinessAnalyticsHyderabadCourseData[0].Domainlink1}
              Domainlink2={BusinessAnalyticsHyderabadCourseData[0].Domainlink2}
              Domainlink3={BusinessAnalyticsHyderabadCourseData[0].Domainlink3}
              Domainlink4={BusinessAnalyticsHyderabadCourseData[0].Domainlink4}
              Domainlink5={BusinessAnalyticsHyderabadCourseData[0].Domainlink5}
              Domainlink6={BusinessAnalyticsHyderabadCourseData[0].Domainlink6}
              Domainlink7={BusinessAnalyticsHyderabadCourseData[0].Domainlink7}
              Domainlink8={BusinessAnalyticsHyderabadCourseData[0].Domainlink8}
              Domainlink9={BusinessAnalyticsHyderabadCourseData[0].Domainlink9}
              Domainlink10={
                BusinessAnalyticsHyderabadCourseData[0].Domainlink10
              }
              CertificationHead1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot2
              }
              src={BusinessAnalyticsHyderabadCourseData[0].src}
              src22={BusinessAnalyticsHyderabadCourseData[0].src22}
              src33={BusinessAnalyticsHyderabadCourseData[0].src33}
              src44={BusinessAnalyticsHyderabadCourseData[0].src44}
              ModuleHead1={BusinessAnalyticsHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={BusinessAnalyticsHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={BusinessAnalyticsHyderabadCourseData[0].ModuleBot2}
              ModuleBot3={BusinessAnalyticsHyderabadCourseData[0].ModuleBot3}
              ModuleHead3={BusinessAnalyticsHyderabadCourseData[0].ModuleHead3}
              ModuleBot4={BusinessAnalyticsHyderabadCourseData[0].ModuleBot4}
              syllabush1={BusinessAnalyticsHyderabadCourseData[0].syllabush1}
              syllabusb1={BusinessAnalyticsHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={BusinessAnalyticsHyderabadCourseData[0].syllabush2}
              syllabusb2={BusinessAnalyticsHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={BusinessAnalyticsHyderabadCourseData[0].syllabush3}
              syllabusb3={BusinessAnalyticsHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={BusinessAnalyticsHyderabadCourseData[0].syllabush4}
              syllabusb4={BusinessAnalyticsHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={BusinessAnalyticsHyderabadCourseData[0].syllabussrc}
              JobHead1={BusinessAnalyticsHyderabadCourseData[0].JobHead1}
              JobBot1={BusinessAnalyticsHyderabadCourseData[0].JobBot1}
              JobBot2={BusinessAnalyticsHyderabadCourseData[0].JobBot2}
              JobBot5={BusinessAnalyticsHyderabadCourseData[0].JobBot5}
              JobHead2={BusinessAnalyticsHyderabadCourseData[0].JobHead2}
              JobBot3={BusinessAnalyticsHyderabadCourseData[0].JobBot3}
              JobBot4={BusinessAnalyticsHyderabadCourseData[0].JobBot4}
              JobBot6={BusinessAnalyticsHyderabadCourseData[0].JobBot6}
              ProjectsBot1={
                BusinessAnalyticsHyderabadCourseData[0].ProjectsBot1
              }
              ProjectsBot2={
                BusinessAnalyticsHyderabadCourseData[0].ProjectsBot2
              }
              src1={BusinessAnalyticsHyderabadCourseData[0].src1}
              ProjectsH1={BusinessAnalyticsHyderabadCourseData[0].ProjectsH1}
              Projectsp1={BusinessAnalyticsHyderabadCourseData[0].Projectsp1}
              src2={BusinessAnalyticsHyderabadCourseData[0].src2}
              ProjectsH2={BusinessAnalyticsHyderabadCourseData[0].ProjectsH2}
              Projectsp2={BusinessAnalyticsHyderabadCourseData[0].Projectsp2}
              src3={BusinessAnalyticsHyderabadCourseData[0].src3}
              ProjectsH3={BusinessAnalyticsHyderabadCourseData[0].ProjectsH3}
              Projectsp3={BusinessAnalyticsHyderabadCourseData[0].Projectsp3}
              src4={BusinessAnalyticsHyderabadCourseData[0].src4}
              ProjectsH4={BusinessAnalyticsHyderabadCourseData[0].ProjectsH4}
              Projectsp4={BusinessAnalyticsHyderabadCourseData[0].Projectsp4}
              AlumniBot1={BusinessAnalyticsHyderabadCourseData[0].AlumniBot1}
              Asrc1={BusinessAnalyticsHyderabadCourseData[0].Asrc1}
              AlumniH1={BusinessAnalyticsHyderabadCourseData[0].AlumniH1}
              Alumnip1={BusinessAnalyticsHyderabadCourseData[0].Alumnip1}
              Asrc2={BusinessAnalyticsHyderabadCourseData[0].Asrc2}
              AlumniH2={BusinessAnalyticsHyderabadCourseData[0].AlumniH2}
              Alumnip2={BusinessAnalyticsHyderabadCourseData[0].Alumnip2}
              Asrc3={BusinessAnalyticsHyderabadCourseData[0].Asrc3}
              AlumniH3={BusinessAnalyticsHyderabadCourseData[0].AlumniH3}
              Alumnip3={BusinessAnalyticsHyderabadCourseData[0].Alumnip3}
              Asrc4={BusinessAnalyticsHyderabadCourseData[0].Asrc4}
              AlumniH4={BusinessAnalyticsHyderabadCourseData[0].AlumniH4}
              Alumnip4={BusinessAnalyticsHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew
                FAQNewData={BusinessAnalyticsHyderabadCourseData[0].faq}
              />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={BusinessAnalyticsHyderabadCourseData[0].CityTextB}
          CityText={BusinessAnalyticsHyderabadCourseData[0].CityText}
          CityTextLB={BusinessAnalyticsHyderabadCourseData[0].CityTextLB}
          CityTextL={BusinessAnalyticsHyderabadCourseData[0].CityTextL}
        /> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            marginBottom: '20px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.68866029517534!2d78.3934821!3d17.4831859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9111ba959afb%3A0x1e9251b5636b5de1!2sLearnbay!5e0!3m2!1sen!2sin!4v1755758744210!5m2!1sen!2sin"
            width="700"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
