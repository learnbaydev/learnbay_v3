import Image from "next/image";
import Button from "../../Global/Button/Button";
import styles from "./FirstSection.module.css";
import { FaPlay } from "react-icons/fa";

const FirstContent = ({
  firstToparaImg,
  firstHeading,
  cityParaCont,
  FirstRightImg,
}) => {

  return (
    <>
     <div className={styles.First}>
  <div className={styles.FirstLeft}>
    <h1 className={styles.h1}>
      {firstHeading.split(' ').map((word, index) => (
        <span key={index} style={index === 1 ? { color: 'red' } : {}}>
          {word}{' '}
        </span>
      ))}
    </h1>
    <p className={styles.ptopCiity}>{cityParaCont}</p>
    <div className={styles.animationTextWrap}></div>
    <div className={styles.btnImage}>
      <div>
        <Button outline={true} text="Explore Free Courses" />
      </div>
      <div>
        <Button ButtonWhiteBg={true} text="Get Recommendation" />
      </div>
    </div>
  </div>
  <div className={styles.secondLeft}>
    <div className="bgImg">
      <Image
        src={FirstRightImg}
        fill={true}
        style={{ objectFit: "contain" }}
        alt="data science course"
        priority
        quality={55}
      />
    </div>
  </div>
</div>

    </>
  );
};

export default FirstContent;
