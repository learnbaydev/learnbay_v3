import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
// import Button from "../Global/Button/Button";

const OfferPopup = ({ popupData }) => {
  const [open, setOpen] = useState(false);
  // Use state to control audio playback

  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    const audioElement = document.getElementById("popup-entry-sound");

    const timeOut = setTimeout(() => {
      setOpen(true);
      audioElement.play();
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  const firstPoint = popupData.para1.split("$$$");
  const secondPoint = popupData.para2.split("$$$");
  return (
    <>
      <div className={open ? styles.OfferPopup : styles.hide}>
        <p className={styles.Icon}>close[X]</p>
        <div className={styles.header}>
          <h6>{popupData.heading}</h6>
          <span>For Our Upcoming Batches</span>
        </div>
        <div className={styles.valid}>
          <p>Valid Till 30th November</p>
          <div className={styles.tag}>Filling Fast!</div>
        </div>
        <div className={styles.Offer}>
          <p className={styles.bHeading}>Batch Details :</p>
          <div className={styles.batchPoint}>
            <p>
              <b>{firstPoint[0]}: </b>
              {firstPoint[1]}
            </p>

            {popupData.para2 === "" ? (
              ""
            ) : (
              <p>
                <b>{secondPoint[0]}: </b>
                {secondPoint[1]}
              </p>
            )}
          </div>
          <a
            href="/submit-info"
            target="_blank"
            className={styles.btnWrap}
            rel="noopener noreferrer"
          >
            <button className="button" onClick={handelOpen}>
              Apply For Scholarship Now!
            </button>
          </a>
        </div>
        <audio
          id="popup-entry-sound"
          src="/pop.wav"
          onError={(error) => console.error("Audio playback error:", error)}
        ></audio>
      </div>
    </>
  );
};

export default OfferPopup;
