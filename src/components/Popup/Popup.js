// import { useCallback, useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './Popup.module.css';
// import PopupContent from '../Global/PopupContent/PopupContent';

// const Popup = ({ message, onClose }) => {
//   return (
//     <div className={styles.popupOverlay}>
//       <div
//         className={styles.popupContainer}
//         onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
//       >
//         <span className={styles.close} onClick={onClose}>
//           &times;
//         </span>

//         <div className={styles.mainDiv}>
//           <div className={styles.whiteDiv}>
//             <h3>Get Scholarship upto</h3>
//             <span className={styles.OFF}>20% OFF</span>
//             {/* <span className={styles.vaildTag}>( Valid till 16th Jan )</span> */}
//           </div>

//           {/* Middle TagLine */}
//           <div className={styles.tagLine}>
//             <p>
//               on all Our <span>Course</span>
//             </p>
//           </div>

//           {/* Bottom Gradient Div */}
//           <div className={styles.gradientDiv}>
//             <p className={styles.batch}>Batch Details</p>
//             <div className={styles.batchDiv}>
//               <p className={styles.offerText}>
//                 Weekend Batch : <span>9:30 AM - 1 PM</span>
//               </p>
//               <p className={styles.offerText}>
//                 Weekday Batch : <span>8:00 PM - 10:30 PM</span>
//               </p>
//             </div>
//             <Link href="/submit-info" target="_blank">
//               <div className={styles.buttonDiv}>
//                 <button>Apply for Scholarship Now</button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PopupNew = ({ message, onClose }) => {
//   const [popups, setPopups] = useState(false);

//   const popupShow = useCallback(() => {
//     setPopups(true);
//   }, []);
//   return (
//     <div className={styles.popupOverlay}>
//       <PopupContent
//         popups={popups}
//         setPopups={setPopups}
//         heading="Apply for Gen AI Program"
//         upSkillingHide={true}
//         dataScienceCounselling={true}
//         genAISelectOption={true}
//       />
//       <div
//         className={styles.popupContainer}
//         onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
//       >
//         <span className={styles.close} onClick={onClose}>
//           &times;
//         </span>

//         <div className={styles.mainDiv}>
//           <div className={styles.whiteDiv}>
//             <div className={styles.iitDiv}>
//               <Image
//                 src=" https://d32and0ii3b8oy.cloudfront.net/adlearnbay/ibm_logo.webp"
//                 loading="lazy"
//                 width={257}
//                 height={182}
//                 quality={100}
//                 className={styles.iitImg}
//                 alt="genai-pop"
//               />
//             </div>
//             <Image
//               src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Sparkling-New.webp"
//               loading="lazy"
//               width={50}
//               height={50}
//               quality={100}
//               className={styles.starPop}
//               alt="star-pop"
//             />
//             <h3>
//               GenAI Certification <span className={styles.forTitle}>For</span>
//             </h3>
//             <span className={styles.popupTitle}>Working professionals</span>
//             {/* <span className={styles.OFF}>20% OFF</span> */}
//             {/* <span className={styles.vaildTag}>( Valid till 16th Jan )</span> */}
//           </div>

//           {/* Middle TagLine */}
//           {/* <div className={styles.tagLine}>
//             <p>
//               on all Our <span>Course</span>
//             </p>
//           </div> */}

//           {/* Bottom Gradient Div */}
//           <div className={styles.gradientDiv}>
//             <div className={styles.wrapper}>
//               <p className={styles.newbatch}>
//                 Learn GenAI from Industry Mentors{' '}
//               </p>
//               {/* <p className={styles.orange}>
//                 <p className={styles.violet}> - </p> Up to{" "}
//                 <p className={styles.bold}>20%</p>
//               </p> */}
//             </div>
//             <div className={styles.popupPoints}>
//               <div className={styles.popPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Master LangChain & OpenAI APIs
//               </div>
//               <div className={styles.popPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Get Certified in GenAI from IBM
//               </div>
//               <div className={styles.popPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Build and Integrate GenAI application
//               </div>
//             </div>
//             <div className={styles.mpopupPoints}>
//               <div className={styles.mpopPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Master LangChain & OpenAI APIs
//               </div>
//               <div className={styles.mpopPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Build and Integrate GenAI application
//               </div>
//               <div className={styles.mpopPoint}>
//                 <Image
//                   src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Check+Mark.webp"
//                   loading="lazy"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   alt="green-tick"
//                 />
//                 Get Certified in GenAI from IBM
//               </div>
//             </div>
//             {/* <div className={styles.batchDiv}>
//               <p className={styles.offerText}>
//                 Weekend Batch : <span>9:30 AM - 1 PM</span>
//               </p>
//               <p className={styles.offerText}>
//                 Weekday Batch : <span>8:00 PM - 10:30 PM</span>
//               </p>
//             </div> */}
//             {/* <Link href="/submit-info" target="_blank"> */}
//             <div className={styles.buttonDiv} onClick={popupShow}>
//               <button>Apply Now</button>
//             </div>
//             {/* </Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PopupWrapper = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   useEffect(() => {
//     // Check if the popup has already been shown for the session
//     const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

//     if (!hasSeenPopup) {
//       // Show the popup if the user hasn't seen it yet during this session
//       setPopupVisible(true);

//       // Set a flag in sessionStorage to mark that the user has seen the popup
//       sessionStorage.setItem('hasSeenPopup', 'true');
//     }
//   }, []);

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <>
//       {isPopupVisible && (
//         <PopupNew message="Get Scholarship" onClose={handleClosePopup} />
//       )}
//     </>
//   );
// };

// export default PopupWrapper;

// import { useCallback, useEffect, useState } from 'react';
// import styles from './Popup.module.css';
// import PopupContent from '../Global/PopupContent/PopupContent';

