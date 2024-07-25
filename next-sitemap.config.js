// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.learnbay.co/', // Replace with your domain for production
    generateRobotsTxt: true, // (Optional) Generate robots.txt file
    sitemapSize: 50000, // Max number of URLs per sitemap file
    outDir: './public', // Ensure sitemap is output to the public directory
    generateIndexSitemap: false, // Disable sitemap index generation
    transform: async (config, url) => {
      // Exclude URLs containing 'thank-you'
      if (url.toLowerCase().includes('Thank-you')) {
        return null; // This will exclude the URL from the sitemap
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
  