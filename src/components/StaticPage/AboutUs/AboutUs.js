import React from "react";
import styles from "./AboutUs.module.css";
import {
  FaUserFriends,
  FaCompress,
  FaAddressCard,
  FaClone,
  FaHandsHelping,
  FaUserGraduate,
  FaAngleDoubleUp,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import {
  WoolfBadge,
  WoolfBlock,
  WOOLF_COLLEGE_LINE,
} from "../../Global/Woolf/WoolfEmbed";

const TEAM = [
  {
    name: "Krishna Kumar",
    role: "Founder",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Krishna+Kumar+(1).jpg",
    linkedin: "https://www.linkedin.com/in/krishna-kumar-learnbay/",
    quote: `Skills are what distinguish a novice from a professional. But
              there is no such skill level that we can call "evergreen."
              Continuous skill development is the only way to survive in today's
              highly competitive job market. I want to lead all of the
              passionate professionals to the peak of their professionals. I
              want to establish Learnbay as the 'one-stop destination to learn,
              grow & lead.'`,
  },
  {
    name: "Nisha Kumari",
    role: "CEO",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Nisha+Kumari+(1).jpg",
    linkedin: "https://www.linkedin.com/in/nisha-kumari-94a733243/",
    quote: `I had a dream of building an educational institute offering a
              successful career to aspirants. Non-tech candidates lose hope of
              working for 2-3 years. My dream is to establish an organization
              beyond certification and create extremely demanding professionals.
              Data science is a promising future; my entire team is dedicated to
              training everyone in DS, AI, and full-stack knowledge. I don't
              want anyone to lose hope anymore.`,
  },
  {
    name: "Abhishek Gupta",
    role: "Director",
    img: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Abhishek+Gupta+(1).jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-gupta-716552115/",
    quote: `We work hard to ensure students achieve the ultimate success after
              course completion. They lose track of careers as "What now?" we
              save candidates from getting lost in the huge crowd. Our goal is
              to make sure everyone starts a successful career as DS, AI, and
              full-stack experts from Learnbay. More than certificates, we
              enhance our students' skills and knowledge, so they learn to earn
              through an ever-secure career.`,
  },
];

const HIGHLIGHTS = [
  { icon: BsGraphUp, label: "Highest Salary Hike" },
  { icon: FaAngleDoubleUp, label: "Average Salary Hike" },
  { icon: FaHandsHelping, label: "Hiring Partners" },
  { icon: FaUserGraduate, label: "Careers Reshaped" },
];

// Learnbay is not a college of IBM: it delivers its programs in
// collaboration with IBM, and learners earn IBM certificates. Keep the
// wording to that, and keep this card separate from the Woolf one.
const IBM_POINTS = [
  "IBM Project Certification for industry-level capstone projects",
  "Course Completion Certificate from IBM",
  "Hands-on projects built on real business problems",
];

function AboutUs() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>About Learnbay</p>
            <h1 className={styles.heroTitle}>
              <span className={styles.quote}>
                “Knowledge is power,”- (Francis Bacon)
              </span>{" "}
              And we want to empower all our aspirants to succeed.
            </h1>
          </div>
          <div className={styles.heroImg}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/about-us.png"
              width="522"
              height="380"
              alt="data science course"
              priority
            />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={styles.section}>
        <div className={styles.vmGrid}>
          <article className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/vision.png"
                width="517"
                height="330"
                alt="data science course"
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Vision</h3>
              <p className={styles.cardText}>
                To lead the industrial training sector by generating demanding
                professionals with future proof technical skills and knowledge.
              </p>
              <ul className={styles.chips}>
                <li>
                  <FaAddressCard className={styles.chipIconBlue} />
                  Provide scopes to techies & non-techies all alike.
                </li>
                <li>
                  <FaClone className={styles.chipIconGold} />
                  Ensure an extremely personalized learning experience.
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mission.png"
                width="517"
                height="380"
                alt="data science course"
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Mission</h3>
              <p className={styles.cardText}>
                Safeguarding your career, even under the most unstable job
                market scenario, via the acquisition of emerging
                technology-based unique skills.
              </p>
              <ul className={styles.chips}>
                <li>
                  <FaUserFriends className={styles.chipIconBlue} />
                  Literate everyone with data science knowledge.
                </li>
                <li>
                  <FaCompress className={styles.chipIconGold} />
                  Bust the myth that only IT pros can have lucrative careers.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ACADEMIC STRUCTURE */}
      <section className={`${styles.section} ${styles.tinted}`} id="academic">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>How we teach and certify</p>
          <h2 className={styles.sectionTitle}>Our Academic Structure</h2>
        </div>
        <div className={styles.academicGrid}>
          <article className={styles.academicCard}>
            <div className={styles.academicLogo}>
              <span className={styles.logoLabel}>In Collaboration With</span>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/IBM.png"
                width="120"
                height="60"
                alt="IBM"
              />
            </div>
            <h3 className={styles.academicTitle}>
              Industry certification with IBM
            </h3>
            <p className={styles.cardText}>
              Learnbay delivers its certification programs in collaboration
              with IBM. Validate your Data Science & AI skills with IBM
              certificates and get acknowledged in the IT sector by adding them
              to your profile.
            </p>
            <ul className={styles.points}>
              {IBM_POINTS.map((point) => (
                <li key={point}>
                  <FaCheckCircle className={styles.pointIcon} />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.academicCard}>
            <div className={styles.academicLogo}>
              <WoolfBadge />
            </div>
            <h3 className={styles.academicTitle}>
              Master&apos;s degree awarded by Woolf
            </h3>
            <p className={styles.cardText}>
              {WOOLF_COLLEGE_LINE} Our{" "}
              <Link
                href="/datascience/data-science-and-ai-masters-in-cs"
                className={styles.inlineLink}
              >
                Master of Science in Computer Science
              </Link>{" "}
              is taught online and carries 90 ECTS credits at EQF level 7.
            </p>
          </article>
        </div>
        <WoolfBlock />
      </section>

      {/* CORE TEAM */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Leadership</p>
          <h2 className={styles.sectionTitle}>Our Core Team</h2>
        </div>
        <div className={styles.teamGrid}>
          {TEAM.map((m) => (
            <article className={styles.teamCard} key={m.name}>
              <div className={styles.teamImg}>
                <Image
                  src={m.img}
                  width="440"
                  height="313"
                  alt="data science course"
                />
              </div>
              <div className={styles.teamBody}>
                <div className={styles.teamHead}>
                  <div>
                    <h3 className={styles.teamName}>{m.name}</h3>
                    <span className={styles.role}>{m.role}</span>
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <FaLinkedin className={styles.linkedin} />
                  </a>
                </div>
                <p className={styles.teamQuote}>{m.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PLACEMENT HIGHLIGHTS */}
      <section className={`${styles.section} ${styles.tinted}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Placement Highlights</h2>
        </div>
        <div className={styles.statGrid}>
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <div className={styles.stat} key={label}>
              <Icon className={styles.statIcon} />
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
