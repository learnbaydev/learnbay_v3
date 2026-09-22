import React from 'react';
import Image from 'next/image';
import styles from './Comparison.module.css';
import { LOGOS } from '../programData';

const ROWS = [
  {
    key: "Who it's built for",
    ours: 'Professionals applying AI inside their own role',
    theirs: 'Anyone, which usually means nobody in particular',
  },
  {
    key: 'Coding required',
    ours: 'None — low-code and no-code throughout',
    theirs: 'Often Python-first from week one',
  },
  {
    key: 'Format',
    ours: '100% live online, weekday or weekend batches',
    theirs: 'Recorded video, watched alone',
  },
  {
    key: 'Projects',
    ours: 'A deployable product you specify and ship',
    theirs: 'Notebook exercises with a published solution',
  },
  {
    key: 'Capstone review',
    ours: 'Scoped and evaluated by a partner startup',
    theirs: 'Auto-graded, or not reviewed at all',
  },
  {
    key: 'Certification',
    ours: 'IIT Patna i-Hub + IBM + a signed startup certificate',
    theirs: 'A completion certificate for finishing the videos',
  },
  {
    key: 'Material access',
    ours: '3-year flexible subscription',
    theirs: 'Ends when the course does',
  },
  {
    key: 'After it ends',
    ours: 'Placement assistance — resume, mocks, referrals',
    theirs: 'Nothing',
  },
];

function YesIcon() {
  return (
    <span className={styles.yes}>
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="m5.6 9.2 2.3 2.3 4.5-4.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function NoIcon() {
  return (
    <span className={styles.no}>
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5.6 9h6.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function Comparison() {
  return (
    <section className={styles.section} id="comparison">
      <header className={styles.head}>
        <p className={styles.kicker}>Feature by feature</p>
        <h2 className={styles.title}>
          This programme versus a typical online AI course.
        </h2>
        <p className={styles.lede}>
          A recorded course and a live, co-credentialled cohort are not the same
          product. Here is the difference, stated plainly.
        </p>
      </header>

      <div className={styles.table}>
        {/* Keys column */}
        <div className={styles.keys}>
          <div className={styles.keysHeader} aria-hidden="true" />
          {ROWS.map((row) => (
            <div key={row.key} className={styles.key}>
              {row.key}
            </div>
          ))}
        </div>

        {/* Our programme */}
        <div className={styles.ours}>
          <div className={styles.oursHeader}>
            <span className={styles.oursBrand}>
              <Image
                src={LOGOS.tih}
                alt=""
                width={25}
                height={26}
                className={styles.oursLogo}
              />
              Applied AI Practitioner Program
            </span>
            <span className={styles.thisPage}>This page</span>
          </div>

          {ROWS.map((row) => (
            <div key={row.key} className={styles.oursRow}>
              <span className={styles.rowKeyMobile}>{row.key}</span>
              <YesIcon />
              <p className={styles.oursText}>{row.ours}</p>
            </div>
          ))}

          <div className={styles.oursFooter}>
            <a href="#fee" className={styles.cta}>
              See the fee and cohort dates
              <svg viewBox="0 0 14 14" className={styles.ctaArrow} aria-hidden="true">
                <path
                  d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Typical course */}
        <div className={styles.theirs}>
          <div className={styles.theirsHeader}>A typical online AI course</div>
          {ROWS.map((row) => (
            <div key={row.key} className={styles.theirsRow}>
              <span className={styles.rowKeyMobile}>{row.key}</span>
              <NoIcon />
              <p className={styles.theirsText}>{row.theirs}</p>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.footnote}>
        &ldquo;A typical online AI course&rdquo; describes the common pattern
        across self-paced video programmes, not any single named provider. If you
        already work in AI daily and just need reference material, a self-paced
        course will serve you better for a fraction of this fee.
      </p>
    </section>
  );
}
