import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  PiPlusBold,
  PiPlayFill,
  PiArrowLeftBold,
  PiArrowRightBold,
  PiArrowRightBold as PiMoveArrow,
} from 'react-icons/pi';
import { cssUrl } from '@/lib/blog/cssUrl';
import styles from './Blocks.module.css';

/**
 * Blocks with client-side behaviour: the accordion, the scroll carousel and the
 * click-to-load video embeds.
 */

export function Faq({ data, open }) {
  const items = Array.isArray(data) ? data : [];
  // `open=0` opens the first answer on load; by default everything is closed.
  const [openIndex, setOpenIndex] = useState(
    open === undefined ? null : Number(open)
  );

  if (!items.length) return null;

  return (
    <div className={styles.faq}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
            key={index}
          >
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <PiPlusBold className={styles.faqToggle} aria-hidden />
            </button>
            {isOpen && <div className={styles.faqAnswer}>{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

/**
 * A horizontally scrolling row of course cards. Scrolling is native (so touch
 * and keyboard both work); the arrows just nudge the scroll container.
 */
export function CourseCarousel({ data, title }) {
  const trackRef = useRef(null);
  const items = Array.isArray(data) ? data : data?.items;

  if (!items?.length) return null;

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * (track.clientWidth * 0.8),
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselHead}>
        <p className={styles.carouselTitle}>
          {title || data?.title || 'Learnbay programs'}
        </p>
        <div className={styles.carouselNav}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
          >
            <PiArrowLeftBold />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
          >
            <PiArrowRightBold />
          </button>
        </div>
      </div>

      <div className={styles.carouselTrack} ref={trackRef}>
        {items.map((course, index) => (
          <Link
            href={course.href || '#'}
            className={styles.courseCard}
            key={index}
          >
            {course.tag && <span className={styles.courseTag}>{course.tag}</span>}
            <span className={styles.courseTitle}>{course.title}</span>
            {course.meta && (
              <span className={styles.courseMeta}>{course.meta}</span>
            )}
            <span className={styles.courseFoot}>
              {course.price && (
                <span className={styles.coursePrice}>{course.price}</span>
              )}
              <span className={styles.courseLink}>
                {course.cta || 'View program'}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SuccessStories({ data }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  return (
    <div className={styles.stories}>
      {items.map((story, index) => (
        <figure className={styles.story} key={index}>
          {(story.before || story.after) && (
            <span className={styles.storyMove}>
              {story.before}
              <PiMoveArrow className={styles.storyArrow} aria-label="to" />
              {story.after}
            </span>
          )}
          <blockquote className={styles.storyQuote}>{story.quote}</blockquote>
          <figcaption className={styles.storyPerson}>
            <span
              className={styles.storyPhoto}
              style={
                story.photo ? { backgroundImage: cssUrl(story.photo) } : undefined
              }
            />
            <span>
              <p className={styles.storyName}>{story.name}</p>
              {story.role && <p className={styles.storyRole}>{story.role}</p>}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Reels({ data }) {
  const items = Array.isArray(data) ? data : [];
  if (!items.length) return null;

  return (
    <div className={styles.reels}>
      {items.map((reel, index) => (
        <a
          className={styles.reel}
          key={index}
          href={reel.href}
          target="_blank"
          rel="noopener noreferrer"
          style={
            reel.poster ? { backgroundImage: cssUrl(reel.poster) } : undefined
          }
        >
          <PiPlayFill className={styles.reelPlay} aria-hidden />
          <span className={styles.reelOverlay}>
            <span className={styles.reelTitle}>{reel.title}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

/**
 * Click-to-load YouTube. The iframe is only mounted after the poster is
 * clicked, so a post with several videos does not pull in a player per embed on
 * first paint.
 */
export function YouTube({ id, title, caption, poster }) {
  const [playing, setPlaying] = useState(false);
  if (!id) return null;

  const posterUrl = poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className={styles.video}>
      <div className={styles.videoFrame}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.videoPoster}
            style={{ backgroundImage: cssUrl(posterUrl) }}
            aria-label={`Play video: ${title || id}`}
            onClick={() => setPlaying(true)}
          >
            <span className={styles.videoPlay}>
              <PiPlayFill aria-hidden />
            </span>
          </button>
        )}
      </div>
      {caption && <p className={styles.videoCaption}>{caption}</p>}
    </div>
  );
}
