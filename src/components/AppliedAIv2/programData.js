/* Content for the Applied AI Practitioner Program page (2026 redesign).
   Kept beside the components so copy edits never require touching JSX. */

export const BROCHURE_URL =
  'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/IIT_Patna_Applied_AI_Program.pdf';

export const LOGOS = {
  tih: '/applied-ai/tih-logo.png',
  ibm: '/applied-ai/ibm-mark.png',
  startup: '/applied-ai/ai-sparkle.png',
};

export const HERO_FACTS = [
  { value: '4 months', label: '' },
  { value: '100%', label: 'live online + AI Co-Lab' },
  { value: '35+', label: 'AI tools' },
  { value: 'No coding', label: 'required' },
];

export const CREDENTIALS = [
  {
    logo: 'tih',
    title: 'Vishlesan i-Hub Foundation, IIT Patna',
    description: 'Co-credentialled programme certificate',
  },
  {
    logo: 'ibm',
    title: 'IBM Certification',
    description: 'Enterprise-grade data science and AI systems',
  },
  {
    logo: 'startup',
    badge: true,
    title: 'AI Startup Certificate',
    description:
      'Issued on your AI Co-Lab capstone, evaluated by the partner startup',
  },
];
