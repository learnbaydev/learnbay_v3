import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FullStackHyderabadCourseData } from '../../../CityData/Hyderabad/fullstackSoftwareDeveloperCourseInHyderabad';
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
            if (popupData === 'Full Stack Developer course') {
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Full_Stack_Software_Development_Master_Certification_Program_download.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Full Stack Developer Course in Hyderabad with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Most comprehensive Full Stack Software Development Training in Hyderabad by Learnbay, Covers GenAI, system design, DSA, & job assist. Sign-up Today."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course training in Hyderabad, Full-Stack Software Developer Course institute in Hyderabad, best Full-Stack Software Developer Course institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, Full-Stack Software Developer Course training institute in Hyderabad, advanced Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Full Stack Developer Course in Hyderabad with Job Assistance"
        />
        <meta
          property="og:description"
          content="Most comprehensive Full Stack Software Development Training in Hyderabad by Learnbay, Covers GenAI, system design, DSA, & job assist. Sign-up Today"
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
          content="https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad"
        />
        <meta
          name="twitter:title"
          content="Full Stack Developer Course in Hyderabad with Job Assistance"
        />
        <meta
          name="twitter:description"
          content="Most comprehensive Full Stack Software Development Training in Hyderabad by Learnbay, Covers GenAI, system design, DSA, & job assist. Sign-up Today"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
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
  "name": "Full Stack Developer Course in Hyderabad with Job Assistance",
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
    "ratingCount": "1585"
  }
}
  }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{   "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Developer Course in Hyderabad with Job Assistance",
  "description": "Most comprehensive Full Stack Software Development Training in Hyderabad by Learnbay, Covers GenAI, system design, DSA, & job assist. Sign-up Today",
  "url": "https://www.learnbay.co/fullstack/hyderabad/full-stack-software-developer-course-in-hyderabad",
  "provider": {
    "@type": "Organization",
    "name": "Learnbay",
    "sameAs": "https://www.learnbay.co/"
  },
  "offers": {
    "@type": "Offer",
    "price": "159000",
    "priceCurrency": "INR",
    "category": "Educational"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "P11M",
    "offers": {
      "@type": "Offer",
      "price": "159000",
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
    "name": "What is Learnbay’s full-stack developer course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay's full-stack developer course is essentially the finest course in software development available in Hyderabad. Here the learners are trained with a hands-on method to develop software applications using a selection of the most in-demand programming languages."
    }
  },{
    "@type": "Question",
    "name": "What types of topics will this full-stack development course cover?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It includes front-end and back-end development skills, covering a variety of responsibilities in the development and maintenance of digital entities (e.g., software and apps). The position necessitates agility, originality, and a combination of technical programming capabilities."
    }
  },{
    "@type": "Question",
    "name": "What is a 'Flexi Subscription' in the full stack software development course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who register for live online/hybrid training in the full-stack software development course are eligible for a Flexi Pass. We will get you access to all the ongoing live classes, recorded videos, and premium study materials for three years. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any class schedule/instructor whenever it is most convenient for you."
    }
  },{
    "@type": "Question",
    "name": "What are the essential skills in a software development course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Programming, Object Oriented Design (OOD), Software Testing and Debugging, Problem Solving, and Logical Thinking are the mandatory skills you need to master. Learnbay's full-stack development course trains learners on this topic via real-time working experience."
    }
  },{
    "@type": "Question",
    "name": "What will be the program duration for this full-stack software developer course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course duration is 11 months, including flexible training sessions."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of training for this advanced software development course at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your preferred mode based on your needs. 1. Online Mode :- You can only participate in live, interactive classes online (no recorded video-based session is available). Project sessions will also be conducted online. 2. Hybrid Mode :- For all theoretical sessions, you must participate in live, interactive online lectures. Project-based sessions will be conducted offline."
    }
  },{
    "@type": "Question",
    "name": "How does hybrid learning work, and what are its benefits?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions. While you enter into the project modules, then you have to visit the Learnbay authorized training centers within your city. There you will be doing your project work under the direct supervision of your respective domain expert. The dedicated counselor assigned to you will help you in this regard. The following Indian cities have authorized training facilities: Bangalore, Mumbai, Hyderabad, Hyderabad, Delhi, Kolkata, and Pune."
    }
  },{
    "@type": "Question",
    "name": "What if I miss a few classes due to an emergency?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You will be given substitute classes in other batches if you miss a few classes. But if you were unable to attend more classes, you could choose to switch batches and enroll in the next batch."
    }
  },{
    "@type": "Question",
    "name": "How do I know that the concerned full-stack software development is a perfect fit for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A full Stack Developer must be proficient and should own extreme interest in various code specializations, including databases, visual design, and UI/UX management, to do their jobs effectively. If you can use your coding abilities and are interested in software applications, this position is ideal for you. You can also take the help of Learnbay’s industry expert career counselor in this regard free of cost."
    }
  },{
    "@type": "Question",
    "name": "What is Domain Specialization associated with the full-stack software developer course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In the full-stack software developer course of Learnbay, we offer five elite domains, from which you can choose your preferred one for your respective specialization. Based on your targeted job role, you can select a specific elective. Based on your chosen domain, all the learning modules of your course will receive customization. So you will be trained with all the best practices of software development that are exclusive to your chosen domain."
    }
  },{
    "@type": "Question",
    "name": "What are specialized domain options provided in this Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In Hyderabad, Learnbay’s Full stack software development course provides domains such as Full Stack, Product Engineer/Manager, Data Science & AI, Web 3.0 Developer, and DevOps & Clouds."
    }
  },{
    "@type": "Question",
    "name": "Is it possible to choose more than one domain in a particular full-stack software developer course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, it is possible to select more than one domain in a full-stack developer course based on someone's preferences and eligibility. +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Can I switch my domain later or in between the course, and if so, is there any extra cost involved?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration. And doing so is free of cost."
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
    "name": "How can I know which domain suits me the best?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for a free profile review and career guidance on the full-stack developer course."
    }
  },{
    "@type": "Question",
    "name": "How much is the full-stack software developer course fee in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course costs INR 1,59,000 plus 18% GST."
    }
  },{
    "@type": "Question",
    "name": "Is there any Installment / EMI option available for this course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a pocket-friendly career switch with flexible installment options, including no-cost EMI for 6, 9, and 12 months."
    }
  },{
    "@type": "Question",
    "name": "Does the Full stack software development Program include any scholarships or discounts? What are Group Discounts?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount: Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2: 8% extra discount: Group of 3: Max 10% discount: Groupe of 4+"
    }
  },{
    "@type": "Question",
    "name": "Will It be required to pay any additional fees for EMI transactions? Is there a refund or rescheduling policy for this Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There are no additional fees from Learnbay for any EMI transactions, and it is completely dependent on the banking and finance company norms. Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
    }
  },{
    "@type": "Question",
    "name": "How many real-time projects will be there in the full-stack developer course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In the full-stack developer course, we have a set of 12+ real-time projects from multiple domains.In the full-stack developer course, we have a set of 12+ real-time projects from multiple domains."
    }
  },{
    "@type": "Question",
    "name": "How do Learnbay’s full-stack software developer course projects help crack the MNC interview?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Because of the specialized projects, you will be able to concentrate on a particular subject, which will make it easier for you to react with better clarity and accuracy to questions asked during interviews. After all, you will be skilled in domain-specific best practices."
    }
  },{
    "@type": "Question",
    "name": "What is Learnbay’s project innovation lab?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay‘s project innovation lab is an essential approach to the hybrid learning process. where students may complete their projects offline at one of the seven training centers that Learnbay offers across India."
    }
  },{
    "@type": "Question",
    "name": "Can I still apply for a full stack developer course even though I do not hold a Bachelor of Technology or Bachelor of Engineering degree?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A person with basic computation and mathematical knowledge is also eligible to participate in this course; a BE or Btech degree is not essential to be part of a Full stack software developer course. Only you have to own the passion for coding."
    }
  },{
    "@type": "Question",
    "name": "I have no prior experience with coding; will this full-stack software developer course be beneficial to me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers specialized sessions for beginners who have no prior expertise with computer programming. So, this is not a concern; only you should have the aptitude to master coding. We will support you from scratch."
    }
  },{
    "@type": "Question",
    "name": "What are the prerequisites for the Full-stack Software Development Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nothing but basic coding knowledge is required to start with this course."
    }
  },{
    "@type": "Question",
    "name": "I am a working professional; will the course interfere with my professional life?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay delivers weekend batches and weekday evening batches with specific time slots for working professionals, allowing them to choose the timings in a manner that does not interfere with their professional lives."
    }
  },{
    "@type": "Question",
    "name": "What are the documents required to enroll in the full-stack developer program in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The admissions procedure is conducted online and personalized to your educational and career background. Only a few academic documents are required for the application procedure."
    }
  },{
    "@type": "Question",
    "name": "What is a job assistance program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay's Job assistance program assists you in obtaining job offers from major MNCs. The Program guides you through the resume-building and project portfolio preparation process. Here you get mock interviews with extensive learning support based on targeted companies and roles. All the mock interviews are conducted by highly experienced software developers."
    }
  },{
    "@type": "Question",
    "name": "Is there any job assistance provided with this full-stack software developer course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You should have completed the course with: A minimum score of 70% in assessments. You should have completed the assignments and case studies, Worked, and successfully completed the minimum recommended number of real-time projects."
    }
  },{
    "@type": "Question",
    "name": "What is the duration of the job assistance?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
    }
  },{
    "@type": "Question",
    "name": "Can a student change mentors based on specific interests after enrolment?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every batch at Learnbay has a specific mentor, but if a student is unhappy with the way their mentor teaches, they can bring it up with a dedicated contact point, who will address the problem by finding new mentors or by changing the batch."
    }
  },{
    "@type": "Question",
    "name": "Is there any option for 1-on-1 learning?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay Provides students with 1-on-1 doubt-clearing sessions. If a person has a specific question and wants to understand certain crucial topics, he or she might certainly benefit from such a session."
    }
  },{
    "@type": "Question",
    "name": "How long do students get access to mentor support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our Mentors will provide advanced software development training and career insights/guidance to the students until the completion of the course, depending on the specialization. Post-course- completion also students can reach out to specialized mentors for project and placement purposes."
    }
  },{
    "@type": "Question",
    "name": "Does Learnbay provide webinars and hackathons in full-stack development courses in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a full-stack development course that includes webinars and hackathons. Students can enhance their knowledge further by enrolling in webinars and hackathons led by industry experts."
    }
  },{
    "@type": "Question",
    "name": "How long will I receive job referrals after completing a full-stack development course in Hyderabad?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In full-stack software development, you’ll be provided with job referrals after the completion of the course for a period of 1 year."
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
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Hyderabad. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Hyderabad To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/SDE_Master_Program_for_Tech_Professionals.pdf"
          brochurePdf={pdfUrl}
          dataScience={true}
          interstedInHide={true}
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstHeading="Full-Stack Software Developer Course In Hyderabad"
          firstToparaImg=" To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          idss="YWxTtvb3x-U"
        />
        <SecondSection
          SecondSectionData={FullStackHyderabadCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FullStackHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,59,000"
            FeeEmi="₹ 7,538/month"
            weekendbatch="Weekday Evening (DSA BATCHES)"
            weekdaybatch="Weekday Evening (DSA BATCHES)"
            weekday="MON-WED-FRI"
            weekend="MON-WED-FRI"
            WeekendDate="JAN 26th"
            WeekdayDate="JAN 10th "
            WeekendTime="08:00PM - 10:00PM"
            WeekdayTime="08:00PM - 10:00PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,538"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft fullStackCity={true} />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              hydrabad={true}
              ProgramBot1={FullStackHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={FullStackHyderabadCourseData[0].ProgramBot2}
              ProgramBot3={FullStackHyderabadCourseData[0].ProgramBot3}
              ProgramHead4={FullStackHyderabadCourseData[0].ProgramHead4}
              ProgramBot4={FullStackHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={FullStackHyderabadCourseData[0].ProgramHead5}
              ProgramBot5={FullStackHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={FullStackHyderabadCourseData[0].ProgramHead6}
              ProgramBot6={FullStackHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={FullStackHyderabadCourseData[0].ProgramHead7}
              ProgramBot8={FullStackHyderabadCourseData[0].ProgramBot8}
              ProgramHead8={FullStackHyderabadCourseData[0].ProgramHead8}
              ProgramHead9={FullStackHyderabadCourseData[0].ProgramHead9}
              ProgramHead10={FullStackHyderabadCourseData[0].ProgramHead10}
              ProgramHead11={FullStackHyderabadCourseData[0].ProgramHead11}
              ProgramHead12={FullStackHyderabadCourseData[0].ProgramHead12}
              ProgramHead13={FullStackHyderabadCourseData[0].ProgramHead13}
              ProgramBot9={FullStackHyderabadCourseData[0].ProgramBot9}
              DomainHead1={FullStackHyderabadCourseData[0].DomainHead1}
              DomainBot1={FullStackHyderabadCourseData[0].DomainBot1}
              DomainHead2={FullStackHyderabadCourseData[0].DomainHead2}
              DomainHead3={FullStackHyderabadCourseData[0].DomainHead3}
              DomainHead4={FullStackHyderabadCourseData[0].DomainHead4}
              DomainHead5={FullStackHyderabadCourseData[0].DomainHead5}
              DomainHead6={FullStackHyderabadCourseData[0].DomainHead6}
              DomainHead7={FullStackHyderabadCourseData[0].DomainHead7}
              DomainBot2={FullStackHyderabadCourseData[0].DomainBot2}
              DomainBot3={FullStackHyderabadCourseData[0].DomainBot3}
              DomainList1={FullStackHyderabadCourseData[0].DomainList1}
              DomainList2={FullStackHyderabadCourseData[0].DomainList2}
              DomainList3={FullStackHyderabadCourseData[0].DomainList3}
              DomainList4={FullStackHyderabadCourseData[0].DomainList4}
              DomainList5={FullStackHyderabadCourseData[0].DomainList5}
              DomainList6={FullStackHyderabadCourseData[0].DomainList6}
              DomainList7={FullStackHyderabadCourseData[0].DomainList7}
              DomainList8={FullStackHyderabadCourseData[0].DomainList8}
              DomainList9={FullStackHyderabadCourseData[0].DomainList9}
              DomainList10={FullStackHyderabadCourseData[0].DomainList10}
              Domainlink1={FullStackHyderabadCourseData[0].Domainlink1}
              Domainlink2={FullStackHyderabadCourseData[0].Domainlink2}
              Domainlink3={FullStackHyderabadCourseData[0].Domainlink3}
              Domainlink4={FullStackHyderabadCourseData[0].Domainlink4}
              Domainlink5={FullStackHyderabadCourseData[0].Domainlink5}
              Domainlink6={FullStackHyderabadCourseData[0].Domainlink6}
              Domainlink7={FullStackHyderabadCourseData[0].Domainlink7}
              Domainlink8={FullStackHyderabadCourseData[0].Domainlink8}
              Domainlink9={FullStackHyderabadCourseData[0].Domainlink9}
              Domainlink10={FullStackHyderabadCourseData[0].Domainlink10}
              CertificationHead1={
                FullStackHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                FullStackHyderabadCourseData[0].CertificationBot1
              }
              src={FullStackHyderabadCourseData[0].src}
              alt2={FullStackHyderabadCourseData[0].alt2}
              alt3={FullStackHyderabadCourseData[0].alt3}
              alt4={FullStackHyderabadCourseData[0].alt4}
              alt5={FullStackHyderabadCourseData[0].alt5}
              ModuleHead1={FullStackHyderabadCourseData[0].ModuleHead1}
              ModuleBot1={FullStackHyderabadCourseData[0].ModuleBot1}
              ModuleHead2={FullStackHyderabadCourseData[0].Head2}
              ModuleBot3={FullStackHyderabadCourseData[0].ModuleBot3}
              ModuleBot2={FullStackHyderabadCourseData[0].ModuleBot2}
              syllabush1={FullStackHyderabadCourseData[0].syllabush1}
              syllabusb1={FullStackHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                FullStackHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                FullStackHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                FullStackHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                FullStackHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                FullStackHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                FullStackHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={FullStackHyderabadCourseData[0].syllabush2}
              syllabusb2={FullStackHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                FullStackHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                FullStackHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                FullStackHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                FullStackHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                FullStackHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                FullStackHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={FullStackHyderabadCourseData[0].syllabush3}
              syllabusb3={FullStackHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                FullStackHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                FullStackHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                FullStackHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                FullStackHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                FullStackHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                FullStackHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={FullStackHyderabadCourseData[0].syllabush4}
              syllabusb4={FullStackHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                FullStackHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                FullStackHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                FullStackHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                FullStackHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                FullStackHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                FullStackHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={FullStackHyderabadCourseData[0].syllabussrc}
              JobHead1={FullStackHyderabadCourseData[0].JobHead1}
              JobBot1={FullStackHyderabadCourseData[0].JobBot1}
              JobBot2={FullStackHyderabadCourseData[0].JobBot2}
              JobBot5={FullStackHyderabadCourseData[0].JobBot5}
              JobHead2={FullStackHyderabadCourseData[0].JobHead2}
              JobBot3={FullStackHyderabadCourseData[0].JobBot3}
              JobBot4={FullStackHyderabadCourseData[0].JobBot4}
              JobBot6={FullStackHyderabadCourseData[0].JobBot6}
              ProjectsBot1={FullStackHyderabadCourseData[0].ProgramBot1}
              ProjectsBot2={FullStackHyderabadCourseData[0].ProgramBot2}
              src1={FullStackHyderabadCourseData[0].src1}
              ProjectsH1={FullStackHyderabadCourseData[0].ProjectsH1}
              Projectsp1={FullStackHyderabadCourseData[0].Projectsp1}
              src2={FullStackHyderabadCourseData[0].src2}
              ProjectsH2={FullStackHyderabadCourseData[0].ProjectsH2}
              Projectsp2={FullStackHyderabadCourseData[0].Projectsp2}
              src3={FullStackHyderabadCourseData[0].src3}
              ProjectsH3={FullStackHyderabadCourseData[0].ProjectsH3}
              Projectsp3={FullStackHyderabadCourseData[0].Projectsp3}
              src4={FullStackHyderabadCourseData[0].src4}
              ProjectsH4={FullStackHyderabadCourseData[0].ProjectsH4}
              Projectsp4={FullStackHyderabadCourseData[0].Projectsp4}
              AlumniBot1={FullStackHyderabadCourseData[0].AlumniBot1}
              Asrc1={FullStackHyderabadCourseData[0].Asrc1}
              AlumniH1={FullStackHyderabadCourseData[0].AlumniH1}
              Alumnip1={FullStackHyderabadCourseData[0].Alumnip1}
              Asrc2={FullStackHyderabadCourseData[0].Asrc2}
              AlumniH2={FullStackHyderabadCourseData[0].AlumniH2}
              Alumnip2={FullStackHyderabadCourseData[0].Alumnip2}
              Asrc3={FullStackHyderabadCourseData[0].Asrc3}
              AlumniH3={FullStackHyderabadCourseData[0].AlumniH3}
              Alumnip3={FullStackHyderabadCourseData[0].Alumnip3}
              Asrc4={FullStackHyderabadCourseData[0].Asrc4}
              AlumniH4={FullStackHyderabadCourseData[0].AlumniH4}
              Alumnip4={FullStackHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FullStackHyderabadCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={FullStackHyderabadCourseData[0].CityTextB}
          CityText={FullStackHyderabadCourseData[0].CityText}
          CityTextLB={FullStackHyderabadCourseData[0].CityTextLB}
          CityTextL={FullStackHyderabadCourseData[0].CityTextL}
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
