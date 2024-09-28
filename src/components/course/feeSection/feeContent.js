import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Global/Button/Button"));
import styles from "./feeSection.module.css";
import Emipopup from "@/components/CoursePage/EMIPopup/Emipopup";
import Modal from "react-modal";

const feeContent = ({
  setPopups,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  iitGuwatiGen,
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
  return (
    <div className={styles.feesmain}>
      <h2>
        <span>Fee</span> & Batch Details
      </h2>
      <div className={styles.mainContainer}>
        <div className={styles.innerMainContainer}>
          <div className={styles.innerContainer}>
            <div>
              <div className={styles.headContent}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/camera-3d.webp"
                  alt="Zest"
                  width="123"
                  height="125"
                  loading="lazy"
                  quality={40}
                />
                <h4 className={styles.headOrange}>Live online classes</h4>
              </div>
              <div className={styles.botDivArrowOrange}></div>
              <div className={styles.firstContainer}>
                <p className={styles.firstP}>Benefits :</p>
                <div className={styles.iconDiv}>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                      alt="Zest"
                      width="45"
                      height="45"
                      loading="lazy"
                    />
                    <p className={styles.iconContent}>
                      Live online interactive sessions
                    </p>
                  </div>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                      alt="Zest"
                      width="45"
                      height="45"
                      loading="lazy"
                    />
                    <p className={styles.iconContent}>
                      1:1 online Doubt Session with experts
                    </p>
                  </div>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                      alt="Zest"
                      width="45"
                      height="45"
                      loading="lazy"
                    />
                    <p className={styles.iconContent}>
                      Online Capstone projects
                    </p>
                  </div>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon.webp"
                      alt="Zest"
                      width="45"
                      height="45"
                      loading="lazy"
                    />
                    <p className={styles.iconContent}>
                      Virtual  Mock interviews
                    </p>
                  </div>
                </div>
                <p className={styles.pImp}>
                  <span>Important Note:</span> You will be assigned 5 members to
                  oversee the entire project life-cycle and gain practical
                  project management skills.
                </p>
              </div>
              <div className={styles.feeSectionContainer}>
                <div className={styles.feeContentContainer}>
                  <p>Pay in easy EMIs starting as low as</p>
                  <h4>₹ 9,833/ month</h4>
                  <div className={styles.border}>
                    <p>Program Fee</p>
                    <h4>
                      ₹ 1,50,000<span> + 18% GST</span>
                    </h4>
                  </div>
                  <div className={styles.emiButton} onClick={openEmiPopup}>
                    <Button text="Check EMI Options" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.headContentBlue}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/location_why.webp"
                  alt="Zest"
                  width="123"
                  height="125"
                  loading="lazy"
                  quality={40}
                />
                <h4 className={styles.headBlue}>Hybrid Classes</h4>
              </div>
              <div className={styles.botDivArrowBlue}></div>
              <div className={styles.secondContainer}>
                <div className={styles.divHeadIcon}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/camera-3d.webp"
                    alt="Zest"
                    width="100"
                    height="103"
                    loading="lazy"
                    quality={40}
                  />
                  <h4>Live online classes</h4>
                </div>
                <p className={styles.fadedText}>With additional benefits :</p>
                <div className={styles.iconDiv}>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                      alt="Zest"
                      width="100"
                      height="103"
                      loading="lazy"
                      quality={40}
                    />
                    <p className={styles.iconContent}>
                      Offline 1:1 classroom doubt sessions on weekends
                    </p>
                  </div>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                      alt="Zest"
                      width="100"
                      height="103"
                      loading="lazy"
                      quality={40}
                    />
                    <p className={styles.iconContent}>
                      Offline Mock Interviews with 3-5 members panel
                    </p>
                  </div>
                  <div className={styles.innerIconDiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/check_icon_green.webp"
                      alt="Zest"
                      width="100"
                      height="103"
                      loading="lazy"
                      quality={40}
                    />
                    <p className={styles.iconContent}>
                      Offline Classroom Capstone projects in
                      <b>
                        Pune, Delhi, Bangalore, Chennai, Hydrabad and Mumbai
                      </b>
                    </p>
                  </div>
                </div>
                <p className={styles.pImp}>
                  <span style={{ color: "#0072BC" }}>Important Note:</span> You
                  will be assigned 5 members to oversee the entire project
                  life-cycle and gain practical project management skills.
                </p>
              </div>
              <div className={styles.feeSectionContainer}>
                <div className={styles.feeContentContainer}>
                  <p>Pay in easy EMIs starting as low as</p>
                  <h4 style={{ color: "#0072BC" }}>₹ 11,472/ month</h4>
                  <div className={styles.border}>
                    <p>Program Fee</p>
                    <h4>
                      ₹ 1,75,000<span> + 18% GST</span>
                    </h4>
                  </div>
                  <div className={styles.emiButton} onClick={openEmiPopup}>
                    <Button text="Check EMI Options" />
                  </div>
                </div>
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
          iitGuwatiGen={iitGuwatiGen}
        />
      </Modal>
    </div>
  );
};

export default feeContent;
