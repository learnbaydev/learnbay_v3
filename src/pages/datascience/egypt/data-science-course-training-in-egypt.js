import Navbar from '@/components/Global/Navbar/Navbar';
import Realstory from '@/components/Home/Realstory/Realstory';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSEgyptCourseData } from '../../../CityData/Egypt/DataScienceTrainingEgyptData';
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
        <title>Best Online Data Science Course in Egypt - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Upgrade your career with Learnbay's top online data science course in Egypt. Learn from experts, earn top certifications, and gain practical Gen AI skills"
        />
        <meta
          name="keywords"
          content="data science course in egypt, data science course ,  data science certificate, ibm data science professional certificate, data science certificate programs, data science online course, best data science courses, learn data science, data science classes, best institute for data science, data science training program, best data scientist course          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/egypt/data-science-course-training-in-egypt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Online Data Science Course in Egypt - Learnbay"
        />
        <meta
          property="og:description"
          content="Upgrade your career with Learnbay's top online data science course in Egypt. Learn from experts, earn top certifications, and gain practical Gen AI skills"
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
          content="https://www.learnbay.co/datascience/egypt/data-science-course-training-in-egypt"
        />
        <meta
          name="twitter:title"
          content="Best Online Data Science Course in Egypt - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upgrade your career with Learnbay's top online data science course in Egypt. Learn from experts, earn top certifications, and gain practical Gen AI skills"
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
                   "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Best Online Data Science Course in Egypt - Learnbay",
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
    "ratingCount": "1924"
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
  "@type": "Course",
  "name": "Best Online Data Science Course in Egypt - Learnbay",
  "description": "Upgrade your career with Learnbay's top online data science course in Egypt. Learn from experts, earn top certifications, and gain practical Gen AI skills",
  "provider": {
    "@type": "Organization",
    "name": "Learnbay",
    "sameAs": "https://www.learnbay.co/"
  },
  "offers": {
    "@type": "Offer",
    "price": "1700",
    "priceCurrency": "USD",
    "category": "Educational"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "P9M",
    "offers": {
      "@type": "Offer",
      "price": "1700",
      "priceCurrency": "USD"
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
    "name": "What are Data Science Training courses available at Learnbay in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance"
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total duration of these courses is about 9-13 months, including live lectures, hands-on practical training on live projects, and interview preparation. Classes will be conducted on weekdays and in weekend batches."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Egypt at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Egypt, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy"
    }
  },{
    "@type": "Question",
    "name": "Which data science specialization domain elective is best suited for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Why is domain specialization important in professional data science certification?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the advanced data science courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
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
    "name": "What is the total fee for Data Science Certifications courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total course fee for the data science course in Egypt is around $1700"
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Egypt? What is Group Discount?",
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
      "text": "Depending on the course you choose, the number of capstone projects will vary. Usually, you get multiple capstone projects. You can also build your own project using our BYOP feature. Click here to download the list of projects."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The data science course in Egypt includes an integrated dual Certification from IBM (one course completion certificate and one project certificate)."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Egypt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Egypt?",
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
    "name": "Can a Learnbay student in Egypt choose to study from their desired mentor?",
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Data Science Course in Egypt "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Enrich your career with essential data science skills to thrive and competitive success. Join Learnbay’s data science course in Egypt to dive deeper into the digital world. Join our GenAI-rich courses with IBM certifications to re-energize your careers with premium job offers.           "
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSEgyptCourseData[0].secondSection} />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700"
            FeeEmi="₹ 8,194/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekday  Batch"
            weekday="MON - FRI"
            weekend="MON - FRI"
            WeekdayDate="FEB 2nd"
            WeekendDate="FEB 9th"
            WeekdayTime="8 PM - 10 PM"
            WeekendTime="8 AM - 10 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,25,000"
            monthlyPayment1="₹8,194"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,25,000"
            monthlyPayment2="₹12,291"
            countryfee={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSEgypt={true}
              ProgramBot1={DSEgyptCourseData[0].ProgramBot1}
              ProgramHead3={DSEgyptCourseData[0].ProgramHead3}
              ProgramBot3={DSEgyptCourseData[0].ProgramBot3}
              ProgramBot31={DSEgyptCourseData[0].ProgramBot31}
              ProgramBot4={DSEgyptCourseData[0].ProgramBot4}
              ProgramBot5={DSEgyptCourseData[0].ProgramBot5}
              ProgramBot6={DSEgyptCourseData[0].ProgramBot6}
              Courselink1={DSEgyptCourseData[0].Courselink1}
              Courselink2={DSEgyptCourseData[0].Courselink2}
              Courselink3={DSEgyptCourseData[0].Courselink3}
              Courselink4={DSEgyptCourseData[0].Courselink4}
              Courselink5={DSEgyptCourseData[0].Courselink5}
              Course1={DSEgyptCourseData[0].Course1}
              Course2={DSEgyptCourseData[0].Course2}
              Course3={DSEgyptCourseData[0].Course3}
              Course4={DSEgyptCourseData[0].Course4}
              Course5={DSEgyptCourseData[0].Course5}
              DomainHead1={DSEgyptCourseData[0].DomainHead1}
              DomainBot1={DSEgyptCourseData[0].DomainBot1}
              DomainBot2={DSEgyptCourseData[0].DomainBot2}
              DomainBot3={DSEgyptCourseData[0].DomainBot3}
              DomainBot40={DSEgyptCourseData[0].DomainBot40}
              DomainList1={DSEgyptCourseData[0].DomainList1}
              DomainList2={DSEgyptCourseData[0].DomainList2}
              DomainList3={DSEgyptCourseData[0].DomainList3}
              DomainList4={DSEgyptCourseData[0].DomainList4}
              DomainList5={DSEgyptCourseData[0].DomainList5}
              DomainList6={DSEgyptCourseData[0].DomainList6}
              DomainList7={DSEgyptCourseData[0].DomainList7}
              DomainList8={DSEgyptCourseData[0].DomainList8}
              DomainList9={DSEgyptCourseData[0].DomainList9}
              DomainList10={DSEgyptCourseData[0].DomainList10}
              Domainlink1={DSEgyptCourseData[0].Domainlink1}
              Domainlink2={DSEgyptCourseData[0].Domainlink2}
              Domainlink3={DSEgyptCourseData[0].Domainlink3}
              Domainlink4={DSEgyptCourseData[0].Domainlink4}
              Domainlink5={DSEgyptCourseData[0].Domainlink5}
              Domainlink6={DSEgyptCourseData[0].Domainlink6}
              CertificationBot1={DSEgyptCourseData[0].CertificationBot1}
              CertificationBot2={DSEgyptCourseData[0].CertificationBot2}
              CertificationBot3={DSEgyptCourseData[0].CertificationBot3}
              CertificationBot4={DSEgyptCourseData[0].CertificationBot4}
              CertificationBot5={DSEgyptCourseData[0].CertificationBot5}
              CertificationBot6={DSEgyptCourseData[0].CertificationBot6}
              CertificationBot7={DSEgyptCourseData[0].CertificationBot7}
              src={DSEgyptCourseData[0].src}
              src22={DSEgyptCourseData[0].src22}
              src33={DSEgyptCourseData[0].src33}
              ModuleHead1={DSEgyptCourseData[0].ModuleHead1}
              ModuleBot1={DSEgyptCourseData[0].ModuleBot1}
              ModuleBot3={DSEgyptCourseData[0].ModuleBot3}
              ModuleBot2={DSEgyptCourseData[0].ModuleBot2}
              ModuleBot46={DSEgyptCourseData[0].ModuleBot46}
              ModuleBot47={DSEgyptCourseData[0].ModuleBot47}
              ModuleBot48={DSEgyptCourseData[0].ModuleBot48}
              Modulelist1={DSEgyptCourseData[0].Modulelist1}
              Modulelist2={DSEgyptCourseData[0].Modulelist2}
              Modulelist3={DSEgyptCourseData[0].Modulelist3}
              Modulelist4={DSEgyptCourseData[0].Modulelist4}
              Modulelist5={DSEgyptCourseData[0].Modulelist5}
              Modulelist6={DSEgyptCourseData[0].Modulelist6}
              Modulelist7={DSEgyptCourseData[0].Modulelist7}
              Modulelist8={DSEgyptCourseData[0].Modulelist8}
              syllabush1={DSEgyptCourseData[0].syllabush1}
              syllabusb1={DSEgyptCourseData[0].syllabusb1}
              SyllabusBotlist11={DSEgyptCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSEgyptCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSEgyptCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSEgyptCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSEgyptCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSEgyptCourseData[0].SyllabusBotlist16}
              syllabush2={DSEgyptCourseData[0].syllabush2}
              syllabusb2={DSEgyptCourseData[0].syllabusb2}
              SyllabusBotlist21={DSEgyptCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSEgyptCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSEgyptCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSEgyptCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSEgyptCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSEgyptCourseData[0].SyllabusBotlist26}
              syllabush3={DSEgyptCourseData[0].syllabush3}
              syllabusb3={DSEgyptCourseData[0].syllabusb3}
              SyllabusBotlist31={DSEgyptCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSEgyptCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSEgyptCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSEgyptCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSEgyptCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSEgyptCourseData[0].SyllabusBotlist36}
              syllabush4={DSEgyptCourseData[0].syllabush4}
              syllabusb4={DSEgyptCourseData[0].syllabusb4}
              SyllabusBotlist41={DSEgyptCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSEgyptCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSEgyptCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSEgyptCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSEgyptCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSEgyptCourseData[0].SyllabusBotlist46}
              syllabussrc={DSEgyptCourseData[0].syllabussrc}
              JobHead1={DSEgyptCourseData[0].JobHead1}
              JobBot1={DSEgyptCourseData[0].JobBot1}
              JobHead2={DSEgyptCourseData[0].JobHead2}
              JobBot3={DSEgyptCourseData[0].JobBot3}
              Joblist1={DSEgyptCourseData[0].Joblist1}
              Joblist2={DSEgyptCourseData[0].Joblist2}
              Joblist3={DSEgyptCourseData[0].Joblist3}
              Joblist4={DSEgyptCourseData[0].Joblist4}
              Joblist5={DSEgyptCourseData[0].Joblist5}
              Joblist6={DSEgyptCourseData[0].Joblist6}
              Joblist7={DSEgyptCourseData[0].Joblist7}
              Joblist8={DSEgyptCourseData[0].Joblist8}
              Joblist9={DSEgyptCourseData[0].Joblist9}
              Joblist10={DSEgyptCourseData[0].Joblist10}
              Joblist11={DSEgyptCourseData[0].Joblist11}
              Joblist12={DSEgyptCourseData[0].Joblist12}
              Joblist13={DSEgyptCourseData[0].Joblist13}
              JobBot001={DSEgyptCourseData[0].JobBot001}
              JobBot002={DSEgyptCourseData[0].JobBot002}
              JobBot19={DSEgyptCourseData[0].JobBot19}
              JobBot20={DSEgyptCourseData[0].JobBot20}
              JobBot003={DSEgyptCourseData[0].JobBot003}
              JobBot004={DSEgyptCourseData[0].JobBot004}
              JobBot34={DSEgyptCourseData[0].JobBot34}
              JobBot39={DSEgyptCourseData[0].JobBot39}
              JobHead19={DSEgyptCourseData[0].JobHead19}
              JobHead20={DSEgyptCourseData[0].JobHead20}
              Joblist14={DSEgyptCourseData[0].Joblist14}
              Joblist15={DSEgyptCourseData[0].Joblist15}
              Joblist16={DSEgyptCourseData[0].Joblist16}
              Joblist17={DSEgyptCourseData[0].Joblist17}
              Joblist18={DSEgyptCourseData[0].Joblist1}
              JobHead21={DSEgyptCourseData[0].JobHead21}
              JobHead30={DSEgyptCourseData[0].JobHead30}
              JobBot21={DSEgyptCourseData[0].JobBot21}
              JobBot22={DSEgyptCourseData[0].JobBot22}
              Joblist21={DSEgyptCourseData[0].Joblist21}
              Joblist22={DSEgyptCourseData[0].Joblist22}
              Joblist19={DSEgyptCourseData[0].Joblist19}
              Joblist20={DSEgyptCourseData[0].Joblist20}
              JobBot23={DSEgyptCourseData[0].JobBot23}
              Joblist50={DSEgyptCourseData[0].Joblist50}
              Joblist51={DSEgyptCourseData[0].Joblist51}
              Joblist52={DSEgyptCourseData[0].Joblist52}
              Joblist53={DSEgyptCourseData[0].Joblist53}
              Joblist54={DSEgyptCourseData[0].Joblist54}
              JobHead001={DSEgyptCourseData[0].JobHead001}
              JobBotMasterBot5={DSEgyptCourseData[0].JobBotMasterBot5}
              JobBot007={DSEgyptCourseData[0].JobBot007}
              JobBot005={DSEgyptCourseData[0].JobBot005}
              JobBot006={DSEgyptCourseData[0].JobBot006}
              JobHeadEgypt01={DSEgyptCourseData[0].JobHeadEgypt01}
              JobBot37={DSEgyptCourseData[0].JobBot37}
              modulelist={true}
              hideDSonly={true}
              joblist={true}
              showData={true}
              JobHead22={DSEgyptCourseData[0].JobHead22}
              JobBot24={DSEgyptCourseData[0].JobBot24}
              Joblist23={DSEgyptCourseData[0].Joblist23}
              Joblist24={DSEgyptCourseData[0].Joblist24}
              Joblist25={DSEgyptCourseData[0].Joblist25}
              Joblist26={DSEgyptCourseData[0].Joblist26}
              Joblist27={DSEgyptCourseData[0].Joblist27}
              Joblist28={DSEgyptCourseData[0].Joblist28}
              Joblist29={DSEgyptCourseData[0].Joblist29}
              Joblist30={DSEgyptCourseData[0].Joblist30}
              JobBot25={DSEgyptCourseData[0].JobBot25}
              ProjectsHead1={DSEgyptCourseData[0].ProjectsHead1}
              ProjectsBot1={DSEgyptCourseData[0].ProjectsBot1}
              ProjectsBot2={DSEgyptCourseData[0].ProjectsBot2}
              ProjectsBot3={DSEgyptCourseData[0].ProjectsBot3}
              ProjectsBot4={DSEgyptCourseData[0].ProjectsBot4}
              ProjectsBot5={DSEgyptCourseData[0].ProjectsBot5}
              ProjectsBot6={DSEgyptCourseData[0].ProjectsBot6}
              ProjectsBot7={DSEgyptCourseData[0].ProjectsBot7}
              src1={DSEgyptCourseData[0].src1}
              ProjectsH1={DSEgyptCourseData[0].ProjectsH1}
              Projectsp1={DSEgyptCourseData[0].Projectsp1}
              src2={DSEgyptCourseData[0].src2}
              ProjectsH2={DSEgyptCourseData[0].ProjectsH2}
              Projectsp2={DSEgyptCourseData[0].Projectsp2}
              src3={DSEgyptCourseData[0].src3}
              ProjectsH3={DSEgyptCourseData[0].ProjectsH3}
              Projectsp3={DSEgyptCourseData[0].Projectsp3}
              src4={DSEgyptCourseData[0].src4}
              ProjectsH4={DSEgyptCourseData[0].ProjectsH4}
              Projectsp4={DSEgyptCourseData[0].Projectsp4}
              AlumniBot1={DSEgyptCourseData[0].AlumniBot1}
              Asrc1={DSEgyptCourseData[0].Asrc1}
              AlumniH1={DSEgyptCourseData[0].AlumniH1}
              Alumnip1={DSEgyptCourseData[0].Alumnip1}
              Asrc2={DSEgyptCourseData[0].Asrc2}
              AlumniH2={DSEgyptCourseData[0].AlumniH2}
              Alumnip2={DSEgyptCourseData[0].Alumnip2}
              Asrc3={DSEgyptCourseData[0].Asrc3}
              AlumniH3={DSEgyptCourseData[0].AlumniH3}
              Alumnip3={DSEgyptCourseData[0].Alumnip3}
              Asrc4={DSEgyptCourseData[0].Asrc4}
              AlumniH4={DSEgyptCourseData[0].AlumniH4}
              Alumnip4={DSEgyptCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSEgyptCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSEgyptCourseData[0].CityTextB}
          CityText={DSEgyptCourseData[0].CityText}
          CityTextLB={DSEgyptCourseData[0].CityTextLB}
          CityTextL={DSEgyptCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
