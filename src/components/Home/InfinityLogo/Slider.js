import React, { useEffect, useRef, useState } from "react";
import styles from "./infinity.module.css";
import Image from "next/image";
import { topSliderData, bottomSliderData } from "./SliderData";

const Slider = () => {
  const [isInView, setIsInView] = useState(false);
  const sliderRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Update state if the section is in view
      },
      { threshold: 0.1 } // Trigger when 10% of the slider is in view
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current); // Observe the slider wrapper
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sliderRef} className={styles.sliderWrapper}>
        <div
          className={`${styles.sliderInner} ${isInView ? styles.active : ""}`}
        >
          <div className={styles.topDiv}>
            {topSliderData.map((item, index) => (
              <div key={index} className={styles.cards}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                />
                <p>{item.text}</p>
              </div>
            ))}

            {topSliderData.map((item, index) => (
              <div key={`duplicate-${index}`} className={styles.cards}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapperdown}>
        <div
          className={`${styles.sliderInnerDown} ${
            isInView ? styles.active : ""
          }`}
        >
          <div className={styles.DownDiv}>
            {bottomSliderData.map((item, index) => (
              <div key={index} className={styles.cardsDown}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                />
                <p>{item.text}</p>
              </div>
            ))}
            {bottomSliderData.map((item, index) => (
              <div key={`duplicate-down-${index}`} className={styles.cardsDown}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
