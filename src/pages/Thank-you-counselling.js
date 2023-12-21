import React from "react";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import FirstHeader from "../components/StaticPage/Thankyou/FirstHeader/FirstHeader";
import ThankStats from "../components/StaticPage/Thankyou/ThankStat/ThankStats";
import Survey from "../components/StaticPage/Thankyou/Survey/Survey";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";

const ThankYouDemo = () => {
  return (
    <div>
      <Navbar radio={true} />
      <FirstHeader />
      <ThankStats
        img1="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/GIF.gif"
        heading="Gain Clarity: Explore the possibilities and chart your Career Journey"
        head1="Explore Career Options:"
        head2="Embrace Opportunities:"
        head5="Personalized Goal:"
        head6="Strategize for Success:"
        para5="Bridge the gap between aspirations and expertise."
        para6="Overcome obstacles and maximize your potential."
        para1="Find your ideal path based on skills, interests, and goals."
        para2="Discover growth potential in emerging industries."
      />
      <Survey
        header="Are you seeking the perfect course that will propel your career to new heights?"
        para="Unleash your full potential with our personalized and tailored course suggestions that will guide you towards your ideal learning journey."
      />
      <BottomBar radio={true} />
      <Footer />
      <WhatsappFloat />
      <BottomBar />
    </div>
  );
};

export default ThankYouDemo;
