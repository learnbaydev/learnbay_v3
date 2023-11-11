import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";
const Popup = dynamic(() => import("../Popup/Popup"));
const FormCareer = dynamic(() => import("../CareerPortal/Form/Form"));
const Form = dynamic(() => import("../Form/Form"));
const Button = dynamic(() => import("../Button/Button"));
const Tabs = dynamic(() => import("../Tabs/Tabs"));
import { menuItem } from "./NavbarData";

const Navbar = ({
  masterApplication,
  radio,
  dataScience,
  fullStack,
  careerForm,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
}) => {
  console.log("navbar");
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          {careerForm ? (
            <FormCareer />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={fullStack}
              dataScience={dataScience}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
            />
          )}
        </div>
      </Popup>

      <nav
        className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
      >
        <div className={`${styles.left} flexBox flexAlignCenter `}>
          {adPage ? (
            ""
          ) : (
            <>
              <FaBars
                className={styles.ham}
                onClick={() => {
                  showMenu();
                  setIcon(false);
                }}
              />
              <div className={show ? styles.mobileWrapper : styles.hide}>
                <div className={styles.mobileMenu}>
                  {" "}
                  {menuItem.map((data) => {
                    const { id, name, url } = data;
                    return (
                      <span onClick={showMenu} key={id}>
                        <Link href={url}>{name}</Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {adPage ? (
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={mobile ? "135" : "230"}
              height={60}
            />
          ) : (
            <Link href="/">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-logo.png"
                alt="Learnbay"
                quality={100}
                priority
                style={{ objectFit: "contain" }}
                width={mobile ? "135" : "230"}
                height={60}
              />
            </Link>
          )}

          <>
            {adPage ? (
              ""
            ) : (
              <div
                onMouseEnter={() => setIcon(true)}
                onMouseOver={() => setIcon(true)}
                onClick={() => {
                  setIcon(!icon);
                  setShow(false);
                }}
                className="flexBox"
              >
                <Button
                  text="Courses"
                  passIcon={icon ? <FaChevronUp /> : <FaChevronDown />}
                />
              </div>
            )}
          </>

          {icon ? (
            <div
              className={styles.megaMenu}
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <Tabs handleIcon={handleIcon} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles.right} flexBox flexAlignCenter flexJustSpaceBetween`}
        >
          {adPage
            ? ""
            : menuItem.map((data) => {
                const { id, name, url } = data;
                return (
                  <span key={id}>
                    <Link href={url}>{name}</Link>
                  </span>
                );
              })}

          <div onClick={popupShow}>
            <Button text="Apply Now" outline={true} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
