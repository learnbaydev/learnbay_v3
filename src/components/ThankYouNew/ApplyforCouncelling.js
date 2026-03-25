// 'use client';
// import React, { useState, useEffect } from 'react';
// import styles from './BrochureDemoSection.module.css';
// import Image from 'next/image';
// import StrategyModal from '../StrategyModal/StrategyModal';

// const TOTAL_SEATS = 24;
// const SEATS_PER_DAY = 4;
// const BASE_DATE = new Date('2026-03-24T00:00:00');

// function getRemainingSeats() {
//   const now = new Date();
//   const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
//   const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
//   return remaining > 1 ? remaining : 1; // never show 0
// }

// function ApplyforCouncelling() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [timeLeft, setTimeLeft] = useState('');
//   const remainingSeats = getRemainingSeats();

//   useEffect(() => {
//     const updateTimer = () => {
//       const deadline = new Date('2026-03-31T23:59:59');
//       const diff = deadline - new Date();

//       if (diff <= 0) {
//         setTimeLeft('EXPIRED');
//         return;
//       }

//       const d = Math.floor(diff / 86400000);
//       const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(
//         2,
//         '0'
//       );
//       const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
//       const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

//       setTimeLeft(d > 0 ? `${d}d ${h}:${m}:${s}` : `${h}:${m}:${s}`);
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.section} style={{ marginTop: '200px' }}>
//       <div className={styles.cardWrapper}>
//         <div className={styles.card}>
//           {/* <div className={styles.urgencyBar}>
//             <div className={styles.blinkDot} />
//             <span className={styles.barText}>
//               Financial Year-End Offer ends in
//             </span>
//             <span className={styles.timer}>{timeLeft}</span>
//             <div className={styles.blinkDot} />
//           </div> */}

//           <div className={styles.cardContent}>
//             {/* <div className={styles.thankYouTag}>
//               ✓ &nbsp;You&apos;re in — Thank You!
//             </div> */}

//             <h2 className={styles.headline}>
//               One More Step.
//               <br />
//               Lock in Your{' '}
//               <span className={styles.orange}>30% Scholarship</span>
//               <br />
//               <span className={styles.purple}>Before It Expires.</span>
//             </h2>

//             <p className={styles.sub}>
//               You&apos;ve taken the first step. Now secure your seat at
//               today&apos;s price before the Financial Year-End offer closes on
//               31st March.
//             </p>

//             <div className={styles.scholarshipCard}>
//               <div className={styles.scholLeft}>
//                 <div className={styles.scholPct}>30%</div>
//                 <div className={styles.scholDivider} />
//                 <div>
//                   <div className={styles.scholPctLabel}>Scholarship Offer</div>
//                   <div className={styles.scholSublabel}>
//                     Applied automatically at checkout
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.scholRight}>
//                 <div className={styles.scholValidLabel}>Valid till</div>
//                 <div className={styles.scholDate}>31st March</div>
//               </div>
//             </div>

//             <div className={styles.feeNote}>
//               Note: Fees will be revised from 1st April 2026
//             </div>

//             <div className={styles.features}>
//               <div className={styles.featureItem}>
//                 <span className={styles.featureIcon}>🤖</span>
//                 <span className={styles.featureText}>
//                   GenAI and Agentic AI Integrated Program
//                 </span>
//               </div>
//               <div className={styles.featureItem}>
//                 <span className={styles.featureIcon}>🏭</span>
//                 <span className={styles.featureText}>
//                   Expert Led Industrial Program
//                 </span>
//               </div>
//             </div>

//             <div className={styles.seatsRow}>
//               <span className={styles.seatsLabel}>
//                 🔥 Seats filling up fast
//               </span>
//               <span className={styles.seatsCount}>
//                 Only {remainingSeats} left at this price
//               </span>
//             </div>

//             <div className={styles.progressTrack}>
//               <div
//                 className={styles.progressFill}
//                 style={{
//                   width: `${Math.min(
//                     ((TOTAL_SEATS - remainingSeats) / TOTAL_SEATS) * 100,
//                     100
//                   )}%`,
//                 }}
//               />
//             </div>

//             <div className={styles.noteText}>
//               Note: Scholarships are limited and offered on a first-come,
//               first-served basis. Check your eligibility during the counseling
//               session.
//             </div>

