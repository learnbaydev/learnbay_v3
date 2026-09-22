import React from 'react';

/* Phosphor-style line icons, inlined so they take the tab's accent colour. */

const paths = {
  bank: 'M3 9.5 12 4l9 5.5M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18',
  heartbeat:
    'M3.5 12h3l1.5-3 2.5 6 2-4.5 1.5 2.5h6M4 12a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 4-5.5 7.5-8 9-2.5-1.5-8-5-8-9Z',
  arrows: 'M4 9h13l-3-3m6 9H7l3 3',
  factory: 'M3 20V10l5 3V10l5 3V10l5 3V6h3v14H3Zm5-4h2m4 0h2',
  users:
    'M9 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 9 11Zm7.5.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM3 19a6 6 0 0 1 12 0m1.5-5.2A5.3 5.3 0 0 1 21 19',
  package: 'M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4',
  sparkle: 'M7 1.5 8.4 5.6 12.5 7 8.4 8.4 7 12.5 5.6 8.4 1.5 7 5.6 5.6 7 1.5Z',
  check: 'M9 12.2l2 2 4.2-4.6',
};

export function DomainIcon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d={paths[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleIcon({ className }) {
  return (
    <svg viewBox="0 0 14 14" className={className} aria-hidden="true">
      <path d={paths.sparkle} fill="currentColor" />
    </svg>
  );
}

export function CheckCircleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d={paths.check}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
