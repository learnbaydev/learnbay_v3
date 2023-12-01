import { useEffect, useState } from "react";
import React from "react";
// import data from "./DevOpsSecondSectionContent";
import styles from "../DevOpsSecondSection/devOpsSecondSection.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { TbCloudComputing } from "react-icons/tb";
import { PiInfinity } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";








function Gethire() {
 

  return (
    

      <div className={styles.boxmain}>
       

<div className={styles.box1}>
<h4>Project-Based Learning</h4>
<div>
  <div className={styles.box1img}>
<Image
src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-logo-sec.webp"
width={350}
height={100}
loading="lazy"

/>
</div>
<div className={styles.points}>
  <div className={styles.cercle}>
<BsCheckCircle className={styles.checkmark}/> 
<p>Work in an industry like environment and gain practical hands-on experience</p>
</div>
<div className={styles.cercle}>
<BsCheckCircle className={styles.checkmark}/> 
<p>4 Real-World Capstone Projects</p>
</div>
</div>



<div className={styles.firstboxlastimg}>

<Image
src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-devops-min.webp"
width={140}
height={70}
loading="lazy"

/>
</div>
</div>




  
</div>



<div className={styles.box2}>
  <h4>Job Roles You Can Target</h4>
  <div className={styles.dots}>
    <div className={styles.boticon}>
    <TbCloudComputing/>
    <p>Cloud Engineer:  12.5 LPA</p>
    </div>
<div className={styles.boticon}>
<PiInfinity/>
<p>DevOps Engineer:  7.6 LPA</p>
</div>


<div className={styles.boticon}>
<BsPersonGear/>
<p>Solutions Architect:  27 LPA</p>
</div>
</div>
<div className={styles.gamimg}>
<Image
src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-gam-min.webp"
width={340}
height={40}
loading="lazy"

/>
</div>
<div>
  </div>
  <div className={styles.box3limg}>
  <Image
src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-infi-min.webp"
width={140}
height={70}
loading="lazy"

/>
</div>

</div>




<div className={styles.box3}>
<h4>Assured Job Assistance</h4>

<div className={styles.boxicons3}>
<div className={styles.box3icon} >

<div className={styles.box3icons}>
  <BsDisplay className={styles.logo}/>
  <span>Unlimited Interview Calls</span>
</div>
<div className={styles.box3icons}>
  <AiOutlineContainer className={styles.logo}/>
  <span>Resume Building Session</span>
</div>
<div className={styles.box3icons}>
<FaLinkedinIn className={styles.logo}/>
  <span>
  Linkedin Profile Review
  </span>
</div>

<div className={`${styles.box3icons} ${styles.mobile}`}>
<BsPeople  className={styles.logo}/>
  <span>
  Mock Interview Sessions
  </span>
</div>
</div>
<div className={styles.lastimg}>
<Image
src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp"
width={100}
height={80}
loading="lazy"
/>




</div>



</div>

</div>


      </div>
    
  );
}

export default Gethire;
