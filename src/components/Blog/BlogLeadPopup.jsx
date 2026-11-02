import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PopupContent from '@/components/Global/PopupContent/PopupContent';

/**
 * The blog lead popup: the site's standard popup and form, opened from every
 * blog CTA. `config` sets the heading (`formTitle`), the lead's `platform`, and
 * a gated `brochure` PDF to open once the lead has been sent.
 *
 * Rendered through a portal into <body> so article styles do not reach it.
 */
const BlogLeadPopup = ({ open, onClose, config = {} }) => {
  // Popup only clears its scroll lock when `trigger` goes false, but callers
  // unmount this on close, so the lock has to be cleared here too.
  useEffect(() => {
    if (!open) return undefined;
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const { brochure, formTitle, platform } = config;

  return createPortal(
    <PopupContent
      popups={open}
      setPopups={(next) => {
        if (!next) onClose();
      }}
      heading={
        formTitle || (brochure ? 'Download Syllabus' : 'Apply For Counselling')
      }
      dataScienceCounselling={true}
      upSkillingHide={true}
      downloadBrochure={Boolean(brochure)}
      gatedPdf={brochure}
      leadPlatform={platform || 'Blog'}
    />,
    document.body
  );
};

export default BlogLeadPopup;
