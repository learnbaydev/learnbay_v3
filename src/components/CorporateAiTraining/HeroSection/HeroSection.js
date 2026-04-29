import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ paddingTop: '200px' }}>
      <Image
        src={`https://d32and0ii3b8oy.cloudfront.net/adlearnbay/corporateAITrainingHero.webp`}
        alt="corporateAITrainingHero"
        fill
        priority
      />
    </div>
  );
};

export default HeroSection;
