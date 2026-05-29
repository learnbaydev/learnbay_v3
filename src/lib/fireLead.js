// src/utils/fireLead.js
const LAMBDA_URL =
  'https://adpng36gpycj7ax5wudyewtarm0chijw.lambda-url.eu-north-1.on.aws/';

function getCookie(name) {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : '';
}

function makeEventId() {
  return 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10);
}

export async function fireLead({ email = '', phone = '' } = {}) {
  const eventId = makeEventId();
  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc');

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {}, { eventID: eventId });
  }

  try {
    await fetch(LAMBDA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: 'Lead',
        event_id: eventId,
        event_source_url:
          typeof window !== 'undefined' ? window.location.href : '',
        client_user_agent:
          typeof navigator !== 'undefined' ? navigator.userAgent : '',
        fbp,
        fbc,
        email,
        phone,
      }),
      keepalive: true,
    });
  } catch (err) {
    console.error('Lead CAPI error:', err);
  }
}
