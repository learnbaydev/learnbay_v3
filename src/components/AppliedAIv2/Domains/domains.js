/* Domain specialisations.
   NOTE: the Figma design specifies the BFSI tab in full; the remaining five
   follow the same shape and should be reviewed by the program team. */

export const DOMAINS = [
  {
    id: 'bfsi',
    label: 'BFSI',
    icon: 'bank',
    accent: '#2563eb',
    summary:
      'Build AI for banking, insurance and capital markets where accuracy, explainability and an audit trail are non-negotiable.',
    chips: ['3 domain projects', '1 capstone', 'Regulated-data patterns'],
    projects: [
      {
        title: 'Claims-triage assistant',
        body: 'Reads a claim, flags the ones that need a human, and says why it flagged them.',
      },
      {
        title: 'Credit-policy RAG assistant',
        body: 'Answers underwriting questions with citations pulled from the policy documents themselves.',
      },
      {
        title: 'Regulatory change monitor',
        body: 'Extracts obligations and changes from circulars and filings, and summarises what moved.',
      },
    ],
    tags: ['RAG', 'Guardrails', 'Document AI', 'Evaluation'],
    ladder: [
      {
        title: 'Analyst, ops or relationship manager',
        body: 'Your role today',
      },
      {
        title: 'AI-enabled BFSI analyst',
        body: 'Ship AI workflows on financial data',
      },
      {
        title: 'AI product owner, risk & compliance',
        body: 'Own retrieval, guardrails and audit',
      },
      {
        title: 'AI transformation lead, financial services',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'Every bank and insurer is hiring for AI they can defend to a regulator.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: 'heartbeat',
    accent: '#0e9f6e',
    summary:
      'Build AI for providers, payers and life sciences, where patient safety, privacy and clinical evidence set the bar.',
    chips: ['3 domain projects', '1 capstone', 'PHI-safe patterns'],
    projects: [
      {
        title: 'Clinical documentation assistant',
        body: 'Turns consultation notes into structured summaries a clinician can sign off in seconds.',
      },
      {
        title: 'Care-protocol RAG assistant',
        body: 'Answers treatment-pathway questions with the guideline passage cited alongside.',
      },
      {
        title: 'Prior-authorisation triage',
        body: 'Reads a request against policy and routes the exceptions to a reviewer with reasons.',
      },
    ],
    tags: ['RAG', 'PHI redaction', 'Document AI', 'Evaluation'],
    ladder: [
      { title: 'Clinician, care ops or health analyst', body: 'Your role today' },
      {
        title: 'AI-enabled healthcare analyst',
        body: 'Ship AI workflows on clinical data',
      },
      {
        title: 'AI product owner, clinical systems',
        body: 'Own retrieval, safety and review loops',
      },
      {
        title: 'AI transformation lead, healthcare',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'Providers and payers are hiring for AI that holds up to a clinical review.',
  },
  {
    id: 'supply-chain',
    label: 'Supply chain',
    icon: 'arrows',
    accent: '#ff7a1a',
    summary:
      'Build AI for planning, procurement and logistics, where a forecast is only useful if someone can act on it this week.',
    chips: ['3 domain projects', '1 capstone', 'Forecasting patterns'],
    projects: [
      {
        title: 'Demand-signal copilot',
        body: 'Blends history, promotions and external signals into a forecast a planner can question.',
      },
      {
        title: 'Supplier-contract RAG assistant',
        body: 'Answers sourcing questions with the clause and the contract it came from.',
      },
      {
        title: 'Disruption early-warning agent',
        body: 'Watches news and shipment data, and flags the lanes about to slip.',
      },
    ],
    tags: ['Forecasting', 'Agents', 'Document AI', 'Evaluation'],
    ladder: [
      { title: 'Planner, buyer or logistics analyst', body: 'Your role today' },
      {
        title: 'AI-enabled supply chain analyst',
        body: 'Ship AI workflows on operational data',
      },
      {
        title: 'AI product owner, planning systems',
        body: 'Own forecasting, agents and exception handling',
      },
      {
        title: 'AI transformation lead, supply chain',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'Every planning team is hiring for AI that survives contact with a real week.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: 'factory',
    accent: '#7c3aed',
    summary:
      'Build AI for the plant floor, where quality, uptime and safety are measured in hours of production, not accuracy points.',
    chips: ['3 domain projects', '1 capstone', 'Sensor-data patterns'],
    projects: [
      {
        title: 'Visual quality inspector',
        body: 'Flags defects from line images and shows the operator what it saw.',
      },
      {
        title: 'Maintenance-manual RAG assistant',
        body: 'Answers a technician mid-shift with the procedure and the page it came from.',
      },
      {
        title: 'Downtime root-cause agent',
        body: 'Correlates sensor and shift data to narrow why the line stopped.',
      },
    ],
    tags: ['Computer vision', 'RAG', 'Time series', 'Evaluation'],
    ladder: [
      { title: 'Process, quality or plant engineer', body: 'Your role today' },
      {
        title: 'AI-enabled manufacturing engineer',
        body: 'Ship AI workflows on plant data',
      },
      {
        title: 'AI product owner, operations',
        body: 'Own vision, monitoring and rollout',
      },
      {
        title: 'AI transformation lead, manufacturing',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'Plants are hiring for AI that an operator will actually trust on shift.',
  },
  {
    id: 'hr',
    label: 'HR & people',
    icon: 'users',
    accent: '#12a0d8',
    summary:
      'Build AI for hiring, enablement and people operations, where fairness and candidate experience are the product.',
    chips: ['3 domain projects', '1 capstone', 'Bias-aware patterns'],
    projects: [
      {
        title: 'Structured screening assistant',
        body: 'Summarises applications against the scorecard and shows its evidence per criterion.',
      },
      {
        title: 'Policy RAG assistant',
        body: 'Answers employee questions with the handbook clause attached.',
      },
      {
        title: 'Skills-gap analyser',
        body: 'Maps the team you have against the roles you are hiring for, and what to train.',
      },
    ],
    tags: ['RAG', 'Fairness checks', 'Document AI', 'Evaluation'],
    ladder: [
      { title: 'Recruiter, HRBP or L&D lead', body: 'Your role today' },
      {
        title: 'AI-enabled people analyst',
        body: 'Ship AI workflows on people data',
      },
      {
        title: 'AI product owner, people systems',
        body: 'Own retrieval, fairness and audit',
      },
      {
        title: 'AI transformation lead, people function',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'People teams are hiring for AI they can explain to a candidate and a regulator.',
  },
  {
    id: 'product',
    label: 'Product & consulting',
    icon: 'package',
    accent: '#c9a227',
    summary:
      'Build AI for product and advisory work, where the job is to scope the right problem and prove the idea before the build.',
    chips: ['3 domain projects', '1 capstone', 'Discovery patterns'],
    projects: [
      {
        title: 'Research synthesis copilot',
        body: 'Turns interviews and tickets into themes you can trace back to a quote.',
      },
      {
        title: 'Knowledge-base RAG assistant',
        body: 'Answers client questions from your own decks and past engagements, with sources.',
      },
      {
        title: 'AI opportunity assessor',
        body: 'Scores a workflow for AI fit and sizes the case before anyone writes code.',
      },
    ],
    tags: ['RAG', 'Agents', 'Prototyping', 'Evaluation'],
    ladder: [
      { title: 'Product manager or consultant', body: 'Your role today' },
      {
        title: 'AI-enabled product manager',
        body: 'Ship AI features and prototypes yourself',
      },
      {
        title: 'AI product owner',
        body: 'Own discovery, evaluation and delivery',
      },
      {
        title: 'AI practice lead',
        body: 'Set AI direction for the function',
      },
    ],
    futureReady:
      'Product and advisory teams are hiring for people who can prove the idea, not just pitch it.',
  },
];

export const TOOL_LOGOS = [
  { src: '/applied-ai/tools/langchain.png', alt: 'LangChain', width: 113 },
  { src: '/applied-ai/tools/llamaindex.png', alt: 'LlamaIndex', width: 61 },
  { src: '/applied-ai/tools/crewai.png', alt: 'CrewAI', width: 63 },
  { src: '/applied-ai/tools/autogen.png', alt: 'AutoGen', width: 55 },
  { src: '/applied-ai/tools/dify.png', alt: 'Dify.ai', width: 44 },
  { src: '/applied-ai/tools/claude.png', alt: 'Claude', width: 93 },
  { src: '/applied-ai/tools/notion.png', alt: 'Notion', width: 59 },
  { src: '/applied-ai/tools/pinecone.svg', alt: 'Pinecone', width: 98 },
];
