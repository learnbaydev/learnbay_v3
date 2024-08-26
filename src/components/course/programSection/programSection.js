import Image from "next/image";
import styles from "./ProgramSection.module.css";

function programSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2> Who is this <span className={styles.topSpan}>program for ?</span></h2>
          <div className={styles.twoSection}>
            <div className={styles.firstSection}>
              <h3>
                Mid <span className={styles.lightGray}>to</span> Senior Level{" "}
                <span className={styles.lightGray}>Professionals with</span><span className={styles.orangeHead}> 4+
                Years of Experience</span>
              </h3>
              <p className={styles.pTop}>
                this program is perfect for those looking to leverage data
                science and AI to drive{" "}
              </p>
              <div className={styles.innerBoxDiv}>
                <div className={styles.innerBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/project_ma.webp"
                    alt="Learnbay"
                    quality={100}
                    priority
                    width="50"
                    height="50"
                  />
                  <h3>Project Manager</h3>
                </div>
                <div className={styles.innerBox}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/eligible_de.webp"
                    alt="Learnbay"
                    quality={100}
                    priority
                    width="60"
                    height="60"
                  />
                  <h3>Team Lead</h3>
                </div>
              </div>
              <p className={styles.pBot}>
                <span className={styles.orangeSpan}>Important Note:</span> The
                final number of quizzes, assignments and discussions will be
                confirmed closer to the programme start. To know more{" "}
                <span className={styles.blueSpan}>check eligibility</span>
              </p>
            </div>
            <div className={styles.secondSection}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_right_side.webp"
                alt="Learnbay"
                quality={100}
                priority
                width="611"
                height="506"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default programSection;
