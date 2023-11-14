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

export const FSSPDataScienceCourseData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "On-Demand Doubt Session",
        para: "Clear your doubts with industry experts & get real-time solutions",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "IBM+ Microsoft Certificate",
        para: "Enhance skills with Microsoft & IBM course certificate",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png",
        height: "50",
        width: "53",
        heading: "Peer Learning & Networking",
        para: "Learn & collaborate with peers for growth & opportunities",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png",
        height: "40",
        width: "40",
        heading: "Design For professionals",
        para: "Boost your career growth with hands-on software training",
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
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
      },
      {
        id: 1,
        icon: <AiOutlineFundProjectionScreen/>,
        heading: "HR & Marketing",
        para: "For recruiter, talent acquisition specialist and marketing pros.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
      },
      {
        icon: <MdOutlinePrecisionManufacturing/>,
        heading: "Manufacturing",
        para: "For production manager, quality control inspector and engineers.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
      },
    ],
    fourthSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png",
        desc: "3+ years of career service access",
      },
      {
        id: 2,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png",
        desc: "6 mock interviews with industry leaders",
      },
      {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png",
        desc: "Resume build up session",
      },
      {
        id: 4,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png",
        desc: "100% placement support",
      },
    ],
    domainSection: [
      {
        id: 1,
        p1: "#1",
        p2: "BFSI",
        btn: "Download Brochure",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "Designed for executive-level BFSI professionals, accountant, etc.",
          "Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
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
          "Work on 20+ real time case studies and assignments",
          "For production manager, quality control inspector, manufacturing engineer etc.",
          "Discover cutting-edge tech like AI and data science, and develop strategic skills as a business or data analyst",
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
          "Work on 20+ real time case studies and assignments",
          "For petroleum engineers, environmental specialists, operation managers etc.",
          "Master your data analysis skills and create a dynamic dashboard to describe your insights",
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
          "Work on 20+ real time case studies and assignments",
          "For pharmacists, therapists, health administrators, etc.",
          "Achieve success in a competitive market by utilizing advanced tools and methodology to leverage technology and gain a competitive edge",
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
          "Work on 20+ real time case studies and assignments",
          "Learn Supply Chain, E-Commerce & Retail analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf",
        TitleCourse: "Retail, Ecommerce and Supply Chain Domain",
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
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
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
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/tinder.png",
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
          "Building a content recommendation modNOel on the basis of regional viewer categorization",
        ProjectTitle: "Media Domain",

        LDesc:
          "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP.",
      },
    ],
    domainSection: [
      {
        id: 1,
        p1: "#1",
        p2: "Cloud And Devops",
        btn: "Download Brochure",
        desc: [
          "Work on 14+ real-time projects & case studies",
          "Designed for software developers, devops engineers, project managers etc",

          "Upgrade your software skills with cloud infrastructure, automation, team collaboration and industry-relevant tools and techniques",
        ],
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf",
        TitleCourse: "BFSI (Banking, Finance, Services and Insurance) Domain",
      },
      {
        id: 2,
        p1: "#2",
        p2: "Product Management",
        desc: [
          "Work on 14+ real-time projects & case studies",
          "Designed for product manager, business analyst software engineers, etc",
          "Learn software development skills and product management strategies for creating and managing successful tech products",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
        TitleCourse: "Manufacturing, Mechanical and Telecom Domain",
      },

      {
        id: 3,
        p1: "#3",
        p2: "BlockChain",
        desc: [
          "Work on 14+ real-time projects & case studies",
          "Designed for software developers, blockchain developers, IT professionals, etc",

          "Master tech by learning advanced software  devlopment skills & specialized blockchain knowledge & applications",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf",
        TitleCourse: "Energy, Oil and Gas Domain",
      },

      {
        id: 4,
        p1: "#4",
        p2: "MERN Stack",
        desc: [
          "Work on 14+ real-time projects & case studies",
          "Designed for full stack developer, web developer, software engineer, etc",
          "Acquire a diverse range of technical skills required for full stack web development using MERN stack",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
        TitleCourse: "Healthcare, Pharma and Clinical Research Domain",
      },
    ],
    project: [
      {
        id: 1,
        domain: "Design Google Drive",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/Google.png",
        SDesc:
          " Design a personal Google Drive for secure file storage excluding features like starred files, recently-accessed  files, and...",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "",
        Title: "Design Google Drive",
        LDesc:
          "Design a personal Google Drive for secure file storage, excluding features like starred files, recently-accessed files, and sharing entities. The focus is on creating a functional platform dedicated to individual storage needs.",
      },
      {
        id: 2,
        domain: " Design Tinder",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/tinder.png",
        SDesc:
          "Design Tinder with the ability to undo left swipes, Super Like for increased visibility, and real-time match notifications...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "",
        Title: "Design Tinder",
        LDesc:
          "Design Tinder with the ability to undo left swipes, Super Like for increased visibility, and real-time match notifications. Excludes idle notifications and restricts undo to the last swipe.",
      },
      {
        id: 3,
        domain: "Design Facebook News feed ",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/facebook.png",
        SDesc:
          "Design the core functionality of a Facebook-like news feed, including real-time loading and updating, as well as status...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: " ",
        Title: "Design Facebook News feed",
        LDesc:
          "Design the core functionality of a Facebook-like news feed, including real-time loading and updating, as well as status update posting. Emphasis on feed generation, refreshing, and incorporating new posts, while disregarding API specifics and content details.",
      },
      {
        id: "BMW",
        domain: "Design Airnub",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/airbnb.png",
        SDesc:
          "Allow multiple users to view the same property concurrently for a specific date range. However, once a user initiates the...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "",
        Title: "Design Airnub",
        LDesc:
          "Allow multiple users to view the same property concurrently for a specific date range. However, once a user initiates the booking process, the property's availability should be updated to reflect that it is no longer available for those dates if another user attempts to book it.",
      },
      {
        id: 5,
        domain: "Design Slack",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/slack.png",
        SDesc:
          "Design the core messaging functionality for both one-on-one and group channels within an organization, excluding  additional...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "",
        Title: "Design Slack",
        LDesc:
          "Design the core messaging functionality for both one-on-one and group channels within an organization, excluding additional features such as channel settings. Focus on facilitating communication in a streamlined manner.",
      },
      {
        id: 6,
        domain: "Design Reddit",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/reddit.png",
        SDesc:
          "Design the Reddit API, focusing on core functionalities for seamless interaction with the platform. This includes features...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "",
        Title: "Design Reddit",
        LDesc:
          "Design the Reddit API, focusing on core functionalities for seamless interaction with the platform. This includes features such as user authentication, post retrieval, commenting, voting, and subreddit management. Excludes advanced features and non-essential functionalities.",
      },
      {
        id: 7,
        domain: "Entertainment Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/bookmy+show.png",
        SDesc:
          "Develop an intuitive and efficient API for BookMyShow that offers user authentication, comprehensive movie/show listings, seat...",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title: "Entertainment Domain",
        ProjectTitle: "",

        LDesc:
          "Develop an intuitive and efficient API for BookMyShow that offers user authentication, comprehensive movie/show listings, seat selection, secure booking, streamlined payment processing, and convenient ticket management. ",
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
      "Programming Fundamentals (L1)",
      "Data Structures and Algorithm (L2)",
      "CS Fundamentals and DBMS (L3)",
      "System Design (L4)",
      "Specialization (L5)",
      "Deployment (L6)",
    ],
    MasterSyllabusDefault: [
      {
        Module0: {
          title: "Module 0 :- Programming Basics, Data Types and Code Flow",
          content: [
            {
              chap: {
                title:
                  "Module 1 :- Programming Basics, Data Types and Code Flow",
                desc: [
                  "Why Programming",
                  "Simple use case where programming is required",
                  "How to Write simple psuedo code",
                  "Difference in different programming languages",
                  "Intro to Java and Development setup",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- If statement, Loops and Code flow",
                desc: [
                  "Java Basics",
                  "Writing code in Java",
                  "If statements Loops",
                  "Flow of basic code and best coding practices",
                ],
              },
            },
            {
              chap: {
                title: "Module 3 :- Input, Output and Exceptions",
                desc: [
                  "Taking Input and printing",
                  "Types of exception and handling them.",
                  "More on Java language fundamentals",
                  "JDK",
                  "JRE",
                ],
              },
            },
            {
              chap: {
                title: "Module 4 :- Functions",
                desc: [
                  "How functions work and how to make custom functions and work with them",
                  "Significance",
                  "Defining",
                  "Function return type",
                  "Passing arguments",
                ],
              },
            },
            {
              chap: {
                title: "Module 5 :- Objected Oriented Programming",
                desc: [
                  "Abstraction",
                  "Encapsulation",
                  "Inheritance",
                  "Polymorphism",
                  "Interfaces, Modifiers, Classes and Objects",
                ],
              },
            },
            {
              chap: {
                title: "Module 6 :- 2-D Matrix",
                desc: [],
              },
            },
            {
              chap: {
                title: "Module 7 :- 1-D Array",
                desc: [
                  "1-D Array (Defining & initializing, iterations, looping on Arrays)",
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
          title: "Term 2 :- DSA",
          content: [
            {
              chap: {
                title: "Module 1 :- Functions & Recursion",
                desc: [
                  "Significance",
                  " Defining",
                  "Function return type",
                  "Passing arguments",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Recursion",
                desc: ["Recursion", "Divide and Conquer"],
              },
            },
            {
              chap: {
                title: "Module 3 :- Linear Search and Binary Search",
                desc: ["Linear Search", "Binary Search", "Ternary Search"],
              },
            },
            {
              chap: {
                title: "Module 4 :- Time and space Complexity",
                desc: ["Best, worst & average case"],
              },
            },
            {
              chap: {
                title: "Module 5 :- Bit Manipulation",
                desc: [],
              },
            },
            {
              chap: {
                title: "Module 6 :- Two Pointers",
                desc: [],
              },
            },
            {
              chap: {
                title:
                  "Module 7 :- Sorting using Divide and Conquer and implementation",
                desc: [
                  "Sortings",
                  "Divide and Conquer",
                  "Merge Sort",
                  "Quick Sort",
                  "Comparator Sort",
                ],
              },
            },
            {
              chap: {
                title:
                  "Module 8 :- Simple Array Sorting and its implementation",
                desc: ["Sortings", "Bubble sort", "Insertion Sort"],
              },
            },
            {
              chap: {
                title: "Module 9 :- Strings",
                desc: [
                  "Pattern matching",
                  "Z Algorithm",
                  "KMP",
                  "String Hashing",
                  "Aho corasick",
                ],
              },
            },
            {
              chap: {
                title: "Module 10 :- ArrayList and Linked List - 1",
                desc: [
                  "Single Linked List (Insertion at positions in Linked List, iteration in Linked List, Deletion at position in Linked List, Linked List loops)",
                ],
              },
            },
            {
              chap: {
                title: "Module 11 :- Linked List - 2",
                desc: [
                  "Double Linked List (Double Linked list creation (prev pointer), iteration in Double Linked List, insertion at positions in Linked List, Deletion in Double Linked List)",
                ],
              },
            },
            {
              chap: {
                title: "Module 12 :- Linked List - 3",
                desc: [
                  "Circular Linked list (Circular Linked list creation,iteration in Circular Linked List, insertion at positions in Circular Linked List, Deletion in Circular Linked List",
                ],
              },
            },
            {
              chap: {
                title: "Module 13 :- Stack",
                desc: ["Intro", "Application and Implementation using Array"],
              },
            },
            {
              chap: {
                title: "Module 14 :- Applications of Stack",
                desc: ["Implementation using Linked list", "Stack as library"],
              },
            },
            {
              chap: {
                title: "Module 15 :- Queue",
                desc: [
                  "Implementation using Array",
                  "Implementation using Linked list",
                  "Queue as a library",
                ],
              },
            },
            {
              chap: {
                title: "Module 16 :- Applications of Queue",
                desc: [
                  "Implementation using Array",
                  "Implementation using Linked list",
                  "Queue as a library",
                ],
              },
            },
            {
              chap: {
                title: "Module 17 :- Maths",
                desc: [
                  "Modular Arithmetic, Modular Exponentiation, GCD, Modular Multiplicative Inverse",
                  " GCD, Primality Testing, Seive of Eratosthenes",
                ],
              },
            },
            {
              chap: {
                title: "Module 18 :- Analysis of Algorithm - Advance",
                desc: ["Greedy"],
              },
            },
            {
              chap: {
                title: "Module 19 :- Advance Data Structure",
                desc: [
                  "Tree -1 (Traversals)",
                  "Tree - 2 (Construction of tree from traversals, height of tree, mirror of tree)",
                  "Tree - 3 (LCA, Diameter)",
                  "BST",
                  "Heaps",
                  "Graph - 1 (BFS, DFS)",
                  "Graph - 2 (Cycles in Graph)",
                  "Graph - 3 (DFS, BFS on matrix)",
                  "Graph - 4 ([Dijkstra Algorithm, Flood Fill Algorithm])",
                  "Heaps",
                ],
              },
            },
            {
              chap: {
                title: "Module 20 :- Analysis of Algorithm - Advance",
                desc: [
                  "Dynamic Programming",
                  "Graph - 5 [Minimum Spanning Tree, Floyd Warshall, Topological Sorting]",
                ],
              },
            },
          ],
          id: 1,
          open: false,
        },
      },
    ],

    masterSyllabus: {
      "Programming Fundamentals (L1)": [
        {
          Module0: {
            title: "Module 0 :- Programming Basics, Data Types and Code Flow",
            content: [
              {
                chap: {
                  title:
                    "Topic 1 :- Programming Basics, Data Types and Code Flow",
                  desc: [
                    "Why Programming",
                    "Simple use case where programming is required",
                    "How to Write simple psuedo code",
                    "Difference in different programming languages",
                    "Intro to Java and Development setup",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 2 :- If statement, Loops and Code flow",
                  desc: [
                    "Java Basics",
                    "Writing code in Java",
                    "If statements Loops",
                    "Flow of basic code and best coding practices",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 3 :- Input, Output and Exceptions",
                  desc: [
                    "Taking Input and printing",
                    "Types of exception and handling them.",
                    "More on Java language fundamentals",
                    "JDK",
                    "JRE",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 4 :- Functions",
                  desc: [
                    "How functions work and how to make custom functions and work with them",
                    "Significance",
                    "Defining",
                    "Function return type",
                    "Passing arguments",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 5 :- Objected Oriented Programming",
                  desc: [
                    "Abstraction",
                    "Encapsulation",
                    "Inheritance",
                    "Polymorphism",
                    "Interfaces, Modifiers, Classes and Objects",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 6 :- 2-D Matrix",
                  desc: [],
                },
              },
              {
                chap: {
                  title: "Topic 7 :- 1-D Array",
                  desc: [
                    "1-D Array (Defining & initializing, iterations, looping on Arrays)",
                  ],
                },
              },
            ],
            id: 0,
            open: true,
          },
        },
      ],
      "Data Structures and Algorithm (L2)": [
        {
          Module0: {
            title: "DSA",
            content: [
              {
                chap: {
                  title: "Topic 1 :- Functions & Recursion",
                  desc: [
                    "Significance",
                    " Defining",
                    "Function return type",
                    "Passing arguments",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 2 :- Recursion",
                  desc: ["Recursion", "Divide and Conquer"],
                },
              },
              {
                chap: {
                  title: "Topic 3 :- Linear Search and Binary Search",
                  desc: ["Linear Search", "Binary Search", "Ternary Search"],
                },
              },
              {
                chap: {
                  title: "Topic 4 :- Time and space Complexity",
                  desc: ["Best, worst & average case"],
                },
              },
              {
                chap: {
                  title: "Topic 5 :- Bit Manipulation",
                  desc: [],
                },
              },
              {
                chap: {
                  title: "Topic 6 :- Two Pointers",
                  desc: [],
                },
              },
              {
                chap: {
                  title:
                    "Topic 7 :- Sorting using Divide and Conquer and implementation",
                  desc: [
                    "Sortings",
                    "Divide and Conquer",
                    "Merge Sort",
                    "Quick Sort",
                    "Comparator Sort",
                  ],
                },
              },
              {
                chap: {
                  title:
                    "Topic 8 :- Simple Array Sorting and its implementation",
                  desc: ["Sortings", "Bubble sort", "Insertion Sort"],
                },
              },
              {
                chap: {
                  title: "Topic 9 :- Strings",
                  desc: [
                    "Pattern matching",
                    "Z Algorithm",
                    "KMP",
                    "String Hashing",
                    "Aho corasick",
                  ],
                },
              },
              // {
              //   chap: {
              //     title: "Module 10 :- STL - 1",
              //     desc: [
              //       "Collections (Standard Template Library)",
              //       "Vector",
              //       "Set",
              //       "Iterator",
              //     ],
              //   },
              // },
              // {
              //   chap: {
              //     title: "Module 11 :- STL - 2",
              //     desc: [
              //       "Collections (Standard Template Library)",
              //       "Map",
              //       "Iterator",
              //     ],
              //   },
              // },
              // {
              //   chap: {
              //     title: "Module 12 :- STL - 3",
              //     desc: [
              //       "Collections (Standard Template Library)",
              //       "STL functions - Lower Bound",
              //       "STL functions upperbound",
              //       "Sort",
              //     ],
              //   },
              // },
              {
                chap: {
                  title: "Topic 10 :- ArrayList and Linked List - 1",
                  desc: [
                    "Single Linked List (Insertion at positions in Linked List, iteration in Linked List, Deletion at position in Linked List, Linked List loops)",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 11 :- Linked List - 2",
                  desc: [
                    "Double Linked List (Double Linked list creation (prev pointer), iteration in Double Linked List, insertion at positions in Linked List, Deletion in Double Linked List)",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 12 :- Linked List - 3",
                  desc: [
                    "Circular Linked list (Circular Linked list creation,iteration in Circular Linked List, insertion at positions in Circular Linked List, Deletion in Circular Linked List",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 13 :- Stack",
                  desc: ["Intro", "Application and Implementation using Array"],
                },
              },
              {
                chap: {
                  title: "Topic 14 :- Applications of Stack",
                  desc: [
                    "Implementation using Linked list",
                    "Stack as library",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 15 :- Queue",
                  desc: [
                    "Implementation using Array",
                    "Implementation using Linked list",
                    "Queue as a library",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 16 :- Applications of Queue",
                  desc: [
                    "Implementation using Array",
                    "Implementation using Linked list",
                    "Queue as a library",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 17 :- Maths",
                  desc: [
                    "Modular Arithmetic, Modular Exponentiation, GCD, Modular Multiplicative Inverse",
                    " GCD, Primality Testing, Seive of Eratosthenes",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 18 :- Analysis of Algorithm - Advance",
                  desc: ["Greedy"],
                },
              },
              {
                chap: {
                  title: "Topic 19 :- Advance Data Structure",
                  desc: [
                    "Tree -1 (Traversals)",
                    "Tree - 2 (Construction of tree from traversals, height of tree, mirror of tree)",
                    "Tree - 3 (LCA, Diameter)",
                    "BST",
                    "Heaps",
                    "Graph - 1 (BFS, DFS)",
                    "Graph - 2 (Cycles in Graph)",
                    "Graph - 3 (DFS, BFS on matrix)",
                    "Graph - 4 ([Dijkstra Algorithm, Flood Fill Algorithm])",
                    "Heaps",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 20 :- Analysis of Algorithm - Advance",
                  desc: [
                    "Dynamic Programming",
                    "Graph - 5 [Minimum Spanning Tree, Floyd Warshall, Topological Sorting]",
                  ],
                },
              },
            ],
            id: 1,
            open: true,
          },
        },
      ],
      "CS Fundamentals and DBMS (L3)": [
        {
          Module0: {
            title: "CS Fundamentals & DBMS",
            content: [
              {
                chap: {
                  title: "Topic 1 :- DBMS",
                  desc: [
                    "Introduction to Databases",
                    "The Relational Model",
                    "Entity-Relationship Model",
                    "Database Design",
                    "Structured Query Language (SQL)",
                    "Database Indexing and Optimization",
                    "Transaction Management",
                    "Database Security and Authorisation",
                    "Backup, Recovery, and Integrity",
                    "Emerging Trends in Database Management",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 2 :- Networking Fundamentals",
                  desc: [
                    "Introduction to Computer Networking",
                    "Network Topologies and Technologies",
                    "OSI Model and Protocol Stack",
                    "IP Addressing and Subnetting",
                    "Routing and Switching",
                    "Local Area Networks (LANs)",
                    "Wide Area Networks (WANs)",
                    "Wireless Networking",
                    "Network Security",
                    "Domain Name System (DNS)",
                    "Cloud Networking",
                    "Emerging Trends in Computer Networking",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 3 :- Operating System",
                  desc: [
                    "Introduction to Operating Systems",
                    "Computer System Architecture",
                    "Process Management",
                    "Memory Management",
                    "File System Management",
                    "Input/Output (I/O) Systems",
                    "User Interface and Command-Line Interaction",
                    "System Security and Authentication",
                    "Virtualization and Cloud Computing",
                    "Distributed Operating Systems",
                    "Real-Time Operating Systems (RTOS)",
                  ],
                },
              },
            ],
            id: 2,
            open: true,
          },
        },
      ],
      "System Design (L4)": [
        {
          Module0: {
            title: "System Design",
            content: [
              {
                chap: {
                  title: "Topic 1 :- Introduction to System Design",
                  desc: [
                    "What is System Design?",
                    "Goals of System Design",
                    "Components of a System Design",
                    "System Design Process",
                    "Importance of System Design",
                    "Types of Systems",
                    "Architecture of a System",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 2 :- Design Principles",
                  desc: [
                    "SOLID Principles",
                    "KISS Principle",
                    "DRY Principle",
                    "YAGNI Principle",
                    "Separation of Concerns",
                    "Law of Demeter",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 3 :- Design Patterns",
                  desc: [
                    "Creational Patterns",
                    "Structural Patterns",
                    "Behavioral Patterns",
                    "Singleton Pattern",
                    "Factory Pattern",
                    "Adapter Pattern",
                    "Observer Pattern",
                    "Command Pattern",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 4 :- Low-Level Design (HLD)",
                  desc: [
                    "Understanding the Purpose and Scope of LLD",
                    "LLD Design Process",
                    "Types of LLD",
                    "Creating a Low-Level Design Document",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 5 :- High-Level Design (HLD)",
                  desc: [
                    "Understanding the Purpose and Scope of HLD",
                    "HLD Design Process",
                    "Types of HLD",
                    "Creating a High-Level Design Document",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 6 :- Scalability and Performance",
                  desc: [
                    "Scalability",
                    "Performance",
                    "Load Balancing",
                    "Caching",
                    "Database Scaling",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 7 :- Security and Reliability",
                  desc: [
                    "Security",
                    "Reliability",
                    "Fault Tolerance",
                    "Disaster Recovery",
                    "Backup and Restore",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 8 :- Integration and Deployment",
                  desc: [
                    "Continuous Integration",
                    "Continuous Deployment",
                    "DevOps",
                    "Microservices",
                    "Containers",
                  ],
                },
              },
            ],
            id: 3,
            open: true,
          },
        },
      ],
      "Specialization (L5)": [
        {
          Module0: {
            title: "Specialization",
            content: [
              {
                chap: {
                  title: "MERN (Full-Stack Specialization)",
                  desc: [
                    "Programming Basics, Data Types and Code Flow",
                    "Project work on HTML5 and CSS3",
                    "JavaScript",
                    "Package Managers",
                    "HTML and CSS3",
                    "Bootstrap",
                    "jQuery",
                    "ReactJS",
                    "Application Programming Interface",
                    "Deploying WEB Application using AWS and Azure",
                    "Final Project Work",
                    "Node.js and Express.js",
                    "Database",
                    "Authentication and Security",
                  ],
                },
              },
              {
                chap: {
                  title: "SPRING (Backend Specialization)",
                  desc: [
                    "Framework Introduction",
                    "Spring JDBC / DAO Module",
                    "Spring AOP Module",
                    "Spring Core Module",
                    "Spring ORM Module",
                    "Spring WEB & WEB MVC Module",
                    "Spring Security Module",
                    "Maven",
                    "Springboot",
                    "Advance Java (Servlet + JSP)",
                    "Other Technologies",
                  ],
                },
              },
            ],
            id: 4,
            open: true,
          },
        },
      ],
      "Deployment (L6)": [
        {
          Module0: {
            title: "Deployment",
            content: [
              {
                chap: {
                  title: "Topic 1 :- Building a Spring Boot Application",
                  desc: [
                    "Creating a new Spring Boot project",
                    "Dependency management with Maven or Gradle",
                    "Defining application properties (e.g., database configuration, logging)",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 2 :- Working with Databases",
                  desc: [
                    "Integrating Spring Boot with relational databases (e.g., MySQL, PostgreSQL)",
                    "Using Spring Data JPA for database interactions",
                    "Implementing CRUD operations with JPA repositories",
                  ],
                },
              },

              {
                chap: {
                  title: "Topic 3 :- Securing a Spring Boot Application",
                  desc: [
                    "Implementing authentication and authorization",
                    "Securing REST APIs with Spring Security",
                    "Handling CSRF attacks and other security considerations",
                  ],
                },
              },

              {
                chap: {
                  title:
                    "Topic 4 :- Building and Packaging Spring Boot Applications",
                  desc: [
                    "Creating executable JARs or WARs",
                    "Deploying Spring Boot applications to local and remote servers",
                  ],
                },
              },

              {
                chap: {
                  title:
                    "Topic 5 :- Developing a Basic Spring Boot Application",
                  desc: [
                    "Creating and configuring Spring Beans",
                    "Implementing RESTful APIs with Spring Web",
                    "Handling HTTP requests and responses",
                    "Data validation and error handling",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 6 :- Testing Spring Boot Applications",
                  desc: [
                    "Writing unit tests for Spring components (e.g., controllers, services)",
                    "Using JUnit and Mockito for testing",
                    "Understanding test best practices and test coverage",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 7 :- Spring Boot Actuator",
                  desc: [
                    "Monitoring and managing Spring Boot applications using Actuator endpoints",
                    "Customizing Actuator endpoints and security configurations",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 8 :- Containerization and Deployment",
                  desc: [
                    "Introduction to Docker and containerization",
                    "Dockerizing a Spring Boot application",
                    "Deploying Spring Boot apps to cloud platforms (e.g., AWS, Azure, Google Cloud)",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 9 :- Containerization and Deployment",
                  desc: [
                    "Setting up CI/CD pipelines with tools like Jenkins or GitLab CI",
                    "Automating the deployment process",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 10 :- Monitoring and Scaling",
                  desc: [
                    "Utilizing monitoring tools (e.g., Spring Boot Admin, Prometheus, Grafana)",
                    "Scaling Spring Boot applications in different deployment environments",
                  ],
                },
              },
              {
                chap: {
                  title: "Topic 11 :- Troubleshooting and Best Practices",
                  desc: [
                    "Identifying and resolving common issues",
                    "Adopting best practices for Spring Boot application development and deployment",
                  ],
                },
              },
            ],
            id: 5,
            open: true,
          },
        },
      ],
    },

    masterSyllabusMobile: [
      {
        Module0: {
          title: "L1 :- Programming Fundamentals",
          content: [
            {
              chap: {
                title:
                  "Topic 1 :- Programming Basics, Data Types and Code Flow",
                desc: [
                  "Why Programming",
                  "Simple use case where programming is required",
                  "How to Write simple psuedo code",
                  "Difference in different programming languages",
                  "Intro to Java and Development setup",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- If statement, Loops and Code flow",
                desc: [
                  "Java Basics",
                  "Writing code in Java",
                  "If statements Loops",
                  "Flow of basic code and best coding practices",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Input, Output and Exceptions",
                desc: [
                  "Taking Input and printing",
                  "Types of exception and handling them.",
                  "More on Java language fundamentals",
                  "JDK",
                  "JRE",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Functions",
                desc: [
                  "How functions work and how to make custom functions and work with them",
                  "Significance",
                  "Defining",
                  "Function return type",
                  "Passing arguments",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Objected Oriented Programming",
                desc: [
                  "Abstraction",
                  "Encapsulation",
                  "Inheritance",
                  "Polymorphism",
                  "Interfaces, Modifiers, Classes and Objects",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- 2-D Matrix",
                desc: [],
              },
            },
            {
              chap: {
                title: "Topic 7 :- 1-D Array",
                desc: [
                  "1-D Array (Defining & initializing, iterations, looping on Arrays)",
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
          title: "L2 :- Data Structures and Algorithm",
          content: [
            {
              chap: {
                title: "Topic 1 :- Functions & Recursion",
                desc: [
                  "Significance",
                  " Defining",
                  "Function return type",
                  "Passing arguments",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Recursion",
                desc: ["Recursion", "Divide and Conquer"],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Linear Search and Binary Search",
                desc: ["Linear Search", "Binary Search", "Ternary Search"],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Time and space Complexity",
                desc: ["Best, worst & average case"],
              },
            },
            {
              chap: {
                title: "Topic 5 :- Bit Manipulation",
                desc: [],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Two Pointers",
                desc: [],
              },
            },
            {
              chap: {
                title:
                  "Topic 7 :- Sorting using Divide and Conquer and implementation",
                desc: [
                  "Sortings",
                  "Divide and Conquer",
                  "Merge Sort",
                  "Quick Sort",
                  "Comparator Sort",
                ],
              },
            },
            {
              chap: {
                title:
                  "Topic 8 :- Simple Array Sorting and its implementation",
                desc: ["Sortings", "Bubble sort", "Insertion Sort"],
              },
            },
            {
              chap: {
                title: "Topic 9 :- Strings",
                desc: [
                  "Pattern matching",
                  "Z Algorithm",
                  "KMP",
                  "String Hashing",
                  "Aho corasick",
                ],
              },
            },
            // {
            //   chap: {
            //     title: "Module 10 :- STL - 1",
            //     desc: [
            //       "Collections (Standard Template Library)",
            //       "Vector",
            //       "Set",
            //       "Iterator",
            //     ],
            //   },
            // },
            // {
            //   chap: {
            //     title: "Module 11 :- STL - 2",
            //     desc: [
            //       "Collections (Standard Template Library)",
            //       "Map",
            //       "Iterator",
            //     ],
            //   },
            // },
            // {
            //   chap: {
            //     title: "Module 12 :- STL - 3",
            //     desc: [
            //       "Collections (Standard Template Library)",
            //       "STL functions - Lower Bound",
            //       "STL functions upperbound",
            //       "Sort",
            //     ],
            //   },
            // },
            {
              chap: {
                title: "Topic 10 :- ArrayList and Linked List - 1",
                desc: [
                  "Single Linked List (Insertion at positions in Linked List, iteration in Linked List, Deletion at position in Linked List, Linked List loops)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 11 :- Linked List - 2",
                desc: [
                  "Double Linked List (Double Linked list creation (prev pointer), iteration in Double Linked List, insertion at positions in Linked List, Deletion in Double Linked List)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 12 :- Linked List - 3",
                desc: [
                  "Circular Linked list (Circular Linked list creation,iteration in Circular Linked List, insertion at positions in Circular Linked List, Deletion in Circular Linked List",
                ],
              },
            },
            {
              chap: {
                title: "Topic 13 :- Stack",
                desc: ["Intro", "Application and Implementation using Array"],
              },
            },
            {
              chap: {
                title: "Topic 14 :- Applications of Stack",
                desc: [
                  "Implementation using Linked list",
                  "Stack as library",
                ],
              },
            },
            {
              chap: {
                title: "Topic 15 :- Queue",
                desc: [
                  "Implementation using Array",
                  "Implementation using Linked list",
                  "Queue as a library",
                ],
              },
            },
            {
              chap: {
                title: "Topic 16 :- Applications of Queue",
                desc: [
                  "Implementation using Array",
                  "Implementation using Linked list",
                  "Queue as a library",
                ],
              },
            },
            {
              chap: {
                title: "Topic 17 :- Maths",
                desc: [
                  "Modular Arithmetic, Modular Exponentiation, GCD, Modular Multiplicative Inverse",
                  " GCD, Primality Testing, Seive of Eratosthenes",
                ],
              },
            },
            {
              chap: {
                title: "Topic 18 :- Analysis of Algorithm - Advance",
                desc: ["Greedy"],
              },
            },
            {
              chap: {
                title: "Topic 19 :- Advance Data Structure",
                desc: [
                  "Tree -1 (Traversals)",
                  "Tree - 2 (Construction of tree from traversals, height of tree, mirror of tree)",
                  "Tree - 3 (LCA, Diameter)",
                  "BST",
                  "Heaps",
                  "Graph - 1 (BFS, DFS)",
                  "Graph - 2 (Cycles in Graph)",
                  "Graph - 3 (DFS, BFS on matrix)",
                  "Graph - 4 ([Dijkstra Algorithm, Flood Fill Algorithm])",
                  "Heaps",
                ],
              },
            },
            {
              chap: {
                title: "Topic 20 :- Analysis of Algorithm - Advance",
                desc: [
                  "Dynamic Programming",
                  "Graph - 5 [Minimum Spanning Tree, Floyd Warshall, Topological Sorting]",
                ],
              },
            },
          ],
          id: 1,
          open: false,
        },
      },
      {
        Module0: {
          title: "L3 :- CS Fundamentals and DBMS",
          content: [
            {
              chap: {
                title: "Topic 1 :- DBMS",
                desc: [
                  "Introduction to Databases",
                  "The Relational Model",
                  "Entity-Relationship Model",
                  "Database Design",
                  "Structured Query Language (SQL)",
                  "Database Indexing and Optimization",
                  "Transaction Management",
                  "Database Security and Authorisation",
                  "Backup, Recovery, and Integrity",
                  "Emerging Trends in Database Management",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Networking Fundamentals",
                desc: [
                  "Introduction to Computer Networking",
                  "Network Topologies and Technologies",
                  "OSI Model and Protocol Stack",
                  "IP Addressing and Subnetting",
                  "Routing and Switching",
                  "Local Area Networks (LANs)",
                  "Wide Area Networks (WANs)",
                  "Wireless Networking",
                  "Network Security",
                  "Domain Name System (DNS)",
                  "Cloud Networking",
                  "Emerging Trends in Computer Networking",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Operating System",
                desc: [
                  "Introduction to Operating Systems",
                  "Computer System Architecture",
                  "Process Management",
                  "Memory Management",
                  "File System Management",
                  "Input/Output (I/O) Systems",
                  "User Interface and Command-Line Interaction",
                  "System Security and Authentication",
                  "Virtualization and Cloud Computing",
                  "Distributed Operating Systems",
                  "Real-Time Operating Systems (RTOS)",
                ],
              },
            },
          ],
          id: 2,
          open: false,
        },
      },
      {
        Module0: {
          title: "L4 :- System Design",
          content: [
            {
              chap: {
                title: "Topic 1 :- Introduction to System Design",
                desc: [
                  "What is System Design?",
                  "Goals of System Design",
                  "Components of a System Design",
                  "System Design Process",
                  "Importance of System Design",
                  "Types of Systems",
                  "Architecture of a System",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Design Principles",
                desc: [
                  "SOLID Principles",
                  "KISS Principle",
                  "DRY Principle",
                  "YAGNI Principle",
                  "Separation of Concerns",
                  "Law of Demeter",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Design Patterns",
                desc: [
                  "Creational Patterns",
                  "Structural Patterns",
                  "Behavioral Patterns",
                  "Singleton Pattern",
                  "Factory Pattern",
                  "Adapter Pattern",
                  "Observer Pattern",
                  "Command Pattern",
                ],
              },
            },
            {
              chap: {
                title: "Topic 4 :- Low-Level Design (HLD)",
                desc: [
                  "Understanding the Purpose and Scope of LLD",
                  "LLD Design Process",
                  "Types of LLD",
                  "Creating a Low-Level Design Document",
                ],
              },
            },
            {
              chap: {
                title: "Topic 5 :- High-Level Design (HLD)",
                desc: [
                  "Understanding the Purpose and Scope of HLD",
                  "HLD Design Process",
                  "Types of HLD",
                  "Creating a High-Level Design Document",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Scalability and Performance",
                desc: [
                  "Scalability",
                  "Performance",
                  "Load Balancing",
                  "Caching",
                  "Database Scaling",
                ],
              },
            },
            {
              chap: {
                title: "Topic 7 :- Security and Reliability",
                desc: [
                  "Security",
                  "Reliability",
                  "Fault Tolerance",
                  "Disaster Recovery",
                  "Backup and Restore",
                ],
              },
            },
            {
              chap: {
                title: "Topic 8 :- Integration and Deployment",
                desc: [
                  "Continuous Integration",
                  "Continuous Deployment",
                  "DevOps",
                  "Microservices",
                  "Containers",
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
          title: "L5 :- Specialization",
          content: [
            {
              chap: {
                title: "MERN (Full-Stack Specialization)",
                desc: [
                  "Programming Basics, Data Types and Code Flow",
                  "Project work on HTML5 and CSS3",
                  "JavaScript",
                  "Package Managers",
                  "HTML and CSS3",
                  "Bootstrap",
                  "jQuery",
                  "ReactJS",
                  "Application Programming Interface",
                  "Deploying WEB Application using AWS and Azure",
                  "Final Project Work",
                  "Node.js and Express.js",
                  "Database",
                  "Authentication and Security",
                ],
              },
            },
            {
              chap: {
                title: "SPRING (Backend Specialization)",
                desc: [
                  "Framework Introduction",
                  "Spring JDBC / DAO Module",
                  "Spring AOP Module",
                  "Spring Core Module",
                  "Spring ORM Module",
                  "Spring WEB & WEB MVC Module",
                  "Spring Security Module",
                  "Maven",
                  "Springboot",
                  "Advance Java (Servlet + JSP)",
                  "Other Technologies",
                ],
              },
            },
          ],
          id: 4,
          open: false,
        },
      },
      {
        Module0: {
          title: "L6 :- Deployment",
          content: [
            {
              chap: {
                title: "Topic 1 :- Building a Spring Boot Application",
                desc: [
                  "Creating a new Spring Boot project",
                  "Dependency management with Maven or Gradle",
                  "Defining application properties (e.g., database configuration, logging)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 2 :- Working with Databases",
                desc: [
                  "Integrating Spring Boot with relational databases (e.g., MySQL, PostgreSQL)",
                  "Using Spring Data JPA for database interactions",
                  "Implementing CRUD operations with JPA repositories",
                ],
              },
            },

            {
              chap: {
                title: "Topic 3 :- Securing a Spring Boot Application",
                desc: [
                  "Implementing authentication and authorization",
                  "Securing REST APIs with Spring Security",
                  "Handling CSRF attacks and other security considerations",
                ],
              },
            },

            {
              chap: {
                title:
                  "Topic 4 :- Building and Packaging Spring Boot Applications",
                desc: [
                  "Creating executable JARs or WARs",
                  "Deploying Spring Boot applications to local and remote servers",
                ],
              },
            },

            {
              chap: {
                title:
                  "Topic 5 :- Developing a Basic Spring Boot Application",
                desc: [
                  "Creating and configuring Spring Beans",
                  "Implementing RESTful APIs with Spring Web",
                  "Handling HTTP requests and responses",
                  "Data validation and error handling",
                ],
              },
            },
            {
              chap: {
                title: "Topic 6 :- Testing Spring Boot Applications",
                desc: [
                  "Writing unit tests for Spring components (e.g., controllers, services)",
                  "Using JUnit and Mockito for testing",
                  "Understanding test best practices and test coverage",
                ],
              },
            },
            {
              chap: {
                title: "Topic 7 :- Spring Boot Actuator",
                desc: [
                  "Monitoring and managing Spring Boot applications using Actuator endpoints",
                  "Customizing Actuator endpoints and security configurations",
                ],
              },
            },
            {
              chap: {
                title: "Topic 8 :- Containerization and Deployment",
                desc: [
                  "Introduction to Docker and containerization",
                  "Dockerizing a Spring Boot application",
                  "Deploying Spring Boot apps to cloud platforms (e.g., AWS, Azure, Google Cloud)",
                ],
              },
            },
            {
              chap: {
                title: "Topic 9 :- Containerization and Deployment",
                desc: [
                  "Setting up CI/CD pipelines with tools like Jenkins or GitLab CI",
                  "Automating the deployment process",
                ],
              },
            },
            {
              chap: {
                title: "Topic 10 :- Monitoring and Scaling",
                desc: [
                  "Utilizing monitoring tools (e.g., Spring Boot Admin, Prometheus, Grafana)",
                  "Scaling Spring Boot applications in different deployment environments",
                ],
              },
            },
            {
              chap: {
                title: "Topic 11 :- Troubleshooting and Best Practices",
                desc: [
                  "Identifying and resolving common issues",
                  "Adopting best practices for Spring Boot application development and deployment",
                ],
              },
            },
          ],
          id: 5,
          open: false,
        },
      },
    ],

    faq: [
      {
        id: 0,
        sectionName: "Course Related",
        data: [
          {
            id: 0,
            ques: "What are the prerequisites for the Software Development Master Program with Domain Specialization?",
            ans: "  Nothing but basic coding knowledge is required to start with this course.",
            open: true,
          },
          {
            id: 1,
            ques: "What if I miss a few classes due to an emergency?",
            ans: "You will be given substitute classes in other batches if you miss a few classes.But if you were unable to attend more classes, you could choose to switch batches and enroll in the next batch.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a Flexi Subscription in the Software Development Master Program with Domain Specialization?",
            ans: `Those who register for live online/hybrid training in Software Development Master Program with Domain Specialization are eligible for a Flexi Pass. We will get you access to all of the ongoing live classes, recorded videos, and premium study materials for a three-year period. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any classes whenever it is most convenient for you.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of this Software Development Master Program with Domain Specialization?",
            ans: `The duration of this Software Development Master Program with Domain Specialization is about 6.5 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on Weekdays and Weekend Batches.
              Weekday batch - 8 months
                 Monday to Friday - 2 hours/day
              Weekend batch - 9 months
              Saturday & Sunday - 3.5 hours/day
              After the completion of term 3, you can start working on real-time projects and attend job interviews.`,
            open: false,
          },
          {
            //Check how to do this 5th Question
            id: 4,
            ques: "What is the mode of training for this Software Development Master Program with Domain Specialization at Learnbay?",
            ans: "We offer both online and hybrid modes of training. You can select your preferred mode based on your needs.Online Mode: You can only participate in live, interactive classes online (no recorded video-based session is available),Hybrid Mode: For all theoretical sessions, you must participate in live, interactive online lectures. However, for practical sessions, which are typically project-based, you must travel to one of our approved training sites within your city.The following Indian cities have authorized training facilities: Bangalore, Mumbai, Chennai, Hyderabad, Delhi, Kolkata, and Pune. India, the US, and Canada all have access to the live online mode.", // Do this
            open: false,
          },
          {
            id: 5,
            ques: "How can I opt for a Hybrid mode of learning? ",
            ans: "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions. While you enter into the project modules, then you have to visit the Learnbay authorized training centers within your city. The dedicated counselor assigned to you will help you in this regard.",
            open: false,
          },
        ],
      },
      {
        id: 1,
        sectionName: "Domain Electives",
        data: [
          {
            id: 0,
            ques: "What is domain specialization?",
            ans: "We offer five elite domains, from which you can choose your preferred one for your respective specialization. Based on your targeted job role, you can choose a specific elective.",
            open: true,
          },
          {
            id: 1,
            ques: "What are the available elective domain options?",
            ans: "These are as follows: Full Stack, Product Engineer/Manager,  Data Science and AI, Web 3.0 Developer, DevOps & Clouds.",
            open: false,
          },
          {
            id: 2,
            ques: "Which domain elective is best suited for me?",
            ans: `You can select your domain based on your prior work experience, academics, and career goals. 
              Book a slot with our industry expert for free profile review and career guidance.
              `,
            open: false,
          },
          {
            id: 3,
            ques: "Why is domain specialization important?",
            ans: "After enrolling in the Software Development Master Program with Domain Specialization, one must opt for domain electives for Level 06. It is essential to have a specialization. Because the generic study is not going to help you land a promising and secure job role, also, choosing such specialization will ease your project work, interview preparation as well as job application process easier.",
            open: false,
          },
          {
            id: 4,
            ques: "What if I don't have any prior experience in any domain?",
            ans: " If you don't have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects. ",
            open: false,
          },
          {
            id: 5,
            ques: "Can I change my domain electives later?",
            ans: "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration.",
            open: false,
          },
        ],
      },
      {
        id: 2,
        sectionName: "Payments and Scholarships",
        data: [
          {
            id: 0,
            ques: "What is the total fee for the Software Development Master Program with Domain Specialization?",
            ans: "The total program fee for this course is ,  INR  1,10,000 + 18% GST",

            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for the course fees?",
            ans: "Yes, you can use a credit card to pay the installments with a no-fee EMI option for INR ₹10,816/month up to 12 months. By presenting an AAadhar card, Pan card, and the latest three months' salary, you can also avail of an interest-free loan also.",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: " Is there any scholarship/discount available for the Software Development Master Program with Domain Specialization? What is Group Discount?",
            ans: `Learnbay offers a 15 - 20% scholarship for early birds occasionally.
              Please check our websites or contact our sales team to know more about the applicable discounts.
              Group Discount :
              Group Discount is applicable only if you’re joining with your friends. 
              5% extra discount: Group of 2
              8% extra discount: Group of 3
              Max 10% discount: Groupe of 4+`,
            open: false,
          },
          {
            id: 3,
            ques: "What is the refund policy for this Software Development Program at Learnbay?",
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
        id: 3,
        sectionName: "Capstone and Real-Time Projects",
        data: [
          {
            id: 0,
            ques: "How many real-time projects will be there?",
            ans: "We have a set of 12 real-time projects from multiple domains.",
            linkText1: " Click here to download the list of the projects.",
            link1:
              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf",
            link: true,
          },
          {
            id: 1,
            ques: "How many capstone projects will be there?",
            ans: "There will be 2 capstone projects.",
            open: false,
          },
          {
            id: 2,
            ques: "How will the project be executed? ",
            ans: "You will be needed to work in a group for the project at Learnbay, where your group will be given a specialized project mentor who will provide full support and advice. If you opt for the hybrid model, you have to visit the authorized training center for the project session, where the mentor will be present in person. Otherwise, you will be doing your project via cloud lab, and mentors will be available via live meets.",
            open: false,
          },
        ],
      },
      {
        id: 4,
        sectionName: "Certification",
        data: [
          {
            id: 0,
            ques: "Is there any accredited certification after course completion?",
            ans: "Yes, you will be awarded IBM accredited software development Completion Certificate on successful course completion. ",
            open: true,
          },
        ],
      },
      {
        id: 5,
        sectionName: "Job Assistance",
        data: [
          {
            id: 0,
            ques: "What's the eligibility for a job assistance program in Learnbay?",
            ans: `You should have completed the course with :
              A minimum score of 70% in assessments
             You should have completed the assignments and case studies
             Worked and successfully completed the minimum recommended number of real-time projects. `,
            open: true,
          },
          {
            id: 1,
            ques: "How many interview calls will I get at Learnbay?",
            ans: "You’ll be provided with job assistance after the completion of the course for a period of 1 year.",
            open: false,
          },
          {
            id: 2,
            ques: "What is a job-readiness program?",
            ans: `The job readiness program helps you prepare for interviews which include:
              Resume Preparation sessions
              Preparing projects for a strong portfolio
              Interview guidance and prep sessions
              1:1 Mock interviews based on targeted companies and roles.
              `,
            open: false,
          },
          {
            id: 3,
            ques: "Will I get Job referrals at Learnbay?",
            ans: "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies. We have 250+ hiring partners.",
            open: false,
          },
          {
            id: 4,
            ques: "What is an interview guarantee feature?",
            ans: "As a special feature, we provide interview assurance. That means once you complete the course by fulfilling all the scoring and attendance-related criteria, we’ll provide assured interview calls and job referrals. You will get this facility until you get placed.",
            open: false,
          },
        ],
      },
      {
        id: 6,
        sectionName: "Mentorship",
        data: [
          {
            id: 0,
            ques: "Until when will the students get the facility of mentorship?  ",

            ans: "Our Mentors will provide advanced software development training and career insights/guidance to the students until the completion of the course depending on the specialization. Post completion, students can reach out to specialized mentors for project and placement purposes.",
            open: true,
          },
          {
            id: 1,
            ques: "Can a Learnbay student choose to study from their desired mentor?",
            ans: "Every batch at Learnbay has a specific mentor, but if a student is unhappy with the way their mentor teaches, they can bring it up with a dedicated contact point, who will address the problem by finding new mentors or by changing the batch.",
            open: false,
          },
        ],
      },
      {
        id: 7,
        sectionName: "Support",
        data: [
          {
            id: 0,
            ques: "When is the job assistance provided at Learnbay?",
            ans: "At Learnbay, after the course is over, placement Assistance is offered. It consists of interview preparation workshops, mock interviews, and recommendations from leading MNCs and startups. Unless a person is placed in a corporation, this service will be offered.",
            open: true,
          },
          {
            id: 1,
            ques: "How long will I get Job referrals?",
            ans: "You’ll be provided with job referrals after the completion of the course for a period of 1 year.",
            open: false,
          },
        ],
      },
    ],
  },
];
