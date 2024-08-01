import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Button from "../../Global/Button/Button";
import styles from "./CitiesRight.module.css";

const CitiesRight = ({
  ProgramHead1,
  ProgramHead2,
  ProgramHead3,
  ProgramHead4,
  ProgramHead5,
  ProgramHead6,
  ProgramHead8,
  ProgramBot6,
  ProgramHead7,
  ProgramBot8,
  ProgramBot9,
  ProgramBot7,
  ProgramBot10,
  ProgramBot11,
  ProgramBot12,
  ProgramBot13,
  ProgramBot14,
  ProgramBot15,
  ProgramBot16,
  ProgramBot1,
  ProgramBot2,
  ProgramBot3,
  ProgramBot31,
  ProgramBot32,
  ProgramBot4,
  ProgramBot5,
  CertificationHead1,
  CertificationBot1,
  CertificationBot2,
  CertificationBot3,
  src,
  syllabussrc,
  ModuleHead1,
  ModuleHead2,
  ModuleHead3,
  ModuleHead4,
  ModuleBot1,
  ModuleBot2,
  ModuleBot3,
  ModuleBot4,
  syllabush1,
  syllabusb1,
  SyllabusBotlist11,
  SyllabusBotlist12,
  SyllabusBotlist13,
  SyllabusBotlist14,
  SyllabusBotlist15,
  SyllabusBotlist16,
  syllabush2,
  syllabusb2,
  SyllabusBotlist21,
  SyllabusBotlist22,
  SyllabusBotlist23,
  SyllabusBotlist24,
  SyllabusBotlist25,
  SyllabusBotlist26,
  syllabush3,
  syllabusb3,
  SyllabusBotlist31,
  SyllabusBotlist32,
  SyllabusBotlist33,
  SyllabusBotlist34,
  SyllabusBotlist35,
  SyllabusBotlist36,
  syllabush4,
  syllabusb4,
  SyllabusBotlist41,
  SyllabusBotlist42,
  SyllabusBotlist43,
  SyllabusBotlist44,
  SyllabusBotlist45,
  SyllabusBotlist46,
  JobHead1,
  JobBot1,
  JobBot2,
  JobBot8,
  JobBot9,
  JobHead2,
  JobHead5,
  JobHead6,
  JobBot16,
  JobBot3,
  JobHead3,
  JobHead4,
  JobBot4,
  JobBot5,
  JobBot6,
  JobBot7,
  JobBot11,
  JobBot10,
  JobBot12,
  JobBot13,
  JobBot14,
  JobList1,
  JobList2,
  JobList3,
  JobList4,
  JobList5,
  JobList6,
  JobList7,
  ProjectsBot1,
  ProjectsBot2,
  ProjectsBot3,
  ProjectsHead1,
  ProjectsHead2,
  AlumniBot1,
  src1,
  src2,
  src3,
  src4,
  ProjectsH1,
  ProjectsH2,
  ProjectsH3,
  ProjectsH4,
  Projectsp1,
  Projectsp2,
  Projectsp3,
  Projectsp4,
  Asrc1,
  AlumniH1,
  Alumnip1,
  Asrc2,
  AlumniH2,
  Alumnip2,
  Asrc3,
  AlumniH3,
  Alumnip3,
  Asrc4,
  AlumniH4,
  Alumnip4,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  cityTextDAbangalore,
  cityTextDAhyderabad,
  src22,
  src33,
  cityTextDAPune,
  cityTextJDAPune,
  bAnalystAbout,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  list13,

  list14,
  list15,
  list16,
  list17,
  list18,
  list19,
  list20,
  list21,
  list22,
  list23,
  list24,
  list25,
  list26,
  ProgramBot17,
  ProgramBot18,
  ProgramBot19,
  ProgramBot20,
  ProgramBot22,
  ProgramBot21,
  ProgramBot23,
  ProgramBot24,
  ProgramSpan1,
  ProgramSpan2,
  listJob1,
  listJob2,
  listJob3,
  listJob4,
  listJob5,
  listJob6,
  listJob7,
  listJob8,
  listJob9,
  listJob10,
  listJob11,
  listJob12,
  listJob13,
  listJob15,
  listJob16,

  listJob17,
  listJob18,
  listJob19,
  listJob20,

  listJob21,
  JobBot17,
  listJob14,
  listJob22,
  listJob23,
  listJob24,
  listJob25,
  listJob26,
  listJob27,
  listJob28,
  listJob29,
  listJob30,
  listJob31,
  listJob32,
  listJob33,
  listJob34,
  listJob35,
  listJob36,
  JobHead7,
  JobBot18,

  JobBot15,
  listJob37,
  listJob38,
  listJob39,
  listJob40,
  listJob41,
  listJob42,
  listJob43,
  listJob44,
  listJob45,
  listJob46,
  JobBot19,
}) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    marginTop: "20px",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const headerRowStyle = {
    backgroundColor: "#f2f2f2",
  };
  return (
    <section className={styles.CitiesRightHead}>
      <div id="Program">
        <div className={styles.CitiesRightSpan}>
          <span>About The Program</span>
        </div>
        {bAnalystAbout ? (
          <div style={{ marginBottom: "40px" }}>
            <p className={styles.pp}>{ProgramBot1}</p>
            <p className={styles.pp}>{ProgramBot2}</p>
            <p className={styles.pp}>{ProgramBot3}</p>
            <p className={styles.pp}>{ProgramBot4}</p>
            <p className={styles.pp}>{ProgramBot5}</p>
            <h3 className={styles.pHead}>{ProgramHead1}</h3>
            <p className={styles.pp}>{ProgramBot6}</p>

            <ul>
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
              <li>{list5}</li>
            </ul>
            <h3 className={styles.pHead}>{ProgramHead2}</h3>
            <p className={styles.pp}>{ProgramBot7}</p>

            <table style={tableStyle}>
              <thead>
                <tr style={headerRowStyle}>
                  <th style={thStyle}>Business Analyst</th>
                  <th style={thStyle}>Data Analyst</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>
                    Works with stakeholders and business leaders to suggest work
                    upgrades.
                  </td>
                  <td style={tdStyle}>
                    Cooperate with teams to find practical business answers for
                    the firms.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Calculate ongoing functions and IT structure to get a
                    complete overview of the entire functioning of the company.
                  </td>
                  <td style={tdStyle}>
                    Recognizing and gathering business data for analysis of the
                    company’s business function.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Introduces business findings obtained via analytics to the
                    CEOs and senior pros of the company.
                  </td>
                  <td style={tdStyle}>
                    They are liable for noticing the gaps in the business. It
                    also defines the business issues or needs of the company.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Suggest business ideas to management to improve the firm's
                    monetary gain.
                  </td>
                  <td style={tdStyle}>
                    Inspect data to find patterns and trends where firms face
                    losses or loose ends from the profit lookout.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Produces attractive infographics of their findings regarding
                    future predictions, current cases, and info from past data.
                  </td>
                  <td style={tdStyle}>
                    Their primary role is to polish and prepare data for
                    analysis. It helps business analysts gain useful insights
                    from it.
                  </td>
                </tr>

                <tr>
                  <td style={tdStyle}>
                    Produces financial models to uphold business moves
                  </td>
                  <td style={tdStyle}>
                    Data Presentation depicting the real lagging points of the
                    business
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className={styles.pHead}>{ProgramHead3}</h3>
            <p className={styles.pp}>{ProgramBot8}</p>
            <table style={tableStyle}>
              <thead>
                <tr style={headerRowStyle}>
                  <th style={thStyle}>Data Scientists</th>
                  <th style={thStyle}>Business Analysts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>
                    They learn concepts like statistics, algorithms, and
                    technology.
                  </td>
                  <td style={tdStyle}>
                    These experts engage more in statistical analysis of
                    business data sets to gain insights.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    It uses both structured and non-structured data sets.
                  </td>
                  <td style={tdStyle}>It uses structured data sets only.</td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    Working as a data scientist needs experts to be well-versed
                    in coding.
                  </td>
                  <td style={tdStyle}>
                    Working as a business analyst needs experts to be
                    well-versed in statistical concepts.
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>
                    The crowd of data scientists is present mainly in
                    manufacturing, machine learning, e-commerce, finance, etc.
                  </td>
                  <td style={tdStyle}>
                    The crowd of business analysts is present mainly in
                    healthcare, supply chain, retail, etc.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className={styles.pHead}>{ProgramHead4}</h3>

            <p className={styles.pp}>{ProgramBot9}</p>
            <ul
              style={{
                listStyleType: "lower-alpha",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li>{list6}</li>
              <li> {list7}</li>
              <li>{list8}</li>
              <li> {list9}</li>
              <li>{list10}</li>
              <li> {list11}</li>
              <li> {list12}</li>
            </ul>
            <p className={styles.pp}>{ProgramBot10}</p>
            <h3 className={styles.pHead}>{ProgramHead5}</h3>
            <p className={styles.pp}>{ProgramBot11}</p>
            <p className={styles.pp}>{ProgramBot12}</p>
            <p className={styles.pp}>{ProgramBot13}</p>
            <p className={styles.pp}>
              <i>{ProgramSpan1}</i>
            </p>
            <ul
              style={{
                listStyleType: "decimal",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li>{list13}</li>
              <li>{list14}</li>
              <li>{list15}</li>
              <li>{list16}</li>
            </ul>

            <p className={styles.pp}>
              <i>{ProgramSpan2}</i>
            </p>
            <i>
              {" "}
              <b>
                <li>{list17}</li>
              </b>
            </i>

            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot14}</p>
            </i>

            <i>
              {" "}
              <b>
                <li>{list18}</li>
              </b>
            </i>
            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot15}</p>
            </i>

            <i>
              {" "}
              <b>
                <li>{list19}</li>
              </b>
            </i>
            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot16}</p>
            </i>

            <i>
              {" "}
              <b>
                <li>{list20}</li>
              </b>
            </i>
            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot17}</p>
            </i>

            <i>
              {" "}
              <b>
                <li>{list21}</li>
              </b>
            </i>
            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot18}</p>
            </i>

            <i>
              {" "}
              <b>
                <li>{list22}</li>
              </b>
            </i>
            <i>
              {" "}
              <p className={styles.pp}>{ProgramBot19}</p>
            </i>
            <p className={styles.pp}>{ProgramBot20}</p>
            <p className={styles.pp}>{ProgramBot21}</p>
            <p className={styles.pp}>{ProgramBot22}</p>
          </div>
        ) : (
          <>
            {" "}
            {cityTextDAhyderabad ? (
              <div className={styles.CitiesRightInner}>
                <p>
                  Learnbay's <b>data analytics course in Hyderabad</b> might be
                  exactly what you need if you wish to pursue a career as a data
                  analyst.{" "}
                  <b>
                    As the best data analytics training institute in Hyderabad
                  </b>
                  , Learnbay offers a wide range of IBM certification courses.
                  Our <b>Data Analytics training</b> prepares you for complex
                  analytical problems in different industries.
                </p>

                <p>
                  Learnbay aims to provide specialized{" "}
                  <b>online data analytics training</b> that gives learners the
                  knowledge and skills necessary to succeed in their careers as
                  data analysts. The institute handles everything in the data
                  analytics course, from hands-on training through live data
                  analytics projects to interview preparation for top-tier MNCs.
                  Renowned industry professionals lead our one-on-one
                  doubt-clearing sessions. Learnbay delivers immersive{" "}
                  <b>data analytics training</b> that sets it apart as a
                  one-stop resource for anyone looking to become a professional
                  job-ready data analyst.
                </p>

                <p>
                  One of the key features that Learnbay offers is its
                  flexibility. Our <b>online Data Analytics training</b> is
                  designed to match the industry's ever-changing needs. We also
                  offer job placement support suited for both experienced
                  working professionals and early career professionals in any
                  sector. The course's hands-on learning process incorporates
                  interactive sessions with renowned experts. The industry
                  projects provide in-depth coverage of data analysis, data
                  visualization, and regression techniques.
                </p>

                <p>
                  By enrolling in Learnbay's{" "}
                  <b>data analytics course in Hyderabad</b>, you'll thoroughly
                  understand the fundamental ideas and real-world uses of data
                  analytics. Throughout the course, you will have access to a
                  wealth of resources and receive individualized support from
                  subject matter experts in the field, making it simpler for you
                  to accomplish your professional objectives. Whether you want
                  to work for a multinational corporation or start your own data
                  analytics venture, this course will prepare you for success.
                  So why wait? Sign up for our <b>data analytics course</b>{" "}
                  today and embark on a journey toward a rewarding career in
                  data analytics.
                </p>

                <p>
                  Our <b>data analytics course in Hyderabad</b> also offers
                  learners the opportunity to gain practical experience by
                  working on real-world data analytics projects. With the help
                  of these projects, learners learn to apply their knowledge and
                  skills to solve complex problems businesses and organizations
                  face. It gives them a competitive edge in the job market.{" "}
                </p>

                <p>
                  Furthermore, Learnbay has a strong industry connection. It
                  ensures that learners are exposed to the latest trends and
                  practices in data analytics. <b>Data analytics training</b>{" "}
                  makes them more valuable to potential employers. With its
                  flexible online format, job placement support, and practical
                  training, our <b>data analytics course in Hyderabad</b> is the
                  ideal choice for anyone looking to build a successful career
                  in data analytics.
                </p>
                <p>
                  We cover the <b>data analytics course</b> using various
                  modules, some of which are mentioned below:
                </p>

                <ul>
                  <li>Cohort Orientation</li>
                  <li>Special Programming Classes</li>
                  <li>Basic Python Programming</li>
                  <li>Special Python Programming </li>
                  <li>Statistics</li>
                  <li>Machine Learning </li>
                  <li>SQL</li>
                  <li>Tableau</li>
                  <li>Deep Learning</li>
                  <li>Essentials</li>
                </ul>

                <p>
                  The course duration of the online Data Analytics training in
                  Hyderabad is 180+ hours. Our trained professionals will tutor
                  you for almost 9 months.{" "}
                </p>
                <p>The structured course consists of 4 terms. </p>

                <b>Module 0: Preparatory Session </b>

                <p>
                  In this module, you will get a brief introduction to
                  data-related tools. You will also learn about particular
                  real-time projects and capstone projects. Data has a lot of
                  impact on career opportunities and plays a vital role in the
                  success of a business. Some other topics that learners will
                  learn about are the significance of data in decision-making,
                  the scope of data in research and development, the
                  fundamentals of programming and statistics, including an
                  introduction to Linear Algebra.{" "}
                </p>

                <h2>Term 1: Python Programming</h2>
                <b>Module 1: Basic and Advance Python</b>
                <p>
                  In module 1, our experts will teach you the programming basics
                  and environment setup along with python data types and
                  functions and modules. Learners will also learn briefly about
                  File I/O And Exceptional Handling and Regular Expression. An
                  introduction to NumPy, Array Creation, Printing Arrays,
                  introduction to Pandas, and indexing data frames are a few
                  other topics that will be covered in this module.{" "}
                </p>

                <h2>Term 2: Statistics and Machine Learning </h2>
                <b>Module 1: Statistics </b>

                <p>
                  The next lesson, vital for data science, focuses on teaching
                  fundamental and statistical ideas. After this program, you
                  will understand probability, inferential and descriptive
                  statistics, exploratory data analysis (EDA), and data
                  processing. You will also be able to complete four practice
                  assignments relating to statistics to enrich your learning
                  experience further. You can use your newly learned information
                  in these practical exercises, promoting experiential learning.
                </p>

                <b>Module 2: Machine Learning </b>

                <p>
                  This module gives you access to the most current
                  machine-learning methods and tools necessary for building
                  models and reaching wise conclusions. The advanced machine
                  learning techniques covered in this subject include support
                  vector machines, principal component analysis (PCA),
                  clustering, K-nearest neighbours (KNN) models, and regression
                  and classification models. (SVM).{" "}
                </p>
                <p>
                  Your instructor will walk you through each of these methods,
                  giving you in-depth explanations and examples from the real
                  world to help you understand. After finishing this subject,
                  you'll be prepared to use cutting-edge machine-learning
                  techniques to build solid models and analyze complex data
                  sets.{" "}
                </p>

                <h2>Term 3: Data Analytics Tools </h2>

                <p>
                  <b>Module 1 - SQL</b>
                </p>
                <p>
                  <b>Module 2: PowerBI</b>
                </p>
                <p>
                  <b>Module 3: Big Data and Spark Analytics</b>
                </p>
                <p>
                  <b>Module 4: Time Series</b>
                </p>

                <h2>Term 4: Excel </h2>
                <b>Module 1: Essentials</b>

                <h2>
                  Data Analytics Certification Program in Hyderabad with
                  Placement Assistance
                </h2>

                <ul>
                  <li>
                    This course gives you 1.5 years of limitless access to your
                    learning materials and live class recordings
                  </li>
                  <li>
                    You can choose weekdays or weekends to take the course
                  </li>
                  <li>
                    Experts from MNCs and MAANG assist in online and offline
                    project sessions
                  </li>
                  <h3>
                    Highlights of Data Analytics Certification Program in
                    Hyderabad
                  </h3>
                  <li>180+ hours of live sessions </li>
                  <li>8+ real-time industrial projects</li>
                  <li>Live Project experience</li>
                  <li>97% average salary hike</li>
                </ul>

                <h2>
                  Why Should You Choose Learnbay’s Data Analytics Course in
                  Hyderabad?{" "}
                </h2>
                <p>
                  Learnbay offers the best data analytics online training. Below
                  mentioned are a few key reasons why you should choose us.{" "}
                </p>

                <ol type="1">
                  <li>
                    <b>100% live interactive training:</b> The course includes
                    live interactive training sessions led by experienced data
                    analysts. This allows students to interact in real-time with
                    peers and instructors.
                  </li>

                  <li>
                    <b>Flexible scheduling:</b> It is a feature of Learnbay's
                    data analytics course that makes it simpler for students to
                    juggle their academic obligations with their other
                    commitments.
                  </li>

                  <li>
                    <b>Sessions guided by experienced data analysts:</b>{" "}
                    Learnbay's instructors are skilled data analysts with years
                    of experience working in the sector, providing students with
                    an insightful understanding of practical data analytics
                    techniques.
                  </li>

                  <li>
                    <b>One-year flexi membership:</b> It is included with the
                    course, enabling students to go at their own pace and go
                    over the course material whenever necessary.
                  </li>

                  <li>
                    <b>Choose your favourite batch and mentors:</b> Students can
                    pick their preferred batch and mentors to tailor their
                    learning experience.
                  </li>
                </ol>

                <h2>Data Analytics Trends in Hyderabad</h2>

                <p>
                  The city of Hyderabad is quickly becoming a center for data
                  analytics, thanks to the establishment of numerous businesses
                  there. Making judgments based on data using artificial
                  intelligence and machine learning is one of Hyderabad's
                  notable data analytics trends. Businesses use these
                  technologies to analyze massive volumes of data rapidly and
                  correctly, giving them access to insightful information about
                  consumer behaviour, market trends, and corporate operations.{" "}
                </p>

                <p>
                  The usage of cloud-based analytics solutions is another trend
                  that is becoming more and more popular in Hyderabad.
                  Businesses can now store and process massive volumes of data
                  on the cloud thanks to the development of cloud-based
                  analytics tools. It allows them to scale their operations
                  quickly while paying the least for infrastructure.
                </p>

                <p>
                  The use of data analytics in the healthcare industry is
                  another trend that is gaining popularity in Hyderabad.
                  Healthcare providers are now utilizing data analytics to
                  enhance patient outcomes and lower healthcare costs due to the
                  growing adoption of electronic health records and the
                  availability of vast patient data. Data analytics locates
                  high-risk people, predicts disease outbreaks, and creates
                  personalized treatment plans. In the upcoming years, the use
                  of data analytics in the healthcare industry is anticipated to
                  expand quickly, making Hyderabad a desirable location for data
                  analytics and healthcare businesses.
                </p>

                <h2>Best Data Analytics Training Institute in Hyderabad</h2>
                <p>
                  Learnbay is considered the{" "}
                  <b>best data analytics institute in Hyderabad</b>. Learnbay
                  has established a reputation for turning out highly trained
                  data professionals by emphasizing training that applies to the
                  business. The institute provides a wide range of data
                  analytics courses, including big data analytics, artificial
                  intelligence, machine learning, and data science.{" "}
                </p>

                <p>
                  The programs are meant to give students a thorough
                  understanding of the sector’s various data analytics
                  technologies and methods. The Learnbay faculty comprises
                  skilled data experts with a proven track record of
                  achievement. Students work on actual data analytics projects
                  as part of the institute's innovative teaching style, which
                  gives them the hands-on experience they need to thrive in the
                  field. In general, Learnbay is a great option for anyone in
                  Hyderabad who wants to pursue a career in data analytics.
                </p>

                <h2>Did You Know? </h2>

                <p>
                  Data Analytics is a lucrative career option for people
                  interested in the profession because the{" "}
                  <b>average data analyst salary in Hyderabad</b> is INR 6
                  lakhs.
                </p>

                <p>
                  The <b>Data Analytics Course in Hyderabad</b> is gaining
                  momentum with the increasing demand for data analytics in
                  India. Hyderabad is quickly becoming its center, and local
                  companies realize the value of data-driven decision-making.
                  It's hardly surprising that Hyderabad is seeing an increase in
                  demand for qualified data analysts, given that the amount of
                  data produced globally is expected to exceed 463 exabytes by
                  2025.
                </p>

                <p>
                  The demand for knowledgeable experts in the industry is
                  increasing as businesses in Hyderabad rely more heavily on
                  data analytics. Learnbay offers the{" "}
                  <b>best data analytics training in Hyderabad</b> to meet the
                  growing demand for skilled professionals.
                </p>

                <p>
                  Learnbay's <b>Data Analytics Course in Hyderabad</b> is a
                  great place to start if you're interested in a career in data
                  analytics. A course like this might give you the information
                  and abilities required to be successful in this profitable
                  career, given the city's growing demand for data analytics
                  professionals.
                </p>

                <p>
                  {" "}
                  Learnbay also provides offline project sessions for{" "}
                  <a
                    href="https://www.learnbay.co/machine-learning-course-training-in-hyderabad"
                    target="_blank"
                    style={{ color: "#2D9CD7", fontWeight: "600" }}
                  >
                    machine learning
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.learnbay.co/artificial-intelligence-ai-course-training-hyderabad"
                    target="_blank"
                    style={{ color: "#2D9CD7", fontWeight: "600" }}
                  >
                    artificial intelligence courses in Hyderabad
                  </a>
                  .
                </p>
              </div>
            ) : (
              ""
            )}
            {cityTextDAPune ? (
              <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{ProgramHead1}</h2>
                <p className={styles.pp}>{ProgramBot1}</p>
                <p className={styles.pp}>{ProgramBot2}</p>
                <p className={styles.pp}>{ProgramBot3}</p>
                <p className={styles.pp}>{ProgramBot4}</p>
                <p className={styles.pp}>{ProgramBot5}</p>
                <p className={styles.pp}>{ProgramBot6}</p>
                <p className={styles.pp}>{ProgramBot7}</p>
                <p className={styles.pp}>{ProgramBot8}</p>
                <p className={styles.pp}>{ProgramBot9}</p>
              </div>
            ) : (
              <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{ProgramHead1}</h2>
                <p className={styles.pp}>{ProgramBot1}</p>
                <p className={styles.pp}>{ProgramBot2}</p>
                <p className={styles.pp}>{ProgramBot3}</p>
                <p className={styles.pp}>{ProgramBot31}</p>
                <p className={styles.pp}>{ProgramBot32}</p>
                <p className={styles.pp}>{ProgramBot4}</p>
                <p className={styles.pp}>{ProgramBot5}</p>
                <p className={styles.pp}>{ProgramBot6}</p>
                <p className={styles.pp}>{ProgramBot7}</p>
                <p className={styles.pp}>{ProgramBot8}</p>
                <p className={styles.pp}>{ProgramBot9}</p>
                <p className={styles.pp}>{ProgramBot10}</p>
                <p className={styles.pp}>{ProgramBot11}</p>
                <p className={styles.pp}>{ProgramBot12}</p>
                <p className={styles.pp}>{ProgramBot13}</p>
                <p className={styles.pp}>{ProgramBot14}</p>
                <p className={styles.pp}>{ProgramBot15}</p>
                <p className={styles.pp}>{ProgramBot16}</p>
              </div>
            )}
          </>
        )}
      </div>
      <div id="Certification">
        <div className={styles.CitiesRightSpan}>
          <span>Certification Details</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{CertificationHead1}</h2>
          <p className={styles.pp}>{CertificationBot1}</p>
          <p className={styles.pp}>{CertificationBot2}</p>
          <p className={styles.pp}>{CertificationBot3}</p>
          <div className={styles.certNew}>
            <img src={src}></img>
            <img src={src22}></img>
            <img src={src33}></img>
          </div>
        </div>
      </div>

      <div id="Module">
        <div className={styles.CitiesRightSpan}>
          <span>Module-Details</span>
        </div>
        {cityTextDAPune ? (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ModuleBot1}</p>
            <p className={styles.pp}>{ModuleBot2}</p>
            <p className={styles.pp}>{ModuleBot3}</p>
            <p className={styles.pp}>Module Details:</p>
            <div className={styles.SyllabusBot}>
              <div className={styles.SyllabusBot1}>
                <div className={styles.SyllabusBot11}>
                  <div>
                    <p className={styles.syllabush}>{syllabush1}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb1}
                    </p>
                  </div>
                  <div className={styles.number1}>1</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist11}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist12}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist13}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist14}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist15}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist16}
                  </p>
                </div>
              </div>
              <div className={styles.SyllabusBot2}>
                <div className={styles.SyllabusBot22}>
                  <div>
                    <p className={styles.syllabush}>{syllabush2}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb2}
                    </p>
                  </div>
                  <div className={styles.number2}>2</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist21}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist22}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist23}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist24}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist25}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist26}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.SyllabusBot}>
              <div className={styles.SyllabusBot3}>
                <div className={styles.SyllabusBot33}>
                  <div>
                    <p className={styles.syllabush}>{syllabush3}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb3}
                    </p>
                  </div>
                  <div className={styles.number3}>3</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist31}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist32}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist33}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist34}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist35}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist36}
                  </p>
                </div>
              </div>
              <div className={styles.SyllabusBot4}>
                <div className={styles.SyllabusBot44}>
                  <div>
                    <p className={styles.syllabush}>{syllabush4}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb4}
                    </p>
                  </div>
                  <div className={styles.number4}>4</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist41}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist42}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist43}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist44}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist45}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist46}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ModuleBot1}</p>
            <p className={styles.pp}>{ModuleBot2}</p>
            <p className={styles.pp}>{ModuleBot3}</p>
            <p className={styles.pp}>{ModuleBot4}</p>
            <p className={styles.pp}>Module Details:</p>
            <div className={styles.SyllabusBot}>
              <div className={styles.SyllabusBot1}>
                <div className={styles.SyllabusBot11}>
                  <div>
                    <p className={styles.syllabush}>{syllabush1}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb1}
                    </p>
                  </div>
                  <div className={styles.number1}>1</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist11}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist12}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist13}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist14}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist15}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist16}
                  </p>
                </div>
              </div>
              <div className={styles.SyllabusBot2}>
                <div className={styles.SyllabusBot22}>
                  <div>
                    <p className={styles.syllabush}>{syllabush2}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb2}
                    </p>
                  </div>
                  <div className={styles.number2}>2</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist21}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist22}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist23}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist24}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist25}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist26}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.SyllabusBot}>
              <div className={styles.SyllabusBot3}>
                <div className={styles.SyllabusBot33}>
                  <div>
                    <p className={styles.syllabush}>{syllabush3}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb3}
                    </p>
                  </div>
                  <div className={styles.number3}>3</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist31}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist32}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist33}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist34}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist35}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist36}
                  </p>
                </div>
              </div>
              <div className={styles.SyllabusBot4}>
                <div className={styles.SyllabusBot44}>
                  <div>
                    <p className={styles.syllabush}>{syllabush4}</p>
                    <p className={styles.syllabusb}>
                      <BsClock className={styles.bIcons} />
                      {syllabusb4}
                    </p>
                  </div>
                  <div className={styles.number4}>4</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist41}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist42}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist43}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist44}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist45}
                  </p>
                  <p className={styles.SyllabusBotlistp}>
                    <FiCheck className={styles.bIcons} />
                    {SyllabusBotlist46}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.Button}>
          <a href={syllabussrc} target="_blank">
            <Button className={styles.btn} text="View Detailed Syllabus" />
          </a>
        </div>
      </div>
      <div id="Job">
        <div className={styles.CitiesRightSpan}>
          <span>Job Assist Program</span>
        </div>
        {bAnalystAbout ? (
          <div className={styles.CitiesRightInner}>
            <h3 className={styles.pHead}>{JobHead2}</h3>
            <p className={styles.pp}>{JobBot1}</p>
            <p className={styles.pp}>{JobBot2}</p>
            <table style={tableStyle}>
              <thead>
                <tr style={headerRowStyle}>
                  <th style={thStyle}>Job Roles</th>
                  <th style={thStyle}>Experience Level</th>
                  <th style={thStyle}>Annual Payscale (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Junior Buisness Analyst</td>
                  <td style={tdStyle}>Entry, Mid-senior</td>
                  <td style={tdStyle}>5 to 8 Lakhs</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Business Analyst</td>
                  <td style={tdStyle}>Entry, Mid-senior</td>
                  <td style={tdStyle}>3 to 5 Lakhs</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Senior Buisness Analyst</td>
                  <td style={tdStyle}>Mid-senior</td>
                  <td style={tdStyle}>8 to 15 lakhs</td>
                </tr>

                <tr>
                  <td style={tdStyle}>Leading Business Analyst</td>
                  <td style={tdStyle}>Senior</td>
                  <td style={tdStyle}>15 to 25 lakhs</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Buisness Consultation</td>
                  <td style={tdStyle}>Senior</td>
                  <td style={tdStyle}>25 to 40 lakhs</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Director of Business Analysis</td>
                  <td style={tdStyle}>Managerial level (senior)</td>
                  <td style={tdStyle}>More than 40 lakhs</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.pp}>{JobBot3}</p>
            <p className={styles.pp}>{JobBot4}</p>
            <p className={styles.pp}>{JobBot5}</p>
            <p className={styles.pp}>{JobBot6}</p>
            <p className={styles.pp}>{JobBot7}</p>
            <h2 className={styles.pHead}>{JobHead3}</h2>

            <p className={styles.pp}>{JobBot8}</p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <li>{listJob1}</li>
              <li style={{ listStyle: "none" }}>{listJob2}</li>
              <li style={{ listStyle: "none" }}>{listJob3}</li>
            </ul>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <li>{listJob4}</li>
              <li style={{ listStyle: "none" }}>{listJob5}</li>
              <li style={{ listStyle: "none" }}>{listJob6}</li>
            </ul>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <li>{listJob7}</li>
              <li style={{ listStyle: "none" }}>{listJob8}</li>
              <li>{listJob9}</li>
              <li style={{ listStyle: "none" }}>{listJob10}</li>
              <li>{listJob11}</li>
              <li style={{ listStyle: "none" }}>{listJob12}</li>
              <li>{listJob13}</li>
              <li style={{ listStyle: "none" }}>{listJob14}</li>
              <li style={{ listStyle: "none" }}>{listJob15}</li>
            </ul>

            <p className={styles.pp}>{JobBot9}</p>
            <h3 className={styles.pHead}>{JobHead4}</h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <li>{listJob16}</li>
              <li>{listJob17}</li>
              <li>{listJob18}</li>
              <li>{listJob19}</li>
              <li>{listJob20}</li>
              <li>{listJob21}</li>
            </ul>
            <h3 className={styles.pHead}>{JobHead5}</h3>
            <i>
              <p className={styles.pp}>{JobBot10}</p>
            </i>
            <i>
              <p className={styles.pp}>{JobBot11}</p>
            </i>
            <i>
              <p className={styles.pp}>{JobBot12}</p>
            </i>
            <i>
              <p className={styles.pp}>{JobBot13}</p>
            </i>

            <i>
              <p className={styles.pp}>{JobBot14}</p>
            </i>
            <i>
              <p className={styles.pp}>{JobBot15}</p>
            </i>
            <h3 className={styles.pHead}>{JobHead6}</h3>
            <p className={styles.pp}>{JobBot16}</p>
            <p className={styles.pp}>{JobBot17}</p>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <li>{listJob22}</li>
              <li style={{ listStyle: "none" }}>{listJob23}</li>
              <li>{listJob24}</li>
              <li style={{ listStyle: "none" }}>{listJob25}</li>
              <li style={{ listStyle: "none" }}>{listJob26}</li>
              <li>{listJob27}</li>
              <li style={{ listStyle: "none" }}>{listJob28}</li>
              <li style={{ listStyle: "none" }}>{listJob29}</li>
              <li>{listJob30}</li>

              <li style={{ listStyle: "none" }}>{listJob31}</li>
              <li>{listJob32}</li>
              <li style={{ listStyle: "none" }}>{listJob33}</li>
              <li>{listJob34}</li>
              <li style={{ listStyle: "none" }}>{listJob35}</li>
              <li style={{ listStyle: "none" }}>{listJob36}</li>
            </ul>
            <h3 className={styles.pHead}>{JobHead7}</h3>
            <p className={styles.pp}>{JobBot18}</p>
            <ul
              style={{
                listStyleType: "decimal",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li>{listJob37}</li>
              <li>{listJob38}</li>
              <li>{listJob39}</li>
              <li>{listJob40}</li>
              <li>{listJob41}</li>
              <li>{listJob42}</li>
              <li>{listJob43}</li>
              <li>{listJob44}</li>
              <li>{listJob45}</li>
              <li>{listJob46}</li>
            </ul>
            <p className={styles.pp}>{JobBot19}</p>
          </div>
        ) : (
          <>
            {cityTextJDAPune ? (
              <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{JobHead1}</h2>
                <p className={styles.pp}>{JobBot1}</p>
                <p className={styles.pp}>{JobBot2}</p>
                <h2 className={styles.pHead}>{JobHead2}</h2>
                <p className={styles.pp}>{JobBot3}</p>

                <p className={styles.pp}>{JobBot4}</p>

                <h2 className={styles.pHead}>{JobHead4}</h2>

                <p className={styles.pp}>{JobBot8}</p>
                <p className={styles.pp}>{JobBot9}</p>
                <p className={styles.pp}>{JobBot10}</p>
                <p className={styles.pp}>{JobBot11}</p>
              </div>
            ) : (
              <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{JobHead1}</h2>
                <p className={styles.pp}>{JobBot1}</p>
                <p className={styles.pp}>{JobBot2}</p>
                <p className={styles.pp}>{JobBot5}</p>
                <h2 className={styles.pHead}>{JobHead2}</h2>
                <p className={styles.pp}>{JobBot3}</p>
                <h2 className={styles.pHead}>{JobHead3}</h2>
                <p className={styles.pp}>{JobBot4}</p>
                <p className={styles.pp}>{JobBot6}</p>
                <p className={styles.pp}>{JobBot11}</p>
                <p className={styles.pp}>{JobBot12}</p>
                <p className={styles.pp}>{JobBot13}</p>
                <p className={styles.pp}>{JobBot14}</p>
              </div>
            )}
          </>
        )}
      </div>
      <div id="Projects">
        {bAnalystAbout ? (
          <>
            {" "}
            <div className={styles.CitiesRightSpan}>
              <span>Conclusion</span>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.CitiesRightSpan}>
              <span>Know Our Projects</span>
            </div>
          </>
        )}
        {cityTextDAPune ? (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ProjectsBot1}</p>
            <p className={styles.pp}>{ProjectsBot2}</p>
            <p className={styles.pp}>{ProjectsBot3}</p>
          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <p className={styles.pp}>{ProjectsBot1}</p>

            <p className={styles.pp}>{ProjectsBot2}</p>
            <p className={styles.pp}>{ProjectsBot3}</p>
          </div>
        )}
        <div className={styles.Projects}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src1} alt={alt2}></img>
                <p className={styles.ppp}>{ProjectsH1}</p>
              </div>
              <p className={styles.pp}>{Projectsp1}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src2} alt={alt3}></img>
                <p className={styles.ppp}>{ProjectsH2}</p>
              </div>
              <p className={styles.pp}>{Projectsp2}</p>
            </div>
          </div>
        </div>
        <div className={styles.Projects} style={{ marginBottom: "20px" }}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src3} alt={alt4}></img>
                <p className={styles.ppp}>{ProjectsH3}</p>
              </div>
              <p className={styles.pp}>{Projectsp3}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src4} alt={alt5}></img>
                <p className={styles.ppp}>{ProjectsH4}</p>
              </div>
              <p className={styles.pp}>{Projectsp4}</p>
            </div>
          </div>
        </div>
        <div className={styles.Button}>
          <a
            href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
            target="_blank"
          >
            <Button className={styles.btn} text="View All Projects" />
          </a>
        </div>
      </div>
      <div id="Alumni">
        <div className={styles.CitiesRightSpan}>
          <span>Hear From Our Alumni</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{AlumniBot1}</p>
        </div>
        <div className={styles.Alumni}>
          <div className={styles.AlumniBot}>
            <img src={Asrc1} style={{ width: "100px" }} alt={alt6}></img>
            <p className={styles.ppa}>{AlumniH1}</p>
            <p className={styles.pp}>{Alumnip1}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc2} style={{ width: "100px" }} alt={alt7}></img>
            <p className={styles.ppa}>{AlumniH2}</p>
            <p className={styles.pp}>{Alumnip2}</p>
          </div>
        </div>
        <div className={styles.Alumni1}>
          <div className={styles.AlumniBot}>
            <img src={Asrc3} style={{ width: "100px" }} alt={alt8}></img>
            <p className={styles.ppa}>{AlumniH3}</p>
            <p className={styles.pp}>{Alumnip3}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc4} style={{ width: "100px" }} alt={alt9}></img>
            <p className={styles.ppa}>{AlumniH4}</p>
            <p className={styles.pp}>{Alumnip4}</p>
          </div>
        </div>
        <div className={styles.Button}>
          <a href="/reviews" target="_blank">
            <Button className={styles.btn} text="View All Reviews" />
          </a>
        </div>
      </div>
      <div id="FAQ">
        <div className={styles.CitiesRightSpan}>
          {bAnalystAbout ? <></> : <span>Frequently Asked Questions</span>}
        </div>
      </div>
    </section>
  );
};

export default CitiesRight;
