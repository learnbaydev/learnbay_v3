import Navbar from '@/components/Global/Navbar/Navbar';
import Realstory from '@/components/Home/Realstory/Realstory';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSSingaporeCourseData } from '../../../CityData/Singapore/datascienceCourseTrainingInSingapore';
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
// const CityText = dynamic(() =>
//   import("../../../components/Seo/CityText/CityText")
// );
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
        <title>Best Online Data Science Course in Singapore with GenAI</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join Learnbay's data science course training in Singapore with latest GenAI Module. Get IBM Certified, experience  AI Co-lab, and bring your own project."
        />
        <meta
          name="keywords"
          content="Data Science Course in singapore, data scientist course in singapore, best data science courses in singapore, data science training in singapore, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/singapore/data-science-course-training-in-singapore"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Online Data Science Course in Singapore with GenAI"
        />
        <meta
          property="og:description"
          content="Join Learnbay's data science course training in Singapore with latest GenAI Module. Get IBM Certified, experience  AI Co-lab, and bring your own project."
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
          content="https://www.learnbay.co/datascience/singapore/data-science-course-training-in-singapore"
        />
        <meta
          name="twitter:title"
          content="Best Online Data Science Course in Singapore with GenAI"
        />
        <meta
          name="twitter:description"
          content="Join Learnbay's data science course training in Singapore with latest GenAI Module. Get IBM Certified, experience  AI Co-lab, and bring your own project."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/singapore/data-science-course-training-in-singapore"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
 "@context": "https://schema.org",
  "@type": "Product",
  "name": "Best Online Data Science Course in Singapore with GenAI",
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
    "ratingCount": "1690"
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
  "name": "Best Online Data Science Course in Singapore with GenAI",
  "description": "Join Learnbay's data science course training in Singapore with latest GenAI Module. Get IBM Certified, experience  AI Co-lab, and bring your own project.",
  "url": "https://www.learnbay.co/datascience/singapore/data-science-course-training-in-singapore",
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
    "name": "What are Data Science Training courses available at Learnbay in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data Science and GenAI certification Program and Advanced Data Science and GenAI Master program is available in Singapore."
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Data Science course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of this data science course in Singapore is 9 months. However, in case you opt for a Masters program, the timeline can vary up to 11 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Singapore at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Singapore, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Singapore?",
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
      "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals."
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
    "name": "What is the total fee for Data Science Certifications courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You need to invest around $1700 for a Data Science Training Course in Singapore. For more details, you can check the specific courses."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, based on promotional special offers, you can get installments with lucrative EMI options. Contact our support team for the latest EMI offers."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Singapore? What is Group Discount?",
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
      "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Singapore? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects. Click here to download the list of the projects. 
