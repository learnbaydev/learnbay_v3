import { useCallback, useEffect, useState } from "react";
import Image from "next/image"; // Kept if you need to add logos back later
import Link from "next/link";
import styles from "./Popup.module.css";
import PopupContent from "../Global/PopupContent/PopupContent";

const PopupNew = ({ onClose }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  return (
    <div className={styles.popupOverlay}>
      {/* Logic to open the Lead Form */}
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
        {/* Decorative Top Stripe */}
        <div className={styles.candyCaneBar}></div>

        {/* Close Button */}
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        {/* Red Header Section */}
        <div className={styles.headerDiv}>
          <span className={styles.badge}>Year-End Special</span>
          <h2 className={styles.title}>
            30% OFF <br /> ALL COURSES!
          </h2>
          <div className={styles.subtitle}>
            <span>🎅</span>
            <span>Offer Valid Till Dec 31, 2025</span>
            <span>🎄</span>
          </div>
        </div>

        {/* Body Section */}
        <div className={styles.bodyDiv}>
          <p className={styles.mainText}>
            Master <span className={styles.highlight}>Gen AI</span>, Data
            Science & Cloud with Industry Mentors.
          </p>

          <div className={styles.alertBox}>
            Don't Miss Out! Limited Seats Available.
          </div>

          <div className={styles.buttonGroup}>
            {/* Primary Action - Triggers the form popup */}
            <button className={styles.primaryBtn} onClick={popupShow}>
              Enroll Now & Get 30% Off
            </button>

            {/* Secondary Action - External Link or Scroll
            <Link href="/submit-info" target="_blank" style={{ width: "100%" }}>
              <button className={styles.secondaryBtn}>Book your seat</button>
            </Link> */}
          </div>

          <p className={styles.terms}>*Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

const PopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown for the session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Delay for 2 seconds for better UX
      const timer = setTimeout(() => {
        setPopupVisible(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return <>{isPopupVisible && <PopupNew onClose={handleClosePopup} />}</>;
};

export default PopupWrapper;
