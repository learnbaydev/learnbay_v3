import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FaCheck } from "react-icons/fa";
import styles from "./FirstSection.module.css";

function HeroSection({ setPopups, setVideo, btnHide }) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const bgImage = isMobile
    ? "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mbl_home_two.webp"
    : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.webp";

  const typeLogo = isMobile
    ? "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/logo_mix_mbl.webp"
    : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp";

  return (
    <section className={styles.section}>
      <div className={styles.bgWrap}>
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={
            isMobile
              ? "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mbl_home_two.avif"
              : "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.avif"
          }
        />
      </div>
      <div className={styles.content}>
        <h1>
          <span className={styles.india}>India’s #1</span> Upskilling Platform
          for Working Professionals
        </h1>
        <h3 title="Gen AI and ChatGPT">
          Curriculum inclusive of Gen AI and ChatGPT
        </h3>
        <div className={styles.round}>
          <p>
            <FaCheck /> Data Science & AI
          </p>
          <p>
            <FaCheck /> Cloud & DevOps
          </p>
          <p>
            <FaCheck /> Master’s Degree
          </p>
        </div>
        <div className={styles.buttonDiv}>
          <button
            title="Apply For Counselling"
            onClick={() => setPopups(true)}
            className={styles.button}
          >
            Apply for Counselling
          </button>
          {!btnHide && (
            <div
              className={styles.learnDiv}
              onClick={() => setVideo(true)}
              aria-label="Learn More"
            >
              <div className={styles.iconDiv}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                >
                  <path
                    d="M60.0544 30.0029C60.0544 46.3104 46.7195 59.5371 30.2616 59.5371C13.8037 59.5371 0.468796 46.3104 0.468796 30.0029C0.468796 13.6955 13.8037 0.468796 30.2616 0.468796C46.7195 0.468796 60.0544 13.6955 60.0544 30.0029Z"
                    fill="#FD2222"
                    fillOpacity="0.2"
                    stroke="#FD2222"
                    strokeWidth="0.937591"
                  />
                  <path
                    d="M45.3101 30.3101L21.8894 43.832V16.7881L45.3101 30.3101Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Learn More</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.typeLogo}>
        <p>Get Certification from :</p>
        <div className={styles.logoWrap}>
          <Image
            src={typeLogo}
            width={isMobile ? 300 : 650}
            height={isMobile ? 20 : 34}
            alt="Certification Logo"
            priority
            sizes={isMobile ? "300px" : "650px"}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
