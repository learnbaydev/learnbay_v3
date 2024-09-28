import React from "react";
import styles from "./Other.module.css";
import Image from "next/image";
import { otherData } from "./OtherData"; // Adjust the path accordingly

const Other = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.h2}>{otherData.title}</h2>

      <div className={styles.HeadDiv}>
        <div className={styles.left}>
          {otherData.leftSide.map((item, index) => (
            <div className={styles.inside} key={index}>
              <p>{item.label}</p>
              {otherData.svgArrow(item.svgWidth, item.svgHeight,)}
            </div>
          ))}
        </div>

        <div className={styles.middle}>
          <div className={styles.imgdiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/learnbay_logo_others.webp"
              width={200}
              height={40}
              alt="learnbay"
              loading="lazy"
            />
          </div>

          {otherData.middleSide.map((content, index) => (
            <div key={index}>
              <div className={styles.middleContent}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/sign_mark.webp"
                  width={25}
                  height={25}
                  alt="icon"
                  priority
                  quality={80}
                />
                <p>{content}</p>
              </div>
              {index < otherData.middleSide.length - 1 && <hr />}
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <h4>Others</h4>
          {otherData.rightSide.map((content, index) => (
            <div key={index}>
              <div className={styles.rytInside}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/wrong_icon.webp"
                  width={30}
                  height={30}
                  alt="icon"
                  priority
                  quality={80}
                />
                <p>{content}</p>
              </div>
              {index < otherData.rightSide.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other;
