import React from 'react';
import styles from './SuccessPage.module.css';

const SuccessPage = () => {
  return (
    <div className={styles.section}>
      {/* AMBIENT BACKGROUND ELEMENTS */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.container}>
        {/* HERO SECTION */}
        <div className={styles.hero}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Enquiry successfully registered
          </div>
          <h1 className={styles.heroTitle}>
            You're one step closer to your <br />
            <span className={styles.gradGreen}>AI Career Breakthrough</span>
          </h1>
          <p className={styles.heroSub}>
            Our expert counselor will reach out within a few hours. Here's what
            happens next:
          </p>
        </div>

        {/* NEXT STEPS - ORIGINAL 3 STEP GRID */}
        <div className={styles.stepGrid}>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>Step 01</span>
            <h3 className={styles.stepTitle}>Expert call</h3>
            <p className={styles.stepDesc}>
              A dedicated counselor calls you to understand your background and
              goals
            </p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>Step 02</span>
            <h3 className={styles.stepTitle}>Personalised roadmap</h3>
            <p className={styles.stepDesc}>
              Get a custom AI/Data Science learning path tailored to your
              current role
            </p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>Step 03</span>
            <h3 className={styles.stepTitle}>Enrol & begin</h3>
            <p className={styles.stepDesc}>
              Choose your batch, flexible payment options, and start your
              transformation
            </p>
          </div>
        </div>

        {/* COUNSELOR BAR - PREMIUM STYLE */}
        <div className={styles.counselorBar}>
          <div className={styles.counselorLeft}>
            <div className={styles.avatar}>LC</div>
            <div className={styles.counselorText}>
              <strong>Learnbay Career Expert</strong>
              <span>Avg. response time · within a few hours</span>
            </div>
          </div>
          <div className={styles.callBadge}>Call scheduled</div>
        </div>

        {/* FOLD 2 CONTENT */}
        <div className={styles.fold2Header}>
          <h2 className={styles.heroTitleSmall}>
            Your brochure is ready — and so is your counselor
          </h2>
          <p className={styles.heroSub}>
            During the session, your counselor will cover everything you need to
            make a confident decision:
          </p>
        </div>

        {/* SESSION GRID - ORIGINAL 4 ITEMS */}
        <div className={styles.sessionGrid}>
          <div className={styles.sessionItem}>
            <div className={styles.iconBox}>📈</div>
            <div>
              <h3 className={styles.itemTitle}>Salary growth potential</h3>
              <p className={styles.itemDesc}>
                Data-driven analysis of your hike based on experience, domain,
                and target role
              </p>
            </div>
          </div>
          <div className={styles.sessionItem}>
            <div className={styles.iconBox}>🤖</div>
            <div>
              <h3 className={styles.itemTitle}>Real-world curriculum</h3>
              <p className={styles.itemDesc}>
                How GenAI, Agentic AI, and live projects are built into every
                program
              </p>
            </div>
          </div>
          <div className={styles.sessionItem}>
            <div className={styles.iconBox}>💼</div>
            <div>
              <h3 className={styles.itemTitle}>Placement support</h3>
              <p className={styles.itemDesc}>
                Resume builds, mock interviews, LinkedIn optimisation, and job
                referrals
              </p>
            </div>
          </div>
          <div className={styles.sessionItem}>
            <div className={styles.iconBox}>🗓️</div>
            <div>
              <h3 className={styles.itemTitle}>Flexible batch options</h3>
              <p className={styles.itemDesc}>
                Weekend and weekday schedules designed for working professionals
              </p>
            </div>
          </div>
        </div>

        {/* PROOF ROW - ORIGINAL 4 STATS */}
        <div className={styles.proofRow}>
          <div className={styles.proofCard}>
            <span className={styles.proofNum}>10,000+</span>
            <span className={styles.proofLabel}>professionals trained</span>
          </div>
          <div className={styles.proofCard}>
            <span className={styles.proofNum}>IBM & MS</span>
            <span className={styles.proofLabel}>certified programs</span>
          </div>
          <div className={styles.proofCard}>
            <span className={styles.proofNum}>300+</span>
            <span className={styles.proofLabel}>hiring partners</span>
          </div>
          <div className={styles.proofCard}>
            <span className={styles.proofNum}>4.8 ★</span>
            <span className={styles.proofLabel}>average rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
