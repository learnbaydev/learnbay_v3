import React, { useState } from 'react';
import styles from "./LinkedinReview.module.css";
const imageSources = [
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-1.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-6.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-3.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-4.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-5.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-2.webp',
];
function LinkedinReview() {
  const [showMobileImages, setShowMobileImages] = useState(false);
  const toggleMobileImages = () => {
    setShowMobileImages(!showMobileImages);
  };
  return (
    <div className={styles.LinkedinReviewMain}>
      <h2>Linkedin</h2>
      <div className={styles.LinkedinReviewBoxHead}>
        {imageSources.slice(0, showMobileImages ? imageSources.length : 3).map((imageSource, index) => (
          <div className={styles.LinkedinReviewBox} key={index}>
            <img src={imageSource} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {imageSources.length > 3 && (
        <button  className={styles.btn} onClick={toggleMobileImages}>
          {showMobileImages ? 'View Less' : 'View More'}
        </button>
      )}
    </div>
  );
}
export default LinkedinReview;