import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { BLOG_DIR, getPostSlugs } from './posts';
import { getAuthorByName } from './authors';

/**
 * Data for the /blogs index page.
 *
 * Post frontmatter was written for the article page, so its titles are SEO
 * titles and it carries no topic. The index needs shorter card copy and a topic
 * to filter on, so that lives here, keyed by slug. A post can also set the same
 * fields in its own frontmatter (`topic`, `cardLabel`, `cardTitle`, `excerpt`,
 * `evidence`), which wins over this table — so a new post does not need a code
 * change to be listed properly.
 */

export const TOPICS = [
  { id: 'comparisons', label: 'Course comparisons' },
  { id: 'careers', label: 'Careers & hiring' },
  { id: 'genai', label: 'GenAI & agentic AI' },
  { id: 'skills', label: 'Skills & roadmaps' },
];

// The post in the masthead's "Lead story" slot. It is left out of the grid.
export const LEAD_SLUG = 'best-ai-courses-in-india-compared';

const CARD_META = {
  'best-ai-courses-in-india-compared': {
    topic: 'comparisons',
    cardTitle:
      'After comparing 50+ AI courses in India, here are the 9 that stand out.',
    excerpt:
      'Fees, curriculum, certification, projects and placement support compared across the nine programs that actually held up and an honest note on who each one is not for.',
  },
  'ai-jobs-in-india': {
    topic: 'careers',
    cardLabel: 'Hiring data',
    cardTitle:
      "AI hiring trends 2026: six high-value tech roles driving corporate India's growth",
    excerpt:
      "Naukri's JobSpeak index puts AI and ML roles up 33% year on year. These are the six titles absorbing that demand, and what each one actually asks for.",
    evidence: '6 roles mapped',
  },
  'best-ai-courses-in-bangalore-with-placement-assistance': {
    topic: 'comparisons',
    cardTitle: 'Best AI courses in Bangalore 2026: a side-by-side comparison',
    excerpt: 'IISc, Learnbay, Coursera and the rest, on the same axes.',
    evidence: 'Scored on 6 axes',
  },
  'impact-of-ai-on-indias-job-market': {
    topic: 'careers',
    cardLabel: 'AI careers',
    cardTitle: "Impact of AI on India's job market: the 2026 update",
  },
  'agentic-ai-projects-that-get-you-hired': {
    topic: 'genai',
    cardTitle: 'Real-world agentic AI projects that crack interviews in 2026',
  },
  'data-science-roadmap-beginner-to-specialist': {
    topic: 'skills',
    cardTitle: 'Data science roadmap 2026: beginner to specialist, in order',
  },
  'top-generative-ai-skills-to-get-hired': {
    topic: 'skills',
    cardTitle: 'Top generative AI skills to master in 2026 to get hired',
    excerpt: 'The stack that appears in real 2026 job ads, ranked.',
    evidence: 'From live job ads',
  },
  'master-tech-layoffs-survival-skills': {
    topic: 'careers',
    cardLabel: 'AI careers',
    cardTitle: "Tech layoffs survival: four skills big tech can't replace",
    excerpt:
      'Judgement, domain context, evaluation and communication. Why these four keep surviving the cuts, and how to evidence them on a resume.',
    evidence: '4 skills',
  },
  'data-analyst-course-fee-guide': {
    topic: 'comparisons',
    cardTitle: 'Data analyst course fee: a complete cost guide for 2026',
  },
  'agentic-ai-ultimate-guide-to-frameworks-use-cases-and-ethics': {
    topic: 'genai',
    cardTitle: 'A guide to agentic AI frameworks, use cases and ethical issues',
  },
  'how-to-choose-best-ai-course-in-india-with-placement': {
    topic: 'comparisons',
    cardTitle: 'How to pick an AI course in India: the five learning models',
  },
  'accelerate-data-science-careers-in-agentic-ai': {
    topic: 'genai',
    cardTitle: 'Accelerate data science careers in the agentic AI age',
    excerpt: 'Where the analyst role goes once agents take the action.',
    evidence: '29% adoption cited',
  },
  'best-domains-for-data-science-and-ai': {
    topic: 'skills',
    cardTitle: 'Eight best domains for data science and AI in India, 2026',
    excerpt: 'BFSI, healthcare, manufacturing and five more, ranked on demand.',
    evidence: '8 domains ranked',
  },
  'generative-ai-complete-guide': {
    topic: 'genai',
    cardTitle: 'What is generative AI? The complete working definition',
  },
  'latest-data-science-trends': {
    topic: 'skills',
    cardTitle: "Latest trends in data science you can't miss in 2026",
  },
  'top-indian-women-in-ai-global-impact': {
    topic: 'careers',
    cardLabel: 'AI careers',
    cardTitle: 'Nine Indian women in AI breaking barriers with global impact',
  },
  'top-ai-trends': {
    topic: 'careers',
    cardLabel: 'AI careers',
    cardTitle: 'What are the next big trends in AI?',
  },
  '8-most-demanded-data-science-tools': {
    topic: 'skills',
    cardTitle: 'Eight most demanded data science tools in 2026',
  },
  'top-generative-ai-skills-for-genai-practitioners': {
    topic: 'genai',
    cardTitle: 'Top generative AI skills every practitioner should master',
  },
  'best-ai-courses-in-india': { topic: 'comparisons' },
  'best-generative-ai-agentic-ai-courses': { topic: 'comparisons' },
  'top-courses-in-ai-cybersecurity-data-science-ml': { topic: 'comparisons' },
  'how-to-choose-the-right-data-science-program-for-your-career-goals': {
    topic: 'comparisons',
  },
  'step-by-step-generative-ai-learning-path': { topic: 'genai' },
  'tech-non-tech-careers-bangalore-guide': { topic: 'careers' },
  'will-ai-replace-data-scientists': { topic: 'careers' },
};

