import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import styles from "../components/CoursePage/WhoProgram/ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export const BlockchainFSDData = [
  {
    secondSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png",
        height: "40",
        width: "43",
        heading: "On-Demand Doubt Session",
        para: "Get personalised doubt clearing session with industry experts",
      },
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png",
        height: "42",
        width: "42",
        heading: "IBM Certificate",
        para: "Enhance your technical skills & get IBM course completion certificate",
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
        para: "Learn blockchain tools and techniques to excel in your career",
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
        para: "Minimum 6 months of experience in IT/Non-IT domain",
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
        para: "Professionals looking to upskill for better career growth",
      },
    ],
    fourthSection: [
      {
        id: 1,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png",
        desc: "Enjoy 3+ years of career service access",
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
        domain: "IBM's TradeLens",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/1-1.png",
        SDesc:
          "Supply chain management platform that enables secure and transparent sharing of trade data.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png",
        ProjectTitle: "Logistics and Shipping",
        Title: "IBM's TradeLens",
        LDesc:
          "Supply chain management platform that enables secure and transparent sharing of trade data. Tools: Hyperledger Fabric, Kubernetes, and Docker.",
      },
      {
        id: 2,
        domain: "JPMorgan's Quorum",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/jpmorgan.png",
        SDesc:
          " Permissioned blockchain platform for financial institutionsthat provides privacy features and efficient settlement of financial transactions",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png",
        ProjectTitle: "Finance",
        Title: "JPMorgan's Quorum",
        LDesc:
          "Permissioned blockchain platform for financial institutions that provides privacy features and efficient settlement of financial transactions. Tools: Ethereum, Solidity, and Go.",
      },
      {
        id: 3,
        domain: "Netflix",
        CLogo: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/9-1.png",
        SDesc:
          " The project involves developing a video streaming service that allows users to watch movies and TV shows.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Manufacturing Domain",
        Title:
          "Condition-based preventative maintenance and fault prediction in depth",
        LDesc:
          "he project involves developing a video streaming service that allows users to watch movies and TV shows. Tools: Java, Spring Boot, React, and MySQL",
      },
      {
        id: "BMW",
        domain: "Microsoft's Azure Blockchain Service",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/microsoft.png",
        SDesc:
          "  Cloud-based platform that allows for easy deployment and   management of blockchain networks. Supports multiple protocols and integrates with existing enterprise systems.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png",
        ProjectTitle: "Cloud-based",
        Title: "Microsoft's Azure Blockchain Service",
        LDesc:
          "Cloud-based platform that allows for easy deployment and management of blockchain networks. Supports multiple protocols and integrates with existing enterprise systems. Tools: Ethereum, Corda, and Hyperledger Fabric.",
      },
      {
        id: 5,
        domain: "Walmart's Food Traceability Initiative",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/walmart.png",
        SDesc:
          "  Blockchain-based system for tracking food products in the  supply chain, providing transparency and visibility to customers.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Food and Agriculture.",
        Title: "Walmart's Food Traceability Initiative",
        LDesc:
          "Blockchain-based system for tracking food products in the supply chain, providing transparency and visibility to customers. Tools: Hyperledger Fabric.",
      },
      {
        id: 6,
        domain: "Visa's B2B Connect",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/visa.png",
        SDesc:
          "   Cross-border payments platform that uses blockchain  technology for secure and efficient settlement of international payments.",

        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        ProjectTitle: "Finance",
        Title: "Visa's B2B Connect",
        LDesc:
          "Cross-border payments platform that uses blockchain technology for secure and efficient settlement of international payments. Tools: Hyperledger Fabric",
      },
      {
        id: 7,
        domain: "Ride-hailing App",
        CLogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/uber.png",
        SDesc:
          " The project involves developing a ride-hailing app that allows users to request rides, track their location, and pay for their trips.",
        PopupImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png",
        Title: "Ride-hailing App",
        ProjectTitle: "Uber",

        LDesc:
          "The project involves developing a ride-hailing app that allows users to request rides, track their location, and pay for their trips. Tools: Node.js, React Native, MongoDB, and Google Maps API",
      },
    ],
    Certificate: {
      oneCertificate: {
        id: 3,
        img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Certificate-blue.png",
        title: "Course Completion Certificate from IBM",
        para: [
          "Complete your training with the internationally recognized certificate.",
          "Validate your tech skills with IBM Course Completion Certificate.",
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
          title: "Term 3 :- Blockchain Development",
          content: [
            {
              chap: {
                title: "Module 1 :- Blockchain Basics",
                desc: [
                  "Introduction to blockchain technology",
                  "History and evolution of blockchain",
                  "Types of blockchain (public, private, consortium)",
                  "Consensus mechanisms (Proof of Work, Proof of Stake, etc.)",
                  "Cryptography fundamentals (hashing, digital signatures, etc.)",
                  "Smart contracts and decentralized applications (DApps)",
                ],
              },
            },
            {
              chap: {
                title: "Module 2 :- Blockchain Development",
                desc: [
                  "Setting up development environment (tools and frameworks)",
                  "Developing blockchain network (configuring nodes, creating blockchain, etc.)",
                  "Developing smart contracts (Solidity programming language, Remix IDE, etc.)",
                  "Deploying smart contracts to the blockchain",
                  "Interacting with smart contracts (web3.js library)",
                  "Developing decentralized applications (DApps) on top of blockchain",
                ],
              },
            },
            {
              chap: {
                title: "Module 3 :- Smart Contract Development",
                desc: [
                  "Writing and deploying basic smart contracts using Solidity",
                  "Building more complex smart contracts with the help of libraries and frameworks like OpenZeppelin and Truffle",
                  "Interacting with smart contracts using Web3.js and other tools",
                  "Testing and debugging smart contracts",
                ],
              },
            },
            {
              chap: {
                title: "Module 4 :- Decentralized Finance (DeFi)",
                desc: [
                  "Introduction to DeFi and its components (lending, borrowing, staking, etc.)",
                  "Development of decentralized finance protocols (e.g. Uniswap, Aave, Compound)",
                  "Integration of DeFi protocols with blockchain",
                ],
              },
            },
            {
              chap: {
                title: "Module 5 :- Blockchain Security",
                desc: [
                  "Security threats to blockchain (e.g. 51% attack, smart contract vulnerabilities, etc.)",
                  "Best practices for securing blockchain networks and smart contracts",
                  "Tools and frameworks for blockchain security auditing (e.g. MythX, Truffle Security, etc.)",
                  "Testing and debugging smart contracts",
                ],
              },
            },
            {
              chap: {
                title:
                  "Module 6 :- Web Development with Blockchain Integration",
                desc: [
                  "Building a front-end application with HTML, CSS, and JavaScript",
                  "Integrating the web application with the deployed smart contracts using Web3.js",
                  "Building a user interface to interact with the smart contracts",
                  "Implementing functionality to read and write data to the blockchain",
                ],
              },
            },
            {
              chap: {
                title: "Module 7 :- API Development",
                desc: [
                  "Building a RESTful API to interact with the blockchain network",
                  "Developing endpoints to read and write data to the blockchain",
                  "Implementing security measures to protect against potential attacks",
                ],
              },
            },
            {
              chap: {
                title: "Module 8 :- Database Integration",
                desc: [
                  "Setting up a database to store offchain data related to the blockchain application",
                  "Integrating the database with the API to provide a complete data storage solution",
                  "Implementing functionality to store and retrieve data from the database",
                ],
              },
            },
            {
              chap: {
                title: "Module 9 :- Security and Testing",
                desc: [
                  "Understanding common security vulnerabilities and how to mitigate them in blockchain applications",
                  "Implementing security measures such as encryption and access control",
                  "Testing the application to ensure it meets functional and non-functional requirements",
                  "Conducting stress testing to assess the application's ability to handle high loads",
                ],
              },
            },
            {
              chap: {
                title: "Module 10 :- Security and Testing",
                desc: [
                  "Understanding common security vulnerabilities and how to mitigate them in blockchain applications",
                  "Implementing security measures such as encryption and access control",
                  "Testing the application to ensure it meets functional and non-functional requirements",
                  "Conducting stress testing to assess the application's ability to handle high loads",
                ],
              },
            },
            {
              chap: {
                title: "Module 11 :- Blockchain Interoperability ",
                desc: [
                  "Introduction to cross-chain communication",
                  "Interoperability solutions (e.g. Polkadot, Cosmos, etc.)",
                  "Development of cross-chain protocols and applications",
                ],
              },
            },
            {
              chap: {
                title: "Module 12 :- Enterprise Blockchain",
                desc: [
                  "Use cases of blockchain technology in enterprise",
                  "Developing permissioned blockchain networks (e.g. Hyperledger Fabric, Corda, etc.)",
                  "Integration of blockchain with existing enterprise systems",
                  "Blockchain governance and regulatory compliance",
                ],
              },
            },
            {
              chap: {
                title: "Module 13 :- Blockchain Project Management",
                desc: [
                  "Agile development methodologies for blockchain projects",
                  "Project planning and management for blockchain development",
                  "Collaboration and communication tools for blockchain teams",
                ],
              },
            },
            {
              chap: {
                title: "Module 14 :- Deployment and Maintenance",
                desc: [
                  "Deploying the application to a production environment",
                  "Conducting ongoing maintenance and updates to ensure the application remains secure and functional",
                  "Implementing monitoring and logging to identify and address any issues that arise",
                  "Conducting periodic audits to identify potential security risks and address them proactively.",
                ],
              },
            },
          ],
          id: 4,
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
            ques: "What are the prerequisites for the Software Development Program with Specialization in Blockchain?",
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
            ques: "What is a Flexi Subscription in the Software Development Program with Specialization in Blockchain?",
            ans: `Those who register for live online/hybrid training in Software Development Program with Specialization in Blockchain are eligible for a Flexi Pass. We will get you access to all of the ongoing live classes, recorded videos, and premium study materials for a three-year period. You are free to pause, resume, and finish your study during these three years, and you are welcome to attend any classes whenever it is most convenient for you.`,
            open: false,
          },
          {
            id: 3,
            ques: "What’s the duration of this Software Development Program with Specialization in Blockchain?",
            ans: `The duration of this Software Development Program with Specialization in Blockchain is about 6.5 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations.
        
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
            ques: "What is the mode of training for this Software Development Program with Specialization in Blockchain at Learnbay?",
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
            ans: "After enrolling in the Software Development Program with Specialization in Blockchain, one must opt for domain electives for Level 06. It is essential to have a specialization. Because the generic study is not going to help you land a promising and secure job role, also, choosing such specialization will ease your project work, interview preparation as well as job application process easier.",
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
            ques: "What is the total fee for the Software Development Program with Specialization in Blockchain?",
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
            ques: " Is there any scholarship/discount available for the Software Development Program with Specialization in Blockchain? What is Group Discount?",
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
        id: 3,
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
        id: 4,
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
