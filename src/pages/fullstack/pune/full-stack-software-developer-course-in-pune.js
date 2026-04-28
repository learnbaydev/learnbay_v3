import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FSDPuneCourseData } from '../../../CityData/Pune/FSDCourseInPune';
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
  useEffect(() => {
    const fetchPopup = async () => {
      const data = await fetch('/api/Popup/popupGenerate', {
        method: 'GET',
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          data.page.map((popupData, i) => {
            if (popupData === 'Full Stack Developer course') {
              setPopupData(data);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best Full Stack Developer Course in Pune with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course training in Pune, Full-Stack Software Developer Course institute in Pune, best Full-Stack Software Developer Course institute in Pune, data scientist course in Pune,data scientist certification in Pune, Full-Stack Software Developer Course training institute in Pune, advanced Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />

        <meta
          property="og:url"
          content="https://www.learnbay.co/fullstack/pune/full-stack-software-developer-course-in-pune"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Full Stack Developer Course in Pune with Job Assistance"
        />
        <meta
          property="og:description"
          content="Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now."
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
          content="https://www.learnbay.co/fullstack/pune/full-stack-software-developer-course-in-pune"
        />
        <meta
          name="twitter:title"
          content="Best Full Stack Developer Course in Pune with Job Assistance"
        />
        <meta
          name="twitter:description"
          content="Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
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
  "@type": "LocalBusiness",
  "name": "Learnbay - Data science and Generative AI courses training in Pune",
  "description": "Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now.",
  "url": "https://www.learnbay.co/fullstack/pune/full-stack-software-developer-course-in-pune",
  "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "office no. 408, 4th floor, City Space, opposite to Fiserv, Viman Nagar",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.562830973846324,
    "longitude": 73.92150074243546
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
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "₹ 1,59,000 + 18% GST",
  "areaServed": "Pune",
  "paymentAccepted": "Cash, Credit Card, Debit Card, EMI",
  "sameAs": [
    "https://www.facebook.com/learnbay/",
    "https://twitter.com/Learnbay",
    "https://www.instagram.com/learnbayofficial/",
    "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
    "https://www.linkedin.com/company/learnbay/"
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
  "@type": "Product",
  "name": "Best Full Stack Developer Course in Pune with Job Assistance",
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
    "ratingCount": "1283"
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
  "name": "Best Full Stack Developer Course in Pune with Job Assistance",
  "description": "Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now.",
  "url": "https://www.learnbay.co/fullstack/pune/full-stack-software-developer-course-in-pune",
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
    "name": "What is Learnbay’s full-stack developer course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay's full-stack developer course is essentially the finest course in software development available in Pune. Here the learners are trained with a hands-on method to develop software applications using a selection of the most in-demand programming languages."
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
    "name": "What is a 'Flexi Subscription' in the full stack software development course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Those who register for live online/hybrid training in the full-stack software development course are eligible for a Flexi Pass. We will get you access to all the ongoing live classes, recorded videos, and premium study materials for three years. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any class schedule/instructor whenever it is most convenient for you."
    }
  },{
    "@type": "Question",
    "name": "What are the essential skills in a software development course in pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Programming, Object Oriented Design (OOD), Software Testing and Debugging, Problem Solving, and Logical Thinking are the mandatory skills you need to master. Learnbay's full-stack development course trains learners on this topic via real-time working experience."
    }
  },{
    "@type": "Question",
    "name": "What will be the program duration for this full-stack software developer course in pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The course duration of the full-stack software developer course in pune is 7 – 8 months, including flexible training sessions."
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
    "name": "What is Domain Specialization associated with the full-stack software developer course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In the full-stack software developer course of Learnbay, we offer five elite domains, from which you can choose your preferred one for your respective specialization. Based on your targeted job role, you can select a specific elective. Based on your chosen domain, all the learning modules of your course will receive customization. So you will be trained with all the best practices of software development that are exclusive to your chosen domain."
    }
  },{
    "@type": "Question",
    "name": "What are specialized domain options provided in this Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In Pune, Learnbay’s Full stack software development course provides domains such as Full Stack, Product Engineer/Manager, Data Science & AI, Web 3.0 Developer, and DevOps & Clouds."
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
    "name": "How much is the full-stack software developer course fee in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The total cost of a full-stack software development course in Pune with agentic AI is INR 1,59,000 plus 18% GST."
    }
  },{
    "@type": "Question",
    "name": "Is there any Installment / EMI option available for this course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option. You can also choose an interest-free loan by submitting an Aadhar card, a Pan Card, and a 3-month salary slip."
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
    "name": "Is there any accredited certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Our SDE master’s course offers one IBM Generative AI certification, three Microsoft Azure certifications, and two AI Co-Lab certifications."
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
    "name": "Does Learnbay provide webinars and hackathons in full-stack development courses in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers a full-stack development course that includes webinars and hackathons. Students can enhance their knowledge further by enrolling in webinars and hackathons led by industry experts."
    }
  },{
    "@type": "Question",
    "name": "How long will I receive job referrals after completing a full-stack development course in pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In full-stack software development, you’ll be provided with job referrals after the completion of the course for a period of 1 year."
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
    "name": "What are the documents required to enroll in the full-stack developer program in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The admissions procedure is conducted online and personalized to your educational and career background. Only a few academic documents are required for the application procedure."
    }
  },{
    "@type": "Question",
    "name": "What does a full-stack developer do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The term Full-Stack developer refers to a person proficient in both the front-end and back-end of software development. They create and keep up-and-running fully-fledged systems with databases or servers."
    }
  },{
    "@type": "Question",
    "name": "What is the average full-stack software developer salary in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The average package of full stack software developers ranges averagely around 6 LPA to 12 LPA depending on the company norms and interview aspects. Based on experience, it can reach up to 30 LPA while switching careers."
    }
  },{
    "@type": "Question",
    "name": "Is a full-stack developer a software engineer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The goal of Software engineers and full stack developers are quite the same. Both work with similar client project goals but via different sub-direction. Full stack developers are often in leadership roles. Software engineers, however, may be under the guidance of full-stack developers and can use their expertise to create specific features for projects."
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
            <Form
              popup={true}
              setTrigger={setPopups}
              dataScience={true}
              interstedInHide={true}
            />
          </div>
        </Popup>
        <FirstSection
          fullStack={true}
          FirstTyped="Job-ready with interview support"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          interstedInHide={true}
          titleCourse="Full-Stack Software Developer Course In Pune To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/SDE_Master_Program_for_Tech_Professionals.pdf"
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/W+Dev.png"
          firstToparaImg=" To Achieve Your Dream Job"
          firstHeading="Full-Stack Software Developer Course In Pune "
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          cityParaCont="Enroll in the best Job-ready full-stack software development course in Pune. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          ibmandms={true}
        />
        <SecondSection SecondSectionData={FSDPuneCourseData[0].secondSection} />
        {/* <Testimonial
          redirectDS={false}
          Testimonial={FSDPuneCourseData[0].testimonial}
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
              fullStackCity={true}
              ProgramHead1={FSDPuneCourseData[0].ProgramHead1}
              ProgramBot1={FSDPuneCourseData[0].ProgramBot1}
              ProgramBot2={FSDPuneCourseData[0].ProgramBot2}
              ProgramBot3={FSDPuneCourseData[0].ProgramBot3}
              ProgramHead3={FSDPuneCourseData[0].ProgramHead3}
              ProgramBot31={FSDPuneCourseData[0].ProgramBot31}
              ProgramHead4={FSDPuneCourseData[0].ProgramHead4}
              ProgramHead5={FSDPuneCourseData[0].ProgramHead5}
              ProgramBot4={FSDPuneCourseData[0].ProgramBot4}
              CertificationHead1={FSDPuneCourseData[0].CertificationHead1}
              ProgramBot5={FSDPuneCourseData[0].ProgramBot5}
              ProgramHead6={FSDPuneCourseData[0].ProgramHead6}
              ProgramBot6={FSDPuneCourseData[0].ProgramBot6}
              ProgramHead7={FSDPuneCourseData[0].ProgramHead7}
              ProgramBot8={FSDPuneCourseData[0].ProgramBot8}
              ProgramBot9={FSDPuneCourseData[0].ProgramBot9}
              ProgramBot10={FSDPuneCourseData[0].ProgramBot10}
              ProgramHead8={FSDPuneCourseData[0].ProgramHead8}
              ProgramHead9={FSDPuneCourseData[0].ProgramHead9}
              ProgramHead10={FSDPuneCourseData[0].ProgramHead10}
              ProgramHead11={FSDPuneCourseData[0].ProgramHead11}
              ProgramHead12={FSDPuneCourseData[0].ProgramHead12}
              ProgramHead13={FSDPuneCourseData[0].ProgramHead13}
              Courselink1={FSDPuneCourseData[0].Courselink1}
              Courselink2={FSDPuneCourseData[0].Courselink2}
              Courselink3={FSDPuneCourseData[0].Courselink3}
              Courselink4={FSDPuneCourseData[0].Courselink4}
              Courselink5={FSDPuneCourseData[0].Courselink5}
              Course1={FSDPuneCourseData[0].Course1}
              Course2={FSDPuneCourseData[0].Course2}
              Course3={FSDPuneCourseData[0].Course3}
              Course4={FSDPuneCourseData[0].Course4}
              Course5={FSDPuneCourseData[0].Course5}
              DomainHead1={FSDPuneCourseData[0].DomainHead1}
              DomainBot1={FSDPuneCourseData[0].DomainBot1}
              DomainHead2={FSDPuneCourseData[0].DomainHead2}
              DomainHead3={FSDPuneCourseData[0].DomainHead3}
              DomainHead4={FSDPuneCourseData[0].DomainHead4}
              DomainHead5={FSDPuneCourseData[0].DomainHead5}
              DomainHead6={FSDPuneCourseData[0].DomainHead6}
              DomainHead7={FSDPuneCourseData[0].DomainHead7}
              DomainBot2={FSDPuneCourseData[0].DomainBot2}
              DomainBot3={FSDPuneCourseData[0].DomainBot3}
              DomainList1={FSDPuneCourseData[0].DomainList1}
              DomainList2={FSDPuneCourseData[0].DomainList2}
              DomainList3={FSDPuneCourseData[0].DomainList3}
              DomainList4={FSDPuneCourseData[0].DomainList4}
              DomainList5={FSDPuneCourseData[0].DomainList5}
              DomainList6={FSDPuneCourseData[0].DomainList6}
              DomainList7={FSDPuneCourseData[0].DomainList7}
              DomainList8={FSDPuneCourseData[0].DomainList8}
              DomainList9={FSDPuneCourseData[0].DomainList9}
              DomainList10={FSDPuneCourseData[0].DomainList10}
              Domainlink1={FSDPuneCourseData[0].Domainlink1}
              Domainlink2={FSDPuneCourseData[0].Domainlink2}
              Domainlink3={FSDPuneCourseData[0].Domainlink3}
              Domainlink4={FSDPuneCourseData[0].Domainlink4}
              Domainlink5={FSDPuneCourseData[0].Domainlink5}
              Domainlink6={FSDPuneCourseData[0].Domainlink6}
              Domainlink7={FSDPuneCourseData[0].Domainlink7}
              Domainlink8={FSDPuneCourseData[0].Domainlink8}
              Domainlink9={FSDPuneCourseData[0].Domainlink9}
              Domainlink10={FSDPuneCourseData[0].Domainlink10}
              CertificationBot1={FSDPuneCourseData[0].CertificationBot1}
              CertificationBot2={FSDPuneCourseData[0].CertificationBot2}
              src={FSDPuneCourseData[0].src}
              ModuleHead1={FSDPuneCourseData[0].ModuleHead1}
              src22={FSDPuneCourseData[0].src22}
              src33={FSDPuneCourseData[0].src33}
              ModuleBot1={FSDPuneCourseData[0].ModuleBot1}
              ModuleBot2={FSDPuneCourseData[0].ModuleBot2}
              ModuleBot3={FSDPuneCourseData[0].ModuleBot3}
              ModuleBot4={FSDPuneCourseData[0].ModuleBot4}
              syllabush1={FSDPuneCourseData[0].syllabush1}
              syllabusb1={FSDPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={FSDPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FSDPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FSDPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FSDPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FSDPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FSDPuneCourseData[0].SyllabusBotlist16}
              syllabush2={FSDPuneCourseData[0].syllabush2}
              syllabusb2={FSDPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={FSDPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FSDPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FSDPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FSDPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FSDPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FSDPuneCourseData[0].SyllabusBotlist26}
              syllabush3={FSDPuneCourseData[0].syllabush3}
              syllabusb3={FSDPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={FSDPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FSDPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FSDPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FSDPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FSDPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FSDPuneCourseData[0].SyllabusBotlist36}
              syllabush4={FSDPuneCourseData[0].syllabush4}
              syllabusb4={FSDPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={FSDPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FSDPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FSDPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FSDPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FSDPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FSDPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={FSDPuneCourseData[0].syllabussrc}
              JobHead1={FSDPuneCourseData[0].JobHead1}
              JobBot1={FSDPuneCourseData[0].JobBot1}
              JobBot2={FSDPuneCourseData[0].JobBot2}
              JobBot5={FSDPuneCourseData[0].JobBot5}
              JobHead2={FSDPuneCourseData[0].JobHead2}
              JobBot3={FSDPuneCourseData[0].JobBot3}
              JobBot6={FSDPuneCourseData[0].JobBot6}
              ProjectsBot1={FSDPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={FSDPuneCourseData[0].ProjectsBot2}
              src1={FSDPuneCourseData[0].src1}
              alt2={FSDPuneCourseData[0].alt2}
              alt3={FSDPuneCourseData[0].alt3}
              alt4={FSDPuneCourseData[0].alt4}
              alt5={FSDPuneCourseData[0].alt5}
              ProjectsH1={FSDPuneCourseData[0].ProjectsH1}
              Projectsp1={FSDPuneCourseData[0].Projectsp1}
              src2={FSDPuneCourseData[0].src2}
              ProjectsH2={FSDPuneCourseData[0].ProjectsH2}
              Projectsp2={FSDPuneCourseData[0].Projectsp2}
              src3={FSDPuneCourseData[0].src3}
              ProjectsH3={FSDPuneCourseData[0].ProjectsH3}
              Projectsp3={FSDPuneCourseData[0].Projectsp3}
              src4={FSDPuneCourseData[0].src4}
              ProjectsH4={FSDPuneCourseData[0].ProjectsH4}
              Projectsp4={FSDPuneCourseData[0].Projectsp4}
              AlumniBot1={FSDPuneCourseData[0].AlumniBot1}
              Asrc1={FSDPuneCourseData[0].Asrc1}
              AlumniH1={FSDPuneCourseData[0].AlumniH1}
              Alumnip1={FSDPuneCourseData[0].Alumnip1}
              Asrc2={FSDPuneCourseData[0].Asrc2}
              AlumniH2={FSDPuneCourseData[0].AlumniH2}
              Alumnip2={FSDPuneCourseData[0].Alumnip2}
              Asrc3={FSDPuneCourseData[0].Asrc3}
              AlumniH3={FSDPuneCourseData[0].AlumniH3}
              Alumnip3={FSDPuneCourseData[0].Alumnip3}
              Asrc4={FSDPuneCourseData[0].Asrc4}
              AlumniH4={FSDPuneCourseData[0].AlumniH4}
              Alumnip4={FSDPuneCourseData[0].Alumnip4}
              link1={FSDPuneCourseData[0].link1}
              linkText1={FSDPuneCourseData[0].linkText1}
              Note={FSDPuneCourseData[0].Note}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FSDPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FSDPuneCourseData[0].CityTextB}
          CityText={FSDPuneCourseData[0].CityText}
          CityTextLB={FSDPuneCourseData[0].CityTextLB}
          CityTextL={FSDPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
