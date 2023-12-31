import { useState } from "react";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import FeeContent from "./FeeContent";

const FeeSection = ({
  Fee,
  dataScience,
  WeekdayDate,
  WeekendDate,
  WeekdayTime,
  WeekendTime,
  CutFee,
  dataScienceCounselling,
  FeeEmi,
  weekday,
  weekend,
  weekdaybatch,
  weekendbatch,
  interstedInHide,
  devopfee,
  adsHide,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <div id="Fees">
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
        interstedInHide={interstedInHide}
        upSkillingHide={true}
      />
      <FeeContent
        Fee={Fee}
        adsHide={adsHide}
        dataScience={dataScience}
        WeekdayDate={WeekdayDate}
        WeekendDate={WeekendDate}
        WeekdayTime={WeekdayTime}
        WeekendTime={WeekendTime}
        CutFee={CutFee}
        FeeEmi={FeeEmi}
        weekday={weekday}
        weekend={weekend}
        weekdaybatch={weekdaybatch}
        weekendbatch={weekendbatch}
        setPopups={setPopups}
        devopfee={devopfee}
      />
    </div>
  );
};

export default FeeSection;
