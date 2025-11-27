"use client";

import React from "react";
import Image from "next/image";
import styles from "./LearnbayDifference.module.css";

const LearnbayDifference = () => {
  return (
    <div className={styles.container}>
      <div className="containerWidth">
        <div className={styles.card}>
          {/* Top Section - What is AI Co-Lab */}
          <div className={styles.topSection}>
            <div className={styles.topContent}>
              <div className={styles.topLeft}>
                <h2 className={styles.mainTitle}>"What is AI Co-Lab?"</h2>

                <div className={styles.description}>
                  <p>
                    AI Colab is a unique platform where learners{" "}
                    <span className={styles.highlight}>
                      work directly on real projects
                    </span>{" "}
                    from <span className={styles.highlight}>AI startups</span>,
                    solving actual business challenges in{" "}
                    <span className={styles.highlight}>GenAI & Agentic AI</span>
                    . You don't just learn—you co-create with startups.
                  </p>
                </div>
              </div>

              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/ai_.webp"
                alt="AI Co-Lab illustration"
                width={500}
                height={390}
                loading="lazy"
                quality={100}
                className={styles.topImage}
              />
            </div>
          </div>

          {/* Bottom Section - Why does this matter */}
          <div className={styles.bottomSection}>
            <div className={styles.bottomContent}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/ai_2.webp"
                alt="Development illustration"
                width={500}
                height={390}
                priority
                quality={100}
                className={styles.bottomImage}
              />

              <div className={styles.bottomRight}>
                <h3 className={styles.secondaryTitle}>
                  Why does this matter to me?
                </h3>

                <div className={styles.description}>
                  <p>
                    Because{" "}
                    <span className={styles.highlight}>
                      recruiters trust real-world experience
                    </span>
                    . AI Co-Lab gives you projects that mirror industry
                    challenges — and proof of your skills with{" "}
                    <span className={styles.highlight}>dual certification</span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnbayDifference;
