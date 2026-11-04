/**
 * Shared "already shown a promo popup this session" flag.
 *
 * Deliberately the same `hasSeenPopup` key the site-wide popup and the DSA
 * popup use, so a reader sees at most one promo popup per session across the
 * whole site rather than one per surface.
 */
export const POPUP_SEEN_KEY = 'hasSeenPopup';

export function hasSeenPopup() {
  try {
    return sessionStorage.getItem(POPUP_SEEN_KEY) === 'true';
  } catch {
    // Safari private mode and cookie-blocking setups throw on access. Treat it
    // as "already seen" so a reader who cannot be tracked is never pestered.
    return true;
  }
}

export function markPopupSeen() {
  try {
    sessionStorage.setItem(POPUP_SEEN_KEY, 'true');
  } catch {
    // Nothing to do — the popup simply is not remembered for this session.
  }
}
