import Navbar from '@/components/Global/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { masterdegreeAUSData } from '../../../CityData/australia/masterDegreeDSAustreliaData';
import Footer from '../../../components/Global/Footer/Footer';
import Form from '../../../components/Global/Form/Form';
import Popup from '../../../components/Global/Popup/Popup';
import FeeSection from '../../../components/Seo/FeeSection/FeeSection';
// import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
import Realstory from '@/components/Home/Realstory/Realstory';
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
// const CityText = dynamic(() =>
//   import("../../../components/Seo/CityText/CityText")
// );
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
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Masters-in-CS.pdf';
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Master's Degree in Data Science & AI in Australia - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="  Explore our Master's Degree in Data Science and Artificial Intelligence in Australia. Dive into cutting-edge tech and unlock career opportunities. Enroll today! "
        />
        <meta
          name="keywords"
          content="Masters in data science Australia, Data science masters in Australia, Masters in AI in Australia, Masters in Artificial Intelligence in Australia, Masters in Data Science, Data Science Masters Programs in Australia.          "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Master's Degree in Data Science & AI in Australia - Learnbay"
        />
        <meta
          property="og:description"
          content="Join our Master's Degree in Data Science and Artificial Intelligence in Australia. Dive into cutting-edge tech & unlock career opportunities. Enrol today!"
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
          content="https://www.learnbay.co/datascience/australia/masters-degree-in-data-science-in-australia"
        />
        <meta
          name="twitter:title"
          content="Master's Degree in Data Science & AI in Australia - Learnbay"
        />
        <meta
          name="twitter:description"
          content="Join our Master's Degree in Data Science and Artificial Intelligence in Australia. Dive into cutting-edge tech & unlock career opportunities. Enrol today!"
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
                          "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Master's Degree in Data Science & AI in Australia - Learnbay",
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
    "ratingCount": "1872"
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
  "name": "Master's Degree in Data Science & AI in Australia - Learnbay",
  "description": "Join our Master's Degree in Data Science and Artificial Intelligence in Australia. Dive into cutting-edge tech & unlock career opportunities. Enrol today!.",
  "provider": {
    "@type": "Organization",
    "name": "Learnbay",
    "sameAs": "https://www.learnbay.co/"
  },
  "offers": {
    "@type": "Offer",
    "price": "3500",
    "priceCurrency": "USD",
    "category": "Educational"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "P18M",
    "offers": {
      "@type": "Offer",
      "price": "3500",
      "priceCurrency": "USD"
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
    "name": "What is the curriculum structure of the Master's in Data Science program in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The curriculum structure of the Master's in Data Science program in Australia represents Generative AI-rich modules for 360-degree learning. It follows the latest data science and Agentic AI trends prevailing in Australia, leveraging businesses operating there. 
The curriculum includes seven learning modules, and they are 
Ll - Cohort Orientation with Programming
L2 - Basic & Advanced Python Programming
L3 - Statistics & Machine Learning
L4 - Data Science Tools
L5 - Al Tools
L6 - Deployment"
    }
  },{
    "@type": "Question",
    "name": "How are the courses structured? Are they more theoretical or practical in nature?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The courses are structured following the current happenings in the data science industry in Australia. The courses are crafted with specific attention to both theoretical and practical learning concepts. Learners enrolling for the master's in data science program will gain a comprehensive learning of theoretical concepts followed by projects. It focuses on real-time learning of tools via live projects and case studies associated with every learning term. Here you get the scope of bringing your own business problems (BYOP) too."
    }
  },{
    "@type": "Question",
    "name": "What specific topics and skills are covered in the program's coursework for a master's degree in data science?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer a master's degree program in data science with a GenAl-inclusive course curriculum. Tech and non-tech experts will learn everything about Python programming from scratch. Some specific topics include ML models, deep learning, data structures, GenAl-rich tools, AWS & Azure deployment, and visualization. Experts enrolling in our master's program will gain proven data-driven skills to thrive globally."
    }
  },{
    "@type": "Question",
    "name": "Are any elective courses available to tailor the program to my interests in the data science master's program in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data science master's programs in  Australia are specifically designed to meet the competitive requirements of the leading industries. Domain-based specializations are available to leverage your efficaciousness with assured success. Here, you can find your coursework and projects per your specialization interests covering prime domains. Such domains are - BFSI, HR, Marketing, Manufacturing, Healthcare, and Supply Chain."
    }
  },{
    "@type": "Question",
    "name": "How are the classes delivered? Are they in-person, online, or a combination of both for an MS in Data Science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Data science masters programs in Australia conduct online training sessions to help learners gain adequate abstract and practical knowledge. Experts joining our MS in Data Science in the Australia program can balance their hectic plans with our flexible online learning sessions."
    }
  },{
    "@type": "Question",
    "name": "What are the available elective domain options in the different data science training courses of Learnbay in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In the Master Degree course provided by Learnbay in Australia, available domain specializations are: Retail, E-Commerce, & Supply Chain, Healthcare, BFSI; Manufacturing, BFSI, Managers and Leaders. However we update our domain specialisation as per market job market skill demand and ever changing trends.Contact our course experts for latest available domain specializations and modules."
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
      "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Check with our career support expert for more details."
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
      "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration. Check with our course expert for any kind of terms and conditions."
    }
  },{
    "@type": "Question",
    "name": "What are the fees for the Master's in Data Science program, and are there any additional costs for data science master's programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Master's in Data Science program costs $3000. Apart from the course fees, there are no additional costs for data science master's programs in Australia."
    }
  },{
    "@type": "Question",
    "name": "Do you offer any scholarships or financial aid for students pursuing a master's degree in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay offers scholarships to eligible learners opting for a master's degree in data science in Australia after reviewing their profiles. Eligible learners will receive up to a 25% scholarship for the master's course."
    }
  },{
    "@type": "Question",
    "name": "What payment options are available for the data science masters programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in data science masters programs in Australia will have two options for one-time payment for the course: Internet banking and credit/Debit card."
    }
  },{
    "@type": "Question",
    "name": "Are any discounts available for early enrollment or paying the tuition upfront for a master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer early bird discounts of 15%-20% for learners enrolling in a master's in data science in Australia. Yet, a group discount is available for learners who join with one or more friends. 
Group of 2: 5% extra discount Group of 3: 8% additional discount Group of 4+: Max 10% discount"
    }
  },{
    "@type": "Question",
    "name": "Could you provide more information about the capstone project or real-time projects included in the program for MS in Data Science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners joining the MS in data science course in Australia will gain exclusive learning scope via capstone projects. Here, learners can choose one domain specialization per their career interests and work on three capstone projects. The projects will relate to the leading industries - BFSI, Healthcare, HR, Marketing, Supply Chain, and Manufacturing. At last, learners in Australia will receive one Capstone Project Certificate from a renowned industry with alluring career gains."
    }
  },{
    "@type": "Question",
    "name": "How are capstone projects assigned, and what level of guidance and support can students expect during the project for a master's degree in data science?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners joining us for a master's degree in data science in Australia will gain uninterrupted learning assistance from respective mentors. We offer project-based learning scope via capstone projects in diversified domains. Learners can choose their projects based on domain specialization and industry trends. Our esteemed mentors are available 24/7 for end-to-end support during coursework and capstone projects. 1:1 doubt-clearing sessions are also available to resolve project-related queries."
    }
  },{
    "@type": "Question",
    "name": "Are there opportunities for students to work on industry projects or collaborate with companies as part of their studies for data science master's programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, learners enrolling in data science master's programs in Australia can gain industry-specific experience via projects. Our collaboration with leading MNCs helps learners gain adequate exposure to real-world businesses. Our master's programs offer domain-specific learning platforms with proven industry projects. Here, you will get an exclusive scope to refine prior domain knowledge and excel in your role."
    }
  },{
    "@type": "Question",
    "name": "Can students choose their projects, or are they assigned by the faculty for a master's degree in data science?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Once you enroll in the master's degree in data science, you can choose your domain. Learners opting for the master's degree program can choose their projects as per their domain specialization and career interests. Learners go through group project work under the guidance of renowned faculties or mentors."
    }
  },{
    "@type": "Question",
    "name": "What type of certification or degree will I receive upon completing the Master's in Data Science program in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in a master's in data science program in Australia will get a globally accredited degree from Woolf. Plus, completing courses and projects will attest to your career with IBM & Microsoft certifications."
    }
  },{
    "@type": "Question",
    "name": "Is the certification recognized internationally, and what is its value in the job market for data science masters programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, the certification is globally recognized (60+ countries recognize it), enriching your career and validating the learned skills for better job prospects. Anyone pursuing data science masters programs in Australia must obtain this certification for an effortless career transition. Learners with globally valued certifications attain a competitive advantage with compelling offers from top-tier companies in Australia. Certifications set a benchmark for exclusive competence to crack expanded career growth prospects throughout the country and overseas."
    }
  },{
    "@type": "Question",
    "name": "Are there any additional certifications or credentials",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Students can earn alongside the Master's degree in data science masters programs. Learners will receive course completion and project certifications from IBM & Microsoft alongside the master's degree in data science masters programs."
    }
  },{
    "@type": "Question",
    "name": "What kind of career support services do you offer to students and alumni of master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners joining the master's in data science in Australia will receive 100% job and placement assistance guided by esteemed mentors. Here, we offer Career Service Acceleration service that successfully empowers learners to face and crack top-notch job offers. The career support services include -
Three years of uninterrupted job assistance with premium offers, six 1:1 mock interviews with the leading MNCs in the Germnay & overseas, 1:1 doubt-clearing (coursework & projects), Resume review & ATS optimization, LinkedIn profile review"
    }
  },{
    "@type": "Question",
    "name": "Do you have partnerships with companies or industry connections that help students secure internships or job placements for MS in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we have a leading MNCs & unicorn startup with 450+ leading companies in Australia and overseas that assist career transitions with premium placements and internships."
    }
  },{
    "@type": "Question",
    "name": "How successful are graduates from your program in finding employment in the Data Science field for a master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in a master's in data science in Australia witness a notable career transformation with attractive hikes and swift job promotions. Graduates from this program gain a competitive advantage by overcoming career stagnancies. These graduates hold hands-on experience with the latest tools and techniques that enhance their chances of getting selected for leading career roles."
    }
  },{
    "@type": "Question",
    "name": "Do you provide resume assistance, interview preparation, or networking opportunities to help students transition into the workforce for data science masters programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, eligible learners enrolling in data science masters programs in Australia will have successful career transitions with hassle-free assistance and opportunities. Such assistance includes resume review, interview preparation sessions, professional networking, and many more. Such services help learners transition their careers into prominent roles with alluring hikes and promotions."
    }
  },{
    "@type": "Question",
    "name": "Do students have access to mentors or advisors throughout the program for a master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, learners have direct access to their mentors throughout the program for a master's in data science in Australia. They can reach out to their mentors in case of any course or project- related queries."
    }
  },{
    "@type": "Question",
    "name": "What qualifications and experience do the mentors have in Data Science and AI for data science masters programs in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Mentors assigned for data science masters programs in Australia hold at least seven years of work experience in a similar field from any domain/discipline. Their real-time exposure to business scenarios and decisiveness helps learners land their dream roles."
    }
  },{
    "@type": "Question",
    "name": "How are mentors assigned to students, and what level of interaction can students expect for MS in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a group of renowned industry experts in the role of mentors for MS in data science in Australia. These mentors are assigned to individual learning batches as per relevant skills and experience. Learners can expect direct interaction with their
mentors during training sessions. Apart from training classes, you can also contact mentors for doubt clearing or certain queries via phone call or chat."
    }
  },{
    "@type": "Question",
    "name": "Are there opportunities for one-on-one mentorship sessions or group mentorship activities for master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Experts enrolling in our master's in data science in Australia will receive exclusive mentorship from industry experts. Here, you will get group mentorship activities during learning sessions and 1:1 mentorship for doubt-clearing & project tasks. However, in special cases, you can avail of 1:1 mentorship sessions."
    }
  },{
    "@type": "Question",
    "name": "How does mentorship contribute to students' academic and professional growth during the program for MS in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Mentorship is pivotal in enhancing a learner's academic and professional performance in the data science field. Experts joining us for MS in data science in Australia will gain live instructor-led training sessions from industry experts as mentors. Learning directly from eminent mentors helps learners see through the changing industry dynamics and improve their performance. Mentorship helps learners gain a 360-degree knowledge- building advantage, refining academic skills. Plus, mentorship enables learners to attain professional growth through hikes, promotions, and job offers."
    }
  },{
    "@type": "Question",
    "name": "What academic support services are available to students, such as tutoring or study groups, for master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in master's in data science in Australia can avail
of dedicated mentorship from industry experts. You will gain uninterrupted training sessions from respective mentors with 24*7 assistance.
Some exclusive academic support services will be - Live instructor-led training sessions, Dedicated mentorship with 1:1 doubt-clearance, Hassle-free contact with mentors after classes, Learning materials, Course tasks and projects handling support, Career assistance"
    }
  },{
    "@type": "Question",
    "name": "How responsive are the faculty and support staff to student inquiries and concerns for MS in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learners enrolling in MS in data science in Australia will get hassle-free training sessions with complete support from faculty and associated staff. In case of certain inquiries and concerns, you can contact your mentor 24/7 via the Learnbay app. You can contact them via phone or chat regarding coursework or project- related doubts. So, within 10-15 minutes, you can get mentor support to resolve queries concerning coursework or live projects."
    }
  },{
    "@type": "Question",
    "name": "Is technical support available for students encountering issues with online learning platforms or software used in the program for master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Learnbay has a centralized technical support system to help learners with related issues during the master's in Data Science in Australia. The Learnbay app is available 24/7 to help you out with all kinds of issues. In case you face technical issues during login, logout, training sessions, attendance, or any other time, our dedicated experts are there to help with the best possible solutions."
    }
  },{
    "@type": "Question",
    "name": "How does the program foster community and peer support among students, especially in online learning environments for master's in data science in Australia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learnbay utilizes several strategies to foster a sense of community and peer support among students pursuing a master's in data science in Australia.
It includes -
Collaborative learning platforms with discussion forums, Dedicated mentorship followed by 1:1 doubt-clearing sessions, Project-based learning via projects, and soft skills training
ATS- Resume optimization, Interview Preparation."
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
          titleCourse="Best Data Science Courses in Austrelia          "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Masters-in-CS.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="  Master’s Degree Program in Data Science and AI – Australia           "
          firstTopPara="Learnbay Excelvarsity          "
          cityParaCont="Equip yourself with a cutting-edge masters in data science program for an effortless career transition.  Enroll with us to acquire the highly sought-after data science competencies through our GenAI-rich course modules.  Kick-start your data science career journey with IBM project certification.            "
          woolfOnly={true}
        />
        <SecondSection
          SecondSectionData={masterdegreeAUSData[0].secondSection}
        />
        {/* <Testimonial
          redirectDS={true}
          Testimonial={masterdegreeAUSData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        /> */}
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$3500 "
            FeeEmi="₹ 8,194/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekday  Batch"
            weekday="MON - FRI"
            weekend="MON - FRI"
            WeekdayDate="FEB 2nd"
            WeekendDate="FEB 9th"
            WeekdayTime="8 PM - 10 PM"
            WeekendTime="8 AM - 10 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,25,000"
            monthlyPayment1="₹8,194"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,25,000"
            monthlyPayment2="₹12,291"
            countryfee={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextMasterAUS={true}
              ProgramBot1={masterdegreeAUSData[0].ProgramBot1}
              ProgramHead3={masterdegreeAUSData[0].ProgramHead3}
              ProgramBot3={masterdegreeAUSData[0].ProgramBot3}
              ProgramBot31={masterdegreeAUSData[0].ProgramBot31}
              ProgramBot4={masterdegreeAUSData[0].ProgramBot4}
              ProgramBot5={masterdegreeAUSData[0].ProgramBot5}
              ProgramBot6={masterdegreeAUSData[0].ProgramBot6}
              Courselink1={masterdegreeAUSData[0].Courselink1}
              Courselink2={masterdegreeAUSData[0].Courselink2}
              Courselink3={masterdegreeAUSData[0].Courselink3}
              Courselink4={masterdegreeAUSData[0].Courselink4}
              Courselink5={masterdegreeAUSData[0].Courselink5}
              Course1={masterdegreeAUSData[0].Course1}
              Course2={masterdegreeAUSData[0].Course2}
              Course3={masterdegreeAUSData[0].Course3}
              Course4={masterdegreeAUSData[0].Course4}
              Course5={masterdegreeAUSData[0].Course5}
              DomainHead1={masterdegreeAUSData[0].DomainHead1}
              DomainBot1={masterdegreeAUSData[0].DomainBot1}
              DomainBot2={masterdegreeAUSData[0].DomainBot2}
              DomainBot3={masterdegreeAUSData[0].DomainBot3}
              DomainMasterBot1={masterdegreeAUSData[0].DomainMasterBot1}
              DomainMasterh4={masterdegreeAUSData[0].DomainMasterh4}
              DomainMasterBot2={masterdegreeAUSData[0].DomainMasterBot2}
              DomainMasterBot3={masterdegreeAUSData[0].DomainMasterBot3}
              DomainMasterBot4={masterdegreeAUSData[0].DomainMasterBot4}
              masterdomain={true}
              DomainMasterHead1={masterdegreeAUSData[0].DomainMasterHead1}
              DomainMasterlist1={masterdegreeAUSData[0].DomainMasterlist1}
              DomainMasterlist2={masterdegreeAUSData[0].DomainMasterlist2}
              DomainList1={masterdegreeAUSData[0].DomainList1}
              DomainList2={masterdegreeAUSData[0].DomainList2}
              DomainList3={masterdegreeAUSData[0].DomainList3}
              DomainList4={masterdegreeAUSData[0].DomainList4}
              DomainList5={masterdegreeAUSData[0].DomainList5}
              DomainList6={masterdegreeAUSData[0].DomainList6}
              Domainlink1={masterdegreeAUSData[0].Domainlink1}
              Domainlink2={masterdegreeAUSData[0].Domainlink2}
              Domainlink3={masterdegreeAUSData[0].Domainlink3}
              Domainlink4={masterdegreeAUSData[0].Domainlink4}
              Domainlink5={masterdegreeAUSData[0].Domainlink5}
              Domainlink6={masterdegreeAUSData[0].Domainlink6}
              Domainlink7={masterdegreeAUSData[0].Domainlink1}
              Domainlink8={masterdegreeAUSData[0].Domainlink1}
              Domainlink9={masterdegreeAUSData[0].Domainlink1}
              Domainlink10={masterdegreeAUSData[0].Domainlink1}
              CertificationBot1={masterdegreeAUSData[0].CertificationBot1}
              CertificationMasterHead1={
                masterdegreeAUSData[0].CertificationMasterHead1
              }
              CertificationMasterHead2={
                masterdegreeAUSData[0].CertificationMasterHead2
              }
              CertificationBot2={masterdegreeAUSData[0].CertificationBot2}
              CertificationBot3={masterdegreeAUSData[0].CertificationBot3}
              CertificationBot4={masterdegreeAUSData[0].CertificationBot4}
              CertificationmasterBot5={
                masterdegreeAUSData[0].CertificationmasterBot5
              }
              src={masterdegreeAUSData[0].src}
              src22={masterdegreeAUSData[0].src22}
              src33={masterdegreeAUSData[0].src33}
              alt222={masterdegreeAUSData[0].alt222}
              alt333={masterdegreeAUSData[0].alt333}
              alt444={masterdegreeAUSData[0].alt444}
              alt555={masterdegreeAUSData[0].alt555}
              ModuleMasterBot1={masterdegreeAUSData[0].ModuleMasterBot1}
              ModuleMasterBot2={masterdegreeAUSData[0].ModuleMasterBot2}
              ModuleHead1={masterdegreeAUSData[0].ModuleHead1}
              ModuleMasterHead1={masterdegreeAUSData[0].ModuleMasterHead1}
              ModuleMasterHead2={masterdegreeAUSData[0].ModuleMasterHead2}
              MasterModulelist={true}
              ModuleMasterlist1={masterdegreeAUSData[0].ModuleMasterlist1}
              ModuleMasterlist2={masterdegreeAUSData[0].ModuleMasterlist2}
              ModuleMasterlist3={masterdegreeAUSData[0].ModuleMasterlist3}
              ModuleMasterlist4={masterdegreeAUSData[0].ModuleMasterlist4}
              ModuleMasterlist5={masterdegreeAUSData[0].ModuleMasterlist5}
              ModuleMasterlist6={masterdegreeAUSData[0].ModuleMasterlist6}
              ModuleMasterlist7={masterdegreeAUSData[0].ModuleMasterlist7}
              Modulelist1={masterdegreeAUSData[0].Modulelist1}
              Modulelist2={masterdegreeAUSData[0].Modulelist2}
              Modulelist3={masterdegreeAUSData[0].Modulelist3}
              Modulelist4={masterdegreeAUSData[0].Modulelist4}
              Modulelist5={masterdegreeAUSData[0].Modulelist5}
              Modulelist6={masterdegreeAUSData[0].Modulelist6}
              Modulelist7={masterdegreeAUSData[0].Modulelist7}
              syllabush1={masterdegreeAUSData[0].syllabush1}
              syllabusb1={masterdegreeAUSData[0].syllabusb1}
              SyllabusBotlist11={masterdegreeAUSData[0].SyllabusBotlist11}
              SyllabusBotlist12={masterdegreeAUSData[0].SyllabusBotlist12}
              SyllabusBotlist13={masterdegreeAUSData[0].SyllabusBotlist13}
              SyllabusBotlist14={masterdegreeAUSData[0].SyllabusBotlist14}
              SyllabusBotlist15={masterdegreeAUSData[0].SyllabusBotlist15}
              SyllabusBotlist16={masterdegreeAUSData[0].SyllabusBotlist16}
              syllabush2={masterdegreeAUSData[0].syllabush2}
              syllabusb2={masterdegreeAUSData[0].syllabusb2}
              SyllabusBotlist21={masterdegreeAUSData[0].SyllabusBotlist21}
              SyllabusBotlist22={masterdegreeAUSData[0].SyllabusBotlist22}
              SyllabusBotlist23={masterdegreeAUSData[0].SyllabusBotlist23}
              SyllabusBotlist24={masterdegreeAUSData[0].SyllabusBotlist24}
              SyllabusBotlist25={masterdegreeAUSData[0].SyllabusBotlist25}
              SyllabusBotlist26={masterdegreeAUSData[0].SyllabusBotlist26}
              syllabush3={masterdegreeAUSData[0].syllabush3}
              syllabusb3={masterdegreeAUSData[0].syllabusb3}
              SyllabusBotlist31={masterdegreeAUSData[0].SyllabusBotlist31}
              SyllabusBotlist32={masterdegreeAUSData[0].SyllabusBotlist32}
              SyllabusBotlist33={masterdegreeAUSData[0].SyllabusBotlist33}
              SyllabusBotlist34={masterdegreeAUSData[0].SyllabusBotlist34}
              SyllabusBotlist35={masterdegreeAUSData[0].SyllabusBotlist35}
              SyllabusBotlist36={masterdegreeAUSData[0].SyllabusBotlist36}
              syllabush4={masterdegreeAUSData[0].syllabush4}
              syllabusb4={masterdegreeAUSData[0].syllabusb4}
              SyllabusBotlist41={masterdegreeAUSData[0].SyllabusBotlist41}
              SyllabusBotlist42={masterdegreeAUSData[0].SyllabusBotlist42}
              SyllabusBotlist43={masterdegreeAUSData[0].SyllabusBotlist43}
              SyllabusBotlist44={masterdegreeAUSData[0].SyllabusBotlist44}
              SyllabusBotlist45={masterdegreeAUSData[0].SyllabusBotlist45}
              SyllabusBotlist46={masterdegreeAUSData[0].SyllabusBotlist46}
              syllabussrc={masterdegreeAUSData[0].syllabussrc}
              JobHead1={masterdegreeAUSData[0].JobHead1}
              MasterJobBot1={masterdegreeAUSData[0].MasterJobBot1}
              JobHead2={masterdegreeAUSData[0].JobHead2}
              JobBot3={masterdegreeAUSData[0].JobBot3}
              Joblist1={masterdegreeAUSData[0].Joblist1}
              Joblist2={masterdegreeAUSData[0].Joblist2}
              Joblist3={masterdegreeAUSData[0].Joblist3}
              Joblist4={masterdegreeAUSData[0].Joblist4}
              MasterJobSpan1={masterdegreeAUSData[0].MasterJobSpan1}
              JobBotMasterBot4={masterdegreeAUSData[0].JobBotMasterBot4}
              Joblist5={masterdegreeAUSData[0].Joblist5}
              Joblist6={masterdegreeAUSData[0].Joblist6}
              Joblist7={masterdegreeAUSData[0].Joblist7}
              Joblist8={masterdegreeAUSData[0].Joblist8}
              Joblist9={masterdegreeAUSData[0].Joblist9}
              Joblist10={masterdegreeAUSData[0].Joblist10}
              Joblist11={masterdegreeAUSData[0].Joblist11}
              Joblist12={masterdegreeAUSData[0].Joblist12}
              Joblist13={masterdegreeAUSData[0].Joblist13}
              JobHead19={masterdegreeAUSData[0].JobHead19}
              JobBot20={masterdegreeAUSData[0].JobBot20}
              JobBotmaster20={masterdegreeAUSData[0].JobBotmaster20}
              JobHead20={masterdegreeAUSData[0].JobHead20}
              Joblist14={masterdegreeAUSData[0].Joblist14}
              Joblist15={masterdegreeAUSData[0].Joblist15}
              Joblist16={masterdegreeAUSData[0].Joblist16}
              Joblist17={masterdegreeAUSData[0].Joblist17}
              Joblist18={masterdegreeAUSData[0].Joblist18}
              Joblist19={masterdegreeAUSData[0].Joblist19}
              JobBot19={masterdegreeAUSData[0].JobBot19}
              JobHead21={masterdegreeAUSData[0].JobHead21}
              JobBot21={masterdegreeAUSData[0].JobBot21}
              JobBot22={masterdegreeAUSData[0].JobBot22}
              Joblist21={masterdegreeAUSData[0].Joblist21}
              Joblist22={masterdegreeAUSData[0].Joblist22}
              Joblist50={masterdegreeAUSData[0].Joblist50}
              Joblist51={masterdegreeAUSData[0].Joblist51}
              Joblist52={masterdegreeAUSData[0].Joblist52}
              Joblist53={masterdegreeAUSData[0].Joblist53}
              Joblist54={masterdegreeAUSData[0].Joblist54}
              JobBot23={masterdegreeAUSData[0].JobBot23}
              JobBotMasterBot5={masterdegreeAUSData[0].JobBotMasterBot5}
              JobBotMasterhead={masterdegreeAUSData[0].JobBotMasterhead}
              //   usaotreliaonly={true}
              modulelist={true}
              joblist={true}
              showData={true}
              JobHead22={masterdegreeAUSData[0].JobHead22}
              JobBot24={masterdegreeAUSData[0].JobBot24}
              Joblist23={masterdegreeAUSData[0].Joblist23}
              Joblist24={masterdegreeAUSData[0].Joblist24}
              Joblist25={masterdegreeAUSData[0].Joblist25}
              Joblist26={masterdegreeAUSData[0].Joblist26}
              Joblist27={masterdegreeAUSData[0].Joblist27}
              Joblist28={masterdegreeAUSData[0].Joblist28}
              Joblist29={masterdegreeAUSData[0].Joblist29}
              Joblist30={masterdegreeAUSData[0].Joblist30}
              JobBot25={masterdegreeAUSData[0].JobBot25}
              ProjectsHead1={masterdegreeAUSData[0].ProjectsHead1}
              ProjectsBot1={masterdegreeAUSData[0].ProjectsBot1}
              ProjectsBot2={masterdegreeAUSData[0].ProjectsBot2}
              ProjectsBot3={masterdegreeAUSData[0].ProjectsBot3}
              ProjectsBot4={masterdegreeAUSData[0].ProjectsBot4}
              ProjectsBot5={masterdegreeAUSData[0].ProjectsBot5}
              ProjectsBot6={masterdegreeAUSData[0].ProjectsBot6}
              ProjectsBot7={masterdegreeAUSData[0].ProjectsBot7}
              src1={masterdegreeAUSData[0].src1}
              ProjectsH1={masterdegreeAUSData[0].ProjectsH1}
              Projectsp1={masterdegreeAUSData[0].Projectsp1}
              src2={masterdegreeAUSData[0].src2}
              ProjectsH2={masterdegreeAUSData[0].ProjectsH2}
              Projectsp2={masterdegreeAUSData[0].Projectsp2}
              src3={masterdegreeAUSData[0].src3}
              ProjectsH3={masterdegreeAUSData[0].ProjectsH3}
              Projectsp3={masterdegreeAUSData[0].Projectsp3}
              src4={masterdegreeAUSData[0].src4}
              ProjectsH4={masterdegreeAUSData[0].ProjectsH4}
              Projectsp4={masterdegreeAUSData[0].Projectsp4}
              AlumniBot1={masterdegreeAUSData[0].AlumniBot1}
              Asrc1={masterdegreeAUSData[0].Asrc1}
              AlumniH1={masterdegreeAUSData[0].AlumniH1}
              Alumnip1={masterdegreeAUSData[0].Alumnip1}
              Asrc2={masterdegreeAUSData[0].Asrc2}
              AlumniH2={masterdegreeAUSData[0].AlumniH2}
              Alumnip2={masterdegreeAUSData[0].Alumnip2}
              Asrc3={masterdegreeAUSData[0].Asrc3}
              AlumniH3={masterdegreeAUSData[0].AlumniH3}
              Alumnip3={masterdegreeAUSData[0].Alumnip3}
              Asrc4={masterdegreeAUSData[0].Asrc4}
              AlumniH4={masterdegreeAUSData[0].AlumniH4}
              Alumnip4={masterdegreeAUSData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={masterdegreeAUSData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        {/* <CityText
          CityTextB={masterdegreeAUSData[0].CityTextB}
          CityText={masterdegreeAUSData[0].CityText}
          CityTextLB={masterdegreeAUSData[0].CityTextLB}
          CityTextL={masterdegreeAUSData[0].CityTextL}
        /> */}
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}
