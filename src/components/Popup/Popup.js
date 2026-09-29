import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Popup.module.css';
import PopupContent from '../Global/PopupContent/PopupContent';

const POINTS = [
  'Master LangChain & OpenAI APIs',
  'Build and integrate GenAI applications',
  'Get certified in GenAI from IBM',
];

const PopupNew = ({ onClose }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  // Escape closes the promo, unless the application form is open on top of it.
  useEffect(() => {
    if (popups) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [popups, onClose]);

  // Lock page scroll while the promo is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply for Gen AI Program"
        upSkillingHide={true}
        dataScienceCounselling={true}
        genAISelectOption={true}
      />
      <div
        className={styles.popupOverlay}
        // Close only on a click on the backdrop itself, not inside the card.
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className={styles.card}
          role="dialog"
          aria-modal="true"
          aria-labelledby="genai-popup-title"
        >
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>

          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.logoChip}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/ibm_logo.webp"
              width={257}
              height={182}
              quality={100}
              className={styles.logo}
              alt="IBM"
            />
          </div>

          <div className={styles.badgeGradient}>
            <span className={styles.badgeInner}>
              <span className={styles.badgeDot} aria-hidden="true" />
              For working professionals
            </span>
          </div>

          <h3 id="genai-popup-title" className={styles.title}>
            <span className={styles.titleAccent}>GenAI Certification</span>
            <br />
            with IBM
          </h3>
          <p className={styles.subtitle}>
            Learn GenAI from industry mentors and ship real applications.
          </p>

          <ul className={styles.points}>
            {POINTS.map((point) => (
              <li key={point} className={styles.point}>
                <span className={styles.check} aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12">
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <button type="button" className={styles.cta} onClick={popupShow}>
            Apply Now
            <span aria-hidden="true">&rarr;</span>
          </button>
          <button type="button" className={styles.later} onClick={onClose}>
            Maybe later
          </button>
        </div>
      </div>
    </>
  );
};

const PopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Show the popup once per session.
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
      setPopupVisible(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const handleClosePopup = useCallback(() => {
    setPopupVisible(false);
  }, []);

  return <>{isPopupVisible && <PopupNew onClose={handleClosePopup} />}</>;
};

export default PopupWrapper;
