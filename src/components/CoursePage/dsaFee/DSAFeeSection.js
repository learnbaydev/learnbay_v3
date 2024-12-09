import React, { useState } from "react";
import styles from "./dsaFee.module.css";
import Image from "next/image";
import Emipopup from "../EMIPopup/Emipopup";
import Modal from "react-modal";
import { Points } from "@/Data/svgdata/Points";



const DSAFeeSection = ({
    weekendbatch,
    weekdaybatch,
    weekday,
    weekend,
    WeekendDate,
    WeekdayDate,
    WeekdayTime,
    WeekendTime,
    Fee,
    FeeEmi,
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

    const point = [
        <Points/>
    ]
  return (
    <section className={styles.main}>
      <h2>Fee & Batch Details      </h2>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h4>Live online classes</h4>
          <div className={styles.insideMain}>
            <div className={styles.left}>
              <h5>Benefits :</h5>

              <ul>
                <li>{point} Live online interactive sessions</li>
                <li> {point} 1:1 online Doubt Session with experts</li>
                <li> {point} Online Capstone projects</li>
                <li> {point} Virtual Mock interviews</li>
              </ul>
            </div>
            <hr />
            <div className={styles.ryt}>
              <h5>Program Fee:</h5>
              <h3>
                {Fee} <span className={styles.span}>+ 18% GST</span>
              </h3>
              <p className={styles.pEmi}>Pay in easy EMIs starting as low as</p>
              <h6>{FeeEmi}</h6>

              <button onClick={openEmiPopup} className={styles.btn}>Check EMI Options</button>
            </div>
          </div>
        </div>

        <div className={styles.batch}>
          <p className={styles.batchHead}>Batch Details :</p>
          <div className={styles.weekday}>
            <h6>{weekdaybatch}</h6>
            <div className={styles.dwbatch}>
         <div>
         <p className={styles.Date}>{WeekdayDate}</p>
         </div>
            
<hr/>
            <div className={styles.wT}>
              <p>{weekday}</p>
              <span>{WeekdayTime}</span>
            </div>
          </div>
          </div>
          <hr className={styles.hrline}/>
<div className={styles.fill}>
<Image src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/filling_Fast.webp" width={120} height={40} quality={100} alt="fill Fast" loading="lazy"/>

    </div>          <div className={styles.weeknd}>
            <h6>{weekendbatch}</h6>

            <div className={styles.dwbatch}>
         <div>
         <p className={styles.Date}>{WeekendDate}</p>
         </div>
            
<hr/>
            <div className={styles.wT}>
              <p>{weekend} </p>
              <span>{WeekendTime}</span>
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
    </section>
  );
};

export default DSAFeeSection;
