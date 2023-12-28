import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";
import { FaBookReader } from "react-icons/fa";

function SecondSection() {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.fone}>
          <div>
            <Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/chatgpt.webp" width={180} height={50} />

            
          </div>

          <div className={styles.inone}>
            <p>Master modern age skills like Data Science & Gen-AI</p>
          </div>
        </div>

        <div className={styles.ftwo}>

          <p>Learn from courses designed by industry experts</p>
        </div>

        <div className={styles.ftwo}>
          <FaBookReader/>
        Self-paced learning. Learn anytime from anywhere
        </div>

        <div className={styles.ftwo}>
        Lifetime free access to all our courses
        </div>
      </div>
    </>
  );
}

export default SecondSection;
