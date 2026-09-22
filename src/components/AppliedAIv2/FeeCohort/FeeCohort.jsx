'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FeeCohort.module.css';
import PopupContent from '@/components/Global/PopupContent/PopupContent';
import { BROCHURE_URL, LOGOS } from '../programData';

const ROWS = [
  ['Duration', '4 months'],
  ['Mode', '100% live online + AI Co-Lab'],
  ['Prerequisite', 'None — no coding'],
  ['Material access', '3-year flexible subscription'],
];

export default function FeeCohort() {
  const [popups, setPopups] = useState(false);
  const [brochurePopup, setBrochurePopup] = useState(false);

  return (
    <section className={styles.section} id="fee">
      <PopupContent
        dataScienceGeneric={true}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />

      {/* The brochure is gated behind the lead form, as on the other AI course
          pages: Form downloads the PDF only after a successful submission. */}
      <PopupContent
        dataScienceGeneric={true}
        downloadBrochure={true}
        upSkillingHide={true}
        popups={brochurePopup}
        setPopups={setBrochurePopup}
        brochurePdf={BROCHURE_URL}
        titleCourse="Applied AI Practitioner Program"
        brochureLink={BROCHURE_URL}
        heading="Download Brochure"
      />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <header className={styles.head}>
            <p className={styles.kicker}>Fee and cohort</p>
            <h2 className={styles.title}>
              One fee. No bond, no income-share agreement.
            </h2>
          </header>

          <div className={styles.paragraphs}>
            <p>
              The fee covers the full four months, the AI Co-Lab capstone, all
              three certifications and three years of access to the material. EMI
              is available over 3, 6 or 9 months.
            </p>
            <p>
              Ask the advisor about scholarships and early-cohort pricing before
              you pay — they are more common than providers advertise.
            </p>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.ghostBtn}
              onClick={() => setBrochurePopup(true)}
            >
              Download the brochure
            </button>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => setPopups(true)}
            >
              Talk to an advisor first
              <svg viewBox="0 0 18 18" className={styles.arrow} aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ---- Fee card ---- */}
        <aside className={styles.card}>
          <div className={styles.cardHead}>
            <Image
              src={LOGOS.tih}
              alt=""
              width={39}
              height={40}
              className={styles.cardLogo}
            />
            <div className={styles.cardHeadCopy}>
              <strong>Applied AI Practitioner Program</strong>
              <span>
                In collaboration with Vishlesan i-Hub Foundation, IIT Patna
              </span>
            </div>
          </div>

          <div className={styles.priceBlock}>
            <p className={styles.priceLabel}>Programme fee</p>
            <p className={styles.amount}>
              ₹1,20,000<span className={styles.gst}>+ 18% GST</span>
            </p>
            <p className={styles.emi}>
              EMI from <strong>₹13,333 / month</strong> over 9 months
            </p>
          </div>

          <dl className={styles.rows}>
            {ROWS.map(([label, value]) => (
              <div key={label} className={styles.row}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.cardCta}>
            <button
              type="button"
              className={styles.applyBtn}
              onClick={() => setPopups(true)}
            >
              Apply for the next cohort
            </button>
          </div>

          <p className={styles.finePrint}>
            Placement assistance is included; placement is not guaranteed.
            Durations are indicative and confirmed before your batch begins.
          </p>
        </aside>
      </div>
    </section>
  );
}
