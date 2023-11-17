import React, { useState } from "react";
import styles from "./FirstSection.module.css";
import FirstSectionContent from "./FirstSectionContent";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

function FirstSection({
  dataScience,
  fullStack,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
  interstedInHide,
}) {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        dataScience={dataScience}
        downloadBrochure
        titleCourse={titleCourse}
        brochureLink={brochureLink}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
        heading="Download Brochure"
      />

      <FirstSectionContent
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        fullStack={fullStack}
        setPopups={setPopups}
      />
    </>
  );
}

export default FirstSection;
