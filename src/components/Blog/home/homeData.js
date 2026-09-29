// Static copy for the /blogs index. Article cards come from the posts
// themselves (see src/lib/blog/listing.js); everything here is editorial.

const IMG = 'https://d32and0ii3b8oy.cloudfront.net/adlearnbay';

export const YOUTUBE_URL = 'https://bit.ly/Learnbay_YouTube';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/learnbay/';

export const DESK_COUNTERS = [
  {
    value: '26',
    label: 'Guides live across GenAI, data science, careers and courses',
  },
  {
    value: '4',
    label: 'Topic tracks: GenAI, skills & roadmaps, careers, course guides',
  },
  { value: '16', label: 'Guides you can finish in 10 minutes or less' },
  { value: '0', label: 'Paywalls or sign-ups needed to read any of them' },
];

// `id` is the YouTube video id; videos play in place on the page.
export const FEATURE_VIDEO = {
  id: 'l3kTUSs0hwo',
  title: "Best AI course in India? I ranked all 9 so you don't have to",
  meta: '13K views · 1 month ago',
  duration: '6:45',
  thumb: `${IMG}/yt-feature.webp`,
  pairsWithLead: true,
};

export const VIDEOS = [
  {
    id: 'Wose3RVr6PI',
    title:
      'Best AI course in Bangalore 2026, honestly ranked: IISc vs Learnbay vs Coursera',
    meta: '732 views',
    duration: '5:33',
    thumb: `${IMG}/yt-1.webp`,
  },
  {
    id: 'SO-1ISCMi0M',
    title: 'Best AI course in Delhi, Gurugram or Noida? The top five for 2026',
    meta: '90 views · 4 days ago',
    duration: '5:49',
    thumb: `${IMG}/yt-2.webp`,
  },
  {
    id: 'NAj_osxB68Y',
    title:
      'E-commerce data analytics project end to end in Python, full live class',
    meta: '257 views',
    duration: '1:38:39',
    thumb: `${IMG}/yt-3.webp`,
  },
  {
    id: 'XOZDtUthezg',
    title:
      'Best AI course in Hyderabad 2026: how to choose the right one for you',
    meta: '396 views',
    duration: '5:31',
    thumb: `${IMG}/yt-4.webp`,
  },
  {
    id: 'DJEMnze7EHw',
    title:
      'From mechanical engineer to data science and AI: a real transition story',
    meta: '298 views',
    duration: '2:52',
    thumb: `${IMG}/yt-5.webp`,
  },
];

export const PROGRAMS = [
  {
    title: 'GenAI & Agentic AI Certification',
    gradient: 'linear-gradient(158deg, #5b57e8 14%, #2563eb 86%)',
    meta: '9 months • Live + hybrid',
    audience: 'For engineers building GenAI & agentic AI systems',
    points: [
      'Role tracks for SDE, Cloud & DevOps or Data Analyst.',
      'Domain electives in BFSI, retail and manufacturing.',
      'Two months of domain electives and live projects.',
    ],
    href: '/genai-and-agentic-ai-master-program',
  },
  {
    title: 'Forward Deployed AI Engineer',
    gradient: 'linear-gradient(158deg, #12a97a 14%, #06333a 86%)',
    meta: '12 months • Live + hybrid',
    audience:
      'For engineers delivering enterprise AI from design to deployment',
    points: [
      'Advanced RAG, enterprise AI and agentic engineering.',
      'Tracks in Software & SaaS, Data & Analytics, Cloud.',
      'Optional DSA track for product-company interviews.',
    ],
    href: '/artificial-intelligence/forward-deployed-engineer-course',
  },
  {
    title: 'Advanced Data Science & ML',
    gradient: 'linear-gradient(158deg, #3b63de 14%, #172f80 86%)',
    meta: '12 months • Live + hybrid',
    audience: 'For tech professionals going deep on modelling',
    points: [
      'Hiring prep begins in month 5, mid-programme.',
      'Statistics, ML and deep learning, then domain specialisation.',
      'Electives in NLP, computer vision or R.',
    ],
    href: '/datascience/advance-data-science-certification-courses',
  },
  {
    title: 'AI-Powered Cloud & DevOps',
    gradient: 'linear-gradient(158deg, #12a0d8 14%, #0a4463 86%)',
    meta: '9 months • Live + hybrid',
    audience: 'For engineers building and operating AI infrastructure at scale',
    points: [
      'Role-based specialisation across cloud and DevOps.',
      'Pipelines, infrastructure, reliability and cost at scale.',
      'IBM and Microsoft certification track.',
    ],
    href: '/cloud-and-devops/ai-powered-cloud-devops-masters-certification',
  },
  {
    title: 'Applied AI & Business Analytics',
    gradient: 'linear-gradient(158deg, #f5822a 14%, #a8390d 86%)',
    meta: '9 months • No coding needed',
    audience: 'For professionals using AI to solve business problems',
    points: [
      'No prior coding experience required.',
      'For BAs, BFSI, marketing, supply chain, HR and consulting.',
      'Career readiness begins in month 5.',
    ],
    href: '/artificial-intelligence/applied-ai-practitioner-program',
  },
];

