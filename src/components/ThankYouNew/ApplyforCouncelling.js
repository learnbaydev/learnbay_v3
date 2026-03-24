'use client';
import React, { useState, useEffect } from 'react';
import styles from './BrochureDemoSection.module.css';
import Image from 'next/image';
import StrategyModal from '../StrategyModal/StrategyModal';

const TOTAL_SEATS = 24;
const SEATS_PER_DAY = 4;
const BASE_DATE = new Date('2026-03-24T00:00:00');

function getRemainingSeats() {
  const now = new Date();
  const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
  return remaining > 1 ? remaining : 1; // never show 0
}

function ApplyforCouncelling() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const remainingSeats = getRemainingSeats();

  useEffect(() => {
    const updateTimer = () => {
      const deadline = new Date('2026-03-31T23:59:59');
      const diff = deadline - new Date();

      if (diff <= 0) {
        setTimeLeft('EXPIRED');
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(
        2,
        '0'
      );
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

      setTimeLeft(d > 0 ? `${d}d ${h}:${m}:${s}` : `${h}:${m}:${s}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Your Enquiry Is Successfully Registered
        </h1>
        <p className={styles.heroSubtitle}>
          Before our expert calls you, get a head-start with a live demo.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.urgencyBar}>
            <div className={styles.blinkDot} />
            <span className={styles.barText}>
              Financial Year-End Offer ends in
            </span>
            <span className={styles.timer}>{timeLeft}</span>
            <div className={styles.blinkDot} />
          </div>

          <div className={styles.cardContent}>
            <div className={styles.thankYouTag}>
              ✓ &nbsp;You&apos;re in — Thank You!
            </div>

            <h2 className={styles.headline}>
              One More Step.
              <br />
              Lock in Your{' '}
              <span className={styles.orange}>30% Scholarship</span>
              <br />
              <span className={styles.purple}>Before It Expires.</span>
            </h2>

            <p className={styles.sub}>
              You&apos;ve taken the first step. Now secure your seat at
              today&apos;s price before the Financial Year-End offer closes on
              31st March.
            </p>

            <div className={styles.scholarshipCard}>
              <div className={styles.scholLeft}>
                <div className={styles.scholPct}>30%</div>
                <div className={styles.scholDivider} />
                <div>
                  <div className={styles.scholPctLabel}>Scholarship Offer</div>
                  <div className={styles.scholSublabel}>
                    Applied automatically at checkout
                  </div>
                </div>
              </div>
              <div className={styles.scholRight}>
                <div className={styles.scholValidLabel}>Valid till</div>
                <div className={styles.scholDate}>31st March</div>
              </div>
            </div>

            <div className={styles.feeNote}>
              Note: Fees will be revised from 1st April 2026
            </div>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🤖</span>
                <span className={styles.featureText}>
                  GenAI and Agentic AI Integrated Program
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🏭</span>
                <span className={styles.featureText}>
                  Expert Led Industrial Program
                </span>
              </div>
            </div>

            <div className={styles.seatsRow}>
              <span className={styles.seatsLabel}>
                🔥 Seats filling up fast
              </span>
              <span className={styles.seatsCount}>
                Only {remainingSeats} left at this price
              </span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.min(
                    ((TOTAL_SEATS - remainingSeats) / TOTAL_SEATS) * 100,
                    100
                  )}%`,
                }}
              />
            </div>

            <div className={styles.noteText}>
              Note: Scholarships are limited and offered on a first-come,
              first-served basis. Check your eligibility during the counseling
              session.
            </div>

            <div className={styles.ibmNote}>
              Certified by <span className={styles.ibmLogo}>IBM</span>
              &nbsp;·&nbsp; Placement support included
            </div>
          </div>
        </div>
      </div>

      <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default ApplyforCouncelling;
