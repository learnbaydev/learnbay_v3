import React from "react";
import styles from "./NavbarSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { menuItem } from "./NavbarData";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import Form from "@/components/Global/Form/Form";
import Popup from "@/components/Global/Popup/Popup";

function NavbarSection({
  radio,
  dataScience,
  fullStack,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
  interstedInHide,
}) {

  const popupShow = () => {
    setPopups(true);
  };
  const [popups, setPopups] = useState(false);
  return (
    
    <section className={styles.container}>
       <Popup trigger={popups} setTrigger={setPopups} className="popupModal" >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
  
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={fullStack}
              dataScience={dataScience}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />

        </div>
      </Popup>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <div className={styles.firstSection}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
           
                  width="170"
                  height={60}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className={styles.blueButton}>
              Courses <FaChevronDown />
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.menuItems}>
              {menuItem.map((data) => {
                const { id, name, url } = data;
                return (
                  <span key={id}>
                    <Link href={url}>{name}</Link>
                  </span>
                );
              })}
            </div>
            <div className={styles.orangeButton} onClick={popupShow}>Apply for Counselling</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarSection;
