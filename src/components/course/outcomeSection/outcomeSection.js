import Image from "next/image";
import styles from "./OutcomeSection.module.css";

function OutcomeSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Program Outcome:
            <span className={styles.borderBot}> What’s in it for you?</span>
          </h2>
          <div className={styles.innerBoxDiv}>
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
                <h3>Integrate AI 
Solutions in Projects</h3>
              </div>
              <p className={styles.pTop}>
              Seamlessly integrate AI and data analytics solutions into your existing business operations, enhancing efficiency and driving better outcomes.
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
                <h3>Drive Strategic Innovation with AI</h3>
              </div>
              <p className={styles.pTop}>
              Leverage AI for informed decision-making and fostering innovation across key sectors like BFSI, Supply Chain, and Retail, ensuring a competitive edge.
              </p>
            </div>
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
                <h3>Lead Data Science Projects</h3>
              </div>
              <p className={styles.pTop}>
              Effectively manage and deliver data analytics projects, ensuring they align with business goals and deliver impactful results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutcomeSection;
