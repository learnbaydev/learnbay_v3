import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  const featureData = [
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/sec1.webp",
      alt: "data science course",
      text: "1-on-1 Doubt Session",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(5).png",
      alt: "data science course",
      text: "Guaranteed Interview Calls",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/sec3.webp",
      alt: "data science course",
      text: "IBM Project Certificate",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/sec4.webp",
      alt: "data science course",
      text: "Designed For Professionals  ",
    },
  ];

  return (
    <div className={styles.boxP}>
      {featureData.map((feature, index) => (
        <div className={styles.boxC} key={index}>
          <div className={styles.imgBox}>
            <Image
              src={feature.src}
              width="35"
              height="35"
              priority={true}
              alt={feature.alt}
            />
          </div>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
}

export default SecondSection;
