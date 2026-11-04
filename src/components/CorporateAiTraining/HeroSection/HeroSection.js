import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>CORPORATE AI TRAINING</span>

          <h1 className={styles.title}>
            Build AI-First Teams That Save <br />
            <span className={styles.highlight}>30–40%</span>{' '}
            <span className={styles.noWrap}>Operational Time</span>
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
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
              />
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="user"
              />
            </div>

            <div className={styles.reviewText}>
              <span className={styles.stars}>★★★★★</span>
              <p>(32k+ Reviews)</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FLOATING CARDS */}
        <div className={styles.right}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.iconBox}>◴</div>

            <div>
              <strong>20-40%</strong>
              <p>Time Saving Delivered</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.iconBox}>◌◌</div>

            <div>
              <strong>100+</strong>
              <p>Teams Trained</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.iconBox}>▣</div>

            <div>
              <strong>30+</strong>
              <p>Case Studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
