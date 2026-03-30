'use client';
import React, { useState, useEffect } from 'react';
import styles from './BrochureDemoSection.module.css';
import StrategyModal from '../StrategyModal/StrategyModal';
import Image from 'next/image';

const TOTAL_SEATS = 24;
const SEATS_PER_DAY = 4;
const MIN_SEATS = 4;
const BASE_DATE = new Date('2026-03-24T00:00:00');

function getRemainingSeats() {
  const now = new Date();
  const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
  return remaining > MIN_SEATS ? remaining : MIN_SEATS; // never go below MIN_SEATS
}

function ApplyforCouncelling({ subText, mainText, pdfUrl }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [remainingSeats, setRemainingSeats] = useState(TOTAL_SEATS);
  const [timeLeft, setTimeLeft] = useState({
    d: '00',
    h: '00',
    m: '00',
    s: '00',
  });

  // Calculate progress percentage
  const seatsUsed = TOTAL_SEATS - remainingSeats;
  const totalReducibleSeats = TOTAL_SEATS - MIN_SEATS;
  const progressPercent =
    50 + Math.min((seatsUsed / totalReducibleSeats) * 50, 50);

  useEffect(() => {
    // Set remaining seats on client side to avoid hydration mismatch
    setRemainingSeats(getRemainingSeats());
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const deadline = new Date('2026-03-31T23:59:59');
      const diff = deadline - new Date();

      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }

      setTimeLeft({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      {/* ORBS */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Enquiry Successfully Registered
        </div>

        <h1 className={styles.heroTitle}>
          Avail Financial Year End <br />
          <span className={styles.gradGreen}>Scholarship </span>
        </h1>

        <p className={styles.heroSub}>
          Our expert will call you shortly. Meanwhile, lock in your scholarship
          before it expires.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className={styles.mainCard}>
        {/* SCHOLARSHIP BAND */}
        <div className={styles.scholBand}>
          <div className={styles.scholGlow} />

          <div className={styles.scholTop}>
            <div className={styles.scholLeft}>
              <div className={styles.pctCircle}>30%</div>
              <div>
                <div className={styles.scholLabel}>Scholarship Offer</div>
                <div className={styles.scholSub}>
                  Available on all AI programs
                </div>
              </div>
            </div>

            <div className={styles.scholRight}>
              <div className={styles.validLabel}>Valid till</div>
              <div className={styles.validDate}>31st March</div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.feeNote}>
            Fees will be revised from{' '}
            <span className={styles.feeHighlight}>1st April 2026</span> — save
            now
          </div>
        </div>

        {/* FEATURES */}
        <div className={styles.featuresGrid}>
          <div className={styles.feat}>
            <div className={`${styles.featIcon} ${styles.featIconAi}`}>🤖</div>
            <span>GenAI & Agentic AI Integrated Program</span>
          </div>

          <div className={styles.feat}>
            <div className={`${styles.featIcon} ${styles.featIconInd}`}>🏭</div>
            <span>Expert Led Industrial Program</span>
          </div>
        </div>

        {/* SEATS SECTION */}
        <div className={styles.seatsSection}>
          <div className={styles.body}>
            {/* Seats row */}
            <div className={styles.seatsRow}>
              <span className={styles.seatsLabel}>
                🔥 Seats filling up fast
              </span>
              <span className={styles.seatsCount}>
                Only {remainingSeats} left at this price
              </span>
            </div>

            {/* Progress bar */}
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* URGENCY */}
        <div className={styles.urgency}>
          <div className={styles.lockIcon}>🔒</div>
          <div className={styles.urgencyText}>
            <strong>Limited scholarships offer:</strong> Based on First-come,
            first-served. Price will increase from 1st April 2026.
          </div>
        </div>

        <span className={styles.ibmSep}>|</span>
        <span className={styles.ibmText}>
          Industry-certified program · Placement support included
        </span>
      </div>

      {/* CTA NOTE */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaNote}>
          Note: Scholarships are limited and offered on a first-come,
          first-served basis. Check your eligibility during the counseling
          session.
        </p>
      </div>

      {/* SECOND HERO */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{mainText}</h1>
        <p className={styles.heroSub}>{subText}</p>
      </div>

      {/* PDF BUTTON */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: '50px',
        }}
      >
        {pdfUrl && (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaButton1}>View Syllabus</button>
          </a>
        )}
      </div>

      <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default ApplyforCouncelling;
