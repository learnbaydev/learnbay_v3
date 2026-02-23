import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FScanadaCourseData } from '../../../CityData/Canada/FullStackDEveloperCourseTrainingcanadaData';
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
        <title>Full Stack Developer Course In Canada - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join Learnbay’s Full Stack Developer course in Canada. Master GenAI, MERN, & DevOps. Earn dual IBM & Microsoft certs with 100% job assist. Enroll now!"
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course training in Canada, Full-Stack Software Developer Course institute in Canada, best Full-Stack Software Developer Course institute in Canada, data scientist course in Canada,data scientist certification in Canada, Full-Stack Software Developer Course training institute in Canada, advanced Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Full Stack Developer Course In Canada - Learnbay"
        />
        <meta
          property="og:description"
          content="Join Learnbay’s Full Stack Developer course in Canada. Master GenAI, MERN, & DevOps. Earn dual IBM & Microsoft certs with 100% job assist. Enroll now!"
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
          content="https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada"
        />
        <meta
          name="twitter:title"
          content="Full Stack Developer Course In Canada - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Join Learnbay’s Full Stack Developer course in Canada. Master GenAI, MERN, & DevOps. Earn dual IBM & Microsoft certs with 100% job assist. Enroll now!"
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada"
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
  "name": "Full Stack Developer Course In Canada - Learnbay",
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
    "ratingCount": "1583"
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
  "name": "Full Stack Developer Course In Canada - Learnbay",
  "description": "Join Learnbay’s Full Stack Developer course in Canada. Master GenAI, MERN, & DevOps. Earn dual IBM & Microsoft certs with 100% job assist. Enroll now!",
  "url": "https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada",
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
    "name": "What is Learnbay’s full-stack developer course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay's full-stack developer course is essentially the finest course in software development available in Canada. Here the learners are trained with a hands-on method to develop software applications using a selection of the most in-demand programming languages."
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
    "name": "What is a 'Flexi Subscription' in the full stack software development course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who register for live online/hybrid training in the full-stack software development course are eligible for a Flexi Pass. We will get you access to all the ongoing live classes, recorded videos, and premium study materials for three years. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any class schedule/instructor whenever it is most convenient for you."
    }
  },{
    "@type": "Question",
    "name": "What are the essential skills in a software development course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Programming, Object Oriented Design (OOD), Software Testing and Debugging, Problem Solving, and Logical Thinking are the mandatory skills you need to master. Learnbay's full-stack development course trains learners on this topic via real-time working experience."
    }
  },{
    "@type": "Question",
    "name": "What will be the program duration for this full-stack software developer course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The duration of this software development course with Agentic AI in Canada is 11 months."
    }
  },{
    "@type": "Question",
    "name": "What is the mode of training for this advanced software development course at Learnbay?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your preferred mode based on your needs. 1. Online Mode :- You can only participate in live, interactive classes online (no recorded video-based session is available). Project sessions will also be conducted online. 2. Hybrid Mode :- For all theoretical sessions, you must participate in live, interactive online lectures. Project-based sessions will be conducted offline"
    }
  },{
    "@type": "Question",
    "name": "How does hybrid learning work, and what are its benefits?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions. While you enter into the project modules, then you have to visit the Learnbay authorized training centers within your city. There you will be doing your project work under the direct supervision of your respective domain expert. The dedicated counselor assigned to you will help you in this regard. The following Indian cities have authorized training facilities: Bangalore, Mumbai, Chennai, Hyderabad, Delhi, Kolkata, and Pune."
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
    "name": "What is domain specialization in the professional AI certification courses provided by Learnbay in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer industry-specific full-stack AI modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational AI course."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different artificial intelligence training courses of Learnbay in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy"
    }
  },{
    "@type": "Question",
    "name": "Which domain elective within the Learnbay AI Certification courses is best suited for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
    }
  },{
    "@type": "Question",
    "name": "Why is domain specialization important in professional artificial intelligence certification?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the advanced AI courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
    }
  },{
    "@type": "Question",
    "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible AI certification courses?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and Artificial Intelligence Training with Placement Assistance- All domains Machine learning and AI Certification- maximum 4 domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
    "name": "How much is the full-stack software developer course fee in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total cost of a full-stack software development course in Canada with agentic AI is 1,59,000 INR, excluding tax."
    }
  },{
    "@type": "Question",
    "name": "Is there any Installment / EMI option available for this course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay in instalments using a credit card with a no-cost EMI option for up upto 12 months. You can also choose an interest-free loan by submitting an Aadhar card, PAN card, and a 3-month salary slip."
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
    "name": "Is there any accredited AI certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you will be awarded with one IBM Gen AI Certificate, One Azure AI Certificate by Microsoft, and an AI Col-ab Project Certificate."
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
    "name": "Does Learnbay provide webinars and hackathons in full-stack development courses in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a full-stack development course that includes webinars and hackathons. Students can enhance their knowledge further by enrolling in webinars and hackathons led by industry experts."
    }
  },{
    "@type": "Question",
    "name": "How long will I receive job referrals after completing a full-stack development course in Canada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In full-stack software development, you’ll be provided with job referrals after the completion of the course for a period of 1 year."
    }
  }]
}
</script>



