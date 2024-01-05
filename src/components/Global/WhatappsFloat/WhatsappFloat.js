import React, { useState, useEffect } from "react";
import Script from "next/script";
import styles from "../../../styles/Home.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function WhatsappFloat({ chat360code1 }) {
  return (
    <>
      {chat360code1 ? (
        <Link href="https://api.whatsapp.com/send?phone=917349222263" target="_blank">
          <div className={styles.FloatWhatsapp}>
            <FaWhatsapp className={styles.whatsappIcon} />
          </div>
        </Link>
      ) : (
        <Link href="https://api.whatsapp.com/send?phone=917349222263" target="_blank">
        <div className={styles.FloatWhatsapp}>
          <FaWhatsapp className={styles.whatsappIcon} />
        </div>
      </Link>
      )}
    </>
  );
}

export default React.memo(WhatsappFloat);
