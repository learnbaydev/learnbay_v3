import React from "react";
import styles from "./whyChooseSection.module.css";
import Image from "next/image";

function whyChooseSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>Why choose Learnbay ?</h2>
        <div className={styles.innerDivOne}>
          <div className={styles.oneFirst}>
            <h3>Training mode</h3>
            <p>
              You can choose from two flexible training modes to suit your needs
              and preferences:
            </p>
            <div className={styles.innerBox}>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Lead_icon.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <p>100% Live online classes</p>
              </div>
              <div className={styles.iconBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Lead_icon.webp"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="80"
                  height="80"
                />
                <p>Hybrid * classes</p>
              </div>
            </div>
          </div>
          <div className={styles.oneSecond}></div>
        </div>
      </div>
    </section>
  );
}

export default whyChooseSection;
