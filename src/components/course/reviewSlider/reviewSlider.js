"use client";

import styles from "./reviewSlider.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import components for code splitting and client-side rendering
const VideoYt = dynamic(() => import("@/components/Global/VideoYt/VideoYt"), {
  ssr: false,
});
const Reels = dynamic(() => import("./Reels"), {
  ssr: false,
});

const ReviewSlider = () => {
  return (
    <div className={styles.keyContainer}>
      <Reels />
      <div className={styles.mainDiv}>
        {/* Bottom Review Section */}
        <div className={styles.reviewBotSection}>
          <div className={styles.firstBotReview}>
            <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
            <p>Discover what our learners say about us</p>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
              alt="Learnbay"
              quality={100}
              loading="lazy" // Enable lazy loading
              width={800}
              height={408}
              className={styles.socailR}
            />
          </div>
          <div className={styles.secondBotReview}>
            <VideoYt className={styles.YT} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
