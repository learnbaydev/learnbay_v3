import React from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Global/Popup/Popup"));
const Form = dynamic(() => import("../../Global/Form/Form"));

const PopupContent = ({
  dataScience,
  radio,
  dataScienceCounselling,
  popups,
  setPopups,
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
        <h5>Apply For Counselling</h5>
        <Form
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          upSkillingHide={true}
          interstedInHide={true}
        />
      </div>
    </Popup>
  );
};

export default React.memo(PopupContent);
