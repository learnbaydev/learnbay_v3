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

export const BADataScienceCourseData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "1:1 Doubt Session",
        para: "Clear your doubts with industry experts and get real-time solutions",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "Guaranteed Interview Calls",
        para: "Boost career chances, gain referrals from 300+ top recruiters",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png",
        height: "50",
        width: "53",
        heading: "IBM Project Certificate",
        para: "Master the domain of business analytics with certificate from IBM",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png",
        height: "40",
        width: "40",
        heading: "Designed For Professionals",
        para: "Use tech innovation for strategy, skill acquisition, & business growth",
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
        desc: "Get 3 year of job & placement support",
      },
      {
        id: 2,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png",
        desc: "Get 6 mock interviews with industry leaders",
      },
      {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png",
        desc: "Get 1:1 Resume/Linkedin Review and Buildup",
      },
      {
        id: 4,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png",
        desc: "Get unlimited interview calls",
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
        p2: "Sales",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For business development associate, managers,customer success etc.",

          "Learn sales data analysis tools and apply your data-driven knowledge to drive strategic development",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
        TitleCourse: "Sales Domain",
      },

      {
        id: 3,
        p1: "#3",
        p2: "Marketing",
        desc: [
          "Work on 20+ real time case studies  and assignments",
          "For marketing professionals or aspiring ones",
          "Learn about the newest marketing technology & business analyst techniques that drive strategic development",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
        TitleCourse: "Marketing Domain",
      },

      {
        id: 4,
        p1: "#4",
        p2: "HR",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For HR recruiter, manager, talent acquisition specialist, hr generalist etc.",
          "Learn HR analytics and apply to business management through hands-on projects and gain practical experience",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
        TitleCourse: "HR Domain",
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
    syllabusDesc:
      "Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All sessions are covered practically with real-time industrial projects and case studies.",
    popupHead: "Download Data science Course Brochure",

    syllabusHead: [
      "Intro to Business Analytics  (L1)",
      "Excel & Business Statistics  (L2)",
      "Data Science & AI (L3)",
      "Big Data Analytics and Visualization  (L4)",
      "AI Generative Tools and Feature Trends (L5)",
    ],
    MasterSyllabusDefault: [
      {
        Module0: {
          title: "Introduction to Business Analysis",
          content: [
            {
              chap: {
                title: "",
                desc: [
                  "Introduction to Business Analysis",
                  "Stakeholders in Business Analysis",
                  "Formulating Requirements",
                  "Flowchart and Modelling",
                  "Analyzing and Transforming Requirements",
                  "Finalising Requirements",
               
                ],
              },
            },
          ],
          id: 4,
          open: true,
        },
      },
    ],
   
    masterSyllabus: {
      "Intro to Business Analytics  (L1)": [
        {
          Module0: {
            title: "Introduction to Business Analysis",
            content: [
              {
                chap: {
                  title: "",
                  desc: [
                    "Introduction to Business Analysis",
                    "Stakeholders in Business Analysis",
                    "Formulating Requirements",
                    "Flowchart and Modelling",
                    "Analyzing and Transforming Requirements",
                    "Finalising Requirements",
                 
                  ],
                },
              },
            ],
            id: 4,
            open: true,
          },
        },
      ],
      "Excel & Business Statistics  (L2)": [
        {
          Module0: {
            title: "Excel",
            content: [
              {
                chap: {
                  // title: "Topic 1 :- Cohort Orientation",
                  desc: [
                    "Introduction to Excel",
                    "Basic Formulas and Functions ",
                    "Data Formatting and Cell Styles",
                    "Data Sorting and Filtering",
                    "Data Validation and Protection",
                    "PivotTables and PivotCharts",
                    "Advanced Formulas and Functions",
                    "Data Analysis Tools",
                    "Excel Macros and Automation",
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
            title: "Statistics",
            content: [
              {
                chap: {
                  // title: "Topic 1 :- Cohort Orientation",
                  desc: [
                    "Fundamentals of Math and Probability",
                    "All about Population & Sample ",
                    "Statistical Thinking",
                    "Descriptive & Inferential Statistics",
                    "Hypothesis Testing",
                    "Linear Algebra",
                    "Data Processing & Exploratory Data Analysis",
                 
                  ],
                },
              },

            
            ],
            id: 0,
            open: false,
          },
        },





      ],
      "Data Science & AI (L3)": [
        {
          Module0: {
            title: "Intro",
            content: [
              {
                chap: {
                  desc: [ 
                    "Key components of Data Science and AI (data, algorithms, computing power).",
                    "Popular programming language (R) and development tools (Jupyter     Notebook, Spyder)",
                  
                   
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
            title: "ML",
            content: [
              {
                chap: {
                  desc: [
                    "Supervised, unsupervised, and reinforcement learning.",
                    "Bias-variance tradeoff, overfitting, and underfitting.",
                    "Model selection and evaluation metrics (accuracy, precision, recall, F1 score, ROC curve, AUC).",
                 
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
            title: "NLP",
            content: [
              {
                chap: {
                  desc: [
                    "Named Entity Recognition (NER), Topic Modeling, Text Generation.",
                    "Pre-trained language models (BERT, GPT, XLNet) and Transfer Learning in NLP",
                    "Model selection and evaluation metrics (accuracy, precision, recall, F1 score, ROC curve, AUC).",
                 
                  ],
                },
              },
            ],
            id: 1,
            open: false,
          },
        },

      ],

      "Big Data Analytics and Visualization  (L4)": [
        {
          Module0: {
            title: "SQL",
            content: [
              {
                chap: {
                  desc: [
                    "SQL and RDBMS",
                    "NoSQL, HBase & MongoDB",
                    "JSON Data & CRUD",
                    "Programming with SQL",
                  ],
                },
              },
            ],
            id: 6,
            open: true,
          },
        },
        {
          Module0: {
            title: "MongoDB",
            content: [
              {
                chap: {
                  desc: [
                    "MongoDB Ecosystem",
                    "MongoDB Structures",
                    "MongoDB Shell vs MongoDB Server",
                    "Data Formats in MongoDB",
                    "Working with MongoDB Compass",
                    "Working with Numeric Data",
                    "Working on Scheme Designing",
                  ],
                },
              },
            ],
            id: 6,
            open: false,
          },
        },
        {
          Module0: {
            title: "Tableau",
            content: [
              {
                chap: {
                  desc: [
                    "Dashboard and Stories",
                    "Visual Analytics",
                    "Custom Geocoding",
                    "Polygon Maps",
                    "WMS and Background Image",
                  ],
                },
              },
            ],
            id: 6,
            open: false,
          },
        },
        {
          Module0: {
            title: "PowerBI",
            content: [
              {
                chap: {
                  desc: [
                    "Overview of the Workflow in",
                    "Power BI Desktop",
                    "Introducing the Different",
                    "Views of the Data Mode",
                    "Working with Time Series",
                    "Scatterplots and BI Reports",
                    "Connecting Dataset with  Power BI",
                  ],
                },
              },
            ],
            id: 6,
            open: false,
          },
        },
        
      
      ],
      "AI Generative Tools and Feature Trends (L5)": [

        {
          Module0: {
            title: "Emerging Trends in AI and Generative Modeling",
            content: [
              {
                chap: {
                  desc: [
                    " Exploring other AI generative tools beyond ChatGPT and DALL·E",
                    "Overview of Midjourney",
                    "Discussion on future trends and advancements in AI generative tools",
                    "Open-ended project and/or presentation on a selected topic, incorporating learned concepts",
               
                  
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
            title: "Natural Language Processing and ChatGPT",
            content: [
              {
                chap: {
                  desc: [
                    "Introduction to natural language processing techniques",
                    "Understanding ChatGPT and its architecture",
                    "Hands-on exercises using ChatGPT for text generation",
                 
                    "Fine-tuning ChatGPT for specific applications",
                    
         
                  
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
            title: "DALL·E: Image Generation with AI",
            content: [
              {
                chap: {
                  desc: [
                    "Exploring image generation using DALL·E",
                    "Hands-on exercises for creating unique images with DALL·E",
                    "Ethical considerations and limitations of AI-generated images",
                    "Polygon Maps",
                    " WMS and Background Image",
                  
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
            title: "Graph Neural Networks (GNN) for Data Analysis",
            content: [
              {
                chap: {
                  desc: [
                    "Overview of Graph Neural Networks (GNN) and their applications",
                    "Hands-on exercises using GNN for tasks such as node classification and link prediction",
                    "Case studies on real-world applications of GNN in data science",
                    "Scatterplots and BI Reports",
                    " Connecting Dataset with Power BI",
                  
                  ],
                },
              },
            ],
            id: 2,
            open: false,
          },
        },
      
      ],
     
      // "Data Management and Deployment (L5)": [
      //   {
      //     Module0: {
      //       title: "Module 1 :-Excel",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Introduction to Excel",
      //               "Basic Formulas and Functions",
      //               "Data Formatting and Cell Styles",
      //               "Data Sorting and Filtering",
      //               "Charts and Graphs",
      //               "Data Validation and Protection",
      //               "PivotTables and PivotCharts",
      //               "Advanced Formulas and Functions",
      //               "Data Analysis Tools",
      //               "Excel Macros and Automation",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: true,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 2 :- MLops",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Introduction to MLOps",
      //               "Version Control for ML",
      //               "Containerization and Docker",
      //               "Orchestration with Kubernetes",
      //               "Continuous Integration (CI) for ML",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 3 :- Deep Learning",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Neural Network",
      //               "Simple Computation, Constants, and Variables",
      //               "Feature selection and engineering techniques (e.g. PCA, feature importance)",
      //               "Back-propagation",
      //               "TensorBoard",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 4 :- Deployment AWS+Azure",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Data Preparation and Feature Engineering",
      //               "Model Training and Evaluation",
      //               "Model Deployment and Management",
      //               "Advanced Topics in Machine Learning on AWS and Azure",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      // ],
      // "AI Generative Tools and Feature Trends (L6)": [
      //   {
      //     Module0: {
      //       title: "Module 1 :- Emerging Trends in AI and Generative Modeling",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Exploring other AI generative tools beyond ChatGPT and DALL·E",
      //               "Overview of Midjourney",
      //               "Discussion on future trends and advancements in AI generative tools",
      //               "Open-ended project and/or presentation on a selected topic, incorporating learned concepts",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: true,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 2 :- Natural Language Processing and ChatGPT",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Introduction to natural language processing techniques",
      //               "Understanding ChatGPT and its architecture",
      //               "Hands-on exercises using ChatGPT for text generation",
      //               "Fine-tuning ChatGPT for specific applications",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 3 :- DALL·E: Image Generation with AI",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Exploring image generation using DALL·E",
      //               "Hands-on exercises for creating unique images with DALL·E",
      //               "Ethical considerations and limitations of AI-generated images",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Module 4 :- Graph Neural Networks (GNN) for Data Analysis",
      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Overview of Graph Neural Networks (GNN) and their applications",
      //               "Hands-on exercises using GNN for tasks such as node classification and link prediction",
      //               "Case studies on real-world applications of GNN in data science",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      //   {
      //     Module0: {
      //       title: "Term 5 :- AI Generative Tools and Future Trends ",

      //       content: [
      //         {
      //           chap: {
      //             desc: [
      //               "Overview of Graph Neural Networks (GNN) and their applications",
      //               "Hands-on exercises using GNN for tasks such as node classification and link prediction",
      //               "Case studies on real-world applications of GNN in data science",
      //             ],
      //           },
      //         },
      //       ],
      //       id: 6,
      //       open: false,
      //     },
      //   },
      // ],
    },
    masterSyllabusMobile: [
      {
        Module0: {
          title: "L1 :- Introduction to Business Analysis ",
          content: [
            {
              chap: {
                // title: "Topic 1 :-Excel",
                desc: [
                  "Introduction to Excel",
                    "Basic Formulas and Functions ",
                    "Data Formatting and Cell Styles",
                    "Data Sorting and Filtering",
                    "Data Validation and Protection",
                    "PivotTables and PivotCharts",
                    "Advanced Formulas and Functions",
                    "Data Analysis Tools",
                    "Excel Macros and Automation",
                ],
              },
            },

            // {
            //   chap: {
            //     title: "Topic 2 :- Fundamentals of Programming",
            //     desc: [
            //       "Introduction to Anaconda & Jupyter notebook",
            //       "Flavors of python Introduction to Git, GitHub",
            //       "Python Fundamentals",
            //     ],
            //   },
            // },
            // {
            //   chap: {
            //     title: "Topic 3 :-  Fundamentals of Statistics",
            //     desc: [
            //       "Mean, Median, Mode",
            //       "Standard Deviation, Average. Probability, Permutations, and Combinations",
            //       "Introduction to Linear Algebra",
            //     ],
            //   },
            // },
          ],
          id: 0,
          open: true,
        },
      },
      {
        Module0: {
          title: "L2 :- Excel & Business Statistics",
          content: [
            {
              chap: {
            title: "Topic 1 :-Excel",
                desc: [
                  "Introduction to Excel",
                  "Basic Formulas and Functions ",
                  "Data Formatting and Cell Styles",
                  "Data Sorting and Filtering",
                  "Data Validation and Protection",
                  "PivotTables and PivotCharts",
                  "Advanced Formulas and Functions",
                  "Data Analysis Tools",
                  "Excel Macros and Automation",
                ],
              },


              
            },

            {
              chap: {
            title: "Topic 2 :-Statistics",
                desc: [
                  "Fundamentals of Math and Probability",
                  "All about Population & Sample ",
                  "Statistical Thinking",
                  "Descriptive & Inferential Statistics",
                  "Hypothesis Testing",
                  "Linear Algebra",
                  "Data Processing & Exploratory Data Analysis",
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
          title: "L3 :- Data Science & AI ",
          content: [
            {
              chap: {
                title: "Topic 1:- Intro",
                desc: [
                  "Key components of Data Science and AI (data, algorithms, computing power).",
                  "Popular programming language (R) and development tools (Jupyter     Notebook, Spyder)",
                ],
              },
            },


            {
              chap: {
                title: "Topic 2:- ML",
                desc: [
                  "Supervised, unsupervised, and reinforcement learning.",
                    "Bias-variance tradeoff, overfitting, and underfitting.",
                    "Model selection and evaluation metrics (accuracy, precision, recall, F1 score, ROC curve, AUC).",
                ],
              },
            },

            {
              chap: {
                title:  "Topic 3:- NLP",
                desc: [
                  "Named Entity Recognition (NER), Topic Modeling, Text Generation.",
                  "Pre-trained language models (BERT, GPT, XLNet) and Transfer Learning in NLP",
                  "Model selection and evaluation metrics (accuracy, precision, recall, F1 score, ROC curve, AUC).",
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
          title: "L4 :- Big Data Analytics and Visualization",
          content: [
            {
              chap: {
            title: "Topic 1 :-SQL",
                desc: [
                  "SQL and RDBMS",
                    "NoSQL, HBase & MongoDB",
                    "JSON Data & CRUD",
                    "Programming with SQL",
                ],
              },


              
            },


            {
              chap: {
            title: "Topic 2 :-MongoDB",
                desc: [
                  "MongoDB Ecosystem",
                    "MongoDB Structures",
                    "MongoDB Shell vs MongoDB Server",
                    "Data Formats in MongoDB",
                    "Working with MongoDB Compass",
                    "Working with Numeric Data",
                    "Working on Scheme Designing",
                ],
              },


              
            },

            {
              chap: {
            title: "Topic 3 :-Tableau",
                desc: [
                  "Dashboard and Stories",
                  "Visual Analytics",
                  "Custom Geocoding",
                  "Polygon Maps",
                  "WMS and Background Image",
                ],
              },


              
            },


            {
              chap: {
            title: "Topic 4 :-Power BI",
                desc: [
                  "Overview of the Workflow in",
                  "Power BI Desktop",
                  "Introducing the Different",
                  "Views of the Data Mode",
                  "Working with Time Series",
                  "Scatterplots and BI Reports",
                  "Connecting Dataset with  Power BI",
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
          title: "L5 :- AI Generative Tools and Feature Trends",
          content: [
            {
              chap: {
                title: "Topic 1:-Emerging Trends in AI and Generative Modeling",
                desc: [
                  " Exploring other AI generative tools beyond ChatGPT and DALL·E",
                  "Overview of Midjourney",
                  "Discussion on future trends and advancements in AI generative tools",
                  "Open-ended project and/or presentation on a selected topic, incorporating learned concepts",
                
                ],
              },
            },

            {
              chap: {
                title: "Topic 2:-Natural Language Processing and ChatGPT",
                desc: [
                  "Introduction to natural language processing techniques",
                  "Understanding ChatGPT and its architecture",
                  "Hands-on exercises using ChatGPT for text generation",
               
                  "Fine-tuning ChatGPT for specific applications",
                
                ],
              },
            },

            {
              chap: {
                title: "Topic 3:-DALL·E: Image Generation with AI",
                desc: [
                  "Exploring image generation using DALL·E",
                  "Hands-on exercises for creating unique images with DALL·E",
                  "Ethical considerations and limitations of AI-generated images",
                  "Polygon Maps",
                  " WMS and Background Image",
                
                ],
              },
            },

            {
              chap: {
                title: "Topic 4:- Graph Neural Networks (GNN) for Data Analysis",
                desc: [
                  "Overview of Graph Neural Networks (GNN) and their applications",
                  "Hands-on exercises using GNN for tasks such as node classification and link prediction",
                  "Case studies on real-world applications of GNN in data science",
                  "Scatterplots and BI Reports",
                  " Connecting Dataset with Power BI",
                
                ],
              },
            },

          ],
          id: 2,
          open: false,
        },
      },

    ],
    faq: [
      {
        id: 1,
        sectionName: "Course Related",
        data: [
          {
            id: 0,
            ques: "What are the prerequisites for the Business Analytics Program?",
            ans: "There are no prerequisites for this Business Analytics certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
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
            ques: "What is a Flexi Subscription in the Business Analytics Program?",
            ans: `Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of the Business Analytics Program?",
            ans: `The duration of this Business Analytics Course is about 6.5 months (200 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on weekdays and weekend batches.
              Weekday batch – 5 months, Monday to Friday – 2 hours/day,
              Weekend batch – 7 months, Saturday & Sunday – 3.5 hours/day.`,
            open: false,
          },
          {
            id: 4,
            ques: "What is the mode of Business Analytics training at Learnbay?",
            ans: "We provide both classroom and online Business Analytics training modes. Based on your requirement, you can choose your preferred mode.",
            open: false,
          },
          {
            id: 5,
            ques: "How can I opt for a Hybrid mode of learning?",
            ans: "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions.",
            open: false,
          },
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
            ques: "What is the total fee for the Business Analytics Program?",
            ans: "The total program fee for the Business Analytics Program is INR 1,10,000 + GST.",
            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for INR 1,10,000/- + GST ?",
            ans: "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,816/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more.",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: "Is there any scholarship/discount available for the Business Analytics Program? What is Group Discount?",
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
            ques: "What is the refund policy for the Business Analytics Program at Learnbay?",
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
            ques: "How many real-time projects will be there?",
            ans: "We have a set of 8 Real-time projects from multiple industries live Healthcare, Banking, Finance, Insurance, Retail, etc.",
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
          {
            id: 2,
            ques: "How will the project be executed?",
            ans: `At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance.`,
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
            ans: "Yes, you will be awarded IBM accredited Business Analytics Certificate on successful course completion.",
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
  },
];
