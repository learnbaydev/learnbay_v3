import styles from './WhyAiTraining.module.css';
import { Rocket, Bot, TrendingUp } from 'lucide-react';

export default function WhyAITraining() {
  const features = [
    {
      icon: <Rocket size={20} />,
      title: 'Boost Efficiency',
      desc: '20% – 40% faster execution of priority workflows once AI prompts and automated workflows are implemented.',
    },
    {
      icon: <Bot size={20} />,
      title: 'Automate Repetitive Tasks',
      desc: 'Offload 80% routine tasks, refocus on growth, governance, and innovation with work automation.',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Stay Ahead of Change',
      desc: 'AI tools are competitive differentiators – we empower your teams to future-proof themselves with AI capability.',
    },
  ];

  return (
    <section className={styles.aiSection}>
      <div className={styles.aiContainer}>
        <h2 className={styles.aiHeading}>
          Why AI Training – The Impact On Your Team
        </h2>

        <div className={styles.aiGrid}>
          {features.map((item, i) => (
            <div className={styles.aiCard} key={i}>
              <div className={styles.aiIcon}>{item.icon}</div>

              <div>
                <h3 className={styles.aiTitle}>{item.title}</h3>
                <p className={styles.aiDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
