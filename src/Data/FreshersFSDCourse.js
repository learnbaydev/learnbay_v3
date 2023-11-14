import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export const FreshersFSDData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "On-Demand Doubt Session",
        para: "Expert-led Q&A sessions for immediate doubt resolution",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "IBM Certificate",
        para: "Boost skills with IBM course completion certificate",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png",
        height: "50",
        width: "53",
        heading: "Case Studies",
        para: "Gain intensive practical experience through Case Studies",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png",
        height: "40",
        width: "40",
        heading: "Interactive Live Classes",
        para: "Expert-led live classes with hands-on experience",
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
        para: "Students pursuing or completed their bachelor's degree",
      },
      {
        id: 1,
        icon: <MdOutlineWorkOutline className={styles.oIcon} />,
        heading: "Domain",
        para: "Any fresher from tech or non-tech domain",
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
        para: "Designed for individuals seeking software development skills",
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
        desc: "Get 6 mock interviews with industry leaders",
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
        domain: "Portfolio Website",

        SDesc:
          " Interactive Personal Website, List professional Details like experience and educations,  Showcase your Projects and achievements, SEO Friendly to rank on google,  Deployed on Github Pages.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "PayPal",
        Title: "Infrastructure Monitoring with Nagios",
        LDesc:
          "In this project, infrastructure monitoring is set up using Nagios to provide visibility and alerts on critical system resources.",
      },
      {
        id: 2,
        domain: "Website clone",
        SDesc:
          " Clone website like facebook, amazon, flipkart, zomato etc. Pixel perfect cloning of the website,  Multiple pages, Deployed on Github Pages.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "Amazon",
        Title: "Automated CI/CD Pipeline using Jenkins and Kubernetes",
        LDesc:
          "This project involves building a continuous integration and delivery pipeline using Jenkins and Kubernetes for automated application deployment.",
      },
      {
        id: 3,
        domain: "Link Tree",
        SDesc:
          "Custom link tree, Personal and social links, QR code to open the link, Deployed on GitHub Pages,",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Spotify ",
        Title: "Contnerization with Docker",
        LDesc:
          "This project involves containerizing applications using Docker, enabling efficient and consistent application deployment.",
      },
      {
        id: "BMW",
        domain: "Movie App",
        SDesc:
          "Online application with all the movies and series,  User can search for any movie, User can view the movie details, Deployed on Netlify.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "Netflix",
        Title: "Configuration Management with Ansible",
        LDesc:
          "The aim of this project is to manage infrastructure configurations using Ansible, enabling efficient and effective configuration management.",
      },
      {
        id: 5,
        domain: "Meme Generator",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/uber.png",
        SDesc:
          "Online application to view trending memes, User can upload and created meme on the go",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Uber",
        Title: "Monitoring and Logging with ELK Stack",
        LDesc:
          "The objective of this project is to build an ELK stack for efficient and effective monitoring and logging of applications.",
      },
      {
        id: 6,
        domain: "Real Time Chat Application",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/airbnb.png",
        SDesc:
          "Login/Signup to access the application, Invite people using emails, create chat rooms,Add one-o-one chat with other users. ",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Airnb",
        Title: "Infrastructure Automation using Terraform",
        LDesc:
          "Login/Register to the application,  Add daily tasks for themselves, Assign a due date of completeion,  Mark them as complete/incomplete, View weekly/monthly statistics of thier todos.",
      },
      {
        id: 7,
        domain: "Task Management",
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

      {
        id: 7,
        domain: "Blog Application",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png",
        SDesc:
          " Login/Signup to the application, Create article, View list of all articles, Edit/Delete his/her own articles,  Add categories, tags and filters to list blog page",
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
          title: "Term 3 :- MERN",
          content: [
            {
              chap: {
                title: "Basics of Frontend development with HTML and CSS",
                desc: [
                  "Understand the basics of Full-Stack Development",
                  " Learn the fundamentals of HTML, including tags, document structure, content and container tags, attributes, and the DOM tree",
                  "Understand the different types of CSS selectors and how they work",
                  "Learn about the box model, display property, form element and its attributes, and flexboxes and grids",
                  "Understand the basics of RWD, animation, and web accessibility",
                  "Gain an understanding of HTML events and how to use them",
                  "Learn about Bootstrap and its components and utilities, including Jumbotron, Button, Grid, Table, Form, Alert, Wells, Badge and label, Panels, Pagination, Pager, Image, Glyphicon, Carousel, Progress Bar, List Group, Tabs/Pill, Navbar, Input Types, Modals, Popover, and Scrollspy.",
                ],
              },
            },
            {
              chap: {
                title: "Web programming with Javascript",
                desc: [
                  "Understanding the basics of JavaScript, including variables, constants, and primitive types.",
                  "Understanding the control flow of JavaScript, including if/else statements, switch/case statements, loops, and break/continue statements.",
                  "Understanding the basics of objects, arrays, and functions in JavaScript.",
                  "Understanding advanced techniques related to arrays, such as sorting, filtering, and mapping.",
                  "Understanding the basics of OOP, including factories and constructor functions, value and reference types, and private properties and methods.",
                  "Understanding prototypes, prototype inheritance, and multilevel inheritance in JavaScript.",
                  "Understanding DOM manipulation, including the DOM model, DOM selectors, and style manipulation.",
                  "Understanding operators and ES6, including classes, static methods, closures, and inheritance.",
                  "Understanding asynchronous JavaScript, including JSON, promises, and fetch.",
                ],
              },
            },
            {
              chap: {
                title: "React",
                desc: [
                  "Understand the basics of React, including JSX, components, props, and state",
                  "Learn how to work with events and forms in React",
                  "Understand how to render conditional content in React",
                  "Learn how to work with APIs in React and handle requests",
                  "Understand advanced React concepts, such as Context API and creating custom hooks",
                  "Learn how to use Redux to manage state in React",
                  "Understand core Redux concepts, such as actions, reducers, and store",
                  "Learn how to connect React to Redux with React Redux",
                  "Understand how to refactor code using Redux Toolkit",
                  "Learn how to handle async actions with middleware and thunks in Redux.",
                ],
              },
            },
            {
              chap: {
                title: "NodeJS with Express and MongoDB",
                desc: [
                  "Understanding the basics of JavaScript, including variables, constants, and primitive types.",
                  "Understanding the control flow of JavaScript, including if/else statements, switch/case statements, loops, and break/continue statements.",
                  "Understanding the basics of objects, arrays, and functions in JavaScript.",
                  "Understanding advanced techniques related to arrays, such as sorting, filtering, and mapping.",
                  "Understanding the basics of OOP, including factories and constructor functions, value and reference types, and private properties and methods.",
                  "Understanding prototypes, prototype inheritance, and multilevel inheritance in JavaScript.",
                  "Understanding DOM manipulation, including the DOM model, DOM selectors, and style manipulation.",
                  "Understanding operators and ES6, including classes, static methods, closures, and inheritance.",
                  "Understanding asynchronous JavaScript, including JSON, promises, and fetch.",
                ],
              },
            },
            {
              chap: {
                title: "Deployment and Hosting with GIT",
                desc: [
                  "Understand the concept of version control and its benefits",
                  "Learn about Git and its differences from other VCS",
                  "Install Git and create local and remote repositories",
                  "Understand Git commands and workflows",
                  "Learn how to work with Git in IDE and real-time open-source projects",
                  "Understand Git server administration and user management",
                ],
              },
            },
          ],
          id: 1,
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
            ques: "What are the prerequisites for the Data Science Foundation Program?",
            ans: "There are no prerequisites for this Data Science Foundation course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must.",
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
            ques: "What is a Flexi Subscription in Data Science Foundation Program?",
            ans: `Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of the Data Science Foundation Program?",
            ans: "The duration of this Data Science Course is about 7 months (200+ hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch – 5 months, Monday to Friday – 2 hours/day, Weekend batch – 7 months, Saturday & Sunday – 3.5 hours/day",
            open: false,
          },
          {
            id: 4,
            ques: "What is the mode of Data Science training at Learnbay?",
            ans: "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode.",
            open: false,
          },
          {
            id: 5,
            ques: "How can I opt for a Hybrid mode of learning?",
            ans: "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone project and interview preparation sessions.",
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
            ques: "What is the total fee for Data Science Foundation Program?",
            ans: "The total program fee for the Data Science Foundation Program is INR 93,220/- inclusive of GST.",
            open: true,
          },
          {
            id: 1,
            ques: "Can I pay in installments for Data Science Foundation Program?",
            ans: "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more.",
            linkText1: " +917795687988 ",
            link1: "tel:+917795687988",
            link: true,
            open: false,
          },
          {
            id: 2,
            ques: "Is there any scholarship/discount available for Data Science Foundation Program? What is Group Discount?",
            ans: `Learnbay offers a 15 – 20% scholarship for early birds occasionally.
          Please check our websites or contact our sales team to know more about the applicable discounts.
          Group Discount :
          Group Discount is applicable only if you’re joining with your friends.
          5% extra discount : Group of 2,
          8% extra discount : Group of 3,
          Max 10% discount : Group of 4+`,
            open: false,
          },
          {
            id: 3,
            ques: "What is the refund policy for the Data Science Foundation Program at Learnbay?",
            ans: "Candidates are advised to read  ",
            linkText1: "Learnbay’s Refund/Cancellation Policy",
            link1: "/refund-cancellation-policy",
            ansAfter: "  before enrolling in the program.",
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
            ques: "How many capstone projects will be there?",
            ans: "In this course, you’ll be working on 1 fresh capstone project. The project will be a first-hand one associated with any startup Company.",
            open: true,
          },
          {
            id: 1,
            ques: "How many real-time projects/case-studies will be covered in the Data Science Foundation Program?",
            ans: "We have a set of 8 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc.",
            linkText1: " Click here to download the list of the projects.",
            link1:
              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf",
            link: true,
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
