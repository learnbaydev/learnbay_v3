const trackEvent = async (eventType, data) => {
    await fetch('/api/track', {
      method: 'POST',  // Ensure this is POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eventType, data, timestamp: new Date().toISOString() })
    });
  };
  
  export const trackPageView = (url) => {
    trackEvent('page_view', { url });
  };
  
  export const trackClick = (element, additionalData = {}) => {
    trackEvent('click', { element, ...additionalData });
  };
  