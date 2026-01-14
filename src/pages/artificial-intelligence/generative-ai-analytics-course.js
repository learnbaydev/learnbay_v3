import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import DABAFirstPart from "@/components/CoursePage/FirstPart/DABAFirstPart";

import DABASecondPart from "@/components/CoursePage/FirstPart/DABASecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Data & Business Analytics Course with Gen AI | Learnbay</title>
        <meta
          name="description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data analytics and ai course, data analytics with ai, business analytics and artificial intelligence, ai in business analytics"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Data & Business Analytics Course with Gen AI | Learnbay"
        />
        <meta
          property="og:description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
        />
        <meta
          property="og:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnbay.co" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          property="twitter:url"
          content="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <meta
          name="twitter:title"
          content="Data & Business Analytics Course with Gen AI | Learnbay"
        />
        <meta
          name="twitter:description"
          content="Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career."
        />
        <meta
          name="twitter:image"
          content="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/og-twitter-Learnbay_logo.webp"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
      "@type": "Course",
      "name": "Data & Business Analytics Course with Gen AI | Learnbay",
      "description": "Upskill with a hands-on Data & Business Analytics course powered by Generative AI. Learn top tools, real-world projects, and boost your career.",
      "url": "https://www.learnbay.co/artificial-intelligence/generative-ai-analytics-course",
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
      "coursePrerequisites": "You should have knowledge of Python, Machine Learning, & Deep Learning.",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": "P6M",
          "courseFee": {
            "@type": "PriceSpecification",
            "price": "₹ 1,20,000 + 18% GST",
            "priceCurrency": "INR"
          }
        }
      ]




          }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{ 
             "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is qualified for the Data Analytics and Business Analytics Program at Learnbay?": {
        "@type": "Answer",
        "text": "Tech and non-tech professionals with at least 1+ years of work experience from any domain can pursue our data and business analytics certification. Experts with no programming skills can also enroll in the course, as we help you learn coding from scratch. Note: Freshers cannot enroll in this course. Such learners are advised to enroll in our data science and AI program for freshers."
      }
    },
    {
      "@type": "Question",
      "name": "What learning modules are covered in the online data analytics training at Learnbay??",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The learning modules of data analytics and business analytics training for working professionals include full-stack concepts. The modules are designed according to the latest GenAI trends and concepts with domain specialization. Our learning modules empower you to learn data and business analytics tools ideal for your domain. It includes fundamental concepts, industry use cases, hands-on projects, and other practical tasks."
      }
    },
    {
      "@type": "Question",
      "name": "What are the learning modes at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay believes in flexible learning options to empower learners to have hassle-free sessions. Here, you will get two modes, live online and hybrid sessions, to meet your learning needs. Live online sessions will help you complete your classes and projects online. On the other hand, learners can complete their coursework online, but for project work, they have to opt for offline innovation labs. Yet, learners can choose an ideal learning mode best suited to their schedules and preferences."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete the Business and Data Analytics certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The business and data analytics course lasts 8 – 9 months, including weekday and weekend batches. The course duration includes coursework, project work, placement assistance, and networking."
      }
    },
    {
      "@type": "Question",
      "name": "How long can I have access to the course materials and resources?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have introduced a 3-year flexi subscription with our business and data analytics course with Generative AI. Learners will get a 3-year flexi pass for live interactive training sessions from reputed mentors. You can have direct access to our course materials, live training sessions, and mentors for quality learning."
      }
    },
    {
      "@type": "Question",
      "name": "What is domain specialization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Domain specialization refers to the process of acquiring field expertise in a particular subject or area of interest related to one sector. Domain-specific upskilling is essential for experts who want to overcome stagnant careers and unlock enriched benefits (hikes, bonuses, promotions, etc)."
      }
    },
    {
      "@type": "Question",
      "name": "What specialised domains are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our business and data analytics course with generative AI promises an alluring career for working professionals from diverse domains. Here, you can choose a suitable domain for learning and project work. The available domains are – BFSI, Healthcare, Retail, Consulting, Technology, Manufacturing"
      }
    },
    {
      "@type": "Question",
      "name": "What is the course fee for the Data Analytics and Business Analytics program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay offers an affordable business and data analytics course for professionals eager to craft an exciting career. Learners joining live online classes cost INR 1,20,000 plus 18% GST."
      }
    },
    {
      "@type": "Question",
      "name": "What financing options are open for the data analytics certification course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay supports hassle-free career transitions with its flexible repayment options. Learners can avail of flexible payment options, including no-cost EMIs, loans, and credit cards. Here, you can choose from 6-, 9-, or 12-month EMI plans."
      }
    },
    {
      "@type": "Question",
      "name": "How many real-time projects will there be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our data analytics course with real-time projects includes 8+ executive-level industry projects to expand your learning."
      }
    },
    {
      "@type": "Question",
      "name": "Are there opportunities to work on real industry projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professionals eager to pursue a data analytics and business analytics program will work on real-time startup challenges at AI Co-Lab. Here, you will get the advantage to co-create solutions to tackle startup problems."
      }
    },
    {
      "@type": "Question",
      "name": "How does Learnbay’s real-time/capstone project help learners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our business and data analytics course, with real-time projects, empowers learners to advance their careers. Learning via capstone projects helps you outperform your competitors and grab exciting opportunities. Learners can have practical experience in handling real-time cases and excel in their careers. We also offer domain-specific projects to help you solidify your domain knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "How does Learnbay's project-based preparation at AI Co-Lab help working professionals?"
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The data and business analytics training for working professionals empowers learners to tackle industry intricacies. Our learners gain AI Co-Lab work experience by tackling real startup challenges and co-creating feasible solutions. You will work directly with startup founders, mentors, and industry experts at AI Co-Lab for exclusive industry experience.",
      }
    },
    {
      "@type": "Question",
      "name": "Is certification essential for a career transition with a data analytics course with Generative AI? ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe that certified learning can enrich your career value and help you grab exciting roles. Certifications are essential for professionals seeking to change careers or secure promotions. As the demand for certified digital experts increases, earning valuable certifications is worth investing in. Learners can enroll in our data and business analytics certification program to unlock competitive success options."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any accredited certification after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professionals enrolling in our business and data analytics certification course will receive global recognition. Eligible learners must complete their coursework and projects to earn globally valued certifications from IBM & Microsoft. Here, you will receive – Course Completion Certificate from IBM, Certification from IBM in Generative AI, BYOP/ AI Co-Lab Project Certification, Capstone project certificate."
      }
    },
    {
      "@type": "Question",
      "name": "What is dedicated placement assistance for working professionals at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners opting for our data analytics course with placement can unlock the door to exciting growth opportunities with top-tier firms. Our 100% reliable placement support empowers you to have effortless promotions and hikes. Here, you can have access to several skills refinement and resume-building sessions. Lastly, our placement support enables you to update your skills and land promising roles globally."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible for the career assistance program at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tech and non-tech professionals with at least 70% marks in coursework and projects are eligible for our placement assistance."
      }
    },
    {
      "@type": "Question",
      "name": "How many interview calls will I get at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners joining our data and business analytics course with IBM certification will get endless interview calls from top-tier 350+ allied partners."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer career assistance services after course completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Learners can join us to have reliable career assistance until they land promising roles. We focus on providing industry-aligned career support services that include – Resume optimization, Interview prep, Career counseling
Endless job calls from top MNCs"
      }
    },
    {
      "@type": "Question",
      "name": "Can I reach out to my mentors to clear up any doubts regarding the course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners pursuing a data analytics course with Generative AI can avail themselves of industry-driven mentorship. Our esteemed mentors will train you with leading-edge concepts and guide you through live projects. Mentors will also help you in clearing your doubts via 1:1 doubt-clearing sessions. Here, you can clear your queries related to the course and projects with your mentor."
      }
    },
    {
      "@type": "Question",
      "name": "Do the mentors take live classes or play recorded sessions during the training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learnbay offers 100% live online classes where you will learn key concepts and work on projects via online platforms. Mentors will offer 100% live instructor-led training sessions to help you grasp proven concepts. Even in hybrid training modes, learners will get online sessions from respective mentors. Yet, you can opt for offline project work at our project innovation labs."
      }
    },
    {
      "@type": "Question",
      "name": "Do counseling sessions help working professionals make wise decisions before enrolling in a course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will get an assured career counseling session from our experts before enrolling in our course. Our counselors will help you decode industry trends and choose the most suitable course with maximum career gains. Also, you can opt for demo sessions with tailored career advice for exciting opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "How long can I avail myself of the mentorship facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our mentors provide 100% live online training or hybrid sessions until you complete the course. Next, during the placement assistance, a learner can opt for 1:1 doubt-clearing sessions and interview prep, where mentorship is required. In addition, we offer a 3-year flexi pass to our learners, where they can avail themselves of uninterrupted mentorship facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can professionals choose to study from their desired mentors at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone opting for an online data analytics training will have quality training sessions from reliable mentors. Yet, if learners do not find a mentor dedicated and experienced, they can opt for changing. Our expert team will substitute your mentors with a desirable ones."
      }
    },
    {
      "@type": "Question",
      "name": "When is the placement support provided at Learnbay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Placement support is offered once the coursework and projects are completed. It includes resume-making, technical mock interviews, and interview calls from top-rated MNCs. We help you prepare for critical technical interviews and land your desired roles."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact technical support if I face any problems with the course platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you enroll in the course, you will get 24×7 technical support that addresses your queries. You can also reach our service providers, who can help you with any issues related to login, sessions, projects, chat, or course materials."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discussion forum or community for learners to communicate and seek support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners will have access to Learnbay’s customized learning app with detailed information about learners and mentors. Here, learners can discuss their queries related to coursework and projects."
      }
    },
    {
      "@type": "Question",
      "name": "How long will I get job referrals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners must qualify themselves to get exciting job referrals. Once you complete the course with the required scores, you will get job referrals from us to get placed across 350+ industry partners."
            }
    }
  ]
            
            }`,
          }}
        />
      </Head>
      <main>
        <DABAFirstPart
          SecondSectionData={DataScienceCourseData.DABAData[0].secondSection}
          TestimonialData={DataScienceCourseData.DABAData[0].testimonial}
          courseId={"genai-analytics"}
        />
        <DABASecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DABAData[0].masterSyllabusMobile
          }
          CertificateData={DataScienceCourseData.DABAData[0].Certificate}
          projectSection={DataScienceCourseData.DABAData[0].projectSection}
          toolsdynamic={true}
          FAQNewData={DataScienceCourseData.DABAData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DABAData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
