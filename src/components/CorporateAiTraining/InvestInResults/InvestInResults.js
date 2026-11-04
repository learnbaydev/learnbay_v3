import React from 'react';
import styles from './InvestInResults.module.css';
const InvestInResults = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Invest in Results: Training Packages</h2>

      <div className={styles.grid}>
        {/* BASIS */}
        <div className={styles.card}>
          <h3 className={styles.titleBlue}>Basis Package</h3>
          <p className={styles.sub}>Guided Courses</p>

          <p className={styles.price}>
            ₹25K <span>+ 18% GST</span>
          </p>

          <p className={styles.desc}>
            Minimum 5 people <br />
            <span className={styles.link}>For a quick skills boost.</span>
          </p>

          <ul className={styles.list}>
            <li>✔ Self-paced learning</li>
            <li>✔ Certificate of completion</li>
            <li>✔ Templates & cheat-sheets</li>
          </ul>

          <button className={styles.outlineBtn}>Contact Sales 📞</button>
        </div>

        {/* PILOT */}
        <div className={`${styles.card} ${styles.highlightCard}`}>
          <h3 className={styles.titleOrange}>Pilot Package</h3>
          <p className={styles.sub}>Guided Pilot Program</p>

          <p className={styles.price}>
            ₹2 Lac <span>+ 18% GST</span>
          </p>

          <p className={styles.desc}>
            Up to 5 people <br />
            <span className={styles.orangeText}>
              Includes training + implementation guide + skills boost
            </span>
          </p>

          <ul className={styles.list}>
            <li>✔ AI workflow discovery</li>
            <li>✔ 2-3 workflows implemented</li>
            <li>✔ ROI report & case study</li>
          </ul>

          <button className={styles.primaryBtn}>Start Pilot Project →</button>
        </div>

        {/* ENTERPRISE */}
        <div className={styles.card}>
          <h3 className={styles.titleBlue}>Enterprise Package</h3>
          <p className={styles.sub}>Custom Plan</p>

          <p className={styles.price}>Custom Pricing</p>

          <p className={styles.desc}>
            Tailored programs for 5–25 people with implementation support & ROI
            report
          </p>

          <ul className={styles.list}>
            <li>✔ Custom Curriculum</li>
            <li>✔ Dedicated Support</li>
            <li>✔ Scalable implementation</li>
          </ul>

          <button className={styles.outlineBtn}>Contact Sales 📞</button>
        </div>
      </div>

      <p className={styles.footer}>
        All Packages include free consultation & satisfaction guarantee.
      </p>
    </section>
  );
};

export default InvestInResults;
