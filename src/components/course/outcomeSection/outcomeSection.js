import Image from "next/image";
import styles from "./outcomeSection.module.css";

function outcomeSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>Program Outcome: What Can You Expect from this course?</h2>
          <div className={styles.twoSection}>
            <div className={styles.innerBoxDiv}>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Lead_icon.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <div>
                  <h3>Lead Your Team Successfully:</h3>
                  <p className={styles.pTop}>
                    Learn how to guide and motivate your team, boosting
                    collaboration and helping you achieve project goals faster.
                    85% of our participants report improved team performance.
                  </p>
                </div>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/manage_icon.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <div>
                  <h3>Manage Projects from Start to Finish:</h3>
                  <p className={styles.pTop}>
                    Get the tools to handle every stage of a project, from
                    planning to completion, ensuring projects are delivered on
                    time and with high quality. Over 90% of graduates
                    successfully lead complex projects.
                  </p>
                </div>
              </div>
              <div className={styles.innerBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/ai_icon.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <div>
                  <h3>Use AI to Work Smarter:</h3>
                  <p className={styles.pTop}>
                    Learn how to apply Generative AI to simplify tasks, make
                    better decisions, and automate repetitive work, giving you a
                    competitive edge. 70% of our alumni have implemented AI
                    solutions in their roles.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.secondSection}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/placed_img.webp"
                alt="Learnbay"
                quality={100}
                priority
                width="617"
                height="819"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default outcomeSection;
