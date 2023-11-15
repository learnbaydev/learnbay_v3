import React from "react";
import Styles from "./Gethire.module.css";
import Image from "next/image";
import { FcCheckmark } from "react-icons/fc";

function GetHire() {
  // console.log("Get Hire");
  return (
    <div id="servicePro">
      <div className={Styles.GetHireMain}>
        <div className={Styles.GetHireHead}>
          <div className={Styles.HireLeft}>
            <h2>
              Land Your Dream Job with Career Services{" "}
              <span className={Styles.PRo}>PRO</span>
            </h2>
            <div className={Styles.GetHireBulet}>
              <div className={Styles.minibullet}>
                <div className={Styles.Points}>
                  <span>
                    <FcCheckmark />
                  </span>
                  <p>1:1 Doubt Sessions</p>
                </div>

                <div className={Styles.Points}>
                  <span>
                    <FcCheckmark />
                  </span>
                  <p>Interview Prep.</p>
                </div>

                <div className={Styles.Points}>
                  <span>
                    <FcCheckmark />
                  </span>
                  <p>Resume BuildUp</p>
                </div>
                <div className={Styles.Points}>
                  <span>
                    <FcCheckmark />
                  </span>
                  <p>3 Years Flexible Sub.</p>
                </div>
              </div>
              <div>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/getHiremasteer.webp"
                  width={200}
                  height={180}
                />
              </div>
            </div>
          </div>

          <div className={Styles.HireRight}>
            <p className={Styles.mainpara}>
              {" "}
              <span>Get</span>Hired At
            </p>
            <div className={Styles.showDesktop}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/company-logos.webp"
                width={550}
                height={260}
              />
            </div>
            <div className={Styles.showMobile}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Group+683-min.webp"
                width={550}
                height={260}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetHire;
