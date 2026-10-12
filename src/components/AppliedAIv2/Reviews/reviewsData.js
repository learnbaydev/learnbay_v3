/* Review cards. `type` drives both the card layout and the filter tabs.
   Video entries are real Learnbay alumni testimonials: `youtubeId` plays in the
   shared VideoPopup, `thumb` is the branded still already on the CDN. Sourced
   from src/CityData/Kochi/DSKochiData.js.

   The Shubham and Jaya transition cards come from the same alumni data: their
   hike figures are the `statLogo` values, and the from/to roles are the ones
   stated in their own testimonial copy. */

export const SCORES = [
  { value: '4.69', label: 'SwitchUp' },
  { value: '4.52', label: 'Course Report' },
  { value: '9,000+', label: 'Transitions' },
];

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'written', label: 'Written' },
  { id: 'video', label: 'Video' },
  { id: 'rating', label: 'Platform ratings' },
  { id: 'transition', label: 'Transitions' },
];

/* Four of each type, so each single-type tab fills one row of the grid.
   The All tab is a 4-column masonry that fills column by column in this
   order (roughly 4 cards per column), so the list is shuffled to give every
   column a mix of types at different heights. */
export const REVIEWS = [
  {
    id: 'google-score',
    type: 'rating',
    value: '4.7',
    outOf: '/5',
    stars: 5,
    name: 'Google',
    note: '2,602 Google reviews',
  },
  {
    id: 'jaya',
    type: 'video',
    youtubeId: 'A-BkcEM0rQM',
    thumb:
      'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/jaya-sinha-thumb.webp',
    author: 'Jaya Sinha',
    role: 'Non-tech to Senior Data Analyst, Amazon · 150% hike',
  },
  {
    id: 'prem',
    type: 'written',
    source: 'Course Report',
    stars: 5,
    quote:
      '“Trainers were working professionals, easy to relate to real use cases.”',
    author: 'Prem Jadhav',
    role: 'Working professional',
    avatar: '/applied-ai/reviews/avatar-prem.png',
  },
  {
    id: 'ritesh',
    type: 'transition',
    hike: '150%',
    from: 'Non-analytics role',
    to: 'Associate Consultant',
    author: 'Ritesh Kumar',
    role: 'Consulting',
    avatar: '/applied-ai/reviews/avatar-ritesh.png',
  },
  {
    id: 'afreen',
    type: 'written',
    source: 'Trustpilot',
    stars: 5,
    quote:
      '“Learnbay doesn’t promise magic shortcuts, but their support system genuinely helps.”',
    author: 'Afreen',
    role: 'Verified learner review',
    avatar: '/applied-ai/reviews/avatar-afreen.png',
  },
  {
    id: 'shravanthi-hike',
    type: 'transition',
    hike: '230%',
    from: 'Mechanical engineering',
    to: 'Data Scientist',
    author: 'Shravanthi A.',
    role: 'TCS',
    avatar: '/applied-ai/reviews/avatar-shravanthi.png',
  },
  {
    id: 'shubham',
    type: 'video',
    youtubeId: 'JoKquvfAhZU',
    thumb:
      'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Shubham-kumar-thumb+.webp',
    author: 'Shubham Kumar',
    role: 'Teaching to Data Analyst, Cendrol · 210% hike',
  },
  {
    id: 'switchup-score',
    type: 'rating',
    value: '4.69',
    outOf: '/5',
    stars: 5,
    name: 'SwitchUp',
    note: 'Independent bootcamp review platform',
  },
  {
    id: 'shubham-hike',
    type: 'transition',
    hike: '210%',
    from: 'Teaching',
    to: 'Data Analyst',
    author: 'Shubham Kumar',
    role: 'Cendrol Technology',
    avatar: 'https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Shubham.webp',
  },
  {
    id: 'course-report-score',
    type: 'rating',
    value: '4.52',
    outOf: '/5',
    stars: 5,
    name: 'Course Report',
    note: '160 verified alumni reviews',
  },
  {
    id: 'shravanthi-quote',
    type: 'written',
    source: 'Course Report',
    stars: 5,
    quote:
      '“Right from enrolment to getting a good job, they keep putting enormous efforts.”',
    author: 'Shravanthi A.',
    role: 'Data Scientist at TCS',
    avatar: '/applied-ai/reviews/avatar-shravanthi.png',
  },
  {
    id: 'preksha',
    type: 'video',
    youtubeId: 'vSjfKdIzUjY',
    thumb:
      'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/preksha-testimonial.webp',
    author: 'Preksha Mishra',
    role: 'Now at HCL · 140% hike',
  },
  {
    id: 'arvind',
    type: 'video',
    youtubeId: 'hewBtR_WoDM',
    thumb:
      'https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/aravind-k-thumb.webp',
    author: 'Arvind Kumar',
    role: 'Now at The Math Company · 150% hike',
  },
  {
    id: 'dhivya',
    type: 'written',
    source: 'SwitchUp',
    stars: 5,
    quote:
      '“You can take the modules any number of times, switch to any batch without hassle.”',
    author: 'Dhivya K.',
    role: 'Working professional',
    avatar: '/applied-ai/reviews/avatar-dhivya.png',
  },
  {
    id: 'five-platforms',
    type: 'rating',
    value: '1,000+',
    name: 'Across five platforms',
    note: 'Google · Trustpilot · Course Report · SwitchUp · Shiksha',
  },
  {
    id: 'jaya-hike',
    type: 'transition',
    hike: '150%',
    from: 'Non-tech role',
    to: 'Senior Data Analyst',
    author: 'Jaya Sinha',
    role: 'Amazon',
    avatar: 'https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Jaya.webp',
  },
];
