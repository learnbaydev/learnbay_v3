import { useState } from "react";
import { Loader2, Phone } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import styles from "./buttons.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

/**
 * @param {{ toast: function }} props
 */
export default function CallbackButton({
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

  return (
    <>
      <PopupContent
        dataScience={dataScience}
        radio={radio}
        dataScienceCounselling={dataScienceCounselling}
        dataScienceGeneric={dataScienceGeneric}
        popups={popups}
        setPopups={setPopups}
        interstedInHide={interstedInHide}
        idss={idss}
        btnHide={btnHide}
        heading="Apply For Counselling"
      />
      <button
        onClick={popupShow}
        disabled={loading}
        className={`${styles.button} ${styles.callbackButton}`}
      >
        {loading ? (
          <Loader2 className={`${styles.icon} ${styles.spin}`} />
        ) : (
          <Phone className={styles.icon} />
        )}
        Get Expert Callback
      </button>
    </>
  );
}
