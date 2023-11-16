import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({
  NoCertificate,
  degreeCertificate,
  projectCertificate,
  data,
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`} id="Degree">
      <h4 className={styles.infop}>Globally Recognized Degree</h4>

      <CertificateTabAdvance
        degreeCertificate={data.degreeCertificate}
        projectCertificate={data.projectCertificate}
        microCertificate={data.microCertificate}
    
        data={data}
      />
    </div>
  );
};
export default Certificate;