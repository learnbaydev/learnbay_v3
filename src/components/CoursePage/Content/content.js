import { React, useState } from "react";
import styles from "./content.module.css";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import Button from "@/components/Global/Button/Button";
import Link from "next/link";

function DataAnalytics({
  dataScienceCounselling,
  DataAnalytics,
  Advance,
  AIML,
  CDevops,
  Masterscontent,
  Banalytics,
}) {
  const [read, setRead] = useState(false);

  const handler = () => {
    setRead(!read);
  };
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.container}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form dataScienceCounselling={dataScienceCounselling} />
        </div>
      </Popup>

      {Advance ? (
        <div className={styles.content}>
          <h1>
            Proliferate Your Success Probabilities With An Advanced
            Certification In Data Science and AI.{" "}
          </h1>
          <p>
            Interested in Data Science and AI, build a solid foundation for your
            career with Learnbay’s{" "}
            <b>Advance Data Science Certification Courses.</b> Learnbay ensures
            quality training to learners by providing flexible learning
            opportunities, domain electives, placement assistance, and hands-on
            industry-relevant projects. Ensure a lucrative career and thriving
            job opportunities with Learnbay’s Advanced Data Science and AI
            Certification Program.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Acquaint Yourself With the Value of Advance Data Science
                Certification Courses.{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                <b>What is Data Science? </b>
              </h2>
              {/* <h3>Course Overview</h3> */}
              <p>
                Data Science is a multidisciplinary field that makes use of
                various disciplines to extract insights from data. Currently,
                companies hold enormous amounts of data that contain some
                valuable information.
              </p>
              <p>
                It has to be identified, collected, and analyzed to make the
                most out of it. Data Science plays a vital role in such
                situations, it helps to manage, clean, and explore the data.
                Also, it builds models using the gathered information to predict
                outcomes and automate important tasks.
              </p>
              <p>
                Data Scientists, the practitioners of Data Science, will explain
                the findings and solutions through data storytelling to make
                everyone understand.
              </p>
              <p>
                Simply put, Data Scientists collect, clean, analyze, and explain
                the data through storytelling. At present, almost every company
                requires the help of the data science profession. Enroll in an
                <b>Advanced Certification in Data Science and AI</b> to succeed
                as a Data Scientist.
              </p>
              <h3>What is Artificial Intelligence? </h3>
              <p>
                Artificial Intelligence is a dynamic field of computer science
                that imitates human behaviour, intelligence, and decisions.
                Artificial Intelligence is like cognitive ability injected in a
                machine to mimic a human and act like a human. Artificial
                intelligence helps make decisions; recognize speech, images, and
                words; and analyze large amounts of information.
              </p>
              <p>
                At present, most companies and individuals use Artificial
                Intelligence to increase their productivity and efficiency by
                mimicking human intelligence at its best. To help you establish
                a solid career in AI, enroll in Learnbay's{" "}
                <b className={styles.links}>
                  <Link
                    href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
                    target="_blank"
                  >
                    master's in artificial intelligence
                  </Link>
                </b>
                .{" "}
              </p>
              <h3>Why is Data Science and AI important? </h3>
              <p>
                Data Science and Artificial Intelligence have been implemented
                in various fields to maximize productivity and efficiency.
                Businesses have started to leverage the use of large amounts of
                data with the help of data science and AI. Together these two
                technologies have contributed groundbreaking results and showed
                the potential of cutting edge technologies. The following points
                establish the importance of data science and AI.
              </p>
              <h3>
                Influencing Industries With Disruptive Technologies And
                Practices
              </h3>
              <p>
                Data Science and AI have impacted the way things work and move
                in certain industries. It has completely changed the way
                financial services operate, nowadays, the finance industry is
                heavily dependent on data science and AI. The term is not
                restricted solely to the finance industry but encompasses
                various industries such as Retail, Manufacturing, Healthcare,
                and Transportation.
              </p>
              <h3>
                Reinventing the Internet Presence And Improving Customer
                Engagement
              </h3>
              <p>
                In the era of smart devices, everyone uses the Internet not only
                to surf but to learn about new things, and to find and purchase
                new products. All the established companies regardless of their
                domains have been using AI to engage with the customers
                meaningfully. You can see the rise of Chatbots in the websites
                and applications of E-commerce and Banking companies. With the
                help of AI and data science, companies can strengthen their
                internet presence.
              </p>
              <h3>Efficient Decision-Making</h3>
              <p>
                Data Science and AI play an essential role when it comes to the
                decision-making process of a business. Companies are currently
                focused on getting data-driven insights to make efficient
                decisions. AI and Data Science provide companies and individuals
                with customized outlooks and experiences to select the best from
                available data.
              </p>
              <h3>Power To Solve Complex Problems</h3>
              <p>
                With the help of data science and AI, you can automate
                repetitive tasks, leading to less human intervention. This frees
                up more space and allocates those humans to work on complex
                problems. Also, using data science and AI, you can extract
                hidden insights from the large pile of datasets.
              </p>
              <p>
                With the proper guidance as a Data Science and AI practitioner,
                you can also come up with some breakthrough solutions. You can
                select a <b>data science course online</b> for flexibility and
                efficient training.
              </p>
              <h2>Why Go With A Data Science Course Online? </h2>
              <p>
                Data Science is a field that has expanded from a few industries
                to almost all the existing industries. The surge in the increase
                of data science professionals is the reflection of the demand
                upswing. You can find Data Scientists in all established
                corporations around the world.
              </p>
              <p>
                If you are interested and want to make a profitable and
                successful career in data science, choose wisely. A successful
                career in data science depends on your learning curve, and an
                Advanced Certificate Programme in Data Science will help you to
                achieve your goals.
              </p>
              <p>
                To help you out, Learnbay offers an Advanced Certification In
                Data Science and AI online program, including some unique
                features that benefit the learners in multiple aspects. This
                Data Science Certification Program contains features like:-
              </p>

              <h3>• 100% Career Assistance</h3>
              <p>
                Learnbay’s career services will make you job-ready and help you
                in all career aspects. To access career assistance services, one
                must secure a minimum score of 70% in their assigned tasks.
                Learners will get hands-on career assistance once they finish
                the assignments, case studies, projects, and assessments.{" "}
              </p>
              <p>
                Learnbay’s Career Service Pro features entail the following
                takeaways:
              </p>
              <ul className={styles.dothide}>
                <li>1. Resume building and optimization</li>
                <li>
                  2. Profile review and professional sessions to crack
                  interviews
                </li>
                <li>3. Unlimited interview calls </li>
                <li>4. Customized mock interview sessions </li>
                <li>
                  5. Feedback sessions to enhance the interview performance
                </li>
                <li>6. Industry-specific interview practices</li>
              </ul>

              <h3>• Certifications with Industry Recognition</h3>
              <p>
                Learnbay’s Advance Data Science Certification courses are
                inclusive of industry-accredited certifications. Their Advanced
                Data Science and AI program is an industry-accredited advanced
                certificate program in data science. Participants in this
                program, upon successful completion, will receive course
                completion certifications accredited by IBM and Microsoft.
                Furthermore, learners will also receive IBM-accredited project
                certification. These course completion certifications are
                globally recognized ones that help learners land a bankable job
                and assist in job promotion.
              </p>
              <h4>Versatile Domain Elective Options</h4>
              <p>
                Learnbay’s data science course online is one of the programs
                that offer domain electives to learners. Domain electives will
                be an edge for learners who want to land a job in a particular
                field. By opting for domain electives, learners will learn about
                a specific domain they are interested in. Learnbay offers
                different kinds of domains, they are as follows:
              </p>
              <ul>
                <li>
                  <li>• BFSI</li>
                  <li>• Healthcare</li>
                  <li>• Marketing</li>
                  <li>• Human Resources</li>
                  <li>• Supply Chain</li>
                  <li>• Manufacturing</li>
                </li>
                <ul />
                <h3>Hands-on Industry Relevant Projects</h3>
                <p>
                  In this Data Science Course Online, learners will receive
                  hands-on industry-relevant projects in real-time and can work
                  on capstone projects as well. While learners work on project
                  sessions, they will be guided by an experienced project
                  mentor. Another important and exciting feature is that
                  learners can work on offline projects in person under the
                  guidance of industry experts as well.
                </p>
                <h2>
                  Will An Advanced Certification In Data Science And AI Lead Me
                  To A Successful Career?{" "}
                </h2>
                <p>
                  Advanced certification programs will cover from top to bottom
                  the topics that are essential for your success and growth.
                  Programs with recognized certifications and advanced-level
                  training will boost your profile and professional development.
                  Upskilling with an advanced certification in data science and
                  AI, without a doubt, is a head start for your successful
                  career. Advanced-level certification programs will help you
                  become a team player, effective communicator, self-manage,
                  help with time management, and be more flexible and adaptable.{" "}
                </p>
                <h2>
                  Learnbay’s Advance Data Science and AI certification, is it
                  worth it?
                </h2>
                <p>
                  Among other advance data science certification courses,
                  Learnbay’s Advanced Certification in Data Science and AI will
                  lead you to a successful career.
                </p>
                <p>
                  This course’s curriculum is inclusive of comprehensive
                  training that is inclusive of domain electives to boost your
                  career value. This Advance Data Science and AI Certification
                  program is inclusive of projects spanning different industries
                  like finance, manufacturing, and more, this enables you to
                  gain more practical training which helps you to land a job at
                  top-tier companies.
                </p>
                <p>
                  Also, Learnbay’s Career Service Pro helps you in multiple
                  aspects so that you can land your dream job. You will be able
                  to crack interviews with the appropriate training from
                  industry experts.
                </p>
                <p>
                  You will receive excellent guidance from industry-experienced
                  experts with years of teaching experience. Learnbay’s
                  specialty lies in its flexible approach, as a learner you need
                  flexibility to manage your timings and here you will get to
                  attend learning sessions seamlessly according to your timings.
                </p>
                <p>
                  One-on-one doubt-clearing sessions ensure that the learners
                  will have face-to-face discussions with faculties to clarify
                  doubts effectively. You can set a session whenever you have a
                  doubt, it is an efficient way to improve your learning curve.
                </p>
                <p>
                  Plus, you will be receiving not one, but three globally
                  recognized certificates that lead you to your dream job. You
                  will receive hands-on experience by working on various
                  projects, including capstone projects. Additionally, to
                  provide you with more practical experience, Learnbay offers
                  access to startups and project sites to make you understand
                  how working professionals apply real-world applications.
                  <p>
                    To summarize, you will receive all the necessary training,
                    experience, and certifications to excel in the real-world
                    industry.
                  </p>
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {AIML ? (
        <div className={styles.content}>
          <h1>
            Gain Expertise to Grow Beyond Technology with Artificial
            Intelligence Certification Program{" "}
          </h1>
          <p>
            Leap forward with the{" "}
            <b>Artificial Intelligence Certification Program</b> to unleash a
            data-driven future globally. Register with Learnbay’s{" "}
            <b>
              <i>
                ‘Advance AI & ML Certification Program for Tech Professionals’
              </i>
            </b>{" "}
            today. This program intends to bridge the learning gaps for tech
            experts and help them land attractive job prospects.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Briefing on Cutting-edge AI &{" "}
                <b>Machine Learning Training for Tech Professionals</b>{" "}
              </h4>

              <h3>Introducing the Course </h3>
              <p>
                In fast-paced tech shifts worldwide, automation has become the
                latest development. Its dominance across diverse sectors
                encourages experts to upgrade themselves. As a result,
                Artificial Intelligence (AI) and Machine Learning (ML) are all
                set to make groundbreaking success. Following the trend,
                Learnbay introduces an Advanced AI and ML Certification Program,
                exclusively curated for IT experts. Learners aspiring to
                redefine their careers as per the AI & ML trends, find this
                course a game changer.
              </p>
              <h3>Overview of Current Industry Trends with AI & ML</h3>
              <p>
                The current state of the IT sector sees an alarming turn with
                the rise of AI. Its impactful presence across the tech sector
                transforms everything. AI extends business and social growth at
                large. Its imprints on human society and business space are all
                set to embark on a journey to see a seamless shift. AI evenly
                empowers tech experts to regain their career success with better
                opportunities. Eventually, the demand for an Advanced AI and ML
                program keeps increasing.
              </p>
              <p>
                Recent developments in AI models demand proven skill sets to
                sustain in the tech field. IT experts and leaders take online
                courses for tech skills development in AI and ML. Upskilling has
                become a mandate for many tech pros eager to kick-start their
                careers with the trending fields.
              </p>
              <p>
                The global AI market is projected to grow 36.8% by 2030, marking
                an undeniable presence globally. The rise of intricate
                Generative AI models demands proven expertise and an in-depth
                understanding of concepts. Thus, upskilling has become a wise
                decision for tech experts with relevant domain knowledge.
                Machine learning training for tech professionals has become a
                proven gateway to deal with GenAI trends.
              </p>
              <h3>
                Is upskilling with a Professional AI and ML Certification
                Program worth it?{" "}
              </h3>
              <p>
                If you are an IT pro with relevant years of experience,
                upskilling with an AI and ML Professional Certification is wise.
                In the space of automated operations, tech experts must refine
                their skill sets with in-demand AI/ML tools. It equips the
                career path with better job offers and attractive salary
                packages. Careful learning of the trending AI & ML tools makes
                you job-ready for cracking the jobs that are in demand these
                days.
              </p>
              <p>
                For this, check your eligibility that includes –
                <ul>
                  <li>• A working professional with basic domain knowledge</li>
                  <li>
                    • A pro having a graduation degree in any stream with good
                    academics
                  </li>
                  <li>• Basic knowledge of mathematics/statistics </li>
                  <li>• At least 1 year of work experience in any domain</li>
                </ul>{" "}
              </p>
              <h3>
                Briefing Learnbay’s{" "}
                <i>
                  Advance AI & ML Certification Program for Tech Professionals
                </i>
              </h3>
              <p>
                Learnbay envisions an automated future with proven skills in AI
                & ML. With trusted and experienced industry experts (mentors),
                it supports real-time career transition. Tech experts eager to
                gain hands-on expertise with cutting-edge AI/ML tools can opt
                for this program. Upskilling with an Artificial Intelligence
                Certification Program unlocks lucrative job offers.
              </p>
              <h3>
                Have a Look At the Impactful Features of Advanced AI and ML
                Certification
              </h3>
              <h4>• Exclusive Course for Tech Experts </h4>
              <p>
                Tech experts with their slow-paced careers can redefine
                themselves with this program. With basic domain knowledge and
                relevant work experience, techies can gain skills to deal with
                AI/ML trends. The professional AI and ML certification program
                offers open-learning space helping techies to gain success.
              </p>
              <h4>• Comprehensive Course Syllabus</h4>
              <p>
                <b>Advance AI & ML Certification Program</b> supports extensive
                learning of in-demand tools. This course offers precisely
                curated course content as per the latest trends in the AI/ML
                industry. It includes everything – from basic programming to
                trending Gen AI trends.
              </p>
              <h4>• Domain Electives</h4>
              <p>
                Techies can kick-start learning AI/ML tools to reshape their
                domain knowledge. This program has 6+ domain electives{" "}
                <i>
                  (BFSI, Manufacturing, Supply chain, HR, Marketing, and
                  Healthcare)
                </i>
                . Tech experts can choose any one domain and gain expertise in
                their field of interest.
              </p>
              <h4>• Renowned Experts as Mentors </h4>

              <p>
                It offers an open-learning platform with dedicated mentors from
                leading tech companies. Mentors offer personalized training to
                experts with 1:1 doubt clearing, project help, and placement
                support. Their irrefutable support for career shifts unleashes a
                bright future. Mentors offer relevant machine learning training
                for tech professionals to get better job offers from MNCs.
              </p>
              <h4>• 360-degree Knowledge Shaping with Live Projects </h4>
              <p>
                Advanced AI and ML Certification believes in thorough learning
                of leading tools. It industry-led training shapes your career to
                conquer success in the tech world. Hands-on learning via fresh
                live projects exposes real-world applications of AI/ML skills.
              </p>
              <h4>• Dedicated Placement Cell </h4>

              <p>
                This program offers a Job Assist Program with 100% dedicated
                placement help. Techies enrolling for this course get multiple
                job offers in their targeted roles across MNCs/MAANG. .
              </p>
              <h3>• Globally Recognized Industry Certifications </h3>
              <p>
                Enrolling in this program equips you with top-notch tech skills
                development in AI and ML. An{" "}
                <b>advanced AI and ML certification</b> brings extensive growth
                to your career and expands the earning limits. Here, you will
                get two-course certificates <i>(IBM & Microsoft)</i> and one
                project certificate <i>(IBM)</i>.
              </p>
              <h3>
                Learning Path of Professional AI and ML Certification Program
              </h3>
              <p>
                Techies eager to revamp their careers as per the latest AI/ML
                trends must enroll themselves in tech professional certification
                courses. This certification course crafts an inspiring learning
                path mending ways toward effective career growth. The learning
                path includes –
              </p>
              <ul>
                <li>
                  Specialized programming classes (Basic and Advanced level)
                </li>
                <li>Statistics and ML algorithms </li>
                <li>Data science tools </li>
                <li>Latest AI tools and trends</li>
                <li>
                  Deployment of Data Structures and Algorithms with basics{" "}
                </li>
                <li>Generative AI trends </li>
                <li>Future Trends</li>
                <h3>
                  Is AI/ML upskilling tough due to its expensive fee structure?{" "}
                </h3>
                <p>
                  Regardless of costly online courses, many techies opt for
                  AI/ML-led upskilling. Learnbay steps forward with its
                  industry-paced Artificial Intelligence certification Program
                  with a flexible fee structure. The program fee is INR 1,10,000
                  plus 18% GST. Yet, techies get a flexible payment option in
                  terms of installment. For this, learners can pay INR 7,211 per
                  month and start learning. It also offers a scholarship
                  facility (up to 25%) to eligible students, making their
                  learning journey hassle-free.{" "}
                </p>
                <p>
                  <b>
                    <i>Note:</i>
                  </b>{" "}
                  Working experts can also opt for{" "}
                  <b className={styles.links}>
                    <Link
                      href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                      target="_blank"
                    >
                      Advance data science certification courses
                    </Link>
                  </b>{" "}
                  a to refine their skill sets as per the latest AI trends.
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {DataAnalytics ? (
        <div className={styles.content}>
          <h1>Upskill Yourself with Data Analytics Course Online</h1>
          <p>
            Boost your career with Learnbay’s Data Analytics Program to land on
            the field of endless opportunities. Enroll in an industry-paced{" "}
            <b>online data analytics certification</b> in association with IBM.
            With existing domain knowledge, this course brings the massive
            privilege of having a job-ready future. From flexible learning
            platforms to 100% placement assistance, this course enhances your
            career to future-proof success.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                India’s Industry-led Best Online Data Analytics Course{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                <b>Briefing With the Best Online Data Analytics Course </b>
              </h2>
              <h3>Course Overview</h3>
              <p>
                Amidst tech shift, this <b>data analytics online</b> training
                brings a universal course module curated with the latest data
                analytics tools. This guide offers a consistent learning scope
                for data enthusiasts to update their knowledge in data
                analytics. With flexible learning sessions (Live online/
                offline/ hybrid) and real-time industry projects, working
                professionals can unleash the power of data.
              </p>
              <p>
                Apart from this, a course completion certificate & capstone
                project certificate from <b>IBM,</b> level up the chances of
                career growth.
              </p>
              <h3>About IBM Certifications</h3>
              <p>
                Learnbay offers a scope of earning valuable certifications in
                the data analytics course program. The completion of the course
                program certifies the learners with IBM certifications (course
                completion and projects). Certification are like a getaway
                ticket to flourishing career growth scope in the trending
                industries. These certificates help the learners get better job
                offers & get interview calls from reputed MNCs.
              </p>
              <h3>What is Data Analytics?</h3>
              <p>
                At present, each sector deals with huge yet vague data.
                Extracting raw data is simple but real hardship starts with
                deriving facts. Data analytics deals with the most related tools
                that help experts gather valuable facts from the raw datasets.
              </p>
              <p>
                Strategically formed data helps business leaders reach better
                decisions. Data analytics tools guide data experts to improve
                their yield through better views of the trends & facts.
              </p>
              <p>
                From healthcare to the retail sector, all need data to function
                aptly. With the scope of data analytics tools, healthcare
                professionals can detect grave diseases & retailers can track
                consumer choices.
              </p>
              <p>
                Hence, data analytics has become pervasive with vast use in both
                tech and non-tech sectors. If you intend to pursue a career in
                data analytics, you must choose to enroll in an{" "}
                <b>online data analytics certification</b> program.
              </p>
              <h3>
                Why is Data Analytics important for the expert & the business?
              </h3>
              <p>
                Data analytics is a broad term that covers data analysis
                methods. With specific use of data analytics tools & techniques,
                an expert can study complex data patterns to reach the facts.
                Since the digital era surrounds industries, the need for
                seamless actions increases quickly.
              </p>
              <p>
                Some pros led by data analytics that make it vital for
                industries are -
              </p>
              <ul>
                <li>Impactful decisions made by the business leaders</li>
                <li>
                  Streamlining business actions as per industry trends with
                  fewer errors
                </li>
                <li>Insightful trace of risks and timely address</li>
                <li>Boost business yields</li>
                <li>Tailored offers to the customers backed with facts</li>
              </ul>
              <p>
                Yet, if you become a skilled data analyst through
                <b> data analytics online training</b>, you will learn about its
                real-time uses across firms.
              </p>
              <h3>Why Choose Data Analytics Program?</h3>
              <p>
                Data analytics skills are trending like hotcakes due to
                explosive growth in data usage. Due to this, a surge in demand
                for skilled data analysts is visible in each field. So, it's
                high time to make a wise career decision in data analytics that
                will help you to get into leading MNCs with alluring packages.
              </p>
              <p>
                Your dream to evolve as a data analyst can come true with a
                leading data analytics program. Learnbay offers the best online
                course for data analytics that equips you with
                <b> unique benefits like</b> -
              </p>
              <ul>
                <li>
                  <b>Flexible Learning Platform</b>
                </li>
                <p>
                  Learnbay’s data analytics program offers a flexible learning
                  setup for working professionals. The flexibility of the course
                  comes in two forms -
                </p>
                <ul style={{ listStyle: "lower-latin" }}>
                  <li>
                    <b>
                      <i>Flexible career move</i>
                    </b>{" "}
                    – The data analytics course program targets both tech &
                    non-tech enthusiasts. With basic knowledge of applied
                    mathematics, one can start learning data analytics. Unlike
                    in the past, data experts see diverse options for careers
                    that go beyond coding skills. Hence, with basic domain
                    knowledge & numerical skills, pursuing a career in data
                    analytics is possible. Learnbay ensures that professional
                    existing knowledge and years of experience do not get
                    wasted.
                  </li>
                  <br />
                  <li>
                    <b>
                      <i>Flexible sessions</i>
                    </b>{" "}
                    – This program offers an industry-paced training session for
                    the working experts on weekdays and weekends. Hence, having
                    a work-study balance is possible. Plus, the experts can opt
                    for classroom study or online training mode as per their
                    schedule. In the case of hybrid sessions, theoretical
                    training is open online, and real-time projects take place
                    in innovation labs.
                  </li>
                  <br />
                </ul>
                <li>
                  <b>Industry-led Training</b> <br />
                  It is simple to gain theoretical knowledge of data analytics
                  concepts, but the <b>best online data analytics course</b> It
                  is simple to gain theoretical knowledge of data analytics
                  concepts, but the best online data analytics course program
                  offers real-time learning. The custom-fit training scope with
                  this program provides the scope for mastering trending
                  analytics tools. Capstone projects allow you to learn the use
                  of analytics tools to hone your talent. Learnbay brings
                  industry-paced project innovation labs guided by experts to
                  train learners in real-time.
                </li>
                <br />
                <li>
                  <b>100% Job Assistance</b> <br />
                  Learnbay’s data analytics program brings a job-ready program
                  for learners who gain a least score of 70% in their tasks.
                  This job-ready program starts once you complete your capstone
                  projects, and case studies, & pass the assessments.
                  <br />
                  <br />
                  <b>What will you get from this program? </b>
                  <br />
                  <ul>
                    <li>
                      <b>○ years of placement support:</b> Learners will gain
                      uninterrupted placement help from experts until they land
                      a suitable job. It offers flexible access to job
                      interviews with MNCs.{" "}
                    </li>
                    <li>
                      <b>○ 6 1:1 mock interviews with Industry partners: </b>{" "}
                      Learners gain real-time insights into the latest trends
                      and attend mock interviews with 450+ industry partners. It
                      enhances the chances of landing a reputable job across
                      MNCs.
                    </li>
                    <li>
                      <b>○ Resume Preparation:</b> Mentors help learners revamp
                      their resumes with proven skills and validate them with
                      proper certifications.{" "}
                    </li>
                    <li>
                      <b>○ 1:1 LinkedIn profile review:</b> Learners gain help
                      with LinkedIn profile reviews and design creative cover
                      letters.{" "}
                    </li>
                    <li>
                      <b>○ 100% dedicated placement team:</b> Learners get
                      eligible for Career Service Pro after successful
                      completion of the course. It helps them secure good
                      positions in their desirable MNCs.{" "}
                    </li>
                  </ul>
                  <p>
                    Learnbay allies with 300+ placement & hiring partners that
                    conduct interviews in trending data roles. The aspirants
                    with good results will be eligible for Learnbay’s prime
                    mentoring & exclusive placement drive with industry leaders.
                  </p>
                  <p>
                    <b>
                      This program is available in offline mode at our
                      experience centers in top metro cities.
                    </b>
                  </p>
                </li>
                <li>
                  Globally Approved Certificate
                  <br />
                  <p>
                    The <b>online data analytics certification</b> is famous for
                    the worth a course completion certificate holds in real
                    time. Learnbay’s allies with IBM enhance the quality of the
                    certificate. The certificate helps you get lucrative job
                    offers with better salary hikes. It brings an excellent
                    career growth scope for the aspirants who learn, grow, and
                    succeed under tech giants like IBM. The best part here is,
                    that you get{" "}
                    <b>
                      <i>industrial project experience certification</i>
                    </b>
                    along with the course completion certificate. Plus, you can
                    opt for offline project sections under the in-person
                    supervision of industry experts.
                  </p>
                </li>
              </ul>
              <h3>Is Data Analytics Course Worth Pursuing? </h3>
              <p>
                The answer is yes. Amidst tech innovations in each sector, the
                need for a skilled data analyst continues to grow. The practice
                of extracting insights from raw data has become famous in the
                data field. The explosive use of data in the industry creates
                millions of analytics jobs each year.
              </p>
              <p>
                <i>
                  Projections reveal a growth of 23% in data analyst jobs by
                  2031.
                </i>{" "}
                Yet, <b>data analytics online training</b> can only lessen the
                skills gap in the industry.
              </p>
              <p>
                Irrespective of the domain skills, you can learn data analytics
                tools and use them in real time. An industry-paced course has
                the benefit of bringing course modules with the latest trends on
                the board. With the data analytics course program, you get
                eligible for job roles like business analyst, data engineer,
                domain-specific data analyst, quantitative analyst, and risk
                analyst.
              </p>
              <p>
                Also, upskilling gets easier with a proven course program. The
                <b>best online data analytics course</b> program offers training
                in Python programming, statistics, ML, SQL, PowerBI, Big data,
                time series, & advanced Excel. Thus, your duty of extracting
                insights from complex data gets easy. Yet, a career counseling
                session can clear your doubts clearer.
              </p>
              <h3>How does career counseling at Learnbay work? </h3>
              <p>
                Before opting for a data analytics course or any other course,
                an industry expert (career counselor) will approach you with the
                vital details. This session will guide you through industry
                trends in the field of data, your eligibility, and a wise career
                move that shall have a better scope for growth in the domain. A
                clear guide in this course program offers you room for wise
                investment in education.
              </p>
              <p>Learnbay’s career counseling offers –</p>
              <ul>
                <li>● 15–20 mins telephonic counseling</li>
                <li>● Career guidance from experts</li>
                <li>● Scholarship eligibility check and verification</li>
              </ul>

              <h3>Is data analytics an IT job? </h3>
              <p>
                No, the data analytics job is open for both tech & non-tech
                experts. But it requires basic knowledge of IT tools and
                programming languages like Python & SQL.
              </p>
              <p>
                <b>Then who must opt for a data analytics course?</b>
              </p>
              <p>Anyone who has - </p>
              <ul>
                <li>● A graduation degree with good academics</li>
                <li>
                  ● At least one year of work experience in the IT/Non-IT field
                </li>
                <li>
                  ● A career at early or mid-stage in any discipline wishful to
                  switch to a data analytics career
                </li>
              </ul>
              <p>
                <b>Note:</b> If you wish to have the upper hand in data science
                for better decision-making, then you must enroll for the{" "}
                <b className={styles.links}>
                  <a
                    href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                    target="_blank"
                  >
                    advance Data Science and AI certification course
                  </a>
                </b>{" "}
                today.
              </p>
              <h3>Is Learnbay’s certification in data analytics worth it?</h3>
              <p>
                Once you are done with the data analytics course program
                successfully with a minimum of 70% marks, you get eligible for
                certification from IBM powered by Learnbay. Learnbay’s dual
                certification brings the scope of getting your resume
                highlighted amongst the crowd. The certification opens the
                chance for premium job roles in MNCs. Getting 70% marks in
                Learnbay is not an easy task unless you complete your course
                with a cent percent of dedication.
              </p>
              <p>Plus, you must opt for this due to the following reasons -</p>
              <ul>
                <li>
                  <i>Better access to start-ups and their project sites</i>
                </li>
                <li>
                  <i>Work with industry-level projects</i>
                </li>
                <li>
                  <i>Get a tag of globally recognized certified data analyst</i>
                </li>
              </ul>
              <h3>How to earn certification in data analytics?</h3>
              <p>
                Learnbay’s data analytics course online goes through counseling,
                learning, project work, & assessment to gain certification.
                Learning is the key step here that supports your theoretical and
                practical knowledge. If you can learn the concepts well, then
                you can pass the assessments & handle real-time projects too.
              </p>
              <h3>
                What are the domain specializations available? Is it necessary
                for you to choose one?
              </h3>
              <p>
                The <b>data analytics course online</b> by Learnbay curates a
                domain-specific program that helps learners to have
                industry-specific careers. The aspirants can choose any one
                domain and start making their profiles as data analysts in the
                same. From learning to real-time project work, learners must
                stick to one domain.
              </p>
              <h3>
                What are the domain specializations available? Is it necessary
                for you to choose one?{" "}
              </h3>
              <p>
                The data analytics course online by Learnbay curates a
                domain-specific program that helps learners to have
                industry-specific careers. The aspirants can choose any one
                domain and start making their profiles as data analysts in the
                same. From learning to real-time project work, learners must
                stick to one domain.
              </p>
              <p>Available domains are -</p>
              <ul>
                <li>
                  <i>Oil, Energy & Gas</i>
                </li>
                <li>
                  <i>Healthcare</i>
                </li>
                <li>
                  <i>BFSI</i>
                </li>
                <li>
                  <i>Manufacturing</i>
                </li>
                <li>
                  <i>Supply chain, E-Commerce & Retail</i>
                </li>
              </ul>
              <p>
                Domain specialization is vital for working professionals willing
                to make a career in a more focused field. A student with an MBA
                in HR or a B.Com in Accounts can opt for the HR analyst or
                Financial analyst role. Choosing the right domain makes the
                learning journey easy and data-driven.
              </p>
              <h3>
                Why is Learnbay tagged as the best online data analytics course
                provider?
              </h3>
              <p>
                The flexibility of learning is the first and foremost factor for
                joining Learnbay. Next, its collaboration with IBM offers you
                industry-level projects & global certification that opens up
                top-level job offers.
                <b>It offers you –</b>
                <ul>
                  <li>
                    Guaranteed interview calls from any of the 450+ MNCs
                    (industry partners)
                  </li>
                  <li>
                    Guaranteed interview calls from any of the 450+ MNCs
                    (industry partners)
                  </li>
                  <li>● Experiential learning space with live projects</li>
                  <li>● Domain-specific training</li>
                  <li>
                    ● Live instructor-led sessions with 1:1 doubt clearing
                  </li>
                  <li>
                    ● Personalized Resume & LinkedIn profile creation help
                  </li>
                </ul>
              </p>
              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {CDevops ? (
        <div className={styles.content}>
          <h1>Advance Cloud Computing & DevOps Certification Program </h1>
          <h4 style={{ fontSize: "24px" }}>
            Demonstrate Your Technical Expertise with a Cloud Computing
            Certification
          </h4>
          <p>
            Elevate your technical knowledge to attain success in today’s
            reforming tech world. Enroll today with Learnbay’s{" "}
            <i>
              <b>Advance Cloud Computing & DevOps Certification Program</b>
            </i>{" "}
            and unleash infinite scope of growth. Upskill with an industry-paced{" "}
            <b>cloud computing certification</b> and land your dream career.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Briefing with the Industry-paced Cloud Computing Online Courses{" "}
              </h4>

              <h3>Course Overview</h3>
              <p>
                Amidst the Industrial Revolution, digital creations gained
                momentum in the recent few years. Cloud computing is the most
                buzzed tech shift taking place worldwide. With a rising margin
                in the industry, most IT experts step forward to career
                transition. Comprehensive learning of in-demand cloud skills via
                live instructor-led training paves the way toward DevOps
                certification. Its flexible training sessions with live projects
                support tech career-building with 100% success.
              </p>
              <p>
                Apart from the 360-degree knowledge-building platform, this
                course also offers dual certification from{" "}
                <i>
                  <b>IBM & Microsoft</b>
                </i>
                .
              </p>
              <h3>Know Everything About Dual Certification</h3>
              <p>
                Learnbay offers a globally recognized Cloud technology
                certification from tech giants such as IBM & Microsoft. Elevate
                your career level with internationally accredited dual
                certification. It acknowledges the Cloud and DevOps skills and
                validates your tech career with assured job offers. Dual
                certification includes course completion certificates and
                capstone project certificates.
              </p>
              <h3>Cloud Computing & DevOps in Brief </h3>
              <p>
                Cloud computing is a network connection that links the internal
                servers of a firm. Its flexible interaction with many servers
                over the internet. It helps in data storing, extracting, and
                handling. Its encrypted configurations help experts work within
                a secured environment while handling complex data sets.
              </p>
              <p>
                In short, cloud computing platforms deliver benefits in terms of
                cost-effectiveness, speed, scalable operations, seamless access,
                and security. <b>Cloud computing online courses</b> guide
                learners to gain excellence with related skills.
              </p>
              <p>
                DevOps refers to the method of enhancing a system’s capability
                to deliver optimized products and services. It denotes the
                merger of development and operations linked with the IT
                industry. DevOps has become a popular concept over the years,
                discarding traditional ways of designing software products. It
                integrates systems to deliver faster and more scalable
                offerings.{" "}
              </p>
              <p>
                From a career upfront, <b>AWS DevOps certification</b> justifies
                your career enhancement journey. It unlocks ways to crack
                progressive careers in the IT sector with DevOps practices.
              </p>
              <h3>Cloud Computing Turning Game-changer for Businesses </h3>
              <p>
                Businesses deal with multiple stakeholders to meet their end
                goals. Thus, firms must stay resourceful, competitive, and
                flexible to thrive in their sector. This is why, over 94% of
                companies all over the world use some means of cloud services.
                It helps firms to have seamless operations with higher yields.
              </p>
              <p>
                <b>
                  Some proven benefits of building a cloud-based culture in
                  firms are –
                </b>
                <ul>
                  <li>• Scale up the yields of your businesses</li>
                  <li>• Optimization of business processes</li>
                  <li>• Resourcefulness </li>
                  <li>• Cost-saving measures with increasing revenues</li>
                  <li>• Flexible operations with IT systems</li>
                  <li>• Timely meeting of industry demands</li>
                </ul>{" "}
              </p>
              <h3>Importance of Cloud Computing skills for tech experts </h3>
              <p>
                Tech experts need to upgrade their skill sets as per the latest
                trends. Owing to the rising uses of cloud services, IT experts
                (developers, engineers, and coders) must learn cloud computing.
                Firms search for certified cloud experts to help them deal with
                vast IT systems and scale up yields. Thus, IT pros must upskill
                via cloud technology certification to future-proof their skills.
              </p>
              <i>
                <b>Note:</b> Experts enrolling in a certificate course in
                business analytics can also upgrade their skills to sustain in
                the field. Yet, knowledge of Cloud skills gives better results.
              </i>
              <h3>DevOps Redefining Businesses in Today’s Era!!</h3>
              <p>
                Businesses from diverse fields use vast IT systems for many
                operations. It covers software product development and operation
                handling for better yields. Thus, DevOps has become a popular
                method for handling the software development lifecycle. Some
                usefulness of DevOps in today’s businesses are –
              </p>
              <ul>
                <li>• 360-degree software development lifecycle management</li>
                <li>• Secured configuration</li>
                <li>• Continuous integration and quality deliveries</li>
                <li>• Transparent communication with teams</li>
                <li>• Reliable and risk-free operations</li>
                <li>• Cost-saving business processes</li>
                <li>• Faster, reliable, and resourceful deliveries</li>
              </ul>
              <h4>
                Is Cloud Computing Certification worth it to sustain in the IT
                sector?{" "}
              </h4>
              <p>
                Yes, certification in cloud skills is worth enough to retain
                your tech career. Firms are marking groundbreaking success due
                to cloud computing solutions. Hence, upskilling with in-demand
                cloud skills is essential for experts. Yet, one must opt for
                cloud computing certification with an industry-driven institute
                to unlock better career scopes. Certificates validate the skills
                to crack better job offers with hands-on learning of the
                trending cloud tools.
              </p>
              <h4>
                Key Features of Advance Cloud Computing & DevOps Certification
                Program
              </h4>
              <p>
                The Cloud computing market in India projects to see a growth of
                18.37% by 2029. Firms in private and public sectors are
                welcoming cloud services with open hands. It has been an
                industry player in the recent few years. Its integration with
                DevOps enables flexible, seamless, and scalable offerings.
              </p>
              <p>
                AWS, Microsoft Azure, Google Cloud, etc, have been prominent
                creations to support firms scaling up their yields. Thus,
                enrolling in the AWS DevOps Certification is an effective way to
                future-proof your tech career.
              </p>
              <p>
                Here, you can opt for the ‘Advance Cloud Computing & DevOps
                Certification Program’ to gain excellence with experiential
                learning. Some exciting features that it offers are –
              </p>
              <h4>• Book your consultation with experts before you enroll</h4>
              <p>
                Learners opting for this course can go for career counseling
                with career experts. It is a telephonic discussion of 15 – 20
                mins. In case of request, learners can have 1:1 direct sessions
                with counselors. Learners can clear any query related to the
                Cloud and <b>DevOps certification online</b> sessions.
              </p>
              <h4>• Industry-paced Course Syllabus </h4>

              <p>
                It offers an open-learning platform with dedicated mentors from
                leading tech companies. Mentors offer personalized training to
                experts with 1:1 doubt clearing, project help, and placement
                support. Their irrefutable support for career shifts unleashes a
                bright future. Mentors offer relevant machine learning training
                for tech professionals to get better job offers from MNCs.
              </p>
              <h4>• 360-degree Knowledge Shaping with Live Projects </h4>
              <p>
                The Cloud and DevOps course syllabus considers the latest
                industry trends. It is comprehensively curated to meet the
                expectations of top-tier MNCs/MAANG. Learners will gain live
                instructor-led training from renowned industry experts. You will
                gain a 360-degree knowledge-building scope – from programming
                languages to cloud deployment.
              </p>
              <h4>• Inclusive & Flexible Training Sessions </h4>

              <p>
                This course offers an inclusive learning space to IT pros eager
                to future-proof their tech careers. Learners get a flexible
                training schedule that won’t hamper their work-study balance.
                You can either opt for weekday or weekend training sessions at
                your convenience. Renowned faculties from leading tech companies
                support your learning as mentors.
              </p>
              <h3>• Experiential Learning </h3>
              <p>
                Learners opting for this course gain experiential learning with
                learned tools. Azure DevOps certification helps learners work
                with fresh capstone projects in offline project innovation labs.
                Mentors guide and support learners to see through actual
                business issues and tackle them. Learners have 10+ real-time
                stimulated projects and they can choose one as per their
                interests.
              </p>
              <h3>• Dedicated Placement Assistance (Career Service Pro)</h3>
              <p>
                Learners opting for Cloud and DevOps certification will get 100%
                dedicated placement support. Under this, learners will get a
                Career Service Pro benefit including 1:1 doubt-clearing, resume
                preparation, LinkedIn profile creation, mock interviews, and
                unlimited interview calls.
              </p>
              <h3>• Globally-recognized Certifications</h3>
              <p>
                Learners opting for <b>cloud computing online courses</b> will
                gain dual certification from IBM & Microsoft. This program
                includes course completion certificates from IBM & Microsoft and
                a project certificate from IBM. These certificates are highly
                valued and enhance the chances of getting selected across MNCs.
              </p>
              <h3>
                How does Career Service Pro support the career transition of
                tech pros? What are its core features?
              </h3>
              <p>
                Cloud and <b>DevOps certification online</b> offers the
                privilege of having dedicated placement support. Eligible
                learners (one with at least 70% scores in assessments) will get
                the benefit of ‘Career Service Pro’ for successful transition.
                It helps learners overcome their redundant skill sets and
                future-proof with new ones.
              </p>
              <i>Core features are –</i>
              <ul>
                <li>• 3 years of Job Assistance</li>
                <li>
                  • 6 mock interviews with renowned experts from MNCs/MAANG{" "}
                </li>
                <li>• Resume preparation help </li>
                <li>• 1:1 LinkedIn Profiling</li>
                <li>• Dedicated Placement team </li>

                <h3>
                  Is Learnbay’s <b>Cloud Computing certification</b> worth it?{" "}
                </h3>
                <p>
                  Yes, upskilling with Learnbay’s cloud and DevOps certification
                  is worthy enough to lift your career with alluring offers.
                  Have a look into the USPs of the course that level up your
                  success rates –
                </p>
                <ul>
                  <li>• Career Counselling</li>
                  <li>
                    • Comprehensively designed Cloud and{" "}
                    <b>DevOps course syllabus</b>
                  </li>
                  <li>• Flexible live instructor-led training</li>
                  <li>
                    • Affordable course fees with flexible payment options
                  </li>
                  <li>• Up to 25% scholarship for eligible students</li>
                  <li>• Hands-on learning of tools via live projects</li>
                  <li>• Career Service Pro</li>
                  <li>
                    • Globally-recognized certifications{" "}
                    <i>(IBM & Microsoft)</i>
                  </li>
                </ul>
                <h3>
                  Is Learnbay’s Cloud Computing online courses affordable?{" "}
                </h3>
                <p>
                  Yes, Learnbay introduces an industry-paced cloud program with
                  an affordable fee structure. Its cloud course fees cost INR
                  1,10,000 + 18% GST. It includes a flexible financing plan with
                  easy payment options – No-cost EMI and easy loans. With this,
                  one can pay INR 7,211 per month and start learning.{" "}
                </p>
                <h3>
                  Can Cloud and DevOps certification unlock better job prospects
                  in the IT sector?
                </h3>
                <p>
                  Cloud skills are trending in the IT sector, bringing alluring
                  job offers for IT experts. Thus, upskilling with an
                  industry-paced cloud technology certification is useful. It
                  unlocks better job prospects with attractive salary packages.
                  The average salary of a Cloud Engineer in India is INR
                  7,65,507 per annum.
                </p>
                <p>
                  DevOps skills are leading the tech industry and becoming a
                  hope for many IT experts to craft a successful career. It
                  expands your earning potential with a bright future. The
                  average salary of a DevOps engineer is INR 8,00,000 per annum.
                  Thus, you can choose the right career path with lucrative job
                  offers.{" "}
                </p>
                <h3>
                  Which certification is beneficial for IT experts eager for a
                  career in DevOps?
                </h3>
                <p>
                  AWS & <b>Azure DevOps certification</b> is vital for an IT
                  expert to redefine a slow-paced career with multiple offers.
                  Learnbay’s globally recognized certification is equivalent to
                  these certifications that will make you job-ready. It
                  future-proofs your skills via fresh capstone projects and
                  dedicated mentoring.
                </p>
              </ul>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}

      {Masterscontent ? (
        <div className={styles.content}>
          <h1>
            Unlock Global Job Opportunities with a
            <b> Master’s in Computer Science Data Science and AI</b>
          </h1>
          <p>
            Leap into career excellence with Learnbay's Master's Degree Program
            in Data Science and AI. Enroll in an industry-driven master's
            program that expands your earning potential and unlocks global job
            offers. From custom-curated learning of the latest trends to better
            placement support, a Master’s in Computer Science Data Science, and
            AI has everything you need.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                India's Inclusive Learning Platform for Working Pros Offering{" "}
                <b>Masters in Computer Science</b>{" "}
              </h4>

              <h3>Course Overview </h3>
              <p>
                In response to the evolving tech age and surge in demand for
                skilled data scientists, Learnbay introduces a{" "}
                <b>Master’s in CS Artificial Intelligence and Data Science.</b>{" "}
                With an inclusive learning setup, this course welcomes working
                pros from diverse domains at any career level. This master's
                program is designed to help experts prepare for a rewarding
                career in data science.
              </p>

              <h3>Why choose Learnbay's Master in CS Data Science and AI? </h3>
              <p>
                Accelerate your full career potential with Learnbay's
                <b>Master in CS Data Science and AI</b> program. Here’s why you
                should choose the online master's degree data science program by
                Learnbay over others :
                <ul>
                  <li>
                    <b>Comprehensive Skill Building:</b> You can gain expertise
                    in trending generative AI concepts. Our program offers a
                    360-degree knowledge-building experience to ensure you earn
                    such highly demanded skill expertise.
                  </li>
                  <li>
                    <b>Guaranteed Career Support:</b> We guarantee 100% job
                    support to help your success in this field after completion
                    of the course. We’ll help you cherish all of your existing
                    potential to land at your desired career level.{" "}
                  </li>
                  <li>
                    <b>Flexible Learning:</b> Our hybrid learning platform
                    caters to professionals from various fields, enabling you to
                    study at your own pace and convenience. You are free to
                    choose the degree of your offline support- whether it be the
                    doubt clearance sessions, mock interviews, or capstone
                    projects.
                  </li>
                </ul>
              </p>
              <p>
                Apart from these gains, this course offers a{" "}
                <b>computer science master’s degree</b> from{" "}
                <i>
                  <b>Woolf University</b>
                </i>{" "}
                (Global Collegiate Higher Education Institution), followed by
                globally recognized certifications from <i>IBM & Microsoft</i>{" "}
                (Dual Certification).
              </p>
              <p>
                Data science is becoming one of the most rewarding careers. We
                expect a surge in demand for skilled data scientists with
                alluring paychecks. A data scientist's average salary in India
                is ₹ 13,50,000, which ranges between USD 130,000 – and
                <i> USD 195,000 overseas.</i>
              </p>
              <p>
                Learnbay is present in prime cities of India like{" "}
                <i>
                  <b>Bengaluru, Hyderabad, Delhi, and Pune,</b>
                </i>{" "}
                shaping worthy careers in data science with hands-on practice
                with live projects. Concerning the upcoming demands, it brings
                on an MS in Computer Science Data Science and AI program with
                endless growth and job offers.
              </p>

              <h3>
                Advantageous Features of a Master's Degree in Data Science
              </h3>
              <p>
                Discover the features that will set you apart from the crowd and
                under the limelight of recruiters' demands.
                <ul>
                  <li>
                    <i>
                      <b>
                        • Industry-driven Syllabus supporting Generative AI:
                      </b>
                    </i>{" "}
                    Learnbay's{" "}
                    <b>
                      Master's in CS artificial intelligence and data science
                    </b>{" "}
                    crafts the syllabus with the latest Gen AI trends (ChatGPT,
                    Bard, & many more) and trending skills in the job market.
                  </li>
                  <li>
                    <i>
                      <b>• 360-degree career growth:</b>
                    </i>{" "}
                    Our <b>masters in computer science online</b> program brings
                    360-degree knowledge-building scope for experts from diverse
                    domains.
                  </li>
                  <li>
                    <i>
                      <b>• Woolf University degree:</b>
                    </i>{" "}
                    Upskilling with a <b>Masters in Data Science and AI</b>{" "}
                    program by Learnbay offers you a globally accredited
                    Master's Degree by Woolf University degree along with ample
                    ECTS credits. This is well-recognized in the US, Canada,
                    Europe, & 60+ Western countries).
                  </li>
                  <li>
                    <i>
                      <b>• Training from Global Faculties:</b>
                    </i>{" "}
                    Learnbay's <b>Master's degree in data science</b> offers the
                    scope of mentorship by renowned experts from MNCs/MAANG and
                    also from global Ph.D. scholars.
                  </li>
                </ul>
              </p>

              <p>
                <i>Globally recognized certifications:</i> Learnbay's{" "}
                <b>Master’s in Computer Science</b> degree offers dual
                certification from IBM & Microsoft, increasing the chances of
                redefining a career at a global level.
              </p>

              <h3>
                Why is Masters in Computer Science Online Essential for Career
                Transition?
              </h3>
              <p>
                Data science has become an inclusive platform for tech and
                non-tech working pros. Amidst the fast-paced rise of AI models,
                many professional courses are coming up to support real-time
                career enhancement. In such times, a master’s program in
                computer science, Gen AI, or a{" "}
                <b>cloud computing certification</b>
                supports career transition.
              </p>
              <p>
                Owing to the gaining popularity, master’s programs in leading AI
                rends have become a preferred gateway for many pros. Upskilling
                with an <b>MS in Computer Science Data Science and AI</b>{" "}
                program is vital for career shifts. At present, firms depend on
                data science for reasons like –
                <ul>
                  <li>• Making decisions with facts and insights</li>
                  <li>• Seamless activities with assured success</li>
                  <li>• Better insights into industry trends</li>
                  <li>• Boosting business yields </li>
                  <li>• Ensuring success led by satisfied customers</li>
                </ul>
                Therefore, to adapt to evolving job requirements, it is
                advisable to enroll in a Master in CS Data Science and AI
                program.
              </p>

              <h2>Domain Electives</h2>
              <h4>
                Industry Training with Diverse Domain Electives with a Masters
                in Data Science and AI
              </h4>
              <p>
                Learnbay's{" "}
                <b>Master’s in Computer Science Data Science and AI</b>
                program offers training with diverse domain electives such as –
                <ul>
                  <li>• BFSI</li>
                  <li>• Healthcare</li>
                  <li>• E-commerce, Retail, Supply Chain </li>
                  <li>• Manufacturing</li>
                </ul>
              </p>
              <h2>
                Leap Into Excellence with Proven Specializations with a Master's
                degree in data science
              </h2>
              <p>
                Learnbay's data science master's degree offers the scope of
                reshaping their careers with any of the specializations like –
              </p>
              <b>
                <p style={{ textDecoration: "underline" }}>
                  Specialization 1: Data Science & Data Analytics
                </p>
              </b>
              <p>
                Learners get the scope of upgrading their skill sets with the
                latest data science and data analytics tools like –
                <ul>
                  <li>• Data Visualization tools</li>
                  <li>• Deep learning</li>
                  <li>• Programming languages (SQL)</li>
                  <li>• Product analytics</li>
                  <li>• Generative AI</li>
                  <li>• Productization of ML Systems</li>
                </ul>
              </p>
              <b>
                {" "}
                <p style={{ textDecoration: "underline" }}>
                  Specialization 2: Artificial Intelligence & Machine Learning
                </p>
              </b>
              <p>
                <ul>
                  <li>• Deep learning and Advanced data analytics</li>
                  <li>• Reinforcement learning</li>
                  <li>• ML Ops</li>
                  <li>• High dimensional data analysis</li>
                  <li>• Deep learning for NLP</li>
                  <li>• Essential and Advanced Data Structures</li>
                  <li>• Product analytics</li>
                  <li>• Generative AI</li>
                  <li>• Productization of ML Systems</li>
                </ul>
              </p>

              <h3>Degree and Certification Details</h3>
              <h4>About Woolf University Master's Degree</h4>
              <p>
                Learnbay's master's program offers a Master's Degree accredited
                by <b>Woolf University</b> equivalent to a master's from the{" "}
                <b>US, Canada, and Europee</b> with better jobs and hikes of
                working pros. Woolf University's degree for a e{" "}
                <b>Master in CS Artificial Intelligence and Data Science</b> is
                well recognized across{" "}
                <b>
                  <i>60+ Western countries,</i>
                </b>{" "}
                driving alluring global job offers.
              </p>
              <h4>About Dual Certifications (IBM & Microsoft)</h4>
              <p>
                Learnbay's <b>Computer Science Master’s degree</b> offers dual
                certification from{" "}
                <i>
                  <b>IBM & Microsoft,</b>
                </i>{" "}
                supporting career shifts and adding value to one's slow-paced
                career. After completing the master's program, learners get a
                project experience certificate from IBM & course completion
                certificates from IBM & Microsoft.
              </p>
              <h4>Module Details </h4>
              <p>
                Learnbay's <b>masters in computer science online</b> program
                offers a top-notch syllabus with the latest Generative AI
                trends. The flexible modules help tech and non-tech experts
                learn advanced concepts, followed by hands-on expertise with
                live projects. To keep pace with the changes, it upgrades the
                syllabus, aligning it with the latest demand in the job market.
                Regardless of domain discipline, this master’s degree course
                syllabus makes you job-ready with dedicated mentoring and
                placement help.
              </p>
              <p>
                Also, the syllabus includes simulated real-time projects, fresh
                capstone projects, and other activities.
              </p>
              <h3>
                Learnbay’s Project Innovation Labs Behind the Success of Our
                Learners
              </h3>
              <p>
                Learnbay’s commitment to fast-forward stagnant careers mapping
                with today’s competitiveness results in successful career
                transitions. Our project innovation labs help trusted learners
                drive real-time success. Our project innovation labs operate
                across four prime cities in India – Bengaluru, Hyderabad, Pune,
                and Delhi. Also, you can get the online experience from any part
                of the world. Experts enrolling in{" "}
                <b>Masters in Computer Science</b>
                program will have benefits like –
                <ul>
                  <li>
                    • Learners gain real-time insights to tackle business issues
                    efficiently
                  </li>
                  <li>• Live projects handled under dedicated mentorships</li>
                  <li>• Work on chosen domain-specific projects</li>
                  <li>• Networking with industry experts</li>
                </ul>
              </p>
              <h3>Job Assistance Program</h3>
              <h4>Data Science Job Support by Learnbay</h4>
              <p>
                Learnbay's<b> MS in Computer Science Data Science and AI</b>{" "}
                program guides working experts with 100% placement support (at
                startup or MNC level) across its centers. In terms of redefining
                stagnant careers in the age of data science, a master’s program
                supports career growth with success.
              </p>
              <h4>
                How does the Job Assistance program help a data scientist's
                career? (Career Service Pro)
              </h4>
              <p>
                After completing the course and projects with at least 70% of
                marks, a learner is eligible for this job assist program.
                Learnbay's data science master degree offers 360-degree
                career-building chances to learners from diverse domains that
                include –
                <ul>
                  <li>• Resume Preparation</li>
                  <li>• LinkedIn Profile Review</li>
                  <li>• Three years of Job and Placement support</li>
                  <li>• Three years of Job and Placement support</li>
                  <li>• 1:1 Review/Doubt-clearing Sessions</li>
                  <li>• Endless Interview Calls</li>
                </ul>
              </p>

              <h3>Know Your Projects </h3>
              <p>
                Learnbay's{" "}
                <b>Master’s in Computer Science Data Science and AI</b>
                program offers training in diverse domains with the latest
                trends. Learners develop their practical skills with 10+ fresh
                capstone projects. Hands-on learning via live projects in
                offline experience centers refines the skill sets to face
                cut-throat competition in data science. Learners get
                uninterrupted mentorship with 1:1 doubt-clearing help from their
                mentors. Upskilling with real-time exposure to real business
                situations enriches a career with unstoppable success.
              </p>

              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
      {Banalytics ? (
        <div className={styles.content}>
          <h1>
            Hone Your Career With The Cutting Edge Business Analytics Online
            Course{" "}
          </h1>
          <p>
            Industries consist of innumerable amounts of data, and companies are
            in a blind situation where they are not able to use this data to
            gain an edge. But business analytics will help you to transform the
            business from a data-blind to a data visionary. With the help of the
            Business Analytics Online Course, you can put your career in a
            fast-track mode to succeed professionally.
          </p>
          {read ? (
            <>
              <h4 style={{ fontSize: "28px" }}>
                Dive Into The World Of Analytics With The Help Of The Best
                Certificate In Business Analytics.{" "}
              </h4>
              <h2 style={{ fontSize: "24px" }}>
                <b>What is Business Analytics? Why Do We Need It? </b>
              </h2>

              <p>
                Business Analytics is a process that combines applications of
                statistical and quantitative techniques to analyze the data to
                extract meaningful insights. The extracted information or data
                will be used by decision-makers to come up with business
                decisions, and strategies for optimizing the business
                operations.
              </p>
              <p>
                At present, Business Analytics seems to be the most accepted
                best practice adopted by every MNC worldwide. Business Analytics
                has changed how the industries view manufacturing, retail
                operations, and making decisions. Business Analytics has helped
                companies make informed decisions, these decisions are fueled by
                the help of data. Regardless of the scale of the company,
                business analytics has helped companies to thrive in these
                competitive markets.
              </p>

              <p>
                In short, a company will make good decisions, earn a competitive
                advantage, improve its understanding of consumer’s perspectives,
                and develop strategies to enhance productivity.
              </p>

              <p>
                These are some of the reasons why we need business analytics. In
                the past, it was something expensive and not an easy process,
                but nowadays it has become a necessity if you want to succeed in
                cutting-edge markets. Business analytics leverages the data and
                helps in improving the company's potential to earn more and make
                smart decisions.
              </p>
              <p>
                Companies are recruiting more and more business analysts to
                foster their productivity at jet speed. If you are an aspiring
                business analyst with the right{" "}
                <b>certificate course in business analytics</b> you can become a
                successful business analyst.
              </p>
              <p>
                From healthcare to the retail sector, all need data to function
                aptly. With the scope of data analytics tools, healthcare
                professionals can detect grave diseases & retailers can track
                consumer choices.
              </p>

              <h2>How Business Analytics Has Impacted The Industries?</h2>
              <p>
                From gathering data sets to analyzing information everything has
                changed after the rise of business analytics, even the new tools
                help you to do business intelligence in an efficient manner.
                From Business Intelligence to Business Analytics everything has
                changed in recent years. You can apply for a business analytics
                course online to learn more about the applications of business
                analytics in the real world.
              </p>
              <p>
                You can see the importance of business analytics in the current
                market scenario, to understand more about it let us dive into
                the practices and how they impacted and changed the operations
                of various industries.
                <ul>
                  <li>
                    Healthcare Industry
                    <p>
                      The Healthcare Industry has seen a significant change in
                      recent years. As you can see, the use of business
                      analytics has increased in the healthcare industry,
                      especially in the areas of medicine, diagnostics,
                      optimization of resources, and patient care. Business
                      Analytics is revolutionizing the entire healthcare sector
                      from pharmaceuticals to health insurance. It has brought a
                      lot of useful and good changes to industries like
                      revealing the pattern of patients to take better care of
                      them, identifying and predicting risk factors of the
                      patients, flawless operations, and allocation to patient
                      care.
                    </p>
                  </li>
                  <li>
                    Finance Industry
                    <p>
                      The finance industry is one of the most impacted
                      industries by business analytics and new-age technology.
                      Business Analytics has impacted and changed the way how
                      banking, insurance, finance, and investment companies
                      operate. Business analytics is totally a game changer for
                      the industry, it helps companies to make data-driven
                      decision that covers all aspects of the business including
                      financial performance, trends in the market, and customer
                      behavior; optimized risk management with the ability to
                      analyze the risks of various asset classes; and
                      incorporating new technologies and merging with AI to
                      revolutionize the financial industry.
                    </p>
                  </li>
                  <li>
                    Retail Industry
                    <p>
                      The Retail industry is seeing innovative changes by
                      adapting business analytics practices. With the help of
                      business analytics companies have started to know more
                      about the customer understanding and perspective of their
                      procurements. All kinds of business segments in the retail
                      industry have dynamically changed including foods,
                      consumer electronics, automotive, e-commerce, and health &
                      beauty. By earning the right{" "}
                      <b>certificate in business analytics,</b> you can easily
                      land a job in the retail sector.
                    </p>
                    <p>
                      These are some of the industries that have been impacted
                      largely by business analytics but are not limited. Also,
                      another important point is that business analytics has
                      started to integrate with Deep Tech, which is considered
                      to be the future. All kinds of established businesses have
                      started to leverage Deep tech by integrating it with
                      business analytics to improve their effectiveness and
                      productivity.
                    </p>
                    <p>
                      With the rapid increase in the demand for business
                      analytics, there are many{" "}
                      <b>best courses for business analytics</b> also available.
                      If you are interested in learning more about business
                      analytics, you can find several good{" "}
                      <b>business analytics online courses.</b> Earning a good
                      certificate in <b>business analytics</b> will pay off
                      hugely and will certainly help you to establish a great
                      career.
                    </p>
                  </li>
                </ul>
              </p>
              <h2>Is a Business Analytics Certification Program Worth It?</h2>
              <p>
                <b>Certification in business analytics</b> will help you to
                successfully establish your career and land your dream job. If
                you enroll in a <b>certificate program in business analytics</b>{" "}
                with comprehensive training, you will receive training for
                cutting-edge technologies and practices. Upon completion of the
                <b>certificate program in business analytics</b>, you will
                receive certification from renowned institutions. These
                certifications and cutting-edge skills will help you to be
                recognized by top-tier companies from different industries.
              </p>
              <h2>
                Why Go With Learnbay’s Certificate Course In Business Analytics?
              </h2>

              <p>
                Among other <b>best courses for business analytics,</b>{" "}
                Learnbay’s
                <b>Business Analytics Online Course</b> not only offers
                comprehensive training but training for new technologies like
                Generative AI and focuses on hands-on practical experience.
              </p>
              <p>
                Learnbay’s <b>Certificate Course in Business Analytics</b> helps
                you to delve into real-world business analytics applications and
                covers future trends as well. Learnbay’s{" "}
                <b>business analytics training</b>
                includes the following features -
                <ul>
                  <li>
                    Industry Relevant Course Curriculum
                    <p>
                      Learners will get to learn from the beginner to the most
                      advanced level, their business analytics training covers
                      various topics as follows:-
                      <ul>
                        <li>Introduction to Business Analytics</li>
                        <li>Excel & Business Statistics</li>
                        <li>Data Science</li>
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning</li>
                        <li>Big Data Analytics and Visualization</li>
                        <li>Deployment AWS+Azure</li>
                        <li>Generative AI</li>
                        <li>NLP (Natural Language Processing)</li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <h3>Hands-on Experience With Real-World Exposure</h3>
                    <p>
                      As a part of the training, Learnbay will encourage you to
                      work on real-time projects and capstone projects. With the
                      help of these projects and case studies, you will get to
                      learn the real-world applications that are being
                      implemented by business analytics practitioners to solve
                      business problems.
                    </p>
                    <p>
                      Upon completion of capstone projects, you will be able to
                      receive a project{" "}
                      <b>certification in business analytics</b> from IBM.
                      Additionally, to enhance your learning and practical
                      experience Learnbay offers you the opportunity to work on
                      projects in offline mode.
                    </p>
                  </li>
                  <li>
                    <h3>
                      Globally Recognized Certifications
                      <p>
                        As it is a{" "}
                        <b>certificate course in business analytics</b>, upon
                        successful completion, you will be able to receive
                        two-course certifications. Learnbay has collaborated
                        with Microsoft and IBM to offer these certifications.
                        Having these certifications will enhance your profile
                        value and help you to be recognized by employers
                        globally.
                      </p>
                    </h3>
                  </li>
                  <li>
                    <h3>Career-Focused Domain Electives</h3>
                    <p>
                      Learning business analytics alongside gaining expertise in
                      a niche area, will be a competitive edge. In this way, you
                      will be able to tailor your business analytics training
                      according to your area of interest. Having domain
                      expertise will increase your job opportunities by opening
                      ways to certain career paths.
                    </p>
                    <p>
                      Again, having a recognized{" "}
                      <b>certificate in business analytics</b> with domain
                      expertise is an edge in this competitive job market.
                    </p>
                  </li>
                  <li>
                    <h3>Personalized Career Services</h3>
                    <p>
                      You can find different kinds of courses for business
                      analytics, but the{" "}
                      <b>best courses for business analytics</b>
                      will have career assistance in their course curriculum.
                      Learnbay’s certificate program in business analytics is
                      inclusive of comprehensive career assistance known as
                      Career Service Pro. This career service pro feature is
                      inclusive of various features such as:
                      <ul>
                        <li>
                          <h4>Placement Support</h4>
                          <p>
                            Learnbay offers comprehensive career services where
                            you will receive unlimited job interview calls,
                            career guidance, and mock interviews.
                          </p>
                        </li>
                        <li>
                          <h4>Personalized Career Services</h4>
                          <p>
                            Their tailored services help you to prepare and
                            optimize your resume and provide feedback for areas
                            of improvement and skill enhancement.{" "}
                          </p>
                        </li>
                        <li>
                          <h4>Networking Opportunities</h4>
                          <p>
                            Not only will you find the best-suited job role as
                            per your desire but you will also be able to network
                            with various professionals and passed-out students.
                          </p>
                          <p>
                            With all these features, one can say Learnbay’s
                            Business Analytics Certification Program is one of
                            the best courses for business analytics. Also, with
                            the help of Learnbay, one can apply for business
                            analytics course online with ease.
                          </p>
                        </li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
              <h2>
                How Can I Gain Competitive Edge As An Existing Business Analyst?{" "}
              </h2>
              <p>
                If you are interested in advancing your career as a business
                analyst, you can start by learning skills and analytics tools
                that are the trends of the future like AI and machine learning.
                Integrating business analytics with AI has brought incredible
                changes in the way how businesses operate. As a Business
                Analyst, you will have a good knowledge of AI and to grasp the
                better part of it, you have to learn from comprehensive courses.
              </p>
              <p>
                Try to search for advanced or master’s in artificial
                intelligence to gain more extensive knowledge about the
                real-world applications of it. There are various master’s degree
                program in AI as well, so select the best one to gain the edge.
              </p>
              <p>
                Learnbay’s{" "}
                <a
                  href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
                  target="_blank"
                >
                  Master’s in Computer Science Data Science{" "}
                </a>
                and AI is a specialization program that leverages your prior
                work experience by combining it with competitive and most-demand
                skills in the market. This is an ideal program for those who
                want to delve more deeply into the field of AI and Analytics.
              </p>
          
              <div onClick={popupShow} className={styles.buttonDiv}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
            </>
          ) : (
            ""
          )}
          <p
            style={{
              color: "#2D9CD7",
              fontWeight: "600",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handler}
            className={styles.readP}
          >
            {read ? "Read Less..." : "Read More..."}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DataAnalytics;
