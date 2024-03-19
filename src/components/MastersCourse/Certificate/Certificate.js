import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({ NoCertificate, data, Imgno, certificatedivide  }) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      <h4 className={styles.infop}>Globally Recognized Degree</h4>

      <CertificateTabAdvance data={data }Imgno ={Imgno } certificatedivide={certificatedivide} />
    </div>
  );
};
export default Certificate;
