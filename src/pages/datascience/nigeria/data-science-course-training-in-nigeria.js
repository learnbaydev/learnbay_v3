import Navbar from '@/components/Global/Navbar/Navbar';
import Realstory from '@/components/Home/Realstory/Realstory';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSNigeriaCourseData } from '../../../CityData/Nigeria/datascienceCourseTrainingInnigeria';
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
        <title>
          Best Data Science Certification Course in Nigeria | Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Top-notch data science course training in Nigeria with Learnbay. Gain hands-on experience through live GenAI projects, and become industry-ready. Enroll now!"
        />
        <meta
          name="keywords"
          content="Data Science Course in nigeria, data scientist course in nigeria, best data science courses in nigeria, data science training in nigeria, data science course, data science certificate, data science certification course, best data science certification          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science Certification Course in Nigeria | Learnbay"
        />
        <meta
          property="og:description"
          content="Top-notch data science course training in Nigeria with Learnbay. Gain hands-on experience through live GenAI projects, and become industry-ready. Enroll now!"
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
          content="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <meta
          name="twitter:title"
          content="Best Data Science Certification Course in Nigeria - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Top-notch data science course training in Nigeria with Learnbay. Gain hands-on experience through live GenAI projects, and become industry-ready. Enroll now!"
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
          href="https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "https://schema.org",
  "@type": "Product",
  "name": "Best Data Science Certification Course in Nigeria | Learnbay",
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
    "ratingCount": "1125"
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
  "name": "Best Online Data Science Course in USA with GenAI | Learnbay",
  "description": "Top-notch data science course training in Nigeria with Learnbay. Gain hands-on experience through live GenAI projects, and become industry-ready. Enroll now!",
  "url": "https://www.learnbay.co/datascience/nigeria/data-science-course-training-in-nigeria",
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
    "name": "What are Data Science Training courses available at Learnbay in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance"
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Nigeria?",
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the data science and Gen AI course is 9-13 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Nigeria at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Nigeria, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Nigeria?",
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
    "name": "What is the total fee for Data Science Certifications courses in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total course fees depend on which particular course you choose from the data science and agentic AI categories. Usually, the course prices start from $1700."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Nigeria? What is Group Discount?",
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
      "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Nigeria? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects. Click here to download the list of the projects."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will receive 3 to 4 certifications: the Course Completion Certification from IBM Certification and the Capstone Project Certification. For a few advanced and Master Programs, there will also be additional IBM certifications."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Nigeria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Nigeria?",
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
    "name": "Can a Learnbay student in Nigeria choose to study from their desired mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
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
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Science Courses in Nigeria"
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Get into the world of digital complexities with the ease of data-driven insights. Enroll in Learnbay’s data science course in Nigeria to kick-start an assured career transition. Join us today to unlock untapped career horizons in data science and gain attractive perks.           "
          ibmOnly={true}
        />
        <SecondSection
          SecondSectionData={DSNigeriaCourseData[0].secondSection}
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
              cityTextDSNGR={true}
              ProgramBot1={DSNigeriaCourseData[0].ProgramBot1}
              ProgramHead3={DSNigeriaCourseData[0].ProgramHead3}
              ProgramBot3={DSNigeriaCourseData[0].ProgramBot3}
              ProgramBot31={DSNigeriaCourseData[0].ProgramBot31}
              ProgramBot4={DSNigeriaCourseData[0].ProgramBot4}
              ProgramBot5={DSNigeriaCourseData[0].ProgramBot5}
              ProgramBot6={DSNigeriaCourseData[0].ProgramBot6}
              Courselink1={DSNigeriaCourseData[0].Courselink1}
              Courselink2={DSNigeriaCourseData[0].Courselink2}
              Courselink3={DSNigeriaCourseData[0].Courselink3}
              Courselink4={DSNigeriaCourseData[0].Courselink4}
              Courselink5={DSNigeriaCourseData[0].Courselink5}
              Course1={DSNigeriaCourseData[0].Course1}
              Course2={DSNigeriaCourseData[0].Course2}
              Course3={DSNigeriaCourseData[0].Course3}
              Course4={DSNigeriaCourseData[0].Course4}
              Course5={DSNigeriaCourseData[0].Course5}
              DomainHead1={DSNigeriaCourseData[0].DomainHead1}
              DomainBot1={DSNigeriaCourseData[0].DomainBot1}
              DomainBot2={DSNigeriaCourseData[0].DomainBot2}
              DomainBot3={DSNigeriaCourseData[0].DomainBot3}
              DomainList1={DSNigeriaCourseData[0].DomainList1}
              DomainList2={DSNigeriaCourseData[0].DomainList2}
              DomainList3={DSNigeriaCourseData[0].DomainList3}
              DomainList4={DSNigeriaCourseData[0].DomainList4}
              DomainList5={DSNigeriaCourseData[0].DomainList5}
              DomainList6={DSNigeriaCourseData[0].DomainList6}
              DomainList7={DSNigeriaCourseData[0].DomainList7}
              DomainList8={DSNigeriaCourseData[0].DomainList8}
              DomainList9={DSNigeriaCourseData[0].DomainList9}
              DomainList10={DSNigeriaCourseData[0].DomainList10}
              Domainlink1={DSNigeriaCourseData[0].Domainlink1}
              Domainlink2={DSNigeriaCourseData[0].Domainlink2}
              Domainlink3={DSNigeriaCourseData[0].Domainlink3}
              Domainlink4={DSNigeriaCourseData[0].Domainlink4}
              Domainlink5={DSNigeriaCourseData[0].Domainlink5}
              Domainlink6={DSNigeriaCourseData[0].Domainlink6}
              CertificationBot1={DSNigeriaCourseData[0].CertificationBot1}
              CertificationBot2={DSNigeriaCourseData[0].CertificationBot2}
              CertificationBot3={DSNigeriaCourseData[0].CertificationBot3}
              CertificationBot4={DSNigeriaCourseData[0].CertificationBot4}
              CertificationBot5={DSNigeriaCourseData[0].CertificationBot5}
              src={DSNigeriaCourseData[0].src}
              src22={DSNigeriaCourseData[0].src22}
              src33={DSNigeriaCourseData[0].src33}
              alt222={DSNigeriaCourseData[0].alt222}
              alt333={DSNigeriaCourseData[0].alt333}
              alt444={DSNigeriaCourseData[0].alt444}
              alt555={DSNigeriaCourseData[0].alt555}
              ModuleHead1={DSNigeriaCourseData[0].ModuleHead1}
              ModuleBot1={DSNigeriaCourseData[0].ModuleBot1}
              ModuleBot2={DSNigeriaCourseData[0].ModuleBot2}
              Modulelist1={DSNigeriaCourseData[0].Modulelist1}
              Modulelist2={DSNigeriaCourseData[0].Modulelist2}
              Modulelist3={DSNigeriaCourseData[0].Modulelist3}
              Modulelist4={DSNigeriaCourseData[0].Modulelist4}
              Modulelist5={DSNigeriaCourseData[0].Modulelist5}
              Modulelist6={DSNigeriaCourseData[0].Modulelist6}
              Modulelist7={DSNigeriaCourseData[0].Modulelist7}
              syllabush1={DSNigeriaCourseData[0].syllabush1}
              syllabusb1={DSNigeriaCourseData[0].syllabusb1}
              SyllabusBotlist11={DSNigeriaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSNigeriaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSNigeriaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSNigeriaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSNigeriaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSNigeriaCourseData[0].SyllabusBotlist16}
              syllabush2={DSNigeriaCourseData[0].syllabush2}
              syllabusb2={DSNigeriaCourseData[0].syllabusb2}
              SyllabusBotlist21={DSNigeriaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSNigeriaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSNigeriaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSNigeriaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSNigeriaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSNigeriaCourseData[0].SyllabusBotlist26}
              syllabush3={DSNigeriaCourseData[0].syllabush3}
              syllabusb3={DSNigeriaCourseData[0].syllabusb3}
              SyllabusBotlist31={DSNigeriaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSNigeriaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSNigeriaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSNigeriaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSNigeriaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSNigeriaCourseData[0].SyllabusBotlist36}
              syllabush4={DSNigeriaCourseData[0].syllabush4}
              syllabusb4={DSNigeriaCourseData[0].syllabusb4}
              SyllabusBotlist41={DSNigeriaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSNigeriaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSNigeriaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSNigeriaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSNigeriaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSNigeriaCourseData[0].SyllabusBotlist46}
              syllabussrc={DSNigeriaCourseData[0].syllabussrc}
              JobHead1={DSNigeriaCourseData[0].JobHead1}
              JobBot1={DSNigeriaCourseData[0].JobBot1}
              JobHead2={DSNigeriaCourseData[0].JobHead2}
              JobBot3={DSNigeriaCourseData[0].JobBot3}
              Joblist1={DSNigeriaCourseData[0].Joblist1}
              Joblist2={DSNigeriaCourseData[0].Joblist2}
              Joblist3={DSNigeriaCourseData[0].Joblist3}
              Joblist4={DSNigeriaCourseData[0].Joblist4}
              Joblist5={DSNigeriaCourseData[0].Joblist5}
              Joblist6={DSNigeriaCourseData[0].Joblist6}
              Joblist7={DSNigeriaCourseData[0].Joblist7}
              Joblist8={DSNigeriaCourseData[0].Joblist8}
              Joblist9={DSNigeriaCourseData[0].Joblist9}
              Joblist10={DSNigeriaCourseData[0].Joblist10}
              Joblist11={DSNigeriaCourseData[0].Joblist11}
              Joblist12={DSNigeriaCourseData[0].Joblist12}
              Joblist13={DSNigeriaCourseData[0].Joblist13}
              JobBot19={DSNigeriaCourseData[0].JobBot19}
              JobHead19={DSNigeriaCourseData[0].JobHead19}
              JobHead20={DSNigeriaCourseData[0].JobHead21}
              Joblist14={DSNigeriaCourseData[0].Joblist14}
              Joblist15={DSNigeriaCourseData[0].Joblist15}
              Joblist16={DSNigeriaCourseData[0].Joblist16}
              Joblist17={DSNigeriaCourseData[0].Joblist17}
              Joblist18={DSNigeriaCourseData[0].Joblist18}
              JobHead30={DSNigeriaCourseData[0].JobHead30}
              JobBot21={DSNigeriaCourseData[0].JobBot21}
              JobBot22={DSNigeriaCourseData[0].JobBot22}
              Joblist21={DSNigeriaCourseData[0].Joblist21}
              Joblist22={DSNigeriaCourseData[0].Joblist22}
              Joblist19={DSNigeriaCourseData[0].Joblist19}
              Joblist20={DSNigeriaCourseData[0].Joblist20}
              JobBot23={DSNigeriaCourseData[0].JobBot23}
              JobBot20={DSNigeriaCourseData[0].JobBot20}
              Joblist50={DSNigeriaCourseData[0].Joblist50}
              Joblist51={DSNigeriaCourseData[0].Joblist51}
              Joblist52={DSNigeriaCourseData[0].Joblist52}
              Joblist53={DSNigeriaCourseData[0].Joblist53}
              Joblist54={DSNigeriaCourseData[0].Joblist54}
              modulelist={true}
              usaonly={true}
              joblist={true}
              showData={true}
              JobHead22={DSNigeriaCourseData[0].JobHead22}
              JobBot24={DSNigeriaCourseData[0].JobBot24}
              Joblist23={DSNigeriaCourseData[0].Joblist23}
              Joblist24={DSNigeriaCourseData[0].Joblist24}
              Joblist25={DSNigeriaCourseData[0].Joblist25}
              Joblist26={DSNigeriaCourseData[0].Joblist26}
              Joblist27={DSNigeriaCourseData[0].Joblist27}
              Joblist28={DSNigeriaCourseData[0].Joblist28}
              Joblist29={DSNigeriaCourseData[0].Joblist29}
              Joblist30={DSNigeriaCourseData[0].Joblist30}
              Joblist31={DSNigeriaCourseData[0].Joblist31}
              JobBot25={DSNigeriaCourseData[0].JobBot25}
              ProjectsHead1={DSNigeriaCourseData[0].ProjectsHead1}
              ProjectsBot1={DSNigeriaCourseData[0].ProjectsBot1}
              ProjectsBot2={DSNigeriaCourseData[0].ProjectsBot2}
              ProjectsBot3={DSNigeriaCourseData[0].ProjectsBot3}
              ProjectsBot4={DSNigeriaCourseData[0].ProjectsBot4}
              ProjectsBot5={DSNigeriaCourseData[0].ProjectsBot5}
              ProjectsBot6={DSNigeriaCourseData[0].ProjectsBot6}
              ProjectsBot7={DSNigeriaCourseData[0].ProjectsBot7}
              src1={DSNigeriaCourseData[0].src1}
              ProjectsH1={DSNigeriaCourseData[0].ProjectsH1}
              Projectsp1={DSNigeriaCourseData[0].Projectsp1}
              src2={DSNigeriaCourseData[0].src2}
              ProjectsH2={DSNigeriaCourseData[0].ProjectsH2}
              Projectsp2={DSNigeriaCourseData[0].Projectsp2}
              src3={DSNigeriaCourseData[0].src3}
              ProjectsH3={DSNigeriaCourseData[0].ProjectsH3}
              Projectsp3={DSNigeriaCourseData[0].Projectsp3}
              src4={DSNigeriaCourseData[0].src4}
              ProjectsH4={DSNigeriaCourseData[0].ProjectsH4}
              Projectsp4={DSNigeriaCourseData[0].Projectsp4}
              AlumniBot1={DSNigeriaCourseData[0].AlumniBot1}
              Asrc1={DSNigeriaCourseData[0].Asrc1}
              AlumniH1={DSNigeriaCourseData[0].AlumniH1}
              Alumnip1={DSNigeriaCourseData[0].Alumnip1}
              Asrc2={DSNigeriaCourseData[0].Asrc2}
              AlumniH2={DSNigeriaCourseData[0].AlumniH2}
              Alumnip2={DSNigeriaCourseData[0].Alumnip2}
              Asrc3={DSNigeriaCourseData[0].Asrc3}
              AlumniH3={DSNigeriaCourseData[0].AlumniH3}
              Alumnip3={DSNigeriaCourseData[0].Alumnip3}
              Asrc4={DSNigeriaCourseData[0].Asrc4}
              AlumniH4={DSNigeriaCourseData[0].AlumniH4}
              Alumnip4={DSNigeriaCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSNigeriaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSNigeriaCourseData[0].CityTextB}
          CityText={DSNigeriaCourseData[0].CityText}
          CityTextLB={DSNigeriaCourseData[0].CityTextLB}
          CityTextL={DSNigeriaCourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
