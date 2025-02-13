import Image from "next/image";
import styles from "./CertificationCard.module.css";

const CertificationCard = ({
  title,
  subtitle,
  points = [],
  newBadge = true,
  imageSrc,
  imageAlt = "Certification Image",
}) => {
  return (
    <div className={styles.card}>
      {newBadge && <div className={styles.newBadge}>New</div>}
      <div className={styles.cardBody}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={100}
          className={styles.image}
        />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.pointsList}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className={styles.buttonGroup}>
          <button className={styles.viewDetails}>View Details</button>
          <button className={styles.brochure}>Brochure</button>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default CertificationCard;
