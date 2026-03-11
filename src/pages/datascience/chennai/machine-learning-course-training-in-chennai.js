import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MachineLearningChennaiCourseData } from '../../../CityData/Chennai/machineLearningCourseTrainingInChennai';
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Master_Program.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Machine Learning Course in Chennai | IBM Certified | Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Best Machine Learning course in Chennai with IBM & Microsoft certification. Master GenAI, MLOps & Agentic ML. Get 100% job assist & 15+ MNC projects. Enroll now "
        />
        <meta
          name="keywords"
          content="Machine learning course in Chennai, Machine learning training in Chennai, Machine learning institute in Chennai, best Machine learning institute in Chennai, Machine learning course in Chennai, Machine learning certification in Chennai, Machine learning training institute in Chennai, advanced Machine learning course in Chennai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Machine Learning Course in Chennai | IBM Certified | Learnbay"
        />
        <meta
          property="og:description"
          content="Best Machine Learning course in Chennai with IBM & Microsoft certification. Master GenAI, MLOps & Agentic ML. Get 100% job assist & 15+ MNC projects. Enroll now "
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
          content="https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai"
        />
        <meta
          name="twitter:title"
          content="Machine Learning Course in Chennai | IBM Certified | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Best Machine Learning course in Chennai with IBM & Microsoft certification. Master GenAI, MLOps & Agentic ML. Get 100% job assist & 15+ MNC projects. Enroll now "
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai"
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
            __html: `{  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Best Data Science Course Training in Pune - Learnbay",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "715"
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
      "name": "Machine Learning Course in Chennai | IBM Certified | Learnbay",
      "description": "Best Machine Learning course in Chennai with IBM & Microsoft certification. Master GenAI, MLOps & Agentic ML. Get 100% job assist & 15+ MNC projects. Enroll now",
      "url": "https://www.learnbay.co/datascience/chennai/machine-learning-course-training-in-chennai",
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
    "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Basic programming & mathematics knowledge is enough. However, for strengthening your programming skills we offer additional sessions to the interested candidates."
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
    "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Machine learning training course in Chennai with GenAI comes with 3 years of flexi subscriptions. So that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
  },{
    "@type": "Question",
    "name": "What’s the duration of this GenAI infused machine learning training course in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of this machine learning course in Mumbai is 13 months"
    }
  },{
    "@type": "Question",
    "name": "What is the mode of Data Science Course In Chennai at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
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
    "name": "How can I opt for a hybrid mode of learning in IBM machine learning training courses in Chennai, at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
  },{
    "@type": "Question",
    "name": "What is domain specialization in the professional machine learning certification courses provided by Learnbay in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific machine learning modules with generative AI, via which you learn the respective industry’s best practices."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options within the machine learning courses of Learnbay in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer machine learning with GenAI specializations in domain like  BFSI, Retail, manufacturing, Healthcare, SDE, Managers,  and Supply Chain."
    }
  },{
    "@type": "Question",
    "name": "Which machine learning specialization domain elective is best suited for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Why is domain specialization important in professional machine learning certification?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the machine learning courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
    }
  },{
    "@type": "Question",
    "name": "Can I select multiple domain electives and do I need to pay extra charges",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select multiple domains but there might be a certain limit based on your chosen course and existing experience."
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
    "name": "What is the total Fee for this machine learning course in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course fee for the  Gen AI and machine learning course in Chennai is 1,59,000 INR, exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Can I pay in installments for 1,59,000/-?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay in instalments using a credit card with a no-cost EMI option for up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, PAN card, and a 3-month salary slip."
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
    "name": "What is the refund policy for this Machine Learning training course at Learnbay in Chennai?",
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
      "text": "There will be a total of 60+ real-time projects in machine learning from different domains. Click here to download the list of the projects."
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
    "name": "Is there any accredited certification after this machine learning course completion in Chennai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It offers 4 Certifications: 3 IBM certifications and 1 Microsoft Certification."
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
    "name": "Until when will the Learnbay students in Chennai get the facility of mentorship?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
    }
  },{
    "@type": "Question",
    "name": "Can a Learnbay student in Chennai choose to study from their desired mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
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
          titleCourse="Machine Learning Course Training In Chennai"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf"
          brochurePdf={pdfUrl}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          firstToparaImg="Training In Chennai"
          idss="YWxTtvb3x-U"
          ibmandms={true}
        />
        <SecondSection
          SecondSectionData={MachineLearningChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MachineLearningChennaiCourseData[0].testimonial}
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
              chennai={true}
              ProgramBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProgramBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              ProgramBot3={MachineLearningChennaiCourseData[0].ProgramBot3}
              ProgramHead4={MachineLearningChennaiCourseData[0].ProgramHead4}
              ProgramBot4={MachineLearningChennaiCourseData[0].ProgramBot4}
              ProgramHead5={MachineLearningChennaiCourseData[0].ProgramHead5}
              ProgramBot5={MachineLearningChennaiCourseData[0].ProgramBot5}
              ProgramHead6={MachineLearningChennaiCourseData[0].ProgramHead6}
              ProgramBot6={MachineLearningChennaiCourseData[0].ProgramBot6}
              ProgramHead7={MachineLearningChennaiCourseData[0].ProgramHead7}
              ProgramBot8={MachineLearningChennaiCourseData[0].ProgramBot8}
              ProgramBot9={MachineLearningChennaiCourseData[0].ProgramBot9}
              DomainHead1={MachineLearningChennaiCourseData[0].DomainHead1}
              DomainBot1={MachineLearningChennaiCourseData[0].DomainBot1}
              DomainBot2={MachineLearningChennaiCourseData[0].DomainBot2}
              DomainBot3={MachineLearningChennaiCourseData[0].DomainBot3}
              DomainList1={MachineLearningChennaiCourseData[0].DomainList1}
              DomainList2={MachineLearningChennaiCourseData[0].DomainList2}
              DomainList3={MachineLearningChennaiCourseData[0].DomainList3}
              DomainList4={MachineLearningChennaiCourseData[0].DomainList4}
              DomainList5={MachineLearningChennaiCourseData[0].DomainList5}
              DomainList6={MachineLearningChennaiCourseData[0].DomainList6}
              DomainList7={MachineLearningChennaiCourseData[0].DomainList7}
              DomainList8={MachineLearningChennaiCourseData[0].DomainList8}
              DomainList9={MachineLearningChennaiCourseData[0].DomainList9}
              DomainList10={MachineLearningChennaiCourseData[0].DomainList10}
              Domainlink1={MachineLearningChennaiCourseData[0].Domainlink1}
              Domainlink2={MachineLearningChennaiCourseData[0].Domainlink2}
              Domainlink3={MachineLearningChennaiCourseData[0].Domainlink3}
              Domainlink4={MachineLearningChennaiCourseData[0].Domainlink4}
              Domainlink5={MachineLearningChennaiCourseData[0].Domainlink5}
              Domainlink6={MachineLearningChennaiCourseData[0].Domainlink6}
              Domainlink7={MachineLearningChennaiCourseData[0].Domainlink7}
              Domainlink8={MachineLearningChennaiCourseData[0].Domainlink8}
              Domainlink9={MachineLearningChennaiCourseData[0].Domainlink9}
              Domainlink10={MachineLearningChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                MachineLearningChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                MachineLearningChennaiCourseData[0].CertificationBot1
              }
              src={MachineLearningChennaiCourseData[0].src}
              src22={MachineLearningChennaiCourseData[0].src22}
              src33={MachineLearningChennaiCourseData[0].src33}
              src44={MachineLearningChennaiCourseData[0].src44}
              ModuleHead1={MachineLearningChennaiCourseData[0].ModuleHead1}
              ModuleBot1={MachineLearningChennaiCourseData[0].ModuleBot1}
              ModuleBot2={MachineLearningChennaiCourseData[0].ModuleBot2}
              syllabush1={MachineLearningChennaiCourseData[0].syllabush1}
              syllabusb1={MachineLearningChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                MachineLearningChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                MachineLearningChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                MachineLearningChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                MachineLearningChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                MachineLearningChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                MachineLearningChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={MachineLearningChennaiCourseData[0].syllabush2}
              syllabusb2={MachineLearningChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                MachineLearningChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                MachineLearningChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                MachineLearningChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                MachineLearningChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                MachineLearningChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                MachineLearningChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={MachineLearningChennaiCourseData[0].syllabush3}
              syllabusb3={MachineLearningChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                MachineLearningChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                MachineLearningChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                MachineLearningChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                MachineLearningChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                MachineLearningChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                MachineLearningChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={MachineLearningChennaiCourseData[0].syllabush4}
              syllabusb4={MachineLearningChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                MachineLearningChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                MachineLearningChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                MachineLearningChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                MachineLearningChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                MachineLearningChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                MachineLearningChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={MachineLearningChennaiCourseData[0].syllabussrc}
              JobHead1={MachineLearningChennaiCourseData[0].JobHead1}
              JobBot1={MachineLearningChennaiCourseData[0].JobBot1}
              JobBot2={MachineLearningChennaiCourseData[0].JobBot2}
              JobBot5={MachineLearningChennaiCourseData[0].JobBot5}
              JobHead2={MachineLearningChennaiCourseData[0].JobHead2}
              JobBot3={MachineLearningChennaiCourseData[0].JobBot3}
              JobBot4={MachineLearningChennaiCourseData[0].JobBot4}
              JobBot6={MachineLearningChennaiCourseData[0].JobBot6}
              ProjectsBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProjectsBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              src1={MachineLearningChennaiCourseData[0].src1}
              alt2={MachineLearningChennaiCourseData[0].alt2}
              alt3={MachineLearningChennaiCourseData[0].alt3}
              alt4={MachineLearningChennaiCourseData[0].alt4}
              alt5={MachineLearningChennaiCourseData[0].alt5}
              ProjectsH1={MachineLearningChennaiCourseData[0].ProjectsH1}
              Projectsp1={MachineLearningChennaiCourseData[0].Projectsp1}
              src2={MachineLearningChennaiCourseData[0].src2}
              ProjectsH2={MachineLearningChennaiCourseData[0].ProjectsH2}
              Projectsp2={MachineLearningChennaiCourseData[0].Projectsp2}
              src3={MachineLearningChennaiCourseData[0].src3}
              ProjectsH3={MachineLearningChennaiCourseData[0].ProjectsH3}
              Projectsp3={MachineLearningChennaiCourseData[0].Projectsp3}
              src4={MachineLearningChennaiCourseData[0].src4}
              ProjectsH4={MachineLearningChennaiCourseData[0].ProjectsH4}
              Projectsp4={MachineLearningChennaiCourseData[0].Projectsp4}
              AlumniBot1={MachineLearningChennaiCourseData[0].AlumniBot1}
              Asrc1={MachineLearningChennaiCourseData[0].Asrc1}
              AlumniH1={MachineLearningChennaiCourseData[0].AlumniH1}
              Alumnip1={MachineLearningChennaiCourseData[0].Alumnip1}
              Asrc2={MachineLearningChennaiCourseData[0].Asrc2}
              AlumniH2={MachineLearningChennaiCourseData[0].AlumniH2}
              Alumnip2={MachineLearningChennaiCourseData[0].Alumnip2}
              Asrc3={MachineLearningChennaiCourseData[0].Asrc3}
              AlumniH3={MachineLearningChennaiCourseData[0].AlumniH3}
              Alumnip3={MachineLearningChennaiCourseData[0].Alumnip3}
              Asrc4={MachineLearningChennaiCourseData[0].Asrc4}
              AlumniH4={MachineLearningChennaiCourseData[0].AlumniH4}
              Alumnip4={MachineLearningChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MachineLearningChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            marginBottom: '20px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.27590561072!2d80.2479449!3d13.0630852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267157fcdb4bb%3A0x41b85b57fd1d6f0e!2sLearnbay%20-%20Chennai!5e0!3m2!1sen!2sin!4v1755767222127!5m2!1sen!2sin"
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
