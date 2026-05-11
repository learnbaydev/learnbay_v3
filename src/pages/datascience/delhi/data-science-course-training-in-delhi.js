import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSDelhiCourseData } from '../../../CityData/Delhi/DataScienceCourseTrainingDelhiData';
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
        <title>Data Science Course in Delhi With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
        />
        <meta
          name="keywords"
          content="data science course in Delhi, data science training in Delhi, data science institute in Delhi, best data science institute in Delhi, data scientist course in Delhi,data scientist certification in Delhi, data science training institute in Delhi, advanced data science course in Delhi, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data Science Course in Delhi With IBM Certification"
        />
        <meta
          property="og:description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
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
          content="https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi"
        />
        <meta
          name="twitter:title"
          content="Data Science Course in Delhi With IBM Certification"
        />
        <meta
          name="twitter:description"
          content="Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!"
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
          href="https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay - Data Analytics, Data Science Course Training in Delhi",
              "description": "Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!",
              "url": "https://www.learnbay.co/datascience/delhi/data-science-course-training-in-delhi",
              "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
              "address": {
    "@type": "PostalAddress",
    "streetAddress": "Business Centre, Arunachal Building, 6th floor, Barakhamba Road",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.62863216615201,
                "longitude": 77.22698874771595
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
                    "opens": "08:00",
                    "closes": "22:30"
                  },
                   {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Saturday"
                    ],
                    "opens": "08:00",
                    "closes": "21:00"
                 }
              ],
              "priceRange": "₹ 1,20,000 + 18% GST",
              "areaServed": "Delhi",
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
  "name": "Data Science Course in Delhi With IBM Certification",
  "description": "Advance Your Career With Learnbay's Data Science Course In Delhi. Get Dual Certifications, Updated Curriculum, And Hands-On Project Experience. Join Now!",
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
              "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Data Science Course in Delhi With IBM Certification",
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
    "name": "What are Data Science Training courses available at Learnbay in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Gen AI and Data Science Training Course, Advanced GenAI Master Data Science Certification Course, Gen Ai and Data Science Certification Course for Managers and Leaders. All Data Science Training with Placement Assistance"
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance"
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The data science course duration varies from course to course. Usually basic to master course varies between 9 months and 13 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Delhi at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Delhi, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Delhi?",
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
    "name": "What is the total fee for Data Science Certifications courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total course fee for the Data Science and Gen AI Training course is 1,20,000/- exclusive of GST. Advance Data Science and Gen AI Certification course is 1,20,000/- exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Delhi? What is Group Discount?",
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
      "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Delhi? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will receive two professional certificates in data science, one is for Data science and Gen AI course completion and the second one for the project work."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Delhi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Delhi?",
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
    "name": "Can a Learnbay student in Delhi choose to study from their desired mentor?",
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
          firstToparaImg=" - Enroll Now"
          firstHeading="Data Science Course in Delhi"
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Delhi with IBM Certification. Our advanced Data Science training in Delhi will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters. to gain the most in-demand data science and AI skills."
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSDelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DSDelhiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
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
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Science+%26+AI+Master+Certification+Program.pdf"
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
              cityTextDSDelhi={true}
              delhi={true}
              DomainHead1={DSDelhiCourseData[0].DomainHead1}
              DomainBot1={DSDelhiCourseData[0].DomainBot1}
              DomainBot2={DSDelhiCourseData[0].DomainBot2}
              DomainBot3={DSDelhiCourseData[0].DomainBot3}
              DomainList1={DSDelhiCourseData[0].DomainList1}
              DomainList2={DSDelhiCourseData[0].DomainList2}
              DomainList3={DSDelhiCourseData[0].DomainList3}
              DomainList4={DSDelhiCourseData[0].DomainList4}
              DomainList5={DSDelhiCourseData[0].DomainList5}
              DomainList6={DSDelhiCourseData[0].DomainList6}
              DomainList7={DSDelhiCourseData[0].DomainList7}
              DomainList8={DSDelhiCourseData[0].DomainList8}
              DomainList9={DSDelhiCourseData[0].DomainList9}
              DomainList10={DSDelhiCourseData[0].DomainList10}
              Domainlink1={DSDelhiCourseData[0].Domainlink1}
              Domainlink2={DSDelhiCourseData[0].Domainlink2}
              Domainlink3={DSDelhiCourseData[0].Domainlink3}
              Domainlink4={DSDelhiCourseData[0].Domainlink4}
              Domainlink5={DSDelhiCourseData[0].Domainlink5}
              Domainlink6={DSDelhiCourseData[0].Domainlink6}
              Domainlink7={DSDelhiCourseData[0].Domainlink7}
              Domainlink8={DSDelhiCourseData[0].Domainlink8}
              Domainlink9={DSDelhiCourseData[0].Domainlink9}
              Domainlink10={DSDelhiCourseData[0].Domainlink10}
              CertificationHead1={DSDelhiCourseData[0].CertificationHead1}
              CertificationBot1={DSDelhiCourseData[0].CertificationBot1}
              CertificationBot2={DSDelhiCourseData[0].CertificationBot2}
              src={DSDelhiCourseData[0].src}
              src22={DSDelhiCourseData[0].src22}
              src33={DSDelhiCourseData[0].src33}
              ModuleHead1={DSDelhiCourseData[0].ModuleHead1}
              ModuleBot1={DSDelhiCourseData[0].ModuleBot1}
              ModuleBot2={DSDelhiCourseData[0].ModuleBot2}
              ModuleBot3={DSDelhiCourseData[0].ModuleBot3}
              ModuleHead3={DSDelhiCourseData[0].ModuleHead3}
              ModuleBot4={DSDelhiCourseData[0].ModuleBot4}
              ModuleHead2={DSDelhiCourseData[0].ModuleHead2}
              syllabush1={DSDelhiCourseData[0].syllabush1}
              syllabusb1={DSDelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={DSDelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSDelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSDelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSDelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSDelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSDelhiCourseData[0].SyllabusBotlist16}
              syllabush2={DSDelhiCourseData[0].syllabush2}
              syllabusb2={DSDelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={DSDelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSDelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSDelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSDelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSDelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSDelhiCourseData[0].SyllabusBotlist26}
              syllabush3={DSDelhiCourseData[0].syllabush3}
              syllabusb3={DSDelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={DSDelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSDelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSDelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSDelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSDelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSDelhiCourseData[0].SyllabusBotlist36}
              syllabush4={DSDelhiCourseData[0].syllabush4}
              syllabusb4={DSDelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={DSDelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSDelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSDelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSDelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSDelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSDelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={DSDelhiCourseData[0].syllabussrc}
              JobHead1={DSDelhiCourseData[0].JobHead1}
              JobBot1={DSDelhiCourseData[0].JobBot1}
              JobBot2={DSDelhiCourseData[0].JobBot2}
              JobBot3={DSDelhiCourseData[0].JobBot3}
              JobHead2={DSDelhiCourseData[0].JobHead2}
              JobBot5={DSDelhiCourseData[0].JobBot5}
              JobBot4={DSDelhiCourseData[0].JobBot4}
              JobBot6={DSDelhiCourseData[0].JobBot6}
              ProjectsBot1={DSDelhiCourseData[0].ProjectsBot1}
              ProjectsBot2={DSDelhiCourseData[0].ProjectsBot2}
              src1={DSDelhiCourseData[0].src1}
              ProjectsHead1={DSDelhiCourseData[0].ProjectsHead1}
              ProjectsH1={DSDelhiCourseData[0].ProjectsH1}
              Projectsp1={DSDelhiCourseData[0].Projectsp1}
              src2={DSDelhiCourseData[0].src2}
              ProjectsH2={DSDelhiCourseData[0].ProjectsH2}
              Projectsp2={DSDelhiCourseData[0].Projectsp2}
              src3={DSDelhiCourseData[0].src3}
              ProjectsH3={DSDelhiCourseData[0].ProjectsH3}
              Projectsp3={DSDelhiCourseData[0].Projectsp3}
              src4={DSDelhiCourseData[0].src4}
              ProjectsH4={DSDelhiCourseData[0].ProjectsH4}
              Projectsp4={DSDelhiCourseData[0].Projectsp4}
              AlumniBot1={DSDelhiCourseData[0].AlumniBot1}
              Asrc1={DSDelhiCourseData[0].Asrc1}
              AlumniH1={DSDelhiCourseData[0].AlumniH1}
              Alumnip1={DSDelhiCourseData[0].Alumnip1}
              Asrc2={DSDelhiCourseData[0].Asrc2}
              AlumniH2={DSDelhiCourseData[0].AlumniH2}
              Alumnip2={DSDelhiCourseData[0].Alumnip2}
              Asrc3={DSDelhiCourseData[0].Asrc3}
              AlumniH3={DSDelhiCourseData[0].AlumniH3}
              Alumnip3={DSDelhiCourseData[0].Alumnip3}
              Asrc4={DSDelhiCourseData[0].Asrc4}
              AlumniH4={DSDelhiCourseData[0].AlumniH4}
              Alumnip4={DSDelhiCourseData[0].Alumnip4}
              alt1={DSDelhiCourseData[0].alt1}
              alt2={DSDelhiCourseData[0].alt2}
              alt3={DSDelhiCourseData[0].alt3}
              alt4={DSDelhiCourseData[0].alt4}
              alt5={DSDelhiCourseData[0].alt5}
              alt6={DSDelhiCourseData[0].alt6}
              alt7={DSDelhiCourseData[0].alt7}
              alt8={DSDelhiCourseData[0].alt8}
              alt9={DSDelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSDelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DSDelhiCourseData[0].CityTextB}
          CityText={DSDelhiCourseData[0].CityText}
          CityTextLB={DSDelhiCourseData[0].CityTextLB}
          CityTextL={DSDelhiCourseData[0].CityTextL}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0377025225034!2d77.22261153488769!3d28.62863210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6359f27df9%3A0x90b5e24793a5d614!2sLearnbay%20-%20Data%20Analytics%2C%20Data%20Science%20Course%20Training%20in%20Delhi!5e0!3m2!1sen!2sin!4v1754999874762!5m2!1sen!2sin"
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
