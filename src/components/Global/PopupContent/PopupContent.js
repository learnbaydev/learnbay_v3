import React from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../Popup/Popup"));
const Form = dynamic(() => import("../Form/Form"));

const PopupContent = ({
  dataScience,
  radio,
  dataScienceCounselling,
  popups,
  setPopups,
  heading,
  fullStack,
  upSkillingHide,
  dataScienceGeneric,
  interstedInHide,
}) => {
  return (
    <Popup
      trigger={popups}
      setTrigger={setPopups}
      className="popupModal"
      popup={true}
    >
      <div className="leftPopup">
        <div
          className="whiteP"
          style={{ width: "340px", height: "400px" }}
        ></div>
      </div>
      <div className="RightPopup">
        <h5>{heading}</h5>
        <Form
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          upSkillingHide={true}
          interstedInHide={interstedInHide}
        />
      </div>
    </Popup>
  );
};

export default React.memo(PopupContent);
