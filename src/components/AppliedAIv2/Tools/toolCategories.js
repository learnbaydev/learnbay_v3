/* Tool categories.

   Logos are white-silhouette PNGs with real transparency, derived from the
   `ai-tool{N}.webp` set on the CDN. Those originals mostly ship with an opaque
   white background, which cannot sit on this section's dark panel, so each mark
   was keyed to alpha and recoloured white. `w` is the mark's width at 22px tall,
   measured from the trimmed file so chips reserve the right space. */

const LOGO = (slug) => `/applied-ai/tools-ai/${slug}.png`;

export const TOOL_CATEGORIES = [
  {
    id: 'llms',
    label: 'LLMs',
    blurb:
      'The models underneath everything else. You learn how they predict and reason, where they fail, and how to control them with prompt structure rather than luck.',
    tools: [
      { name: 'ChatGPT 4', logo: LOGO('chatgpt4'), w: 71 },
      { name: 'Claude', logo: LOGO('claude'), w: 103 },
      { name: 'Gemini', logo: LOGO('gemini'), w: 59 },
      { name: 'Llama 3', logo: LOGO('llama3'), w: 117 },
      { name: 'Mistral AI', logo: LOGO('mistral'), w: 109 },
      { name: 'Meta AI', logo: LOGO('meta-ai'), w: 33 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & integrations',
    blurb:
      'The connective layer between a model and your data. You wire up retrieval, memory and structured output so answers are grounded in documents you control.',
    tools: [
      { name: 'LangChain', logo: LOGO('langchain'), w: 132 },
      { name: 'LlamaIndex', logo: LOGO('llamaindex'), w: 115 },
      { name: 'LangGraph', logo: LOGO('langgraph'), w: 143 },
      { name: 'Hugging Face', logo: LOGO('huggingface'), w: 96 },
      { name: 'FastAPI', logo: LOGO('fastapi'), w: 120 },
    ],
  },
  {
    id: 'agents',
    label: 'Automation & agents',
    blurb:
      'Where a single prompt becomes a workflow. You build agents that plan, call tools and hand off, and you learn when an agent is the wrong answer.',
    tools: [
      { name: 'Agent AI', logo: LOGO('agent-ai'), w: 121 },
      { name: 'Make', logo: LOGO('make'), w: 97 },
      { name: 'n8n', logo: LOGO('n8n'), w: 79 },
      { name: 'Vapi', logo: LOGO('vapi'), w: 78 },
      { name: 'ClickUp', logo: LOGO('clickup'), w: 91 },
    ],
  },
  {
    id: 'creative',
    label: 'Creative AI',
    blurb:
      'Generation for the work that ships alongside the product: imagery, video, voice and decks, produced at a pace a team actually notices.',
    tools: [
      { name: 'DALL·E', logo: LOGO('dalle'), w: 81 },
      { name: 'Ideogram', logo: LOGO('ideogram'), w: 99 },
      { name: 'Leonardo.Ai', logo: LOGO('leonardo'), w: 86 },
      { name: 'Runway', logo: LOGO('runway'), w: 113 },
      { name: 'Synthesia', logo: LOGO('synthesia'), w: 137 },
    ],
  },
  {
    id: 'nocode',
    label: 'No-code app & dev',
    blurb:
      'How the thing you built becomes a link you can send. You ship interfaces and internal tools without waiting on an engineering sprint.',
    tools: [
      { name: 'Bubble', logo: LOGO('bubble'), w: 98 },
      { name: 'Streamlit', logo: LOGO('streamlit'), w: 47 },
      { name: 'Cursor', logo: LOGO('cursor'), w: 94 },
      { name: 'Gamma', logo: LOGO('gamma'), w: 22 },
      { name: 'Notion', logo: LOGO('notion'), w: 50 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & AIOps',
    blurb:
      'What it takes to keep it running. You deploy, monitor cost and quality, and put the evaluation and guardrails in place before anyone else depends on it.',
    tools: [
      { name: 'Vertex AI', logo: LOGO('vertex-ai'), w: 72 },
      { name: 'Power BI', logo: LOGO('power-bi'), w: 90 },
      { name: 'Power Apps', logo: LOGO('power-apps'), w: 21 },
      { name: 'Postman', logo: LOGO('postman'), w: 73 },
      { name: 'Rows', logo: LOGO('rows'), w: 77 },
    ],
  },
];
