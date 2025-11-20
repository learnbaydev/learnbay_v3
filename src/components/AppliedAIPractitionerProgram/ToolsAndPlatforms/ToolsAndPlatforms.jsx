"use client";

import React from "react";
import Image from "next/image";
import styles from "./ToolsAndPlatforms.module.css";

const LOGO_BASE = "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-tool";

const TOOL_GROUPS = [
  {
    id: "llms",
    label: "LLMs",
    logos: [1, 2, 3, 4, 5],
  },
  {
    id: "frameworks",
    label: "Frameworks & Integrations",
    logos: [6, 7, 8, 9, 10],
  },
  {
    id: "agents",
    label: "Automation & Agents",
    logos: [11, 12, 13, 14, 15],
  },
  {
    id: "creative",
    label: "Creative AI",
    logos: [16, 17, 18, 19, 20],
  },
  {
    id: "nocode",
    label: "No-Code App & Dev Tools",
    logos: [21, 22, 23, 24, 25],
  },
  {
    id: "cloud-mlops",
    label: "Cloud & AIOps",
    logos: [26, 27, 28, 29, 30],
  },
];

export default function ToolsAndPlatforms() {
  return (
    <section className={styles.wrapper}>
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
              <h3 className={styles.groupHeader}>{group.label}</h3>

              <div className={styles.toolRow}>
                {group.logos.map((n) => (
                  <div key={n} className={styles.toolPill}>
                    <Image
                      src={`${LOGO_BASE}${n}.webp`}
                      alt={`${group.label} tool ${n}`}
                      width={180}
                      height={64}
                      className={styles.toolImage}
                    />
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

// "use client";

// import React from "react";
// import Image from "next/image";
// import styles from "./ToolsAndPlatforms.module.css";

// const LOGO_BASE_URL =
//   "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-tool";

// const TOOL_GROUPS = [
//   {
//     id: "llms",
//     label: "LLMs",
//     tools: [
//       { name: "ChatGPT 4", logo: 1 },
//       { name: "Claude", logo: 1 },
//       { name: "Gemini", logo: 2 },
//       { name: "LLAMA 3", logo: 4 },
//       { name: "Mistral AI", logo: 5 },
//     ],
//   },
//   {
//     id: "frameworks",
//     label: "Frameworks & Integrations",
//     tools: [
//       { name: "LangChain", logo: 6 },
//       { name: "LlamaIndex", logo: 7 },
//       { name: "Hugging Face", logo: 8 },
//       { name: "LangGraph", logo: 9 },
//       { name: "Agent AI", logo: 10 },
//     ],
//   },
//   {
//     id: "agents",
//     label: "Automation & Agents",
//     tools: [
//       { name: "ChatGPT 4", logo: 11 },
//       { name: "Claude", logo: 1 },
//       { name: "Gemini", logo: 2 },
//       { name: "LLAMA 3", logo: 3 },
//       { name: "Mistral AI", logo: 5 },
//     ],
//   },
//   {
//     id: "creative",
//     label: "Creative AI",
//     tools: [
//       { name: "LangChain", logo: 16 },
//       { name: "LlamaIndex", logo: 17 },
//       { name: "Hugging Face", logo: 18 },
//       { name: "LangGraph", logo: 19 },
//       { name: "Agent AI", logo: 20 },
//     ],
//   },
//   {
//     id: "nocode",
//     label: "No-Code App & Dev Tools",
//     tools: [
//       { name: "ChatGPT 4", logo: 21 },
//       { name: "Claude", logo: 22 },
//       { name: "Gemini", logo: 23 },
//       { name: "LLAMA 3", logo: 24 },
//       { name: "Mistral AI", logo: 25 },
//     ],
//   },
//   {
//     id: "cloud-mlops",
//     label: "Cloud & AIOps",
//     tools: [
//       { name: "ChatGPT 4", logo: 26 },
//       { name: "Claude", logo: 27 },
//       { name: "Gemini", logo: 28 },
//       { name: "LLAMA 3", logo: 29 },
//       { name: "Mistral AI", logo: 30 },
//     ],
//   },
//   {
//     id: "business",
//     label: "Business & Analytics",
//     tools: [
//       // re-using first 5 icons again (you can change if you add more images)
//       { name: "ChatGPT 4", logo: 1 },
//       { name: "Claude", logo: 2 },
//       { name: "Gemini", logo: 3 },
//       { name: "LLAMA 3", logo: 4 },
//       { name: "Mistral AI", logo: 5 },
//     ],
//   },
// ];

// export default function ToolsAndPlatforms() {
//   return (
//     <section className={styles.wrapper}>
//       {/* ▼ white arrow notch */}
//       <div className={styles.arrowDown}></div>

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
//                   <div key={tool.name} className={styles.toolPill}>
//                     {/* <span className={styles.toolLogo}> */}
//                     <Image
//                       src={`${LOGO_BASE_URL}${tool.logo}.webp`}
//                       width={60}
//                       height={20}
//                       alt={tool.name}
//                       className={styles.toolLogo}
//                     />
//                     {/* </span> */}
//                     {/* <span className={styles.toolName}>{tool.name}</span> */}
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

// // "use client";

// // import React from "react";
// // import styles from "./ToolsAndPlatforms.module.css";

// // const TOOL_GROUPS = [
// //   {
// //     id: "llms",
// //     label: "LLMs",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "frameworks",
// //     label: "Frameworks & Integrations",
// //     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
// //   },
// //   {
// //     id: "agents",
// //     label: "Automation & Agents",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "creative",
// //     label: "Creative AI",
// //     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
// //   },
// //   {
// //     id: "nocode",
// //     label: "No-Code App & Dev Tools",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "cloud-mlops",
// //     label: "Cloud & AIOps",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "business",
// //     label: "Business & Analytics",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// // ];

// // export default function ToolsAndPlatforms() {
// //   return (
// //     <section className={styles.wrapper}>
// //       <div className={styles.inner}>
// //         <header className={styles.header}>
// //           <h2 className={styles.heading}>
// //             Tools and Platforms You’ll Work With
// //           </h2>
// //           <p className={styles.subheading}>
// //             You will get hands-on exposure to more than 35 tools across LLMs,
// //             automation, creative AI, product building, and AIOps.
// //           </p>
// //         </header>

// //         <div className={styles.groups}>
// //           {TOOL_GROUPS.map((group) => (
// //             <div key={group.id} className={styles.groupCard}>
// //               <div className={styles.groupHeader}>{group.label}</div>

// //               <div className={styles.toolRow}>
// //                 {group.tools.map((tool) => (
// //                   <div key={tool} className={styles.toolPill}>
// //                     <span className={styles.toolLogo}>{tool.charAt(0)}</span>
// //                     <span className={styles.toolName}>{tool}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import React from "react";
// // import styles from "./ToolsAndPlatforms.module.css";
// // import Image from "next/image";
// // const TOOL_GROUPS = [
// //   {
// //     id: "llms",
// //     label: "LLMs",
// //     tools: ["    ", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "frameworks",
// //     label: "Frameworks & Integrations",
// //     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
// //   },
// //   {
// //     id: "agents",
// //     label: "Automation & Agents",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "creative",
// //     label: "Creative AI",
// //     tools: ["LangChain", "LlamaIndex", "Hugging Face", "LangGraph", "Agent AI"],
// //   },
// //   {
// //     id: "nocode",
// //     label: "No-Code App & Dev Tools",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "cloud-mlops",
// //     label: "Cloud & AIOps",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// //   {
// //     id: "business",
// //     label: "Business & Analytics",
// //     tools: ["ChatGPT 4", "Claude", "Gemini", "LLAMA 3", "Mistral AI"],
// //   },
// // ];

// // export default function ToolsAndPlatforms() {
// //   return (
// //     <section className={styles.wrapper}>
// //       {/* ▼ white arrow notch */}
// //       <div className={styles.arrowDown}></div>

// //       <div className={styles.inner}>
// //         <header className={styles.header}>
// //           <h2 className={styles.heading}>
// //             Tools and Platforms You’ll Work With
// //           </h2>
// //           <p className={styles.subheading}>
// //             You will get hands-on exposure to more than 35 tools across LLMs,
// //             automation, creative AI, product building, and AIOps.
// //           </p>
// //         </header>

// //         <div className={styles.groups}>
// //           {TOOL_GROUPS.map((group) => (
// //             <div key={group.id} className={styles.groupCard}>
// //               <div className={styles.groupHeader}>{group.label}</div>

// //               <div className={styles.toolRow}>
// //                 {group.tools.map((tool) => (
// //                   <div key={tool} className={styles.toolPill}>
// //                     <span className={styles.toolLogo}>
// //                       <Image
// //                         src={
// //                           "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ai-tool1.webp"
// //                         }
// //                         width={80}
// //                         height={20}
// //                         alt="ai-tool"
// //                       />
// //                     </span>
// //                     <span className={styles.toolName}>{tool}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
