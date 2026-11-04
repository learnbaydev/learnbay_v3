import React from "react";
import styles from "./WhyChooseUsSection.module.css";

function WhyChooseUsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Why <span className={styles.highlight}>10,000</span> professionals
          choose us
        </h2>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.cardTitle}>Salary Hike Prediction</h3>
            <p className={styles.cardText}>
              Data-driven analysis based on your background, role, and goals.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.cardTitle}>Personalized Roadmap</h3>
            <p className={styles.cardText}>
              A step-by-step guide to transition into AI, ML, GenAI, or Data
              Science.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.cardTitle}>Real-World Projects</h3>
            <p className={styles.cardText}>
              Hands-on work with AI startups + project certificates you can
              showcase.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.cardTitle}>Tools &amp; Tech Stack</h3>
            <p className={styles.cardText}>
              Learn GPT, LLaMA, HuggingFace, LangChain, Python, SQL, Power BI,
              Azure, AWS &amp; more.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.cardTitle}>Career Support</h3>
            <p className={styles.cardText}>
              Resume, LinkedIn, mock interviews, job referrals — end-to-end
              assistance.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.cardTitle}>Flexible Batches</h3>
            <p className={styles.cardText}>
              Weekend &amp; weekday options designed for working professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
