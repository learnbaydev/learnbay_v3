// components/OutcomesSection.jsx
import React from "react";
import Image from "next/image";
import styles from "./OutcomesSection.module.css";

const OutcomesSection = () => {
  return (
    <div className="containerWidth">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h1 className={styles.mainHeading}>
              What Outcomes
              <br />
              Can I Expect?
            </h1>
            <p className={styles.subHeading}>
              What results do learners usually see?
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Group+3005.webp"
              alt="What Outcomes Can I Expect - Learning outcomes infographic showing 2x faster placement, 45% got shortlisted faster, and 68% reported higher recruiter response"
              width={800}
              height={500}
              className={styles.outcomeImage}
              priority
              quality={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;
