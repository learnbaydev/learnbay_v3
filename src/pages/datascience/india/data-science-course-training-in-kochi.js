import { DSBangaloreSchema } from '@/Data/Schema/DSBangalore';
import Realstory from '@/components/Home/Realstory/Realstory';
import Map from '@/components/Seo/Maps/Maps';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DSKochiCourseData } from '../../../CityData/Kochi/DSKochiData';
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
        <title>
          Best Data Science Training Course in Kochi | GenAI | Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in Kochi's best Data Science course with GenAI, Learnbay. Get certified by IBM & gain hands-on experience,  bring your own project feature. Join now!"
        />
        <meta
          name="keywords"
          content=" data science course in kochi, data science institute in kochi, data science training in kochi, data science course kochi, data science in kochi, big data course in kochi, big data training in kochi          "
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/india/data-science-course-training-in-kochi"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/india/data-science-course-training-in-kochi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Data Science Training Course in Kochi | GenAI | Learnbay"
        />
        <meta
          property="og:description"
          content="Enroll in Kochi's best Data Science course with GenAI, Learnbay. Get certified by IBM & gain hands-on experience,  bring your own project feature. Join now!"
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
          content="https://www.learnbay.co/datascience/india/data-science-course-training-in-kochi"
        />
        <meta
          name="twitter:title"
          content="Best Data Science Training Course in Kochi | GenAI | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Enroll in Kochi's best Data Science course with GenAI, Learnbay. Get certified by IBM & gain hands-on experience,  bring your own project feature. Join now!"
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
  "name": "Best Data Science Training Course in Kochi | GenAI | Learnbay",
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
    "ratingCount": "1140"
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
  "name": "Best Data Science Training Course in Kochi | GenAI | Learnbay",
  "description": "Enroll in Kochi's best Data Science course with GenAI, Learnbay. Get certified by IBM & gain hands-on experience,  bring your own project feature. Join now!",
  "url": "https://www.learnbay.co/datascience/india/data-science-course-training-in-kochi",
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
    "name": "How long does the data science course in Kochi typically take to complete?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learbay offers flexible data science training in Kochi that typically takes about 9 months to complete. For master's program, it is around 13 months."
    }
  },{
    "@type": "Question",
    "name": "What topics are covered in the curriculum of the data science course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Programming languages\\nPython programming basics\\nStatistics and Machine Learning\\nIndustry projects and capstone projects\\nGenerative AI concepts"
    }
  },{
    "@type": "Question",
    "name": "Can I attend classes online, or is it only available in a physical classroom?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide both classroom and online instructor-led training sessions at Learnbay. You upskill with the best institute for data science in Kochi with an industry-led course curriculum. You can opt for online or offline sessions according to your working schedules and flexibility."
    }
  },{
    "@type": "Question",
    "name": "Do you offer flexibility in scheduling for working professionals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer a flexible learning platform for working professionals in any domain to maintain a work-learn balance. Learners get a hybrid learning facility here and can choose their batch timings (weekday or weekend) at their convenience to upskill with data science programs in Kochi."
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
      "text": "Learnbay’s data science course offers 6 domain electives, and you can choose anyone from them to continue upskilling. Electives are –\\nBFSI\\nHealthcare\\nManufacturing\\nSupply chain, E-commerce, & Retail\\nMarketing\\nHR"
    }
  },{
    "@type": "Question",
    "name": "What is the cost of the data science course, and are there any installment options?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The data science course in Kochi fees sum to ₹1,20,000 + 18% GST. You will have an installment facility, where you have to pay monthly EMI. One can make payments through credit card, UPI, or internet banking."
    }
  },{
    "@type": "Question",
    "name": "Do you offer any scholarships, discounts, or financial assistance programs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers flexible financing options for paying data science course fees in Kochi. You can opt for no-cost EMI, installments, or interest-free loans to pay the fee within 12 months. We also occasionally offer a 15%—20% discount for early birds. Yet, a group discount is available for learners who join with one or more friends.\\nGroup of 2: 5% extra discount\\nGroup of 3: 8% additional discount\\n\\nGroup of 4+: Max 10% discount"
    }
  },{
    "@type": "Question",
    "name": "Is there a refund policy if I need to withdraw from the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners opting for the data science course at Learnbay are advised to go through its Refund/Cancellation Policy before Refund/Cancellation Policy enrolling. The policy mentions that learners can withdraw their data science fees in Kochi."
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
      "text": "Learnbay offers an internationally recognized data science certification in Kochi. Once learners complete the course and tasks, they get dual certification: a project experience certificate and course completion certificates from IBM ."
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
          firstHeading="Best Online Data Science Course in Kochi          "
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont=" Accelerate your career success metrics via upskilling with Learnbay’s all-inclusive data science course in Kochi. Enrol in our training programs to learn and practice Generative AI-rich tools, followed by 12+ real-time projects. Plus, propel global-scale success via IBM  certifications with proven gains.           "
          ibmOnly={true}
        />
        <SecondSection SecondSectionData={DSKochiCourseData[0].secondSection} />
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
              DSKochi={true}
              DomainHead1={DSKochiCourseData[0].DomainHead1}
              DomainBot1={DSKochiCourseData[0].DomainBot1}
              DomainBot2={DSKochiCourseData[0].DomainBot2}
              DomainBot3={DSKochiCourseData[0].DomainBot3}
              DomainList1={DSKochiCourseData[0].DomainList1}
              DomainList2={DSKochiCourseData[0].DomainList2}
              DomainList3={DSKochiCourseData[0].DomainList3}
              DomainList4={DSKochiCourseData[0].DomainList4}
              DomainList5={DSKochiCourseData[0].DomainList5}
              DomainList6={DSKochiCourseData[0].DomainList6}
              DomainList7={DSKochiCourseData[0].DomainList7}
              DomainList8={DSKochiCourseData[0].DomainList8}
              DomainList9={DSKochiCourseData[0].DomainList9}
              DomainList10={DSKochiCourseData[0].DomainList10}
              Domainlink1={DSKochiCourseData[0].Domainlink1}
              Domainlink2={DSKochiCourseData[0].Domainlink2}
              Domainlink3={DSKochiCourseData[0].Domainlink3}
              Domainlink4={DSKochiCourseData[0].Domainlink4}
              Domainlink5={DSKochiCourseData[0].Domainlink5}
              Domainlink6={DSKochiCourseData[0].Domainlink6}
              Domainlink7={DSKochiCourseData[0].Domainlink7}
              Domainlink8={DSKochiCourseData[0].Domainlink8}
              Domainlink9={DSKochiCourseData[0].Domainlink9}
              Domainlink10={DSKochiCourseData[0].Domainlink10}
              DomainBot40={DSKochiCourseData[0].DomainBot40}
              CertificationHead1={DSKochiCourseData[0].CertificationHead1}
              CertificationBot1={DSKochiCourseData[0].CertificationBot1}
              CertificationBot2={DSKochiCourseData[0].CertificationBot2}
              CertificationBot3={DSKochiCourseData[0].CertificationBot3}
              CertificationBot4={DSKochiCourseData[0].CertificationBot4}
              CertificationBot5={DSKochiCourseData[0].CertificationBot5}
              src={DSKochiCourseData[0].src}
              src22={DSKochiCourseData[0].src22}
              src33={DSKochiCourseData[0].src33}
              MasterModulelist={true}
              ModuleMasterBot1={DSKochiCourseData[0].ModuleMasterBot1}
              ModuleHead1={DSKochiCourseData[0].ModuleHead1}
              ModuleBot1={DSKochiCourseData[0].ModuleBot1}
              ModuleBot2={DSKochiCourseData[0].ModuleBot2}
              ModuleMasterlist1={DSKochiCourseData[0].ModuleMasterlist1}
              ModuleMasterlist2={DSKochiCourseData[0].ModuleMasterlist2}
              ModuleMasterlist3={DSKochiCourseData[0].ModuleMasterlist3}
              ModuleMasterlist4={DSKochiCourseData[0].ModuleMasterlist4}
              ModuleMasterlist5={DSKochiCourseData[0].ModuleMasterlist5}
              ModuleMasterlist6={DSKochiCourseData[0].ModuleMasterlist6}
              ModuleMasterlist7={DSKochiCourseData[0].ModuleMasterlist7}
              ModuleMasterlist8={DSKochiCourseData[0].ModuleMasterlist8}
              ModuleMasterlist9={DSKochiCourseData[0].ModuleMasterlist9}
              ModuleMasterlist10={DSKochiCourseData[0].ModuleMasterlist10}
              ModuleMasterBot3={DSKochiCourseData[0].ModuleMasterBot3}
              ModuleMasterBot2={DSKochiCourseData[0].ModuleMasterBot2}
              ModuleBot46={DSKochiCourseData[0].ModuleBot46}
              ModuleBot47={DSKochiCourseData[0].ModuleBot47}
              syllabush1={DSKochiCourseData[0].syllabush1}
              syllabusb1={DSKochiCourseData[0].syllabusb1}
              SyllabusBotlist11={DSKochiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSKochiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSKochiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSKochiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSKochiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSKochiCourseData[0].SyllabusBotlist16}
              syllabush2={DSKochiCourseData[0].syllabush2}
              syllabusb2={DSKochiCourseData[0].syllabusb2}
              SyllabusBotlist21={DSKochiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSKochiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSKochiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSKochiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSKochiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSKochiCourseData[0].SyllabusBotlist26}
              syllabush3={DSKochiCourseData[0].syllabush3}
              syllabusb3={DSKochiCourseData[0].syllabusb3}
              SyllabusBotlist31={DSKochiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSKochiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSKochiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSKochiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSKochiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSKochiCourseData[0].SyllabusBotlist36}
              syllabush4={DSKochiCourseData[0].syllabush4}
              syllabusb4={DSKochiCourseData[0].syllabusb4}
              SyllabusBotlist41={DSKochiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSKochiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSKochiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSKochiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSKochiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSKochiCourseData[0].SyllabusBotlist46}
              syllabussrc={DSKochiCourseData[0].syllabussrc}
              joblist={true}
              JobHead1={DSKochiCourseData[0].JobHead1}
              MasterJobBot1={DSKochiCourseData[0].MasterJobBot1}
              Joblist1={DSKochiCourseData[0].Joblist1}
              Joblist2={DSKochiCourseData[0].Joblist2}
              Joblist3={DSKochiCourseData[0].Joblist3}
              Joblist4={DSKochiCourseData[0].Joblist4}
              Joblist5={DSKochiCourseData[0].Joblist5}
              Joblist6={DSKochiCourseData[0].Joblist6}
              Joblist7={DSKochiCourseData[0].Joblist7}
              Joblist8={DSKochiCourseData[0].Joblist8}
              Joblist9={DSKochiCourseData[0].Joblist9}
              Joblist10={DSKochiCourseData[0].Joblist10}
              Joblist11={DSKochiCourseData[0].Joblist11}
              Joblist12={DSKochiCourseData[0].Joblist12}
              Joblist13={DSKochiCourseData[0].Joblist13}
              JobBot001={DSKochiCourseData[0].JobBot001}
              JobBot002={DSKochiCourseData[0].JobBot002}
              JobBot1={DSKochiCourseData[0].JobBot1}
              JobHeadnagpur01={DSKochiCourseData[0].JobHeadnagpur01}
              JobHead001={DSKochiCourseData[0].JobHead001}
              JobHead2={DSKochiCourseData[0].JobHead2}
              JobBot3={DSKochiCourseData[0].JobBot3}
              JobHead3={DSKochiCourseData[0].JobHead3}
              JobBot7={DSKochiCourseData[0].JobBot7}
              JobHead4={DSKochiCourseData[0].JobHead4}
              JobBot8={DSKochiCourseData[0].JobBot8}
              JobHead19={DSKochiCourseData[0].JobHead19}
              JobBot9={DSKochiCourseData[0].JobBot9}
              JobHead6={DSKochiCourseData[0].JobHead6}
              JobBot11={DSKochiCourseData[0].JobBot11}
              JobBot20={DSKochiCourseData[0].JobBot20}
              JobBot003={DSKochiCourseData[0].JobBot003}
              JobBot34={DSKochiCourseData[0].JobBot34}
              JobBot24={DSKochiCourseData[0].JobBot24}
              JobBotMasterBot5={DSKochiCourseData[0].JobBotMasterBot5}
              JobBot007={DSKochiCourseData[0].JobBot007}
              JobBot005={DSKochiCourseData[0].JobBot005}
              JobHead22={DSKochiCourseData[0].JobHead22}
              Joblist23={DSKochiCourseData[0].Joblist23}
              Joblist24={DSKochiCourseData[0].Joblist24}
              Joblist25={DSKochiCourseData[0].Joblist25}
              Joblist26={DSKochiCourseData[0].Joblist26}
              Joblist27={DSKochiCourseData[0].Joblist27}
              Joblist28={DSKochiCourseData[0].Joblist28}
              Joblist29={DSKochiCourseData[0].Joblist29}
              Joblist30={DSKochiCourseData[0].Joblist30}
              JobBot25={DSKochiCourseData[0].JobBot25}
              showData={true}
              JobBot39={DSKochiCourseData[0].JobBot39}
              Joblist14={DSKochiCourseData[0].Joblist14}
              Joblist15={DSKochiCourseData[0].Joblist15}
              Joblist16={DSKochiCourseData[0].Joblist16}
              Joblist17={DSKochiCourseData[0].Joblist17}
              JobBot21={DSKochiCourseData[0].JobBot21}
              JobBot22={DSKochiCourseData[0].JobBot22}
              ProjectsHead1={DSKochiCourseData[0].ProjectsHead1}
              ProjectsBot1={DSKochiCourseData[0].ProjectsBot1}
              ProjectsBot3={DSKochiCourseData[0].ProjectsBot3}
              ProjectsBot4={DSKochiCourseData[0].ProjectsBot4}
              ProjectsBot5={DSKochiCourseData[0].ProjectsBot5}
              src1={DSKochiCourseData[0].src1}
              ProjectsH1={DSKochiCourseData[0].ProjectsH1}
              Projectsp1={DSKochiCourseData[0].Projectsp1}
              src2={DSKochiCourseData[0].src2}
              ProjectsH2={DSKochiCourseData[0].ProjectsH2}
              Projectsp2={DSKochiCourseData[0].Projectsp2}
              src3={DSKochiCourseData[0].src3}
              ProjectsH3={DSKochiCourseData[0].ProjectsH3}
              Projectsp3={DSKochiCourseData[0].Projectsp3}
              src4={DSKochiCourseData[0].src4}
              ProjectsH4={DSKochiCourseData[0].ProjectsH4}
              Projectsp4={DSKochiCourseData[0].Projectsp4}
              AlumniBot1={DSKochiCourseData[0].AlumniBot1}
              Asrc1={DSKochiCourseData[0].Asrc1}
              AlumniH1={DSKochiCourseData[0].AlumniH1}
              Alumnip1={DSKochiCourseData[0].Alumnip1}
              Asrc2={DSKochiCourseData[0].Asrc2}
              AlumniH2={DSKochiCourseData[0].AlumniH2}
              Alumnip2={DSKochiCourseData[0].Alumnip2}
              Asrc3={DSKochiCourseData[0].Asrc3}
              AlumniH3={DSKochiCourseData[0].AlumniH3}
              Alumnip3={DSKochiCourseData[0].Alumnip3}
              Asrc4={DSKochiCourseData[0].Asrc4}
              AlumniH4={DSKochiCourseData[0].AlumniH4}
              Alumnip4={DSKochiCourseData[0].Alumnip4}
              alt1={DSKochiCourseData[0].alt1}
              alt2={DSKochiCourseData[0].alt2}
              alt3={DSKochiCourseData[0].alt3}
              alt4={DSKochiCourseData[0].alt4}
              alt5={DSKochiCourseData[0].alt5}
              alt6={DSKochiCourseData[0].alt6}
              alt7={DSKochiCourseData[0].alt7}
              alt8={DSKochiCourseData[0].alt8}
              alt9={DSKochiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSKochiCourseData[0].faq} />
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
