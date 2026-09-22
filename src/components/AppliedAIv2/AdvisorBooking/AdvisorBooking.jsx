'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import styles from './AdvisorBooking.module.css';
import PopupContent from '@/components/Global/PopupContent/PopupContent';

const COVERS = [
  {
    n: '01',
    title: "Which track, and whether it's this one",
    body: 'If the GenAI Master Program or the Woolf MS fits you better, the advisor will say so.',
  },
  {
    n: '02',
    title: 'The real weekly load',
    body: 'Hours, batch options and what happens when work gets busy mid-cohort.',
  },
  {
    n: '03',
    title: 'Fee, EMI and any scholarship you qualify for',
    body: "Including the figures that aren't published on this page.",
  },
];

const ADVISORS = ['a1', 'a2', 'a3', 'a4', 'a5'];

const SLOTS = [
  { time: '09:00' },
  { time: '11:30' },
  { time: '13:00', taken: true },
  { time: '15:30' },
  { time: '17:00' },
  { time: '19:30' },
];

export default function AdvisorBooking() {
  const [popups, setPopups] = useState(false);
  const [dayIndex, setDayIndex] = useState(1);
  const [slot, setSlot] = useState('09:00');

  /* Dates are derived on the client so the labels stay correct without risking
     a server/client hydration mismatch across timezones. */
  const [days, setDays] = useState(null);

  useEffect(() => {
    const today = new Date();
    setDays(
      [0, 1, 2].map((offset) => {
        const date = new Date(today);
        date.setDate(today.getDate() + offset);
        const weekday = date.toLocaleDateString('en-IN', { weekday: 'short' });
        if (offset === 0) return { top: weekday, main: 'Today' };
        if (offset === 1) return { top: weekday, main: 'Tomorrow' };
        return { top: String(date.getDate()), main: weekday };
      })
    );
  }, []);

  const confirmLabel = useMemo(() => {
    if (!days) return `Confirm ${slot}`;
    return `Confirm ${slot} on ${days[dayIndex].main.toLowerCase()}`;
  }, [days, dayIndex, slot]);

  return (
    <section className={styles.section} id="advisor">
      <PopupContent
        dataScienceGeneric={true}
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
      />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <header className={styles.head}>
            <p className={styles.kicker}>Before you apply</p>
            <h2 className={styles.title}>
              Fifteen minutes now.
              <br />
              Four months better spent.
            </h2>
            <p className={styles.lede}>
              Tell an advisor your role, your experience and the hours you can
              give each week. You will get a straight answer on whether this
              program fits — including when it doesn&apos;t.
            </p>
          </header>

          <ol className={styles.covers}>
            {COVERS.map((item) => (
              <li key={item.n} className={styles.cover}>
                <span className={styles.coverNum}>{item.n}</span>
                <span className={styles.coverCopy}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => setPopups(true)}
            >
              Book free counselling
            </button>
            <a href="#program" className={styles.ghostBtn}>
              See the live page
              <svg viewBox="0 0 18 18" className={styles.arrow} aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ---- Booking card ---- */}
        <aside className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.advisorStack}>
              {ADVISORS.map((id) => (
                <Image
                  key={id}
                  src={`/applied-ai/advisors/${id}.png`}
                  alt=""
                  width={46}
                  height={46}
                  className={styles.advisor}
                />
              ))}
              <span className={styles.advisorMore}>+40</span>
            </div>

            <div className={styles.cardTitle}>
              <h3>Talk to a programme advisor</h3>
              <p className={styles.live}>
                <span className={styles.liveDot} aria-hidden="true" />
                12 advisors online · replies in under 5 minutes
              </p>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.group}>
              <p className={styles.groupLabel}>Pick a day</p>
              <div className={styles.dayOptions}>
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className={`${styles.day} ${dayIndex === i ? styles.dayActive : ''}`}
                    onClick={() => setDayIndex(i)}
                    aria-pressed={dayIndex === i}
                  >
                    <span className={styles.dayTop}>
                      {days ? days[i].top : ' '}
                    </span>
                    <span className={styles.dayMain}>
                      {days ? days[i].main : ' '}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <p className={styles.groupLabel}>Available slots · IST</p>
              <div className={styles.slots}>
                {SLOTS.map((option) => (
                  <button
                    key={option.time}
                    type="button"
                    disabled={option.taken}
                    aria-pressed={slot === option.time}
                    className={[
                      styles.slot,
                      option.taken ? styles.slotTaken : '',
                      slot === option.time ? styles.slotActive : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => setSlot(option.time)}
                  >
                    {option.taken ? <s>{option.time}</s> : option.time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <button
              type="button"
              className={styles.confirm}
              onClick={() => setPopups(true)}
            >
              {confirmLabel}
              <svg viewBox="0 0 18 18" className={styles.arrow} aria-hidden="true">
                <path
                  d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className={styles.note}>
              <strong>7,568</strong> consultations booked · no payment details
              needed
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
