import React from "react";
import styles from "./TyPageCta.module.css";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../../Global/Button/Button"));

const TyPageCta = ({ heading, para, brochureLink }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <h4>{heading}</h4>
        </div>
        <a href={brochureLink}>
          <Button
             
              text="Download Brochure" 
              passIcon={<AiOutlineDownload />}
            />
        </a>
      </div>
    </div>
  );
};

export default TyPageCta;
