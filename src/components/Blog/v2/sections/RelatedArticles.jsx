import { useRef } from 'react';
import Link from 'next/link';
import { PiArrowLeftBold, PiArrowRightBold } from 'react-icons/pi';
import styles from './Sections.module.css';

// Gradient fallbacks for posts with no cover image, cycled so a row of cards
// does not come out all one colour.
const FALLBACKS = [
  'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #0f9788 0%, #0b3b37 100%)',
  'linear-gradient(135deg, #ea6a0d 0%, #7c2d12 100%)',
  'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
];

const RelatedArticles = ({ posts, title = 'Read our next article' }) => {
  const trackRef = useRef(null);

  if (!posts?.length) return null;

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * (track.clientWidth * 0.8),
      behavior: 'smooth',
    });
  };

  return (
    <section className={`${styles.wrap} ${styles.related}`}>
      <div className={styles.relatedHead}>
        <h2 className={styles.relatedTitle}>{title}</h2>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Previous articles"
            onClick={() => scrollBy(-1)}
          >
            <PiArrowLeftBold />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnDark}`}
            aria-label="More articles"
            onClick={() => scrollBy(1)}
          >
            <PiArrowRightBold />
          </button>
        </div>
      </div>

      <div className={styles.track} ref={trackRef}>
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className={styles.card}
          >
            <span
              className={styles.cardThumb}
              style={{
                backgroundImage: post.image
                  ? `url(${post.image})`
                  : post.accent || FALLBACKS[index % FALLBACKS.length],
              }}
            >
              {post.category && (
                <span className={styles.cardTag}>{post.category}</span>
              )}
            </span>
            <span className={styles.cardBody}>
              <span className={styles.cardTitle}>{post.title}</span>
              <span className={styles.cardMeta}>
                {[post.date, post.readTime].filter(Boolean).join(' · ')}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
