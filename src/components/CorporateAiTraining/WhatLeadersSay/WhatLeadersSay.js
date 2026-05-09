import React from 'react';
import styles from './WhatLeadersSay.module.css';
const WhatLeadersSay = () => {
  return (
    <section className={styles.section}>
      {/* TOP: TESTIMONIALS */}
      <h2 className={styles.heading}>What Leaders say</h2>

      <div className={styles.testimonials}>
        {[1, 2, 3].map((item) => (
          <div key={item} className={styles.card}>
            <div className={styles.user}>
              <img src="/avatar.jpg" alt="user" />
              <div>
                <h4>Priya Sharma</h4>
                <p>VP Operations, TechNova</p>
              </div>
            </div>

            <p className={styles.quote}>
              “This AI workshop transformed our team’s productivity - we saved
              30% time on routine tasks & improved report accuracy.”
            </p>
          </div>
        ))}
      </div>

      {/* MIDDLE TITLE */}
      <h2 className={styles.headingLarge}>
        What Learning Delivers For Your Organization
      </h2>

      <p className={styles.sub}>
        Proven outcomes across global teams, roles, and industries.
      </p>

      {/* BOTTOM: METRICS */}
      <div className={styles.metrics}>
        <div className={styles.metricItem}>
          <div className={styles.iconCircle}>👥</div>
          <h3>80%</h3>
          <p>Average Completion Rate</p>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.iconCircle}>📜</div>
          <h3>95%</h3>
          <p>Certification Pass Rate</p>
        </div>

        <div className={styles.metricItem}>
          <div className={styles.iconCircle}>🧪</div>
          <h3>40%</h3>
          <p>Savings on Training Costs</p>
        </div>
      </div>
    </section>
  );
};

export default WhatLeadersSay;
