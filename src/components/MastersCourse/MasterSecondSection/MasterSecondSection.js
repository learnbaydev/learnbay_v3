import React from "react";
import styles from "./MasterSecondSection.module.css";
import Image from "next/image";

const MasterSecondSection = () => {
  return (
    <div>
      <div className={styles.mainBox}>
        <div className={styles.firstbox}>
          <div className={styles.box}>
            <p className={styles.BoldP}>60+</p>
            <p className={styles.NormalP}>Countries Recognition</p>
            <div className={styles.radial}></div>
          </div>
          <div className={styles.box}>
            <p className={styles.BoldP} style={{ color: "#ff8403" }}>
              90+
            </p>
            <p className={styles.NormalP}>Transferrable ECTS Credits</p>
            <div className={styles.radial}></div>
          </div>
          <div className={styles.box}>
            <p className={styles.BoldP}>35K+</p>
            <p className={styles.NormalP}>Trusted Learners</p>
            <div className={styles.radial}></div>
          </div>
        </div>
        <div className={styles.secondbox}>
          <div className={styles.imgBox}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp"
              width={280}
              height={130}
              priority
              alt="review"
            />
          </div>

          <div className={`${styles.imgDesc}`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp"
              width={380}
              height={130}
              priority
              alt="review seconf"
            />
          </div>
          <div className={`imgWrapper ${styles.imgMobile}`}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review-mobile.webp"
              width={380}
              height={200}
              priority
              alt="review mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterSecondSection;
