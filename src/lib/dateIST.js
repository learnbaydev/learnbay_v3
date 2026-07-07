// Current date in India Standard Time as DD-MM-YYYY (the format existing posts
// use for `date` / `publishedDate`). Intl works on both server and client, so
// the editor preview and the server publish-stamp agree.

export function istDateDDMMYYYY(d = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).formatToParts(d);
  const get = (t) => parts.find((p) => p.type === t)?.value || '';
  return `${get('day')}-${get('month')}-${get('year')}`;
}
