import Image from "next/image";
import {
  PiArrowRightBold,
  PiFilePdfFill,
  PiSealCheckFill,
  PiStarFill,
} from "react-icons/pi";
import styles from "./LeadPopup.module.css";

const CERTS = {
  microsoft:
    "https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/microsoft_Cert_new.webp",
  iitPatna:
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Applied+AI+Certification.webp",
  woolf:
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/certificate/degree-woolf.webp",
};

const SYLLABUS_POINTS = [
  "Module-by-module curriculum",
  "Projects and capstone list",
  "Tools and frameworks covered",
  "Certifications you earn",
];

const ProofStrip = () => (
  <div className={styles.proof}>
    <div className={styles.stat}>
      <p className={styles.statValue}>35,000+</p>
      <p className={styles.statLabel}>trusted learners</p>
    </div>
    <span className={styles.divider} aria-hidden />
    <div className={styles.stat}>
      <p className={styles.statValue}>
        4.69
        <span className={styles.stars} aria-label="4.69 out of 5">
          {[0, 1, 2, 3, 4].map((i) => (
            <PiStarFill key={i} aria-hidden />
          ))}
        </span>
      </p>
      <p className={styles.statLabel}>SwitchUp reviews</p>
    </div>
    <span className={styles.divider} aria-hidden />
    <div className={styles.stat}>
      <p className={styles.statValue}>IBM</p>
      <p className={styles.statLabel}>certified projects</p>
    </div>
  </div>
);

const CertificateDeck = () => (
  <div className={styles.deck} aria-hidden>
    <span className={`${styles.cert} ${styles.certLeft}`}>
      <Image src={CERTS.microsoft} alt="" width={174} height={134} />
    </span>
    <span className={`${styles.cert} ${styles.certRight}`}>
      <Image src={CERTS.woolf} alt="" width={174} height={134} />
    </span>
    <span className={`${styles.cert} ${styles.certCenter}`}>
      <Image src={CERTS.iitPatna} alt="" width={158} height={110} />
    </span>
    <span className={styles.ibmBadge}>
      <PiSealCheckFill className={styles.seal} />
      IBM project certification
    </span>
  </div>
);

const CareerSwitch = () => (
  <div className={styles.switchCard}>
    <div className={styles.learner}>
      <span className={styles.initials}>JS</span>
      <span className={styles.learnerName}>Jaya Sinha</span>
      <span className={styles.roleChip}>Senior Analyst</span>
    </div>
    <div className={styles.switchRow}>
      <span className={styles.fromChip}>Aditya Birla Group</span>
      <PiArrowRightBold className={styles.switchArrow} aria-hidden />
      <span className={styles.toChip}>Infosys</span>
    </div>
    <p className={styles.quote}>
      “Best upskilling platform if you’re aiming to switch to leading MNCs or
      get your dream package.”
    </p>
  </div>
);

const SyllabusCard = ({ program }) => (
  <div className={styles.syllabusWrap} aria-hidden>
    <span className={`${styles.sheet} ${styles.sheetBack}`} />
    <span className={`${styles.sheet} ${styles.sheetMid}`} />
    <div className={styles.syllabusCard}>
      <div className={styles.syllabusTop}>
        <div>
          <p className={styles.syllabusEyebrow}>Syllabus</p>
          <p className={styles.syllabusTitle}>{program}</p>
        </div>
        <span className={styles.pdfChip}>
          <PiFilePdfFill />
          PDF
        </span>
      </div>
      <ol className={styles.syllabusList}>
        {SYLLABUS_POINTS.map((point, index) => (
          <li key={point}>
            <span className={styles.syllabusNum}>{index + 1}</span>
            {point}
          </li>
        ))}
      </ol>
    </div>
  </div>
);

/**
 * The left-hand visual of the lead popup. `syllabus` shows the brochure card
 * and the program name; otherwise the counselling pitch with certificates and
 * a learner's career switch.
 */
const LeadPopupPanel = ({ syllabus, program }) => {
  const programName = program || "Learnbay Program";

  return (
    <div className={styles.panel}>
      <span className={styles.glow} aria-hidden />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          {syllabus ? programName : "For working professionals"}
        </p>
        <p className={styles.headline}>
          {syllabus ? "See exactly what you’ll learn." : "Switch to the role you want."}
          <span className={styles.headlineSoft}>
            {syllabus ? "Module by module." : "We’ll map the route."}
          </span>
        </p>
      </div>

      {syllabus ? (
        <SyllabusCard program={programName} />
      ) : (
        <>
          <CertificateDeck />
          <CareerSwitch />
        </>
      )}

      <ProofStrip />
    </div>
  );
};

export default LeadPopupPanel;
