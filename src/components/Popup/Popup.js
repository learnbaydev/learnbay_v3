import Image from "next/image";
import Link from "next/link";
import { BsRobot } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import styles from "./Popup.module.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
     
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
       
          <div className={styles.whiteDiv}>
            <h3>Get Scholarship upto</h3>
            <span className={styles.OFF}>30% OFF</span>
          </div>

          {/* Middle TagLine */}
          <div className={styles.tagLine}>
            <p>
              on all Our <span>Course</span>
            </p>
          </div>

          {/* Bottom Gradient Div */}
          <div className={styles.gradientDiv}>
            <p className={styles.batch}>Batch Details</p>
           <div className={styles.batchDiv}>
           <p className={styles.offerText}>
            Weekend Batch : <span>9:30 AM - 1 PM</span> 
            </p>
            <p className={styles.offerText}>
            Weekday Batch : <span>8:00 PM - 10:30 PM</span> 
            </p>
           </div>
            <Link href="/submit-info" target="_blank">
              <div className={styles.buttonDiv}>
                <button>Apply for Scholarship Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
