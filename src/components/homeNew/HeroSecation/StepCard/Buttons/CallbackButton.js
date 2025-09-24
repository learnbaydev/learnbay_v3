import { useState } from "react";
import { Loader2, Phone } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import styles from "./buttons.module.css";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const popupShow = () => {
    setPopups(true);
  };

  const linkAiCoLab = () => {
    router.push("/ai-co-lab");
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
        onClick={linkAiCoLab}
        disabled={loading}
        className={`${styles.button} ${styles.callbackButton}`}
      >
        Explore AI Co-Lab
      </button>
    </>
  );
}
