import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({ NoCertificate, data, Imgno, certificatedivide, isguwati  }) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      {isguwati ?(<>  <h4 className={styles.infop}>Globally Recognized Certification</h4></>):(<>  <h4 className={styles.infop}>Globally Recognized Degree</h4></>)}
    

      <CertificateTabAdvance data={data }Imgno ={Imgno } certificatedivide={certificatedivide} isguwati={isguwati}/>
    </div>
  );
};
export default Certificate;
