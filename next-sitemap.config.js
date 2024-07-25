// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.learnbay.co/', 
    generateRobotsTxt: false, 
    sitemapSize: 50000,
    outDir: './public', 
    generateIndexSitemap: false, 
    transform: async (config, url) => {
   
      if (url.toLowerCase().includes('Thank-you')) {
        return null; 
      }
  
      const lastModified = new Date().toISOString();
  
      return {
        loc: url,
        lastmod: lastModified,
        changefreq: 'daily',
        priority: url === config.siteUrl ? 1.0 : 0.9,
      };
    },
  };
  