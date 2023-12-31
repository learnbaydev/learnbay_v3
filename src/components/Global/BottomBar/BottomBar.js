import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/dist/client/link";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const BottomBar = ({ whatsappShow, masterdegree }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className="divWrapper">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScienceCounselling={true}
          />
        </div>
      </Popup>
      <div className="FlDiv">
        {masterdegree ? (
          <Link href="/master-application">
            <div className="flDivLeft">
              Start Your Application
              <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
            </div>
          </Link>
        ) : (
          <div className="flDivLeft" onClick={popupShow}>
            Apply For Counselling
            <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
          </div>
        )}

        {whatsappShow ? (
          <div className="flDivRight">
            <Link href="https://wa.me/+917349222263">Chat with us </Link>
            <IoLogoWhatsapp className="bIcon" style={{ color: "Green" }} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BottomBar;
