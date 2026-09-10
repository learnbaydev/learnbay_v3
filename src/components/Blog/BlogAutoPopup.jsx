import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { hasSeenPopup, markPopupSeen } from './popupSession';

const BlogLeadPopup = dynamic(() => import('./BlogLeadPopup'));

// Fire once the reader is a fifth of the way in — far enough to show intent,
// early enough that they are still reading.
const THRESHOLD = 0.2;

/**
 * Opens the blog lead popup once the reader has scrolled past `THRESHOLD`.
 *
 * Session-gated through the shared `hasSeenPopup` flag, so it shows at most
 * once per session and never stacks with the site-wide popup.
 */
const BlogAutoPopup = ({ config }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasSeenPopup()) return;

    let frame = null;

    const check = () => {
      frame = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      // Nothing to scroll means nothing to measure — a post shorter than the
      // viewport should not trigger on load.
      if (scrollable <= 0) return;

      if (doc.scrollTop / scrollable >= THRESHOLD) {
        // Mark it seen the moment it opens, matching the site-wide popup: a
        // reader who dismisses it must not have it come back.
        markPopupSeen();
        setOpen(true);
        cleanup();
      }
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(check);
    };

    function cleanup() {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, []);

  if (!open) return null;

  return (
    <BlogLeadPopup
      open={open}
      onClose={() => setOpen(false)}
      config={config || {}}
    />
  );
};

export default BlogAutoPopup;
