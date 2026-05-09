import styles from './QuickOverview.module.css';
import { Calendar, Users, Check, TrendingUp } from 'lucide-react';

export default function QuickOverview() {
  const items = [
    {
      icon: <Calendar size={22} />,
      title: 'What it is',
      desc: 'A corporate AI training course empowers teams to build and use AI tools that automate workflows and synthesis tasks.',
    },
    {
      icon: <Users size={22} />,
      title: 'Who it’s for',
      desc: 'Business teams (operations, marketing, HR, analytics, dev, testing, product) are ready to save time with tech-savvy AI.',
    },
    {
      icon: <Check size={22} />,
      title: 'Key benefit',
      desc: 'Work automation to remove redundancies, establish strategic intelligence, and enable teams to focus on high-value work.',
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Outcome',
      desc: '20–40% time savings on common tasks (as proven by our past clients).',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.heading}>
          AI Corporate Training – Quick Overview
        </h2>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{item.icon}</div>

              <h4 className={styles.title}>{item.title}</h4>

              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
