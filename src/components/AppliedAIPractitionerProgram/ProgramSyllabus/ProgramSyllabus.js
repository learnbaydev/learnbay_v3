import React from "react";
import {
  Workflow,
  FileText,
  FlaskConical,
  Wind,
  Airplay,
  Component,
} from "lucide-react";
import styles from "./ProgramSyllabus.module.css";

// --- 1. Data Object ---
const syllabusData = [
  {
    id: "term-1",
    termLabel: "Term 1",
    icon: "workflow",
    title: "AI Reasoning & LLM Workflows",
    weeks: "Weeks 1–3",
    content: [
      { label: "Focus", text: "LLM basics, prompt engineering, RAG, ethics" },
      {
        label: "Tools",
        text: "GPT-4, Claude 3, Gemini, LangChain, LlamaIndex, Pinecone/Chroma, Notion AI",
      },
      {
        label: "Project",
        text: "AI Knowledge Assistant that answers from your own documents",
      },
      {
        label: "Outcome",
        text: "Ability to design and control LLM-powered assistants.",
      },
    ],
  },
  {
    id: "term-2",
    termLabel: "Term 2",
    icon: "document",
    title: "Generative & Multimodal AI for Content",
    weeks: "Weeks 4–5",
    content: [
      { label: "Focus", text: "text-to-image, video, and audio generation" },
      {
        label: "Tools",
        text: "Runway ML, DALL·E 3, Ideogram, Synthesia, ElevenLabs, Leonardo AI, Pika Labs, Kaiber, Gammal",
      },
      {
        label: "Project",
        text: "AI Content Studio for marketing or learning assets",
      },
      {
        label: "Outcome",
        text: "End-to-end creative workflow without manual design",
      },
    ],
  },
  {
    id: "term-3",
    termLabel: "Term 3",
    icon: "wind",
    title: "Agentic AI & Automation",
    weeks: "Weeks 6–7",
    content: [
      {
        label: "Focus",
        text: "agents, automation logic, cross-tool workflowsTools",
      },
      {
        label: "Tools",
        text: "Zapier, Make.com, n8n, Agentive AI, LangGraph, Vapi, CrewAI, OpenDevin, Slack AI, Notion AI",
      },
      {
        label: "Project",
        text: "AI Workflow Co-Pilot for daily reporting and alerts",
      },
      {
        label: "Outcome",
        text: "Ability to automate processes with AI agents and no-code tools.",
      },
    ],
  },
  {
    id: "term-4",
    termLabel: "Term 4",
    icon: "component",
    title: "No-Code App Development & Deployment",
    weeks: "Weeks 6–7",
    content: [
      {
        label: "Focus",
        text: "turning workflows into usable apps",
      },
      {
        label: "Tools",
        text: "Bubble, Streamlit, FastAPI, Cursor AI, Supabase, Framer, Postman, Replit Ghostwriter, Dust",
      },
      {
        label: "Project",
        text: "AI Assistant Web App with a simple interface for business use",
      },
      {
        label: "Outcome",
        text: "Able to ship working AI products accessible via the web",
      },
    ],
  },
  {
    id: "term-5",
    termLabel: "Term 5",
    icon: "airplay",
    title: " AIOps & Monitoring",
    weeks: "Weeks 6–7",
    content: [
      {
        label: "Focus",
        text: "performance metrics, drift, governance, dashboards",
      },
      {
        label: "Tools",
        text: "Azure AI Studio, Vertex AI, AWS SageMaker, Hugging Face Spaces, Power BI, Rows, ClickUp Brain,",
      },
      {
        label: "Project",
        text: "AIOps Dashboard tracking accuracy, latency, and cost",
      },
      {
        label: "Outcome",
        text: "Understanding of how to operate AI reliably in production-like setups.",
      },
    ],
  },
  {
    id: "term-6",
    termLabel: "Term 6",
    icon: "flaskConical",
    title: "AI CoLab Startup Capstone",
    weeks: "Weeks 6–7",
    content: [
      {
        label: "Focus",
        text: "live startup problem-solving and product delivery",
      },
      {
        label: "Tools",
        text: "Combination of all previous tools, depending on project",
      },
      {
        label: "Project",
        text: "Real-world capstone with AI startup in HR, FinTech, Marketing, or Operations",
      },
      {
        label: "Outcome",
        text: "Startup Certificate and referenceable, portfolio-ready project.",
      },
    ],
  },
];

// --- 2. Sub-Components ---

const IconRenderer = ({ type }) => {
  if (type === "workflow") return <Workflow size={24} color="#6366f1" />;
  if (type === "document") return <FileText size={24} color="#6366f1" />;
  if (type === "component") return <Component size={24} color="#6366f1" />;
  if (type === "flaskConical")
    return <FlaskConical size={24} color="#6366f1" />;
  if (type === "wind") return <Wind size={24} color="#6366f1" />;
  if (type === "airplay") return <Airplay size={24} color="#6366f1" />;
  return null;
};

const SyllabusCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <span className={styles.weeksBadge}>{data.weeks}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.divider}></div>
        <ul className={styles.detailsList}>
          {data.content.map((item, index) => (
            <li key={index} className={styles.detailItem}>
              <span className={styles.detailLabel}>{item.label}:</span>
              <span className={styles.detailText}> {item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TimelineItem = ({ data, isLast }) => {
  return (
    <div className={styles.timelineRow}>
      {/* Left Column */}
      <div className={styles.timelineLeft}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconCircle}>
            <IconRenderer type={data.icon} />
          </div>
          {/* Dotted Line (conditional) */}
          {!isLast && <div className={styles.dottedLine}></div>}
        </div>
        <span className={styles.termLabel}>{data.termLabel}</span>
      </div>

      {/* Right Column */}
      <div className={styles.timelineRight}>
        <SyllabusCard data={data} />
      </div>
    </div>
  );
};

// --- 3. Main Component ---

export default function SyllabusSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Program Syllabus – Module Overview</h2>
        <p className={styles.subtitle}>
          Choose our platform for project-based programs
        </p>
      </div>

      <div className={styles.timelineContainer}>
        {syllabusData.map((item, index) => (
          <TimelineItem
            key={item.id}
            data={item}
            isLast={index === syllabusData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
