import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));
import styles from "./FeeSection.module.css";
const FeeContent = ({
  Fee,

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
}) => {
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.feesmain}>
      <h2>Fee & Batch Details</h2>
      <p className={styles.pTop}>
        Invest in your future with affordable degree fees and flexible batch
        options
      </p>

      <div className={styles.ThreeCard}>
        <div className={styles.first}>
          <p style={{ textAlign: "center" }}>
            <b>Scholarship Details</b>
          </p>
          <div className={styles.imgFee}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/feeSection.webp"
              width="367"
              height="221"
              alt="data science course"
              loading="lazy"
              quality={40}
            />
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
          <p className={styles.pTop}>Program Fee</p>
          <p className={styles.cutText}>{CutFee}</p>
          <p className={styles.price}>
            {Fee} <span className={styles.spanText}>+ 18% GST</span>
          </p>
          <div className={styles.divButton} onClick={popupShow}>
            <Button className={styles.Btn} text="Check EMI Options" />
          </div>
          <hr
            style={{
              color: "rgba(0, 0, 0, 0.20)",
              margin: "30px 20px",
              border: "0.9px solid",
            }}
          />
          <p style={{ textAlign: "center", margin: "0" }}>
            <b>EMI Options</b>
          </p>
          <div className={styles.divContent}>
            <p>Pay in easy EMIs starting as low as</p>
            <p className={styles.boxSpan}> {FeeEmi} </p>
            <p>
              For <b>No Cost EMI options</b>{" "}
              <span
                onClick={popupShow}
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
            <p> {weekdaybatch}</p>
            <div className={styles.batches}>
              <p className={styles.date}>{WeekdayDate}</p>
              <div className={styles.Time}>
                <p className={styles.day}>{weekday}</p>
                <p className={styles.paraBot}>{WeekdayTime}</p>
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
        </div>
      </div>
    </div>
  );
};

export default FeeContent;
