import Button from "@/components/Global/Button/Button";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./FirstSection.module.css";

const FirstSectionContent = ({ setPopups }) => {
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.slide}>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
          <p className={styles.pTop}>India’s #1 </p>
          <h1 className={styles.h1}>
            Tech-Upskilling Platform
            <span className={styles.forNew}>&nbsp; for </span>Working
            Professionals
            <span className={styles.arrowImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/arrow-top.webp"
                width="166"
                height="115"
                priority
                alt="data science course"
              />
            </span>
          </h1>

          <div className={styles.GenAiBox}>
            <div className={styles.GenImageBlock}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/genAi.png"
                width="32"
                height="32"
                priority
                alt="data science course"
              />
            </div>
            <p className={styles.TextGreen}>
              Curriculum inclusive of GenAI and ChatGPT
            </p>
          </div>
          <div className={styles.imgWrapperMobile}>
            <div className={styles.pClass}>
              <p className={styles.blinkMobile}>
                <FaCheck className={styles.greenCheck} /> Data Science & AI
              </p>
              <p className={styles.blinkMobile}>
                <FaCheck className={styles.greenCheck} /> Cloud & DevOps
              </p>
              <p className={styles.blinkMobile}>
                <FaCheck className={styles.greenCheck} /> Master’s Degree
              </p>
            </div>
            <div className="imgWrapper">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbay-main.webp"
                width="580"
                height="450"
                priority
                quality={40}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.pClass}>
            <p className={styles.blink}>
              <FaCheck className={styles.greenCheck} /> Data Science & AI
            </p>
            <p className={styles.blink}>
              <FaCheck className={styles.greenCheck} /> Cloud & DevOps
            </p>
            <p className={styles.blink}>
              <FaCheck className={styles.greenCheck} /> Master’s Degree Program
            </p>
          </div>
          <div className={styles.btnWrapper}>
            {/* <a href="#course">
              <Button
                className={styles.outLineBtn}
                ButtonWhiteBg
                text="Courses"
                passIcon={<FaChevronDown className="bIconS" />}
              />
            </a> */}
            <div onClick={popupShow}>
              <Button
                className={styles.Btn}
                OrangeButton
                text="Get Recommendation"
                // passIcon={<FaBell className="bIconS" />}
              />
            </div>
          </div>
        </div>
        <div className={styles.secondLeft}>
          <div className={styles.imgWrapperDesktop}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbay-main.webp"
              width="580"
              height="450"
              priority
              quality={55}
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FirstSectionContent);