<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Full Stack Developer Course In Canada - Learnbay",
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
    "ratingCount": "2400"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Full Stack Developer Course In Canada - Learnbay",
  "description": "Join Learnbay’s Full Stack Developer course in Canada. Master GenAI, MERN, & DevOps. Earn dual IBM & Microsoft certs with 100% job assist. Enroll now!",
  "Url": "https://www.learnbay.co/fullstack/canada/full-stack-software-developer-course-in-canada",
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
          titleCourse="Full-Stack Software Developer Course In Canada"
          brochurePdf={pdfUrl}
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/SDE_Master_Program_for_Tech_Professionals.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstToparaImg="To Achieve Your Dream Job"
          firstHeading="Full-Stack Software Developer Course In Canada"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          cityParaCont="Enroll in the best Job-ready full-stack software development course in Canada. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
        />
        <SecondSection
          SecondSectionData={FScanadaCourseData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FScanadaCourseData[0].testimonial}
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
              ProgramHead1={FScanadaCourseData[0].ProgramHead1}
              ProgramBot1={FScanadaCourseData[0].ProgramBot1}
              ProgramBot2={FScanadaCourseData[0].ProgramBot2}
              ProgramHead3={FScanadaCourseData[0].ProgramHead3}
              ProgramHead4={FScanadaCourseData[0].ProgramHead4}
              ProgramBot3={FScanadaCourseData[0].ProgramBot3}
              ProgramBot31={FScanadaCourseData[0].ProgramBot31}
              ProgramBot32={FScanadaCourseData[0].ProgramBot32}
              ProgramBot4={FScanadaCourseData[0].ProgramBot4}
              ProgramBot5={FScanadaCourseData[0].ProgramBot5}
              ProgramBot6={FScanadaCourseData[0].ProgramBot6}
              ProgramBot8={FScanadaCourseData[0].ProgramBot8}
              ProgramBot9={FScanadaCourseData[0].ProgramBot9}
              ProgramBot10={FScanadaCourseData[0].ProgramBot10}
              Courselink1={FScanadaCourseData[0].Courselink1}
              Courselink2={FScanadaCourseData[0].Courselink2}
              Courselink3={FScanadaCourseData[0].Courselink3}
              Courselink4={FScanadaCourseData[0].Courselink4}
              Courselink5={FScanadaCourseData[0].Courselink5}
              Course1={FScanadaCourseData[0].Course1}
              Course2={FScanadaCourseData[0].Course2}
              Course3={FScanadaCourseData[0].Course3}
              Course4={FScanadaCourseData[0].Course4}
              Course5={FScanadaCourseData[0].Course5}
              DomainHead1={FScanadaCourseData[0].DomainHead1}
              DomainBot1={FScanadaCourseData[0].DomainBot1}
              DomainBot2={FScanadaCourseData[0].DomainBot2}
              DomainBot3={FScanadaCourseData[0].DomainBot3}
              DomainList1={FScanadaCourseData[0].DomainList1}
              DomainList2={FScanadaCourseData[0].DomainList2}
              DomainList3={FScanadaCourseData[0].DomainList3}
              DomainList4={FScanadaCourseData[0].DomainList4}
              DomainList5={FScanadaCourseData[0].DomainList5}
              DomainList6={FScanadaCourseData[0].DomainList6}
              DomainList7={FScanadaCourseData[0].DomainList7}
              DomainList8={FScanadaCourseData[0].DomainList8}
              DomainList9={FScanadaCourseData[0].DomainList9}
              DomainList10={FScanadaCourseData[0].DomainList10}
              Domainlink1={FScanadaCourseData[0].Domainlink1}
              Domainlink2={FScanadaCourseData[0].Domainlink2}
              Domainlink3={FScanadaCourseData[0].Domainlink3}
              Domainlink4={FScanadaCourseData[0].Domainlink4}
              Domainlink5={FScanadaCourseData[0].Domainlink5}
              Domainlink6={FScanadaCourseData[0].Domainlink6}
              Domainlink7={FScanadaCourseData[0].Domainlink7}
              Domainlink8={FScanadaCourseData[0].Domainlink8}
              Domainlink9={FScanadaCourseData[0].Domainlink9}
              Domainlink10={FScanadaCourseData[0].Domainlink10}
              CertificationHead1={FScanadaCourseData[0].CertificationHead1}
              CertificationBot1={FScanadaCourseData[0].CertificationBot1}
              CertificationBot2={FScanadaCourseData[0].CertificationBot2}
              // src={FScanadaCourseData[0].src}
              // src22={FScanadaCourseData[0].src22}
              // src33={FScanadaCourseData[0].src33}
              ModuleHead1={FScanadaCourseData[0].ModuleHead1}
              ModuleBot1={FScanadaCourseData[0].ModuleBot1}
              ModuleBot2={FScanadaCourseData[0].ModuleBot2}
              ModuleBot3={FScanadaCourseData[0].ModuleBot3}
              // ModuleHead3={FScanadaCourseData[0].ModuleHead3}
              // ModuleBot4={FScanadaCourseData[0].ModuleBot4}
              ModuleHead2={FScanadaCourseData[0].ModuleHead2}
              syllabush1={FScanadaCourseData[0].syllabush1}
              syllabusb1={FScanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={FScanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FScanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FScanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FScanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FScanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FScanadaCourseData[0].SyllabusBotlist16}
              syllabush2={FScanadaCourseData[0].syllabush2}
              syllabusb2={FScanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={FScanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FScanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FScanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FScanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FScanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FScanadaCourseData[0].SyllabusBotlist26}
              syllabush3={FScanadaCourseData[0].syllabush3}
              syllabusb3={FScanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={FScanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FScanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FScanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FScanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FScanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FScanadaCourseData[0].SyllabusBotlist36}
              syllabush4={FScanadaCourseData[0].syllabush4}
              syllabusb4={FScanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={FScanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FScanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FScanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FScanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FScanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FScanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={FScanadaCourseData[0].syllabussrc}
              JobHead1={FScanadaCourseData[0].JobHead1}
              JobBot1={FScanadaCourseData[0].JobBot1}
              JobBot2={FScanadaCourseData[0].JobBot2}
              JobBot3={FScanadaCourseData[0].JobBot3}
              JobHead2={FScanadaCourseData[0].JobHead2}
              JobBot5={FScanadaCourseData[0].JobBot5}
              JobBot4={FScanadaCourseData[0].JobBot4}
              JobBot6={FScanadaCourseData[0].JobBot6}
              ProjectsBot1={FScanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={FScanadaCourseData[0].ProjectsBot2}
              src1={FScanadaCourseData[0].src1}
              ProjectsHead1={FScanadaCourseData[0].ProjectsHead1}
              ProjectsH1={FScanadaCourseData[0].ProjectsH1}
              Projectsp1={FScanadaCourseData[0].Projectsp1}
              src2={FScanadaCourseData[0].src2}
              ProjectsH2={FScanadaCourseData[0].ProjectsH2}
              Projectsp2={FScanadaCourseData[0].Projectsp2}
              src3={FScanadaCourseData[0].src3}
              ProjectsH3={FScanadaCourseData[0].ProjectsH3}
              Projectsp3={FScanadaCourseData[0].Projectsp3}
              src4={FScanadaCourseData[0].src4}
              ProjectsH4={FScanadaCourseData[0].ProjectsH4}
              Projectsp4={FScanadaCourseData[0].Projectsp4}
              AlumniBot1={FScanadaCourseData[0].AlumniBot1}
              Asrc1={FScanadaCourseData[0].Asrc1}
              AlumniH1={FScanadaCourseData[0].AlumniH1}
              Alumnip1={FScanadaCourseData[0].Alumnip1}
              Asrc2={FScanadaCourseData[0].Asrc2}
              AlumniH2={FScanadaCourseData[0].AlumniH2}
              Alumnip2={FScanadaCourseData[0].Alumnip2}
              Asrc3={FScanadaCourseData[0].Asrc3}
              AlumniH3={FScanadaCourseData[0].AlumniH3}
              Alumnip3={FScanadaCourseData[0].Alumnip3}
              Asrc4={FScanadaCourseData[0].Asrc4}
              AlumniH4={FScanadaCourseData[0].AlumniH4}
              Alumnip4={FScanadaCourseData[0].Alumnip4}
              alt1={FScanadaCourseData[0].alt1}
              alt2={FScanadaCourseData[0].alt2}
              alt3={FScanadaCourseData[0].alt3}
              alt4={FScanadaCourseData[0].alt4}
              alt5={FScanadaCourseData[0].alt5}
              alt6={FScanadaCourseData[0].alt6}
              alt7={FScanadaCourseData[0].alt7}
              alt8={FScanadaCourseData[0].alt8}
              alt9={FScanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FScanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FScanadaCourseData[0].CityTextB}
          CityText={FScanadaCourseData[0].CityText}
          CityTextLB={FScanadaCourseData[0].CityTextLB}
          CityTextL={FScanadaCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
