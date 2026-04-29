import React from 'react';
import Navbar from '@/components/Global/Navbar/Navbar';

import Footer from '@/components/Global/Footer/Footer';
import HeroSection from '../components/CorporateAiTraining/HeroSection';
import WhyAiTraining from '../components/CorporateAiTraining/WhyAiTraining';
import WhatLearningDelivers from '../components/CorporateAiTraining/WhatLearningDelivers';
import SameTeamSameTool from '../components/CorporateAiTraining/SameTeamSameTool';
import RealExample from '../components/CorporateAiTraining/RealExample';
import OurAiTrainingProgram from '../components/CorporateAiTraining/OurAiTrainingProgram';
import WhatLeadersSay from '../components/CorporateAiTraining/WhatLeadersSay';
import InvestInResults from '../components/CorporateAiTraining/InvestInResults';
import FaqSection from '../components/CorporateAiTraining/FaqSection';

const CorporateAITraining = () => {
  return (
    <div>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      <HeroSection />
      <WhyAiTraining />
      <WhatLearningDelivers />
      <SameTeamSameTool />
      <RealExample />
      <OurAiTrainingProgram />
      <WhatLeadersSay />
      <InvestInResults />
      <FaqSection />

      <Footer />
    </div>
  );
};

export default CorporateAITraining;
