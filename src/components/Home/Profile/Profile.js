// components/ProfileSlider.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Profile.module.css';

// Import Swiper styles

// Install Swiper modules
SwiperCore.use([Navigation]);

const profileData = [
  { id: 1, name: 'John Doe', age: 25, imageUrl: '/profile1.jpg' },
  { id: 2, name: 'Jane Smith', age: 28, imageUrl: '/profile2.jpg' },
  { id: 3, name: 'Jane Smith', age: 28, imageUrl: '/profile2.jpg' },
  { id: 4, name: 'Smith', age: 28, imageUrl: '/profile2.jpg' },
  { id: 5, name: 'John Doe', age: 25, imageUrl: '/profile1.jpg' },
  { id: 6, name: 'John Doe', age: 25, imageUrl: '/profile1.jpg' },
  { id: 7, name: 'John Doe', age: 25, imageUrl: '/profile1.jpg' },
  // Add more profiles as needed
];

const ProfileSlider = () => {
  const [selectedProfile, setSelectedProfile] = useState(profileData[0]);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className={styles.doubleSlider}>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        className={styles.profileSlider}
      >
        {profileData.map((profile) => (
          <SwiperSlide key={profile.id}>
            <div className={styles.sliderContent}>
              <div className={styles.leftContent}>
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className={`${styles.profileImage} ${selectedProfile.id === profile.id ? styles.selected : ''}`}
                  onClick={() => handleProfileClick(profile)}
                />
              </div>
              <div className={styles.rightContent}>
                <h2>{profile.name}</h2>
                <p>Age: {profile.age}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileSlider;
