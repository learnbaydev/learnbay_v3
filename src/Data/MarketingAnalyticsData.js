import {
    MdOutlineCastForEducation,
    MdOutlineWorkOutline,
  } from "react-icons/md";
  import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
  import { FaUserGraduate } from "react-icons/fa";
  import { GiStairsGoal } from "react-icons/gi";

  
  export const MACourseData = [
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
          heading: "For Marketing professionals",
          para: "Boost your growth & earnings with in-demand analytics skills",
        },
      ],
      testimonial: [
        {
          id: 1,
          name: "Preksha Mishra",
          working: "Working at HCL",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png",
          sDesc:
            "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
          lDesc:
            "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
          statLogo: "140% Hike",
        },
        {
          id: "tcs",
          name: "Mohammad Israr",
          working: "Working at TCS",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png",
          sDesc:
            "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job...",
          lDesc:
            "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 400% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TCS.png",
          statLogo: "  210% Hike",
        },
        {
          id: 4,
          name: "Ritish Kumar",
          working: "Working at Capgemini",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png",
          sDesc:
            "I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay...",
          lDesc:
            "I always had a dilemma about how to switch to  IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. All Thanks to Learnbay!",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png",
          statLogo: " 150% Hike",
        },
        {
          id: 5,
          name: "Sourabh Mourya",
          working: "Working at HCL",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png",
          sDesc:
            "Flexible classes have helped me to manage my job  schedule. Learning Data Science directly from MNC experts provided the chance ...",
          lDesc:
            "Flexible classes have helped me to manage my job schedule. Learning Data Science directly from  experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent  platform that enhanced my professional growth. Thank you very much! Learnbay.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
          statLogo: " 150% Hike",
        },
        {
          id: 6,
          name: "Abhishek Singh",
          working: "Working at AGS",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png",
          sDesc:
            "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
          lDesc:
            "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png",
          statLogo: "  132% Hike",
        },
        {
          id: 7,
          name: "Vishal",
          working: "Working at Bridge i2i",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png",
          sDesc:
            "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
          lDesc:
            "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png",
          statLogo: "  127% Hike",
        },
        {
          id: "math",
          name: "Aravind Kumar",
          working: "SA - Data Scientist",
          proImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png",
          sDesc:
            "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
          lDesc:
            "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
          complogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png",
          statLogo: "142% Hike",
        },
      ],
      thirdSection: [
        {
          id: 1,
          icon: <MdOutlineCastForEducation className={styles.bIcon} />,
          heading: "Education",
          para: "Bachelor's degree with good academic performance",
        },
        {
          id: 1,
          icon: <MdOutlineWorkOutline className={styles.oIcon} />,
          heading: "Work experience",
          para: "Minimum 1 year of IT/Non-IT work experience",
        },
        {
          id: 1,
          icon: <FaUserGraduate className={styles.oIcon} />,
          heading: "Career stage",
          para: "Early to mid-career professionals interested in marketing analytics",
        },
        {
          id: 1,
          icon: <GiStairsGoal className={styles.bIcon} />,
          heading: "Aspirations",
          para: "To become a data-driven marketer and optimize strategies",
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
          domain: "Coca-Cola",
          CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/coca.png",
          SDesc:
            " Coca-Cola used Tableau to optimize their social media campaign performance by analyzing the data from their social (KPI)...",
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
          ProjectTitle: "Marketing Domain",
          Title:
          "Coca-Cola",
          LDesc:
          "Coca-Cola used Tableau to optimize their social media campaign performance by analyzing the data from their social media channels and identifying key performance indicators (KPIs)."
        },
        {
          id: 2,
          domain: "Amazon",
          CLogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/amazon.png",
          SDesc:
            " Amazon used Google Analytics to track their website traffic and analyze customer behavior, enabling them to optimize their online shopping experience.",
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
          ProjectTitle: "Marketing Domain",
          Title:
            "Amazon",
          LDesc:
          "Amazon used Google Analytics to track their website traffic and analyze customer behavior, enabling them to optimize their online shopping experience."
        },
        {
          id: 3,
          domain: "Procter & Gamble",
          CLogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/P%26G.png",
          SDesc:
          "Procter & Gamble used SAS to analyze customer data and identify patterns in customer behavior, enabling them to make data-driven decisions....",
          
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
          ProjectTitle: "Manufacturing Domain",
          Title:
            "Procter & Gamble",
          LDesc:
          "Procter & Gamble used SAS to analyze customer data and identify patterns in customer behavior, enabling them to make data-driven decisions about their marketing strategy."
        },
        {
          id: "BMW",
          domain: "Netflix",
          CLogo:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/netflix+(1).png",
          SDesc:
            "Netflix used A/B testing and machine learning algorithms to optimize their recommendations engine and improve the personalized content.....",
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
          ProjectTitle: "Marketing Domain",
          Title: "Netflix",
          LDesc:
          "Netflix used A/B testing and machine learning algorithms to optimize their recommendations engine and improve the personalized content recommendations for their users."
        },
        {
          id: 5,
          domain: "Uber",
          CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/uber.png",
          SDesc:
         "Uber used predictive analytics and machine learning algorithms to optimize their pricing strategies and surge pricing algorithm.....",       
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
          ProjectTitle: "Marketing Domain",
          Title:
            "Uber",
          LDesc:
          "Uber used predictive analytics and machine learning algorithms to optimize their pricing strategies and surge pricing algorithm, enabling them to provide a better user experience."
        },
        {
          id: 6,
          domain: "Airbnb",
          CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/airbnb.png",
          SDesc:
          "Airbnb used data analytics tools such as R and Python to analyze customer data and improve their marketing campaigns....",           
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
          ProjectTitle: "Marketing Domain",
          Title:
            "Airbnb",
          LDesc:
          "Airbnb used data analytics tools such as R and Python to analyze customer data and improve their marketing campaigns, resulting in increased customer engagement and revenue."
        },
        {
          id: 7,
          domain: " Walmart",
          CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png",
          SDesc:
          "Walmart used Hadoop and Hive to analyze customer data and identify patterns in customer behavior.......",    
          PopupImg:
            "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
          Title:
            "Walmart",
          ProjectTitle: "Marketing Domain",
  
          LDesc:
          "Walmart used Hadoop and Hive to analyze customer data and identify patterns in customer behavior, enabling them to optimize their marketing campaigns and increase sales."
        },
      ],
      Certificate: {
        twoCertificate: [
          {
            id: 1,
            img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Certificate-blue.png",
            title: "Course Completion Certificate from IBM",
            para: [
              "Complete your training with the internationally recognized certificate",
              "Validate your Data Science and AI skills with IBM Course Completion Certificate",
              "Get acknowledged in IT sector by adding IBM Certificate to your profile",
            ],
          },
          {
            id: 2,
            img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Microsoft-certificate-data.png",
            title: "Certification in Collaboration with Microsoft",
            para: [
              "Industry-certified Microsoft certificates",
              "Gain expertise & get recognized worldwide",
              "Boost job opportunities and earnings with Microsoft’s certification",
            ],
          },
        ],
      },
      syllabusDesc:
      "Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All sessions are covered practically with real-time industrial projects and case studies.",
    popupHead: "Download Data science Course Brochure",
    syllabusHead: [
      "Term 1 Foundation Track(30 ECTS Credits)",
      "Term 2 Statistics & Machine Learning( 25 ECTS Credits) ",
      "Term 3 Artificial Intelligence Tools( 25 ECTS Credits)",
      "Term 4 :- Artificial Intelligence Tools( 25 ECTS Credits) ",
      "Term 5 :- Deployment (AWS+Azure)( 25 ECTS Credits) ",
    ],
    MasterSyllabusDefault: [
      {
        Module0: {
          title: "Module 0 :- Preparatory Classes (Programming + Maths)",
          content: [
            {
              chap: {
                title: "Topic 1 :- Cohort Orientation ",
                desc: [
                  "A brief introduction to tools related to data ",
                  "Learn about particular real-time projects and Capstone projects",
                  "Data and its impact on career opportunities",
                  "Utilizing data, to enhance industrial operations and management",
                ],
              },
            },

            {
              chap: {
                title: "Topic 2 :- Fundamentals of Programming",
                desc: [
                  "Introduction to Anaconda & Jupyter notebook",
                  "Flavors of python Introduction to Git, GitHub",
                  "Python Fundamentals",
                ],
              },
            },
            {
              chap: {
                title: "Topic 3 :- Fundamentals of Statistics",
                desc: [
                  "Mean, Median, Mode",
                  "Standard Deviation, Average. Probability, Permutations, and Combinations",
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
          title: "Term 1 :- Python for Data Science",
          content: [
            {
              chap: {
                title: "Module 1 :- Python Programming",
                desc: [
                  "Programming Basics & Environment Setup",
                  "Python Programming Overview",
                  "Strings, Decisions & Loop Control",
                  "Python Data Types",
                  "Functions And Modules",
                  "Class hands-on: 8+ Programs to be covered in the functions, Lambda, modules, Generators, and Packages class",
                  "File I/O And Exceptional Handling and Regular Expression",
                  "Class hands-on: 10+ Programs to be covered in class from File IO, Reg-ex and exception handling",
                  "Data Analysis Using Numpy",
                  "Data Analysis Using Pandas",
                  "Data Visualization using Matplotlib",
                  "Data Visualization using Seaborn",
                  "Case Study on Numpy, Pandas, Matplotlib 1 Case Study on Pandas And Seaborn",
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
      "Term 1 Foundation Track(30 ECTS Credits)": [
        {
          Module0: {
            title: "Module 0 :- Preparatory Classes (Programming + Maths)",
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
            title: "Term 1 :- Python Programming",
            content: [
              {
                chap: {
                  title: "Module 1 :- Python Programming ",
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
            open: false,
          },
        },
      ],
      "Term 2 Statistics & Machine Learning( 25 ECTS Credits) ": [
        {
          Module0: {
            title: "Term 1 :- Python Programming",
            content: [
              {
                chap: {
                  title: "Module 1 :- Python Programming ",
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
            open: false,
          },
        },
      ],
      "Term 3 Artificial Intelligence Tools( 25 ECTS Credits)": [
        {
          Module0: {
            title: "Term 2 :- Statistics & Basic Machine Learning",
            content: [
              {
                chap: {
                  title: "Module 1 :- Statistics",
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
                  title: "Module 2 :- Machine Learning",
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
      "Term 4 :- Artificial Intelligence Tools( 25 ECTS Credits) ": [
        {
          Module0: {
            title: "Term 3 :- Data Analytics Tools",
            content: [
              {
                chap: {
                  title: "Module 1 :- SQL",
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
                  title: "Module 2 :- PowerBI",
                  desc: [
                    "Getting Started With Power BI",
                    " Programming with Power BI",
                  ],
                },
              },
              {
                chap: {
                  title: "Module 3 :- Big Data & Spark Analytics",
                  desc: [
                    " Introduction To Hadoop & Big Data",
                    "What is Spark",
                    " Getting to know PySpark Hands-on: Map reduce Use Case : Youtube data analysis & Spark RDD       programming",
                  ],
                },
              },
              {
                chap: {
                  title: "Module 4 :- Time Series",
                  desc: [
                    " Introduction to Time Series Forecasting",
                    "Introduction to ARIMA Models,Case Study on Time series classification of smartphone data to predict user behavior, Performing Time Series Analysis on Stock Prices & Time series forecasting of sales data",
                  ],
                },
              },
            ],
            id: 3,
            open: false,
          },
        },
      ],
      "Term 5 :- Deployment (AWS+Azure)( 25 ECTS Credits) ": [
        {
          Module0: {
            title: "Term 4 :- Excel",
            content: [
              {
                chap: {
                  title: "",
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
            id: 4,
            open: false,
          },
        },
      ],
    },
      faq: [
        {
          id: 1,
          sectionName: "Course Related",
          data: [
            {
              id: 0,
              ques: "What are the prerequisites for the Markering Program?",
              ans: "There are no prerequisites for this Markering certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
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
              ques: "What is a Flexi Subscription in the Markering Program?",
              ans: `Those who enroll for Markering live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends.`,
              open: false,
            },
            {
              id: 3,
              ques: "What’s the duration of the Markering Program?",
              ans: `The duration of this Markering Course is about 6 months (180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on weekdays and weekend batches.
              Weekday batch – 5 months, Monday to Friday – 2 hours/day,
              Weekend batch – 6.5 months, Saturday & Sunday – 3.5 hours/day.`,
              open: false,
            },
            {
              id: 4,
              ques: "What is the mode of Markering training at Learnbay?",
              ans: "We provide both classroom and online Markering training modes. Based on your requirement, you can choose your preferred mode.",
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
              ques: "What is the total fee for the Markering Program?",
              ans: "We offer industry-specific full-stack Markering modules, via which you learn the respective industry’s best practices.The total program fee for the Markering Program is INR 89,000 + 18% GST.",
              open: true,
            },
            {
              id: 1,
              ques: "Can I pay in installments for INR 89,000 + 18% GST ?",
              ans: "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 8,752/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more",
              linkText1: " +917795687988 ",
              link1: "tel:+917795687988",
              link: true,
              open: false,
            },
            {
              id: 2,
              ques: "Is there any scholarship/discount available for the Markering Program? What is Group Discount?",
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
              ques: "What is the refund policy for the Markering Program at Learnbay?",
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
              ans: "Yes, you will be awarded IBM accredited Markering Certificate on successful course completion.",
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
          
              ans: `You should have completed the course with :
              A minimum score of 70% in assessments.
              Should have completed the assignments and case studies.
              Worked and successfully completed the minimum recommended number of real-time projects.`,
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
          
              ans: "Our Mentors will provide Markering training to the students until the completion of the course.",
              open: true,
            },
            {
              id: 1,
              ques: "Can a Learnbay student choose to study from their desired mentor?",
              ans: "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors.",
              open: false,
            },
          ]
        },
        {
          id: 8,
          sectionName: "Support",
          data: [
            {
              id: 0,
              ques: "When is the job assistance provided at Learnbay?",
          
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
  
  