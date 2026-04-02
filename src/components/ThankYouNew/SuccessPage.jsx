import styles from './SuccessPage.module.css';

const steps = [
  {
    step: 'Step 01',
    title: 'Expert call',
    desc: 'A dedicated counselor calls you to understand your background and goals',
  },
  {
    step: 'Step 02',
    title: 'Personalised roadmap',
    desc: 'Get a custom AI/Data Science learning path tailored to your current role',
  },
  {
    step: 'Step 03',
    title: 'Enrol & begin',
    desc: 'Choose your batch, flexible payment options, and start your transformation',
  },
];

const sessions = [
  {
    title: 'Salary growth potential',
    desc: 'Data-driven analysis of your hike based on experience, domain, and target role',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l2.5 6 6 .5-4.5 4 1.2 6-5.2-3-5.2 3 1.2-6-4.5-4 6-.5z" />
      </svg>
    ),
  },
  {
    title: 'Real-world curriculum',
    desc: 'How GenAI, Agentic AI, and live projects are built into every program',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 10l9-6 9 6v10H3z" />
      </svg>
    ),
  },
  {
    title: 'Placement support',
    desc: 'Resume builds, mock interviews, LinkedIn optimisation, and job referrals',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Flexible batch options',
    desc: 'Weekend and weekday schedules designed for working professionals',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function SuccessPage() {
  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Enquiry successfully registered
          </div>

          <h1>You're one step closer to your AI career breakthrough</h1>

          <p className={styles.subtitle}>
            Our expert counselor will reach out within a few hours.
          </p>

          <div className={styles.steps}>
            {steps.map((item, i) => (
              <div key={i} className={styles.stepCard}>
                <span className={styles.stepNum}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.counselor}>
            <div className={styles.avatar}>LC</div>
            <div>
              <strong>Learnbay Career Expert</strong>
              <p>Response time: within a few hours</p>
            </div>
            <span className={styles.status}>Call scheduled</span>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Your brochure is ready</h2>
          <p className={styles.subtitle}>
            Here's what you'll learn during the session:
          </p>

          <div className={styles.grid}>
            {sessions.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.stats}>
            <div>
              <strong>10,000+</strong>
              <span>professionals trained</span>
            </div>
            <div>
              <strong>IBM & Microsoft</strong>
              <span>certified programs</span>
            </div>
            <div>
              <strong>300+</strong>
              <span>hiring partners</span>
            </div>
            <div>
              <strong>4.8 ★</strong>
              <span>average rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
