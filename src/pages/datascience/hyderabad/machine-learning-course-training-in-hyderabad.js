import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MachineLearningHyderabadCourseData } from '../../../CityData/Hyderabad/machineLearningCourseTrainingInHyderabad';
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/AIML+Program_comp.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Machine Learning Course in Hyderabad with GenAI | Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled trainers, IBM, MS Certificates, 15+ projects. Enroll Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Machine Learning Course in Hyderabad with GenAI | Learnbay
"
        />
        <meta
          property="og:description"
          content="Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled trainers, IBM, MS Certificates, 15+ projects. Enroll Now."
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
          content="https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad"
        />
        <meta
          name="twitter:title"
          content="Best Machine Learning Course in Hyderabad with GenAI | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled trainers, IBM, MS Certificates, 15+ projects. Enroll Now."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <meta
          name="keywords"
          content="Machine learning course in Hyderabad, Machine learning training in Hyderabad, Machine learning institute in Hyderabad, best Machine learning institute in Hyderabad, Machine learning course in Hyderabad, Machine learning certification in Hyderabad, Machine learning training institute in Hyderabad, advanced Machine learning course in Hyderabad, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
  "name": "Best Machine Learning Course in Hyderabad with GenAI | Learnbay",
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
    "ratingCount": "1104"
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
      "name": "Best Machine Learning Course in Hyderabad with GenAI | Learnbay",
      "description": "Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled trainers, IBM, MS Certificates, 15+ projects. Enroll Now.",
      "url": "https://www.learnbay.co/datascience/hyderabad/machine-learning-course-training-in-hyderabad",
      "offers": {
        "@type": "offer",
        "price": "159000",
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
          "courseWorkload": "P13M",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,59,000 + 18% GST",
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
    "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Basic programming & mathematics knowledge is enough. For strengthening your programming skills we provide special programming classes. We teach required statistics from a very basic level."
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
    "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who enroll for machine learning live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of this Machine Learning course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the machine learning course in Hyderabad is 13 months. However, it might vary based on the weekend or weekday batch you choose."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of ML training at Learnbay, in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online machine learning training modes. Based on your requirement, you can choose your preferred mode."
    }
  },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization associated with the Learnbay machine learning certification course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack ML modules, via which you learn the respective industry’s best practices."
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
    "name": "What is the total Fee for this machine learning course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total program fee for the Artificial Intelligence and Machine Learning Program is INR 1,59,000/- Inclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for 1,59,000/-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,817/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
    }
  },{
    "@type": "Question",
    "name": "Is there any scholarship available for the Machine Learning certification? What is Group Discount?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "What is the refund policy for this Machine Learning training course at Learnbay in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many capstone machine learning projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In this course, you’ll be required to work on 2 fresh capstone projects. This will help you get exposure to hands-on projects by implementing your theoretical knowledge gained throughout the training."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a set of 15 Real-time projects from multiple domains such as HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, AdvancedData Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc. Based on your interest you can choose your project to work on. Click here to download the list of the projects."
    }
  },{
    "@type": "Question",
    "name": "How will the be executed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited certification after this machine learning course completion in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will be awarded 6 separate IBM accredited Certificates on successful course completion of the Artificial Intelligence and AI Course."
    }
  },{
    "@type": "Question",
    "name": "What categories of certifications might I expect to receive?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Deep Learning Fundamentals Deep Learning with TensorFlow Machine Learning with Python Accelerating Deep Learning with GPUs Advance AI & ML Certificate (final) Capstone Project Certificate by IBM"
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance program at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
    }
  },{
    "@type": "Question",
    "name": "What is a job-readiness program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Job readiness programs help you prepare for interviews which include: Resume Preparation sessions Preparing projects for a strong portfolio Interview guidance and prep sessions 1:1 Mock interviews based on targeted companies and roles"
    }
  },{
    "@type": "Question",
    "name": "Will I get job referrals at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies."
    }
  },{
    "@type": "Question",
    "name": "Until when will the Learnbay students in Hyderabad get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
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
    "name": "When is the job assistance provided and for how long I will get the service?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Placement assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNCs/startups. This assistance is provided until one gets placed in a company."
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
          cityParaCont=" Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          dataScience={true}
          interstedInHide={true}
          titleCourse="Machine Learning Course Training In Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstToparaImg="Training In Hyderabad"
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={
            MachineLearningHyderabadCourseData[0].secondSection
          }
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MachineLearningHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,59,000"
            FeeEmi="₹ 7,539/ Month"
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
            dataScience={true}
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
            brochurePdf={pdfUrl}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              hydrabad={true}
              ProgramBot1={MachineLearningHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={MachineLearningHyderabadCourseData[0].ProgramBot2}
              ProgramBot3={MachineLearningHyderabadCourseData[0].ProgramBot3}
              ProgramHead4={MachineLearningHyderabadCourseData[0].ProgramHead4}
              ProgramBot4={MachineLearningHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={MachineLearningHyderabadCourseData[0].ProgramHead5}
              ProgramBot5={MachineLearningHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={MachineLearningHyderabadCourseData[0].ProgramHead6}
              ProgramBot6={MachineLearningHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={MachineLearningHyderabadCourseData[0].ProgramHead7}
              ProgramBot8={MachineLearningHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={MachineLearningHyderabadCourseData[0].ProgramBot9}
              DomainHead1={MachineLearningHyderabadCourseData[0].DomainHead1}
              DomainBot1={MachineLearningHyderabadCourseData[0].DomainBot1}
              DomainBot2={MachineLearningHyderabadCourseData[0].DomainBot2}
              DomainBot3={MachineLearningHyderabadCourseData[0].DomainBot3}
              DomainList1={MachineLearningHyderabadCourseData[0].DomainList1}
              DomainList2={MachineLearningHyderabadCourseData[0].DomainList2}
              DomainList3={MachineLearningHyderabadCourseData[0].DomainList3}
              DomainList4={MachineLearningHyderabadCourseData[0].DomainList4}
              DomainList5={MachineLearningHyderabadCourseData[0].DomainList5}
              DomainList6={MachineLearningHyderabadCourseData[0].DomainList6}
              DomainList7={MachineLearningHyderabadCourseData[0].DomainList7}
              DomainList8={MachineLearningHyderabadCourseData[0].DomainList8}
              DomainList9={MachineLearningHyderabadCourseData[0].DomainList9}
              DomainList10={MachineLearningHyderabadCourseData[0].DomainList10}
              Domainlink1={MachineLearningHyderabadCourseData[0].Domainlink1}
              Domainlink2={MachineLearningHyderabadCourseData[0].Domainlink2}
              Domainlink3={MachineLearningHyderabadCourseData[0].Domainlink3}
              Domainlink4={MachineLearningHyderabadCourseData[0].Domainlink4}
              Domainlink5={MachineLearningHyderabadCourseData[0].Domainlink5}
              Domainlink6={MachineLearningHyderabadCourseData[0].Domainlink6}
              Domainlink7={MachineLearningHyderabadCourseData[0].Domainlink7}
              Domainlink8={MachineLearningHyderabadCourseData[0].Domainlink8}
              Domainlink9={MachineLearningHyderabadCourseData[0].Domainlink9}
              Domainlink10={MachineLearningHyderabadCourseData[0].Domainlink10}
              CertificationHead1={
                MachineLearningHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                MachineLearningHyderabadCourseData[0].CertificationBot1
              }
              src={MachineLearningHyderabadCourseData[0].src}
              src22={MachineLearningHyderabadCourseData[0].src22}
              src33={MachineLearningHyderabadCourseData[0].src33}
              alt2={MachineLearningHyderabadCourseData[0].alt2}
              alt3={MachineLearningHyderabadCourseData[0].alt3}
              alt4={MachineLearningHyderabadCourseData[0].alt4}
              alt5={MachineLearningHyderabadCourseData[0].alt5}
              ModuleHead1={MachineLearningHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={MachineLearningHyderabadCourseData[0].ModuleBot1}
              ModuleBot2={MachineLearningHyderabadCourseData[0].ModuleBot2}
              syllabush1={MachineLearningHyderabadCourseData[0].syllabush1}
              syllabusb1={MachineLearningHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={MachineLearningHyderabadCourseData[0].syllabush2}
              syllabusb2={MachineLearningHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={MachineLearningHyderabadCourseData[0].syllabush3}
              syllabusb3={MachineLearningHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={MachineLearningHyderabadCourseData[0].syllabush4}
              syllabusb4={MachineLearningHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                MachineLearningHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={MachineLearningHyderabadCourseData[0].syllabussrc}
              JobHead1={MachineLearningHyderabadCourseData[0].JobHead1}
              JobBot1={MachineLearningHyderabadCourseData[0].JobBot1}
              JobBot2={MachineLearningHyderabadCourseData[0].JobBot2}
              JobBot5={MachineLearningHyderabadCourseData[0].JobBot5}
              JobHead2={MachineLearningHyderabadCourseData[0].JobHead2}
              JobBot3={MachineLearningHyderabadCourseData[0].JobBot3}
              JobBot4={MachineLearningHyderabadCourseData[0].JobBot4}
              JobBot6={MachineLearningHyderabadCourseData[0].JobBot6}
              ProjectsBot1={MachineLearningHyderabadCourseData[0].ProgramBot1}
              ProjectsBot2={MachineLearningHyderabadCourseData[0].ProgramBot2}
              src1={MachineLearningHyderabadCourseData[0].src1}
              ProjectsH1={MachineLearningHyderabadCourseData[0].ProjectsH1}
              Projectsp1={MachineLearningHyderabadCourseData[0].Projectsp1}
              src2={MachineLearningHyderabadCourseData[0].src2}
              ProjectsH2={MachineLearningHyderabadCourseData[0].ProjectsH2}
              Projectsp2={MachineLearningHyderabadCourseData[0].Projectsp2}
              src3={MachineLearningHyderabadCourseData[0].src3}
              ProjectsH3={MachineLearningHyderabadCourseData[0].ProjectsH3}
              Projectsp3={MachineLearningHyderabadCourseData[0].Projectsp3}
              src4={MachineLearningHyderabadCourseData[0].src4}
              ProjectsH4={MachineLearningHyderabadCourseData[0].ProjectsH4}
              Projectsp4={MachineLearningHyderabadCourseData[0].Projectsp4}
              AlumniBot1={MachineLearningHyderabadCourseData[0].AlumniBot1}
              Asrc1={MachineLearningHyderabadCourseData[0].Asrc1}
              AlumniH1={MachineLearningHyderabadCourseData[0].AlumniH1}
              Alumnip1={MachineLearningHyderabadCourseData[0].Alumnip1}
              Asrc2={MachineLearningHyderabadCourseData[0].Asrc2}
              AlumniH2={MachineLearningHyderabadCourseData[0].AlumniH2}
              Alumnip2={MachineLearningHyderabadCourseData[0].Alumnip2}
              Asrc3={MachineLearningHyderabadCourseData[0].Asrc3}
              AlumniH3={MachineLearningHyderabadCourseData[0].AlumniH3}
              Alumnip3={MachineLearningHyderabadCourseData[0].Alumnip3}
              Asrc4={MachineLearningHyderabadCourseData[0].Asrc4}
              AlumniH4={MachineLearningHyderabadCourseData[0].AlumniH4}
              Alumnip4={MachineLearningHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MachineLearningHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={MachineLearningHyderabadCourseData[0].CityTextB}
          CityText={MachineLearningHyderabadCourseData[0].CityText}
          CityTextLB={MachineLearningHyderabadCourseData[0].CityTextLB}
          CityTextL={MachineLearningHyderabadCourseData[0].CityTextL}
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
