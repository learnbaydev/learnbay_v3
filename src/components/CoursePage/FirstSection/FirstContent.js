import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import styles from "./FirstSection.module.css";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
  videoId, // Pass videoId as a prop
  thumbnailUrl, // Pass thumbnailUrl as a prop
}) => {
  const texts = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "IBM Project Certification",
    "Designed for Professionals",
  ];
  const [mobile, setMobile] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
    const isVideoInView = (scrollY) => {
      // Implement logic to check if the video is in view
      // For simplicity, you can replace this with your own logic
      return true;
    };
    const handleScroll = () => {
      const threshold = 300;
      const scrollY = window.scrollY;

      const scrollDirection = scrollY > lastScrollTop ? "down" : "up";
      const isScrollingUp = scrollDirection === "up";
      const isBeyondThreshold = scrollY <= threshold;

      setShowThumbnail(
        isBeyondThreshold || (isScrollingUp && !isVideoInView(scrollY))
      );
      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const popupShow = () => {
    setPopups(true);
  };

  const videoShow = () => {
    setVideo(true);
    setShowThumbnail(false);
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Reset video to start
      videoRef.current.getInternalPlayer().play(); // Play the video
    }
  };
  const customStyles = `
  .react-player__play-icon {
    display: none !important;
  }
`;
  const containerStyle = {
    backgroundImage:
      'url("https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/first-background.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // const youtubeVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <>
      <style>{customStyles}</style>
      <div className={styles.First} style={containerStyle}>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopC}>{firstTopPara}</p>
          <h1 className={styles.h1}>
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>
          <p className={styles.ptopCiity}>{cityParaCont}</p>
          {mobile ? (
            ""
          ) : (
            <>
              <div className={ibmOnly ? styles.DAibm : styles.Desktop}>
                <p className={styles.ptop}>In Collaboration With</p>
                <div className={styles.ImageBlock}>
                  {ibmOnly ? (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                      width="70"
                      height="30"
                      priority
                      alt="data science course"
                    />
                  ) : (
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                      width="266"
                      height="48"
                      priority
                      alt="data science course"
                    />
                  )}
                </div>
              </div>
              <div className={styles.animationTextWrap}>
                {texts.map((text, index) => (
                  <div key={index} className={styles.verticalSlideWrapper}>
                    <span className={styles.animationText}>{text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.btnImage}>
                <div onClick={popupShow}>
                  <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                </div>
                {softwareBtnHide ? (
                  ""
                ) : (
                  <div onClick={videoShow}>
                    <Button
                      whiteBgButton={true}
                      text="INTRO VIDEO"
                      passIcon={<FaPlay />}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className={styles.secondLeft}>
          <div onClick={videoShow} className={`${styles.bgvidos} "bgVideo"`}>
            <Image
              width="532"
              height="300"
              src={thumbnailUrl}
            />
          </div>
        </div>

        {mobile ? (
          <>
            <div className={styles.Mobile}>
              <p className={styles.ptop}>In Collaboration With</p>
              <div className={styles.ImageBlock}>
                {ibmOnly ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                    width="70"
                    height="30"
                    priority
                    alt="data science course"
                  />
                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                    width="283"
                    height="51"
                    priority
                    alt="data science course"
                  />
                )}
              </div>
              <div className={styles.secondLeft}>
              <div onClick={videoShow} className={`${styles.bgvidos} "bgVideo"`}>
            <Image
              width="356"
              height="200"
              src={thumbnailUrl}
            />
          </div>
              </div>
            </div>{" "}
            <div className={styles.btnImageMobile}>
              <div onClick={popupShow}>
                <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
              </div>
              {softwareBtnHide ? (
                ""
              ) : (
                <div onClick={videoShow}>
                  <Button
                    whiteBgButton={true}
                    text="INTRO VIDEO"
                    passIcon={<FaPlay />}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FirstContent;
