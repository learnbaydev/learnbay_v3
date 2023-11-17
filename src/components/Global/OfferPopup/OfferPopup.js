import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
// import Button from "../Global/Button/Button";

const OfferPopup = ({ popupData }) => {
  // console.log(popupData);

  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10000);
    return;
  }, []);
  return (
    <>
      <div className={open ? styles.OfferPopup : styles.hide}>
        <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />{" "}
        <div className={styles.Offer}>
          <h6>{popupData.heading}</h6>
          <p>Available Batch Details :</p>
          <li>
            <b>{popupData.para1}</b>
          </li>
          {popupData.para2 === "" ? (
            ""
          ) : (
            <li>
              <b>{popupData.para2}</b>
            </li>
          )}

          <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
          <a href="/submit-info" target="_blank">
            <button
              className="button"
              onClick={handelOpen}
              style={{ width: "100%" }}
            >
              Apply For Scholarship Now!
            </button>
          </a>
        </div>{" "}
      </div>
    </>
  );
};

export default OfferPopup;