//             <div className={styles.ibmNote}>
//               Certified by <span className={styles.ibmLogo}>IBM</span>
//               &nbsp;·&nbsp; Placement support included
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.hero}>
//         <h1 className={styles.heroTitle}>
//           Your Enquiry Is Successfully Registered
//         </h1>
//         <p className={styles.heroSubtitle}>
//           Before our expert calls you, get a head-start with a live demo.
//         </p>
//       </div>
//       <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//     </section>
//   );
// }

// export default ApplyforCouncelling;

'use client';
import React, { useState, useEffect } from 'react';
import styles from './BrochureDemoSection.module.css';
import StrategyModal from '../StrategyModal/StrategyModal';
import Image from 'next/image'; // ✅ FIXED

const TOTAL_SEATS = 24;
const SEATS_PER_DAY = 4;
const BASE_DATE = new Date('2026-03-24T00:00:00');

function getRemainingSeats() {
  const now = new Date();
  const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
  return remaining > 1 ? remaining : 1;
}

function ApplyforCouncelling() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    d: '00',
    h: '00',
    m: '00',
    s: '00',
  });

  const remainingSeats = getRemainingSeats();

  // ✅ FIXED HERE
  const progressPercent = Math.min(
    Math.round((remainingSeats / TOTAL_SEATS) * 100),
    100
  );
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

      {/* MAIN */}
      <div className={styles.mainCard}>
        {/* SCHOLARSHIP */}
        <div className={styles.scholBand}>
          <div className={styles.scholGlow} />

          <div className={styles.scholTop}>
            <div className={styles.scholLeft}>
              <div className={styles.pctCircle}>30%</div>
              <div>
                <div className={styles.scholLabel}>Scholarship Offer</div>
                <div className={styles.scholSub}>
                  Avaliable on all AI programs
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

        {/* TIMER */}
        {/* <div className={styles.timerStrip}>
          <div className={styles.timerLabel}>Offer expires in</div>

          <div className={styles.timerBoxes}>
            <div className={styles.tBox}>
              <div className={styles.tNum}>{timeLeft.d}</div>
              <div className={styles.tLbl}>Days</div>
            </div>

            <div className={styles.tSep}>:</div>

            <div className={styles.tBox}>
              <div className={styles.tNum}>{timeLeft.h}</div>
              <div className={styles.tLbl}>Hours</div>
            </div>

            <div className={styles.tSep}>:</div>

            <div className={styles.tBox}>
              <div className={styles.tNum}>{timeLeft.m}</div>
              <div className={styles.tLbl}>Mins</div>
            </div>

            <div className={styles.tSep}>:</div>

            <div className={styles.tBox}>
              <div className={styles.tNum}>{timeLeft.s}</div>
              <div className={styles.tLbl}>Secs</div>
            </div>
          </div>
        </div> */}

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

        {/* SEATS */}
        <div className={styles.seatsSection}>
          <div className={styles.seatsTop}>
            <div className={styles.seatsLabel}>
              <span className={styles.fire}>🔥</span>
              Seats filling up fast
            </div>

            <div className={styles.seatsCount}>Only {remainingSeats} left</div>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={styles.progressLabels}>
            <span>Seats claimed</span>
            <span>{progressPercent}% filled</span>
          </div>
        </div>

        {/* URGENCY */}
        <div className={styles.urgency}>
          <div className={styles.lockIcon}>🔒</div>
          <div className={styles.urgencyText}>
            <strong>Limited scholarships offer:</strong> Based on First-come,
            first-served. Price will increases from 1st April 2026.
          </div>
        </div>

        {/* IBM FIXED */}
        <div className={styles.ibmBar}>
          <div className={styles.ibmBadge}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/new-UI/ibm-microsoft+(1).webp"
              alt="IBM and Microsoft"
              width={120}
              height={40}
              className={styles.logoImg}
            />
          </div>
          <span className={styles.ibmSep}>|</span>
          <span className={styles.ibmText}>
            Industry-certified program · Placement support included
          </span>
        </div>

        {/* NOTE */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaNote}>
            Note: Scholarships are limited and offered on a first-come,
            first-served basis. Check your eligibility during the counseling
            session.
          </p>
        </div>
      </div>

      {/* SECOND HERO */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Your Enquiry Is Successfully Registered
        </h1>

        <p className={styles.heroSub}>
          Before our expert calls you, get a head-start with a live demo.
        </p>
      </div>

      <StrategyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

export default ApplyforCouncelling;
