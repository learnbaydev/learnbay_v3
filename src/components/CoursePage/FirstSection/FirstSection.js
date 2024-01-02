import React, { useState } from "react";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import FirstContent from "./FirstContent";

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  interstedInHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  ibmOnly,
  cityParaCont,
  thumbnailUrl,
  videoId,
  youtubeEmbedUrl,
  baimg ,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        titleCourse={titleCourse}
        brochureLink={brochureLink}
      />
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
      <FirstContent
        dataScience={dataScience}
        softwareBtnHide={softwareBtnHide}
        firstToparaImg={firstToparaImg}
        firstHeading={firstHeading}
        FirstRightImg={FirstRightImg}
        firstTopPara={firstTopPara}
        dataScienceCounselling={dataScienceCounselling}
        ibmOnly={ibmOnly}
        cityParaCont={cityParaCont}
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        thumbnailUrl={thumbnailUrl}
        youtubeEmbedUrl={youtubeEmbedUrl}
        
      />
    </>
  );
}
export default React.memo(FirstSection);
