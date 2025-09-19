import React from "react";
import styles from "./WisdomFromLeaders.module.css";

const WisdomFromLeaders = () => {
  const podcastEpisodes = [
    {
      id: 1,
      name: "Saumya Singh",
      thumbnail:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/pod1.webp", // Replace with actual image
      description:
        "Issued by Learnbay and the partner. This certificate proves learning and real-world experience.",
      company: "IBM",
      position: "Software Engineer at",
    },
    {
      id: 2,
      name: "Ankit Biyani",
      thumbnail:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/pod2.webp", // Replace with actual image
      description:
        "Issued by Learnbay and the partner. This certificate proves learning and real-world experience.",
      company: "moneyflo",
      position: "Software Engineer at",
    },
    {
      id: 3,
      name: "Lokap Sahu",
      thumbnail:
        "https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/pod3.webp", // Replace with actual image
      description:
        "Issued by Learnbay and the partner. This certificate proves learning and real-world experience.",
      company: "LanguifyAI",
      position: "Software Engineer at",
    },
  ];

  return (
    <section className={styles.wisdomSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            Wisdom from Founders & AI Leaders
          </h2>
          <p className={styles.subtitle}>
            Learn from visionaries in AI and GenAI. Our podcast offers insights,
            <br />
            growth lessons, and predictions from founders and leaders.
          </p>
          <button className={styles.ctaButton}>Watch All Episodes</button>
        </div>

        {/* Podcast Episodes Grid */}
        <div className={styles.episodesGrid}>
          {podcastEpisodes.map((episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              {/* Thumbnail with Play Button */}
              <div className={styles.thumbnailContainer}>
                <img
                  src={episode.thumbnail}
                  alt={`${episode.name} podcast episode`}
                  className={styles.thumbnailImage}
                />
                <div className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Episode Content */}
              <div className={styles.episodeContent}>
                <h3 className={styles.episodeName}>{episode.name}</h3>
                <p className={styles.episodeDescription}>
                  {episode.description}
                </p>
              </div>

              {/* Company Badge */}
              <div className={styles.companyBadge}>
                <span className={styles.position}>{episode.position}</span>
                <span className={styles.companyName}>{episode.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WisdomFromLeaders;
