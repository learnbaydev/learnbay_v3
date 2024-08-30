import React from "react";
import styles from "./jobReadySection.module.css";
import Image from "next/image";

function jobReadySection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2 className={styles.headH4}>
          <span className={styles.grey}>Get</span> job ready within 6 months{" "}
          <span className={styles.grey}>with Career Services</span>{" "}
          <span className={styles.orange}>PRO</span>
        </h2>
        <div className={styles.innerdiv}>
          <div className={styles.innerbox}>
            <h4>Placement Support</h4>
            <p>
              Unleash your career potential with unlimited job access, interview
              support, and profile review.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/placement_support_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img1}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Mock Interviews</h4>
            <p>
              Unleash your career potential with unlimited job access, interview
              support, and profile review.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mock_icon.webp"
              alt="Zest"
              width="393"
              height="323"
              loading="lazy"
              className={styles.img2}
            />
          </div>
          <div className={styles.innerbox}>
            <h4>Resume BuildUp</h4>
            <p>
              Unleash your career potential with unlimited job access, interview
              support, and profile review.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/resume_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img1}
            />

          </div>
          <div className={styles.innerbox}>
            <h4>Ultimate Interview calls</h4>
            <p>
              Unleash your career potential with unlimited job access, interview
              support, and profile review.
            </p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/calls_icon.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
              className={styles.img2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default jobReadySection;
