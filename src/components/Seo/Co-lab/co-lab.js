import React, { useCallback, useEffect, useState } from "react";
import styles from "./AICoLabExperience.module.css";

import PopupContent from "@/components/Global/PopupContent/PopupContent";

const AICoLabExperience = ({
  interstedInHide,
  titleCourse,
  brochureLink,
  brochurePdf,
  downloadBrochure,
}) => {
  const [popups, setPopups] = useState(false);
  const [requestDemoPopup, setRequestDemoPopup] = useState(false);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  const requestDemoShow = useCallback(() => {
    setRequestDemoPopup(true);
  }, []);

  useEffect(() => {
    // console.log(brochurePdf);
  }, []);
  return (
    <section className={styles.aiCoLabSection}>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        // DSADemoSession={true}
      />
      <PopupContent
        popups={requestDemoPopup}
        setPopups={setRequestDemoPopup}
        heading="Book Your Demo Session"
        // downloadBrochure
        dataScienceCounselling={true}
        interstedInHide={interstedInHide}
        DSADemoSession={true}
      />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* Gold Badge */}
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <img
                  src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Group+2314.webp"
                  alt="Star Icon"
                  width={30}
                  height={30}
                  className={styles.badgeIconImage}
                />
              </div>
              <span className={styles.badgeText}>
                A First-of-Its-Kind Feature
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={styles.mainHeading}>AI Co-Lab Experience</h1>

            {/* Description Text */}
            <p className={styles.description}>
              Work on live case studies and problem statements
              <br />
              from <span className={styles.highlight}>30+ companies</span> AI
              startups
            </p>

            {/* Certificate Text */}
            <p className={styles.certificateText}>
              <span className={styles.boldText}>Earn dual certificate</span>{" "}
              that proves industry experience
            </p>

            {/* /* Action Buttons */}
            <div className={styles.buttonGroup}>
              <button onClick={popupShow} className={styles.primaryButton}>
                Know More
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/playlist?list=PLl1gyDCKkiQRVRI-K7zwbtCwn6zj3nzkC"
                  )
                }
              >
                <div className={styles.playIcon}>▶</div>
                Learn from AI Leaders
              </button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Header.webp"
                alt="AI Co-Lab Experience"
                className={styles.mainImage}
              />
              {/* Decorative elements */}
              <div className={styles.glowEffect}></div>
              <div className={styles.orbitRing1}></div>
              <div className={styles.orbitRing2}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoLabExperience;
