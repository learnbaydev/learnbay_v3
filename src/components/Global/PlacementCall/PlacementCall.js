import React, { useState, useEffect } from "react";
import styles from "./PlacementCall.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

import { Autoplay } from "swiper";

const courseData = [
  { title: "Sr. Data Scientist", imgSrc: "firstimg.webp", imgWidth: 450 },
  { title: "ML Engineer", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "AI Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "BI Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "BI Developer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Sr. Data Analyst", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Business Analyst", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "DataBase Admin", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Data Science Manger", imgSrc: "thirdimg.webp", imgWidth: 400 },

  // Add more data as needed
];

const PlacementCall = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.PlacementCallMain}>
      <div className={styles.title}>
        <h2>Dedicated Placement Cell</h2>
        <p>Job roles & companies you can target</p>
      </div>
      <div className={styles.margin}>
        <div className={styles.course}>
          <div className={styles.mbldiv}>
            {courseData.map((course, index) => (
              <div
                className={`${styles.PlacementCallcourse} ${styles.scrollAnimation}`}
                key={index}
              >
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.imgsection}>
        <img
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
          width={600}
          height={200}
          loading="lazy"
          quality={40}
        />
      </div>
      <div className={styles.stttt}>
        <div className={styles.rightSide}>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {courseData.map((course, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <div className={styles.slideWrap}>
                  <div className={styles.number}>
                    <div className={styles.imged}>
                      <Image
                        src={`https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/${courseData[0].imgSrc}`}
                        height={60}
                        width={course.imgWidth}
                        loading="lazy"
                        quality={40}
                        alt="placement"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PlacementCall;
