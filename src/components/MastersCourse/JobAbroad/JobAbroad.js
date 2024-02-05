// JobAbroad.js
import Image from 'next/image';
import Styles from './JobAbroad.module.css';
import Link from 'next/link';

const JobAbroad = ({ data, WolfLink  }) => {
  const { title, points, bannerImage } = data;

  return (
    <div>
      <div className={Styles.JobAbroadMain}>
        <h2>{title}</h2>

        <div className={Styles.JobAbroadHead}>
          <div className={Styles.JobAbroadleft}>
            {points.map((point, index) => (
              <div key={index} className={Styles.leftpoints}>
                <div className={Styles.imgBox}>
                  <Image
                    src={point.imgSrc}
                    width={90}
                    height={90}
                    loading="lazy"
                    alt={point.imgAlt}
                  />
                </div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}

            <div className={Styles.consbtn1}>
              <Link href="/master-application">
                <button className={Styles.consbtn}>
                  Start Your Application
                </button>
              </Link>
            </div>
            <>
            {WolfLink ? (
               <p className={Styles.woolfText}>
               Learnbay Excelversity is a constituent college affiliated with{' '}
               <a href="https://woolf.university/academics/college-membership/bb43ed7d-edff-4e25-b530-2e950496519c">
                 <span className={Styles.spanWoolf}>Woolf University, EU</span>
               </a>
             </p>
            ):("")}
           
            </>


          </div>

          <div className={Styles.JobAbroadRight}>
            <Image
              src={bannerImage.src}
              width={bannerImage.width}
              height={bannerImage.height}
              priority={bannerImage.priority}
              quality={bannerImage.quality}
              alt={bannerImage.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbroad;
