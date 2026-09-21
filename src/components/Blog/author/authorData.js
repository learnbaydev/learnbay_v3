// Static copy for the author profile page. The rules and sources are the same
// for every writer; everything author-specific comes from src/lib/blog/authors.js
// and the posts themselves.

export const AUTHOR_IMG = '/images/blogs-author';
export const LINKEDIN_ICON =
  'https://d32and0ii3b8oy.cloudfront.net/adlearnbay/linkedin.webp';
export const YOUTUBE_URL = 'https://bit.ly/Learnbay_YouTube';
export const LEARNBAY_LINKEDIN = 'https://www.linkedin.com/company/learnbay/';
export const DESK_EMAIL = 'contacts@learnbay.co';

// One colour per beat, used on chips, category labels and the record index.
export const TOPIC_COLORS = {
  comparisons: '#2563eb',
  genai: '#0e9f6e',
  skills: '#ff7a1a',
  careers: '#8b5cf6',
};

export const RULES = {
  always: [
    'Publish the scoring method beside every ranking, so you can disagree with it.',
    "Quote fees from the provider's own page, never from an aggregator.",
    'Name the source on every figure, with the year it was measured.',
    "Say plainly who a program is not for, including Learnbay's own.",
  ],
  never: [
    'Take payment, affiliate commission or placement to move a program up a list.',
    'Quote a salary average without showing the range underneath it.',
    'Recommend a Learnbay program where another provider fits the reader better.',
    "Publish a number that can't be traced back to a named source.",
  ],
};

export const SOURCES = [
  {
    value: '1.25M+',
    text: 'AI professionals India needs by 2027, up from roughly 650,000 in 2022.',
    name: 'Deloitte & NASSCOM',
    kind: 'Industry study',
    accent: 'rgba(37, 99, 235, 0.75)',
  },
  {
    value: '2.3M',
    text: 'AI job openings projected by 2027, against a supply of about 1.2M.',
    name: 'Bain & Company',
    kind: 'Consulting research',
    accent: 'rgba(37, 99, 235, 0.75)',
  },
  {
    value: '62%',
    text: 'Pay premium for AI skills, up five points. AI roles grew 69% against 9% overall.',
    name: 'PwC AI Jobs Barometer',
    kind: '2026 edition',
    accent: 'rgba(124, 58, 237, 0.75)',
  },
  {
    value: '4M',
    text: 'AI-related jobs India could add by 2031, while IT services shrinks toward 6M.',
    name: 'NITI Aayog',
    kind: 'Government roadmap, Oct 2025',
    accent: 'rgba(124, 58, 237, 0.75)',
  },
  {
    value: '33%',
    text: 'Year-on-year growth in AI and ML roles — the fastest-moving segment.',
    name: 'Naukri JobSpeak Index',
    kind: 'July 2026',
    accent: 'rgba(18, 160, 216, 0.75)',
  },
  {
    value: '1,165%',
    text: 'Year-on-year growth in Forward Deployed Engineer roles during 2026.',
    name: 'Live Data Technologies',
    kind: 'Labour-market tracking',
    accent: 'rgba(18, 160, 216, 0.75)',
  },
  {
    value: '$52.6B',
    text: 'Projected size of the AI agents market by 2030, from $7.84B in 2025.',
    name: 'MarketsandMarkets',
    kind: 'Vendor forecast',
    accent: 'rgba(255, 122, 26, 0.75)',
  },
  {
    value: '$15.6B',
    text: 'Projected LLMOps software market by 2030, at 21.6% CAGR.',
    name: 'The Business Research Company',
    kind: 'Vendor forecast',
    accent: 'rgba(255, 122, 26, 0.75)',
  },
  {
    value: 'Ranges',
    text: 'Salary bands by role and seniority, reported as ranges because averages hide the median.',
    name: 'Glassdoor, AmbitionBox & Naukri',
    kind: 'Aggregated pay data',
    accent: 'rgba(14, 159, 110, 0.75)',
  },
];
