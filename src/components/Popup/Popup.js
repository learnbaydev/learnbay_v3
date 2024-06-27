import Link from "next/link";
import styles from "./Popup.module.css";
import Image from "next/image";
import { BsRobot } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.close} onClick={onClose}>
        &times;
        </span>
        <div className={styles.ImgDiv}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/IIT_POPUP_IMAGE.webp"
            width={550}
            height={500}
            alt="POPUP"
            className={styles.popupImage}
            loading="lazy"
          />
        </div>
        <div className={styles.popUpdown}>
          <div className={styles.popupdivHead}>
            <h4>Program Benefits:</h4>
            <div className={styles.iconMain}>
              <div className={styles.iconDiv}>
                <BsRobot className={styles.icons} />
                <p>Gen AI module with ChatGPT</p>
              </div>
              <div className={styles.iconDiv}>
                {" "}
                <IoCall className={styles.icons} /> 
                <p>Unlimited Interview Calls</p>
              </div>
            </div>
            <h3>Get 30% Scholarship</h3>
           
          </div>

           <div className={styles.btndiv}>
           <Link href="../submit-info" target="_blank"> 
            <button className={styles.btn}>Apply For Scholarship Now!</button>
            </Link>
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
