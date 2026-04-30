import styles from './RealExample.module.css';
import {
  BarChart,
  Users,
  DollarSign,
  Code,
  Box,
  Layers,
  Bug,
  Activity,
  Database,
  Settings,
  Share2,
  Link,
} from 'lucide-react';

export default function RealExamples() {
  const data = [
    {
      icon: <BarChart />,
      title: 'Marketing',
      desc: 'Automated Reporting',
      highlight: '↓ 80% time',
    },
    {
      icon: <Users />,
      title: 'HR',
      desc: 'Onboarding & FAQs',
      highlight: 'Saves hours weekly',
    },
    {
      icon: <DollarSign />,
      title: 'Sales',
      desc: 'AI Summaries',
      highlight: 'Faster decisions',
    },

    {
      icon: <Code />,
      title: 'Development',
      desc: 'Code & debugging',
      highlight: '↓ 30% dev time',
    },
    {
      icon: <Box />,
      title: 'Product',
      desc: 'PRDs & specs',
      highlight: '↓ 60% docs time',
    },
    {
      icon: <Layers />,
      title: 'Architecture',
      desc: 'System design docs',
      highlight: '↓ 30% time',
    },

    {
      icon: <Bug />,
      title: 'QA Testing',
      desc: 'Test case automation',
      highlight: '↓ 40% time',
    },
    {
      icon: <Activity />,
      title: 'Process Teams',
      desc: 'Automated Reporting',
      highlight: '↑ 25% efficiency',
    },
    {
      icon: <Database />,
      title: 'MIS Teams',
      desc: 'Dashboard automation',
      highlight: '↓ 50% reporting time',
    },

    {
      icon: <Settings />,
      title: 'Operations',
      desc: 'Workflow automation',
      highlight: '↓ 20–30% time',
    },
    {
      icon: <Share2 />,
      title: 'Supply Chain',
      desc: 'Demand & Inventory Insights',
      highlight: 'Faster Planning',
    },
    {
      icon: <Link />,
      title: 'Workflow',
      desc: 'Task coordination & tracking',
      highlight: '↓ 20–30% time',
    },
  ];

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)),
          url("https://d32and0ii3b8oy.cloudfront.net/adlearnbay/corporateAITrainingDarkBackground.webp")
        `,
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Real Examples: AI at Work</h2>

        <div className={styles.grid}>
          {data.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{item.icon}</div>

              <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.desc}>{item.desc}</p>
                <span className={styles.highlight}>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          Same team. Same tools. New ways of working
        </p>

        <button className={styles.btn}>See All Use Cases</button>
      </div>
    </section>
  );
}
