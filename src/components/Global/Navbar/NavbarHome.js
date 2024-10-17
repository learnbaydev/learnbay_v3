import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { menuItemHome } from "./NavbarData";

// Dynamic imports for components
const Popup = dynamic(() => import("../Popup/Popup"), { ssr: false });
const Form = dynamic(() => import("../Form/Form"), { ssr: false });
const Button = dynamic(() => import("../Button/Button"), { ssr: false });
const Tabs = dynamic(() => import("../Tabs/Tabs"), { ssr: false });

const NavbarHome = ({
  radio,
  fullStack,
  dataScience,
  dataScienceGeneric,
  dataScienceCounselling,
  interstedInHide,
}) => {
  const [icon, setIcon] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const [Popups, setPopup] = useState(false);
  const [mobile, setMobile] = useState(false);

  const dropdownRef = useRef(null); // Reference for dropdown container

  const showMenu = useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const handleIcon = useCallback((data) => {
    setIcon(data);
  }, []);

  const popupShow = useCallback(() => {
    setPopup(true);
  }, []);

  const toggleMoreDropdown = useCallback(() => {
    setShowMoreDropdown((prevShowMore) => !prevShowMore);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMoreDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const updateMobileView = () => {
      setMobile(window.innerWidth < 481);
    };

    window.addEventListener("resize", updateMobileView);
    updateMobileView();

    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []);

  return (
    <nav className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}>
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
          className={mobile ? styles.mobileLogo : styles.desktopLogo}
          width={mobile ? 135 : 180}
          height={50}
        />

        {/* Courses Button with Dropdown */}
        <div
          onMouseEnter={() => setIcon(true)}
          onMouseLeave={() => setIcon(true)}
          onClick={() => {
            setIcon(!icon);
            setShow(false);
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
        {icon && (
          <div className={styles.megaMenu} onMouseLeave={() => setIcon(false)}>
            <Tabs handleIcon={handleIcon} />
          </div>
        )}
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
      <div className={`${styles.right} flexBox flexAlignCenter flexJustSpaceBetween`}>
        {menuItemHome.map((item) => {
          if (item.name === "More") {
            return (
              <div
                key={item.id}
                className={styles.dropdownContainer}
                ref={dropdownRef} // Attach reference here
              >
                <span
                  className={styles.moreLink}
                  onClick={toggleMoreDropdown}
      
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
