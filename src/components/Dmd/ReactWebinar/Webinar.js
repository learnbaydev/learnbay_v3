import Image from "next/image";
import React from "react";
import styles from "./Webinar.module.css"

function Webinar() {
  return (
    <div>
      <div className={styles.webmain}>
        <h2><span className={styles.greentext}>FREE </span>WEBINAR</h2>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/react-dmd.webp"
          width={1280}
          height={380}
          loading="lazy"
        />
         <div className={styles.btn} >
        <button onClick={console.log("working")}>
            Apply Now
        </button>
        </div>
      </div>
    
    </div>
  );
}

export default Webinar;
