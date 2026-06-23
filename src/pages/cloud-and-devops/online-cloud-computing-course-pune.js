import { CloudPune } from '@/Data/Schema/CloudPune';
import Map from '@/components/Seo/Maps/Maps';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CloudComputingTrainingInPune } from '../../CityData/Bangalore/CloudComputingTrainingInPune';
import Footer from '../../components/Global/Footer/Footer';
import Navbar from '../../components/Global/Navbar/Navbar';
import FeeSection from '../../components/Seo/FeeSection/FeeSection';
import YoutubeVideo from '../../components/Seo/YoutubeVideo/YoutubeVideo';
import styles from '../../styles/Home.module.css';
const FirstSection = dynamic(
  () => import('../../components/Seo/FirstSection/FirstSection')
);
const SecondSection = dynamic(
  () => import('../../components/Seo/SecondSection/SecondSection')
);
const SeventhSection = dynamic(
  () => import('../../components/Seo/SeventhSection/SeventhSection')
);
const CityText = dynamic(
  () => import('../../components/Seo/CityText/CityText')
);
const CitiesLeft = dynamic(
  () => import('../../components/Seo/CitiesLeft/CitiesLeftDomain')
);
const CloudDevopstestimonials = dynamic(
  () =>
    import('../../components/CoursePage/cloud&devops/CloudDevopstestimonial/Clouddevoptestimonials.js')
);
const CitiesRight = dynamic(
  () => import('../../components/Seo/CitiesRight/CitiesRightdomain')
);
const FAQNew = dynamic(() => import('../../components/Seo/FAQNew/FAQNew'));

