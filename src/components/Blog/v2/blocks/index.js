import {
  Callout,
  PullQuote,
  Note,
  Section,
  SpecLine,
  Verdict,
} from './ProseBlocks';
import {
  StatCards,
  ScenarioTable,
  ComparisonMatrix,
  Takeaways,
  Checklist,
  Glossary,
  ProgressStats,
} from './DataBlocks';
import {
  LearnbayStrip,
  LearnbaySplitCard,
  LearnbayDarkBand,
  ReportDownload,
} from './LearnbayBlocks';
import { TopPick } from './TopPick';
import { ProgramLineup } from './ProgramLineup';
import {
  Faq,
  CourseCarousel,
  SuccessStories,
  Reels,
  YouTube,
} from './InteractiveBlocks';

/**
 * Every block an author can place, keyed by its directive name.
 *
 * `prose: true` marks the blocks that wrap markdown children (container
 * directives). The rest are leaf directives that read structured data out of
 * frontmatter via `from=`.
 */
export const BLOCKS = {
  // Prose — :::name{...} ... :::
  callout: { component: Callout, prose: true },
  'pull-quote': { component: PullQuote, prose: true },
  note: { component: Note, prose: true },
  section: { component: Section, prose: true },

  // Structured — ::name{from=key}
  'stat-cards': { component: StatCards },
  'scenario-table': { component: ScenarioTable },
  'comparison-matrix': { component: ComparisonMatrix },
  verdict: { component: Verdict },
  'spec-line': { component: SpecLine },
  takeaways: { component: Takeaways },
  checklist: { component: Checklist },
  faq: { component: Faq },
  glossary: { component: Glossary },
  'progress-stats': { component: ProgressStats },
  'course-carousel': { component: CourseCarousel },
  'success-stories': { component: SuccessStories },
  reels: { component: Reels },
  'learnbay-strip': { component: LearnbayStrip },
  'learnbay-split-card': { component: LearnbaySplitCard },
  'learnbay-dark-band': { component: LearnbayDarkBand },
  'report-download': { component: ReportDownload },
  'top-pick': { component: TopPick },
  'program-lineup': { component: ProgramLineup },

  // Configured entirely by attributes — ::youtube{id=... title="..."}
  youtube: { component: YouTube, attrsOnly: true },
};

export default BLOCKS;
