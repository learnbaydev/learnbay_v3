import { DSHyderabadSchema } from '@/Data/Schema/DSHyderabadSchema';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import { DataScienceHyderabadCourseData } from '../../../CityData/Hyderabad/dataScienceCourseTrainingInHyderabad';
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

const SeventhSection = dynamic(
  () => import('../../../components/Seo/SeventhSection/SeventhSection')
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

export default function Home() {
  const [popups, setPopups] = useState(false);

  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Program.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Data Science Courses Training in Hyderabad - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Master In-demand skills with Learnbay's Data Science Course In Hyderabad. Get expert-led GenAI training, IBM, MS certification, BYOP hands-on."
        />
        <meta
          name="keywords"
          content="data science course in Hyderabad, data science training in Hyderabad, data science institute in Hyderabad, best data science institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, data science training institute in Hyderabad, advanced data science course in Hyderabad, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science Courses Training in Hyderabad - Learnbay"
        />
        <meta
          property="og:description"
          content="Master In-demand skills with Learnbay's Data Science Course In Hyderabad. Get expert-led GenAI training, IBM, MS certification, BYOP hands-on."
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
          content="https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad"
        />
        <meta
          name="twitter:title"
          content="Best Data Science Courses Training in Hyderabad - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Master In-demand skills with Learnbay's Data Science Course In Hyderabad. Get expert-led GenAI training, IBM, MS certification, BYOP hands-on."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad"
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
  "name": "Best Data Science Courses Training in Hyderabad - Learnbay",
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
    "ratingCount": "1500"
  }
}
 }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
              "@context": "http://schema.org",
      "@type": "Course",
      "name": "Best Data Science Courses Training in Hyderabad - Learnbay",
      "description": "Master In-demand skills with Learnbay's Data Science Course In Hyderabad. Get expert-led GenAI training, IBM, MS certification, BYOP hands-on.",
      "url": "https://www.learnbay.co/datascience/hyderabad/data-science-course-training-in-hyderabad",
      "offers": {
        "@type": "offer",
        "price": "120000",
        "pricecurrency": "INR",
        "category": "Educational"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
      "coursePrerequisites": "You should know about basic python before joining the program.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P9M",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,20,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
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
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are Data Science Training courses available at Learnbay in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data Science and GenAI Certification Program, Advance Data Science and GenAI Master program, GenAI and Agentic AI Program for Managers and Leaders are available in Hyderabad."
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for these Data Science training Courses in Hyderabad?",
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
    "name": "What is a Flexi Subscription in these advanced data science courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of these advanced data science courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the data science and Gen AI course is 9-13 months. Classes will be conducted on weekdays and weekend batches. In the case of a non-master program, around 9 months is the timeline, while the master program is of around 13 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of data science training in Hyderabad at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Hyderabad, At Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Hyderabad?",
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
    "name": "What is the total fee for Data Science Certifications courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total course fees depend on which particular course you choose from the data science and agentic AI categories. Usually, the course price varies from 1,20,000 to 1,59,000 INR, exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for these Data Science Certification courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship/discount available for these Data Science training courses available in Hyderabad? What is Group Discount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "What is the refund policy for the Data Science Certification courses at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Candidates are advised to read Refund/Cancellation policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many capstone projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Hyderabad? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects. Click here to download the list of the projects."
    }
  },{
    "@type": "Question",
    "name": "How will the projects be executed in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited data science certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will receive 3 to 4 certifications: the Course Completion Certification from IBM Certification, the Gen AI Certification from IBM, and the Capstone Project Certification. For a few advanced and Master Programs, there will also be additional IBM certification."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in Hyderabad?",
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
    "name": "Can a Learnbay student in Hyderabad choose to study from their desired mentor?",
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
          cityParaCont="Propel global-scale success with our Generative AI-rich data science course in Hyderabad. Earn prestigious IBM & Microsoft certificates to reshape your career and validate job-driven skills – from Python basics to Advanced AI. Make resilient career advances with our seasoned experts' aid and thrive globally. "
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Data Science Course in Hyderabad"
          firstTopPara="Foundational and Advance Job-ready Program"
          ibmOnly={true}
        />
        <SecondSection
          SecondSectionData={DataScienceHyderabadCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceHyderabadCourseData[0].testimonial}
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
              hydrabad={true}
              cityTextDSHyderabad={true}
              DomainHead1={DataScienceHyderabadCourseData[0].DomainHead1}
              DomainBot1={DataScienceHyderabadCourseData[0].DomainBot1}
              DomainBot2={DataScienceHyderabadCourseData[0].DomainBot2}
              DomainBot3={DataScienceHyderabadCourseData[0].DomainBot3}
              DomainBot4={DataScienceHyderabadCourseData[0].DomainBot4}
              DomainList1={DataScienceHyderabadCourseData[0].DomainList1}
              DomainList2={DataScienceHyderabadCourseData[0].DomainList2}
              DomainList3={DataScienceHyderabadCourseData[0].DomainList3}
              DomainList4={DataScienceHyderabadCourseData[0].DomainList4}
              DomainList5={DataScienceHyderabadCourseData[0].DomainList5}
              DomainList6={DataScienceHyderabadCourseData[0].DomainList6}
              DomainList7={DataScienceHyderabadCourseData[0].DomainList7}
              DomainList8={DataScienceHyderabadCourseData[0].DomainList8}
              DomainList9={DataScienceHyderabadCourseData[0].DomainList9}
              DomainList10={DataScienceHyderabadCourseData[0].DomainList10}
              Domainlink1={DataScienceHyderabadCourseData[0].Domainlink1}
              Domainlink2={DataScienceHyderabadCourseData[0].Domainlink2}
              Domainlink3={DataScienceHyderabadCourseData[0].Domainlink3}
              Domainlink4={DataScienceHyderabadCourseData[0].Domainlink4}
              Domainlink5={DataScienceHyderabadCourseData[0].Domainlink5}
              Domainlink6={DataScienceHyderabadCourseData[0].Domainlink6}
              Domainlink7={DataScienceHyderabadCourseData[0].Domainlink7}
              Domainlink8={DataScienceHyderabadCourseData[0].Domainlink8}
              Domainlink9={DataScienceHyderabadCourseData[0].Domainlink9}
              Domainlink10={DataScienceHyderabadCourseData[0].Domainlink10}
              CertificationBot1={
                DataScienceHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataScienceHyderabadCourseData[0].CertificationBot2
              }
              CertificationBot3={
                DataScienceHyderabadCourseData[0].CertificationBot3
              }
              CertificationBot4={
                DataScienceHyderabadCourseData[0].CertificationBot4
              }
              listsCertificate={true}
              Certificationlist1={
                DataScienceHyderabadCourseData[0].Certificationlist1
              }
              Certificationlist2={
                DataScienceHyderabadCourseData[0].Certificationlist2
              }
              Certificationlist3={
                DataScienceHyderabadCourseData[0].Certificationlist3
              }
              src={DataScienceHyderabadCourseData[0].src}
              src22={DataScienceHyderabadCourseData[0].src22}
              src33={DataScienceHyderabadCourseData[0].src33}
              alt222={DataScienceHyderabadCourseData[0].alt222}
              alt333={DataScienceHyderabadCourseData[0].alt333}
              alt444={DataScienceHyderabadCourseData[0].alt444}
              alt555={DataScienceHyderabadCourseData[0].alt555}
              ModuleHead1={DataScienceHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={DataScienceHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceHyderabadCourseData[0].ModuleBot2}
              ModuleBot3={DataScienceHyderabadCourseData[0].ModuleBot3}
              syllabush1={DataScienceHyderabadCourseData[0].syllabush1}
              syllabusb1={DataScienceHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataScienceHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataScienceHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataScienceHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataScienceHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataScienceHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataScienceHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataScienceHyderabadCourseData[0].syllabush2}
              syllabusb2={DataScienceHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataScienceHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataScienceHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataScienceHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataScienceHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataScienceHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataScienceHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataScienceHyderabadCourseData[0].syllabush3}
              syllabusb3={DataScienceHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataScienceHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataScienceHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataScienceHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataScienceHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataScienceHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataScienceHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataScienceHyderabadCourseData[0].syllabush4}
              syllabusb4={DataScienceHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataScienceHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataScienceHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataScienceHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataScienceHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataScienceHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataScienceHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataScienceHyderabadCourseData[0].syllabussrc}
              JobHead1={DataScienceHyderabadCourseData[0].JobHead1}
              JobBot1={DataScienceHyderabadCourseData[0].JobBot1}
              JobBot2={DataScienceHyderabadCourseData[0].JobBot2}
              JobBot5={DataScienceHyderabadCourseData[0].JobBot5}
              JobHead2={DataScienceHyderabadCourseData[0].JobHead2}
              JobBot3={DataScienceHyderabadCourseData[0].JobBot3}
              JobBot4={DataScienceHyderabadCourseData[0].JobBot4}
              JobBot6={DataScienceHyderabadCourseData[0].JobBot6}
              JobBot7={DataScienceHyderabadCourseData[0].JobBot7}
              hydraListJob={true}
              Joblist1={DataScienceHyderabadCourseData[0].Joblist1}
              Joblist2={DataScienceHyderabadCourseData[0].Joblist2}
              Joblist3={DataScienceHyderabadCourseData[0].Joblist3}
              Joblist4={DataScienceHyderabadCourseData[0].Joblist4}
              Joblist5={DataScienceHyderabadCourseData[0].Joblist5}
              Joblist6={DataScienceHyderabadCourseData[0].Joblist6}
              Joblist50={DataScienceHyderabadCourseData[0].Joblist50}
              ProjectsHead1={DataScienceHyderabadCourseData[0].ProjectsHead1}
              ProjectsBot1={DataScienceHyderabadCourseData[0].ProjectsBot1}
              ProjectsBot2={DataScienceHyderabadCourseData[0].ProjectsBot2}
              ProjectsBot31={DataScienceHyderabadCourseData[0].ProjectsBot31}
              ProjectsBot32={DataScienceHyderabadCourseData[0].ProjectsBot32}
              src1={DataScienceHyderabadCourseData[0].src1}
              ProjectsH1={DataScienceHyderabadCourseData[0].ProjectsH1}
              Projectsp1={DataScienceHyderabadCourseData[0].Projectsp1}
              src2={DataScienceHyderabadCourseData[0].src2}
              ProjectsH2={DataScienceHyderabadCourseData[0].ProjectsH2}
              Projectsp2={DataScienceHyderabadCourseData[0].Projectsp2}
              src3={DataScienceHyderabadCourseData[0].src3}
              ProjectsH3={DataScienceHyderabadCourseData[0].ProjectsH3}
              Projectsp3={DataScienceHyderabadCourseData[0].Projectsp3}
              src4={DataScienceHyderabadCourseData[0].src4}
              ProjectsH4={DataScienceHyderabadCourseData[0].ProjectsH4}
              Projectsp4={DataScienceHyderabadCourseData[0].Projectsp4}
              AlumniBot1={DataScienceHyderabadCourseData[0].AlumniBot1}
              Asrc1={DataScienceHyderabadCourseData[0].Asrc1}
              AlumniH1={DataScienceHyderabadCourseData[0].AlumniH1}
              Alumnip1={DataScienceHyderabadCourseData[0].Alumnip1}
              Asrc2={DataScienceHyderabadCourseData[0].Asrc2}
              AlumniH2={DataScienceHyderabadCourseData[0].AlumniH2}
              Alumnip2={DataScienceHyderabadCourseData[0].Alumnip2}
              Asrc3={DataScienceHyderabadCourseData[0].Asrc3}
              AlumniH3={DataScienceHyderabadCourseData[0].AlumniH3}
              Alumnip3={DataScienceHyderabadCourseData[0].Alumnip3}
              Asrc4={DataScienceHyderabadCourseData[0].Asrc4}
              AlumniH4={DataScienceHyderabadCourseData[0].AlumniH4}
              Alumnip4={DataScienceHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={DataScienceHyderabadCourseData[0].CityTextB}
          CityText={DataScienceHyderabadCourseData[0].CityText}
          CityTextLB={DataScienceHyderabadCourseData[0].CityTextLB}
          CityTextL={DataScienceHyderabadCourseData[0].CityTextL}
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
