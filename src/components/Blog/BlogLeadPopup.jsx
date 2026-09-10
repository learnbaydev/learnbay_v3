import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { getEndPoint } from '@/components/Global/Form/formFunction';
import styles from './BlogLeadPopup.module.css';

// The popup renders through a portal into <body>, outside the article's font
// scope, so it declares the design's two faces itself rather than inheriting
// them.
const display = Plus_Jakarta_Sans({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--lb-font-display',
});

const text = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--lb-font-text',
});

// Same values the site-wide form posts, so submissions stay consistent in the
// getform.io inbox rather than arriving with a second vocabulary.
const EXPERIENCE = [
  'Freshers',
  '1-3 years',
  '3-5 years',
  '5-7 years',
  '7+ years',
];

const DEFAULTS = {
  eyebrow: 'GenAI & Agentic AI Master Program',
  title: 'Not sure this is the right track for you?',
  text: 'Ninety percent of the mistakes people make happen at the matching stage, not the effort stage. One call is usually enough to know.',
  points: [
    'A straight answer on whether your background fits',
    'The full syllabus, framework by framework',
    'Fees, EMI options and the current batch dates',
    'What career support actually covers — and what it doesn’t',
  ],
  formTitle: 'Book a free counselling call',
  formSubtitle: 'No cost, no obligation. Takes 15 minutes.',
  submitCta: 'Book my free call',
  secondaryCta: 'Just show me the program',
  secondaryHref: 'https://www.learnbay.co/genai-and-agentic-ai-master-program',
};

// Best-effort geo enrichment, matching what the site-wide form attaches. A
// failure here must never block the lead, so it resolves to empty strings.
async function fetchLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=bc89c2010abac0');
    if (!response.ok) throw new Error(String(response.status));
    const { country = '', region = '', city = '' } = await response.json();
    return { country, region, city: city || 'Unknown' };
  } catch {
    return { country: '', region: '', city: '' };
  }
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Starts a brochure download, mirroring the site-wide form's helper. The S3
 * bucket already serves these with `Content-Disposition: attachment`, so the
 * anchor click saves the file rather than opening a PDF viewer.
 */
function triggerDownload(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * The blog lead popup. One component for every blog CTA, so the popup only has
 * to be designed once. Copy is overridable per post via `config`.
 *
 * It posts the same FormData keys to the same endpoint as the site-wide form —
 * `getEndPoint` resolves `/blogs/[slug]` to the default destination, which is
 * the one the homepage form uses.
 */
const BlogLeadPopup = ({ open, onClose, config = {} }) => {
  const router = useRouter();
  const content = { ...DEFAULTS, ...config };
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    WorkExperience: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // Close on Escape, and lock the page behind the modal so the article does not
  // scroll under it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const setField = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!EMAIL.test(values.email.trim())) next.email = 'Enter a valid email.';
    // Digits only, ignoring spaces, dashes and a country prefix.
    if (values.phone.replace(/\D/g, '').length < 10)
      next.phone = 'Enter a valid phone number.';
    if (!values.WorkExperience) next.WorkExperience = 'Select your experience.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (submitting || !validate()) return;
    setSubmitting(true);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    formData.append('url', router.asPath);
    formData.append('platform', content.platform || 'Blog');
    if (content.brochure) formData.append('brochureLink', content.brochure);

    const location = await fetchLocation();
    Object.entries(location).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      await fetch(getEndPoint(router.pathname), {
        method: 'POST',
        body: formData,
      });
      // Only after the lead is away — a failed submit should not hand over the
      // brochure.
      if (content.brochure) triggerDownload(content.brochure);
      setDone(true);
    } catch (error) {
      console.error('Lead submission failed:', error);
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className={`${styles.scrim} ${display.variable} ${text.variable}`}
      // Only a click that starts and ends on the scrim itself closes; a drag
      // that ends outside the modal should not dismiss it.
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={styles.modal}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-lead-title"
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.pitch}>
          {content.eyebrow && <p className={styles.eyebrow}>{content.eyebrow}</p>}
          <p className={styles.title} id="blog-lead-title">
            {content.title}
          </p>
          {content.text && <p className={styles.text}>{content.text}</p>}

          {content.points?.length > 0 && (
            <ul className={styles.points}>
              {content.points.map((point, index) => (
                <li className={styles.point} key={index}>
                  <span className={styles.tick} aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.form}>
          {done ? (
            <div className={styles.success}>
              <span className={styles.successTick} aria-hidden>
                ✓
              </span>
              <p className={styles.formTitle}>
                {content.brochure
                  ? 'Thanks — your brochure is downloading.'
                  : 'Thanks — you’re booked in.'}
              </p>
              <p className={styles.formSubtitle}>
                {content.brochure ? (
                  <>
                    If it did not start,{' '}
                    <a href={content.brochure} download>
                      download it here
                    </a>
                    . A counsellor will also call you shortly.
                  </>
                ) : (
                  'A Learnbay counsellor will call you shortly on the number you gave us.'
                )}
              </p>
              <button
                type="button"
                className={styles.secondary}
                onClick={onClose}
              >
                Back to the article
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <p className={styles.formTitle}>{content.formTitle}</p>
              <p className={styles.formSubtitle}>{content.formSubtitle}</p>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="blog-lead-name">
                  Full name
                </label>
                <input
                  id="blog-lead-name"
                  ref={firstFieldRef}
                  className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={setField('name')}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="blog-lead-email">
                  Work email
                </label>
                <input
                  id="blog-lead-email"
                  className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={setField('email')}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="blog-lead-phone">
                  Phone
                </label>
                <input
                  id="blog-lead-phone"
                  className={`${styles.input} ${errors.phone ? styles.invalid : ''}`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={setField('phone')}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="blog-lead-experience">
                  Years of experience
                </label>
                <select
                  id="blog-lead-experience"
                  className={`${styles.select} ${
                    errors.WorkExperience ? styles.invalid : ''
                  }`}
                  name="WorkExperience"
                  value={values.WorkExperience}
                  onChange={setField('WorkExperience')}
                >
                  <option value="">Select</option>
                  {EXPERIENCE.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.WorkExperience && (
                  <p className={styles.error}>{errors.WorkExperience}</p>
                )}
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={submitting}
              >
                {submitting ? 'Sending…' : content.submitCta}
              </button>

              {content.secondaryCta && (
                <a className={styles.secondary} href={content.secondaryHref}>
                  {content.secondaryCta}
                </a>
              )}

              {errors.form && <p className={styles.error}>{errors.form}</p>}

              <p className={styles.finePrint}>
                By submitting you agree to be contacted about Learnbay programs.
                See our <a href="/privacy-policy">privacy policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BlogLeadPopup;
