import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import dynamic from "next/dynamic";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
const Button = dynamic(() => import("../../../Global/Button/Button"));
const Tabs = dynamic(() => import("../../../Global/Tabs/Tabs"));
import { menuItem } from "./NavbarData";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../../../../pages/search"
import { IoIosArrowDown } from "react-icons/io";
import Search from "../../../../pages/search";
import courseData from "../../../../../public/Data/search.json"


const NavbarContent = ({ adPage, setPopups }) => {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);

  const handleIcon = (data) => {
    setIcon(data);
  };
  const showMenu = () => {
    setShow(!show);
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
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <nav
      className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
    >
    
  <div>
    <Image
  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/expertEdge/xpertEdgeLogo.webp"
  width={180}
  height={70}
  alt=""

  
  
  /></div>

    <div className={styles.dropbtn}>
   <p>Explore</p> 
    <IoIosArrowDown />
    </div>
    

    <Search courseData={courseData} />


  <div>

  </div>

    </nav>
  );
};

export default React.memo(NavbarContent);
