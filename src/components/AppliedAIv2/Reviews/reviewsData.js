/* Review cards. `type` drives both the card layout and the filter tabs.
   NOTE: video stills are the placeholders from the design, pending final edits. */

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

export const REVIEWS = [
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
    id: 'course-report-score',
    type: 'rating',
    value: '4.52',
    outOf: '/5',
    stars: 5,
    name: 'Course Report',
    note: '160 verified alumni reviews',
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
    id: 'kush',
    type: 'video',
    duration: '1:48',
    still: '/applied-ai/reviews/still-kush.jpg',
    author: 'Kush Swaroop',
    role: 'Manager to Data Scientist',
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
    id: 'neha',
    type: 'video',
    duration: '2:14',
    still: '/applied-ai/reviews/still-neha.jpg',
    author: 'Neha Dixit',
    role: 'Non-tech Ops to Business Analyst',
  },
  {
    id: 'five-platforms',
    type: 'rating',
    value: '1,000+',
    name: 'Across five platforms',
    note: 'Google · Trustpilot · Course Report · SwitchUp · Shiksha',
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
    id: 'bhagyashree',
    type: 'video',
    duration: '3:02',
    still: '/applied-ai/reviews/still-bhagyashree.jpg',
    author: 'Bhagyashree Koche',
    role: 'IT Support to Data Engineer',
  },
];
