import { useEffect, useRef } from 'react';
import styles from './ReadingProgress.module.css';

/**
 * Reading-progress line pinned under the navbar, filling as the reader scrolls.
 *
 * The fill is written straight to the DOM node rather than held in state: a
 * scroll handler that calls setState re-renders the whole post on every frame,
 * which on a 28,000px article is expensive for something purely decorative.
 */
const ReadingProgress = () => {
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    let frame = null;

    const update = () => {
      frame = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      // A post shorter than the viewport has nothing to scroll; leave it empty
      // rather than dividing by zero and jumping to full.
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      fill.style.transform = `scaleX(${clamped})`;
    };

    // Coalesce bursts of scroll events into one write per animation frame.
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Images and lazily-mounted blocks change the page height after load, which
    // changes what a given scroll position means.
    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(onScroll)
        : null;
    observer?.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer?.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Decorative: the scrollbar already conveys this to assistive tech, so it is
  // hidden rather than announced as a live-updating progressbar.
  return (
    <div className={styles.track} aria-hidden="true">
      <span ref={fillRef} className={styles.fill} />
    </div>
  );
};

export default ReadingProgress;
