import { useMemo, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Navbar from '@/components/Global/Navbar/Navbar';
import {
  AUTHOR_IMG,
  DESK_EMAIL,
  LEARNBAY_LINKEDIN,
  LINKEDIN_ICON,
  RULES,
  SOURCES,
  TOPIC_COLORS,
  YOUTUBE_URL,
} from './authorData';
import styles from './AuthorProfile.module.css';

const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--ap-font-sans',
});

const NUMBER_WORDS = [
  'No',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

const pad = (n) => String(n).padStart(2, '0');
const minutesOf = (readTime) => parseInt(readTime, 10) || 0;
const plural = (n, one, many) => (n === 1 ? one : many);

const Hero = ({ author, guides, beats, activeBeat, onBeat }) => {
  const [firstName, ...rest] = author.name.split(' ');

  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>Writer · The Learnbay desk</p>
        <h1 className={styles.name}>
          <span>{firstName}</span>
          {rest.length > 0 && (
            <span className={styles.nameOutline}>{rest.join(' ')}</span>
          )}
        </h1>

        <p className={styles.rolePill}>
          <img
            src={`${AUTHOR_IMG}/author-live-dot.svg`}
            alt=""
            width={5}
            height={5}
          />
          {author.role || 'Writer, Learnbay'}
        </p>

        <p className={styles.about}>{author.about || author.bio}</p>

        {beats.length > 0 && (
          <div
            className={styles.beats}
            role="group"
            aria-label="Filter by beat"
          >
            {beats.map((beat) => {
              const active = activeBeat === beat.id;
              return (
                <button
                  key={beat.id}
                  type="button"
                  className={`${styles.beat} ${active ? styles.beatActive : ''}`}
                  style={active ? { background: beat.color } : undefined}
                  aria-pressed={active}
                  onClick={() => onBeat(active ? null : beat.id)}
                >
                  <span
                    className={styles.beatDot}
                    style={{ background: active ? '#fff' : beat.color }}
                    aria-hidden
                  />
                  {beat.label}
                  <span className={styles.beatCount}>{beat.count}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className={styles.actions}>
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${styles.btn} ${styles.btnLinkedin}`}
            >
              <img
                src={`${AUTHOR_IMG}/author-linkedin-white.webp`}
                alt=""
                width={16}
                height={16}
              />
              {firstName} on LinkedIn
            </a>
          )}
          {guides.length > 0 && (
            <a href="#record" className={`${styles.btn} ${styles.btnLight}`}>
              Full archive &nbsp;→
            </a>
          )}
          <a
            href={`mailto:${DESK_EMAIL}`}
            className={`${styles.btn} ${styles.btnGhost}`}
          >
            Write to the desk
          </a>
        </div>
      </div>

      <div className={styles.portrait}>
        <img src={author.portrait || author.photo} alt={author.name} />
        <span className={styles.dissolve} aria-hidden />
        <span className={styles.captionChip}>
          <img
            src={`${AUTHOR_IMG}/author-seal.svg`}
            alt=""
            width={12}
            height={12}
          />
          Every byline reviewed by Learnbay career experts
        </span>
      </div>
    </section>
  );
};

const StatStrip = ({ guides, beats, topicLabel }) => {
  const totalMinutes = guides.reduce(
    (sum, g) => sum + minutesOf(g.readTime),
    0
  );
  const longest = guides.reduce(
    (best, g) => (minutesOf(g.readTime) > minutesOf(best?.readTime) ? g : best),
    null
  );

  const stats = [
    {
      value: guides.length,
      label: `${plural(guides.length, 'Guide', 'Guides')} published on this desk`,
    },
    {
      value: `${totalMinutes} min`,
      label: 'Of reading, measured against the published draft',
    },
    {
      value: beats.length,
      label: `${plural(beats.length, 'Beat', 'Beats')} covered across the archive`,
    },
    longest && {
      value: longest.readTime,
      label: `Longest single guide · ${topicLabel(longest.topic)}`,
    },
  ].filter(Boolean);

  return (
    <div className={styles.statStrip}>
      {stats.map((stat) => (
        <div className={styles.stat} key={stat.label}>
          <span className={styles.statValue}>{stat.value}</span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

const DeskSwitcher = ({ writers, current }) => (
  <nav className={styles.desk} aria-label="Writers on the desk">
    <span className={styles.kicker}>The desk</span>
    <div className={styles.writers}>
      {writers.map((writer) => {
        const active = writer.slug === current;
        return (
          <Link
            key={writer.slug}
            href={`/blogs/author/${writer.slug}`}
            className={`${styles.writer} ${active ? styles.writerActive : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className={styles.writerCount}>{writer.count}</span>
            {writer.name}
          </Link>
        );
      })}
    </div>
    <span className={styles.deskNote}>
      {NUMBER_WORDS[writers.length] || writers.length}{' '}
      {plural(writers.length, 'writer', 'writers')}. Nobody else publishes here.
    </span>
  </nav>
);

const Record = ({ guides, topicLabel }) => {
  const [active, setActive] = useState(0);
  const selected = guides[Math.min(active, guides.length - 1)];

  return (
    <section className={styles.record} id="record">
      <div className={styles.container}>
        <p className={styles.kicker}>The record</p>

        {guides.length === 0 ? (
          <p className={styles.recordEmpty}>
            Nothing published under this byline yet.
          </p>
        ) : (
          <div className={styles.recordLayout}>
            <ol className={styles.index}>
              {guides.map((guide, index) => {
                const isActive = guide === selected;
                return (
                  <li key={guide.slug}>
                    <Link
                      href={`/blogs/${guide.slug}`}
                      className={`${styles.row} ${isActive ? styles.rowActive : ''}`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                    >
                      <span className={styles.rowNumber}>{pad(index + 1)}</span>
                      <span className={styles.rowCopy}>
                        <span className={styles.rowTitle}>{guide.title}</span>
                        <span
                          className={styles.category}
                          style={{ color: TOPIC_COLORS[guide.topic] }}
                        >
                          {topicLabel(guide.topic)}
                        </span>
                      </span>
                      <span className={styles.rowMeta}>
                        {[guide.readTime, guide.date]
                          .filter(Boolean)
                          .join(' · ')}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>

            {selected && (
              <aside className={styles.preview} aria-live="polite">
                <div className={styles.previewBanner}>
                  {selected.image && (
                    <img
                      src={selected.image}
                      alt={selected.alt}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className={styles.previewHead}>
                  <span
                    className={styles.kicker}
                    style={{ color: TOPIC_COLORS[selected.topic] }}
                  >
                    {topicLabel(selected.topic)}
                  </span>
                  <span className={styles.position}>
                    <strong>{pad(guides.indexOf(selected) + 1)}</strong> /{' '}
                    {pad(guides.length)}
                  </span>
                </div>
                <h3 className={styles.previewTitle}>{selected.title}</h3>
                {(selected.excerpt || selected.description) && (
                  <p className={styles.previewText}>
                    {selected.excerpt || selected.description}
                  </p>
                )}
                <div className={styles.tags}>
                  {selected.readTime && (
                    <span className={styles.tag}>
                      {selected.readTime} <span>read</span>
                    </span>
                  )}
                  {selected.date && (
                    <span className={styles.tag}>{selected.date}</span>
                  )}
                  {selected.evidence && (
                    <span className={styles.tag}>{selected.evidence}</span>
                  )}
                </div>
                <Link
                  href={`/blogs/${selected.slug}`}
                  className={`${styles.btn} ${styles.btnLight} ${styles.readBtn}`}
                >
                  Read the guide &nbsp;→
                </Link>
              </aside>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const BylineRules = () => (
  <section className={styles.rules}>
    <div className={styles.container}>
      <p className={`${styles.kicker} ${styles.kickerLight}`}>
        What a byline here means
      </p>
      <h2 className={`${styles.d2} ${styles.w680}`}>
        Every ranking shows its method, or it doesn&apos;t run.
      </h2>
      <p className={`${styles.lede} ${styles.ledeLight}`}>
        Most course comparisons are advertising with a byline on top. These are
        the rules this writing is held to, published so you can hold us to them.
      </p>

      <div className={styles.ruleColumns}>
        {[
          { key: 'always', title: 'Always', icon: 'author-check-circle.svg' },
          { key: 'never', title: 'Never', icon: 'author-x-circle.svg' },
        ].map((column) => (
          <div key={column.key}>
            <h3 className={styles.ruleHead}>
              <img
                src={`${AUTHOR_IMG}/${column.icon}`}
                alt=""
                width={24}
                height={24}
              />
              {column.title}
            </h3>
            <ol className={styles.ruleList}>
              {RULES[column.key].map((rule, index) => (
                <li key={rule}>
                  <span className={styles.ruleNumber}>{pad(index + 1)}</span>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Sources = () => (
  <section className={styles.sources}>
    <div className={styles.container}>
      <p className={styles.kicker}>Where the numbers come from</p>
      <h2 className={`${styles.d2} ${styles.onDark} ${styles.w620}`}>
        Nine sources do the heavy lifting.
      </h2>
      <p className={styles.lede}>
        Every figure in these guides traces back to one of these, with the year
        it was measured. If a number here has no source beside it, it
        shouldn&apos;t have been published.
      </p>

      <div className={styles.sourceGrid}>
        {SOURCES.map((source) => (
          <div className={styles.source} key={source.name}>
            <span
              className={styles.sourceAccent}
              style={{ background: source.accent }}
              aria-hidden
            />
            <span className={styles.sourceValue}>{source.value}</span>
            <span className={styles.sourceText}>{source.text}</span>
            <span className={styles.attribution}>
              <strong>{source.name}</strong>
              <span>{source.kind}</span>
            </span>
          </div>
        ))}
      </div>
      <p className={styles.sourceNote}>
        Forecasts are labelled as forecasts. Salary figures are given as ranges
        because averages hide the median. Market-size projections from
        commercial research firms are reported as vendor estimates, not
        measurements.
      </p>
    </div>
  </section>
);

const Elsewhere = ({ author }) => {
  const firstName = author.name.split(' ')[0];
  const profileHandle = author.linkedin
    ? author.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    : null;

  const tiles = [
    {
      title: `${author.name} on LinkedIn`,
      text: 'The shorter weekly read: one hiring signal, one skill worth adding, one honest take on a course claim doing the rounds.',
      cta: author.linkedin
        ? `${profileHandle} →`
        : 'Learnbay page · 25,376 followers →',
      href: author.linkedin || LEARNBAY_LINKEDIN,
      icon: { src: LINKEDIN_ICON, width: 38, height: 38 },
    },
    {
      title: 'The full archive',
      text: `Everything ${firstName} has published on the Learnbay blog, including the older pieces that predate this desk.`,
      cta: 'blog.learnbay.co →',
      href: `https://blog.learnbay.co/author/${author.slug}`,
      icon: { src: `${AUTHOR_IMG}/author-archive.webp`, width: 44, height: 38 },
    },
    {
      title: 'The videos',
      text: 'Several of these guides are filmed on the Learnbay channel by the same people who did the scoring.',
      cta: 'youtube.com/@Learnbay →',
      href: YOUTUBE_URL,
      icon: { src: `${AUTHOR_IMG}/author-youtube.webp`, width: 55, height: 38 },
    },
  ];

  return (
    <section className={styles.elsewhere}>
      <div className={styles.container}>
        <p className={`${styles.kicker} ${styles.kickerLight}`}>Elsewhere</p>
        <h2 className={`${styles.d2} ${styles.w680}`}>
          The shorter version runs on LinkedIn.
        </h2>
        <div className={styles.tiles}>
          {tiles.map((tile) => (
            <a
              key={tile.title}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tile}
            >
              <img
                src={tile.icon.src}
                alt=""
                width={tile.icon.width}
                height={tile.icon.height}
              />
              <span className={styles.tileTitle}>{tile.title}</span>
              <span className={styles.tileText}>{tile.text}</span>
              <span className={styles.tileCta}>{tile.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthorProfile = ({ author, guides, topics, writers }) => {
  const [activeBeat, setActiveBeat] = useState(null);

  const topicLabel = (id) => topics.find((t) => t.id === id)?.label || '';

  // Beats this author has written in, busiest first.
  const beats = useMemo(
    () =>
      topics
        .map((topic) => ({
          ...topic,
          color: TOPIC_COLORS[topic.id],
          count: guides.filter((g) => g.topic === topic.id).length,
        }))
        .filter((beat) => beat.count > 0)
        .sort((a, b) => b.count - a.count),
    [topics, guides]
  );

  const visibleGuides = activeBeat
    ? guides.filter((g) => g.topic === activeBeat)
    : guides;

  return (
    <>
      <Navbar popup dataScience interstedInHide />

      <main className={`${styles.page} ${jakarta.variable}`}>
        <Hero
          author={author}
          guides={guides}
          beats={beats}
          activeBeat={activeBeat}
          onBeat={(beat) => {
            setActiveBeat(beat);
            if (beat) {
              document
                .getElementById('record')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        />
        <StatStrip guides={guides} beats={beats} topicLabel={topicLabel} />
        <DeskSwitcher writers={writers} current={author.slug} />
        {/* Remount on filter change so the preview resets to the first row. */}
        <Record
          key={activeBeat || 'all'}
          guides={visibleGuides}
          topicLabel={topicLabel}
        />
        <BylineRules />
        <Sources />
        <Elsewhere author={author} />
      </main>

      <Footer />
    </>
  );
};

export default AuthorProfile;
