import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  const featureData = [
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(4).png",
      alt: "data science course",
      text: "Globally Recognized Degree",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(5).png",
      alt: "data science course",
      text: "Immigration Opportunities",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(6).png",
      alt: "data science course",
      text: "Integrated Generative AI",
    },
    {
      src: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mask+group+(7).png",
      alt: "data science course",
      text: "Transferable ECTS Credits",
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
