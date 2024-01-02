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
    </div>
  );
}

export default DataAnalytics;
