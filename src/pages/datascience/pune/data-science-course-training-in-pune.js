import { dataSciencePuneFaqSchema } from '@/Data/Schema/dataSciencePuneFaqSchema';
import Navbar from '@/components/Global/Navbar/Navbar';
import Realstory from '@/components/Home/Realstory/Realstory';
import Map from '@/components/Seo/Maps/Maps';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSPuneCourseData } from '../../../CityData/Pune/dataScienceCourseTrainingInPune';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Popup from '../../../components/Global/Popup/Popup';
import FeeSection from '../../../components/Seo/FeeSection/FeeSection';
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
  () => import('../../../components/Seo/CitiesRight/CitiesRight')
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Program.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Science Course Training in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the best Data Science Course in Pune with Learnbay. Get IBM certified training, live classes, real projects & 100% placement assistance. Enroll now!"
        />
        <meta
          name="keywords"
          content="data science online course, data science certification in pune, data science course in india, data science course in pune, data science training in pune, data science courses, data science courses in pune, data science course, data science training, data science institute, data science certification,"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science Course Training in Pune - Learnbay"
        />
        <meta
          property="og:description"
          content="Join the best Data Science Course in Pune with Learnbay. Get IBM certified training, live classes, real projects & 100% placement assistance. Enroll now!"
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
          content="https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune"
        />
        <meta
          name="twitter:title"
          content="Best Data Science Course Training in Pune - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Join the best Data Science Course in Pune with Learnbay. Get IBM certified training, live classes, real projects & 100% placement assistance. Enroll now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
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
  "description": "Are you searching for the best data science courses in Pune? Learnbay is providing the best online data science course training in Pune.",
  "url": "https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune",
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

             }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "https://schema.org",
  "@type": "Product",
  "name": "Best Data Science Course Training in Pune - Learnbay",
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
 }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "https://schema.org",
  "@type": "Course",
  "name": "Best Data Science Course Training in Pune - Learnbay",
  "description": "Join the best Data Science Course in Pune with Learnbay. Get IBM certified training, live classes, real projects & 100% placement assistance. Enroll now!",
  "url": "https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune",
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
    "courseWorkload": "P9M",
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
    "name": "What are Data Science Training courses available at Learnbay in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance"
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Data Science Foundation course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the data science and Gen AI course is 9-13 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Pune at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Pune, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible data science courses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and AI Training with Placement Assistance- All domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
    "name": "What is the total fee for Data Science Certifications courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total course fees depend on which particular course you choose from the data science and agentic AI categories. Usually, the course price varies from 1,20,000 to 1,59,000 INR, exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Pune? What is Group Discount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "What is the refund policy for the Data Science Certification courses at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many capstone projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Pune? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will receive 3 to 4 certifications: the Course Completion Certification from IBM Certification and the Capstone Project Certification. For a few advanced and Master Programs, there will also be additional IBM certification."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year."
    }
  },{
    "@type": "Question",
    "name": "What is a job-readiness program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
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
    "name": "Until when do the students get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors will provide data science training to the students until the completion of the course."
    }
  },{
    "@type": "Question",
    "name": "Can a Learnbay student in Pune choose to study from their desired mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
    }
  },{
    "@type": "Question",
    "name": "When is the job assistance provided at Learnbay and how long will I get it?",
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
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          idss="-XjsfU8-bK8"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Science Courses in Pune"
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont=" Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited training from the best Data Science courses in Pune. This course will help you to capitalize on your domain expertise by utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSPuneCourseData[0].secondSection} />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,20,000"
            FeeEmi="₹8,850/month"
            weekdaybatch="Weekend Batch"
            weekendbatch="Weekday Batch"
            weekday="SAT - SUN"
            weekend="MON - THU"
            WeekdayDate="23rd Feb"
            WeekendDate="14th Feb"
            WeekendTime="8:00 PM - 10:30 PM"
            WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Advanced Data Science and AI Program with domain specialization"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,20,000"
            monthlyPayment1="₹8,850"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,20,000"
            monthlyPayment2="₹13,275"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSPune={true}
              ProgramBot1={DSPuneCourseData[0].ProgramBot1}
              ProgramHead3={DSPuneCourseData[0].ProgramHead3}
              ProgramBot3={DSPuneCourseData[0].ProgramBot3}
              ProgramBot31={DSPuneCourseData[0].ProgramBot31}
              ProgramBot4={DSPuneCourseData[0].ProgramBot4}
              ProgramBot5={DSPuneCourseData[0].ProgramBot5}
              ProgramBot6={DSPuneCourseData[0].ProgramBot6}
              Courselink1={DSPuneCourseData[0].Courselink1}
              Courselink2={DSPuneCourseData[0].Courselink2}
              Courselink3={DSPuneCourseData[0].Courselink3}
              Courselink4={DSPuneCourseData[0].Courselink4}
              Courselink5={DSPuneCourseData[0].Courselink5}
              Course1={DSPuneCourseData[0].Course1}
              Course2={DSPuneCourseData[0].Course2}
              Course3={DSPuneCourseData[0].Course3}
              Course4={DSPuneCourseData[0].Course4}
              Course5={DSPuneCourseData[0].Course5}
              DomainHead1={DSPuneCourseData[0].DomainHead1}
              DomainBot1={DSPuneCourseData[0].DomainBot1}
              DomainBot2={DSPuneCourseData[0].DomainBot2}
              DomainBot3={DSPuneCourseData[0].DomainBot3}
              DomainList1={DSPuneCourseData[0].DomainList1}
              DomainList2={DSPuneCourseData[0].DomainList2}
              DomainList3={DSPuneCourseData[0].DomainList3}
              DomainList4={DSPuneCourseData[0].DomainList4}
              DomainList5={DSPuneCourseData[0].DomainList5}
              DomainList6={DSPuneCourseData[0].DomainList6}
              DomainList7={DSPuneCourseData[0].DomainList7}
              DomainList8={DSPuneCourseData[0].DomainList8}
              DomainList9={DSPuneCourseData[0].DomainList9}
              DomainList10={DSPuneCourseData[0].DomainList10}
              Domainlink1={DSPuneCourseData[0].Domainlink1}
              Domainlink2={DSPuneCourseData[0].Domainlink2}
              Domainlink3={DSPuneCourseData[0].Domainlink3}
              Domainlink4={DSPuneCourseData[0].Domainlink4}
              Domainlink5={DSPuneCourseData[0].Domainlink5}
              Domainlink6={DSPuneCourseData[0].Domainlink6}
              Domainlink7={DSPuneCourseData[0].Domainlink7}
              Domainlink8={DSPuneCourseData[0].Domainlink8}
              Domainlink9={DSPuneCourseData[0].Domainlink9}
              Domainlink10={DSPuneCourseData[0].Domainlink10}
              CertificationBot1={DSPuneCourseData[0].CertificationBot1}
              src={DSPuneCourseData[0].src}
              src22={DSPuneCourseData[0].src22}
              // src33={DSPuneCourseData[0].src33}
              src44={DSPuneCourseData[0].src44}
              alt2={DSPuneCourseData[0].alt2}
              alt3={DSPuneCourseData[0].alt3}
              alt4={DSPuneCourseData[0].alt4}
              alt5={DSPuneCourseData[0].alt5}
              ModuleBot1={DSPuneCourseData[0].ModuleBot1}
              ModuleBot2={DSPuneCourseData[0].ModuleBot2}
              syllabush1={DSPuneCourseData[0].syllabush1}
              syllabusb1={DSPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DSPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DSPuneCourseData[0].syllabush2}
              syllabusb2={DSPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DSPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DSPuneCourseData[0].syllabush3}
              syllabusb3={DSPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DSPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DSPuneCourseData[0].syllabush4}
              syllabusb4={DSPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DSPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DSPuneCourseData[0].syllabussrc}
              JobHead1={DSPuneCourseData[0].JobHead1}
              JobBot1={DSPuneCourseData[0].JobBot1}
              JobHead2={DSPuneCourseData[0].JobHead2}
              JobBot3={DSPuneCourseData[0].JobBot3}
              ProjectsBot1={DSPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={DSPuneCourseData[0].ProjectsBot2}
              src1={DSPuneCourseData[0].src1}
              ProjectsH1={DSPuneCourseData[0].ProjectsH1}
              Projectsp1={DSPuneCourseData[0].Projectsp1}
              src2={DSPuneCourseData[0].src2}
              ProjectsH2={DSPuneCourseData[0].ProjectsH2}
              Projectsp2={DSPuneCourseData[0].Projectsp2}
              src3={DSPuneCourseData[0].src3}
              ProjectsH3={DSPuneCourseData[0].ProjectsH3}
              Projectsp3={DSPuneCourseData[0].Projectsp3}
              src4={DSPuneCourseData[0].src4}
              ProjectsH4={DSPuneCourseData[0].ProjectsH4}
              Projectsp4={DSPuneCourseData[0].Projectsp4}
              AlumniBot1={DSPuneCourseData[0].AlumniBot1}
              Asrc1={DSPuneCourseData[0].Asrc1}
              AlumniH1={DSPuneCourseData[0].AlumniH1}
              Alumnip1={DSPuneCourseData[0].Alumnip1}
              Asrc2={DSPuneCourseData[0].Asrc2}
              AlumniH2={DSPuneCourseData[0].AlumniH2}
              Alumnip2={DSPuneCourseData[0].Alumnip2}
              Asrc3={DSPuneCourseData[0].Asrc3}
              AlumniH3={DSPuneCourseData[0].AlumniH3}
              Alumnip3={DSPuneCourseData[0].Alumnip3}
              Asrc4={DSPuneCourseData[0].Asrc4}
              AlumniH4={DSPuneCourseData[0].AlumniH4}
              Alumnip4={DSPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map PuneMap={true} />
        <CityText
          CityTextB={DSPuneCourseData[0].CityTextB}
          CityText={DSPuneCourseData[0].CityText}
          CityTextLB={DSPuneCourseData[0].CityTextLB}
          CityTextL={DSPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
