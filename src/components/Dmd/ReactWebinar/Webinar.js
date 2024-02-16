import Image from "next/image";
import React from "react";
import styles from "./Webinar.module.css"
import Link from "next/link";

function Webinar() {
  return (
    <div>
      <div className={styles.webmain}>
        <h2><span className={styles.greentext}>REGISTER </span>FOR WEBINAR</h2>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/webinar_desktop.webp"
          width={1200}
          height={390}
          loading="lazy"
        />
       
         <div className={styles.btn} >
         <Link href="https://zoom.us/webinar/register/WN_tcRP7m0hS-iQlP4FAEPKUA" target="_blank"> 
        <button >
            Register Now
        </button>
        </Link>
        </div>
      
      </div>

      <div className={styles.webmainmbl}>
        <h2><span className={styles.greentext}>REGISTER </span>WEBINAR</h2>
        <div className="">
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/webinar_mobile.webp"
          width={350}
          height={350}
          loading="lazy"
          className={styles.imgmbl}
        />
       
         <div className={styles.btn} >
         <Link href="https://zoom.us/webinar/register/WN_tcRP7m0hS-iQlP4FAEPKUA" target="_blank"> 
        <button >
            Register Now
        </button>
        </Link>
        </div>
        </div>
      
      </div>
    
    </div>
  );
}

export default Webinar;
