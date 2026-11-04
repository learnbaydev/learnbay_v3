import { useRef } from 'react';
import Link from 'next/link';
import {
  PiCheckCircleFill,
  PiSealCheckFill,
  PiArrowUpRightBold,
} from 'react-icons/pi';
import styles from './Blocks.module.css';

// The five header gradients from the design, keyed so frontmatter names a
// colour rather than repeating gradient stops per card.
const ACCENTS = {
  orange: 'linear-gradient(151deg, #ea6a0d 0%, #7c2d12 67%)',
  teal: 'linear-gradient(151deg, #0f9788 0%, #0b3b37 67%)',
  violet: 'linear-gradient(151deg, #5b4ae8 0%, #2563eb 67%)',
  cyan: 'linear-gradient(151deg, #048aca 0%, #0c4a6e 67%)',
  blue: 'linear-gradient(151deg, #2664ec 0%, #1e3a8a 67%)',
};

const ACCENT_ORDER = ['orange', 'teal', 'violet', 'cyan', 'blue'];

/**
 * Dark panel holding a scrollable row of program cards and a strip of headline
 * stats.
 *
 * The Figma node is a half-scale cover mock (card titles at 9px, bullets at
 * 6.4px), so this is rebuilt at readable sizes: the structure, gradients and
 * proportions are the design's, the type scale is the v2 system's.
 */
export function ProgramLineup({ data }) {
  const trackRef = useRef(null);
  if (!data) return null;

  const { badgeLeft, badgeRight, programs = [], stats = [] } = data;
  if (!programs.length) return null;

  return (
    <section className={styles.lineup}>
      {(badgeLeft || badgeRight) && (
        <div className={styles.lineupTop}>
          {badgeLeft && <span className={styles.lineupPill}>{badgeLeft}</span>}
          {badgeRight && <span className={styles.lineupPill}>{badgeRight}</span>}
        </div>
      )}

      <div className={styles.lineupTrack} ref={trackRef}>
        {programs.map((program, index) => {
          const accent =
            ACCENTS[program.accent] ||
            ACCENTS[ACCENT_ORDER[index % ACCENT_ORDER.length]];

          return (
            <Link
              href={program.href || '#'}
              className={styles.programCard}
              key={program.name || index}
            >
              <span className={styles.programHeader} style={{ background: accent }}>
                {/* Decorative concentric rings from the design. Drawn in CSS
                    rather than as three exported SVGs — they are plain
                    translucent circles, so this is exact and weightless. */}
                <span className={styles.programRings} aria-hidden />
                <span className={styles.programCohort}>
                  {program.cohort || 'Live Cohort'}
                </span>
                <span className={styles.programName}>{program.name}</span>
                {program.certified !== false && (
                  <span className={styles.programCertified}>
                    <PiSealCheckFill aria-hidden />
                    {program.certifiedBy || 'IBM & MICROSOFT CERTIFIED'}
                  </span>
                )}
              </span>

              <span className={styles.programBody}>
                {program.meta && (
                  <span className={styles.programMeta}>{program.meta}</span>
                )}
                <span className={styles.programPitch}>{program.pitch}</span>

                {program.points?.length > 0 && (
                  <span className={styles.programPoints}>
                    {program.points.map((point, i) => (
                      <span className={styles.programPoint} key={i}>
                        <PiCheckCircleFill
                          className={styles.programTick}
                          aria-hidden
                        />
                        {point}
                      </span>
                    ))}
                  </span>
                )}

                <span className={styles.programFooter}>
                  <span className={styles.programCta}>
                    {program.cta || 'View Program'}
                  </span>
                  <span className={styles.programArrow} aria-hidden>
                    <PiArrowUpRightBold />
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {stats.length > 0 && (
        <div className={styles.lineupStats}>
          {stats.map((stat, index) => (
            <div className={styles.lineupStat} key={index}>
              <p className={styles.lineupStatValue}>{stat.value}</p>
              <p className={styles.lineupStatLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProgramLineup;
