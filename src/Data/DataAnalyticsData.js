import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";


import {MdOutlinePrecisionManufacturing} from 'react-icons/md'
import {FaClinicMedical} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsBank} from 'react-icons/bs'

export const DADataScienceCourseData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "1:1 Doubt Session",
        para: "Talk to an expert & receive real-time solutions to your queries",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "Guaranteed Interview Calls",
        para: "Boost your job prospects with referrals from 300+ hiring partners",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png",
        height: "50",
        width: "53",
        heading: "IBM Project Certificate",
        para: "Grab opportunities with a portfolio & make a smooth career transition",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png",
        height: "40",
        width: "40",
        heading: "Designed For Professionals",
        para: "Prioritize growth & salary increases with in-demand skills",
      },
    ],
    testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ],
    thirdSection: [
      {
        id: 1,
        icon: <BsBank/>,
        heading: "BFSI",
        para: "Designed for executive-level BFSI professionals, accountant.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
      },
      {
        id: 1,
        icon: < FaClinicMedical/>,
        heading: "Healthcare",
        para: "For pharmacists, therapists, health administrators, etc.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
      },
      {
        id: 1,
        icon: <AiOutlineFundProjectionScreen/>,
        heading: "HR & Marketing",
        para: "For recruiter, talent acquisition specialist and marketing pros.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
      },
      {
        id: 1,
        icon: <MdOutlinePrecisionManufacturing/>,
        heading: "Manufacturing",
        para: "For production manager, quality control inspector and engineers.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
      },
    ],
    fourthSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png",
        desc: "Get 1 year of job & placement support",
      },
      {
        id: 2,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png",
        desc: "Get 3 mock interviews with industry leaders",
      },
      {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png",
        desc: "Resume build up session",
      },
      {
        id: 4,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png",
        desc: "Get 5-8 interview calls",
      },
    ],
    domainSection: [
      {
        id: 1,
        p1: "#1",
        p2: "BFSI",
        btn: "Download Brochure",
        desc: [
          // "Work on 20+ real time case studies and assignments",
          // "Designed for executive-level BFSI professionals, accountant, etc.",
          // "Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
          "Pursue projects on recording sensors in seismic, manufacturing, and exploration operations to  manufacturing, and exploration operations to ",
        ],
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
        TitleCourse: "BFSI (Banking, Finance, Services and Insurance) Domain",
      },
      {
        id: 2,
        p1: "#2",
        p2: "Manufacturing",
        desc: [
          // "Work on 20+ real time case studies and assignments",
          // "For production manager, quality control inspector, manufacturing engineer etc.",
          // "Discover cutting-edge tech like AI and data science, and develop strategic skills as a business or data analyst",
          "Pursue projects on recording sensors in seismic, manufacturing, and exploration operations to  manufacturing, and exploration operations to ",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
        TitleCourse: "Manufacturing, Mechanical and Telecom Domain",
      },

      {
        id: 3,
        p1: "#3",
        p2: "Energy, Oil and Gas",
        desc: [
          // "Work on 20+ real time case studies and assignments",
          // "For petroleum engineers, environmental specialists, operation managers etc.",
          // "Master your data analysis skills and create a dynamic dashboard to describe your insights",
          "Pursue projects on recording sensors in seismic, manufacturing, and exploration operations to  manufacturing, and exploration operations to ",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf",
        TitleCourse: "Energy, Oil and Gas Domain",
      },

      {
        id: 4,
        p1: "#4",
        p2: "Healthcare",
        desc: [
          // "Work on 20+ real time case studies and assignments",
          // "For pharmacists, therapists, health administrators, etc.",
          // "Achieve success in a competitive market by utilizing advanced tools and methodology to leverage technology and gain a competitive edge",
          "Pursue projects on recording sensors in seismic, manufacturing, and exploration operations to  manufacturing, and exploration operations to ",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
        TitleCourse: "Healthcare, Pharma and Clinical Research Domain",
      },

      {
        id: 5,
        p1: "#5",
        p2: "Supply Chain, E-Commerce & Retail",
        desc: [
          // "Work on 20+ real time case studies and assignments",
          // "Learn Supply Chain, E-Commerce & Retail analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
          "Pursue projects on recording sensors in seismic, manufacturing, and exploration operations to  manufacturing, and exploration operations to ",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf",
        TitleCourse: "Retail, Ecommerce and Supply Chain Domain",
      },
    ],
    projectSection: [
      {
        id: 1,
        duration: "12 Hours",
        logo: "",
        heading:
          "Learn and develop classification techniques for the digital transformation of banking",
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+675+(1)-min.png",
        para: "JPMorgan offers tax-friendly insurance choices. You can help them forecastinsurance premiums. Targeted marketing using your random forest algorithm skills can help obtain better premium values.",
        toolImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/morgan-strip.webp",
        learnMore: "Learn more",
      },
      {
        id: 2,
        duration: "17 Hours",
        logo: "",
        heading:
          "Building a content recommendation model on the basis of regional viewer categorization",
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+674-min.png",
        para: "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP.",
        toolImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Netfliix.webp",
        learnMore: "Learn more",
      },
      {
        id: 3,
        duration: "14 Hours",
        logo: "",
        heading:
          "Understanding in-depth about logging while drilling (LWD) technique",
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+683-min.png",
        para: "Saudi Aramco company is working onthe development of high-efficiency drilling models. Use the bright sides of big data analytics to identify the most cost-effective and highly productive drilling sites.",
        toolImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/saudi-aramco-strip.webp",
        learnMore: "Learn more",
      },
      {
        id: 4,
        duration: "19 Hours",
        logo: "",
        heading:
          "Career progression planning of employees with workforce defections & efficiency",
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+688-min.png",
        para: "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities.",
        toolImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/IBM-Strip.webp",
        learnMore: "Learn more",
      },
    ],
    project: [
      {
        id: 1,
        domain: "HR Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/1-1.png",
        SDesc:
          "  IBM intends to boost their HR department by identifying employees' masked inconsistency...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "HR Domain",
        Title:
          "Career progression planning of employees with workforce defections & efficiency",
        LDesc:
          "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities.",
      },
      {
        id: 2,
        domain: "Marketing Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/swiggy.png",
        SDesc:
          "  Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "Marketing Domain",
        Title:
          "Descriptive study of trends and irregularities with prediction analysis for conversion.",
        LDesc:
          "Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions",
      },
      {
        id: 3,
        domain: "Manufacturing Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-3.png",
        SDesc:
          "  This project helped BOSCH to predict their internal failures  by production line dataset analysis...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Manufacturing Domain",
        Title:
          "Condition-based preventative maintenance and fault prediction in depth",
        LDesc:
          "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills.",
      },
      {
        id: "BMW",
        domain: "Sales Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-2.png",
        SDesc:
          "      BMW allows existing customers to sell used cars but many competitors are now offering better resale values...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "Sales Domain",
        Title: "Forecasting future sales with trends and price maximization",
        LDesc:
          "BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects.",
      },
      {
        id: 5,
        domain: "Healthcare Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/5(2).png",
        SDesc:
          "  Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Healthcare Domain",
        Title:
          "Understanding covid-19 cases and fatality rate by time series forecasting",
        LDesc:
          "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.",
      },
      {
        id: 6,
        domain: "E-Commerce Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/4(2).png",
        SDesc:
          "   Amazon has made a goal to identify the most successful consumer electronic products...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "E-Commerce Domain",
        Title:
          "Recommendation system with customer lifetime value analysis (CLV)",
        LDesc:
          "Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.",
      },
      {
        id: 7,
        domain: "Entertainment Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/9-1.png",
        SDesc:
          "  Netflix is a global entertainment video streaming site. They offer content in various regional languages...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title:
          "Building a content recommendation model on the basis of regional viewer categorization",
        ProjectTitle: "Media Domain",

        LDesc:
          "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP.",
      },
    ],
    newsdata: [
      {
        id: 1,
        domain: "HR Domain HR Domain HR Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/1-1.png",
        SDesc: "  27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "HR Domain",
        Title:
          "Career progression planning of employees with workforce defections & efficiency",
        LDesc:
          "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities.",
      },
      {
        id: 2,
        domain: "Marketing Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/swiggy.png",
        SDesc: "  27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "Marketing Domain",
        Title:
          "Descriptive study of trends and irregularities with prediction analysis for conversion.",
        LDesc:
          "Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions",
      },
      {
        id: 3,
        domain: "Manufacturing Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-3.png",
        SDesc: "  27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Manufacturing Domain",
        Title:
          "Condition-based preventative maintenance and fault prediction in depth",
        LDesc:
          "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills.",
      },
      {
        id: "BMW",
        domain: "Sales Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-2.png",
        SDesc: " 27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "Sales Domain",
        Title: "Forecasting future sales with trends and price maximization",
        LDesc:
          "BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects.",
      },
      {
        id: 5,
        domain: "Healthcare Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/5(2).png",
        SDesc: "  27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Healthcare Domain",
        Title:
          "Understanding covid-19 cases and fatality rate by time series forecasting",
        LDesc:
          "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.",
      },
      {
        id: 6,
        domain: "E-Commerce Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/4(2).png",
        SDesc: " 27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "E-Commerce Domain",
        Title:
          "Recommendation system with customer lifetime value analysis (CLV)",
        LDesc:
          "Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.",
      },
      {
        id: 7,
        domain: "Entertainment Domain",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/9-1.png",
        SDesc: " 27 Aug 2023",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title:
          "Building a content recommendation model on the basis of regional viewer categorization",
        ProjectTitle: "Media Domain",

        LDesc:
          "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP.",
      },
    ],
    Certificate: {
      degreeCertificate: {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ibm-min.webp",
        title: "Course Completion Certificate from IBM",
        para: [
          "Complete your training with the internationally recognized certificate.",
          "Validate your Data Science and AI skills with IBM Course Completion Certificate.",
          "Get acknowledged in IT sector by adding IBM Certificate to your profile.",
        ],
      },
      microCertificate: {
        id: 2,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Azure%2BAI%2BFundamentals.png",
        title: "Certification in Collaboration with Microsoft",
        para: [
          "Industry-certified Microsoft certificates",
          "Gain expertise & get recognized worldwide",
          "Boost job opportunities and earnings with Microsoft’s certification",
        ],
      },
      projectCertificate: {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Certification-min.webp",
        title: "Capstone Project Certificate from IBM",
        para: [
          "Globally recognized IBM certification based on industrial-level projects.",
          "Work on 1 capstone project certified by IBM.",
          "Individualized project experience with easy access to premium job opportunities.",
        ],
      },
    },
    syllabusDesc:
      "Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All sessions are covered practically with real-time industrial projects and case studies.",
    popupHead: "Download Data science Course Brochure",
    syllabusHead: [
      "Foundation Track (L1)",
      "Python Programming (L2)",
      "Statistics & Basic Machine Learning (L3)",
      "Data Analytics Tools (L4)",
      // "Term 5 :- Deployment (AWS+Azure)( 25 ECTS Credits) ",
    ],
    MasterSyllabusDefault: [
      {
        Module0: {
          title: "Preparatory Classes (Programming + Maths)",
          content: [
            {
              chap: {
                title: "Topic 1 :- Cohort Orientation",
                desc: [
                  "A brief introduction to tools related to data ",
                  "Learn about particular real-time projects and Capstone projects ",
                  "Data and its impact on career opportunities",
                  "Utilizing data, to enhance industrial operations and management",
                ],
              },
            },

            {
              chap: {
                title: "Topic 2 :- Fundamentals of programming ",
                desc: [
                  "Introduction to Anaconda & Jupyter notebook ",

                  "Flavors of python Introduction to Git, GitHub ",
                  "Python Fundamentals ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Fundamentals of Statistics",
                desc: [
                  "Mean, Median, Mode .",
                  "Standard Deviation, Average. Probability, permutations, and combinations ",
                  "Introduction to Linear Algebra",
                ],
              },
            },
          ],
          id: 0,
          open: true,
        },
      },
    
     
    ],

    masterSyllabus: {
      "Foundation Track (L1)": [
        {
          Module0: {
            title: "Preparatory Classes (Programming + Maths)",
            content: [
              {
                chap: {
                  title: "Topic 1 :- Cohort Orientation",
                  desc: [
                    "A brief introduction to tools related to data ",
                    "Learn about particular real-time projects and Capstone projects ",
                    "Data and its impact on career opportunities",
                    "Utilizing data, to enhance industrial operations and management",
                  ],
                },
              },

              {
                chap: {
                  title: "Topic 2 :- Fundamentals of programming ",
                  desc: [
                    "Introduction to Anaconda & Jupyter notebook ",

                    "Flavors of python Introduction to Git, GitHub ",
                    "Python Fundamentals ",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 3 :- Fundamentals of Statistics",
                  desc: [
                    "Mean, Median, Mode .",
                    "Standard Deviation, Average. Probability, permutations, and combinations ",
                    "Introduction to Linear Algebra",
                  ],
                },
              },
            ],
            id: 0,
            open: true,
          },
        },
      ],
      "Python Programming (L2)": [
        {
          Module0: {
            title: "Python Programming",
            content: [
              {
                chap: {
                  title: "Topic 1 :- Python Programming ",
                  desc: [
                    " Programming Basics & Environment Setup.",
                    " Python Programming Overview",
                    "  Python Data Types",
                    "  Functions And Modules ,Class hands-on: 8+ Programs to be covered in the functions, Lambda, modules, Generators, and Packages class",

                    " File I/O And Exceptional Handling and Regular Expression,Class hands-on: 10+ Programs to be covered in class from File IO, Reg-ex and exception handling.",
                    "Data Analysis Using Numpy",
                    " Data Analysis Using Pandas",
                    "Data Visualization using Matplotlib",
                    ". Data Visualization using Seaborn,3 Case Study on Numpy, Pandas, Matplotlib 1 Case Study on Pandas And Seaborn",
                  ],
                },
              },
            ],
            id: 1,
            open: true,
          },
        },
      ],
      "Statistics & Basic Machine Learning (L3)": [
        {
          Module0: {
            title: "Statistics",
            content: [
              {
                chap: {
                  // title: "Module 1 :- Statistics",
                  desc: [
                    "Fundamentals of Math and Probability",
                    "All about Population & Sample",
                    "Discrete Probability Distributions - Binomial, Poisson etc",
                    "Introduction to Statistics, Statistical Thinking",
                    " Descriptive Statistics",
                    " Inferential Statistics",
                    " Hypothesis Testing",
                    "Linear Algebra",
                    "Data Processing & Exploratory Data Analysis",
                    "EDA,Statistics Assignments: Total 4 practice sets and Assignments from Statistics",
                  ],
                },
              },
             
            ],
            id: 2,
            open: true,
          },
        },

        {
          Module0: {
            title: "Machine Learning",
            content: [
             
              {
                chap: {
                  // title: "Module 1 :- Machine Learning",
                  desc: [
                    "Introduction to Machine Learning",
                    "Regression and Classification Models",
                    "Linear Regression Model",
                    "Data Preprocessing",
                    "Encoding the Data",
                    "Logistic Regression Model",
                    "Evaluation Metrics for Classification model",
                    "K Nearest Neighbours Model",
                    "Decision Tree Model",
                    "Random Forest Model",
                    "Hyperparameter Tuning",
                    "Naive Baye’s Model,Case Study on Kart Model Business & Random Forest",
                  ],
                },
              },
            ],
            id: 2,
            open: false,
          },
        },

      ],
      "Data Analytics Tools (L4)": [
       


        {
          Module0: {
            title: "SQL",
            content: [
              {
                chap: {
                  // title: "Module 1 :- SQL",
                  desc: [
                    "SQL and RDBMS",
                    "Advance SQL",
                    "NoSQL, HBase & MongoDB",
                    "JSON Data & CRUD",
                    "Programming with SQL",
                  ],
                },
              },
            
            
             
            ],
            id: 3,
            open: true,
          },
        },

        {
          Module0: {
            title: "Power BI",
            content: [
              {
                chap: {
                  // title: "Module 1 :- SQL",
                  desc: [
                    "Getting Started With Power BI",
                    "Programming with Power BI.",
                  
                  ],
                },
              },
            
            
             
            ],
            id: 3,
            open: false,
          },
        },
        {
          Module0: {
            title: "Big Data & Spark Analytics",
            content: [
              {
                chap: {
                  // title: "Module 1 :- SQL",
                  desc: [
                    "Introduction To Hadoop & Big Data",
                    "What is Spark",
                    "Getting to know PySpark Hands-on: Map reduce Use Case : Youtube data analysis & Spark RDD programming.", 
                  
                  ],
                },
              },
            
            
             
            ],
            id: 3,
            open: false,
          },
        },
        {
          Module0: {
            title: "Time Series",
            content: [
              {
                chap: {
                  // title: "Module 1 :- SQL",
                  desc: [
                    "Introduction to Time Series Forecasting",
                    "Introduction to ARIMA Models,Case Study on Time series classification of smartphone data to predict user behavior, Performing Time Series Analysis on Stock Prices & Time series forecasting of sales data",
                  
                  ],
                },
              },
            
            
             
            ],
            id: 3,
            open: false,
          },
        },

        {
          Module0: {
            title: "Excel",
            content: [
              {
                chap: {
                  // title: "Module 1 :- SQL",
                  desc: [
                    "Getting started with Excel",
                    "Using Excel Toolbars: Hiding, Displaying, and Moving Toolbars",
                    "Switching Between Sheets in a Workbook",
                    "Entering Date Values and using AutoComplete",
                    "Inserting and Deleting Cells, Rows, and Columns",
                    "Working with the Forms Menu",
                    "Creating & Working with Charts",
                    "Changing a Chart Type and Working with Pie Charts",
                    "Data Analysis & Pivot Tables",
                  
                  ],
                },
              },
            
            
             
            ],
            id: 3,
            open: false,
          },
        },
      ],
   
    },
    masterSyllabusMobile: [
      {
        Module0: {
          title: "L1 :- Preparatory Classes (Programming + Maths)",
          content: [
            {
              chap: {
                title: "Topic 1 :- Cohort Orientation",
                desc: [
                  "A brief introduction to tools related to data ",
                  "Learn about particular real-time projects and Capstone projects ",
                  "Data and its impact on career opportunities",
                  "Utilizing data, to enhance industrial operations and management",
                ],
              },
            },

            {
              chap: {
                title: "Topic 2 :- Fundamentals of programming ",
                desc: [
                  "Introduction to Anaconda & Jupyter notebook ",

                  "Flavors of python Introduction to Git, GitHub ",
                  "Python Fundamentals ",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Fundamentals of Statistics",
                desc: [
                  "Mean, Median, Mode .",
                  "Standard Deviation, Average. Probability, permutations, and combinations ",
                  "Introduction to Linear Algebra",
                ],
              },
            },
          ],
          id: 0,
          open: true,
        },
      },
      {
        Module0: {
          title: "L2 :- Python Programming",
          content: [
            {
              chap: {
                title: "Topic 1 :- Python Programming ",
                desc: [
                  " Programming Basics & Environment Setup.",
                  " Python Programming Overview",
                  "  Python Data Types",
                  "  Functions And Modules ,Class hands-on: 8+ Programs to be covered in the functions, Lambda, modules, Generators, and Packages class",

                  " File I/O And Exceptional Handling and Regular Expression,Class hands-on: 10+ Programs to be covered in class from File IO, Reg-ex and exception handling.",
                  "Data Analysis Using Numpy",
                  " Data Analysis Using Pandas",
                  "Data Visualization using Matplotlib",
                  ". Data Visualization using Seaborn,3 Case Study on Numpy, Pandas, Matplotlib 1 Case Study on Pandas And Seaborn",
                ],
              },
            },
          ],
          id: 1,
          open: true,
        },
      },
      {
        Module0: {
          title: " L3 :- Statistics and Machine Learning ",
          content: [
            {
              chap: {
                title: "Topic 1 :- Statistics",
                desc: [
                  "Fundamentals of Math and Probability",
                  "All about Population & Sample",
                  "Discrete Probability Distributions - Binomial, Poisson etc",
                  "Introduction to Statistics, Statistical Thinking",
                  " Descriptive Statistics",
                  " Inferential Statistics",
                  " Hypothesis Testing",
                  "Linear Algebra",
                  "Data Processing & Exploratory Data Analysis",
                  "EDA,Statistics Assignments: Total 4 practice sets and Assignments from Statistics",
                ],
              },
            },

            {
              chap: {
                title: "Topic 2 :- Machine Learning",
                desc: [
                  "Introduction to Machine Learning",
                  "Regression and Classification Models",
                  "Linear Regression Model",
                  "Data Preprocessing",
                  "Encoding the Data",
                  "Logistic Regression Model",
                  "Evaluation Metrics for Classification model",
                  "K Nearest Neighbours Model",
                  "Decision Tree Model",
                  "Random Forest Model",
                  "Hyperparameter Tuning",
                  "Naive Baye’s Model,Case Study on Kart Model Business & Random Forest",
                ],
              },
            },
           
          ],
          id: 2,
          open: true,
        },
      },

      {
        Module0: {
          title: "L4 :-  Data Analytics Tools",
          content: [
            {
              chap: {
                title: "Topic 1 :- SQL",
                desc: [
                  "SQL and RDBMS",
                  "Advance SQL",
                  "NoSQL, HBase & MongoDB",
                  "JSON Data & CRUD",
                  "Programming with SQL",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Power BI",
                desc: [
                  "Getting Started With Power BI",
                  "Programming with Power BI.",
                
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Big Data & Spark Analytics",
                desc: [
                  "Introduction To Hadoop & Big Data",
                  "What is Spark",
                  "Getting to know PySpark Hands-on: Map reduce Use Case : Youtube data analysis & Spark RDD programming.", 
                
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Time Series",
                desc: [
                  "Introduction to Time Series Forecasting",
                  "Introduction to ARIMA Models,Case Study on Time series classification of smartphone data to predict user behavior, Performing Time Series Analysis on Stock Prices & Time series forecasting of sales data",
                
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Excel",
                desc: [
                  "Getting started with Excel",
                  "Using Excel Toolbars: Hiding, Displaying, and Moving Toolbars",
                  "Switching Between Sheets in a Workbook",
                  "Entering Date Values and using AutoComplete",
                  "Inserting and Deleting Cells, Rows, and Columns",
                  "Working with the Forms Menu",
                  "Creating & Working with Charts",
                  "Changing a Chart Type and Working with Pie Charts",
                  "Data Analysis & Pivot Tables",
                
                ],
              },
            },
          
           
          ],
          id: 3,
          open: true,
        },
      },
    ],
    // syllabus: [
    //   {
    //     Module0: {
    //       title: "Module 0 :- Preparatory Classes (Programming + Maths)",
    //       content: [
    //         {
    //           chap: {
    //             title: "Topic 1 :- Cohort Orientation",
    //             desc: [
    //               "A brief introduction to tools related to data ",
    //               "Learn about particular real-time projects and Capstone projects ",
    //               "Data and its impact on career opportunities",
    //               "Utilizing data, to enhance industrial operations and management",
    //             ],
    //           },
    //         },

    //         {
    //           chap: {
    //             title: "Topic 2 :- Fundamentals of programming ",
    //             desc: [
    //               "Introduction to Anaconda & Jupyter notebook ",

    //               "Flavors of python Introduction to Git, GitHub ",
    //               "Python Fundamentals ",
    //             ],
    //           },
    //         },
    //         {
    //           chap: {
    //             title: "Topic 3 :- Fundamentals of Statistics",
    //             desc: [
    //               "Mean, Median, Mode .",
    //               "Standard Deviation, Average. Probability, permutations, and combinations ",
    //               "Introduction to Linear Algebra",
    //             ],
    //           },
    //         },
    //       ],
    //       id: 0,
    //       open: true,
    //     },
    //   },
    //   {
    //     Module0: {
    //       title: "Term 1 :- Python Programming",
    //       content: [
    //         {
    //           chap: {
    //             title: "Module 1 :- Python Programming ",
    //             desc: [
    //               " Programming Basics & Environment Setup.",
    //               " Python Programming Overview",
    //               "  Python Data Types",
    //               "  Functions And Modules ,Class hands-on: 8+ Programs to be covered in the functions, Lambda, modules, Generators, and Packages class",

    //               " File I/O And Exceptional Handling and Regular Expression,Class hands-on: 10+ Programs to be covered in class from File IO, Reg-ex and exception handling.",
    //               "Data Analysis Using Numpy",
    //               " Data Analysis Using Pandas",
    //               "Data Visualization using Matplotlib",
    //               ". Data Visualization using Seaborn,3 Case Study on Numpy, Pandas, Matplotlib 1 Case Study on Pandas And Seaborn",
    //             ],
    //           },
    //         },
    //       ],
    //       id: 1,
    //       open: false,
    //     },
    //   },
    //   {
    //     Module0: {
    //       title: "Term 2 :- Statistics & Basic Machine Learning",
    //       content: [
    //         {
    //           chap: {
    //             title: "Module 1 :- Statistics",
    //             desc: [
    //               "Fundamentals of Math and Probability",
    //               "All about Population & Sample",
    //               "Discrete Probability Distributions - Binomial, Poisson etc",
    //               "Introduction to Statistics, Statistical Thinking",
    //               " Descriptive Statistics",
    //               " Inferential Statistics",
    //               " Hypothesis Testing",
    //               "Linear Algebra",
    //               "Data Processing & Exploratory Data Analysis",
    //               "EDA,Statistics Assignments: Total 4 practice sets and Assignments from Statistics",
    //             ],
    //           },
    //         },
    //         {
    //           chap: {
    //             title: "Module 2 :- Machine Learning",
    //             desc: [
    //               "Introduction to Machine Learning",
    //               "Regression and Classification Models",
    //               "Linear Regression Model",
    //               "Data Preprocessing",
    //               "Encoding the Data",
    //               "Logistic Regression Model",
    //               "Evaluation Metrics for Classification model",
    //               "K Nearest Neighbours Model",
    //               "Decision Tree Model",
    //               "Random Forest Model",
    //               "Hyperparameter Tuning",
    //               "Naive Baye’s Model,Case Study on Kart Model Business & Random Forest",
    //             ],
    //           },
    //         },
    //       ],
    //       id: 2,
    //       open: false,
    //     },
    //   },
    //   {
    //     Module0: {
    //       title: "Term 3 :- Data Analytics Tools",
    //       content: [
    //         {
    //           chap: {
    //             title: "Module 1 :- SQL",
    //             desc: [
    //               "SQL and RDBMS",
    //               "Advance SQL",
    //               "NoSQL, HBase & MongoDB",
    //               "JSON Data & CRUD",
    //               "Programming with SQL",
    //             ],
    //           },
    //         },
    //         {
    //           chap: {
    //             title: "Module 2 :- PowerBI",
    //             desc: [
    //               "Getting Started With Power BI",
    //               " Programming with Power BI",
    //             ],
    //           },
    //         },
    //         {
    //           chap: {
    //             title: "Module 3 :- Big Data & Spark Analytics",
    //             desc: [
    //               " Introduction To Hadoop & Big Data",
    //               "What is Spark",
    //               " Getting to know PySpark Hands-on: Map reduce Use Case : Youtube data analysis & Spark RDD       programming",
    //             ],
    //           },
    //         },
    //         {
    //           chap: {
    //             title: "Module 4 :- Time Series",
    //             desc: [
    //               " Introduction to Time Series Forecasting",
    //               "Introduction to ARIMA Models,Case Study on Time series classification of smartphone data to predict user behavior, Performing Time Series Analysis on Stock Prices & Time series forecasting of sales data",
    //             ],
    //           },
    //         },
    //       ],
    //       id: 3,
    //       open: false,
    //     },
    //   },
    //   {
    //     Module0: {
    //       title: "Term 4 :- Excel",
    //       content: [
    //         {
    //           chap: {
    //             title: "",
    //             desc: [
    //               "Getting started with Excel",
    //               "Using Excel Toolbars: Hiding, Displaying, and Moving Toolbars",
    //               "Switching Between Sheets in a Workbook",
    //               "Entering Date Values and using AutoComplete",
    //               "Inserting and Deleting Cells, Rows, and Columns",
    //               "Working with the Forms Menu",
    //               "Creating & Working with Charts",
    //               "Changing a Chart Type and Working with Pie Charts",
    //               "Data Analysis & Pivot Tables",
    //             ],
    //           },
    //         },
    //       ],
    //       id: 4,
    //       open: false,
    //     },
    //   },
    // ],
    faq: [
      {
        id: 1,
        sectionName: "Course Related",
        data: [
          {
            id: 0,
            ques: "What are the prerequisites for the Data Analytics Program?",
            ans: "There are no prerequisites for this Data Analytics certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
            open: true,
          },
          {
            id: 1,
            ques: "What if I miss a few classes due to an emergency?",
            ans: "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a Flexi Subscription in the Data Analytics Program?",
            ans: `Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of the Data Analytics Program?",
            ans: `The duration of this Data Analytics Course is about 6 months (180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on weekdays and weekend batches.
              Weekday batch – 5 months, Monday to Friday – 2 hours/day,
              Weekend batch – 6.5 months, Saturday & Sunday – 3.5 hours/day.`,
            open: false,
          },
          {
            id: 4,
            ques: "What is the mode of Data Analytics training at Learnbay?",
            ans: "We provide both classroom and online Data Analytics training modes. Based on your requirement, you can choose your preferred mode.",
            open: false,
          },
          {
            id: 5,
            ques: "How can I opt for a Hybrid mode of learning?",
            ans: "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions.",
            open: false,
          },
          ,
        ],
      },
      {
        id: 2,
        sectionName: "Domain Electives",
        data: [
          {
            id: 0,
            ques: "What is domain specialization?",
            ans: "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices.",
            open: true,
          },
          {
            id: 1,
            ques: "What are the available elective domain options?",
            ans: "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc.",
            open: false,
          },
          {
            id: 2,
            ques: "Which domain elective is best suited for me?",
            ans: `You can select your domain based on your prior work experience, academics, and career goals.`,
            open: false,
          },
          {
            id: 3,
            ques: "Why is domain specialization important?",
            ans: "After enrolling in the AI and ML with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge which is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset’s attributes. Furthermore, the model will be more observable in a real-world situation.",
            open: false,
          },
          {
            id: 4,
            ques: "Can I select multiple domain electives and do I need to pay extra charges?",
            ans: "You can select up to 4 domain electives based on your interest and career goals. No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum.",
            open: false,
          },
          {
            id: 5,
            ques: "What if I don’t have any prior experience in any domain?",
            ans: "If you don’t have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects.",
            open: false,
          },
          {
            id: 6,
            ques: "Can I change my domain electives later?",
            ans: "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration.",
            open: false,
          },
        ],
      },
      {
        id: 3,
        sectionName: "Payments and Scholarships",
        data: [
          {
            id: 0,
            ques: "What is the total fee for the Data Analytics Program?",
            ans: "We offer industry-specific full-stack Data Analytics modules, via which you learn the respective industry’s best practices.The total program fee for the Data Analytics Program is INR 79,000 + 18% GST.",
            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for INR 79,000 + 18% GST ?",
            ans: "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 7,768/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: "Is there any scholarship/discount available for the Data Analytics Program? What is Group Discount?",
            ans: `Learnbay offers a 15 – 20% scholarship for early birds occasionally.
              Please check our websites or contact our sales team to know more about the applicable discounts.
              
              Group Discount :
              Group Discount is applicable only if you’re joining with your friends.
              5% extra discount: Group of 2,
              8% extra discount: Group of 3,
              Max 10% discount: Group of 4+.`,
            open: false,
          },
          {
            id: 3,
            ques: "What is the refund policy for the Data Analytics Program at Learnbay?",
            ans: "Candidates are advised to read  ",
            linkText1: "Learnbay’s Refund/Cancellation Policy",
            link1: "/refund-cancellation-policy",
            ansAfter: " before enrolling in the program.",
            link: true,

            open: false,
          },
        ],
      },
      {
        id: 4,
        sectionName: "Capstone and Real-Time Projects",
        data: [
          {
            id: 0,
            ques: "How many real-time projects/case studies will be there?",
            ans: "We have a set of 8 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc.",
            linkText1: " Click here to download the list of the projects.",
            link1:
              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf",
            link: true,

            open: true,
          },
          {
            id: 1,
            ques: "How will the project be executed?",
            ans: "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance.",
            open: false,
          },
        ],
      },
      {
        id: 5,
        sectionName: "Certification",
        data: [
          {
            id: 0,
            ques: "Is there any accredited certification after course completion?",
            ans: "Yes, you will be awarded IBM accredited Data Analytics Certificate on successful course completion.",
            open: true,
          },
        ],
      },
      {
        id: 6,
        sectionName: "Job Assistance",
        data: [
          {
            id: 0,
            ques: "What’s the eligibility for a job assistance program at Learnbay?",

            ans: "You should have completed the course with : A minimum score of 70% in assessments. Should have completed the assignments and case studies. Worked and successfully completed the minimum recommended number of real-time projects.",
            open: true,
          },
          {
            id: 1,
            ques: "How many interview calls will I get at Learnbay?",
            ans: "You’ll be provided 5 interview calls after the completion of the course.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a job-readiness program?",
            ans: `Job-readiness program helps you prepare for interviews which include:
          Resume preparation sessions,
          Preparing projects for a strong portfolio,
          Interview guidance and prep sessions,
          1:1 Mock interviews based on targeted companies and roles.`,
            open: false,
          },
          {
            id: 3,
            ques: "Will I get job referrals at Learnbay?",
            ans: "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies.",
            open: false,
          },
        ],
      },
      {
        id: 7,
        sectionName: "Mentorship",
        data: [
          {
            id: 0,
            ques: "Until when will the students get the facility of mentorship?",

            ans: "Our mentors will provide data science training to the students until the completion of the course.",
            open: true,
          },
          {
            id: 1,
            ques: "Can a Learnbay student choose to study from their desired mentor?",
            ans: "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors.",
            open: false,
          },
        ],
      },
      {
        id: 8,
        sectionName: "Support",
        data: [
          {
            id: 0,
            ques: "When is the job assistance provided at Learnbay and how long will I get it?",

            ans: "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company.",
            open: true,
          },
          {
            id: 1,
            ques: "How long will I get Job referrals?",
            ans: "You’ll be provided with job assistance after the completion of the course for a period of 1 year.",
            open: false,
          },
        ],
      },
    ],
  },
];
