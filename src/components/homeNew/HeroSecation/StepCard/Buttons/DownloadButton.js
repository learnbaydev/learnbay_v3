import { useState } from "react";
import { Loader2, Download } from "lucide-react";
import styles from "./buttons.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

/**
 * @param {{ toast: function }} props
 */
export default function DownloadButton({
  toast,
  dataScience,
  radio,
  dataScienceCounselling,
  interstedInHide,
  idss,
  btnHide,
  dataScienceGeneric,
}) {
  const [loading, setLoading] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const scrollToCourseSection = () => {
    const section = document.getElementById("course-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={scrollToCourseSection}
        disabled={loading}
        className={`${styles.button} ${styles.downloadButton}`}
      >
        {/* {loading ? (
          <Loader2 className={`${styles.icon} ${styles.spin}`} />
        ) : (
          <Download className={styles.icon} />
        )} */}
        Explore Courses
      </button>
    </>
  );
}
