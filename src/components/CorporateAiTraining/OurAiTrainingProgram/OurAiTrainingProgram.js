import styles from './OurAiTrainingProgram.module.css';

export default function AiPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Our AI Training Programs</h2>

        <p className={styles.subheading}>
          Choose the right path for your team – from targeted skill-building to
          a guided pilot implementation.
        </p>

        <div className={styles.cardWrapper}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <img
              src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/AIImage.webp"
              alt="ai"
              className={styles.cardImg}
            />

            <div className={styles.cardBody}>
              <h3 className={styles.level1}>Level 1:</h3>

              <h4 className={styles.title}>
                AI Skills & Tools (Short Courses)
              </h4>

              <p className={styles.desc}>
                Hands-on modules on key AI tools and technology tailored for
                non-technical or technical staff.
              </p>

              <ul className={styles.list}>
                <li>
                  Interactive online sessions, practicals, exercises, digital
                  badges
                </li>
                <li>Course completion certificate; ready-to-use templates</li>
                <li>
                  Duration: 4–6 weeks
                  <br />
                  (modular self-placed + live Q&A)
                </li>
                <li>
                  ₹₹₹ (per team or person)
                  <br />
                  ideal for intial upskilling
                </li>
              </ul>

              <button className={styles.btnBlue}>Enroll In Level 1 →</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <img
              src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/AIImage.webp"
              alt="ai"
              className={styles.cardImg}
            />

            <div className={styles.cardBody}>
              <h3 className={styles.level2}>Level 2:</h3>

              <h4 className={styles.title}>
                AI Workflow Accelerator (Pilot Program)
              </h4>

              <p className={styles.desc}>
                Full-service AI adoption program: training + guided workflow
                design for one team.(5-20 people)
              </p>

              <ul className={styles.list}>
                <li>
                  Discovery sessions, custom workflow building, hands-on
                  coaching
                </li>
                <li>Course completion certificate; ready-to-use templates</li>
                <li>
                  Duration: 6–8 weeks
                  <br />
                  (live workshop + onsite/virtual support)
                </li>
                <li>
                  ₹₹₹ (value-packed pilot rate)-
                  <br />
                  designed to prove ROI before scaling
                </li>
              </ul>

              <button className={styles.btnOrange}>Enroll In Level 2 →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
