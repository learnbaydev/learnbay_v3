import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

function HeroSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <div className={styles.firstSection}>
            <h5>E&ICT Academy IIT Guwahati</h5>
            <h1>
              Executive Program in Data Science & AI for{" "}
              <span className={styles.span} >Managers and Leaders</span>
            </h1>
            <div className={styles.starDiv}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/star_icon.webp"
                alt="Learnbay"
                quality={100}
                priority
                width="50"
                height={35}
              />
              <p>Curriculum Inclusive of Gen-AI</p>
            </div>
            <div className={styles.btnDiv}>
              <div className={styles.outlineButton}>DOWNLOAD SYLLABUS</div>
              <div className={styles.orangeButton}>START MY APPLICATION</div>
            </div>
          </div>
          <div className={styles.secondSection}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/iit_guwahti_right.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="684"
              height={450}
            />
          </div>
        </div>
        <div className={styles.botDiv}>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_bot.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="60"
              height="60"
            />
            <div className={styles.content}>
              <p>Application closes on</p>
              <h3>06 Aug, 2024</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_bot.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="60"
              height="60"
            />
            <div className={styles.content}>
              <p>Program Duration</p>
              <h3>11 Months</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_bot.webp"
              alt="Learnbay"
              quality={100}
              priority
              width="60"
              height="60"
            />
            <div className={styles.content}>
              <p>Training Format</p>
              <h3>Live Online <span className={styles.span}>|</span> Hybrid</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
