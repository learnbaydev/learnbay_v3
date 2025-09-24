import React from "react";
import styles from "./AICoLabExperience.module.css";
import Image from "next/image";

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
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Group+2314.webp"
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
              Work on live case studies and problem statements
              <br />
              from <span className={styles.highlight}>30+ companies</span> AI
              startups
            </p>

            {/* Certificate Text */}
            <p className={styles.certificateText}>
              <span className={styles.boldText}>Earn dual certificate</span>{" "}
              that proves industry experience
            </p>

            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>Know More</button>
              <button
                className={styles.secondaryButton}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/playlist?list=PLl1gyDCKkiQRVRI-K7zwbtCwn6zj3nzkC",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <div className={styles.playIcon}>▶</div>
                Learn from AI Leaders
              </button>
            </div>
          </div>

          {/* Right Image (priority added here) */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Header.webp"
                alt="AI Co-Lab Experience"
                className={styles.mainImage}
                width={470}
                height={470}
                priority // ✅ this preloads image for LCP
                sizes="(max-width: 480px) 280px, (max-width: 768px) 360px, 470px"
              />
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
