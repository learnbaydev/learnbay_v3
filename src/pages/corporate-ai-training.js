import React from 'react';
import Navbar from '@/components/Global/Navbar/Navbar';

import Footer from '@/components/Global/Footer/Footer';
import HeroSection from '../components/CorporateAiTraining/HeroSection/HeroSection';
import WhyAiTraining from '../components/CorporateAiTraining/WhyAiTraining/WhyAiTraining';
import WhatLearningDelivers from '../components/CorporateAiTraining/WhatLearningDelivers/WhatLearningDelivers';
import SameTeamSameTool from '../components/CorporateAiTraining/SameTeamSameTool/SameTeamSameTool';
import RealExample from '../components/CorporateAiTraining/RealExample/RealExample';
import OurAiTrainingProgram from '../components/CorporateAiTraining/OurAiTrainingProgram/OurAiTrainingProgram';
import WhatLeadersSay from '../components/CorporateAiTraining/WhatLeadersSay/WhatLeadersSay';
import InvestInResults from '../components/CorporateAiTraining/InvestInResults/InvestInResults';
import FaqSection from '../components/CorporateAiTraining/FaqSection/FaqSection';

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
