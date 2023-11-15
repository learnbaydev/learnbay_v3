import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    <div className={styles.boxP}>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(4).png"
              width="35"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Globally Recognized Degree</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(5).png"
              width="35"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Immigration Opportunities</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(6).png"
              width="35"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Integrated Generative AI</p>
        </div>
      </div>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div className={styles.imgBox}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(7).png"
              width="35"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Transferable ECTS Credits</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
