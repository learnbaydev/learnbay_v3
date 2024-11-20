import React from 'react';
import styles from './genAi.module.css'; // Make sure the path is correct
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GenAIProject = ({ genAiData }) => {
  return (
    <div className={styles.main}>
      <div className={styles.Header}>
        <h2>Industry Projects</h2>
        <p>Work on live capstone projects certified from IBM</p>
      </div>

      <div className={styles.swiperDiv}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20} 
          slidesPerView={3.2} 
          pagination={{ clickable: true }}
          className={styles.swiperSection}
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 card on small screens
            },
            768: {
              slidesPerView: 2, // Show 2 cards on medium screens
            },
            1024: {
              slidesPerView: 3.2, // Show 3.2 cards on larger screens
            },
          }}
        >

          {genAiData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={styles.Card}>
                <div className={styles.iconDIv}>
                  <Image
                    src={project.iconUrl} 
                    width={40}
                    height={40}
                    alt="icons"
                    loading="lazy"
                  />
                  <div className={styles.greenBox}>
                    <p>{project.rank}</p>
                  </div>
                </div>
                <h6>{project.title}</h6>
                <div className={styles.lightBox}>
                  <p>{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GenAIProject;
