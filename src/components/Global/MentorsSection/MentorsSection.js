import Image from "next/image";
import styles from "./MentorsSection.module.css";

function MentorsSection() {
  const mentorImg = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/puulkit.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/tripti.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/AnkurK.webp",
  ];

  const companyImg = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/kryndal.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paypal.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paytm.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/walmart.webp",
  ];

  const mentorNames = ["Mohit S.", "Pulkit Jain", "Tripti Jain", "Ankur K."];

  return (
    <section className={styles.container}>
      <h4>Meet Our Mentors</h4>
      <p>Guiding You Every Step of the Way Towards Professional Excellence</p>
      <div className={styles.SliderDiv}>
        {mentorImg.map((mentor, index) => (
          <div key={`mentor-${index}`} className={styles.slide}>
            <div className={styles.box}>
              <div>
                <Image
                  src={mentor}
                  width={100}
                  height={100}
                  alt="mentor"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div>
                <p className={styles.Name}>{mentorNames[index]}</p>
                <Image
                  src={companyImg[index]}
                  width={100}
                  height={25}
                  alt="company"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MentorsSection;
