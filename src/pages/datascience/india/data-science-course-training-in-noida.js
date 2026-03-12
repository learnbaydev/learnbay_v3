import { DSBangaloreSchema } from '@/Data/Schema/DSBangalore';
import Realstory from '@/components/Home/Realstory/Realstory';
import Map from '@/components/Seo/Maps/Maps';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSNoidaCourseData } from '../../../CityData/India/DSNoidaData';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Navbar from '../../../components/Global/Navbar/Navbar';
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
  const items = [
    'Data Science Foundation',
    'Python for Data Science',
    'Statistics for Data Science',
    'Maths for Data Science',
    'Machine Learning',
    'Data Preparation with Pandas',
    'Data Visualisation with Python',
    'Tableau Foundations for Data analysis',
    'Big Data Foundation',
    'Model deployment (Flask-API)',
    'R Language Essentials',
    'Deep Learning',
    'SQL for Data Science',
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Science Course Training in Noida with GenAI</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Our data science course in Noida offers hands-on experience with IBM GenAI certificate100% placement assist. We have Bring Your Own Project feature. Enrol!"
        />
        <meta
          name="keywords"
          content="data science course in noida, data scientist course in noida,
          data science training in noida, data science institute in noida, data science training noida, data science course in noida with placement, data science certification in noida, data science offline course in noida, data science coaching in noida, best data science institute in noida            "
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/india/data-science-course-training-in-noida"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/india/data-science-course-training-in-noida"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science Course Training in Noida with GenAI"
        />
        <meta
          property="og:description"
          content="Our data science course in Noida offers hands-on experience with IBM GenAI certificate100% placement assist. We have Bring Your Own Project feature. Enrol!"
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
          content="https://www.learnbay.co/datascience/india/data-science-course-training-in-noida"
        />
        <meta
          name="twitter:title"
          content="Best Data Science Course Training in Noida with GenAI"
        />
        <meta
          name="twitter:description"
          content="Our data science course in Noida offers hands-on experience with IBM GenAI certificate100% placement assist. We have Bring Your Own Project feature. Enrol!"
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
  "name": "Best Data Science Course Training in Noida with GenAI",
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
    "ratingCount": "3208"
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
  "name": "Best Data Science Course Training in Noida with GenAI",
  "description": "Our data science course in Noida offers hands-on experience with IBM GenAI certificate100% placement assist. We have Bring Your Own Project feature. Enrol!",
  "url": "https://www.learnbay.co/datascience/india/data-science-course-training-in-noida",
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
    "name": "How long does the data science course in Noida typically take to complete?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of the data science and Gen AI course is 9-13 months."
    }
  },{
    "@type": "Question",
    "name": "What topics are covered in the curriculum of the data science course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Programming languages
Python programming basics
Statistics and Machine Learning
Industry projects and capstone projects
Generative AI concepts"
    }
  },{
    "@type": "Question",
    "name": "Can I attend classes online, or is it only available in a physical classroom?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online instructor-led training sessions at Learnbay. You upskill with the best institute for data science in Noida with an industry-led course curriculum. You can opt for online or offline sessions according to your working schedules and flexibility."
    }
  },{
    "@type": "Question",
    "name": "Do you offer flexibility in scheduling for working professionals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer a flexible learning platform for working professionals in any domain to maintain a work-learn balance. Learners get a hybrid learning facility here and can choose their batch timings (weekday or weekend) at their convenience to upskill with data science programs in Noida."
    }
  },{
    "@type": "Question",
    "name": "How do I decide which domain elective best fits my career goals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If you are confused about which domain elective to choose for the best career transition, reach out to Learnbay’s career consultants at +91 7795687988. A career counselor will have a 1:1 discussion with you before enrolling and guide you through current industry trends."
    }
  },{
    "@type": "Question",
    "name": "Are the domain electives updated to reflect industry trends?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, domain electives and associated projects are updated according to industry trends. Domain electives are inspired by the sectors that are trending with attractive job offers for data scientists and have been thriving in recent years."
    }
  },{
    "@type": "Question",
    "name": "What are the domain electives offered in the data science course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay’s data science course offers 6 domain electives, and you can choose anyone from them to continue upskilling. Electives are –
BFSI
Healthcare
Manufacturing
Supply chain, E-commerce, & Retail
Marketing
HR"
    }
  },{
    "@type": "Question",
    "name": "What is the cost of the data science course, and are there any installment options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "xThe total course fees depend on which particular course you choose from the data science and agentic AI categories. Usually, the course price varies from 1,20,000 to 1,59,000 INR, exclusive of GST."
    }
  },{
    "@type": "Question",
    "name": "Do you offer any scholarships, discounts, or financial assistance programs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers flexible financing options for paying data science course fees in Noida. You can opt for no-cost EMI, installments, or interest-free loans to pay the fee within 12 months. We also occasionally offer a 15%—20% discount for early birds. Yet, a group discount is available for learners who join with one or more friends."
    }
  },{
    "@type": "Question",
    "name": "Is there a refund policy if I need to withdraw from the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners opting for the data science course at Learnbay are advised to go through its Refund/Cancellation Policy before Refund/Cancellation Policy enrolling. The policy mentions that learners can withdraw their data science fees in Noida."
    }
  },{
    "@type": "Question",
    "name": "What is a capstone project, and how does it work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A capstone project is a way of evaluating the practical learning and expertise of professionals with real-world cases. A capstone project is developed on a specific topic, subject, or field to assess a learner’s ability to tackle the issues in real time. These projects are generally group projects where learners work on specific tasks under a mentor’s supervision."
    }
  },{
    "@type": "Question",
    "name": "Are real-time projects included in the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, this course consists of 10 – 12+ real-time projects to refine the existing skill sets of learners. Based on the expertise and domain elective, a learner is assigned real-time projects to practice with learned data science tools and trends."
    }
  },{
    "@type": "Question",
    "name": "Can I choose my capstone project?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can. After enrolling, learners can choose their desired domain electives and continue upskilling. They can also choose their own capstone project as per their domain electives. Then, they are assigned their project group and mentor to guide them through the learning process."
    }
  },{
    "@type": "Question",
    "name": "Is the certification internationally recognized?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will receive 3 to 4 certifications: the Course Completion Certification from IBM Certification and the Capstone Project Certification. For a few advanced and Master Programs, there will also be additional IBM certifications."
    }
  },{
    "@type": "Question",
    "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "How long will I get support for job assistance at Learnbay in India?",
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
    "name": "Can a Learnbay student in India choose to study from their desired mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
    }
  },{
    "@type": "Question",
    "name": "How can I get technical support during the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay is available 24/7 to provide uninterrupted technical assistance. You can call the helpline number to reach the desired service providers to help you with any technical issues (login, sessions, projects, chat, or course materials) with the course training platform or Learnbay application."
    }
  },{
    "@type": "Question",
    "name": "Is there a discussion forum or community for students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners will get access to a customized ‘Learnbay App’ where batch-wise students are added along with their mentors. They can directly reach out to their mentors to resolve queries (related to coursework, projects, & placement) in case of need and discuss doubts with peers."
    }
  },{
    "@type": "Question",
    "name": "What if I miss a class or must catch up on a topic?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers live-instructor-led training sessions that are also recorded for future use. If you miss a class, you can access pre-recorded sessions to go through what you have learned. If you wish to catch up on a topic or clarify doubts, our mentors are available 24/7 on call/chat. Apart from this, you can request batch/timing changes if you find it difficult to manage your class timings and miss them."
    }
  },{
    "@type": "Question",
    "name": "How can I contact your support team for non-technical issues?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay is available 24/7 to support its learners. For non-technical issues, you can contact our team or learning consultant directly at +91 7795687988 and get your queries resolved shortly."
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
          firstHeading="Best Online Data Science Course in Noida          "
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont="Leap forward to craft a global-level data science career with incredible job offers with leading MNCs. Join Learnbay’s top-tier data science course in Noida to equip your career with Generative AI-driven skills validated by IBM certifications. Enroll now to gain project-based learning with ultimate career gains.           "
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSNoidaCourseData[0].secondSection} />
        <div className={styles.Realstorysec}>
          <Realstory />
        </div>
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹1,20,000"
            FeeEmi="₹8,850/month"
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
              DSNoida={true}
              DomainHead1={DSNoidaCourseData[0].DomainHead1}
              DomainBot1={DSNoidaCourseData[0].DomainBot1}
              DomainBot2={DSNoidaCourseData[0].DomainBot2}
              DomainBot3={DSNoidaCourseData[0].DomainBot3}
              DomainList1={DSNoidaCourseData[0].DomainList1}
              DomainList2={DSNoidaCourseData[0].DomainList2}
              DomainList3={DSNoidaCourseData[0].DomainList3}
              DomainList4={DSNoidaCourseData[0].DomainList4}
              DomainList5={DSNoidaCourseData[0].DomainList5}
              DomainList6={DSNoidaCourseData[0].DomainList6}
              DomainList7={DSNoidaCourseData[0].DomainList7}
              DomainList8={DSNoidaCourseData[0].DomainList8}
              DomainList9={DSNoidaCourseData[0].DomainList9}
              DomainList10={DSNoidaCourseData[0].DomainList10}
              Domainlink1={DSNoidaCourseData[0].Domainlink1}
              Domainlink2={DSNoidaCourseData[0].Domainlink2}
              Domainlink3={DSNoidaCourseData[0].Domainlink3}
              Domainlink4={DSNoidaCourseData[0].Domainlink4}
              Domainlink5={DSNoidaCourseData[0].Domainlink5}
              Domainlink6={DSNoidaCourseData[0].Domainlink6}
              Domainlink7={DSNoidaCourseData[0].Domainlink7}
              Domainlink8={DSNoidaCourseData[0].Domainlink8}
              Domainlink9={DSNoidaCourseData[0].Domainlink9}
              Domainlink10={DSNoidaCourseData[0].Domainlink10}
              DomainBot40={DSNoidaCourseData[0].DomainBot40}
              CertificationHead1={DSNoidaCourseData[0].CertificationHead1}
              CertificationBot1={DSNoidaCourseData[0].CertificationBot1}
              CertificationBot2={DSNoidaCourseData[0].CertificationBot2}
              CertificationBot3={DSNoidaCourseData[0].CertificationBot3}
              CertificationBot4={DSNoidaCourseData[0].CertificationBot4}
              CertificationBot5={DSNoidaCourseData[0].CertificationBot5}
              src={DSNoidaCourseData[0].src}
              src22={DSNoidaCourseData[0].src22}
              src33={DSNoidaCourseData[0].src33}
              MasterModulelist={true}
              ModuleMasterBot1={DSNoidaCourseData[0].ModuleMasterBot1}
              ModuleHead1={DSNoidaCourseData[0].ModuleHead1}
              ModuleBot1={DSNoidaCourseData[0].ModuleBot1}
              ModuleBot2={DSNoidaCourseData[0].ModuleBot2}
              ModuleMasterlist1={DSNoidaCourseData[0].ModuleMasterlist1}
              ModuleMasterlist2={DSNoidaCourseData[0].ModuleMasterlist2}
              ModuleMasterlist3={DSNoidaCourseData[0].ModuleMasterlist3}
              ModuleMasterlist4={DSNoidaCourseData[0].ModuleMasterlist4}
              ModuleMasterlist5={DSNoidaCourseData[0].ModuleMasterlist5}
              ModuleMasterlist6={DSNoidaCourseData[0].ModuleMasterlist6}
              ModuleMasterlist7={DSNoidaCourseData[0].ModuleMasterlist7}
              ModuleMasterlist8={DSNoidaCourseData[0].ModuleMasterlist8}
              ModuleMasterlist9={DSNoidaCourseData[0].ModuleMasterlist9}
              ModuleMasterlist10={DSNoidaCourseData[0].ModuleMasterlist10}
              ModuleMasterBot3={DSNoidaCourseData[0].ModuleMasterBot3}
              ModuleMasterBot2={DSNoidaCourseData[0].ModuleMasterBot2}
              ModuleBot46={DSNoidaCourseData[0].ModuleBot46}
              ModuleBot47={DSNoidaCourseData[0].ModuleBot47}
              syllabush1={DSNoidaCourseData[0].syllabush1}
              syllabusb1={DSNoidaCourseData[0].syllabusb1}
              SyllabusBotlist11={DSNoidaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSNoidaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSNoidaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSNoidaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSNoidaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSNoidaCourseData[0].SyllabusBotlist16}
              syllabush2={DSNoidaCourseData[0].syllabush2}
              syllabusb2={DSNoidaCourseData[0].syllabusb2}
              SyllabusBotlist21={DSNoidaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSNoidaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSNoidaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSNoidaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSNoidaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSNoidaCourseData[0].SyllabusBotlist26}
              syllabush3={DSNoidaCourseData[0].syllabush3}
              syllabusb3={DSNoidaCourseData[0].syllabusb3}
              SyllabusBotlist31={DSNoidaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSNoidaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSNoidaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSNoidaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSNoidaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSNoidaCourseData[0].SyllabusBotlist36}
              syllabush4={DSNoidaCourseData[0].syllabush4}
              syllabusb4={DSNoidaCourseData[0].syllabusb4}
              SyllabusBotlist41={DSNoidaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSNoidaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSNoidaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSNoidaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSNoidaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSNoidaCourseData[0].SyllabusBotlist46}
              syllabussrc={DSNoidaCourseData[0].syllabussrc}
              joblist={true}
              JobHead1={DSNoidaCourseData[0].JobHead1}
              MasterJobBot1={DSNoidaCourseData[0].MasterJobBot1}
              Joblist1={DSNoidaCourseData[0].Joblist1}
              Joblist2={DSNoidaCourseData[0].Joblist2}
              Joblist3={DSNoidaCourseData[0].Joblist3}
              Joblist4={DSNoidaCourseData[0].Joblist4}
              Joblist5={DSNoidaCourseData[0].Joblist5}
              Joblist6={DSNoidaCourseData[0].Joblist6}
              Joblist7={DSNoidaCourseData[0].Joblist7}
              Joblist8={DSNoidaCourseData[0].Joblist8}
              Joblist9={DSNoidaCourseData[0].Joblist9}
              Joblist10={DSNoidaCourseData[0].Joblist10}
              Joblist11={DSNoidaCourseData[0].Joblist11}
              Joblist12={DSNoidaCourseData[0].Joblist12}
              Joblist13={DSNoidaCourseData[0].Joblist13}
              JobBot001={DSNoidaCourseData[0].JobBot001}
              JobBot002={DSNoidaCourseData[0].JobBot002}
              JobBot1={DSNoidaCourseData[0].JobBot1}
              JobHead001={DSNoidaCourseData[0].JobHead001}
              JobHead2={DSNoidaCourseData[0].JobHead2}
              JobBot3={DSNoidaCourseData[0].JobBot3}
              JobHead3={DSNoidaCourseData[0].JobHead3}
              JobBot7={DSNoidaCourseData[0].JobBot7}
              JobHead4={DSNoidaCourseData[0].JobHead4}
              JobBot8={DSNoidaCourseData[0].JobBot8}
              JobHead19={DSNoidaCourseData[0].JobHead19}
              JobBot9={DSNoidaCourseData[0].JobBot9}
              JobHead6={DSNoidaCourseData[0].JobHead6}
              JobBot11={DSNoidaCourseData[0].JobBot11}
              JobBot20={DSNoidaCourseData[0].JobBot20}
              JobBot003={DSNoidaCourseData[0].JobBot003}
              JobBot34={DSNoidaCourseData[0].JobBot34}
              JobBot24={DSNoidaCourseData[0].JobBot24}
              JobBotMasterBot5={DSNoidaCourseData[0].JobBotMasterBot5}
              JobBot007={DSNoidaCourseData[0].JobBot007}
              JobBot005={DSNoidaCourseData[0].JobBot005}
              JobHead22={DSNoidaCourseData[0].JobHead22}
              Joblist23={DSNoidaCourseData[0].Joblist23}
              Joblist24={DSNoidaCourseData[0].Joblist24}
              Joblist25={DSNoidaCourseData[0].Joblist25}
              Joblist26={DSNoidaCourseData[0].Joblist26}
              Joblist27={DSNoidaCourseData[0].Joblist27}
              Joblist28={DSNoidaCourseData[0].Joblist28}
              Joblist29={DSNoidaCourseData[0].Joblist29}
              Joblist30={DSNoidaCourseData[0].Joblist30}
              JobBot25={DSNoidaCourseData[0].JobBot25}
              showData={true}
              JobBot39={DSNoidaCourseData[0].JobBot39}
              Joblist14={DSNoidaCourseData[0].Joblist14}
              Joblist15={DSNoidaCourseData[0].Joblist15}
              Joblist16={DSNoidaCourseData[0].Joblist16}
              Joblist17={DSNoidaCourseData[0].Joblist17}
              JobBot21={DSNoidaCourseData[0].JobBot21}
              JobBot22={DSNoidaCourseData[0].JobBot22}
              ProjectsHead1={DSNoidaCourseData[0].ProjectsHead1}
              ProjectsBot1={DSNoidaCourseData[0].ProjectsBot1}
              ProjectsBot3={DSNoidaCourseData[0].ProjectsBot3}
              ProjectsBot4={DSNoidaCourseData[0].ProjectsBot4}
              ProjectsBot5={DSNoidaCourseData[0].ProjectsBot5}
              src1={DSNoidaCourseData[0].src1}
              ProjectsH1={DSNoidaCourseData[0].ProjectsH1}
              Projectsp1={DSNoidaCourseData[0].Projectsp1}
              src2={DSNoidaCourseData[0].src2}
              ProjectsH2={DSNoidaCourseData[0].ProjectsH2}
              Projectsp2={DSNoidaCourseData[0].Projectsp2}
              src3={DSNoidaCourseData[0].src3}
              ProjectsH3={DSNoidaCourseData[0].ProjectsH3}
              Projectsp3={DSNoidaCourseData[0].Projectsp3}
              src4={DSNoidaCourseData[0].src4}
              ProjectsH4={DSNoidaCourseData[0].ProjectsH4}
              Projectsp4={DSNoidaCourseData[0].Projectsp4}
              AlumniBot1={DSNoidaCourseData[0].AlumniBot1}
              Asrc1={DSNoidaCourseData[0].Asrc1}
              AlumniH1={DSNoidaCourseData[0].AlumniH1}
              Alumnip1={DSNoidaCourseData[0].Alumnip1}
              Asrc2={DSNoidaCourseData[0].Asrc2}
              AlumniH2={DSNoidaCourseData[0].AlumniH2}
              Alumnip2={DSNoidaCourseData[0].Alumnip2}
              Asrc3={DSNoidaCourseData[0].Asrc3}
              AlumniH3={DSNoidaCourseData[0].AlumniH3}
              Alumnip3={DSNoidaCourseData[0].Alumnip3}
              Asrc4={DSNoidaCourseData[0].Asrc4}
              AlumniH4={DSNoidaCourseData[0].AlumniH4}
              Alumnip4={DSNoidaCourseData[0].Alumnip4}
              alt1={DSNoidaCourseData[0].alt1}
              alt2={DSNoidaCourseData[0].alt2}
              alt3={DSNoidaCourseData[0].alt3}
              alt4={DSNoidaCourseData[0].alt4}
              alt5={DSNoidaCourseData[0].alt5}
              alt6={DSNoidaCourseData[0].alt6}
              alt7={DSNoidaCourseData[0].alt7}
              alt8={DSNoidaCourseData[0].alt8}
              alt9={DSNoidaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSNoidaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map />
        <CityText CityText={true} />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
