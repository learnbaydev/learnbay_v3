import React from "react";
import styles from "./AICoLabExperience.module.css";

const AICoLabExperience = () => {
  return (
    <section className={styles.aiCoLabSection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* Gold Badge */}
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <img
                  src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2314.webp"
                  alt="Star Icon"
                  width={30}
                  height={30}
                  className={styles.badgeIconImage}
                />
              </div>
              <span className={styles.badgeText}>
                A First-of-Its-Kind Feature
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={styles.mainHeading}>AI Co-Lab Experience</h1>

            {/* Description Text */}
            <p className={styles.description}>
              Work on live datasets and real problem statements
              <br />
              from <span className={styles.highlight}>30+ companies</span> using
              AI & GenAI
            </p>

            {/* Certificate Text */}
            <p className={styles.certificateText}>
              <span className={styles.boldText}>Earn dual certificate</span>{" "}
              that proves industry experience
            </p>

            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>Know More</button>
              <button className={styles.secondaryButton}>
                <div className={styles.playIcon}>▶</div>
                Learn from AI Leaders
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Header.webp"
                alt="AI Co-Lab Experience"
                className={styles.mainImage}
              />
              {/* Decorative elements */}
              <div className={styles.glowEffect}></div>
              <div className={styles.orbitRing1}></div>
              <div className={styles.orbitRing2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoLabExperience;
