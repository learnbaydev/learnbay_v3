/* Tool categories.
   NOTE: the design specifies the LLMs category with logo chips; the other five
   list their tools as text chips and should be confirmed by the program team. */

export const TOOL_CATEGORIES = [
  {
    id: 'llms',
    label: 'LLMs',
    blurb:
      'The models underneath everything else. You learn how they predict and reason, where they fail, and how to control them with prompt structure rather than luck.',
    tools: [
      { name: 'ChatGPT', logo: '/applied-ai/tools/chatgpt.png', width: 70 },
      { name: 'Claude', logo: '/applied-ai/tools/claude-llm.png', width: 93 },
      { name: 'Gemini', logo: '/applied-ai/tools/gemini.png', width: 83 },
      { name: 'Mistral', logo: '/applied-ai/tools/mistral.png', width: 109 },
      { name: 'Perplexity', logo: '/applied-ai/tools/perplexity.png', width: 82 },
      { name: 'Llama 4', logo: '/applied-ai/tools/llama4.png', width: 68 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & integrations',
    blurb:
      'The connective layer between a model and your data. You wire up retrieval, memory and structured output so answers are grounded in documents you control.',
    tools: [
      { name: 'LangChain' },
      { name: 'LlamaIndex' },
      { name: 'Pinecone' },
      { name: 'ChromaDB' },
      { name: 'Hugging Face' },
      { name: 'OpenAI API' },
    ],
  },
  {
    id: 'agents',
    label: 'Automation & agents',
    blurb:
      'Where a single prompt becomes a workflow. You build agents that plan, call tools and hand off, and you learn when an agent is the wrong answer.',
    tools: [
      { name: 'CrewAI' },
      { name: 'AutoGen' },
      { name: 'Dify.ai' },
      { name: 'n8n' },
      { name: 'Zapier' },
      { name: 'Make' },
    ],
  },
  {
    id: 'creative',
    label: 'Creative AI',
    blurb:
      'Generation for the work that ships alongside the product: imagery, video, voice and decks, produced at a pace a team actually notices.',
    tools: [
      { name: 'Midjourney' },
      { name: 'DALL·E' },
      { name: 'Runway' },
      { name: 'ElevenLabs' },
      { name: 'HeyGen' },
      { name: 'Canva AI' },
    ],
  },
  {
    id: 'nocode',
    label: 'No-code app & dev',
    blurb:
      'How the thing you built becomes a link you can send. You ship interfaces and internal tools without waiting on an engineering sprint.',
    tools: [
      { name: 'Lovable' },
      { name: 'Bolt.new' },
      { name: 'Replit' },
      { name: 'Streamlit' },
      { name: 'Bubble' },
      { name: 'Cursor' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & AIOps',
    blurb:
      'What it takes to keep it running. You deploy, monitor cost and quality, and put the evaluation and guardrails in place before anyone else depends on it.',
    tools: [
      { name: 'AWS Bedrock' },
      { name: 'Azure AI' },
      { name: 'Google Vertex AI' },
      { name: 'LangSmith' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
    ],
  },
];
