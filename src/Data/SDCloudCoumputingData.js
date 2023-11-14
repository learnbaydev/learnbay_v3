import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export const SDCloudCourseData = [
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
        para: "Use tech innovation to drive career growth & acquire in-demand skills",
      },
    ],
    testimonial: [
      {
        id: 1,
        name: "Qudsia Tahniyath",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Qudsia.png",
        sDesc:
          "Learnbay has helped me a lot to learn data science applications in the e-commerce industry. The live class concept was really helpful in receiving proper DS training. Thanks to all my mentors and the placement team.",
      },
      {
        id: 2,
        name: "Binit Kumar Swalsingh",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/binit.png",
        sDesc:
          "I've been with this org since Jan 4, 2023, studying Full Stack Software Development. If you have ambition and need a mentor to show you the right path to success with the right knowledge, I highly recommend this org.",
      },
      {
        id: 3,
        name: "Swarup Halder",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/swarup.png",
        sDesc:
          "I have enrolled in Software Development course. I had basic knowledge of DSA and since then it has been a wonderful learning experience. The teacher does an excellent job of explaining the concepts in a way that is easy to understand.",
      },
      {
        id: 4,
        name: "Karanveer Bansal",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/karanveer.png",
        sDesc:
          "I enrolled in Learnbay's full stack program. I already completed basic DSA and the live sessions were clear, with good teaching pace. They offer an easy and simple EMI option for course fees.",
      },
      {
        id: 5,
        name: "Gowthaman Jeganathan",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Gowthaman.png",
        sDesc:
          "I'm currently enrolled in the Full Stack course and have completed the DSA and System Design modules. The trainers' teaching method has been enlightening for me as a beginner. Highly recommend Learnbay for upskilling.",
      },
      {
        id: 6,
        name: "Abhishek Pakhide",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Gowthaman.png",
        sDesc:
          "I recently finished Learnbay's Basic DSA Course online. The course is well-structured, taught by knowledgeable trainers with a focus on interview preparation and data structure concepts. It benefits both novices and experts.",
      },
    ],
    thirdSection: [
      {
        id: 1,
        icon: <MdOutlineCastForEducation className={styles.bIcon} />,
        heading: "Education",
        para: "Bachelor's degree with consistent good academics",
      },
      {
        id: 1,
        icon: <MdOutlineWorkOutline className={styles.oIcon} />,
        heading: "Work experience",
        para: "Minimum 1 year of IT work experience",
      },
      {
        id: 1,
        icon: <FaUserGraduate className={styles.oIcon} />,
        heading: "Career stage",
        para: "Computer Science, B.Tech, B.Sc. pursuing students",
      },
      {
        id: 1,
        icon: <GiStairsGoal className={styles.bIcon} />,
        heading: "Aspirations",
        para: "Preparing for future leadership roles in cloud industry",
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
        desc: "100% Placement Support",
      },
    ],
    project: [
      {
        id: 1,
        domain: "HR Domain",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/paypal.png",
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
        domain: "Paypal",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/paypal.png",
        SDesc:
          "  In this project, infrastructure monitoring is set up using Nagios to provide visibility and alerts on critical system resources.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "PayPal",
        Title: "Infrastructure Monitoring with Nagios",
        LDesc:
          "In this project, infrastructure monitoring is set up using Nagios to provide visibility and alerts on critical system resources.",
      },
      {
        id: 2,
        domain: "Amazon",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/amazon.png",
        SDesc:
          "This project involves building a continuous integration and delivery pipeline using Jenkins and Kubernetes for automated  application deployment.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "Amazon",
        Title: "Automated CI/CD Pipeline using Jenkins and Kubernetes",
        LDesc:
          "This project involves building a continuous integration and delivery pipeline using Jenkins and Kubernetes for automated application deployment.",
      },
      {
        id: 3,
        domain: "Spotify ",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/spotify.png",
        SDesc:
          "This project involves containerizing applications using Docker, enabling efficient and consistent application deployment.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Spotify ",
        Title: "Contnerization with Docker",
        LDesc:
          "This project involves containerizing applications using Docker, enabling efficient and consistent application deployment.",
      },
      {
        id: "BMW",
        domain: "Netflix",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/netflix+(1).png",
        SDesc:
          "The aim of this project is to manage infrastructure configurations using Ansible, enabling efficient and effective configuration management.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "Netflix",
        Title: "Configuration Management with Ansible",
        LDesc:
          "The aim of this project is to manage infrastructure configurations using Ansible, enabling efficient and effective configuration management.",
      },
      {
        id: 5,
        domain: "Uber",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/uber.png",
        SDesc:
          "The objective of this project is to build an ELK stack for efficient and effective monitoring and logging of   applications.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Uber",
        Title: "Monitoring and Logging with ELK Stack",
        LDesc:
          "The objective of this project is to build an ELK stack for efficient and effective monitoring and logging of applications.",
      },
      {
        id: 6,
        domain: "Airnb",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/airbnb.png",
        SDesc:
          "In this project, infrastructure is automated using Terraform to create, manage and update infrastructure resources.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Airnb",
        Title: "Infrastructure Automation using Terraform",
        LDesc:
          "In this project, infrastructure is automated using Terraform to create, manage and update infrastructure resources",
      },
      {
        id: 7,
        domain: "Walmart",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png",
        SDesc:
          "The objective of this project is to use JMeter to conduct performance testing on applications and infrastructure, ensuring optimal performance and scalability",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title: "Performance Testing with JMeter",
        ProjectTitle: "Walmart",

        LDesc:
          "The objective of this project is to use JMeter to conduct performance testing on applications and infrastructure, ensuring optimal performance and scalability.",
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
      // microCertificate: {
      //   id: 2,
      //   img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Azure%2BAI%2BFundamentals.png",
      //   title: "Certification in Collaboration with Microsoft",
      //   para: [
      //     "Industry-certified Microsoft certificates",
      //     "Gain expertise & get recognized worldwide",
      //     "Boost job opportunities and earnings with Microsoft’s certification",
      //   ],
      // },
      // projectCertificate: {
      //   id: 3,
      //   img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Certification-min.webp",
      //   title: "Capstone Project Certificate from IBM",
      //   para: [
      //     "Globally recognized IBM certification based on industrial-level projects.",
      //     "Work on 1 capstone project certified by IBM.",
      //     "Individualized project experience with easy access to premium job opportunities.",
      //   ],
      // },
    },
    syllabusDesc:
      "Learnbay provides Live, Interactive Online Sessions guided by Professionals working in top MNCs. All sessions are covered practically with real-time industrial projects and case studies.",
    popupHead: "Download Data science Course Brochure",
    syllabus: [
      {
        Module0: {
          title: "Term 1 :- Programming Fundamentals",
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
          title: "Term 2 :- Basic DSA",
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
          ],
          id: 1,
          open: false,
        },
      },
      {
        Module0: {
          title: "Term 2 :- Advanced DSA",
          content: [
            {
              chap: {
                title: "Module 1 :- Maths",
                desc: [
                  "Modular Arithmetic, Modular Exponentiation, GCD, Modular Multiplicative Inverse",
                  " GCD, Primality Testing, Seive of Eratosthenes",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Analysis of Algorithm - Advance",
                desc: ["Greedy"],
              },
            },
            {
              chap: {
                title: "Module 3 :- Advance Data Structure",
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
                title: "Module 4 :- Analysis of Algorithm - Advance",
                desc: [
                  "Dynamic Programming",
                  "Graph - 5 [Minimum Spanning Tree, Floyd Warshall, Topological Sorting]",
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
          title: "Term 3 :- System Design",
          content: [
            {
              chap: {
                title: "Module 1 :- Introduction to System Design",
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
                title: "Module 2 :- Design Principles",
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
                title: "Module 3 :- Design Patterns",
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
                title: "Module 4 :- Low-Level Design (HLD)",
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
                title: "Module 5 :- High-Level Design (HLD)",
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
                title: "Module 6 :- Scalability and Performance",
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
                title: "Module 7 :- Security and Reliability",
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
                title: "Module 8 :- Integration and Deployment",
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
          title: "Term 3 :- Cloud Computing",
          content: [
            {
              chap: {
                title: "Module 1 :- Cloud computing",
                desc: [
                  "Definition, benefits, and challenges",
                  "Cloud service models: IaaS, PaaS, SaaS",
                  "Cloud deployment models: public, private, hybrid",
                  "Popular providers: AWS, Azure, Google Cloud",
                  "Real-world examples and case studies",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Cloud Services and Technologies",
                desc: [
                  "Storage: S3, EBS, Blob storage",
                  "Databases: RDS, DynamoDB, CosmosDB",
                  "Networking: VPC, Load Balancers, CDN",
                  "Serverless computing: Lambda, Azure Functions, Google Cloud Functions",
                  "DevOps tools: Jenkins, Ansible, Terraform, Kubernetes, Docker",
                ],
              },
            },
            {
              chap: {
                title: "Module 3 :- Advanced Cloud Computing",
                desc: [
                  "Big data and analytics",
                  "Cloud-native architecture and design patterns",
                  "Multi-cloud and hybrid cloud strategies",
                ],
              },
            },
            {
              chap: {
                title: "Module 4 :- Cloud Infrastructure",
                desc: [
                  "Virtualization, containers, and microservices",
                  "DevOps principles for cloud architecture",
                  "Cloud security and compliance",
                ],
              },
            },
            {
              chap: {
                title: "Module 5 :- Real-World Applications",
                desc: [
                  "Deploying applications to the cloud",
                  "Setting up CI/CD pipelines",
                  "Building and deploying microservices",
                  "Security and compliance in the cloud",
                  "Handling failure and scaling in the cloud",
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
          title: "Term 4 :- Devops",
          content: [
            {
              chap: {
                title: "Module 1 :- Agile Principles and Methodologies",
                desc: [
                  "Agile Manifesto and Principles",
                  "Scrum, Kanban, and Lean methodologies",
                  "Agile project planning and estimation",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- DevOps Culture and Practices",
                desc: [
                  "Overview of DevOps culture and practices",
                  "Collaborative culture and communication practices",
                  "Continuous feedback and improvement",
                ],
              },
            },
            {
              chap: {
                title: "Module 3 :- Project Management and Development Process",
                desc: [
                  "Agile development process: sprints, user stories, backlogs",
                  "Tools and Infrastructure Setup:",
                  "Version control systems (e.g., Git)",
                  "Containerization (e.g., Docker)",
                  "Cloud infrastructure (e.g., AWS)",
                ],
              },
            },
            {
              chap: {
                title:
                  "Module 4 :- Continuous Integration (CI) and Continuous Deployment (CD)",
                desc: [
                  "CI/CD principles and practices",
                  "Automated testing and quality assurance",
                ],
              },
            },
            {
              chap: {
                title: "Module 5 :- Infrastructure as Code (IaC) ",
                desc: [
                  "Introduction to IaC",
                  "Infrastructure automation with Terraform",
                ],
              },
            },
            {
              chap: {
                title: "Module 6 :- Security and Compliance ",
                desc: [
                  "Security principles and best practices",
                  "Identity and access management (IAM)",
                ],
              },
            },
            {
              chap: {
                title: "Module 7 :- Advanced DevOps Concepts",
                desc: ["Microservices architecture", "Serverless computing"],
              },
            },
            {
              chap: {
                title: "Module 7 :- Industry Use Cases and Best Practices",
                desc: [
                  "Case studies and real-world examples of DevOps implementation",
                  "Best practices for successful DevOps adoption",
                  "Scaling DevOps in enterprise organizations",
                  "Future trends and innovations in DevOps",
                ],
              },
            },
          ],
          id: 4,
          open: false,
        },
      },
    ],
    advSyllabus: [
      {
        Module0: {
          title: "Term 2 :- Basic DSA",
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
          ],
          id: 0,
          open: true,
        },
      },
      {
        Module0: {
          title: "Term 2 :- Advanced DSA",
          content: [
            {
              chap: {
                title: "Module 1 :- Maths",
                desc: [
                  "Modular Arithmetic, Modular Exponentiation, GCD, Modular Multiplicative Inverse",
                  " GCD, Primality Testing, Seive of Eratosthenes",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Analysis of Algorithm - Advance",
                desc: ["Greedy"],
              },
            },
            {
              chap: {
                title: "Module 3 :- Advance Data Structure",
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
                title: "Module 4 :- Analysis of Algorithm - Advance",
                desc: [
                  "Dynamic Programming",
                  "Graph - 5 [Minimum Spanning Tree, Floyd Warshall, Topological Sorting]",
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
          title: "Term 3 :- System Design",
          content: [
            {
              chap: {
                title: "Module 1 :- Introduction to System Design",
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
                title: "Module 2 :- Design Principles",
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
                title: "Module 3 :- Design Patterns",
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
                title: "Module 4 :- Low-Level Design (HLD)",
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
                title: "Module 5 :- High-Level Design (HLD)",
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
                title: "Module 6 :- Scalability and Performance",
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
                title: "Module 7 :- Security and Reliability",
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
                title: "Module 8 :- Integration and Deployment",
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
            ques: "What are the prerequisites for the Software Development Program with Specialization in Cloud Computing & DevOps?",
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
            ques: "What is a Flexi Subscription in the Software Development Program with Specialization in Cloud Computing & DevOps?",
            ans: `Those who register for live online/hybrid training in Software Development Program with Specialization in Cloud Computing & DevOps are eligible for a Flexi Pass. We will get you access to all of the ongoing live classes, recorded videos, and premium study materials for a three-year period. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any classes whenever it is most convenient for you.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of this Software Development Program with Specialization in Cloud Computing & DevOps?",
            ans: `The duration of this Software Development Program with Specialization in Cloud Computing & DevOps is about 6.5 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
          
              Classes will be conducted on Weekdays and Weekend Batches.
              Weekday batch - 8 months
                 Monday to Friday - 2 hours/day
              Weekend batch - 9 months
              Saturday & Sunday - 3.5 hours/day
              After the completion of term 3, you can start working on real-time projects and attend job interviews.`,
            open: false,
          },
          {
            id: 4,
            ques: "What is the mode of training for this Software Development Program with Specialization in Cloud Computing & DevOps at Learnbay?",
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
        id: 2,
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
            ans: "After enrolling in the Software Development Program with Specialization in Cloud Computing & DevOps, one must opt for domain electives for Level 06. It is essential to have a specialization. Because the generic study is not going to help you land a promising and secure job role, also, choosing such specialization will ease your project work, interview preparation as well as job application process easier.",
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
        id: 3,
        sectionName: "Payments and Scholarships",
        data: [
          {
            id: 0,
            ques: "What is the total fee for the Software Development Program with Specialization in Cloud Computing & DevOps?",
            ans: "The total program fee for this course is ,  INR  95,000 + 18% GST",

            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for the course fees?",
            ans: "Yes, you can use a credit card to pay the installments with a no-fee EMI option for INR ₹9,342/month up to 12 months. By presenting an AAadhar card, Pan card, and the latest three months salary slip, you can also avail of an interest-free loan also.",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: " Is there any scholarship/discount available for the Software Development Program with Specialization in Cloud Computing & DevOps? What is Group Discount?",
            ans: `Learnbay offers a 15 - 20% scholarship for early birds occasionally.
              Please check our websites or contact our sales team to know more about the applicable discounts.
              Group Discount :
              Group Discount is applicable only if you’re joining with your friends. 
              5% extra discount: Group of 2
              8% extra discount: Group of 3
              Max 10% discount: Groupe of 4+`,
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
            ans: "We have a set of 12 real-time projects from multiple domains.",
            open: true,
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
        id: 5,
        sectionName: "Certification",
        data: [
          {
            id: 0,
            ques: "Is there any accredited certification after course completion?",
            ans: "Yes, you will be awarded IBM accredited software development Completion Certificate on successful course completion.",
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
        id: 7,
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
        id: 8,
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
