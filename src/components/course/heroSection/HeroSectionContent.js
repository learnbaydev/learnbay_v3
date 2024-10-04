import { useEffect, useRef, useState, lazy, Suspense, useCallback, memo } from "react";
import Image from "next/image"; // Import Next.js Image component
import styles from "./HeroSection.module.css";
import { FaRegUser } from "react-icons/fa";
import Button from "@/components/Global/Button/Button";

// Lazy-load heavy components to improve FID and LCP
const Form = lazy(() => import("@/components/Global/Form/Form"));

function HeroSectionContent({
  setPopups,
  spanTag,
  spanIcon,
  thumbnailurl,
  noIIt,
  interstedInHide,
  dataScienceCounselling,
  upSkillingHide,
  dataScience,
  DomainInput,
  ADS,
  HideInterest,
  title,
  orgTitle,
  descrption,
  OrangeButton,
  outline,
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  CloseBotDate,
  BotWidth,
  BotHeight,
  backgroundImage, // URL for background image
  backgroundGradient, // CSS for gradient
  showRightForm, // Prop to control visibility of the right-side form
  children, // Any content inside the section
  purpleButton,
  PointsDiv,
}) {
  // Use useCallback for event handler to prevent unnecessary re-creations
  const popupShow = useCallback(() => {
    setPopups(true);
  }, [setPopups]);

  // Dynamically set the background style
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: backgroundGradient };

  // Helper function to render buttons to avoid repetition
  const renderButtons = () => (
    <>
      <Button text="DOWNLOAD SYLLABUS" grayButton onClick={popupShow} />
      <Button
        text="START MY APPLICATION"
        OrangeButton={OrangeButton}
        purpleButton={purpleButton}
        onClick={popupShow}
      />
    </>
  );

  return (
    <section className={styles.mainBg}>
      <div className={styles.container} style={backgroundStyle}>
        <div className="containerWidth">
          <div className={styles.innerDiv}>
            <div className={styles.firstSection}>
              <div className={styles.starDiv}>
                <Image
                  src={spanIcon}
                  alt="Curriculum Inclusive of Gen-AI"
                  width={59}
                  height={72}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                />
                <h5>{spanTag}</h5>
              </div>
              <h1>
                {title}
                <span className={styles.span}> {orgTitle}</span>
              </h1>
              <div className={styles.starDivSection}>
                {PointsDiv ? (
                  <div className={styles.points}>
                    <div className={styles.firstBox}>
                      <span>Program Eligibility</span>
                      <p>Min 1 year in tech</p>
                    </div>
                    <hr className={styles.hrOne} />
                    <div className={styles.secondBox}>
                      <span>Training Mode</span>
                      <div className={styles.insidBox}>
                        <p>Live Online </p>
                        <hr className={styles.HrTwo} />
                        <p>Hybrid</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.starDiv}>
                    <p>{descrption}</p>
                  </div>
                )}
              </div>
              <div className={styles.btnDiv}>{renderButtons()}</div>
              <div className={styles.imgBot}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                  alt="Video Thumbnail"
                  width={684}
                  height={450}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                />
              </div>

              <div className={styles.btnDivM}>{renderButtons()}</div>
            </div>

            {/* Lazy-load the form to improve FID */}
            {showRightForm && (
              <Suspense fallback={<div>Loading Form...</div>}>
                <div className={styles.formdiv}>
                  <h3>
                    Check Your <span className={styles.span}>Eligibility</span>
                  </h3>
                  <Form
                    dataScienceCounselling={dataScienceCounselling}
                    upSkillingHide={upSkillingHide}
                    interstedInHide={interstedInHide}
                  />
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </div>

      {/* Lazy-load the bottom content to reduce initial load */}
      {showRightForm && (
        <div className="containerWidth">
          <div className={styles.botDiv}>
            <div className={styles.innerBotDiv}>
              <Image
                src={applicationIcon}
                alt="Application Closes"
                width={BotWidth}
                height={BotHeight}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
              />
              <div className={styles.content}>
                <p>{CloseDes}</p>
                <h3>{CloseBotDate}</h3>
              </div>
            </div>
            <div className={styles.innerBotDiv}>
              <Image
                src={ProgramIcon}
                alt="Program Duration"
                width={BotWidth}
                height={BotHeight}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
              />
              <div className={styles.content}>
                <p>{DurationBot}</p>
                <h3>{DurationBotDate}</h3>
              </div>
            </div>
            <div className={styles.innerBotDiv}>
              <Image
                src={trainingIcon}
                alt="Training Format"
                width={BotWidth}
                height={BotHeight}
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
              />
              <div className={styles.content}>
                <p>{TrainingBot}</p>
                <h3>
                  Live Online <span className={styles.span}>|</span> Hybrid
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Using React.memo to prevent unnecessary re-renders
export default memo(HeroSectionContent);
