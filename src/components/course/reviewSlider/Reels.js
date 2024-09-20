"use client";
import React, { useRef, useState, useMemo } from "react";
import Reeldata from "./reelData";
import dynamic from 'next/dynamic';
import styles from "./reviewSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

// Dynamically import VideoPopup
const VideoPopup = dynamic(() => import('@/components/Global/VideoPopup/VideoPopup'), { ssr: false });

const Reels = () => {
  const reelswiperRef = useRef(null);
  const [videoId, setVideoId] = useState("");

  const isVideoPopupOpen = videoId !== "";

  const videoShow = (id) => {
    setVideoId(id);
  };

  const videoClose = () => {
    setVideoId(""); // Close the popup by clearing the ID
  };

  // Debounce function for navigation
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const nextreelSlide = debounce(() => {
    reelswiperRef.current.slideNext();
  }, 300);

  const prevreelSlide = debounce(() => {
    reelswiperRef.current.slidePrev();
  }, 300);

  return (
    <>
      <VideoPopup triggers={isVideoPopupOpen} setTriggers={videoClose} ids={videoId} />
      <div className={styles.headingContainer}>
        <div className={styles.Header}>
          <h2>
            Real Stories, <span className={styles.topSpan}>Real Success</span>
          </h2>
          <p className={styles.subHeading}>
            Discover what our learners say about us
          </p>
        </div>
        <div className={styles.mainContiner}>
          <div className={styles.prevBtn} onClick={prevreelSlide}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <Swiper
            onSwiper={(swiper) => {
              reelswiperRef.current = swiper;
            }}
            slidesPerView={4}
            spaceBetween={30}
            className={styles.mySwiper}
            breakpoints={{
              320: { slidesPerView: 2.6, spaceBetween: 20 },
              768: { slidesPerView: 3.5, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1081: { slidesPerView: 4, spaceBetween: 30 },
              1181: { slidesPerView: 4, spaceBetween: 30 },
              1281: { slidesPerView: 4, spaceBetween: 20 },
              1440: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {Reeldata.map((item, id) => (
              <SwiperSlide key={id} className={styles.sliderWrapper}>
                <Image
                  src={item.proimage}
                  alt="Learnbay"
                  loading="lazy"
                  width={180}
                  height={200}
                  className={styles.videoImage}
                  onClick={() => videoShow(item.link)}
  
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.nextBtn} onClick={nextreelSlide}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reels;
