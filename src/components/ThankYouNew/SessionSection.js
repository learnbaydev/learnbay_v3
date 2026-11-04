import React from "react";
import Image from "next/image";
import styles from "./SessionSection.module.css";

function SessionSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* Left image */}
        <div className={styles.imageWrapper}>
          {/* Put your image in /public/images/session-image.png or change src */}
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage2.webp"
            alt="Learner attending online session"
            fill
            className={styles.image}
          />
        </div>

        {/* Right content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.headingBold}>In this session,</span> you
            will
          </h2>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.icon}>✔</span>
              <span>Understand the real roadmap to transition into AI</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>✔</span>
              <span>Know the top skills required in 2026 &amp; beyond</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>✔</span>
              <span>Discover the salary growth &amp; role opportunities</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>✔</span>
              <span>Get personalised guidance for your next 5 years</span>
            </li>
          </ul>

          {/* empty space to mimic area where buttons were in design */}
          <div className={styles.bottomSpacing} />
        </div>
      </div>
    </section>
  );
}

export default SessionSection;
