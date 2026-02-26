import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DataAnalyticsChennaiCourseData } from '../../../CityData/Chennai/dataAnalyticsCourseTrainingInChennai';
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
  () => import('../../../components/Seo/CitiesLeft/CitiesLeftDomain')
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Data-Analytics-Certification.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Analytics Course Training in Chennai | Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the Best Data Analytics in Chennai. Learn Power BI, SQL, Python & GenAI with IBM certification. Avail dedicated Job Assist.  Enroll for the 2026 batch now!"
        />
        <meta
          name="keywords"
          content="Data Analytics Course in Chennai, data Analytics training in Chennai, data science institute in Chennai, best data science institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, data science training institute in Chennai, advanced Data Analytics Course in Chennai, Data Analytics Course with Placement Assistance, Data Analytics Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/data-analytics-course-training-in-chennai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Analytics Course Training in Chennai | Learnbay"
        />
        <meta
          property="og:description"
          content="Join the Best Data Analytics in Chennai. Learn Power BI, SQL, Python & GenAI with IBM certification. Avail dedicated Job Assist.  Enroll for the 2026 batch now!"
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
          content="https://www.learnbay.co/datascience/chennai/data-analytics-course-training-in-chennai"
        />
        <meta
          name="twitter:title"
          content="Data Analytics Course Training in Chennai | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Join the Best Data Analytics in Chennai. Learn Power BI, SQL, Python & GenAI with IBM certification. Avail dedicated Job Assist.  Enroll for the 2026 batch now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/chennai/data-analytics-course-training-in-chennai"
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
  "name": "Data Analytics Course Training in Chennai | Learnbay",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "814"
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
  "name": "Data Analytics Course Training in Chennai | Learnbay",
  "description": "Join the Best Data Analytics in Chennai. Learn Power BI, SQL, Python & GenAI with IBM certification. Avail dedicated Job Assist.  Enroll for the 2026 batch now!",
  "url": "https://www.learnbay.co/datascience/chennai/data-analytics-course-training-in-chennai",
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
    "name": "What are the prerequisites for the Data Analytics Training Course in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Data Analytics certification course in Chennai as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in the Data Analytics Certification Program in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of the Data Analytics Course in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of this Data Analytics Course is about 6 months ( 180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 4.5 months Monday to Friday - 2 hours/day Weekend batch - 6 months Saturday & Sunday - 3.5 hours/day"
    }
  },{
    "@type": "Question",
    "name": "What is the mode of Data Analytics training at Learnbay, Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online Data Analytics training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization associated with the Learnbay data analytics certification course in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data analytics with Gen AI modules that help you learn the best practices of the respective industry."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc."
    }
  },{
    "@type": "Question",
    "name": "Which domain elective is best suited for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Why is domain specialization important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the ML with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
    }
  },{
    "@type": "Question",
    "name": "Can I select multiple domain electives and do I need to pay extra charges?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select up to 4 domain electives based on your interest and career goals. No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
    }
  },{
    "@type": "Question",
    "name": "What if I don't have any prior experience in any domain?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If you don't have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects."
    }
  },{
    "@type": "Question",
    "name": "Can I change my domain electives later?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
    }
  },{
    "@type": "Question",
    "name": "What is the total fee for the Data Analytics Program in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total Program fee for the data analytics program in Chennai is 1,20,000/- exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in instalments of INR 1,20,000/-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay in instalments using a credit card with a no-cost EMI option for upto 12 months. You can also choose an interest-free loan by submitting an Aadhar card, PAN card, and a 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for the Data Analytics Certification in Chennai? What is Group Discount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "What is the refund policy for the Data Analytics Course at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects/case studies will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc. Click here to download the list of the projects."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc."
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
      "text": "You will receive 3 certifications, two from IBM and one from IIT Patna, upon successful completion of the data analytics course in Chennai."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance program in Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
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
      "text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
    }
  },{
    "@type": "Question",
    "name": "Until when will the students get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors will provide Data Analytics training to the students until the completion of the course."
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
          dataScienceCounselling={true}
          interstedInHide={true}
          FirstTyped="Job-ready with interview support"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          titleCourse="Data Analytics Course Training in Chennai For Professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Chennai "
          firstTopPara="Industrial Program For Early Pros"
          idss="y_0IdhFKJKM"
        />
        <SecondSection
          SecondSectionData={DataAnalyticsChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataAnalyticsChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,20,000"
            FeeEmi="₹5,572/month"
            weekdaybatch="Weekend Batch"
            weekendbatch="Weekday Batch"
            weekday="SAT - SUN"
            weekend="MON - THU"
            WeekdayDate="19th Jan"
            WeekendDate="3rd Jan"
            WeekendTime="8:00 PM - 10:30 PM"
            WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Data Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf"
            brochurePdf={pdfUrl}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹85,000"
            monthlyPayment1="₹5,572"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹85,000"
            monthlyPayment2="₹8,358"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              chennai={true}
              ProgramHead1={DataAnalyticsChennaiCourseData[0].ProgramHead1}
              ProgramHead2={DataAnalyticsChennaiCourseData[0].ProgramHead2}
              ProgramBot1={DataAnalyticsChennaiCourseData[0].ProgramBot1}
              ProgramBot2={DataAnalyticsChennaiCourseData[0].ProgramBot2}
              ProgramHead3={DataAnalyticsChennaiCourseData[0].ProgramHead3}
              ProgramBot3={DataAnalyticsChennaiCourseData[0].ProgramBot3}
              ProgramBot31={DataAnalyticsChennaiCourseData[0].ProgramBot31}
              ProgramBot32={DataAnalyticsChennaiCourseData[0].ProgramBot32}
              ProgramHead4={DataAnalyticsChennaiCourseData[0].ProgramHead4}
              ProgramBot4={DataAnalyticsChennaiCourseData[0].ProgramBot4}
              ProgramHead5={DataAnalyticsChennaiCourseData[0].ProgramHead5}
              ProgramBot5={DataAnalyticsChennaiCourseData[0].ProgramBot5}
              ProgramHead6={DataAnalyticsChennaiCourseData[0].ProgramHead6}
              ProgramBot6={DataAnalyticsChennaiCourseData[0].ProgramBot6}
              ProgramHead7={DataAnalyticsChennaiCourseData[0].ProgramHead7}
              ProgramBot8={DataAnalyticsChennaiCourseData[0].ProgramBot8}
              ProgramBot9={DataAnalyticsChennaiCourseData[0].ProgramBot9}
              DomainHead1={DataAnalyticsChennaiCourseData[0].DomainHead1}
              DomainBot1={DataAnalyticsChennaiCourseData[0].DomainBot1}
              DomainBot2={DataAnalyticsChennaiCourseData[0].DomainBot2}
              DomainBot3={DataAnalyticsChennaiCourseData[0].DomainBot3}
              DomainList1={DataAnalyticsChennaiCourseData[0].DomainList1}
              DomainList2={DataAnalyticsChennaiCourseData[0].DomainList2}
              DomainList3={DataAnalyticsChennaiCourseData[0].DomainList3}
              DomainList4={DataAnalyticsChennaiCourseData[0].DomainList4}
              DomainList5={DataAnalyticsChennaiCourseData[0].DomainList5}
              DomainList6={DataAnalyticsChennaiCourseData[0].DomainList6}
              DomainList7={DataAnalyticsChennaiCourseData[0].DomainList7}
              DomainList8={DataAnalyticsChennaiCourseData[0].DomainList8}
              DomainList9={DataAnalyticsChennaiCourseData[0].DomainList9}
              DomainList10={DataAnalyticsChennaiCourseData[0].DomainList10}
              Domainlink1={DataAnalyticsChennaiCourseData[0].Domainlink1}
              Domainlink2={DataAnalyticsChennaiCourseData[0].Domainlink2}
              Domainlink3={DataAnalyticsChennaiCourseData[0].Domainlink3}
              Domainlink4={DataAnalyticsChennaiCourseData[0].Domainlink4}
              Domainlink5={DataAnalyticsChennaiCourseData[0].Domainlink5}
              Domainlink6={DataAnalyticsChennaiCourseData[0].Domainlink6}
              Domainlink7={DataAnalyticsChennaiCourseData[0].Domainlink7}
              Domainlink8={DataAnalyticsChennaiCourseData[0].Domainlink8}
              Domainlink9={DataAnalyticsChennaiCourseData[0].Domainlink9}
              Domainlink10={DataAnalyticsChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                DataAnalyticsChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                DataAnalyticsChennaiCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataAnalyticsChennaiCourseData[0].CertificationBot2
              }
              src={DataAnalyticsChennaiCourseData[0].src}
              src22={DataAnalyticsChennaiCourseData[0].src22}
              src33={DataAnalyticsChennaiCourseData[0].src33}
              ModuleHead1={DataAnalyticsChennaiCourseData[0].ModuleHead1}
              ModuleBot1={DataAnalyticsChennaiCourseData[0].ModuleBot1}
              ModuleBot2={DataAnalyticsChennaiCourseData[0].ModuleBot2}
              syllabush1={DataAnalyticsChennaiCourseData[0].syllabush1}
              syllabusb1={DataAnalyticsChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataAnalyticsChennaiCourseData[0].syllabush2}
              syllabusb2={DataAnalyticsChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataAnalyticsChennaiCourseData[0].syllabush3}
              syllabusb3={DataAnalyticsChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataAnalyticsChennaiCourseData[0].syllabush4}
              syllabusb4={DataAnalyticsChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataAnalyticsChennaiCourseData[0].syllabussrc}
              JobHead1={DataAnalyticsChennaiCourseData[0].JobHead1}
              JobBot1={DataAnalyticsChennaiCourseData[0].JobBot1}
              JobBot2={DataAnalyticsChennaiCourseData[0].JobBot2}
              JobBot5={DataAnalyticsChennaiCourseData[0].JobBot5}
              JobHead2={DataAnalyticsChennaiCourseData[0].JobHead2}
              JobBot3={DataAnalyticsChennaiCourseData[0].JobBot3}
              JobBot4={DataAnalyticsChennaiCourseData[0].JobBot4}
              JobHead3={DataAnalyticsChennaiCourseData[0].JobHead3}
              JobBot6={DataAnalyticsChennaiCourseData[0].JobBot6}
              ProjectsHead1={DataAnalyticsChennaiCourseData[0].ProjectsHead1}
              ProjectsBot1={DataAnalyticsChennaiCourseData[0].ProjectsBot1}
              ProjectsBot2={DataAnalyticsChennaiCourseData[0].ProjectsBot2}
              src1={DataAnalyticsChennaiCourseData[0].src1}
              ProjectsH1={DataAnalyticsChennaiCourseData[0].ProjectsH1}
              Projectsp1={DataAnalyticsChennaiCourseData[0].Projectsp1}
              src2={DataAnalyticsChennaiCourseData[0].src2}
              ProjectsH2={DataAnalyticsChennaiCourseData[0].ProjectsH2}
              Projectsp2={DataAnalyticsChennaiCourseData[0].Projectsp2}
              src3={DataAnalyticsChennaiCourseData[0].src3}
              ProjectsH3={DataAnalyticsChennaiCourseData[0].ProjectsH3}
              Projectsp3={DataAnalyticsChennaiCourseData[0].Projectsp3}
              src4={DataAnalyticsChennaiCourseData[0].src4}
              ProjectsH4={DataAnalyticsChennaiCourseData[0].ProjectsH4}
              Projectsp4={DataAnalyticsChennaiCourseData[0].Projectsp4}
              AlumniBot1={DataAnalyticsChennaiCourseData[0].AlumniBot1}
              Asrc1={DataAnalyticsChennaiCourseData[0].Asrc1}
              AlumniH1={DataAnalyticsChennaiCourseData[0].AlumniH1}
              Alumnip1={DataAnalyticsChennaiCourseData[0].Alumnip1}
              Asrc2={DataAnalyticsChennaiCourseData[0].Asrc2}
              AlumniH2={DataAnalyticsChennaiCourseData[0].AlumniH2}
              Alumnip2={DataAnalyticsChennaiCourseData[0].Alumnip2}
              Asrc3={DataAnalyticsChennaiCourseData[0].Asrc3}
              AlumniH3={DataAnalyticsChennaiCourseData[0].AlumniH3}
              Alumnip3={DataAnalyticsChennaiCourseData[0].Alumnip3}
              Asrc4={DataAnalyticsChennaiCourseData[0].Asrc4}
              AlumniH4={DataAnalyticsChennaiCourseData[0].AlumniH4}
              Alumnip4={DataAnalyticsChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataAnalyticsChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            marginBottom: '20px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.27590561072!2d80.2479449!3d13.0630852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267157fcdb4bb%3A0x41b85b57fd1d6f0e!2sLearnbay%20-%20Chennai!5e0!3m2!1sen!2sin!4v1755767222127!5m2!1sen!2sin"
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
