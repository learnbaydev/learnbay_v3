import styles from "./Certificate.module.css";
import CertificateTabAdvance from "../../CoursePage/Certificate/CertificateTabAdvance";

const Certificate = ({
  NoCertificate,
  data,
  singlecertificate,
  doubleCertificate,
  projectWithCertificate,
  FreshersDoubleCertificate,
  OnlyDS,
  noTabs,
  cyber,
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`}>
      <h2 className={styles.infop}>Globally Recognized Certification Course </h2>
      <CertificateTabAdvance
      singlecertificate={singlecertificate}
      projectWithCertificate={projectWithCertificate}
      FreshersDoubleCertificate={FreshersDoubleCertificate}
      doubleCertificate={doubleCertificate}
        degreeCertificate={data.degreeCertificate}
        projectCertificate={data.projectCertificate}
        microCertificate={data.microCertificate}
        data={data}
        OnlyDS={OnlyDS}
        noTabs={noTabs}
        cyber={cyber}
        
      />
    </div>
  );
};
export default Certificate;
