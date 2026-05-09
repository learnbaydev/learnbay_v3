import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>CORPORATE AI TRAINING</span>

          <h1 className={styles.title}>
            Build AI-First Teams That Save{' '}
            <span className={styles.highlight}>30–40%</span> Operational Time
          </h1>

          <p className={styles.description}>
            Join our tailored AI Productivity Workshop for enterprises – learn
            to build enterprise workflows beyond AI tools usage, driving higher
            efficiency gains.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Book Free Consultation →
            </button>
            <button className={styles.secondaryBtn}>
              Download Corporate Training Brochure ↓
            </button>
          </div>

          <div className={styles.reviews}>
            <div className={styles.avatars}>
              <img src="/avatar1.jpg" alt="user" />
              <img src="/avatar2.jpg" alt="user" />
              <img src="/avatar3.jpg" alt="user" />
            </div>
            <span>⭐⭐⭐⭐⭐ (32k+ Reviews)</span>
          </div>
        </div>

        {/* RIGHT - Keep this for floating cards positioning */}
        <div className={styles.right}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div>⏱</div>
            <div>
              <strong>20–40%</strong>
              <p>Time Saving Delivered</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <div>👥</div>
            <div>
              <strong>100+</strong>
              <p>Teams Trained</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <div>📄</div>
            <div>
              <strong>30+</strong>
              <p>Workflows Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
