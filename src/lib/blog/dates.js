/**
 * Blog date rule: every date a reader sees is `DD/MM/YYYY`.
 *
 * Frontmatter is typed by hand and has drifted between `DD/MM/YYYY`,
 * `DD-MM-YYYY` and ISO, so dates are never shown raw — they are parsed here
 * and re-formatted, whatever shape the post was written in.
 */

// Frontmatter dates come in three shapes: ISO (`publishedDate`), `DD/MM/YYYY`
// and `DD-MM-YYYY`. An unquoted ISO date reaches us as a Date object, as YAML
// parses it. Returns a timestamp, or 0 when the value is unusable.
export function parsePostDate(value) {
  if (value instanceof Date) return value.getTime() || 0;

  const raw = String(value || '').trim();
  if (!raw) return 0;

  const dayFirst = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (dayFirst) {
    const [day, month, year] = dayFirst.slice(1).map(Number);
    const timestamp = Date.UTC(year, month - 1, day);
    // Date.UTC rolls 31/02 over into March; reject it instead.
    return new Date(timestamp).getUTCDate() === day && month <= 12
      ? timestamp
      : 0;
  }

  return Date.parse(raw) || 0;
}

// "28/09/2026". Formatted at build time, in India time, so server and client
// agree and an ISO `+05:30` midnight does not slip to the previous day.
export function formatPostDate(timestamp) {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

/**
 * A post's frontmatter date, ready to display. A date that is present but
 * cannot be read fails the build, so a typo never reaches the page.
 */
export function displayPostDate(value, slug) {
  if (value === undefined || value === null || value === '') return '';

  const timestamp = parsePostDate(value);
  if (!timestamp) {
    throw new Error(
      `Blog "${slug}": date "${value}" is not a valid date. Use DD/MM/YYYY.`
    );
  }
  return formatPostDate(timestamp);
}
