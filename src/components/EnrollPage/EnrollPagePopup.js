// NewsletterPopup.js

import React, { useState } from "react";
import styles from "./EnrollPage.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";

const EnrollPopup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
        Close[x]
        </button>
        <div className={styles.contPopup}>
          <div className={styles.mainPopup}>
            <h4 className={styles.head}>No Cost Finance</h4>
            <div className={styles.Point}>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>No Cost EMI option</p>
              </div>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>No processing fees</p>
              </div>
            </div>
          </div>
          <div className={styles.mainPopup}>
            <h4 className={styles.head}>Documents Required</h4>
            <div className={styles.Point}>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>Original Aadhar card</p>
              </div>
              <div className={styles.CheckCont}>
                <FaRegCheckCircle className={styles.iconFade} />
                <p>Original PAN card</p>
              </div>
            </div>
          </div>
          <div>
          <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/loansimg+(1).webp"
              alt="arrow"
              width={726}
              height={119}
              className={styles.ImageLoan}
              loading="lazy"
              quality={40}
            />
            </div>
          <div>
            <form>
              <div className={styles.divFlexPopup}>
                <div className={styles.formGroupPopup}>
                  <label className={styles.LabelPopup}>Date</label>
                  <input
                    className={styles.formControlPopup}
                    type="date"
                    value={selectedDate}
                    required={true}
                    onChange={handleDateChange}
                  />
                </div>
                <div className={styles.formGroupPopup}>
                  <label className={styles.LabelPopup}>Time</label>
                  <input
                    className={styles.formControlPopup}
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required={true}
                  />
                </div>
              </div>
              <button
              type="button"
              onClick={() => {
                if (isInstallmentSelected) {
                  setShowPopup(true);
                } else {
                  makePayment();
                }
              }}
              className={styles.button}
              style={{width:"auto" , margin:"30px 0px 0px 0px"}}
            >
              Book an Appointment
            </button>
            </form>
          </div>
        </div>
        {/* Add your newsletter signup form or content here */}
      </div>
    </div>
  );
};

export default EnrollPopup;
