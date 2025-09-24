"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { menuItem } from "./NavbarData";

const Button = dynamic(() => import("../Button/Button"));
const Tabs = dynamic(() => import("../Tabs/Tabs"));

const NavbarContent = ({ adPage, setPopups, DMD, careerportalbtn }) => {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleIcon = (data) => setIcon(data);

  const showMenu = () => setShow(!show);

  useEffect(() => {
    const width = window.innerWidth;
    setMobile(width < 481);
  }, []);

  const popupShow = () => setPopups?.(true);

  // Helper to mark AI Co-lab
  const isAICoLab = (name) => name?.trim().toLowerCase() === "ai co-lab";

  return (
    <nav
      className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
    >
      <div className={`${styles.left} flexBox flexAlignCenter`}>
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
                {menuItem.map(({ id, name, url }) => (
                  <span onClick={showMenu} key={id}>
                    <Link
                      href={url}
                      className={isAICoLab(name) ? styles.highlightSquare : ""}
                    >
                      {name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {adPage ? (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
            alt="Learnbay"
            quality={100}
            priority
            style={{ objectFit: "contain" }}
            width={mobile ? 135 : 230}
            height={60}
          />
        ) : (
          <Link href="/" className={styles.logo}>
            <div className="imgWrapper">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                alt="Learnbay"
                quality={100}
                priority
                width={mobile ? 135 : 230}
                height={60}
              />
            </div>
          </Link>
        )}

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

      {DMD ? (
        <div
          className={`${styles.righta} flexBox flexAlignCenter flexJustSpaceBetween`}
        >
          <Link
            href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
            target="_blank"
          >
            <div>
              <Button text="Register Now" outline={true} />
            </div>
          </Link>
        </div>
      ) : adPage ? (
        <div
          className={`${styles.righta} flexBox flexAlignCenter flexJustSpaceBetween`}
        >
          <div onClick={popupShow}>
            <Button text="Apply Now" outline={true} />
          </div>
        </div>
      ) : (
        <div
          className={`${styles.right} flexBox flexAlignCenter flexJustSpaceBetween`}
        >
          {menuItem.map(({ id, name, url }) => (
            <span key={id}>
              <Link
                href={url}
                className={isAICoLab(name) ? styles.highlightSquare : ""}
              >
                {name}
              </Link>
            </span>
          ))}

          {careerportalbtn ? (
            ""
          ) : (
            <div onClick={popupShow}>
              <Button text="Apply Now" outline={true} />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default React.memo(NavbarContent);
