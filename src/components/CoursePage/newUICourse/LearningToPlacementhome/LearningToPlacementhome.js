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
              {" "}
              <span className={styles.highlight}>AI Co-Lab Experience</span>
            </h3>
            <p className={styles.des}>Work with startups and enterprises</p>
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
            <p className={styles.bold}>
              {time}Live Industry
              <br /> Problems
            </p>
            <span className={styles.span}>
              Work on real time
              <br /> problem statements of AI-driven companies.
            </span>
          </div>

          <div className={`${styles.card} ${styles.teal}`}>
            <p className={styles.boldYellow}>{guided}Backed by Industry</p>
            <span className={styles.skills}>
              Earn certificates <br />
              directly recognized by companies.
            </span>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.left}>
            <p className={styles.pTag}>
              <span className={styles.green}>Master tools like:</span>
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/logos.webp"
              width={250}
              height={200}
              alt="Flexible subscription"
              loading="lazy"
            />
          </div>

          <div className={styles.right}>
            {/* <div className={styles.capstoneBox}>
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
            </div> */}

            <div className={styles.supportBox}>
              <div className={styles.supportVideo}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/OUTSPOKEN+CERTIFICATE+1.webp"
                  width={240}
                  height={175}
                  alt="mentor support"
                  loading="lazy"
                />
              </div>
              <div className={styles.supportText}>
                <h5>Recruiters cannot say ‘No’ to this portfolio</h5>
                <ul className={styles.ul}>
                  <li className={styles.li}>Gain practical AI experience</li>
                  <li className={styles.li}>
                    Get startup-certified proof of work
                  </li>
                  <li className={styles.li}>Stand out in interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningToPlacement;
