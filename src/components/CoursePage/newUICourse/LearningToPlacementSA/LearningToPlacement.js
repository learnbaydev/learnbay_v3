import React from "react";
import styles from "./LearningToPlacement.module.css";
import Image from "next/image";

const LearningToPlacement = ({ time, guided }) => {
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
            <p className={styles.bold}>{time}+ Hours</p>
            <span className={styles.span}>of Live Instructor-Led Classes</span>
          </div>

          <div className={`${styles.card} ${styles.teal}`}>
            <p className={styles.boldYellow}>{guided}+ Guided</p>
            <span className={styles.skills}>
              Skill focused <br />
              Hands-On Projects
            </span>
            <div className={styles.logos}>
              <span>GitHub</span>
              <span>Python</span>
              <span>Cloud Modules</span>
            </div>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.left}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/micro_ss1.webp"
              width={250}
              height={90}
              alt="Flexible subscription"
              loading="lazy"
            />
            <p className={styles.pTag}>
              <span className={styles.green}>
                Become a Microsoft Certified System Administrator
              </span>{" "}
              <span className={styles.nor}></span>
            </p>
            {/* Become a Microsoft Certified System Administrator Learn practical
            system administration skills and achieve Microsoft certification. */}
            <span className={styles.learn}>
              Learn practical skills and earn certification.
            </span>
          </div>

          <div className={styles.right}>
            <div className={styles.capstoneBox}>
              <div className={styles.capLeft}>{/* 6<span>+</span> */}</div>
              <div className={styles.capRight}>
                <h5>
                  <strong>
                    Gain hands-on experience solving production-grade system
                    challenges while earning industry-certified administration
                    projects.
                  </strong>
                </h5>
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
