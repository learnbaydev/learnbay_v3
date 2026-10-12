import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { hasSeenPopup, markPopupSeen } from './popupSession';

const BlogLeadPopup = dynamic(() => import('./BlogLeadPopup'));

// Same delay as the site-wide popup in _app.js.
const DELAY_MS = 5000;

/**
 * Opens the blog lead popup `DELAY_MS` after the post loads.
 *
 * Session-gated through the shared `hasSeenPopup` flag, so it shows at most
 * once per session and never stacks with the site-wide popup.
 */
const BlogAutoPopup = ({ config }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasSeenPopup()) return;

    const timer = setTimeout(() => {
      // Re-check in case another popup claimed the session meanwhile.
      if (hasSeenPopup()) return;
      // Mark it seen the moment it opens, matching the site-wide popup: a
      // reader who dismisses it must not have it come back.
      markPopupSeen();
      setOpen(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
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
