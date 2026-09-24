import { useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';

import Navbar from '@/components/Global/Navbar/Navbar';
import { getEndPoint } from '@/components/Global/Form/formFunction';
import ArticleIndex from './ArticleIndex';
import {
  ALUMNI_ROWS,
  CLOSING_STATS,
  DESK_COUNTERS,
  EMPLOYERS,
  FEATURE_VIDEO,
  IMG,
  LINKEDIN_URL,
  PROGRAMS,
  PROMO_FEATURES,
  PROMO_HREF,
  PROMO_SUMMARY,
  QUOTES,
  RATINGS,
  VIDEOS,
  YOUTUBE_URL,
} from './homeData';
import styles from './BlogHome.module.css';

const Footer = dynamic(() => import('@/components/Global/Footer/Footer'));
const BlogLeadPopup = dynamic(() => import('@/components/Blog/BlogLeadPopup'));

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--bh-font-sans',
});

const serif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  variable: '--bh-font-serif',
});

const initials = (name) =>
  String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

const Masthead = ({ lead }) => (
  <section className={styles.masthead}>
    <div className={styles.container}>
      <div className={styles.mastheadCopy}>
        <p className={`${styles.eyebrow} ${styles.onDark}`}>
          The Learnbay Blog · AI, data &amp; tech, explained
        </p>
        <h1 className={styles.d1}>
          Stay ahead in AI and tech, one clear read at a time.
        </h1>
        <p className={`${styles.lede} ${styles.onDark}`}>
          Byte-sized guides on GenAI, agentic AI, data science and the tools
          shaping them, plus the skills, roadmaps and hiring trends that tell
          you what to learn next. Written for working professionals, sourced,
          and free to read.
        </p>
      </div>

      <div className={`${styles.statStrip} ${styles.deskCounters}`}>
        {DESK_COUNTERS.map((item) => (
          <div className={styles.stat} key={item.label}>
            <span className={styles.statValue}>{item.value}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      {lead && (
        <article className={styles.lead}>
          <div className={styles.leadBanner}>
            {lead.image && (
              <>
                <img
                  className={styles.leadFill}
                  src={lead.image}
                  alt=""
                  aria-hidden
                />
                <img src={lead.image} alt={lead.alt} />
              </>
            )}
            <span className={styles.leadChip}>Lead story</span>
          </div>
          <div className={styles.leadCopy}>
            <p className={`${styles.eyebrow} ${styles.onDark}`}>{lead.label}</p>
            <h2 className={styles.d3}>
              <Link href={`/blogs/${lead.slug}`} className={styles.cardLink}>
                {lead.title}
              </Link>
            </h2>
            {lead.excerpt && (
              <p className={styles.leadExcerpt}>{lead.excerpt}</p>
            )}
            <div className={styles.byline}>
              {lead.authorPhoto ? (
                <img
                  className={styles.bylineAvatar}
                  src={lead.authorPhoto}
                  alt=""
                  width={30}
                  height={30}
                />
              ) : (
                <span className={styles.bylineAvatar} aria-hidden>
                  {initials(lead.author)}
                </span>
              )}
              <span>
                {[lead.author, lead.date].filter(Boolean).join(' · ')}
              </span>
              {lead.readTime && (
                <span className={styles.readPill}>
                  <strong>{lead.readTime}</strong> read
                </span>
              )}
            </div>
          </div>
        </article>
      )}
    </div>
  </section>
);

const ALL_VIDEOS = [FEATURE_VIDEO, ...VIDEOS];

const Watch = () => {
  // `order[0]` is the video in the big player; the rest fill the list. Picking
  // a list video swaps it with the one in the player, so the list never
  // reshuffles under the reader's cursor.
  const [order, setOrder] = useState(() => ALL_VIDEOS.map((_, i) => i));
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const current = ALL_VIDEOS[order[0]];
  const listed = order.slice(1).map((index) => ALL_VIDEOS[index]);

  const playFromList = (slot) => {
    setOrder((prev) => {
      const next = [...prev];
      [next[0], next[slot + 1]] = [next[slot + 1], next[0]];
      return next;
    });
    setPlaying(true);
    // On narrow screens the list sits below the player; bring the player back
    // into view so the video is not starting off-screen.
    const player = playerRef.current;
    if (player && player.getBoundingClientRect().top < 0) {
      player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className={styles.dark}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <div className={styles.headCopy}>
            <p className={`${styles.eyebrow} ${styles.onDark}`}>
              On YouTube · @Learnbay
            </p>
            <h2
              className={`${styles.d2} ${styles.onDarkStrong} ${styles.w760}`}
            >
              Prefer to watch? Most guides have a video version.
            </h2>
            <p className={`${styles.lede} ${styles.onDark}`}>
              The desk doesn&apos;t just write the research — it films it.
              Comparisons, roadmaps, live projects and skill breakdowns, made by
              the same people who did the scoring. No slides read aloud.
            </p>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnGhostDark}`}
          >
            Visit the channel &nbsp;→
          </a>
        </div>

        <div className={styles.watchGrid}>
          <div className={styles.featureVideo} ref={playerRef}>
            <div className={styles.featureThumb}>
              {playing ? (
                <iframe
                  key={current.id}
                  className={styles.player}
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&playsinline=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className={styles.playTrigger}
                  onClick={() => setPlaying(true)}
                  aria-label={`Play video: ${current.title}`}
                >
                  <img src={current.thumb} alt="" loading="lazy" />
                  <span className={styles.play} aria-hidden>
                    <img
                      src={`${IMG}/play-button.svg`}
                      alt=""
                      width={74}
                      height={74}
                    />
                    <img
                      className={styles.playGlyph}
                      src={`${IMG}/play-glyph.svg`}
                      alt=""
                      width={18}
                      height={22}
                    />
                  </span>
                  <span className={styles.duration}>{current.duration}</span>
                </button>
              )}
            </div>
            <div className={styles.featureCopy}>
              <h3 className={styles.d3}>{current.title}</h3>
              <p className={styles.featureMeta}>{current.meta}</p>
              {current.pairsWithLead && (
                <p className={styles.pairs}>
                  <strong>Pairs with</strong> the lead story above
                </p>
              )}
            </div>
          </div>

          <ul className={styles.videoList}>
            {listed.map((video, slot) => (
              <li key={video.id}>
                <button
                  type="button"
                  className={styles.videoRow}
                  onClick={() => playFromList(slot)}
                  aria-label={`Play video: ${video.title}`}
                >
                  <span className={styles.videoThumb}>
                    <img src={video.thumb} alt="" loading="lazy" />
                    <span className={styles.durationSmall}>
                      {video.duration}
                    </span>
                  </span>
                  <span className={styles.videoCopy}>
                    <span className={styles.videoTitle}>{video.title}</span>
                    <span className={styles.videoMeta}>{video.meta}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Programs = ({ onCounsel }) => {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    // One card plus its gap per click.
    rail.scrollBy({ left: direction * 392, behavior: 'smooth' });
  };

  return (
    <section className={styles.mist}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <div className={styles.headCopy}>
            <p className={styles.eyebrow}>
              Role-focused cohorts · certified by IBM and Microsoft
            </p>
            <h2 className={`${styles.d2} ${styles.w680}`}>
              If the reading has made up your mind, here&apos;s what we run.
            </h2>
          </div>
          <div className={styles.railNav}>
            <button
              type="button"
              className={styles.railBtn}
              aria-label="Previous programs"
              onClick={() => scrollRail(-1)}
            >
              <img src={`${IMG}/rail-prev.svg`} alt="" width={40} height={40} />
            </button>
            <button
              type="button"
              className={styles.railBtn}
              aria-label="More programs"
              onClick={() => scrollRail(1)}
            >
              <img src={`${IMG}/rail-next.svg`} alt="" width={40} height={40} />
            </button>
            <Link
              href="/data-science-courses"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              All programs &nbsp;→
            </Link>
          </div>
        </div>

        <div className={styles.rail} ref={railRef}>
          {PROGRAMS.map((program) => (
            <Link
              href={program.href}
              className={styles.program}
              key={program.title}
            >
              <span
                className={styles.programHead}
                style={{ backgroundImage: program.gradient }}
              >
                <span className={styles.livePill}>Live Cohort</span>
                <span className={styles.programTitle}>{program.title}</span>
                <span className={styles.certified}>
                  <img src={`${IMG}/seal.svg`} alt="" width={13} height={13} />
                  IBM &amp; Microsoft certified
                </span>
              </span>
              <span className={styles.programBody}>
                <span className={styles.eyebrow}>{program.meta}</span>
                <span className={styles.programAudience}>
                  {program.audience}
                </span>
                <span className={styles.bullets}>
                  {program.points.map((point) => (
                    <span className={styles.bullet} key={point}>
                      <span className={styles.tick} aria-hidden>
                        <img
                          src={`${IMG}/tick.svg`}
                          alt=""
                          width={14.4}
                          height={11.4}
                        />
                      </span>
                      {point}
                    </span>
                  ))}
                </span>
                <span className={styles.programFooter}>
                  View Program
                  <img src={`${IMG}/go.svg`} alt="" width={38} height={38} />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className={styles.feeNote}>
          Fees are listed on each program page and confirmed on a counselling
          call, because the right number depends on the track and the batch you
          join.{' '}
          <button type="button" className={styles.textLink} onClick={onCounsel}>
            Ask a counsellor
          </button>
        </p>

        <div className={styles.promo}>
          <div className={styles.promoCopy}>
            <div className={styles.promoBadges}>
              <span className={styles.badgeFlagship}>★ Flagship program</span>
              <span className={styles.badgeLive}>Live cohort</span>
            </div>
            <p className={`${styles.eyebrow} ${styles.onDarkAccent}`}>
              Done reading? Start building.
            </p>
            <h2 className={styles.promoTitle}>
              Stop reading about AI agents.{' '}
              <span className={styles.promoTitleAccent}>
                Start building them.
              </span>
            </h2>
            <p className={styles.promoText}>
              The <strong>GenAI &amp; Agentic AI Master Program</strong> is for
              working engineers who want to build and ship GenAI and agentic AI
              systems, not just talk about them. It&apos;s 9 months of live
              classes, with weekday or weekend batches that fit around a
              full-time job.
            </p>

            <ul className={styles.promoFeatures}>
              {PROMO_FEATURES.map((item) => (
                <li className={styles.promoFeature} key={item.title}>
                  <span className={styles.promoIcon} aria-hidden>
                    {item.icon}
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnLight}`}
                onClick={onCounsel}
              >
                Check if it fits you: free call &nbsp;→
              </button>
              <Link href={PROMO_HREF} className={styles.promoLink}>
                See the full curriculum
              </Link>
            </div>
            <p className={styles.promoReassure}>
              No payment, no obligation. A counsellor maps your background to
              the right track, and if this program isn&apos;t the right fit,
              they&apos;ll tell you.
            </p>

            <div className={styles.promoRatings}>
              {RATINGS.map((rating) => (
                <span className={styles.promoRating} key={rating.label}>
                  <strong>{rating.value}</strong>
                  {rating.label}
                </span>
              ))}
              <Link href="/reviews" className={styles.promoReviews}>
                Read reviews →
              </Link>
            </div>
          </div>

          <div className={styles.promoSide}>
            <div className={styles.codeWindow} aria-hidden>
              <div className={styles.codeBar}>
                <span />
                <span />
                <span />
                <em>your_first_agent.py</em>
              </div>
              <pre className={styles.code}>
                <span className={styles.codeVar}>agent</span> = Agent({'\n'}
                {'    '}model=
                <span className={styles.codeStr}>&quot;llm&quot;</span>,{'\n'}
                {'    '}tools=[search, sql, email],{'\n'}){'\n'}
                <span className={styles.codeVar}>agent</span>.run(
                <span className={styles.codeStr}>
                  &quot;Summarise last week&apos;s churn&quot;
                </span>
                ){'\n\n'}
                <span className={styles.codeOk}>
                  ✓ plan{'  '}✓ query{'  '}✓ draft
                </span>
              </pre>
            </div>

            <div className={styles.summary}>
              <p className={`${styles.eyebrow} ${styles.onDarkAccent}`}>
                Program at a glance
              </p>
              <dl>
                {PROMO_SUMMARY.map((row) => (
                  <div className={styles.summaryRow} key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>
                      {row.href ? (
                        <Link href={row.href} className={styles.summaryLink}>
                          {row.value}
                        </Link>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className={styles.promoFine}>
            Fees are listed on the program page and confirmed on your call, as
            they depend on track and batch. Placement assistance is included;
            placement is not guaranteed. Durations are indicative and confirmed
            before your batch begins. Ratings are from third-party review
            platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

const Alumni = () => (
  <section className={styles.alumni}>
    <div className={styles.wall} aria-hidden>
      {ALUMNI_ROWS.map((row, rowIndex) => (
        <div
          className={`${styles.wallRow} ${
            rowIndex === 1 ? styles.wallRowLeft : styles.wallRowRight
          }`}
          key={rowIndex}
        >
          {/* The set is rendered twice so the strip can slide by exactly one
              set's width and loop without a visible jump. */}
          {[...row, ...row].map((src, i) => (
            <img key={`${rowIndex}-${i}`} src={src} alt="" loading="lazy" />
          ))}
        </div>
      ))}
      <div className={styles.veil} />
    </div>

    <div className={styles.wallCopy}>
      <p className={styles.eyebrow}>
        1,000+ reviews on platforms we cannot edit
      </p>
      <h2 className={`${styles.d2} ${styles.w600}`}>
        35,000 people read something like this first.
      </h2>
      <p className={`${styles.lede} ${styles.w560}`}>
        Then they enrolled, finished, and changed jobs. Their reviews live on
        SwitchUp, Course Report, Trustpilot, Google and Shiksha none of which we
        control.
      </p>
      <div className={styles.ratings}>
        {RATINGS.map((rating) => (
          <span className={styles.rating} key={rating.label}>
            <strong>{rating.value}</strong> {rating.label}
          </span>
        ))}
      </div>
      <Link href="/reviews" className={`${styles.btn} ${styles.btnPrimary}`}>
        Read the reviews
      </Link>
    </div>

    <div className={`${styles.container} ${styles.quotesWrap}`}>
      <div className={styles.quotes}>
        {QUOTES.map((item) => (
          <figure className={styles.quote} key={item.name}>
            {item.hike && <span className={styles.hike}>{item.hike}</span>}
            <blockquote>“{item.quote}”</blockquote>
            <figcaption className={styles.attribution}>
              <img
                src={item.avatar}
                alt=""
                width={42}
                height={42}
                loading="lazy"
              />
              <span className={styles.attributionName}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </span>
              <span className={styles.quoteSource}>{item.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.disclaimer}>
        Salary-hike figures are self-reported by alumni and indicative. Reviews
        are quoted from the platforms named beside each one.
      </p>
      <ul className={styles.employers} aria-label="Where our alumni work">
        {EMPLOYERS.map((employer) => (
          <li key={employer.name}>
            <img src={employer.logo} alt={employer.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Newsletters = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const subscribe = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    if (!EMAIL.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');

    const formData = new FormData();
    formData.append('email', email.trim());
    formData.append('url', router.asPath);
    formData.append('platform', 'Blog newsletter');

    try {
      await fetch(getEndPoint(router.pathname), {
        method: 'POST',
        body: formData,
      });
      setStatus('done');
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      setStatus('error');
    }
  };

  const hint = {
    invalid: 'Enter a valid email address.',
    error: 'Something went wrong. Please try again.',
    done: "You're on the list. The next issue lands when a guide is updated.",
  }[status];

  return (
    <section className={styles.dark}>
      <div className={styles.container}>
        <p className={`${styles.eyebrow} ${styles.newsEyebrow}`}>
          Two ways to get the next one
        </p>
        <h2 className={styles.newsTitle}>
          Read it here, or let it find you — one honest update a month.
        </h2>

        <div className={styles.panels}>
          <div className={styles.panel}>
            <div className={styles.panelCopy}>
              <p className={`${styles.eyebrow} ${styles.panelEyebrow}`}>
                Email · monthly
              </p>
              <h3 className={styles.d4Dark}>The Desk</h3>
              <p className={styles.panelText}>
                One email, the day a guide changes: a refreshed comparison, a
                new hiring number, or a syllabus that quietly moved. No drip
                sequence after you sign up.
              </p>
            </div>
            <form className={styles.subscribe} onSubmit={subscribe} noValidate>
              <label className={styles.srOnly} htmlFor="blogs-newsletter-email">
                Your work email
              </label>
              <input
                id="blogs-newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== 'sending') setStatus('idle');
                }}
                placeholder="Your work email"
                autoComplete="email"
                disabled={status === 'done'}
              />
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnIndigo}`}
                disabled={status === 'sending' || status === 'done'}
              >
                {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            <p className={styles.panelFine} role="status">
              {hint || 'One email a month. Unsubscribe in one click.'}
            </p>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelCopy}>
              <p className={`${styles.eyebrow} ${styles.panelEyebrow}`}>
                LinkedIn · weekly
              </p>
              <h3 className={styles.d4Dark}>Careers in the AI shift</h3>
              <p className={styles.panelText}>
                A shorter weekly read: one hiring signal worth knowing, one
                skill worth adding, and one course claim we checked so you
                don&apos;t have to.
              </p>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinBadge}
            >
              <img src={`${IMG}/linkedin.webp`} alt="" width={20} height={20} />
              <span>
                <strong>Follow on LinkedIn</strong>
                <span>25,376 followers</span>
              </span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhostDark}`}
            >
              Read the latest issue &nbsp;→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClosingCta = ({ onCounsel }) => (
  <section className={styles.dark}>
    <div className={styles.container}>
      <div className={styles.ctaRow}>
        <div className={styles.headCopy}>
          <p className={`${styles.eyebrow} ${styles.onDark}`}>Still deciding</p>
          <h2 className={`${styles.d2} ${styles.onDarkStrong} ${styles.w560}`}>
            Fifteen minutes now. Nine months better spent.
          </h2>
          <p className={`${styles.lede} ${styles.ctaLede}`}>
            Tell a counsellor your background, the role you want and the hours
            you can give each week. You will get a straight answer on which
            track fits including whether Learnbay is the wrong choice for you.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnLight}`}
            onClick={onCounsel}
          >
            Book free counselling
          </button>
          <Link
            href="/data-science-courses"
            className={`${styles.btn} ${styles.btnGhostDark}`}
          >
            View programs &nbsp;→
          </Link>
        </div>
      </div>

      <div className={`${styles.statStrip} ${styles.closingStats}`}>
        {CLOSING_STATS.map((item) => (
          <div className={styles.stat} key={item.label}>
            <span className={styles.statValue}>{item.value}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogHome = ({ lead, posts, topics, totalGuides, updated }) => {
  const [counselOpen, setCounselOpen] = useState(false);
  const openCounsel = () => setCounselOpen(true);

  return (
    <>
      <Navbar popup dataScience interstedInHide />

      <main className={`${styles.page} ${jakarta.variable} ${serif.variable}`}>
        <Masthead lead={lead} />
        <ArticleIndex posts={posts} topics={topics} totalGuides={totalGuides} />
        <Watch />
        <Programs onCounsel={openCounsel} />
        <Alumni />
        <Newsletters />
        <ClosingCta onCounsel={openCounsel} />
      </main>

      <Footer />

      {counselOpen && (
        <BlogLeadPopup open onClose={() => setCounselOpen(false)} />
      )}
    </>
  );
};

export default BlogHome;
