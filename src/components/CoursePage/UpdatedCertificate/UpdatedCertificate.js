import React, { useState } from "react";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./UpdatedCertificate.module.css";

export default function UpdatedCertificate({ data }) {
  // Defensive check: if data is undefined or not an array, display a fallback message.
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No certificate data available.</div>;
  }

  // Track the active certificate from the passed-in array.
  const [activeIndex, setActiveIndex] = useState(0);
  const currentData = data[activeIndex];

  // Determine if this certificate has multiple images/paragraph sets by checking for para1.
  const isMultiple = currentData.para1 !== undefined;

  if (isMultiple) {
    // Build pairs for each image/paragraph set.
    Object.entries(currentData).forEach(([key, value]) => {
      const match = key.match(/^img(\d*)$/); // Matches img, img2, img3...
      if (match && value) {
        const index = match[1] || "1"; // "" means "img" (first one)
        const paraKey = `para${index}`;
        const widthKey = `${key}Width`;
        const heightKey = `${key}Height`;

        if (currentData[paraKey]) {
          pairs.push({
            img: value,
            para: currentData[paraKey],
            width: currentData[widthKey] || 150,
            height: currentData[heightKey] || 150,
          });
        }
      }
    });

    return (
      <div className={styles.wrapper}>
        <h3>Industry Recognized Certification Course</h3>
        <section className={styles.certificateSection}>
          {/* Top Navigation */}
          <div className={styles.topNav}>
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.navItem} ${
                  activeIndex === index ? styles.highlight : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.topnav}
              </div>
            ))}
          </div>
          {/* Vertical layout: title on top, then horizontal row of certificate pairs */}
          <div className={styles.multipleContent}>
            <h2 className={styles.title}>{currentData.title}</h2>
            <div className={styles.multipleRow}>
              {pairs.map((pair, idx) => (
                <div key={idx} className={styles.multipleItem}>
                  <Image
                    src={pair.img}
                    alt={`${currentData.title} image ${idx + 1}`}
                    width={pair.width}
                    height={pair.height}
                  />
                  <ul className={styles.pairBulletList}>
                    {pair.para.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>{" "}
      </div>
    );
  } else {
    // Single image layout: title and bullet list on left, image on right.
    return (
      <div className={styles.wrapper}>
        <h3>Industry Recognized Certification Course</h3>
        <section className={styles.certificateSection}>
          <div className={styles.topNav}>
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.navItem} ${
                  activeIndex === index ? styles.highlight : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.topnav}
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <div className={styles.leftSection}>
              <h2 className={styles.title}>{currentData.title}</h2>
              <div className={styles.titleUnderline}></div>
              {currentData.para && (
                <ul className={styles.bulletList}>
                  {currentData.para.map((point, idx) => (
                    <li key={idx}>
                      <p>
                        <BsCheckCircle className={styles.checkCircle} />
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={40}
            />
            <div className={styles.rightSection}>
              <Image
                src={currentData.img}
                alt={currentData.title}
                width={currentData.width || 400}
                height={currentData.height || 300}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
