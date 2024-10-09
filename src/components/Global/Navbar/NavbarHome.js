import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { menuItemHome } from "./NavbarData";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const Button = dynamic(() => import("../Button/Button"));
const Tabs = dynamic(() => import("../Tabs/Tabs"));

const NavbarHome = ({
  radio,
  fullStack,
  dataScience,
  dataScienceGeneric,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const [icon, setIcon] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false); // Add dropdown state
  const [show, setShow] = useState(false);
  const [Popups, setPopup] = useState(false);
  const [mobile, setMobile] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const popupShow = () => {
    setPopup(true);
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown); // Toggle More dropdown
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <nav
      className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
    >
      {/* Popup Component */}
      <Popup trigger={Popups} setTrigger={setPopup} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            popup={true}
            setTrigger={setPopup}
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

      {/* Left Section */}
      <div className={`${styles.left} flexBox flexAlignCenter`}>
        <FaBars
          className={styles.ham}
          onClick={() => {
            showMenu();
            setIcon(false);
          }}
        />

        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
          alt="Learnbay"
          quality={100}
          priority
          style={{ objectFit: "contain" }}
          width={mobile ? "135" : "180"}
          height={60}
        />

        {/* Courses Button with Dropdown */}
        <div
          onMouseEnter={() => setIcon(true)}
          onMouseLeave={() => setIcon(true)}
          onClick={() => {
            setIcon(!icon);
            setShow(true);
          }}
          className="flexBox"
        >
          <Button
            newBlueButton
            text="Courses"
            passIcon={icon ? <FaChevronUp /> : <FaChevronDown />}
          />
        </div>

        {/* Mega Menu */}
        <div className={styles.megaMenu} onMouseLeave={() => setIcon(false)}>
          {icon && <Tabs handleIcon={handleIcon} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={show ? styles.mobileWrapper : styles.hide}>
        <div className={styles.mobileMenu}>
          {menuItemHome.map((data) => {
            const { id, name, url } = data;
            return (
              <span onClick={showMenu} key={id}>
                <Link href={url}>{name}</Link>
              </span>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`${styles.right} flexBox flexAlignCenter flexJustSpaceBetween`}
      >
        {menuItemHome.map((item) => {
          if (item.name === "More") {
            return (
              <div key={item.id} className={styles.dropdownContainer}>
                <span
                  className={styles.moreLink}
                  onClick={toggleMoreDropdown}
                  onMouseOver={toggleMoreDropdown}
                >
                  {item.name} <FaChevronDown />
                </span>

                {/* Dropdown for 'More' */}
                {showMoreDropdown && (
                  <div className={styles.dropdown}>
                    {item.dropdown.map((dropdownItem) => (
                      <Link href={dropdownItem.url} key={dropdownItem.id}>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <span key={item.id}>
              <Link href={item.url}>
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                )}{" "}
                {/* Master’s Degree Icon */}
                {item.name}
              </Link>
            </span>
          );
        })}

        <div onClick={popupShow} className={styles.requestBtn}>
          <button>Request a callback</button>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavbarHome);
