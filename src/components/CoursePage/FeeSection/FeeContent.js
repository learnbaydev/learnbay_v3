import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));
import styles from "./FeeSection.module.css";
import Emipopup from "../EMIPopup/Emipopup";
import Modal from "react-modal";

const FeeContent = ({
  Fee,
  adsHide,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  CutFee,
  setPopups,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  devopfee,
  openTablePopup,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
}) => {
  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const openEmiPopup = () => {
    setEmiPopupIsOpen(true);
  };

  const closeEmiPopup = () => {
    setEmiPopupIsOpen(false);
  };
  // const emiPopupProps = {
  //   emiType: 'No Cost EMI',
  //   duration1: '18 months',
  //   totalAmount1: '₹2,50,000',
  //   monthlyPayment1: '₹16,389',
  //   greenDown1: 'Standard Interest Rates Applicable',
  //   duration2: '24 months',
  //   totalAmount2: '₹2,50,000',
  //   monthlyPayment2: '₹12,292',
  //   greenDown2: 'Another Green Down Text',
  // };
  return (
    <div className={styles.feesmain}>
      <h2>Fee & Batch Details</h2>
      <p className={styles.pTop}>
        Invest in your future with affordable program fees and flexible batch
        options
      </p>

      <div className={styles.ThreeCard}>
        <div className={styles.first}>
          <p style={{ textAlign: "center" }}>
            <b>Scholarship Details</b>
          </p>
          <div className={styles.imgFee}>
            {devopfee ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/fees-cd.webp"
                height="221"
                alt="data science course"
                loading="lazy"
                width="367"
                quality={40}
              />
            ) : (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/fees-cd.webp"
                width="367"
                height="221"
                alt="data science course"
                loading="lazy"
                quality={40}
              />
            )}
          </div>
          <p style={{ marginTop: "10px" }}>
            Scholarships are awarded based on profile review. Eligible
            candidates can avail upto 25% scholarship on desired program. Click
            the button below to apply.
          </p>
          <div className={styles.divButton} onClick={popupShow}>
            <Button
              className={styles.Btn}
              text="Check Scholarship Eligibility"
            />
          </div>
        </div>
        <div className={styles.second}>
          {adsHide ? (
            ""
          ) : (
            <>
              <p className={styles.pTop}>Program Fee</p>
              {/* <p className={styles.cutText}>{CutFee}</p> */}
              <p className={styles.price}>
                {Fee} <span className={styles.spanText}>+ 18% GST</span>
              </p>
              <div className={styles.divButton} onClick={openEmiPopup}>
                <Button className={styles.Btn} text="Check EMI Options" />
              </div>
              <hr
                style={{
                  color: "rgba(0, 0, 0, 0.20)",
                  margin: "30px 20px",
                  border: "0.9px solid",
                }}
              />
            </>
          )}
          <p style={{ textAlign: "center", margin: "0" }}>
            <b>EMI Options</b>
          </p>
          <div className={styles.divContent}>
            <p>Pay in easy EMIs starting as low as</p>
            <p className={styles.boxSpan}> {FeeEmi} </p>
            <p>
              For <b>No Cost EMI options</b>{" "}
              <span
                onClick={openEmiPopup}
                style={{ color: "#0072BC", cursor: "pointer" }}
              >
                click here.
              </span>
            </p>
          </div>

          <p className={styles.orangeText}>Payment Partners</p>
          <div className={styles.iconImage}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Finance+partners.webp"
              alt="Zest"
              width="370"
              height="36"
              loading="lazy"
              quality={40}
            />
          </div>
        </div>
        <div className={styles.third}>
          <p>Batch Details</p>
          <div className={styles.boxOrange}>
            <div className={styles.batchImg}>
              <p>{weekendbatch}</p>
            </div>
            <div className={styles.batches}>
              <p className={styles.date}>{WeekendDate}</p>
              <div className={styles.Time}>
                <p className={styles.day}>{weekend}</p>
                <p className={styles.paraBot}>{WeekendTime}</p>
              </div>
            </div>
          </div>
          <hr
            style={{
              color: "rgba(0, 0, 0, 0.20)",
              margin: "30px",
              border: "0.9px solid",
            }}
          />
          <div className={styles.boxOrange}>
            <p> {weekdaybatch}</p>
            <div className={styles.batches}>
              <p className={styles.date}>{WeekdayDate}</p>
              <div className={styles.Time}>
                <p className={styles.day}>{weekday}</p>
                <p className={styles.paraBot}>{WeekdayTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emi Popup */}
      <Modal
        isOpen={emiPopupIsOpen}
        onRequestClose={closeEmiPopup}
        className={styles.Emipopup}
        overlayClassName={styles.Overlay}
        contentLabel="EMI Popup"
      >
        <div className={styles.clostbtn} onClick={closeEmiPopup}>
          <span>close[x]</span>
        </div>
        <Emipopup
          emiType={emiType}
          duration1={duration1}
          totalAmount1={totalAmount1}
          monthlyPayment1={monthlyPayment1}
          greenDown1={greenDown1}
          duration2={duration2}
          totalAmount2={totalAmount2}
          monthlyPayment2={monthlyPayment2}
          greenDown2={greenDown2}
        />
      </Modal>
    </div>
  );
};

export default FeeContent;
