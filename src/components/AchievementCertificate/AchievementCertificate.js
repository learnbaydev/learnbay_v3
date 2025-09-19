import React from "react";
import styles from "./AchievementCertificate.module.css";

const AchievementCertificate = ({
  certificateImageUrl = "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/AI+Co-Lab+Certificate.webp",
  certificateAlt = "Achievement Certificate",
}) => {
  return (
    <section className={styles.achievementSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Content */}
          <div className={styles.textContent}>
            <h2 className={styles.mainTitle}>
              <span className={styles.highlight}>
                {" "}
                Your Achievement,
                <br /> Recognized Twice
              </span>
            </h2>

            <div className={styles.description}>
              <p className={styles.descriptionText}>
                Complete each project to earn a<br />
                dual certificate.
              </p>

              <p className={styles.descriptionText}>
                Issued by Learnbay and the partner.
                <br />
                This certificate proves learning and
                <br />
                real-world experience.
              </p>
            </div>

            <button className={styles.ctaButton}>Know More</button>
          </div>

          {/* Right Content - Certificate Image */}
          <div className={styles.certificateContainer}>
            <div className={styles.certificateWrapper}>
              <img
                src={certificateImageUrl}
                alt={certificateAlt}
                className={styles.certificateImage}
              />
              {/* Optional decorative elements */}
              <div className={styles.shadowOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementCertificate;
