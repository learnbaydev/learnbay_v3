// "use client";

// import React from "react";
// import styles from "./ToolsAndPlatforms.module.css";

// const TOOL_GROUPS = [
//   {
//     id: "llms",
//     label: "LLMs",
//     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
//   },
//   {
//     id: "frameworks",
//     label: "Frameworks & Integrations",
//     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
//   },
//   {
//     id: "agents",
//     label: "Automation & Agents",
//     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
//   },
//   {
//     id: "creative",
//     label: "Creative AI",
//     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
//   },
//   {
//     id: "nocode",
//     label: "No-Code App & Dev Tools",
//     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
//   },
//   {
//     id: "cloud-mlops",
//     label: "Cloud & AIOps",
//     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
//   },
//   {
//     id: "business",
//     label: "Business & Analytics",
//     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
//   },
// ];

// export default function ToolsAndPlatforms() {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.inner}>
//         <header className={styles.header}>
//           <h2 className={styles.heading}>
//             Tools and Platforms You’ll Work With
//           </h2>
//           <p className={styles.subheading}>
//             You will get hands-on exposure to more than 35 tools across LLMs,
//             automation, creative AI, product building, and AIOps.
//           </p>
//         </header>

//         <div className={styles.groups}>
//           {TOOL_GROUPS.map((group) => (
//             <div key={group.id} className={styles.groupCard}>
//               <div className={styles.groupHeader}>{group.label}</div>

//               <div className={styles.toolRow}>
//                 {group.tools.map((tool) => (
//                   <div key={tool} className={styles.toolPill}>
//                     <span className={styles.toolLogo}>{tool.charAt(0)}</span>
//                     <span className={styles.toolName}>{tool}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import styles from "./ToolsAndPlatforms.module.css";

const TOOL_GROUPS = [
  {
    id: "llms",
    label: "LLMs",
    tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Integrations",
    tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
  },
  {
    id: "agents",
    label: "Automation & Agents",
    tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
  },
  {
    id: "creative",
    label: "Creative AI",
    tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
  },
  {
    id: "nocode",
    label: "No-Code App & Dev Tools",
    tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
  },
  {
    id: "cloud-mlops",
    label: "Cloud & AIOps",
    tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
  },
  {
    id: "business",
    label: "Business & Analytics",
    tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
  },
];

export default function ToolsAndPlatforms() {
  return (
    <section className={styles.wrapper}>
      {/* ▼ white arrow notch */}
      <div className={styles.arrowDown}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Tools and Platforms You’ll Work With
          </h2>
          <p className={styles.subheading}>
            You will get hands-on exposure to more than 35 tools across LLMs,
            automation, creative AI, product building, and AIOps.
          </p>
        </header>

        <div className={styles.groups}>
          {TOOL_GROUPS.map((group) => (
            <div key={group.id} className={styles.groupCard}>
              <div className={styles.groupHeader}>{group.label}</div>

              <div className={styles.toolRow}>
                {group.tools.map((tool) => (
                  <div key={tool} className={styles.toolPill}>
                    <span className={styles.toolLogo}>{tool.charAt(0)}</span>
                    <span className={styles.toolName}>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
