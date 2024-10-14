import { useState } from "react";
import HeroSectionContent from "./HeroSectionContent";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";

const HeroSection = ({
  brochureLink,
  brochurePdf,
  idss,
  videoId,
  interstedInHide,
  upSkillingHide,
  dataScience,
  dataScienceCounselling,
  radio,
  downloadBrochure,
  dataScienceGeneric,
  spanTag,
  spanIcon,
  thumbnailurl,
  noIIt,
  title,
  orgTitle,
  descrption,
  OrangeButton,
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  CloseBotDate,
  BotWidth,
BotHeight,
backgroundGradient,
backgroundImage,
showRightForm,
purpleButton,
PointsDiv,

}) => {

  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  return (
    <div>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
      />
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <HeroSectionContent
      title={title}
      orgTitle={orgTitle}
      thumbnailurl={thumbnailurl}
      spanTag={spanTag}
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        interstedInHide={interstedInHide}
        dataScience={dataScience}
        upSkillingHide={upSkillingHide}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
        noIIt ={noIIt}
        descrption={descrption}
        spanIcon={spanIcon}
        OrangeButton={OrangeButton}
        applicationIcon={applicationIcon}
        CloseDes={CloseDes}
        ProgramIcon={ProgramIcon}
        DurationBot={DurationBot}
        DurationBotDate={DurationBotDate}
        trainingIcon={trainingIcon}
        TrainingBot={TrainingBot}
        CloseBotDate={CloseBotDate}
        BotWidth={BotWidth}
BotHeight={BotHeight}
backgroundGradient={backgroundGradient}
backgroundImage={backgroundImage}
showRightForm={showRightForm}
purpleButton={purpleButton}
PointsDiv={PointsDiv}
      />
    </div>
  );
};

export default HeroSection;