// const PopupNew = ({ onClose }) => {
//   const [popups, setPopups] = useState(false);
//   const [timeLeft, setTimeLeft] = useState('');

//   const popupShow = useCallback(() => {
//     setPopups(true);
//   }, []);

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
//       setTimeLeft(`${d}d ${h}:${m}:${s}`);
//     };
//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.popupOverlay}>
//       <PopupContent
//         popups={popups}
//         setPopups={setPopups}
//         heading="Apply for Gen AI Program"
//         upSkillingHide={true}
//         dataScienceCounselling={true}
//         genAISelectOption={true}
//       />
//       <div
//         className={styles.popupContainer}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Urgency Banner */}
//         <div className={styles.urgencyBanner}>
//           <div className={styles.bannerDot}></div>
//           <span className={styles.bannerText}>Offer expires in</span>
//           <span className={styles.timer}>{timeLeft}</span>
//           <div className={styles.bannerDot}></div>
//         </div>

//         <span className={styles.close} onClick={onClose}>
//           ✕
//         </span>

//         <div className={styles.body}>
//           {/* IBM Badge */}
//           <div className={styles.partnerBadge}>
//             <span className={styles.ibmLogo}>IBM</span>
//             <span className={styles.partnerLabel}>Certification Program</span>
//           </div>

//           {/* Headline */}
//           <h2 className={styles.headline}>
//             Get <span className={styles.highlight}>30% Scholarship</span>
//             <br />
//             Valid Till 31st March
//           </h2>

//           <p className={styles.subtext}>
//             Limited seats at this price. Apply before the offer closes.
//           </p>

//           {/* Features */}
//           <div className={styles.features}>
//             <div className={styles.featureItem}>
//               <span className={styles.featureIcon}>🤖</span>
//               <span className={styles.featureText}>
//                 GenAI and Agentic AI Integrated Program
//               </span>
//             </div>
//             <div className={styles.featureItem}>
//               <span className={styles.featureIcon}>🏭</span>
//               <span className={styles.featureText}>
//                 Expert Led Industrial Program
//               </span>
//             </div>
//           </div>

//           {/* Offer Strip */}
//           <div className={styles.offerStrip}>
//             <p className={styles.feeNoteStrip}>
//               Note: Fees will be revised from 1st April 2026
//             </p>
//           </div>

//           {/* Seats Scarcity */}
//           <div className={styles.seatsRow}>
//             <span className={styles.seatsLabel}>🔥 Seats filling up fast</span>
//             <span className={styles.seatsCount}>Only 7 left at this price</span>
//           </div>
//           <div className={styles.progressTrack}>
//             <div className={styles.progressFill}></div>
//           </div>

//           {/* CTA */}
//           <button className={styles.ctaPrimary} onClick={popupShow}>
//             Claim Your Scholarship Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PopupWrapper = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   useEffect(() => {
//     const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
//     if (!hasSeenPopup) {
//       setPopupVisible(true);
//       sessionStorage.setItem('hasSeenPopup', 'true');
//     }
//   }, []);

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   };

//   return <>{isPopupVisible && <PopupNew onClose={handleClosePopup} />}</>;
// };

// export default PopupWrapper;

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Popup.module.css';
import PopupContent from '../Global/PopupContent/PopupContent';

// ── Seats logic ──
// Starts at 24. Removes 4 per day from BASE_DATE automatically.
const TOTAL_SEATS = 24;
const SEATS_PER_DAY = 4;
const BASE_DATE = new Date('2026-03-24T00:00:00');

function getRemainingSeats() {
  const now = new Date();
  const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  const remaining = TOTAL_SEATS - daysPassed * SEATS_PER_DAY;
  return remaining > 1 ? remaining : 1; // never show 0
}

const PopupNew = ({ onClose }) => {
  const [popups, setPopups] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const remainingSeats = getRemainingSeats();

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

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
    <div className={styles.popupOverlay}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply for Gen AI Program"
        upSkillingHide={true}
        dataScienceCounselling={true}
        genAISelectOption={true}
      />
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Urgency Banner */}
        <div className={styles.urgencyBanner}>
          <div className={styles.bannerDot}></div>
          <span className={styles.bannerText}>Offer expires in</span>
          <span className={styles.timer}>{timeLeft}</span>
          <div className={styles.bannerDot}></div>
        </div>

        <span className={styles.close} onClick={onClose}>
          ✕
        </span>

        <div className={styles.body}>
          {/* IBM Badge with image */}
          <div className={styles.partnerBadge}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/ibm_logo.webp"
              loading="lazy"
              width={50}
              height={20}
              quality={100}
              className={styles.ibmBadgeImg}
              alt="IBM"
            />
            <span className={styles.partnerLabel}>Certification Program</span>
          </div>

          {/* Headline */}
          <h2 className={styles.headline}>
            Get <span className={styles.highlight}>30% Scholarship</span>
            <br />
            Valid Till 31st March
          </h2>

          <p className={styles.subtext}>
            Limited seats at this price. Apply before the offer closes.
          </p>

          {/* Features */}
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

          {/* Offer Strip */}
          <div className={styles.offerStrip}>
            <p className={styles.feeNoteStrip}>
              Note: Fees will be revised from 1st April 2026
            </p>
          </div>

          {/* Seats Scarcity — dynamic count */}
          <div className={styles.seatsRow}>
            <span className={styles.seatsLabel}>🔥 Seats filling up fast</span>
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

          {/* CTA */}
          <button className={styles.ctaPrimary} onClick={popupShow}>
            Claim Your Scholarship Now
          </button>
        </div>
      </div>
    </div>
  );
};

const PopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setPopupVisible(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return <>{isPopupVisible && <PopupNew onClose={handleClosePopup} />}</>;
};

export default PopupWrapper;