export default function Home() {
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Cloud-and-Devops-Certification-P.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Cloud Computing Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Upskill Your Career With Learnbay's Cloud Computing Course Training In Pune. Gain Practical Skills, IBM Certifications, and dedicated placement Assistance."
        />
        <meta
          name="keywords"
          content="cloud computing course in pune, cloud computing classes in pune, cloud computing course in pune fees, best cloud computing courses in pune, cloud computing course fees in pune, best cloud computing training institute in pune, cloud computing institute in pune, best institute for cloud computing in pune, cloud computing training institute in pune"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/cloud-and-devops/online-cloud-computing-course-pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/cloud-and-devops/online-cloud-computing-course-pune"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Cloud Computing Course in Pune - Learnbay"
        />
        <meta
          property="og:description"
          content="Upskill Your Career With Learnbay's Cloud Computing Course Training In Pune. Gain Practical Skills, IBM Certifications, and dedicated placement Assistance."
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
          content="https://www.learnbay.co/cloud-and-devops/online-cloud-computing-course-pune"
        />
        <meta
          name="twitter:title"
          content="Online Cloud Computing Course in Pune - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upskill Your Career With Learnbay's Cloud Computing Course Training In Pune. Gain Practical Skills, IBM Certifications, and dedicated placement Assistance."
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
            __html: `{   "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Learnbay - Data science and Generative AI courses training in Pune",
  "description": "Upskill Your Career With Learnbay's Cloud Computing Course Training In Pune. Gain Practical Skills, IBM Certifications, and dedicated placement Assistance.",
  "url": "https://www.learnbay.co/cloud-and-devops/online-cloud-computing-course-pune",
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
  "name": "Online Cloud Computing Course in Pune - Learnbay",
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
    "ratingCount": "3862"
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
  "name": "Online Cloud Computing Course in Pune - Learnbay",
  "description": "Upskill Your Career With Learnbay's Cloud Computing Course Training In Pune. Gain Practical Skills, IBM Certifications, and dedicated placement Assistance.",
  "url": "https://www.learnbay.co/cloud-and-devops/online-cloud-computing-course-pune",
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
    "courseWorkload": "P9M",
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
    "name": "What is the duration of the Cloud Computing Course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay’s cloud computing course in Pune offers 8 months of live-instructor-led sessions to complete. Here, you can opt for flexibly scheduled weekday or weekend sessions and kick-start a cloud-based career."
    }
  },{
    "@type": "Question",
    "name": "What prerequisites are mandated to enroll in this cloud certification program in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Any techies willing to start a cloud-based career can join this program. Freshers and working experts with basic familiarity with applied statistics/mathematics can join us. Having add-on coding knowledge offers an extra edge while learning. Besides this, our cloud computing classes in Pune help you with core concepts from scratch."
    }
  },{
    "@type": "Question",
    "name": "Is this certification program appropriate for IT freshers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our best cloud computing courses in Pune are ideal for IT freshers. You can learn proven cloud-based tools and practices to prepare yourself for interviews. Also, learning under the guidance of experienced techies will help you accomplish career targets."
    }
  },{
    "@type": "Question",
    "name": "What trending cloud platforms are included in this program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our cloud certification course follows the latest industry trends and developments to kick-start a thriving career. Our course modules cover Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP) practices and concepts."
    }
  },{
    "@type": "Question",
    "name": "Are there any real-time projects or practical case studies contained in the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our cloud computing training institute in Pune believes in real-time learning. Techies joining our course can work on 10+ live projects, mini-exercises, and case studies. Working on real-world projects helps you tackle cloud complexities well and thrive globally."
    }
  },{
    "@type": "Question",
    "name": "How do I stay informed of the course content and any modifications in the program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We are keen followers of industry trends and developments to keep our learners notified. We offer a personalized learning space where learners can join our app and chat online with peers, mentors, or related authorities. Here, mentors will connect with learners and inform them about recent updates."
    }
  },{
    "@type": "Question",
    "name": "How does the course get updated on recent evolutions in Cloud technology?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our eminent mentor’s team follows the job market fluctuations, industry changes, and updates affecting career roles. Also, our tie-up with 450+ MNCs and in-depth industry research equips us with recent updates on cloud technology. It helps revise cloud computing course modules in Pune, covering notable tools, technologies, and practices."
    }
  },{
    "@type": "Question",
    "name": "How does this course qualify techies for real-time cloud computing crises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our best cloud computing training institute in Pune prepares techies for tackling real-time challenges and resolving matters strategically. Our industry-paced training sessions help techies understand and adapt to changing scenarios for better results."
    }
  },{
    "@type": "Question",
    "name": "How much does the Cloud Computing Certification Course in Pune cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners must pay INR 1,59,000 plus 18% GST as cloud computing course fees in Pune."
    }
  },{
    "@type": "Question",
    "name": "Are there any installment options available for program payments?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies can opt for hassle-free installment payments with INR 5,244 per month. Learners can select their preferred payment options (Credit card, UPI, or Internet banking) for a hassle-free learning experience."
    }
  },{
    "@type": "Question",
    "name": "Can I pay the course fee using credit cards, and are there other payment methods accepted?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can pay for the course with credit cards. Other payment options, such as UPI or Internet banking, are also available."
    }
  },{
    "@type": "Question",
    "name": "Are scholarships or monetary assistance available for the Cloud Computing Certification Course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Eligible learners enrolling in a cloud computing course in Pune will receive up to a 25% scholarship to drive compelling career gains."
    }
  },{
    "@type": "Question",
    "name": "How can I apply for scholarships, and what are the eligibility criteria?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide career counselors with relevant industry experience to guide you through course details, training schedules, and scholarship plans. Learners must spend 15 – 20 minutes conversing with a counselor to get details."
    }
  },{
    "@type": "Question",
    "name": "Do early registrations come with extra discount benefits for cloud computing certification in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies joining our cloud computing training institute in Pune will receive attractive discounts. We offer 15% – 20% early bird discounts to eligible learners. Apart from this, anyone joining a group with 2 or more friends shall receive group discounts. Group of 2: 5% extra discount. Group of 3: 8% extra discount. Group of 4+: Max 10% discount"
    }
  },{
    "@type": "Question",
    "name": "Is there a refund/cancellation policy if I need to withdraw from the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Anyone willing to withdraw from the course for valid reasons can follow the procedure mentioned in Learnbay’s Refund/Cancellation Policy."
    }
  },{
    "@type": "Question",
    "name": "Are there any extra costs for learning resources, textbooks, or certification course exams?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We charge nothing extra for learning resources, textbooks, or certification exams. Your cloud computing course fees in Pune include everything."
    }
  },{
    "@type": "Question",
    "name": "How many cloud-driven real-time projects will be there?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies joining the cloud computing course in Pune will get 10+ real-time projects to solidify their skills and thrive globally."
    }
  },{
    "@type": "Question",
    "name": "How will the project be executed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies joining our cloud computing institute in Pune will choose their preferred projects. Next, you can contact your mentor, who will guide you through the tasks at Learnbay’s offline project innovation labs in Pune."
    }
  },{
    "@type": "Question",
    "name": "What is the capstone project's significance in the cloud computing program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Cloud computing constantly goes through modifications, encouraging techies to keep their eyes on the latest developments. Hence, our cloud computing course in Pune offers an open upskilling facility via career-rich capstone projects. Capstone projects are essential metrics of real-time skill-building with factual insights into events. It equips learners with real-time cloud skills to tackle end-to-end data handling functions and build an unbeatable career. Also, capstone projects help you design a job-driven portfolio to grab exciting job offers."
    }
  },{
    "@type": "Question",
    "name": "Is there any accredited certification after course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. You will obtain multiple globally recognised certifications from IBM, Microsoft, and Learnbay upon completing the course and projects."
    }
  },{
    "@type": "Question",
    "name": "Is the certification internationally recognized?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our best institute for cloud computing in Pune offers globally recognized certifications and exciting job opportunities."
    }
  },{
    "@type": "Question",
    "name": "What type of certificates do I receive upon course completion?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies enrolling in our cloud computing institute in Pune will receive – One IBM & One Microsoft course certificate, One IBM project certificate."
    }
  },{
    "@type": "Question",
    "name": "Are there any additional costs linked to the certification program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cloud computing certification in Pune charges no extra cost apart from the course fees."
    }
  },{
    "@type": "Question",
    "name": "How does this course cater to learners willing to pursue a career as a Cloud Computing Specialist?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our best cloud computing courses in Pune envision a hassle-free career transition for techies with redundant skill sets. Today’s data-driven era demands skilled cloud specialists to tackle inherent intricacies. Hence, techies eager to pursue a cloud-based career must join us to have industry-paced learning. Our practice-based learning methodology, under the guidance of experienced cloud experts, enriches success rates. Also, the placement program and globally valued IBM & Microsoft certifications add an extra edge to your monotonous career."
    }
  },{
    "@type": "Question",
    "name": "What distinguishes this cloud computing course in Pune from others in the market?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay’s cloud program in Pune offers distinct career honors in comparison with others in the industry. Take a look at the significant course highlights – Inclusively curated syllabus covering AWS, Microsoft Azure, and GCP, Job-readiness with interview support from any of 350+ leading MNCs & unicorn startups, Globally recognized course and project certificates from IBM & Microsoft, 1:1 live instructor-led sessions with industry experts, On-demand 1:1 video doubt-clearing assistance, Personalized resume preparation and LinkedIn profiling."
    }
  },{
    "@type": "Question",
    "name": "Can you provide details on the job assistance provided after completing the Cloud Computing Certification Course in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies joining cloud computing institute in Pune for upskilling shall receive 100% job and placement support. Eligible learners (at least 70% scores in projects and tasks) get uncompromised job assistance at Learnbay. Our Career Services PRO offers – Endless Job and Placement Support, Unlimited access to learning materials, 1:1 Mock Interview prep with any of 350+ leading MNCs & unicorn startups, 24/7 contact with Mentors (training and project-related), Resume Building, 1:1 LinkedIn Review Session, Dedicated Placement Team for soft skills training,"
    }
  },{
    "@type": "Question",
    "name": "What resources or support systems are in place to help graduates secure positions in cloud computing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Today’s data-driven age triggers the urgency for hiring cloud specialists. Hence, tech freshers prefer quality upskilling to secure their positions. Learnbay offers industry-relevant training to help tech graduates secure a favorable position in Cloud Computing. We offer – 360-degree knowledge-building live training, 10+ Live projects for hands-on learning, 100% job assistance (Career Services Pro), Globally recognized certifications (IBM & Microsoft)."
    }
  },{
    "@type": "Question",
    "name": "Explain Learnbay's Career Services Pro. Can I opt for Career Services Pro for the Cloud Program?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay’s Career Services Pro aspires to sustain successful career growth in a preferred role with substantial gains. Elite features of Career Services PRO are – Three years of Endless Placement Aid, Six 1:1 Mock Interviews with leading MNCs & unicorn startups, Resume Preparation Session, 1:1 LinkedIn Profiling Session, Dedicated Placement Team. You can opt for Career Services Pro for the Cloud Computing Course in Pune to crack top-rated IT jobs."
    }
  },{
    "@type": "Question",
    "name": "Is there any support or mentorship provided during the cloud course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay envisions a hassle-free career change for techies willing to update their skills. Our cutting-edge mentorship by reputed cloud experts helps techies gain abstract and practical knowledge of in-demand tools. Our mentors are 24/7 available to resolve your learning queries related to courses and projects."
    }
  },{
    "@type": "Question",
    "name": "Are there mentors available to help with coursework and projects?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Techies enrolling in our cloud computing course in Pune will receive undeniable mentorship from eminent experts. We assign reputed mentors to learners, aligning with their career aspirations. Mentors are here 24/7 open to help you with the coursework and projects with end-to-end training and doubt-clearing."
    }
  },{
    "@type": "Question",
    "name": "How can I connect with a mentor?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners will get access to the Learnbay app to have direct contact with their respective mentors 24/7. Apart from this, techies can also reach out to their mentors via phone or chat sessions."
    }
  },{
    "@type": "Question",
    "name": "What is the typical response time for mentor support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our experienced mentors are always available to resolve learner’s queries or have discussions. Typically, mentors will reach out to you within 15 – 20 minutes to fix your issues with the best possible solutions."
    }
  },{
    "@type": "Question",
    "name": "Are there dedicated support channels for addressing technical issues during the course?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay has a centralized technical service system to help learners with courses and project-related issues. This technical aid is 24/7 open to solve all your quests instantly. In case, you face technical difficulties during login, logout, learning sessions, attendance, etc., our reliable experts are here to assist."
    }
  },{
    "@type": "Question",
    "name": "What kind of support is open for techies enrolled in the Cloud Computing Certification Program in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After enrolling in the Cloud Computing Certification in Pune, learners will get support for – Resolving technical/non-technical issues, Direct contact with mentors, 1:1 doubt-clearing, Coursework resources, Project handling help, Career Services Pro (Job and placement assistance)."
    }
  },{
    "@type": "Question",
    "name": "How can learners get assistance with course materials or clarification on concepts related to cloud technology?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Leading-edge mentorship from renowned cloud specialists helps techies redefine their careers. Their exclusive support with course materials, doubt-clearing sessions, and placement offers exciting gains. Techies get clarified knowledge on trending cloud technologies via regularly revised syllabi and proven mentorship. Also, mentors are present to resolve your doubts regarding courses and projects at any time."
    }
  },{
    "@type": "Question",
    "name": "Is there specific support available to qualify for Cloud Computing certification exams in Pune?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners preparing for cloud computing certification exams in Pune will receive industry-paced training sessions with Learnbay. Our cloud computing classes in Pune guide you with conceptual and empirical learning. Apart from this, you will go through Career Services PRO to enrich your success chances. Here, you will receive everything required to become successful – from 1:1 mock interviews to CV-making. Placement services help learners refine their skills and prepare for critical cloud-based interviews."
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
        <FirstSection
          FirstTyped="Job-ready with interview support"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          titleCourse="Best Online Cloud Computing Course in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_System_Admin_Professionals.pdf"
          dataScience={true}
          interstedInHide={true}
          brochurePdf={pdfUrl}
          idss="gaQYhVPCudQ"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Cloud Computing Course in Pune"
          firstTopPara="Expand beyond technology"
          cityParaCont="Explore our all-inclusive cloud computing course in Pune and exalt your skills to build a modern tech career. Learnbay’s ‘Cloud Computing Certification Program’ in Pune is here to help you target your dream roles and attain success. Join us to boost your tech-driven skills and earn IBM & Microsoft credentials to build a globally recognized career."
          ibmandms={true}
        />
        <SecondSection
          SecondSectionData={CloudComputingTrainingInPune[0].secondSection}
        />
        <CloudDevopstestimonials />
        <div className={styles.cityFee}>
          <FeeSection
            Fee=" ₹ 1,59,000"
            FeeEmi="₹ 5,244/month"
            weekdaybatch="Weekend Batch"
            weekendbatch="Weekday Batch"
            weekday="SAT - SUN"
            weekend="MON - FRI"
            WeekdayDate="Oct 27th"
            WeekendDate="Nov 8th"
            WeekendTime="8:00 PM - 10:00 PM"
            WeekdayTime="9:30 AM - 1 PM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            brochurePdf={pdfUrl}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹ 80,000"
            monthlyPayment1="₹ 5,244"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹ 80,000"
            monthlyPayment2="₹ 7,866"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextCloudPune={true}
              Programvideo={[<br />, <YoutubeVideo />]}
              CertificationBot1={
                CloudComputingTrainingInPune[0].CertificationBot1
              }
              CertificationBot2={
                CloudComputingTrainingInPune[0].CertificationBot2
              }
              CertificationBot3={
                CloudComputingTrainingInPune[0].CertificationBot3
              }
              CertificationBot4={
                CloudComputingTrainingInPune[0].CertificationBot4
              }
              src={CloudComputingTrainingInPune[0].src}
              src22={CloudComputingTrainingInPune[0].src22}
              src33={CloudComputingTrainingInPune[0].src33}
              src44={CloudComputingTrainingInPune[0].src44}
              ModuleHead1={CloudComputingTrainingInPune[0].ModuleHead1}
              ModuleBot1={CloudComputingTrainingInPune[0].ModuleBot1}
              ModuleBot2={CloudComputingTrainingInPune[0].ModuleBot2}
              ModuleBot3={CloudComputingTrainingInPune[0].ModuleBot3}
              ulModule={true}
              list1={CloudComputingTrainingInPune[0].list1}
              list2={CloudComputingTrainingInPune[0].list2}
              list3={CloudComputingTrainingInPune[0].list3}
              list4={CloudComputingTrainingInPune[0].list4}
              list5={CloudComputingTrainingInPune[0].list5}
              list6={CloudComputingTrainingInPune[0].list6}
              syllabush1={CloudComputingTrainingInPune[0].syllabush1}
              syllabusb1={CloudComputingTrainingInPune[0].syllabusb1}
              SyllabusBotlist11={
                CloudComputingTrainingInPune[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                CloudComputingTrainingInPune[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                CloudComputingTrainingInPune[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                CloudComputingTrainingInPune[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                CloudComputingTrainingInPune[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                CloudComputingTrainingInPune[0].SyllabusBotlist16
              }
              syllabush2={CloudComputingTrainingInPune[0].syllabush2}
              syllabusb2={CloudComputingTrainingInPune[0].syllabusb2}
              SyllabusBotlist21={
                CloudComputingTrainingInPune[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                CloudComputingTrainingInPune[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                CloudComputingTrainingInPune[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                CloudComputingTrainingInPune[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                CloudComputingTrainingInPune[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                CloudComputingTrainingInPune[0].SyllabusBotlist26
              }
              syllabush3={CloudComputingTrainingInPune[0].syllabush3}
              syllabusb3={CloudComputingTrainingInPune[0].syllabusb3}
              SyllabusBotlist31={
                CloudComputingTrainingInPune[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                CloudComputingTrainingInPune[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                CloudComputingTrainingInPune[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                CloudComputingTrainingInPune[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                CloudComputingTrainingInPune[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                CloudComputingTrainingInPune[0].SyllabusBotlist36
              }
              syllabush4={CloudComputingTrainingInPune[0].syllabush4}
              syllabusb4={CloudComputingTrainingInPune[0].syllabusb4}
              SyllabusBotlist41={
                CloudComputingTrainingInPune[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                CloudComputingTrainingInPune[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                CloudComputingTrainingInPune[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                CloudComputingTrainingInPune[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                CloudComputingTrainingInPune[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                CloudComputingTrainingInPune[0].SyllabusBotlist46
              }
              syllabussrc={CloudComputingTrainingInPune[0].syllabussrc}
              JobHead1={CloudComputingTrainingInPune[0].JobHead1}
              JobBot1={CloudComputingTrainingInPune[0].JobBot1}
              JobBot2={CloudComputingTrainingInPune[0].JobBot2}
              JobBot21={CloudComputingTrainingInPune[0].JobBot21}
              JobHead2={CloudComputingTrainingInPune[0].JobHead2}
              JobBot4={CloudComputingTrainingInPune[0].JobBot4}
              JobBot51={CloudComputingTrainingInPune[0].JobBot51}
              JobBot6={CloudComputingTrainingInPune[0].JobBot6}
              JobHead3={CloudComputingTrainingInPune[0].JobHead3}
              JobBot7={CloudComputingTrainingInPune[0].JobBot7}
              JobHead4={CloudComputingTrainingInPune[0].JobHead4}
              JobBot8={CloudComputingTrainingInPune[0].JobBot8}
              JobBot9={CloudComputingTrainingInPune[0].JobBot9}
              JobHead6={CloudComputingTrainingInPune[0].JobHead6}
              JobHead5={CloudComputingTrainingInPune[0].JobHead5}
              JobBot11={CloudComputingTrainingInPune[0].JobBot11}
              JobBot12={CloudComputingTrainingInPune[0].JobBot12}
              JobBot13={CloudComputingTrainingInPune[0].JobBot13}
              JobBot14={CloudComputingTrainingInPune[0].JobBot14}
              JobBot15={CloudComputingTrainingInPune[0].JobBot15}
              JobBot16={CloudComputingTrainingInPune[0].JobBot16}
              JobBot17={CloudComputingTrainingInPune[0].JobBot17}
              JobBot18={CloudComputingTrainingInPune[0].JobBot18}
              JobBot19={CloudComputingTrainingInPune[0].JobBot19}
              JobBotA={CloudComputingTrainingInPune[0].JobBotA}
              JobBotB={CloudComputingTrainingInPune[0].JobBotB}
              JobBotC={CloudComputingTrainingInPune[0].JobBotC}
              JobBotD={CloudComputingTrainingInPune[0].JobBotD}
              ProjectsHead1={CloudComputingTrainingInPune[0].ProjectsHead1}
              ProjectsBot1={CloudComputingTrainingInPune[0].ProjectsBot1}
              ProjectsBot2={CloudComputingTrainingInPune[0].ProjectsBot2}
              ProjectsBot3={CloudComputingTrainingInPune[0].ProjectsBot3}
              ProjectsBot4={CloudComputingTrainingInPune[0].ProjectsBot4}
              ProjectsBot5={CloudComputingTrainingInPune[0].ProjectsBot5}
              src1={CloudComputingTrainingInPune[0].src1}
              ProjectsH1={CloudComputingTrainingInPune[0].ProjectsH1}
              Projectsp1={CloudComputingTrainingInPune[0].Projectsp1}
              src2={CloudComputingTrainingInPune[0].src2}
              ProjectsH2={CloudComputingTrainingInPune[0].ProjectsH2}
              Projectsp2={CloudComputingTrainingInPune[0].Projectsp2}
              src3={CloudComputingTrainingInPune[0].src3}
              ProjectsH3={CloudComputingTrainingInPune[0].ProjectsH3}
              Projectsp3={CloudComputingTrainingInPune[0].Projectsp3}
              src4={CloudComputingTrainingInPune[0].src4}
              ProjectsH4={CloudComputingTrainingInPune[0].ProjectsH4}
              Projectsp4={CloudComputingTrainingInPune[0].Projectsp4}
              AlumniBot1={CloudComputingTrainingInPune[0].AlumniBot1}
              AlumniBot2={CloudComputingTrainingInPune[0].AlumniBot2}
              Asrc1={CloudComputingTrainingInPune[0].Asrc1}
              AlumniH1={CloudComputingTrainingInPune[0].AlumniH1}
              Alumnip1={CloudComputingTrainingInPune[0].Alumnip1}
              Asrc2={CloudComputingTrainingInPune[0].Asrc2}
              AlumniH2={CloudComputingTrainingInPune[0].AlumniH2}
              Alumnip2={CloudComputingTrainingInPune[0].Alumnip2}
              Asrc3={CloudComputingTrainingInPune[0].Asrc3}
              AlumniH3={CloudComputingTrainingInPune[0].AlumniH3}
              Alumnip3={CloudComputingTrainingInPune[0].Alumnip3}
              Asrc4={CloudComputingTrainingInPune[0].Asrc4}
              AlumniH4={CloudComputingTrainingInPune[0].AlumniH4}
              Alumnip4={CloudComputingTrainingInPune[0].Alumnip4}
              alt1={CloudComputingTrainingInPune[0].alt1}
              alt2={CloudComputingTrainingInPune[0].alt2}
              alt3={CloudComputingTrainingInPune[0].alt3}
              alt4={CloudComputingTrainingInPune[0].alt4}
              alt5={CloudComputingTrainingInPune[0].alt5}
              alt6={CloudComputingTrainingInPune[0].alt6}
              alt7={CloudComputingTrainingInPune[0].alt7}
              alt8={CloudComputingTrainingInPune[0].alt8}
              alt9={CloudComputingTrainingInPune[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={CloudComputingTrainingInPune[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Map PuneMap={true} />
        <CityText CityText={true} />
        <Footer />
      </main>
    </div>
  );
}