const DEFAULT_TOPIC = 'careers';

/**
 * Frontmatter dates come in three shapes: ISO (`publishedDate`), `DD/MM/YYYY`
 * and `DD-MM-YYYY`. Returns a timestamp, or 0 when the value is unusable.
 */
export function parsePostDate(value) {
  const raw = String(value || '').trim();
  if (!raw) return 0;

  const dayFirst = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (dayFirst) {
    const [, day, month, year] = dayFirst;
    return Date.UTC(Number(year), Number(month) - 1, Number(day));
  }

  return Date.parse(raw) || 0;
}

// "15 Sept 2026". Formatted at build time so server and client agree.
export function formatPostDate(timestamp) {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

// "7 mins", "10 minutes", "4.5 min" → "7 min", "10 min", "5 min".
function formatReadTime(value) {
  const minutes = parseFloat(String(value || ''));
  return Number.isFinite(minutes) && minutes > 0
    ? `${Math.round(minutes)} min`
    : '';
}

function topicLabel(id) {
  return TOPICS.find((topic) => topic.id === id)?.label || '';
}

function toCard(slug) {
  const { data } = matter(
    fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8')
  );
  const meta = { ...CARD_META[slug] };
  const topic = TOPICS.some((t) => t.id === data.topic)
    ? data.topic
    : meta.topic || DEFAULT_TOPIC;
  // publishedDate is the more reliable of the two where both exist.
  const timestamp =
    parsePostDate(data.publishedDate) || parsePostDate(data.date);
  const author = getAuthorByName(data.author);

  return {
    slug,
    topic,
    label: data.cardLabel || meta.cardLabel || topicLabel(topic),
    title: data.cardTitle || meta.cardTitle || data.title || 'Untitled',
    excerpt: data.excerpt || meta.excerpt || '',
    evidence: data.evidence || meta.evidence || '',
    description: data.description || '',
    image: data.image || null,
    alt: data.alt || data.title || '',
    author: data.author || '',
    authorPhoto: author?.photo || null,
    readTime: formatReadTime(data.readTime),
    timestamp,
    date: formatPostDate(timestamp),
  };
}

/**
 * Everything the index page renders: the lead story, the rest newest first,
 * and topic counts for the filter chips.
 */
export function getBlogListing() {
  const cards = getPostSlugs()
    .map(toCard)
    .sort((a, b) => b.timestamp - a.timestamp);

  const lead =
    cards.find((card) => card.slug === LEAD_SLUG) || cards[0] || null;
  const posts = cards.filter((card) => card !== lead);

  return {
    lead,
    posts,
    totalGuides: cards.length,
    updated: formatPostDate(cards[0]?.timestamp),
    topics: TOPICS.map((topic) => ({
      ...topic,
      count: posts.filter((post) => post.topic === topic.id).length,
    })),
  };
}

/**
 * One author's guides for their profile page, newest first. Matches on the
 * frontmatter `author:` string, and includes the lead story if they wrote it.
 */
export function getAuthorGuides(name) {
  const wanted = String(name || '')
    .trim()
    .toLowerCase();
  if (!wanted) return [];

  return getPostSlugs()
    .map(toCard)
    .filter((card) => card.author.trim().toLowerCase() === wanted)
    .sort((a, b) => b.timestamp - a.timestamp);
}
