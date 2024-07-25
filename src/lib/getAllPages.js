// lib/getAllPages.js
export function getAllPages() {
    const staticPages = [
      '/',
      '/about',
    
    ];
  
    // Define the dynamic pages you want to include
    const dynamicPages = [
      '/dynamic-page-1',
      '/dynamic-page-2',
      // Fetch these dynamically from your data source or CMS
    ];
  
    // Combine static and dynamic pages
    const allPages = [...staticPages, ...dynamicPages];
  
    // Exclude pages containing 'thank-you' in their URL
    const filteredPages = allPages.filter((url) => !url.toLowerCase().includes('thank-you'));
  
    return filteredPages.map((url) => ({
      loc: url,
      lastmod: new Date().toISOString(), // Adjust according to your logic
      changefreq: 'daily',
      priority: url === '/' ? 1.0 : 0.9,
    }));
  }
  