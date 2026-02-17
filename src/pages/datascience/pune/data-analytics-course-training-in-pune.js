import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DAPuneCourseData } from '../../../CityData/Pune/dataAnalyticsCourseTrainingInPune';
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
const OfferPopup = dynamic(
  () => import('../../../components/Global/OfferPopup/OfferPopup')
);
const FAQNew = dynamic(() => import('../../../components/Seo/FAQNew/FAQNew'));

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
        <title>Data Analytics Course Training in Pune | Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst.          "
        />
        <meta
          name="keywords"
          content="data analytics course in pune, data analytics training in pune
          data analyst course in pune, best data analyst course in pune
          data analytics institute in pune, data analysis courses in pune, data analytics certification in pune, business analytics course in pune, data analytics courses in pune with placement assistance, data analytics classes in pune
          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Analytics Course Training in Pune | Learnbay"
        />
        <meta
          property="og:description"
          content="Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst."
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
          content="https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune"
        />
        <meta
          name="twitter:title"
          content="Data Analytics Course Training in Pune | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />

        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
  "@type": "LocalBusiness",
  "name": "Learnbay - Data science and Generative AI courses training in Pune",
  "description": "Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst.",
  "url": "https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "office no. 408, 4th floor, City Space, opposite to Fiserv, Viman Nagar",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.562830973846324,
    "longitude": 73.92150074243546
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
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "₹ 1,20,000 + 18% GST",
  "areaServed": "Pune",
  "paymentAccepted": "Cash, Credit Card, Debit Card, EMI",
  "sameAs": [
    "https://www.facebook.com/learnbay/",
    "https://twitter.com/Learnbay",
    "https://www.instagram.com/learnbayofficial/",
    "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
    "https://www.linkedin.com/company/learnbay/"
  ]
}
   `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Data Analytics Course Training in Pune | Learnbay",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "2485"
  }
}
   `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Analytics Course Training in Pune | Learnbay",
  "description": "Enroll in our Data Analytics Course in Pune now!! Gain industry recognition with IBM Certification to accelerate your career as a Data Analyst.",
  "url": "https://www.learnbay.co/datascience/pune/data-analytics-course-training-in-pune",
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
   `,
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
    "name": "What are the prerequisites for the Data Analytics Training Course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Data Analytics certification course in Pune as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in the Data Analytics Certification Program in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of the Data Analytics Course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the Data Analytics course training in Pune is 8-9 months, including weekend and weekday batches."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of Data Analytics training at Learnbay, Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online Data Analytics training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization associated with the Learnbay data analytics certification course in Pune?",
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
      "text": "After enrolling in the data analytics course with domain specialisation course, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
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
    "name": "What is the total fee for the Data Analytics Program in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total program fee for the Data Analytics Program is INR 1,20,000 + 18% GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for INR 1,20,000 + 18% GST-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option . You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for the Data Analytics Certification in Pune? What is Group Discount?",
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
      "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc"
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
      "text": "Yes, you will be awarded Gen AI and IIT Patna accredited Data Analytics Certificate on successful course completion."
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
 `,
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="Data Analytics Course Training in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Data+Analytics+and+Business+Analytics+with+GenAI+Certification+Program_compv1.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Pune"
          firstTopPara="Industrial Training Program for Early-professionals"
          cityParaCont="Gain inarguable eminence to sustain in today’s digital world via Learnbay’s data analytics course in Pune. Join our practical, accessible, and Generative AI-rich courses to build a globally recognized career. Our industry alliance with IBM (course & project certifications) and 450+ MNCs ensures an invincible career path.           "
        />
        <SecondSection SecondSectionData={DAPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DAPuneCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,20,000"
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
            FeeContent5="15 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Data Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Data+Analytics+and+Business+Analytics+with+GenAI+Certification+Program_compv1.pdf"
            brochurePdf={pdfUrl}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="1,20,000"
            monthlyPayment1="₹5,572"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="1,20,000"
            monthlyPayment2="₹8,358"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDAPune={true}
              cityTextJDAPune={true}
              ProgramHead1={DAPuneCourseData[0].ProgramHead1}
              ProgramBot1={DAPuneCourseData[0].ProgramBot1}
              ProgramBot2={DAPuneCourseData[0].ProgramBot2}
              ProgramBot3={DAPuneCourseData[0].ProgramBot3}
              ProgramBot4={DAPuneCourseData[0].ProgramBot4}
              ProgramBot5={DAPuneCourseData[0].ProgramBot5}
              ProgramBot6={DAPuneCourseData[0].ProgramBot6}
              ProgramBot7={DAPuneCourseData[0].ProgramBot7}
              ProgramBot8={DAPuneCourseData[0].ProgramBot8}
              ProgramBot9={DAPuneCourseData[0].ProgramBot9}
              ProgramBot32={DAPuneCourseData[0].ProgramBot32}
              ProgramBot10={DAPuneCourseData[0].ProgramBot10}
              ProgramBot11={DAPuneCourseData[0].ProgramBot11}
              ProgramBot12={DAPuneCourseData[0].ProgramBot12}
              ProgramHead3={DAPuneCourseData[0].ProgramHead3}
              ProgramBot31={DAPuneCourseData[0].ProgramBot31}
              ProgramHead4={DAPuneCourseData[0].ProgramHead4}
              ProgramHead5={DAPuneCourseData[0].ProgramHead5}
              CertificationHead1={DAPuneCourseData[0].CertificationHead1}
              CertificationBot3={DAPuneCourseData[0].CertificationBot3}
              ProgramHead6={DAPuneCourseData[0].ProgramHead6}
              Courselink1={DAPuneCourseData[0].Courselink1}
              Courselink2={DAPuneCourseData[0].Courselink2}
              Courselink3={DAPuneCourseData[0].Courselink3}
              Courselink4={DAPuneCourseData[0].Courselink4}
              Courselink5={DAPuneCourseData[0].Courselink5}
              Course1={DAPuneCourseData[0].Course1}
              Course2={DAPuneCourseData[0].Course2}
              Course3={DAPuneCourseData[0].Course3}
              Course4={DAPuneCourseData[0].Course4}
              Course5={DAPuneCourseData[0].Course5}
              DomainHead1={DAPuneCourseData[0].DomainHead1}
              DomainBot1={DAPuneCourseData[0].DomainBot1}
              DomainBot2={DAPuneCourseData[0].DomainBot2}
              DomainBot3={DAPuneCourseData[0].DomainBot3}
              DomainList1={DAPuneCourseData[0].DomainList1}
              DomainList2={DAPuneCourseData[0].DomainList2}
              DomainList3={DAPuneCourseData[0].DomainList3}
              DomainList4={DAPuneCourseData[0].DomainList4}
              DomainList5={DAPuneCourseData[0].DomainList5}
              DomainList6={DAPuneCourseData[0].DomainList6}
              DomainList7={DAPuneCourseData[0].DomainList7}
              DomainList8={DAPuneCourseData[0].DomainList8}
              DomainList9={DAPuneCourseData[0].DomainList9}
              DomainList10={DAPuneCourseData[0].DomainList10}
              Domainlink1={DAPuneCourseData[0].Domainlink1}
              Domainlink2={DAPuneCourseData[0].Domainlink2}
              Domainlink3={DAPuneCourseData[0].Domainlink3}
              Domainlink4={DAPuneCourseData[0].Domainlink4}
              Domainlink5={DAPuneCourseData[0].Domainlink5}
              Domainlink6={DAPuneCourseData[0].Domainlink6}
              Domainlink7={DAPuneCourseData[0].Domainlink7}
              Domainlink8={DAPuneCourseData[0].Domainlink8}
              Domainlink9={DAPuneCourseData[0].Domainlink9}
              Domainlink10={DAPuneCourseData[0].Domainlink10}
              CertificationBot1={DAPuneCourseData[0].CertificationBot1}
              CertificationBot2={DAPuneCourseData[0].CertificationBot2}
              src={DAPuneCourseData[0].src}
              src22={DAPuneCourseData[0].src22}
              src44={DAPuneCourseData[0].src44}
              ModuleHead1={DAPuneCourseData[0].ModuleHead1}
              ModuleBot1={DAPuneCourseData[0].ModuleBot1}
              ModuleBot2={DAPuneCourseData[0].ModuleBot2}
              ModuleBot3={DAPuneCourseData[0].ModuleBot3}
              ModuleBot4={DAPuneCourseData[0].ModuleBot4}
              syllabush1={DAPuneCourseData[0].syllabush1}
              syllabusb1={DAPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DAPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DAPuneCourseData[0].syllabush2}
              syllabusb2={DAPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DAPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DAPuneCourseData[0].syllabush3}
              syllabusb3={DAPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DAPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DAPuneCourseData[0].syllabush4}
              syllabusb4={DAPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DAPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DAPuneCourseData[0].syllabussrc}
              JobHead1={DAPuneCourseData[0].JobHead1}
              JobBot1={DAPuneCourseData[0].JobBot1}
              JobBot2={DAPuneCourseData[0].JobBot2}
              JobBot4={DAPuneCourseData[0].JobBot4}
              JobBot5={DAPuneCourseData[0].JobBot5}
              JobBot7={DAPuneCourseData[0].JobBot7}
              JobHead2={DAPuneCourseData[0].JobHead2}
              JobHead3={DAPuneCourseData[0].JobHead3}
              JobHead5={DAPuneCourseData[0].JobHead5}
              JobHead4={DAPuneCourseData[0].JobHead4}
              JobBot3={DAPuneCourseData[0].JobBot3}
              JobBot6={DAPuneCourseData[0].JobBot6}
              JobBot8={DAPuneCourseData[0].JobBot8}
              JobBot9={DAPuneCourseData[0].JobBot9}
              JobBot10={DAPuneCourseData[0].JobBot10}
              JobBot11={DAPuneCourseData[0].JobBot11}
              ProjectsBot1={DAPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={DAPuneCourseData[0].ProjectsBot2}
              ProjectsBot3={DAPuneCourseData[0].ProjectsBot3}
              src1={DAPuneCourseData[0].src1}
              ProjectsH1={DAPuneCourseData[0].ProjectsH1}
              Projectsp1={DAPuneCourseData[0].Projectsp1}
              src2={DAPuneCourseData[0].src2}
              ProjectsH2={DAPuneCourseData[0].ProjectsH2}
              Projectsp2={DAPuneCourseData[0].Projectsp2}
              src3={DAPuneCourseData[0].src3}
              ProjectsH3={DAPuneCourseData[0].ProjectsH3}
              Projectsp3={DAPuneCourseData[0].Projectsp3}
              src4={DAPuneCourseData[0].src4}
              ProjectsH4={DAPuneCourseData[0].ProjectsH4}
              Projectsp4={DAPuneCourseData[0].Projectsp4}
              AlumniBot1={DAPuneCourseData[0].AlumniBot1}
              Asrc1={DAPuneCourseData[0].Asrc1}
              AlumniH1={DAPuneCourseData[0].AlumniH1}
              Alumnip1={DAPuneCourseData[0].Alumnip1}
              Asrc2={DAPuneCourseData[0].Asrc2}
              AlumniH2={DAPuneCourseData[0].AlumniH2}
              Alumnip2={DAPuneCourseData[0].Alumnip2}
              Asrc3={DAPuneCourseData[0].Asrc3}
              AlumniH3={DAPuneCourseData[0].AlumniH3}
              Alumnip3={DAPuneCourseData[0].Alumnip3}
              Asrc4={DAPuneCourseData[0].Asrc4}
              AlumniH4={DAPuneCourseData[0].AlumniH4}
              Alumnip4={DAPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAPuneCourseData[0].CityTextB}
          CityText={DAPuneCourseData[0].CityText}
          CityTextLB={DAPuneCourseData[0].CityTextLB}
          CityTextL={DAPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
