// "use client";
// import React, { useState } from "react";
// import styles from "./BrochureDemoSection.module.css";
// import Image from "next/image";
// import StrategyModal from "../StrategyModal/StrategyModal";
// function BrochureDemoSection({ pdfUrl }) {
//   const [isModalOpen, setModalOpen] = useState(false);
//   return (
//     <section className={styles.section}>
//       {/* Top gradient header */}
//       <div className={styles.hero}>
//         <h1 className={styles.heroTitle}>Your Brochure Is Ready!</h1>
//         <p className={styles.heroSubtitle}>
//           You’re one step closer to upgrading your career
//         </p>
//         {pdfUrl && (
//           <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
//             <button className={styles.ctaButton1}>View Syllabus</button>
//           </a>
//         )}
//       </div>
//       {/* Main card (overlapping the gradient) */}
//       <div className={styles.cardWrapper}>
//         <div className={styles.card}>
//           {/* Top line */}
//           <p className={styles.topText}>
//             Don’t just read about the program{" "}
//             <span className={styles.bold}>experience it </span>
//             <span className={styles.live}>LIVE</span> with an{" "}
//             <span className={styles.bold}>expert.</span>
//           </p>

//           {/* Host strip */}
//           <div className={styles.hostStrip}>
//             <div className={styles.hostLeft}>
//               <div className={styles.hostImageWrap}>
//                 {/* Replace with your real image inside /public */}
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Thankyouimage.webp"
//                   alt="Mr. Ravi Pradhan"
//                   className={styles.hostImage}
//                   width={100} // Explicitly define width
//                   height={100} // Explicitly define height
//                   priority // Ensure the image loads as soon as possible and with full resolution
//                 />

//                 <div className={styles.hostImageWrap}>
//                   {/* Mic icon near the image */}
//                   <span className={styles.micIcon}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       className={styles.micSvg}
//                     >
//                       <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a1 1 0 0 0-2 0 3 3 0 0 1-6 0 1 1 0 0 0-2 0 5.002 5.002 0 0 0 4 4.9V19h-2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-3.1A5.002 5.002 0 0 0 17 11z" />
//                     </svg>
//                   </span>
//                 </div>

//                 <span className={styles.hostBadge}>✓</span>
//               </div>
//               <span className={styles.hostedBy}>Hosted by</span>
//             </div>

//             <div className={styles.hostRight}>
//               <p className={styles.hostName}>Mr. Ravi Pradhan</p>
//               <p className={styles.hostRole}>AI Expert Practitioner</p>
//               <div className={styles.hostTag}>
//                 Ex-Amazon | 12+ Years Experience
//               </div>
//             </div>
//           </div>

//           {/* Middle heading + description */}
//           <h2 className={styles.demoHeading}>
//             Book Your Live{" "}
//             <span className={styles.demoHighlight}>Demo Session</span>
//           </h2>

//           <p className={styles.demoDesc}>
//             Join our 45-minute Expert Demo Session designed to show you exactly
//             how professionals from any background are transitioning into AI,
//             GenAI, and Agentic AI roles faster than ever.
//           </p>

//           {/* Slots and duration row */}
//           <div className={styles.infoRow}>
//             <span className={styles.slotsText}>
//               <span className={styles.slotsHighlight}>25 Slots</span> Left Today
//             </span>

//             {/* <div className={styles.infoDivider} /> */}

//             <span className={styles.sessionInfo}>
//               <span className={styles.timerCircle}>⏱</span>
//               Limited Seats
//             </span>
//           </div>

//           {/* Button INSIDE the card */}
//           <button
//             className={styles.ctaButton}
//             onClick={() => setModalOpen(true)}
//           >
//             <span>Schedule Demo Class </span>
//             <span className={styles.ctaArrow}>➜</span>
//           </button>
//         </div>
//       </div>
//       <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//     </section>
//   );
// }

// export default BrochureDemoSection;

'use client';
import React, { useState, useEffect } from 'react';
import styles from './BrochureDemoSection.module.css';
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

function BrochureDemoSection({ pdfUrl }) {
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

      // Show days only if > 0
      setTimeLeft(d > 0 ? `${d}d ${h}:${m}:${s}` : `${h}:${m}:${s}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Progress bar reflects seats taken
  const seatsTaken = TOTAL_SEATS - remainingSeats;
  const progressPercent = Math.min((seatsTaken / TOTAL_SEATS) * 100, 100);

  return (
    <section className={styles.section}>
      {/* Top gradient header — unchanged */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Your Brochure Is Ready!</h1>
        <p className={styles.heroSubtitle}>
          You&apos;re one step closer to upgrading your career
        </p>
        {pdfUrl && (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaButton1}>View Syllabus</button>
          </a>
        )}
      </div>

      {/* ── Card: replaced with scholarship section ── */}
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          {/* Urgency bar */}
          <div className={styles.urgencyBar}>
            <div className={styles.blinkDot} />
            <span className={styles.barText}>
              Financial Year-End Offer ends in
            </span>
            <span className={styles.timer}>{timeLeft}</span>
            <div className={styles.blinkDot} />
          </div>

          <div className={styles.cardContent}>
            {/* Thank-you tag */}
            <div className={styles.thankYouTag}>
              ✓ &nbsp;You&apos;re in — Thank You!
            </div>

            {/* Headline */}
            <h2 className={styles.headline}>
              One More Step.
              <br />
              Lock in Your{' '}
              <span className={styles.orange}>30% Scholarship</span>
              <br />
              <span className={styles.purple}>Before It Expires.</span>
            </h2>

            {/* Sub */}
            <p className={styles.sub}>
              You&apos;ve taken the first step. Now secure your seat at
              today&apos;s price before the Financial Year-End offer closes on
              31st March.
            </p>

            {/* Scholarship card */}
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

            {/* Fee note */}
            <div className={styles.feeNote}>
              Note: Fees will be revised from 1st April 2026
            </div>

            {/* Features grid */}
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

            {/* Seats row */}
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
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {/* Progress bar */}
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>

            {/* CTA */}
            <button
              className={styles.ctaBtn}
              onClick={() => setModalOpen(true)}
            >
              Claim Your Scholarship Now
            </button>

            {/* IBM note */}
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

export default BrochureDemoSection;
