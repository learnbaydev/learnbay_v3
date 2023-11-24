import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";

const Certificate = ({
  NoCertificate,
  data,
  singlecertificate
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`}>
      <h4 className={styles.infop}>Globally Recognized Program</h4>
      <CertificateTabAdvance
      singlecertificate={singlecertificate}
        degreeCertificate={data.degreeCertificate}
        projectCertificate={data.projectCertificate}
        microCertificate={data.microCertificate}
        data={data}
      />
    </div>
  );
};
export default Certificate;
