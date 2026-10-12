'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.css';
import VideoPopup from '@/components/Global/VideoPopup/VideoPopup';
import { FILTERS, REVIEWS, SCORES } from './reviewsData';

function Stars({ count }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M7 1.2l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.4 3.4 12.3l.7-4L1.2 5.5l4-.6L7 1.2Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

function Who({ review }) {
  return (
    <div className={styles.who}>
      {review.avatar ? (
        <Image
          src={review.avatar}
          alt=""
          width={34}
          height={34}
          className={styles.avatar}
        />
      ) : null}
      <div className={styles.whoCopy}>
        <strong>{review.author}</strong>
        <span>{review.role}</span>
      </div>
    </div>
  );
}

function Card({ review, onPlay }) {
  if (review.type === 'video') {
    return (
      <article className={`${styles.card} ${styles.videoCard}`}>
        <button
          type="button"
          className={styles.videoButton}
          onClick={() => onPlay(review.youtubeId)}
        >
          <span className={styles.stillWrap}>
            <Image
              src={review.thumb}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className={styles.still}
            />
          </span>
          <span className={styles.videoCaption}>
            <strong>{review.author}</strong>
            <span>{review.role}</span>
          </span>
          <span className={styles.srOnly}>
            Play video testimonial from {review.author}
          </span>
        </button>
      </article>
    );
  }

  if (review.type === 'rating') {
    return (
      <article className={`${styles.card} ${styles.pad}`}>
        <p className={styles.scoreValue}>
          {review.value}
          {review.outOf ? <span className={styles.outOf}>{review.outOf}</span> : null}
        </p>
        {review.stars ? <Stars count={review.stars} /> : null}
        <div className={styles.nameBlock}>
          <h3 className={styles.platformName}>{review.name}</h3>
          <p className={styles.platformNote}>{review.note}</p>
        </div>
      </article>
    );
  }

  if (review.type === 'transition') {
    return (
      <article className={`${styles.card} ${styles.pad}`}>
        <p className={styles.hike}>
          <span className={styles.hikeValue}>{review.hike}</span>
          <span className={styles.hikeLabel}>hike</span>
        </p>
        <div className={styles.fromTo}>
          <s className={styles.from}>{review.from}</s>
          <p className={styles.to}>
            <svg viewBox="0 0 20 20" className={styles.toArrow} aria-hidden="true">
              <path
                d="M3.5 10h13M11 4.5 16.5 10 11 15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {review.to}
          </p>
        </div>
        <Who review={review} />
      </article>
    );
  }

  // Written review
  return (
    <article className={`${styles.card} ${styles.pad}`}>
      <p className={styles.source}>{review.source}</p>
      <Stars count={review.stars} />
      <blockquote className={styles.quote}>{review.quote}</blockquote>
      <Who review={review} />
    </article>
  );
}

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const [playingId, setPlayingId] = useState(null);
  const visible =
    filter === 'all' ? REVIEWS : REVIEWS.filter((r) => r.type === filter);

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.headRow}>
        <header className={styles.head}>
          <p className={styles.kicker}>Reviews</p>
          <h2 className={styles.title}>
            1,000+ reviews.
            <span className={styles.titleAccent}>Straight from our alumni.</span>
          </h2>
          <p className={styles.lede}>
            Written, filmed and rated on independent platforms.
          </p>
        </header>

        <dl className={styles.scores}>
          {SCORES.map((score) => (
            <div key={score.label} className={styles.score}>
              <dt className={styles.scoreNum}>{score.value}</dt>
              <dd className={styles.scoreLabel}>{score.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.filters} role="tablist" aria-label="Filter reviews">
        {FILTERS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={filter === tab.id}
            className={`${styles.filter} ${filter === tab.id ? styles.filterActive : ''}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={filter === 'all' ? styles.masonry : styles.grid}>
        {visible.map((review) => (
          <Card key={review.id} review={review} onPlay={setPlayingId} />
        ))}
      </div>

      <VideoPopup
        triggers={Boolean(playingId)}
        setTriggers={() => setPlayingId(null)}
        ids={playingId}
      />

      <p className={styles.footnote}>
        Salary-hike figures are self-reported by alumni and indicative. Reviews
        are quoted from the platform named on each card. Video testimonials are
        from Learnbay alumni across all programmes.
      </p>
    </section>
  );
}
