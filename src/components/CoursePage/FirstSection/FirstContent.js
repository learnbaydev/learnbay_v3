import Image from "next/image";
import React from "react";
import Button from "../../Global/Button/Button";
import styles from "./FirstSection.module.css";

const FirstContent = ({
  softwareBtnHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  ibmOnly,
  cityParaCont,
  setPopups,
  setVideo,
}) => {
  const popupShow = () => {
    setPopups(true);
  };
  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopC}>{firstTopPara}</p>
          <h1 className={styles.h1}>
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>
          <p className={styles.ptopCiity}>{cityParaCont}</p>
          <div className={styles.IBMlogoPlay}>
            <Image
              src={FirstRightImg}
              width="508"
              height="327"
              alt="data science course"
              priority
            />
          </div>
          <div className={styles.Desktop}>
            <p className={styles.ptop}>In Collaboration With</p>
            <div className={styles.ImageBlock}>
              {ibmOnly ? (
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/ibm-single-home.png"
                  width="127"
                  height="51"
                  priority
                  alt="data science course"
                />
              ) : (
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ibm%26microsoft.webp"
                  width="266"
                  height="48"
                  priority
                  alt="data science course"
                />
              )}
            </div>
          </div>
          <div className={styles.animationTextWrap}>
            <span className={styles.animationText}>
              Guaranteed Interview Calls
            </span>
          </div>
          {/* Button */}
          <div className={styles.btnImage}>
            <div onClick={popupShow}>
              <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
            </div>
            {softwareBtnHide ? (
              ""
            ) : (
              <div onClick={videoSHow}>
                <Button whiteBgButton={true} text="INTRO VIDEO" />
              </div>
            )}
          </div>
        </div>
        {/* For desktop View */}
        <div className={styles.secondLeft}>
          <div className="imgWrapper">
            <Image
              src={FirstRightImg}
              width="806"
              height="560"
              alt="data science course"
              priority
              quality={55}
            />
          </div>
        </div>
        <div className={styles.Mobile}>
          <p className={styles.ptop}>In Collaboration With</p>
          <div className={styles.ImageBlock}>
            {ibmOnly ? (
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/ibm-single-home.png"
                width="127"
                height="51"
                priority
                alt="data science course"
              />
            ) : (
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ibm%26microsoft.webp"
                width="283"
                height="51"
                priority
                alt="data science course"
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.btnImageMobile}>
        <div onClick={popupShow}>
          <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
        </div>
        {softwareBtnHide ? (
          ""
        ) : (
          <div onClick={videoSHow}>
            <Button whiteBgButton={true} text="INTRO VIDEO" />
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(FirstContent);
