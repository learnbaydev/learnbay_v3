import Image from "next/image";
import styles from "./OutcomeSection.module.css";

function outcomeSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Program Outcome:{" "}
            <span className={styles.boldH2}>What Can You Expect from</span>
            <span className={styles.borderBot}> this course?</span>
          </h2>
          <div className={styles.innerBoxDiv}>
            <div className={styles.innerBox}>
              <div className={styles.headCont}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_team_outcome.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="68"
                  height="68"
                />
                <h3>Lead Your Team Successfully:</h3>
              </div>
              <p className={styles.pTop}>
              Master team leadership to boost collaboration and achieve goals faster—85% report improved performance.
              </p>
            </div>
            <div className={styles.innerBox}>
              <div className={styles.headCont}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_project_outcome.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="68"
                  height="68"
                />
                <h3>Manage Projects from Start to Finish:</h3>
              </div>
              <p className={styles.pTop}>
              Gain tools to manage projects from start to finish—over 90% lead complex projects successfully.
              </p>
            </div>
            <div className={styles.innerBox}>
              <div className={styles.headCont}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_work.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="68"
                  height="68"
                />
                <h3>Use AI to Work Smarter:</h3>
              </div>
              <p className={styles.pTop}>
              Apply Generative AI to automate tasks and enhance decision-making—70% have implemented AI in their roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default outcomeSection;