Note: Data Science and Gen AI projects in Singapore are as per the current demand. So check with our expert for the latest category of projects as per available courses and BYOP options."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The data science course in Singapore offers an integrated dual Certification from IBM (one course completion and one project certificate). In case you choose the Master program, then you get an additional certification."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Singapore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Singapore?",
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
    "name": "Can a Learnbay student in Singapore choose to study from their desired mentor?",
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
          firstHeading="Best Online Data Science Course in Singapore       "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Demonstrate your expertise in real-world business projects via our industry-centric data science training in Singapore. Our custom-fit course syllabus with structured modules helps you gain in-demand skills. Get ready and lock your seat with us to unleash your career potential on a global scale.           "
          ibmOnly={true}
        />
        <SecondSection
          SecondSectionData={DSSingaporeCourseData[0].secondSection}
        />
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
              cityTextDSSingapore={true}
              ProgramBot1={DSSingaporeCourseData[0].ProgramBot1}
              ProgramHead3={DSSingaporeCourseData[0].ProgramHead3}
              ProgramBot3={DSSingaporeCourseData[0].ProgramBot3}
              ProgramBot31={DSSingaporeCourseData[0].ProgramBot31}
              ProgramBot4={DSSingaporeCourseData[0].ProgramBot4}
              ProgramBot5={DSSingaporeCourseData[0].ProgramBot5}
              ProgramBot6={DSSingaporeCourseData[0].ProgramBot6}
              Courselink1={DSSingaporeCourseData[0].Courselink1}
              Courselink2={DSSingaporeCourseData[0].Courselink2}
              Courselink3={DSSingaporeCourseData[0].Courselink3}
              Courselink4={DSSingaporeCourseData[0].Courselink4}
              Courselink5={DSSingaporeCourseData[0].Courselink5}
              Course1={DSSingaporeCourseData[0].Course1}
              Course2={DSSingaporeCourseData[0].Course2}
              Course3={DSSingaporeCourseData[0].Course3}
              Course4={DSSingaporeCourseData[0].Course4}
              Course5={DSSingaporeCourseData[0].Course5}
              DomainHead1={DSSingaporeCourseData[0].DomainHead1}
              DomainBot1={DSSingaporeCourseData[0].DomainBot1}
              DomainBot2={DSSingaporeCourseData[0].DomainBot2}
              DomainBot3={DSSingaporeCourseData[0].DomainBot3}
              DomainList1={DSSingaporeCourseData[0].DomainList1}
              DomainList2={DSSingaporeCourseData[0].DomainList2}
              DomainList3={DSSingaporeCourseData[0].DomainList3}
              DomainList4={DSSingaporeCourseData[0].DomainList4}
              DomainList5={DSSingaporeCourseData[0].DomainList5}
              DomainList6={DSSingaporeCourseData[0].DomainList6}
              DomainList7={DSSingaporeCourseData[0].DomainList7}
              DomainList8={DSSingaporeCourseData[0].DomainList8}
              DomainList9={DSSingaporeCourseData[0].DomainList9}
              DomainList10={DSSingaporeCourseData[0].DomainList10}
              Domainlink1={DSSingaporeCourseData[0].Domainlink1}
              Domainlink2={DSSingaporeCourseData[0].Domainlink2}
              Domainlink3={DSSingaporeCourseData[0].Domainlink3}
              Domainlink4={DSSingaporeCourseData[0].Domainlink4}
              Domainlink5={DSSingaporeCourseData[0].Domainlink5}
              Domainlink6={DSSingaporeCourseData[0].Domainlink6}
              CertificationBot1={DSSingaporeCourseData[0].CertificationBot1}
              CertificationBot2={DSSingaporeCourseData[0].CertificationBot2}
              CertificationBot3={DSSingaporeCourseData[0].CertificationBot3}
              CertificationBot4={DSSingaporeCourseData[0].CertificationBot4}
              CertificationBot5={DSSingaporeCourseData[0].CertificationBot5}
              src={DSSingaporeCourseData[0].src}
              src22={DSSingaporeCourseData[0].src22}
              src33={DSSingaporeCourseData[0].src33}
              alt222={DSSingaporeCourseData[0].alt222}
              alt333={DSSingaporeCourseData[0].alt333}
              alt444={DSSingaporeCourseData[0].alt444}
              alt555={DSSingaporeCourseData[0].alt555}
              ModuleHead1={DSSingaporeCourseData[0].ModuleHead1}
              ModuleBot1={DSSingaporeCourseData[0].ModuleBot1}
              ModuleBot3={DSSingaporeCourseData[0].ModuleBot3}
              ModuleBot2={DSSingaporeCourseData[0].ModuleBot2}
              Modulelist1={DSSingaporeCourseData[0].Modulelist1}
              Modulelist2={DSSingaporeCourseData[0].Modulelist2}
              Modulelist3={DSSingaporeCourseData[0].Modulelist3}
              Modulelist4={DSSingaporeCourseData[0].Modulelist4}
              Modulelist5={DSSingaporeCourseData[0].Modulelist5}
              Modulelist6={DSSingaporeCourseData[0].Modulelist6}
              Modulelist7={DSSingaporeCourseData[0].Modulelist7}
              Modulelist8={DSSingaporeCourseData[0].Modulelist8}
              syllabush1={DSSingaporeCourseData[0].syllabush1}
              syllabusb1={DSSingaporeCourseData[0].syllabusb1}
              SyllabusBotlist11={DSSingaporeCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSSingaporeCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSSingaporeCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSSingaporeCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSSingaporeCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSSingaporeCourseData[0].SyllabusBotlist16}
              syllabush2={DSSingaporeCourseData[0].syllabush2}
              syllabusb2={DSSingaporeCourseData[0].syllabusb2}
              SyllabusBotlist21={DSSingaporeCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSSingaporeCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSSingaporeCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSSingaporeCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSSingaporeCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSSingaporeCourseData[0].SyllabusBotlist26}
              syllabush3={DSSingaporeCourseData[0].syllabush3}
              syllabusb3={DSSingaporeCourseData[0].syllabusb3}
              SyllabusBotlist31={DSSingaporeCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSSingaporeCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSSingaporeCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSSingaporeCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSSingaporeCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSSingaporeCourseData[0].SyllabusBotlist36}
              syllabush4={DSSingaporeCourseData[0].syllabush4}
              syllabusb4={DSSingaporeCourseData[0].syllabusb4}
              SyllabusBotlist41={DSSingaporeCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSSingaporeCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSSingaporeCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSSingaporeCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSSingaporeCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSSingaporeCourseData[0].SyllabusBotlist46}
              syllabussrc={DSSingaporeCourseData[0].syllabussrc}
              JobHead1={DSSingaporeCourseData[0].JobHead1}
              JobBot1={DSSingaporeCourseData[0].JobBot1}
              JobHead2={DSSingaporeCourseData[0].JobHead2}
              JobBot3={DSSingaporeCourseData[0].JobBot3}
              Joblist1={DSSingaporeCourseData[0].Joblist1}
              Joblist2={DSSingaporeCourseData[0].Joblist2}
              Joblist3={DSSingaporeCourseData[0].Joblist3}
              Joblist4={DSSingaporeCourseData[0].Joblist4}
              Joblist5={DSSingaporeCourseData[0].Joblist5}
              Joblist6={DSSingaporeCourseData[0].Joblist6}
              Joblist7={DSSingaporeCourseData[0].Joblist7}
              Joblist8={DSSingaporeCourseData[0].Joblist8}
              Joblist9={DSSingaporeCourseData[0].Joblist9}
              Joblist10={DSSingaporeCourseData[0].Joblist10}
              Joblist11={DSSingaporeCourseData[0].Joblist11}
              Joblist12={DSSingaporeCourseData[0].Joblist12}
              Joblist13={DSSingaporeCourseData[0].Joblist13}
              JobBot19={DSSingaporeCourseData[0].JobBot19}
              JobBot20={DSSingaporeCourseData[0].JobBot20}
              JobBot34={DSSingaporeCourseData[0].JobBot34}
              JobHead19={DSSingaporeCourseData[0].JobHead19}
              JobHead20={DSSingaporeCourseData[0].JobHead20}
              Joblist14={DSSingaporeCourseData[0].Joblist14}
              Joblist15={DSSingaporeCourseData[0].Joblist15}
              Joblist16={DSSingaporeCourseData[0].Joblist16}
              Joblist17={DSSingaporeCourseData[0].Joblist17}
              Joblist18={DSSingaporeCourseData[0].Joblist1}
              JobHead21={DSSingaporeCourseData[0].JobHead21}
              JobHead30={DSSingaporeCourseData[0].JobHead30}
              JobBot21={DSSingaporeCourseData[0].JobBot21}
              JobBot22={DSSingaporeCourseData[0].JobBot22}
              Joblist21={DSSingaporeCourseData[0].Joblist21}
              Joblist22={DSSingaporeCourseData[0].Joblist22}
              Joblist19={DSSingaporeCourseData[0].Joblist19}
              Joblist20={DSSingaporeCourseData[0].Joblist20}
              JobBot23={DSSingaporeCourseData[0].JobBot23}
              Joblist50={DSSingaporeCourseData[0].Joblist50}
              Joblist51={DSSingaporeCourseData[0].Joblist51}
              Joblist52={DSSingaporeCourseData[0].Joblist52}
              Joblist53={DSSingaporeCourseData[0].Joblist53}
              // Joblist54={DSSingaporeCourseData[0].Joblist54}
              modulelist={true}
              usaonly={true}
              joblist={true}
              showData={true}
              JobHead22={DSSingaporeCourseData[0].JobHead22}
              JobBot24={DSSingaporeCourseData[0].JobBot24}
              Joblist23={DSSingaporeCourseData[0].Joblist23}
              Joblist24={DSSingaporeCourseData[0].Joblist24}
              Joblist25={DSSingaporeCourseData[0].Joblist25}
              Joblist26={DSSingaporeCourseData[0].Joblist26}
              Joblist27={DSSingaporeCourseData[0].Joblist27}
              Joblist28={DSSingaporeCourseData[0].Joblist28}
              Joblist29={DSSingaporeCourseData[0].Joblist29}
              Joblist30={DSSingaporeCourseData[0].Joblist30}
              JobBot25={DSSingaporeCourseData[0].JobBot25}
              ProjectsHead1={DSSingaporeCourseData[0].ProjectsHead1}
              ProjectsBot1={DSSingaporeCourseData[0].ProjectsBot1}
              ProjectsBot2={DSSingaporeCourseData[0].ProjectsBot2}
              ProjectsBot3={DSSingaporeCourseData[0].ProjectsBot3}
              ProjectsBot4={DSSingaporeCourseData[0].ProjectsBot4}
              ProjectsBot5={DSSingaporeCourseData[0].ProjectsBot5}
              ProjectsBot6={DSSingaporeCourseData[0].ProjectsBot6}
              ProjectsBot7={DSSingaporeCourseData[0].ProjectsBot7}
              src1={DSSingaporeCourseData[0].src1}
              ProjectsH1={DSSingaporeCourseData[0].ProjectsH1}
              Projectsp1={DSSingaporeCourseData[0].Projectsp1}
              src2={DSSingaporeCourseData[0].src2}
              ProjectsH2={DSSingaporeCourseData[0].ProjectsH2}
              Projectsp2={DSSingaporeCourseData[0].Projectsp2}
              src3={DSSingaporeCourseData[0].src3}
              ProjectsH3={DSSingaporeCourseData[0].ProjectsH3}
              Projectsp3={DSSingaporeCourseData[0].Projectsp3}
              src4={DSSingaporeCourseData[0].src4}
              ProjectsH4={DSSingaporeCourseData[0].ProjectsH4}
              Projectsp4={DSSingaporeCourseData[0].Projectsp4}
              AlumniBot1={DSSingaporeCourseData[0].AlumniBot1}
              Asrc1={DSSingaporeCourseData[0].Asrc1}
              AlumniH1={DSSingaporeCourseData[0].AlumniH1}
              Alumnip1={DSSingaporeCourseData[0].Alumnip1}
              Asrc2={DSSingaporeCourseData[0].Asrc2}
              AlumniH2={DSSingaporeCourseData[0].AlumniH2}
              Alumnip2={DSSingaporeCourseData[0].Alumnip2}
              Asrc3={DSSingaporeCourseData[0].Asrc3}
              AlumniH3={DSSingaporeCourseData[0].AlumniH3}
              Alumnip3={DSSingaporeCourseData[0].Alumnip3}
              Asrc4={DSSingaporeCourseData[0].Asrc4}
              AlumniH4={DSSingaporeCourseData[0].AlumniH4}
              Alumnip4={DSSingaporeCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSSingaporeCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSSingaporeCourseData[0].CityTextB}
          CityText={DSSingaporeCourseData[0].CityText}
          CityTextLB={DSSingaporeCourseData[0].CityTextLB}
          CityTextL={DSSingaporeCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
