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
        setPopups={setPopups}
        setVideo={setVideo}
        videoId={videoId}
        interstedInHide={interstedInHide}
        dataScience={dataScience}
        upSkillingHide={upSkillingHide}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
      />
    </div>
  );
};

export default HeroSection;