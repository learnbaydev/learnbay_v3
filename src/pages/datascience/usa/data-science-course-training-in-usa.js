import Navbar from '@/components/Global/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSUSACourseData } from '../../../CityData/Usa/datascienceCourseTrainingInUsa';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Popup from '../../../components/Global/Popup/Popup';
import FeeSection from '../../../components/Seo/FeeSection/FeeSection';
// import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import Realstory from '@/components/Home/Realstory/Realstory';
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advance+Data+Science+and+GenAI+Program_comp.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Online Data Science Course in USA with GenAI | Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore the Top online data science program in USA with Learnbay. Get IBM GenAI certified, Real-world projects, expert-led training. Enroll now!"
        />
        <meta
          name="keywords"
          content="Data Science Course in USA, data scientist course in usa, best data science courses in usa, data science training in usa, data science course, data science certificate, data science certification course, best data science certification          "
        />

        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Online Data Science Course in USA with GenAI | Learnbay"
        />
        <meta
          property="og:description"
          content="Explore the Top online data science program in USA with Learnbay. Get IBM GenAI certified, Real-world projects, expert-led training. Enroll now!"
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
          content="https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa"
        />
        <meta
          name="twitter:title"
          content="Best Online Data Science Course in USA with GenAI | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Explore the Top online data science program in USA with Learnbay. Get IBM GenAI certified, Real-world projects, expert-led training. Enroll now!"
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
  "@type": "Product",
  "name": "Best Online Data Science Course in USA with GenAI | Learnbay",
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
    "ratingCount": "1590"
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
  "name": "Best Online Data Science Course in USA with GenAI | Learnbay",
  "description": "Explore the Top online data science program in USA with Learnbay. Get IBM GenAI certified, Real-world projects, expert-led training. Enroll now!",
  "url": "https://www.learnbay.co/datascience/usa/data-science-course-training-in-usa",
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
    "name": "What are Data Science Training courses available at Learnbay in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data Science and Gen AI Certification Course, Advanced Data Science and Gen AI master Program, and Gen AI and Agentic AI for Managers and Leaders."
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in USA?",
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
    "name": "What is a Flexi Subscription in these advanced data science courses in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science and Gen AI live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of these courses is about 9 to 13. months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in USA at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in USA, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in USA?",
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
    "name": "What is the total fee for Data Science Certifications courses in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Data Science certification courses in the USA from Learnbay will cost you around $1700 to $1800."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can get installments and other offer beased on the availability and running promotional offers. Please contact our counselor for the same."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in USA? What is Group Discount?",
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
      "text": "This course offers around 18 hours of live project, where you can experience AI Co-lab and BYOP (Bring Your Own business Problem)."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will be awarded IBM-accredited Data Scientist and Gen AI Certifications on successful course completion. But based on the course you choose, you can get Multiple certification options too. If you choose the Master Course, then you can get Dual Certifications from IBM."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in USA?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
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
    "name": "Can a Learnbay student in USA choose to study from their desired mentor?",
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
          titleCourse="Best Data Science Courses in USA          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Data Science Courses in USA          "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Escalate your data science career with our premium training programs in the USA. Our comprehensively engineered courses will help you acquire marketable data science skills with validation from IBM . Get ready to equip yourself with job-oriented expertise via an AI and Data Science course in USA.           "
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSUSACourseData[0].secondSection} />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={DSUSACourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700 "
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
              cityTextDSUSA={true}
              ProgramBot1={DSUSACourseData[0].ProgramBot1}
              ProgramHead3={DSUSACourseData[0].ProgramHead3}
              ProgramBot3={DSUSACourseData[0].ProgramBot3}
              ProgramBot31={DSUSACourseData[0].ProgramBot31}
              ProgramBot4={DSUSACourseData[0].ProgramBot4}
              ProgramBot5={DSUSACourseData[0].ProgramBot5}
              ProgramBot6={DSUSACourseData[0].ProgramBot6}
              Courselink1={DSUSACourseData[0].Courselink1}
              Courselink2={DSUSACourseData[0].Courselink2}
              Courselink3={DSUSACourseData[0].Courselink3}
              Courselink4={DSUSACourseData[0].Courselink4}
              Courselink5={DSUSACourseData[0].Courselink5}
              Course1={DSUSACourseData[0].Course1}
              Course2={DSUSACourseData[0].Course2}
              Course3={DSUSACourseData[0].Course3}
              Course4={DSUSACourseData[0].Course4}
              Course5={DSUSACourseData[0].Course5}
              DomainHead1={DSUSACourseData[0].DomainHead1}
              DomainBot1={DSUSACourseData[0].DomainBot1}
              DomainBot2={DSUSACourseData[0].DomainBot2}
              DomainBot3={DSUSACourseData[0].DomainBot3}
              DomainList1={DSUSACourseData[0].DomainList1}
              DomainList2={DSUSACourseData[0].DomainList2}
              DomainList3={DSUSACourseData[0].DomainList3}
              DomainList4={DSUSACourseData[0].DomainList4}
              DomainList5={DSUSACourseData[0].DomainList5}
              DomainList6={DSUSACourseData[0].DomainList6}
              Domainlink1={DSUSACourseData[0].Domainlink1}
              Domainlink2={DSUSACourseData[0].Domainlink2}
              Domainlink3={DSUSACourseData[0].Domainlink3}
              Domainlink4={DSUSACourseData[0].Domainlink4}
              Domainlink5={DSUSACourseData[0].Domainlink5}
              Domainlink6={DSUSACourseData[0].Domainlink6}
              Domainlink7={DSUSACourseData[0].Domainlink1}
              Domainlink8={DSUSACourseData[0].Domainlink1}
              Domainlink9={DSUSACourseData[0].Domainlink1}
              Domainlink10={DSUSACourseData[0].Domainlink1}
              CertificationBot1={DSUSACourseData[0].CertificationBot1}
              CertificationBot2={DSUSACourseData[0].CertificationBot2}
              CertificationBot3={DSUSACourseData[0].CertificationBot3}
              CertificationBot4={DSUSACourseData[0].CertificationBot4}
              src={DSUSACourseData[0].src}
              src22={DSUSACourseData[0].src22}
              src33={DSUSACourseData[0].src33}
              ModuleHead1={DSUSACourseData[0].ModuleHead1}
              ModuleBot1={DSUSACourseData[0].ModuleBot1}
              ModuleBot2={DSUSACourseData[0].ModuleBot2}
              Modulelist1={DSUSACourseData[0].Modulelist1}
              Modulelist2={DSUSACourseData[0].Modulelist2}
              Modulelist3={DSUSACourseData[0].Modulelist3}
              Modulelist4={DSUSACourseData[0].Modulelist4}
              Modulelist5={DSUSACourseData[0].Modulelist5}
              Modulelist6={DSUSACourseData[0].Modulelist6}
              Modulelist7={DSUSACourseData[0].Modulelist7}
              syllabush1={DSUSACourseData[0].syllabush1}
              syllabusb1={DSUSACourseData[0].syllabusb1}
              SyllabusBotlist11={DSUSACourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSUSACourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSUSACourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSUSACourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSUSACourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSUSACourseData[0].SyllabusBotlist16}
              syllabush2={DSUSACourseData[0].syllabush2}
              syllabusb2={DSUSACourseData[0].syllabusb2}
              SyllabusBotlist21={DSUSACourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSUSACourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSUSACourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSUSACourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSUSACourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSUSACourseData[0].SyllabusBotlist26}
              syllabush3={DSUSACourseData[0].syllabush3}
              syllabusb3={DSUSACourseData[0].syllabusb3}
              SyllabusBotlist31={DSUSACourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSUSACourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSUSACourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSUSACourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSUSACourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSUSACourseData[0].SyllabusBotlist36}
              syllabush4={DSUSACourseData[0].syllabush4}
              syllabusb4={DSUSACourseData[0].syllabusb4}
              SyllabusBotlist41={DSUSACourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSUSACourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSUSACourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSUSACourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSUSACourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSUSACourseData[0].SyllabusBotlist46}
              syllabussrc={DSUSACourseData[0].syllabussrc}
              JobHead1={DSUSACourseData[0].JobHead1}
              JobHead2={DSUSACourseData[0].JobHead2}
              JobBot3={DSUSACourseData[0].JobBot3}
              Joblist1={DSUSACourseData[0].Joblist1}
              Joblist2={DSUSACourseData[0].Joblist2}
              Joblist3={DSUSACourseData[0].Joblist3}
              Joblist4={DSUSACourseData[0].Joblist4}
              Joblist5={DSUSACourseData[0].Joblist5}
              Joblist6={DSUSACourseData[0].Joblist6}
              Joblist7={DSUSACourseData[0].Joblist7}
              Joblist8={DSUSACourseData[0].Joblist8}
              Joblist9={DSUSACourseData[0].Joblist9}
              Joblist10={DSUSACourseData[0].Joblist10}
              Joblist11={DSUSACourseData[0].Joblist11}
              Joblist12={DSUSACourseData[0].Joblist12}
              Joblist13={DSUSACourseData[0].Joblist13}
              JobHead19={DSUSACourseData[0].JobHead19}
              JobBot20={DSUSACourseData[0].JobBot20}
              JobHead20={DSUSACourseData[0].JobHead20}
              Joblist14={DSUSACourseData[0].Joblist14}
              Joblist15={DSUSACourseData[0].Joblist15}
              Joblist16={DSUSACourseData[0].Joblist16}
              Joblist17={DSUSACourseData[0].Joblist17}
              JobHead21={DSUSACourseData[0].JobHead21}
              JobBot21={DSUSACourseData[0].JobBot21}
              JobBot22={DSUSACourseData[0].JobBot22}
              Joblist21={DSUSACourseData[0].Joblist21}
              Joblist22={DSUSACourseData[0].Joblist22}
              Joblist50={DSUSACourseData[0].Joblist50}
              Joblist51={DSUSACourseData[0].Joblist51}
              Joblist52={DSUSACourseData[0].Joblist52}
              // Joblist53={DSUSACourseData[0].Joblist53}
              Joblist54={DSUSACourseData[0].Joblist54}
              JobBot23={DSUSACourseData[0].JobBot23}
              usaonly={true}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={DSUSACourseData[0].JobHead22}
              JobBot24={DSUSACourseData[0].JobBot24}
              Joblist23={DSUSACourseData[0].Joblist23}
              Joblist24={DSUSACourseData[0].Joblist24}
              Joblist25={DSUSACourseData[0].Joblist25}
              Joblist26={DSUSACourseData[0].Joblist26}
              Joblist27={DSUSACourseData[0].Joblist27}
              Joblist28={DSUSACourseData[0].Joblist28}
              Joblist29={DSUSACourseData[0].Joblist29}
              Joblist30={DSUSACourseData[0].Joblist30}
              JobBot25={DSUSACourseData[0].JobBot25}
              ProjectsHead1={DSUSACourseData[0].ProjectsHead1}
              ProjectsBot1={DSUSACourseData[0].ProjectsBot1}
              ProjectsBot2={DSUSACourseData[0].ProjectsBot2}
              ProjectsBot3={DSUSACourseData[0].ProjectsBot3}
              ProjectsBot4={DSUSACourseData[0].ProjectsBot4}
              ProjectsBot5={DSUSACourseData[0].ProjectsBot5}
              ProjectsBot6={DSUSACourseData[0].ProjectsBot6}
              ProjectsBot7={DSUSACourseData[0].ProjectsBot7}
              src1={DSUSACourseData[0].src1}
              ProjectsH1={DSUSACourseData[0].ProjectsH1}
              Projectsp1={DSUSACourseData[0].Projectsp1}
              src2={DSUSACourseData[0].src2}
              ProjectsH2={DSUSACourseData[0].ProjectsH2}
              Projectsp2={DSUSACourseData[0].Projectsp2}
              src3={DSUSACourseData[0].src3}
              ProjectsH3={DSUSACourseData[0].ProjectsH3}
              Projectsp3={DSUSACourseData[0].Projectsp3}
              src4={DSUSACourseData[0].src4}
              ProjectsH4={DSUSACourseData[0].ProjectsH4}
              Projectsp4={DSUSACourseData[0].Projectsp4}
              AlumniBot1={DSUSACourseData[0].AlumniBot1}
              Asrc1={DSUSACourseData[0].Asrc1}
              AlumniH1={DSUSACourseData[0].AlumniH1}
              Alumnip1={DSUSACourseData[0].Alumnip1}
              Asrc2={DSUSACourseData[0].Asrc2}
              AlumniH2={DSUSACourseData[0].AlumniH2}
              Alumnip2={DSUSACourseData[0].Alumnip2}
              Asrc3={DSUSACourseData[0].Asrc3}
              AlumniH3={DSUSACourseData[0].AlumniH3}
              Alumnip3={DSUSACourseData[0].Alumnip3}
              Asrc4={DSUSACourseData[0].Asrc4}
              AlumniH4={DSUSACourseData[0].AlumniH4}
              Alumnip4={DSUSACourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSUSACourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSUSACourseData[0].CityTextB}
          CityText={DSUSACourseData[0].CityText}
          CityTextLB={DSUSACourseData[0].CityTextLB}
          CityTextL={DSUSACourseData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
