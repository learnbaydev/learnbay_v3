import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BABangaloreCourseData } from '../../../../src/CityData/Bangalore/businessAnalyticsCourseTrainingBangaloreData';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Navbar from '../../../components/Global/Navbar/Navbar';
import Popup from '../../../components/Global/Popup/Popup';
import FeeSection from '../../../components/Seo/FeeSection/FeeSection';
import Testimonial from '../../../components/Seo/Testimonial/Testimonial';
import styles from '../../../styles/Home.module.css';
const OfferPopup = dynamic(
  () => import('../../../components/Global/OfferPopup/OfferPopup')
);
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/downloadBrochure/Business-Analytics-Program.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Analyst Course Training in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Bangalore, Business Analytics training in Bangalore, Business Analytics institute in Bangalore, best Business Analytics institute in Bangalore, Business Analytics course in Bangalore, Business Analytics certification in Bangalore, Business Analytics training institute in Bangalore, advanced Business Analytics course in Bangalore, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/bangalore/business-analytics-course-training-in-bangalore"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Business Analyst Course Training in Bangalore - Learnbay"
        />
        <meta
          property="og:description"
          content="Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now."
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
          content="https://www.learnbay.co/datascience/bangalore/business-analytics-course-training-in-bangalore"
        />
        <meta
          name="twitter:title"
          content="Business Analyst Course Training in Bangalore - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/bangalore/business-analytics-course-training-in-bangalore"
        />
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
            "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay - Data Science, Data Analyst Course Training in Bangalore",
              "description": "Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now.",
              "url": "https://www.learnbay.co/datascience/bangalore/business-analytics-course-training-in-bangalore",
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
                "latitude": 12.911826836324302,
                "longitude": 77.64119807972756
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
                    "opens": "07:00",
                    "closes": "22:30"
                  },
                   {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Saturday"
                    ],
                    "opens": "07:00",
                    "closes": "22:30"
                 }
              ],
              "priceRange": "₹ 1,20,000 + 18% GST",
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
  "name": "Business Analyst Course Training in Bangalore - Learnbay",
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
    "ratingCount": "3742"
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
  "name": "Business Analyst Course Training in Bangalore - Learnbay",
  "description": "Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now.",
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
    "name": "What are the prerequisites for the Business Analytics Training Course in Bangalore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no prerequisites for this Business Analytics certification course in Bangalore as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
    "name": "What is a Flexi Subscription in the Business Analytics Certification course in Bangalore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of the Business Analytics Program in Bangalore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Duration of the business analytics course in Bangalore, with the Gen AI course, is a total of 6 months."
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
    "name": "What is domain specialization?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific, full-stack business analytics with Gen AI modules, through which you learn the industry’s best practices."
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
      "text": "You can select your domain based on your prior work experience, academics, and career goals."
    }
  },{
    "@type": "Question",
    "name": "Why is domain specialization important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the business analytics with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge which is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset’s attributes. Furthermore, the model will be more observable in a real-world situation."
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
    "name": "What if I don’t have any prior experience in any domain?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If you don’t have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects."
    }
  },{
    "@type": "Question",
    "name": "Can I change my domain electives later?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can change your electives or repeat the training anytime, but within the course accessibility duration."
    }
  },{
    "@type": "Question",
    "name": "What is the total fee for the Business Analytics Program in Bangalore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total program fee for the Business Analytics Program is INR 1,20,000/- exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for INR 1,20,000/-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 12 months. You can also choose an interest-free loan with proper Aadhar and other documents verification. Please check with our sales team to know more."
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
      "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a set of 5 Real-time projects from multiple industries live Healthcare, Banking, Finance, Insurance, Retail, etc. Click here to download the list of the projects."
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
      "text": "Yes, you will be awarded IBM and IIT Patna-accredited Business Analytics Certificate on successful course completion."
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
      "text": "Yes, we offer dedicated placement assistance by referring your profile through our partnered consultancies and companies."
    }
  },{
    "@type": "Question",
    "name": "Until when will the students get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our mentors will provide Business Analytics training to the students until the completion of the course."
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
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf"
          brochurePdf={pdfUrl}
          idss="CHut_wm-P2s"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="Training In Bangalore"
          firstHeading="Business Analytics Course"
          firstTopPara="Job-ready Business Analytics Program with Live Industrial Projects"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future."
          iitptnaandms={true}
        />
        <SecondSection
          SecondSectionData={BABangaloreCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BABangaloreCourseData[0].testimonial}
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
              ProgramBot1={BABangaloreCourseData[0].ProgramBot1}
              ProgramHead3={BABangaloreCourseData[0].ProgramHead3}
              ProgramBot3={BABangaloreCourseData[0].ProgramBot3}
              ProgramBot31={BABangaloreCourseData[0].ProgramBot31}
              ProgramBot4={BABangaloreCourseData[0].ProgramBot4}
              ProgramBot5={BABangaloreCourseData[0].ProgramBot5}
              ProgramBot6={BABangaloreCourseData[0].ProgramBot6}
              Courselink1={BABangaloreCourseData[0].Courselink1}
              Courselink2={BABangaloreCourseData[0].Courselink2}
              Courselink3={BABangaloreCourseData[0].Courselink3}
              Courselink4={BABangaloreCourseData[0].Courselink4}
              Courselink5={BABangaloreCourseData[0].Courselink5}
              Course1={BABangaloreCourseData[0].Course1}
              Course2={BABangaloreCourseData[0].Course2}
              Course3={BABangaloreCourseData[0].Course3}
              Course4={BABangaloreCourseData[0].Course4}
              Course5={BABangaloreCourseData[0].Course5}
              DomainHead1={BABangaloreCourseData[0].DomainHead1}
              DomainBot1={BABangaloreCourseData[0].DomainBot1}
              DomainBot2={BABangaloreCourseData[0].DomainBot2}
              DomainBot3={BABangaloreCourseData[0].DomainBot3}
              DomainList1={BABangaloreCourseData[0].DomainList1}
              DomainList2={BABangaloreCourseData[0].DomainList2}
              DomainList3={BABangaloreCourseData[0].DomainList3}
              DomainList4={BABangaloreCourseData[0].DomainList4}
              DomainList5={BABangaloreCourseData[0].DomainList5}
              DomainList6={BABangaloreCourseData[0].DomainList6}
              DomainList7={BABangaloreCourseData[0].DomainList7}
              DomainList8={BABangaloreCourseData[0].DomainList8}
              DomainList9={BABangaloreCourseData[0].DomainList9}
              DomainList10={BABangaloreCourseData[0].DomainList10}
              Domainlink1={BABangaloreCourseData[0].Domainlink1}
              Domainlink2={BABangaloreCourseData[0].Domainlink2}
              Domainlink3={BABangaloreCourseData[0].Domainlink3}
              Domainlink4={BABangaloreCourseData[0].Domainlink4}
              Domainlink5={BABangaloreCourseData[0].Domainlink5}
              Domainlink6={BABangaloreCourseData[0].Domainlink6}
              Domainlink7={BABangaloreCourseData[0].Domainlink7}
              Domainlink8={BABangaloreCourseData[0].Domainlink8}
              Domainlink9={BABangaloreCourseData[0].Domainlink9}
              Domainlink10={BABangaloreCourseData[0].Domainlink10}
              CertificationHead1={BABangaloreCourseData[0].CertificationHead1}
              CertificationBot1={BABangaloreCourseData[0].CertificationBot1}
              src={BABangaloreCourseData[0].src}
              src22={BABangaloreCourseData[0].src22}
              src33={BABangaloreCourseData[0].src33}
              ModuleBot1={BABangaloreCourseData[0].ModuleBot1}
              ModuleBot2={BABangaloreCourseData[0].ModuleBot2}
              ModuleBot3={BABangaloreCourseData[0].ModuleBot3}
              syllabush1={BABangaloreCourseData[0].syllabush1}
              syllabusb1={BABangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={BABangaloreCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BABangaloreCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BABangaloreCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BABangaloreCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BABangaloreCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BABangaloreCourseData[0].SyllabusBotlist16}
              syllabush2={BABangaloreCourseData[0].syllabush2}
              syllabusb2={BABangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={BABangaloreCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BABangaloreCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BABangaloreCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BABangaloreCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BABangaloreCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BABangaloreCourseData[0].SyllabusBotlist26}
              syllabush3={BABangaloreCourseData[0].syllabush3}
              syllabusb3={BABangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={BABangaloreCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BABangaloreCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BABangaloreCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BABangaloreCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BABangaloreCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BABangaloreCourseData[0].SyllabusBotlist36}
              syllabush4={BABangaloreCourseData[0].syllabush4}
              syllabusb4={BABangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={BABangaloreCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BABangaloreCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BABangaloreCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BABangaloreCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BABangaloreCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BABangaloreCourseData[0].SyllabusBotlist46}
              syllabussrc={BABangaloreCourseData[0].syllabussrc}
              JobBot1={BABangaloreCourseData[0].JobBot1}
              JobHead2={BABangaloreCourseData[0].JobHead2}
              JobBot3={BABangaloreCourseData[0].JobBot3}
              JobBot4={BABangaloreCourseData[0].JobBot4}
              ProjectsBot1={BABangaloreCourseData[0].ProgramBot1}
              src1={BABangaloreCourseData[0].src1}
              ProjectsH1={BABangaloreCourseData[0].ProjectsH1}
              Projectsp1={BABangaloreCourseData[0].Projectsp1}
              src2={BABangaloreCourseData[0].src2}
              ProjectsH2={BABangaloreCourseData[0].ProjectsH2}
              Projectsp2={BABangaloreCourseData[0].Projectsp2}
              src3={BABangaloreCourseData[0].src3}
              ProjectsH3={BABangaloreCourseData[0].ProjectsH3}
              Projectsp3={BABangaloreCourseData[0].Projectsp3}
              src4={BABangaloreCourseData[0].src4}
              ProjectsH4={BABangaloreCourseData[0].ProjectsH4}
              Projectsp4={BABangaloreCourseData[0].Projectsp4}
              AlumniBot1={BABangaloreCourseData[0].AlumniBot1}
              Asrc1={BABangaloreCourseData[0].Asrc1}
              AlumniH1={BABangaloreCourseData[0].AlumniH1}
              Alumnip1={BABangaloreCourseData[0].Alumnip1}
              Asrc2={BABangaloreCourseData[0].Asrc2}
              AlumniH2={BABangaloreCourseData[0].AlumniH2}
              Alumnip2={BABangaloreCourseData[0].Alumnip2}
              Asrc3={BABangaloreCourseData[0].Asrc3}
              AlumniH3={BABangaloreCourseData[0].AlumniH3}
              Alumnip3={BABangaloreCourseData[0].Alumnip3}
              Asrc4={BABangaloreCourseData[0].Asrc4}
              AlumniH4={BABangaloreCourseData[0].AlumniH4}
              Alumnip4={BABangaloreCourseData[0].Alumnip4}
              alt1={BABangaloreCourseData[0].alt1}
              alt2={BABangaloreCourseData[0].alt2}
              alt3={BABangaloreCourseData[0].alt3}
              alt4={BABangaloreCourseData[0].alt4}
              alt5={BABangaloreCourseData[0].alt5}
              alt6={BABangaloreCourseData[0].alt6}
              alt7={BABangaloreCourseData[0].alt7}
              alt8={BABangaloreCourseData[0].alt8}
              alt9={BABangaloreCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={BABangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BABangaloreCourseData[0].CityTextB}
          CityText={BABangaloreCourseData[0].CityText}
          CityTextLB={BABangaloreCourseData[0].CityTextLB}
          CityTextL={BABangaloreCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