export const PROMO_HREF = '/genai-and-agentic-ai-master-program';

export const PROMO_FEATURES = [
  {
    icon: '⚙',
    title: 'Learn it for your role',
    text: 'Pick a track: SDE, Cloud & DevOps, or Data Analyst.',
  },
  {
    icon: '✎',
    title: 'Build on real domain problems',
    text: 'Two months of electives and live projects in BFSI, retail or manufacturing.',
  },
  {
    icon: '▶',
    title: '300+ hours, all live',
    text: 'Taught in real time, so you can ask questions, not rewind videos.',
  },
  {
    icon: '✓',
    title: 'Backed after you finish',
    text: 'Career support for up to 3 years. Certified by IBM, Microsoft & IIT Patna.',
  },
];

export const PROMO_SUMMARY = [
  { label: 'Duration', value: '9 months' },
  { label: 'Format', value: '100% live, weekday or weekend' },
  { label: 'Live teaching', value: '300+ hours' },
  { label: 'Certification', value: 'IBM, Microsoft, IIT Patna' },
  { label: 'Career support', value: 'Up to 3 years' },
  { label: 'Fee', value: 'On the program page →', href: PROMO_HREF },
];

// 20 portraits across three rows of twelve, wrapping round the set, so the wall covers wide screens.
const PORTRAITS = Array.from(
  { length: 20 },
  (_, i) => `${IMG}/alumni-${i}.webp`
);
export const ALUMNI_ROWS = [0, 9, 18].map((start) =>
  Array.from(
    { length: 12 },
    (_, i) => PORTRAITS[(start + i) % PORTRAITS.length]
  )
);

export const RATINGS = [
  { value: '4.69', label: 'SwitchUp' },
  { value: '4.52', label: 'Course Report' },
  { value: '9,000+', label: 'career transitions' },
];

export const QUOTES = [
  {
    hike: '+230% hike',
    quote:
      'Right from enrolment to getting a good job, they keep putting enormous efforts.',
    name: 'Shravanthi A.',
    role: 'Mechanical engineering → Data Scientist, TCS',
    source: 'Course Report',
    avatar: `${IMG}/quote-1.webp`,
  },
  {
    quote:
      "Learnbay doesn't promise magic shortcuts, but their support system genuinely helps.",
    name: 'Afreen',
    role: 'Verified learner review',
    source: 'Trustpilot',
    avatar: `${IMG}/quote-2.webp`,
  },
  {
    quote:
      'You can take the modules any number of times, switch to any batch without hassle.',
    name: 'Dhivya K.',
    role: 'Working professional',
    source: 'SwitchUp',
    avatar: `${IMG}/quote-3.webp`,
  },
];

export const EMPLOYERS = [
  'Microsoft',
  'Samsung',
  'Deloitte',
  'Bosch',
  'J.P. Morgan',
  'KPMG',
  'Genpact',
  'TCS',
].map((name, i) => ({ name, logo: `${IMG}/employer-${i}.webp` }));

export const CLOSING_STATS = [
  { value: '35,000+', label: 'Learners upskilled since 2015' },
  { value: '350+', label: 'Companies in the hiring network' },
  { value: '129%', label: 'Average salary hike, self-reported' },
  { value: '3 yrs', label: 'Longest career-support window' },
];

export { IMG };
