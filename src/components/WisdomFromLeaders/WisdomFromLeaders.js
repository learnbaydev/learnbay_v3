import React from "react";
import styles from "./WisdomFromLeaders.module.css";
import Image from "next/image";

const WisdomFromLeaders = () => {
  const podcastEpisodes = [
    {
      id: 1,
      name: "Gabriel Appleton",
      thumbnail: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/pod--1.webp",
      description:
        "It is so important to have a solid understanding of practical approach and upskilling at the same time.",
      image: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/vnomic.webp",
      position: "Co-Founder and CEO",
      videoUrl: "https://youtu.be/EVJN6zCHISk?si=u-zmbr7y4XthR4Gz",
    },
    {
      id: 2,
      name: "Ankit Biyani",
      thumbnail: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/pod2.webp",
      description:
        "A blend of doing practical projects on the side so that you get exposure to real environments is very important.",
      image: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/monfl.webp",
      position: "Co-Founder and CEO",
      videoUrl: "https://youtu.be/ecMDMS1Jzwo?si=k_ll9alAZueDwIdv",
    },
    {
      id: 3,
      name: "Lokap Sahu",
      thumbnail: "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/pod3.webp",
      description:
        "As a founder I always look for some proof of experience because at the end it makes our work easy.",
      image:
        "https://d32and0ii3b8oy.cloudfront.net/adlearnbay/Languify_ai.webp",
      position: "Co-Founder and CEO",
      videoUrl:
        "https://youtu.be/IxQDWoLAO7Y?si=ryNSOu_2liIA9LtPwatch?v=VIDEO_ID_3",
    },
  ];

  return (
    <section className={styles.wisdomSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.mainTitle}>
            Wisdom from Founders & AI Leaders
          </h3>
        </div>

        {/* Podcast Episodes Grid */}
        <div className={styles.episodesGrid}>
          {podcastEpisodes.map((episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              {/* Thumbnail with Play Button */}
              <div className={styles.thumbnailContainer}>
                <Image
                  src={episode.thumbnail}
                  alt={`${episode.name} podcast episode`}
                  className={styles.thumbnailImage}
                  loading="lazy"
                  quality={100}
                  width={400}
                  height={300}
                />
                <a
                  href={episode.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.playButton}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="white" />
                  </svg>
                </a>
              </div>

              {/* Episode Content */}
              <div className={styles.episodeContent}>
                <h4 className={styles.episodeName}>{episode.name}</h4>
                <p className={styles.episodeDescription}>
                  {episode.description}
                </p>
              </div>

              {/* ↓ V-shaped notch */}
              <div className={styles.vNotch} aria-hidden />

              {/* Company Badge */}
              <div className={styles.companyBadge}>
                <span className={styles.position}>{episode.position}</span>
                <Image
                  src={episode.image}
                  alt={`${episode.name} logo`}
                  className={styles.companyLogo}
                  loading="lazy"
                  quality={100}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.divCenter}>
          <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=h4cxDRlpLPw&list=PLl1gyDCKkiQSpaJhr35hvkFLNBQfMo1Th",
                "_blank"
              )
            }
            className={styles.ctaButton}
          >
            Watch All Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default WisdomFromLeaders;
