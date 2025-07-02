import React from "react";
import styles from "./LearningToPlacement.module.css";
import Image from "next/image";

const LearningToPlacement = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.top}>
            <h3>
              From{" "}
              <span className={styles.highlight}>Learning to Placement</span>
            </h3>
            <p className={styles.des}>We've got you covered</p>
            <div className={styles.underline}>
              {" "}
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/under_lone.webp"
                width={220}
                height={25}
                alt="underLine"
                loading="lazy"
              />{" "}
            </div>
          </div>

          <div className={`${styles.card} ${styles.red}`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/alarm_on.webp"
              width={90}
              height={90}
              alt="Live classes"
              loading="lazy"
            />
            <p className={styles.bold}>180+ Hours</p>
            <span className={styles.span}>of Live Instructor-Led Classes</span>
          </div>

          <div className={`${styles.card} ${styles.teal}`}>
            <p className={styles.boldYellow}>80+ Guided</p>
            <span className={styles.skills}>
              Skill focused <br />
              Hands-On Exercises
            </span>
            <div className={styles.logos}>
              <span>GitHub</span>
              <span>OpenAI</span>
              <span>Python</span>
            </div>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.left}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/3d_sign.webp"
              width={140}
              height={160}
              alt="Flexible subscription"
              loading="lazy"
            />
            <p className={styles.pTag}>
              <span className={styles.green}>3 Years</span> Flexible{" "}
              <span className={styles.nor}>Subscription</span>
            </p>
            <span className={styles.learn}>
              Learn at your pace with unlimited access.
            </span>
          </div>

          <div className={styles.right}>
            <div className={styles.capstoneBox}>
              <div className={styles.capLeft}>
                6<span>+</span>
              </div>
              <div className={styles.capRight}>
                <h5>
                  Industrial <strong>Capstone</strong> Projects
                </h5>
                <p>
                  Co-built with top companies for <br />
                  <strong>practical exposure</strong>
                </p>
              </div>
            </div>

            <div className={styles.supportBox}>
              <div className={styles.supportText}>
                <h5>
                  <span>1-on-1</span> Personalized Support
                </h5>
                <p>Doubt Clearing with Mentors, get help whenever needed.</p>
              </div>
              <div className={styles.supportVideo}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/perd.webp"
                  width={240}
                  height={175}
                  alt="mentor support"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningToPlacement;
