import React from "react";
import styles from "./NavbarSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { menuItem } from "./NavbarData";
import { FaChevronDown } from "react-icons/fa6";

function NavbarSection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <div className={styles.firstSection}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
                  priority
                  width="170"
                  height={60}
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
            <div className={styles.orangeButton}>Apply for Counselling</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarSection;
