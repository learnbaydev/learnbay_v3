// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.learnbay.co/",
  generateRobotsTxt: false,
  sitemapSize: 50000,
  outDir: "./public",
  generateIndexSitemap: false,
  transform: async (config, url) => {
    const excludedUrls = [
      "thank-you",
      "campaign/dmd",
      "career-apply-now",
      "career-portal",
      "career-report",
      "organic/generic",
      "payment-success",
      "referrals",
      "refund-cancellation-policy",
      "resume-builder",
      "reviews",
      "about-us",
      "contact-us",
      "degree-upgrade",
      "demo",
      "domain",
      "enroll",
      "learning-learnbay",
      "learning-learnbay-select",
      "loan-process",
      "master-application",
      "organic",
      "privacy-policy",
      "submit-info",
      "terms-conditions",
      "verify-certificate",
    ];

    if (
      excludedUrls.some((excludedUrl) =>
        url.toLowerCase().includes(excludedUrl.toLowerCase())
      )
    ) {
      return null;
    }

    const lastModified = new Date().toISOString();

    const fullUrl =
      url.startsWith("http") || url.startsWith("https")
        ? url
        : new URL(url, config.siteUrl).toString();

    const isHomepage = fullUrl === config.siteUrl;

    console.log(
      `URL: ${fullUrl}, Is Homepage: ${isHomepage}, Priority: ${
        isHomepage ? 1.0 : 0.9
      }`
    ); // Debug log

    return {
      loc: fullUrl,
      lastmod: lastModified,
      changefreq: "daily",
      priority: isHomepage ? 1.0 : 0.9,
    };
  },
};
