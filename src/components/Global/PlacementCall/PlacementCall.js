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
  { title: "BI Engineer", imgSrc: "firstimg.webp", imgWidth: 400 },
  { title: "BI Developer", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Sr. Data Analyst", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Business Analyst", imgSrc: "firstimg.webp", imgWidth: 400 },
  { title: "DataBase Admin", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Data Science Manger", imgSrc: "thirdimg.webp", imgWidth: 400 },

];
const DevopsData = [
  { title: "Cloud Engineer", imgSrc: "secondimg.webp", imgWidth: 450 },
  { title: "DevOps Engineer", imgSrc: "thirdimg.webp", imgWidth: 450 },
  { title: "System Admin", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Cloud Architect", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Automation Engineer", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Infrastructure Engineer", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Solutions Architecht", imgSrc: "secondimg.webp", imgWidth: 400 },
  { title: "Cloud Security Specialist", imgSrc: "thirdimg.webp", imgWidth: 400 },
  { title: "Site Reliability Engineer ", imgSrc: "secondimg.webp", imgWidth: 400 },

  // Add more data as needed
];

const PlacementCall = ({devops}) => {
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
    <>
    {devops ? (
      <div className={styles.PlacementCallMain}>
      <div className={styles.title}>
        <h2>Dedicated Placement Cell </h2>
        <p>Job roles & companies you can target</p>
      </div>
      <div className={styles.margin}>
        <div className={styles.course}>
          <div className={styles.mbldiv}>
            {DevopsData.map((course, index) => (
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
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
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
            {DevopsData.map((course, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <div className={styles.slideWrap}>
                  <div className={styles.number}>
                    <div className={styles.imged}>
                      <Image
                        src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${DevopsData[index].imgSrc}`}
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
    ):(
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
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
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
                          src={`https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/${courseData[index].imgSrc}`}
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
    )}


    </>
 
  );
};

export default PlacementCall;
