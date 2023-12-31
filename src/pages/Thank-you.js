import React, { useState, useEffect } from "react";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import FirstHeader from "../components/StaticPage/Thankyou/FirstHeader/FirstHeader";
import ThankStats from "../components/StaticPage/Thankyou/ThankStat/ThankStats";
import Survey from "../components/StaticPage/Thankyou/Survey/Survey";
import TyPageCta from "@/components/StaticPage/Thankyou/TyPageCta/TyPageCta";

const ThankYouDemo = () => {
  const dataArray = [];
  const [queryData, setQueryData] = useState({
    titleCourse: "",
    brochureLink: "",
  });
  const [data, setData] = useState(dataArray);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    for (const [key, value] of urlParams) {
      dataArray.push(value);
      setData(dataArray);
    }
    setQueryData(data);
  }, []);

  return (
    <div>
      <Navbar donwnload={true} brochureLink={data[1]} />
      <FirstHeader donwnload={true} brochureLink={data[1]} />

      <ThankStats
        img1="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/GIF.gif"
        heading="Gain Clarity: Explore the possibilities and chart your Career Journey"
        // desc="tat point 1 here lorem ipsum doret trinkettat point 1 here lorem ipsum doret trinket tat point 1 here lorem ipsum doret trinket"
        head1="Explore Career Options:"
        head2="Embrace Opportunities:"
        head5="Personalized Goal:"
        head6="Strategize for Success:"
        para5="Bridge the gap between aspirations and expertise."
        para6="Overcome obstacles and maximize your potential."
        para1="Find your ideal path based on skills, interests, and goals."
        para2="Discover growth potential in emerging industries."
      />

      <TyPageCta brochureLink={data[1]} heading={data[0]} />
      <Survey
        header="Are you seeking the perfect course that will propel your career to new heights?"
        // topPara="ENTER SOME TEXT HERE PLACEHOLDER"
        para="Unleash your full potential with our personalized and tailored course suggestions that will guide you towards your ideal learning journey."
      />
      <BottomBar />
      <Footer />
      <BottomBar radio={true} />
    </div>
  );
};

export default ThankYouDemo;
