// --- CONFIG ---
const CONTACT_EMAIL = 'aayushdyadav2003@gmail.com';
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

// --- DATA ---
const projectsData = [
    {
        title: "Aura — Production RAG Platform",
        githubRepo: "https://github.com/03ADY/RAG-Chatbot",
        githubRepoExtra: "https://github.com/03ADY/RAG-Chatbot-Frontend",
        media: [
            { type: 'image', url: 'images/rag1.jpeg' },
            { type: 'image', url: 'images/rag2.jpeg' }
        ],
        description: "Full-stack RAG you can ship: FastAPI backend, Gemini 2.0, ChromaDB, document APIs, and a separate web UI—with sessions, citations, and ops endpoints recruiters expect in production AI.",
        details: [
            "Versioned <strong>REST API</strong> (<code>/api/v1</code>) for chat, document upload/delete/reindex, and session memory.",
            "<strong>Grounded answers</strong> via history-aware RAG, MMR retrieval, and source citations in the UI.",
            "Production hygiene: optional API key auth, rate limits, <strong>/health</strong>, <strong>/ready</strong>, and <strong>/metrics</strong>.",
            "<strong>Docker Compose</strong> + split frontend/backend repos—same architecture pattern used in industry RAG products."
        ],
        skills: ["RAG", "LangChain", "Gemini 2.0", "ChromaDB", "FastAPI", "Docker", "REST API", "Vector DB", "LLM", "Observability"]
    },
    {
        title: "CommerceIQ — Retail Analytics Dashboard",
        githubRepo: "https://github.com/03ADY/ECommerce-Insight-Dashboard",
        media: [
            { type: 'image', url: 'images/ecommerce1.jpeg' },
            { type: 'image', url: 'images/ecommerce2.jpeg' }
        ],
        description: "Business intelligence for e-commerce: KPIs, customer segmentation, demand forecasting, and cohort analysis—built to explain revenue drivers, not just plot charts.",
        details: [
            "Period-over-period KPIs, drill-downs, and <strong>RFM playbooks</strong> for marketing and retention teams.",
            "<strong>Prophet forecasting</strong> with MAPE-style accuracy reporting for inventory and revenue planning.",
            "Cohort views, goal tracking, and automated insight summaries for stakeholder reviews.",
            "Exportable executive briefs and demo scenarios for presentations and interviews."
        ],
        skills: ["Streamlit", "Prophet", "Pandas", "Plotly", "RFM", "Forecasting", "Cohort Analysis", "Business Intelligence", "Data Analytics"]
    },
    {
        title: "TradePulse — Trading & Risk Analytics",
        githubRepo: "https://github.com/03ADY/AI-Powered-Trading-Bot",
        media: [
            { type: 'image', url: 'images/stocks1.jpeg' },
            { type: 'image', url: 'images/stocks2.jpeg' }
        ],
        description: "Quant-style research app: live market data, signal scanner, backtesting, paper trading, and risk metrics (VaR, Sharpe, Monte Carlo)—strong full-stack + data engineering story.",
        details: [
            "Multi-symbol dashboard with MACD, RSI, Bollinger Bands, and <strong>SPY benchmark</strong> comparison.",
            "<strong>Backtest lab</strong> with equity curves, walk-forward validation, and strategy vs buy-and-hold alpha.",
            "Paper portfolio, trade journal, correlation heatmaps, and position-sizing helpers.",
            "Exportable HTML/CSV reports; works offline with synthetic data for demos."
        ],
        skills: ["Streamlit", "Python", "yfinance", "Backtesting", "VaR", "Sharpe Ratio", "Plotly", "Quantitative Finance", "Time Series"]
    },
    {
        title: "AI Toolkit — Multi-Modal AI Services",
        githubRepo: "https://github.com/03ADY/AI-Toolkit",
        media: [
            { type: 'image', url: 'images/toolkit.jpeg' },
            { type: 'image', url: 'images/toolkit1.jpeg' }
        ],
        description: "Nine Hugging Face AI services behind one FastAPI backend and Streamlit UI—NLP, vision, and speech in a single deployable stack (great MLOps + API design sample).",
        details: [
            "Sentiment, summarization, translation, captioning, text generation, TTS, STT, chatbot, and Q&A endpoints.",
            "Batch jobs, latency benchmarking, service health grid, and session reporting for reliability testing.",
            "Document Analyzer pipeline and integration hooks (API keys, webhooks) for real product patterns.",
            "<strong>Docker Compose</strong> local deploy; configurable API base URL for frontend/backend split."
        ],
        skills: ["FastAPI", "Streamlit", "Hugging Face", "Transformers", "Docker", "NLP", "Computer Vision", "Speech AI", "REST API", "MLOps"]
    },
    {
        title: "PredictiveOps — Fleet Maintenance Analytics",
        githubRepo: "https://github.com/03ADY/Smart-Hybrid-Maintenance",
        media: [
            { type: 'image', url: 'images/hybrid1.jpeg' },
            { type: 'image', url: 'images/hybrid2.jpeg' }
        ],
        description: "IoT-style predictive maintenance: LSTM health scoring across a 10-machine fleet, live sensor dashboards, work orders, and audit logs—shows ML + operational software skills.",
        details: [
            "<strong>Fleet Command Center</strong> with risk ranking, ROI estimates, and plant-wide health maps.",
            "Live sensor views, maintenance playbooks, and historical timelines (MTBF-style analysis).",
            "Maintenance planner with Gantt scheduling and <strong>CMMS JSON</strong> export for handoff to ops tools.",
            "SQLite-backed audit trail; HTML reports for managers; LSTM training pipeline included."
        ],
        skills: ["Streamlit", "LSTM", "TensorFlow", "SQLite", "Predictive Maintenance", "Time Series", "IoT Analytics", "Python"]
    },
    {
        title: "RetainAI — Customer Churn Prediction",
        githubRepo: "https://github.com/03ADY/ChurnAI",
        media: [
            { type: 'image', url: 'images/churn1.jpeg' },
            { type: 'image', url: 'images/churn2.jpeg' }
        ],
        description: "End-to-end churn ML product: XGBoost with engineered features, calibrated thresholds, model comparison, and a retention ROI view—connects data science to business impact.",
        details: [
            "<strong>7 engineered features</strong> and train modes that compare XGBoost, Random Forest, and logistic regression.",
            "Threshold tuning for precision/recall trade-offs; <strong>PR-AUC</strong> and calibration curves—not vanity accuracy.",
            "Live scoring, batch export, and five app workspaces including a <strong>Business ROI</strong> retention calculator.",
            "Modular <code>churnai/</code> Python package, training scripts, and Docker for reproducible demos."
        ],
        skills: ["XGBoost", "Scikit-learn", "Streamlit", "Feature Engineering", "Classification", "MLOps", "Docker", "Model Evaluation", "Python"]
    }
];

const playgroundAppsData = [
    {
        title: "Aura RAG — Live Demo",
        description: "Try grounded Q&A with source citations, session chat, and document upload—full-stack GenAI in the browser.",
        url: "https://aura-rag-chatbot.vercel.app/",
        image: "images/rag2.jpeg"
    },
    {
        title: "RetainAI — Churn Scoring",
        description: "Score customers, compare models, and estimate retention campaign ROI in an interactive Streamlit app.",
        url: "https://ay-churn-ai.streamlit.app/",
        image: "images/churn2.jpeg"
    },
    {
        title: "CommerceIQ — Retail BI",
        description: "Explore sales KPIs, RFM segments, forecasts, and cohort trends in a live analytics dashboard.",
        url: "https://ecommerce-insight-dashboard.streamlit.app/",
        image: "images/ecommerce2.jpeg"
    },
    {
        title: "AI Toolkit — 9 AI Services",
        description: "Run sentiment, summarization, captioning, speech, and more from one multi-modal AI control panel.",
        url: "https://ay-ai-toolkit.streamlit.app/",
        image: "images/toolkit1.jpeg"
    },
    {
        title: "PredictiveOps — Fleet Maintenance",
        description: "Monitor machine health, simulate failures, and plan maintenance across a multi-machine fleet.",
        url: "https://smart-hybrid-maintenance.streamlit.app/",
        image: "images/hybrid2.jpeg"
    },
    {
        title: "TradePulse — Markets & Backtests",
        description: "Scan signals, backtest strategies, and review risk metrics with live and historical market data.",
        url: "https://ai-powered-trading-bot.streamlit.app/",
        image: "images/stocks2.jpeg"
    }
];

const productionSystemsData = [
    {
        rank: 1,
        title: 'PRONTO',
        subtitle: 'Enterprise RAG Copilot — LangChain, FAISS & Jira',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'Production RAG support brain: FAISS vector retrieval, LangChain + Gemini orchestration, FastAPI microservices, and React—grounded answers under live incident SLAs.',
        description: 'PRONTO is Allwave’s production support copilot—grounding every response in internal documentation, integrating Jira for ticket context, and automating AI analysis for L1/L2 engineers.',
        tags: ['RAG', 'LangChain', 'FAISS', 'Gemini', 'FastAPI', 'React', 'MLOps', 'Lambda'],
        stack: 'Python · FastAPI · LangChain · FAISS · React 18 · Gemini · Jira REST · boto3 · AWS Lambda · Amplify',
        architecture: [
            'Lazy-loaded RAG engine, Jira service, and escalation workflows for Lambda cold-start limits.',
            'FAISS index (local + S3 sync) with curated knowledge-base ingestion.',
            'Support workflow: smart chat, ticket analysis, apply-solution, and feedback loops.',
            'React admin UI: ticket pagination, analytics, and priority notifications.'
        ],
        infrastructure: [
            'Lambda + API Gateway; FAISS hydration from S3 on cold start.',
            'JWT auth with admin approval gate; production CORS and strict environment separation.'
        ],
        highlights: [
            'Shipped in production with real incidents and SLA expectations.',
            'LangChain + Gemini with domain instructions and citation-style grounding.',
            'Resolved Lambda INIT timeouts, S3 KB sync, and cross-environment networking.'
        ],
        impact: [
            'Lower mean-time-to-resolution via RAG-cited answers and automated Jira commentary.',
            'Direct proof of production GenAI—aligned with vector-search and LLM engineering roles.'
        ]
    },
    {
        rank: 2,
        title: 'BINGO',
        subtitle: 'GenAI Presales — RAG, Gemini & Amplify Full Stack',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'Full-stack GenAI presales platform: Ask BINGO RAG over 2,000+ SKUs, Gemini async BOQ generation, AVIXA validation, and React on AWS Amplify Gen 2.',
        description: 'Bill of Quantities Intelligent Next-Gen Optimizer turns client requirements into AVIXA CTS-D compliant BOQs, schematics, and export-ready proposals for integrator presales teams.',
        tags: ['RAG', 'Gemini', 'LLM', 'TypeScript', 'React', 'Amplify Gen 2', 'GraphQL', 'CDK'],
        stack: 'React 18 · Vite · Amplify Gen 2 · DynamoDB · AppSync · Cognito · Lambda · SES · Gemini 2.5 Pro · ExcelJS · jsPDF · docx',
        architecture: [
            'Amplify Gen 2: auth, GraphQL, 8+ Lambdas (Gemini proxy, async job queue, weekly reports, admin bootstrap).',
            'Ask BINGO RAG: vector + DB search, IndexedDB cache, exact-model matching—grounded SKU answers.',
            'AVIXA engines: viewing distance, audio coverage, camera FOV; per-category brand enforcement.',
            'CAD pipeline: signal flow, rack elevations, Stardraw symbols, DXF export with 27+ layers.'
        ],
        infrastructure: [
            'Async Gemini job queue to avoid API Gateway timeouts on large BOQ generations.',
            'Cognito groups + bootstrap-admin Lambda; IAM-scoped SES and ActivityLog audit trail.'
        ],
        highlights: [
            'Database-first product sourcing with web price estimation and dimension retrieval.',
            'Natural-language BOQ edits with strict brand rules per component class.',
            'Multi-format export: Excel, PDF, and Word proposal packs.'
        ],
        impact: [
            'Collapses multi-day manual BOQ work into AVIXA-validated, client-ready packages.',
            'Showcases end-to-end full-stack AI: RAG, LLM jobs, CDK infra, and enterprise RBAC.'
        ]
    },
    {
        rank: 3,
        title: 'AV Inventory Ops',
        subtitle: 'Cloud-Native Enterprise Platform — 36-Table AWS Stack',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'Flagship full-stack operations platform: Amplify Gen 2, 36 DynamoDB tables, 19 Lambdas, GraphQL API, React PWA, embedded Gemini assistant, and India GST/MSME compliance.',
        description: 'End-to-end AV integration operations system—inventory, procurement, invoicing, AMC/service tickets, client portal, and statutory compliance (GST, MSME, Tally XML) in one auditable cloud platform.',
        tags: ['TypeScript', 'Amplify Gen 2', 'GraphQL', 'DynamoDB', 'Lambda', 'Gemini', 'React PWA', 'MLOps'],
        stack: 'TypeScript · Amplify Gen 2 · AppSync GraphQL · DynamoDB (36 tables) · 19× Lambda · Cognito · S3 · SES · EventBridge · React 18 PWA · TanStack Query · Playwright',
        architecture: [
            'Domain model: products, unit records (8 GSIs), GRN, delivery challans, invoices, BOQ uploads, AMC, service tickets, vendors, clients, audit logs.',
            '19 purpose-built Lambdas: alert engine, invoice scheduler, MSME compliance, BOQ parser, chatbot handler, Tally export, FY rollover, and more.',
            'React PWA with shadcn/Radix UI, Zod forms, TanStack Table, Recharts, QR scanning, Cmd+K palette, and embedded Gemini assistant.'
        ],
        infrastructure: [
            'PITR, encryption at rest, WAF on public endpoints; Secrets Manager for API keys.',
            'EventBridge/Scheduler for FY rollover, TDS, warranty alerts, AMC renewal, and digest emails.',
            '22 transactional SES templates; Vitest backend + Playwright E2E on frontend.'
        ],
        highlights: [
            'Single system of record with full audit trails across operations and finance.',
            'Automated India compliance: GSTIN validation, MSMED Act workflows, e-Way Bill alignment.',
            'BOQ parser + Gemini chatbot reduce manual data entry on core screens.'
        ],
        impact: [
            'Replaced fragmented spreadsheets with one production-grade, serverless platform.',
            'Demonstrates large-scale full-stack ownership—backend, frontend, AI, and compliance.'
        ]
    },
    {
        rank: 4,
        title: 'Nexo',
        subtitle: 'Full-Stack AI Assistant — BOQ-to-Code on App Runner',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'TypeScript/React + Node.js full stack on AWS App Runner: Gemini code generation, BOQ parsing pipelines, troubleshooting modes, and team snippet libraries in DynamoDB.',
        description: 'Nexo accelerates AV programmers from BOQ to deployable control code—structured site capture, multi-mode AI workflows, persisted history, and admin-provisioned access.',
        tags: ['TypeScript', 'React', 'Gemini', 'LLM', 'App Runner', 'Node.js', 'DynamoDB', 'Full Stack'],
        stack: 'TypeScript · React 18 · Vite · Node.js API · @google/genai · App Runner · Cognito · DynamoDB · S3',
        architecture: [
            'Quick Ask (generate / troubleshoot / document) and BOQ Guided Flow (parse → questions → guide).',
            'Pipeline: Excel/Word → /api/boq/parse → validation → /api/boq/questions → /api/boq/guide.',
            'Per-user history and team snippets in DynamoDB; admin provisioning UI.'
        ],
        infrastructure: [
            'AWS App Runner + ECR; /api/health monitoring; Cognito invite-only pools with ADMIN RBAC.',
            'Secrets via environment; zero client-side API keys in production builds.'
        ],
        highlights: [
            'Deployed with syntax-highlighted, deployment-ready code output.',
            'BOQ parsers for .xlsx/.xls/.docx with intelligent column detection.',
            'Diagnosed App Runner timeouts vs long Gemini jobs using CloudTrail analysis.'
        ],
        impact: [
            'Cuts BOQ-to-code cycle time across Crestron, Extron, QSC, and allied stacks.',
            'Workflow-shaped LLM product—not generic chat—built for specialist engineers.'
        ]
    },
    {
        rank: 5,
        title: 'HiRo',
        subtitle: 'Multi-Tenant AI SaaS — FastAPI, Gemini & CI/CD',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'Multi-tenant HR platform: FastAPI on App Runner, Gemini HR copilot, DynamoDB workflows, SES automation, and CodeBuild → ECR production CI/CD.',
        description: 'HiRo centralizes hiring and onboarding with branded templates, workflow vs campaign automation, verified sending domains, and auditable activity logs.',
        tags: ['FastAPI', 'Gemini', 'Multi-Tenant', 'App Runner', 'MLOps', 'DynamoDB', 'SES'],
        stack: 'FastAPI · App Runner · Cognito · SES · DynamoDB · Gemini · CodeBuild · ECR · CloudWatch',
        architecture: [
            'Multi-tenant DynamoDB models for templates, activity logs, and HR workflow state.',
            'Split automation: workflow-triggered sequences vs standalone campaign sends.',
            'Gemini HR chatbot in compose/send flows with configurable model routing.'
        ],
        infrastructure: [
            'GitHub → CodeBuild → ECR → App Runner deploy pipeline.',
            'SES domain verification for production deliverability; CloudWatch runbooks.'
        ],
        highlights: [
            '7+ branded HTML email templates; per-user verified SES sending domains.',
            'Workflow vs campaign automation with auditable send logs.',
            'Production hardening: template sync, compose UI, preview rendering, Gemini config.'
        ],
        impact: [
            'Unified hiring and onboarding with enterprise email deliverability.',
            'Shows internal SaaS delivery: multi-tenant data, CI/CD, and incident response.'
        ]
    },
    {
        rank: 6,
        title: 'EZ Configurator',
        subtitle: '3D + GenAI Design Studio — React Three Fiber & Express',
        company: 'Allwave',
        period: 'Jan 2026 – Present',
        summary: 'React Three Fiber 3D studio with AVIXA physics engines, Gemini auto-design API, Express sidecar, and one-click compliance + BOQ PDF handover.',
        description: 'EZ Configurator lets presales and engineering validate room designs before procurement—AVIXA calculations, immersive 3D placement, and AI-assisted layout proposals.',
        tags: ['React', 'Three.js', 'Gemini', 'LLM', 'Express', 'AVIXA', 'Full Stack'],
        stack: 'React 18 · Three.js · @react-three/fiber · Zustand · Tailwind · Express · Gemini · jsPDF',
        architecture: [
            'Physics engines: DISCAS viewing distance, SPL, Sabine RT60, cable limits (HDMI, HDBaseT, Dante, AVoIP).',
            '42-SKU catalog across 14 brands; PBR materials and snap-to-surface 3D placement.',
            'Express sidecar: POST /api/chat and /api/auto-design for constraint-driven proposals.'
        ],
        infrastructure: [
            'Split Vite frontend + Node Express AI API for secure key isolation.',
            'PDF pipeline: AVIXA compliance report, GST BOQ, and network scheme in one export.'
        ],
        highlights: [
            'Floor heatmaps and per-display AVIXA pass/fail badges before purchase orders.',
            'Catalog build/validate scripts enforce product taxonomy integrity.',
            'Module handover unifies compliance, BOQ, and network documentation.'
        ],
        impact: [
            'De-risks hardware commits by proving designs against physics—not slides alone.',
            'Combines 3D visualization, domain engineering math, and generative AI in one product.'
        ]
    }
];

const skillsData = [
    { title: 'Programming Languages & Frameworks', skills: ['Python (NumPy, Pandas)', 'SQL', 'FastAPI', 'Flask', 'Data Structures', 'Algorithms'] },   
    { title: 'Machine Learning', skills: ['Scikit-learn', 'XGBoost', 'Random Forests', 'SVMs', 'Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Model Evaluation', 'SMOTE', 'Reinforcement Learning'] },   
    { title: 'Deep Learning', skills: ['TensorFlow', 'PyTorch', 'Keras', 'CNNs', 'RNNs (LSTMs, GRUs)', 'Transformers', 'Transfer Learning', 'GANs'] },   
    { title: 'MLOps & Deployment', skills: ['Docker', 'Kubernetes (basics)', 'Render', 'Heroku', 'Git', 'Uvicorn', 'RESTful API', 'Microservices', 'CI/CD', 'Model Versioning', 'Monitoring', 'Hugging Face Spaces'] },   
    { title: 'Big Data & Databases', skills: ['Hadoop', 'Spark', 'Apache Kafka', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'MongoDB', 'SQLite3'] },   
    { title: 'Data Visualization & BI', skills: ['Plotly', 'Matplotlib', 'Seaborn', 'Dash', 'Tableau (conceptual)', 'Streamlit'] },   
    { title: 'Specialized Tools', skills: ['SHAP', 'LIME', 'Prophet', 'Whisper API', 'YOLOv5', 'OpenAI API', 'LLMs (ChatGPT)', 'Financial Modeling', 'Monte Carlo Simulation', 'A/B Testing', 'Alpaca API', 'Technical Indicators (MACD, RSI, Bollinger Bands, SMAs)'] }   
];

// --- UI LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Function to create interactive covers (NO LONGER USED FOR PROJECT CARDS DIRECTLY, but kept as a fallback/example if needed elsewhere)
    const createInteractiveCover = (project) => {
        // This function is still defined but the projectsData no longer uses it for the main card display.
        // The project card will now directly use the first image from its 'media' array.
        // This function would only be called if a project explicitly had interactive_cover defined,
        // which we've removed for the main project display.
        const { type } = project.interactive_cover || {}; // Handle case where interactive_cover might not exist
        let svgContent = '';
        switch (type) {
            case 'dashboard':
                svgContent = `
                    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-gray-900">
                        <defs><filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                        <rect width="300" height="150" fill="#0a192f"/>
                        <path d="M20,130 C50,20 80,110 140,80 S200,40 280,60" stroke="#a78bfa" stroke-width="1" class="svg-hidden draw-on-hover"/>
                        <path d="M20,130 C50,20 80,110 140,80 S200,40 280,60" stroke="#6366f1" stroke-width="2" style="filter:url(#glow);" class="svg-hidden draw-on-hover"/>
                        <text x="20" y="25" font-family="Inter, sans-serif" font-size="12" fill="#e2e8f0" class="font-bold">Sales Forecasting</text>
                    </svg>`;
                break;
            case 'trading':
                svgContent = `
                    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-gray-900">
                        <rect width="300" height="150" fill="#161a1d"/>
                        <path d="M30 110 L 80 40 L 130 80 L 180 60 L 230 90 L 280 30" stroke="#4f46e5" stroke-width="2" class="draw-on-hover"/>
                        <g class="svg-hidden">
                            <circle cx="80" cy="40" r="4" fill="#39ff14"/>
                            <circle cx="280" cy="30" r="4" fill="#dc143c"/>
                        </g>
                        <text x="20" y="25" font-family="Inter, sans-serif" font-size="12" fill="#e2e8f0" class="font-bold">LSTM Analysis</text>
                    </svg>`;
                break;
            case 'toolkit':
                svgContent = `
                    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-gray-900">
                        <rect width="300" height="150" fill="#111827"/>
                        <defs><filter id="toolkit-glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                        <g class="toolkit-glow">
                            <path d="M150 50 L 120 67 L 120 101 L 150 118 L 180 101 L 180 67 Z" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="1.5"/>
                            <text x="138" y="90" font-family="monospace" font-size="14" fill="#c4b5fd">API</text>
                        </g>
                        <g class="svg-hidden">
                            <path d="M110 67 L 80 84" stroke="#a78bfa" stroke-width="1"/>
                            <path d="M190 67 L 220 84" stroke="#a78bfa" stroke-width="1"/>
                            <path d="M110 101 L 80 118" stroke="#a78bfa" stroke-width="1"/>
                            <path d="M190 101 L 220 118" stroke="#a78bfa" stroke-width="1"/>
                            <text x="50" y="88" font-size="10" fill="white">Sentiment</text>
                            <text x="225" y="88" font-size="10" fill="white">Summarize</text>
                            <text x="50" y="122" font-size="10" fill="white">Caption</text>
                            <text x="225" y="122" font-size="10" fill="white">Generate</text>
                        </g>
                        <text x="20" y="25" font-family="Inter, sans-serif" font-size="12" fill="#e2e8f0" class="font-bold">AI Services Toolkit</text>
                    </svg>`;
                break;
            case 'maintenance':
                svgContent = `
                    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-gray-900">
                        <rect width="300" height="150" fill="#2d2d2d"/>
                        <g class="pm-gear" style="transform-origin: 80px 75px;">
                            <circle cx="80" cy="75" r="30" fill="none" stroke="#add8e6" stroke-width="4" stroke-dasharray="5 5"/>
                        </g>
                        <path d="M110 75 H 280" stroke="rgba(255,140,0,0.3)" stroke-width="2"/>
                        <path d="M110 75 H 280" stroke="#ff8c00" stroke-width="2" class="draw-on-hover"/>
                        <g class="svg-hidden">
                            <rect x="230" y="65" width="50" height="20" fill="#0a0a0a" stroke="#ff8c00"/>
                            <text x="238" y="79" font-size="10" fill="#ff8c00">RUL: OK</text>
                        </g>
                        <text x="20" y="25" font-family="Inter, sans-serif" font-size="12" fill="#e2e8f0" class="font-bold">Predictive Maintenance</text>
                    </svg>`;
                break;
            case 'churn':
                svgContent = `
                    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-gray-900">
                        <rect width="300" height="150" fill="#003638"/>
                        <g class="churn-dot-imbalanced">
                            ${[...Array(6)].map((_, i) => `<circle cx="${40 + i * 40}" cy="50" r="5" fill="#008080" class="churn-dot"/>`).join('')}
                            <circle cx="120" cy="100" r="5" fill="#ffbf00" class="churn-dot"/>
                        </g>
                        <g class="svg-hidden">
                            <circle cx="100" cy="95" r="5" fill="#ffbf00" class="churn-dot churn-dot-synthetic"/>
                            <circle cx="140" cy="105" r="5" fill="#ffbf00" class="churn-dot churn-dot-synthetic"/>
                        </g>
                        <text x="20" y="25" font-family="Inter, sans-serif" font-size="12" fill="#e2e8f0" class="font-bold">SMOTE Data Balancing</text>
                    </svg>`;
                break;
            default:
                // If no interactive_cover type is matched or provided, it would fall back to nothing here.
                // However, the project cards are now designed to just use the first 'media' image.
                svgContent = `<div class="w-full h-full bg-gray-800 flex items-center justify-center"><p class="text-slate-400">Project Image Placeholder</p></div>`;
        }
        return `<div class="interactive-cover-container">${svgContent}</div>`;
    };

    // Populate portfolio sections
    const projectsGrid = document.getElementById('projects-grid');
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = "project-card card-bg rounded-2xl flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer";
        card.innerHTML = `
            <div class="interactive-cover-container">
                <img src="${project.media[0].url}" alt="${project.title} Cover" loading="lazy" class="w-full h-full object-cover object-center" onerror="this.onerror=null;this.src='https://placehold.co/300x150/1e1b4b/c4b5fd?text=Image+Error';">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div>
                    <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                    <p class="text-slate-400 mb-4 text-sm">${project.description}</p>
                </div>
                <div class="flex flex-wrap gap-2 mt-auto pt-4">
                    ${project.skills.slice(0, 3).map(skill => `<span class="tag rounded-md px-2 py-1 text-xs">${skill}</span>`).join('')}
                </div>
            </div>`;
        card.addEventListener('click', () => openModal(index));
        projectsGrid.appendChild(card);
    });
    const skillsGrid = document.querySelector('#skills .grid');
    skillsData.forEach(category => {
        const card = document.createElement('div');
        card.className = "card-bg p-6 rounded-2xl";
        card.innerHTML = `<h3 class="text-xl font-bold text-white mb-4">${category.title}</h3><div class="flex flex-wrap gap-2">${category.skills.map(skill => `<span class="tag rounded-md px-3 py-1 text-sm">${skill}</span>`).join('')}</div>`;
        skillsGrid.appendChild(card);
    });

    // Function to render Playground apps
    const renderPlaygroundApps = () => {
        const playgroundAppsGrid = document.getElementById('playground-apps-grid');
        playgroundAppsGrid.innerHTML = ''; // Clear existing content
        playgroundAppsData.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = "card-bg rounded-2xl flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer";
            appCard.innerHTML = `
                <img src="${app.image}" alt="${app.title}" loading="lazy" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1e1b4b/c4b5fd?text=App+Image';">
                <div class="p-6 flex flex-col flex-grow">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">${app.title}</h3>
                        <p class="text-slate-400 mb-4 text-sm">${app.description}</p>
                    </div>
                    <div class="mt-auto pt-4">
                        <a href="${app.url}" target="_blank" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                            Launch App
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-1 -mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                </div>
            `;
            playgroundAppsGrid.appendChild(appCard);
        });
    };


    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    };
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

    // Active nav on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const setActiveNav = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${id}`);
        });
    };
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));

    // Scroll to top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Typing animation
    const roles = ["Full Stack AI Developer", "AI Engineer", "Machine Learning Engineer"];
    let roleIndex = 0, charIndex = 0;
    const roleTextElement = document.getElementById('role-text');
    function typeRole() { if(!roleTextElement) return; if (charIndex < roles[roleIndex].length) { roleTextElement.textContent += roles[roleIndex].charAt(charIndex++); setTimeout(typeRole, 100); } else { setTimeout(eraseRole, 2000); } }
    function eraseRole() { if(!roleTextElement) return; if (charIndex > 0) { roleTextElement.textContent = roles[roleIndex].substring(0, --charIndex); setTimeout(eraseRole, 50); } else { roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeRole, 500); } }
    typeRole();

    // Modal logic
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content');
    window.openModal = (projectIndex) => {
        const project = projectsData[projectIndex];
        let galleryHtml = `<div id="media-viewer" class="mb-4 rounded-lg overflow-hidden bg-black"></div><div id="thumbnail-strip" class="flex gap-2 justify-center flex-wrap"></div>`;
        const repoLinks = [project.githubRepo, project.githubRepoExtra].filter(Boolean).map((url, i) => {
            const label = project.githubRepoExtra && i === 1 ? 'Frontend repo' : 'GitHub';
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-sky-400 text-sm font-medium">${label} →</a>`;
        }).join('<span class="text-slate-600 mx-2">·</span>');
        const repoBlock = repoLinks ? `<div class="flex flex-wrap items-center gap-1 mb-4">${repoLinks}</div>` : '';
        modalContent.innerHTML = `<button class="absolute top-4 right-6 text-slate-400 hover:text-white text-3xl z-10" onclick="closeModal()">&times;</button>${galleryHtml}<div class="px-1 mt-6"><h2 class="text-3xl font-bold text-white mb-2">${project.title}</h2>${repoBlock}<p class="text-indigo-300 mb-6">${project.description}</p><h4 class="text-lg font-semibold text-white mb-2">Key Achievements:</h4><ul class="list-none space-y-2 mb-6">${project.details.map(detail => `<li class="flex items-start text-slate-300"><span class="text-indigo-400 mr-3 mt-1">▪</span><div class="flex-1">${detail}</div></li>`).join('')}</ul><h4 class="text-lg font-semibold text-white mb-3">Technologies Used:</h4><div class="flex flex-wrap gap-2">${project.skills.map(skill => `<span class="tag rounded-md px-3 py-1 text-sm">${skill}</span>`).join('')}</div></div>`;
        populateGallery(projectIndex);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    window.closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = 'fadeIn 0.3s ease-out';
            document.body.style.overflow = 'auto';
            modalContent.innerHTML = '';
        }, 300);
    };
    window.populateGallery = (projectIndex) => {
        const project = projectsData[projectIndex];
        const thumbnailStrip = document.getElementById('thumbnail-strip');
        if (project.media.length > 1) {
            thumbnailStrip.innerHTML = project.media.map((mediaItem, index) => `<div class="relative"><img src="${mediaItem.url}" class="thumbnail rounded-md w-24 h-16 object-cover" data-media-index="${index}" data-project-index="${projectIndex}"></div>`).join('');
            thumbnailStrip.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.addEventListener('click', (e) => switchMedia(e.target.dataset.mediaIndex, e.target.dataset.projectIndex));
            });
        } else { thumbnailStrip.innerHTML = ''; } // Hide thumbnail strip if only one image
        switchMedia(0, projectIndex);
    };
    window.switchMedia = (mediaIndex, projectIndex) => {
        const mediaItem = projectsData[projectIndex].media[mediaIndex];
        const viewer = document.getElementById('media-viewer');
        viewer.innerHTML = `<img src="${mediaItem.url}" alt="Project media" loading="lazy" class="w-full h-auto max-h-[50vh] object-contain" onerror="this.onerror=null;this.src='https://placehold.co/1080x720/1e1b4b/c4b5fd?text=Error+Loading+Image';">`;
        document.querySelectorAll('#thumbnail-strip .thumbnail').forEach((thumb, i) => thumb.classList.toggle('active', i == mediaIndex));
    };
    window.onclick = (event) => { if (event.target == modal) closeModal(); };

    const listSection = (title, items) => {
        if (!items?.length) return '';
        return `<h4 class="text-lg font-semibold text-white mt-6 mb-2">${title}</h4><ul class="list-none space-y-2 mb-4">${items.map(item => `<li class="flex items-start text-slate-300 text-sm"><span class="text-indigo-400 mr-3 mt-1">▪</span><span>${item}</span></li>`).join('')}</ul>`;
    };

    window.showProductionSystemModal = (proj) => {
        modalContent.innerHTML = `
            <button class="absolute top-4 right-6 text-slate-400 hover:text-white text-3xl z-10" onclick="closeModal()">&times;</button>
            <div class="px-1">
                <span class="text-xs font-semibold text-accent uppercase tracking-wide">Production · Rank #${proj.rank}</span>
                <p class="text-sm text-slate-400 mt-1">${proj.company} · ${proj.period}</p>
                <h2 class="text-3xl font-bold text-white mt-2 mb-1">${proj.title}</h2>
                <p class="text-indigo-300 mb-4">${proj.subtitle}</p>
                <p class="text-slate-300 text-sm mb-4">${proj.summary}</p>
                <p class="text-slate-400 text-sm mb-4">${proj.description}</p>
                <h4 class="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                <p class="text-slate-400 text-sm mb-4">${proj.stack}</p>
                ${listSection('Architecture', proj.architecture)}
                ${listSection('Infrastructure', proj.infrastructure)}
                ${listSection('Highlights', proj.highlights)}
                ${listSection('Impact', proj.impact)}
                <h4 class="text-lg font-semibold text-white mt-4 mb-2">Technologies</h4>
                <div class="flex flex-wrap gap-2">${proj.tags.map(tag => `<span class="tag rounded-md px-3 py-1 text-sm">${tag}</span>`).join('')}</div>
            </div>`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const renderProductionSystems = () => {
        const grid = document.getElementById('production-systems-grid');
        if (!grid) return;
        grid.innerHTML = '';
        [...productionSystemsData].sort((a, b) => a.rank - b.rank).forEach((proj) => {
            const card = document.createElement('article');
            card.className = 'production-card card-bg rounded-2xl flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300';
            card.innerHTML = `
                <div class="p-6 flex flex-col flex-grow">
                    <span class="text-xs font-bold text-accent mb-2">#${String(proj.rank).padStart(2, '0')}</span>
                    <h3 class="text-xl font-bold text-white mb-1">${proj.title}</h3>
                    <p class="text-sm text-indigo-300 mb-3">${proj.subtitle}</p>
                    <p class="text-slate-400 text-sm mb-4 flex-grow">${proj.summary}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">${proj.tags.slice(0, 4).map(tag => `<span class="tag rounded-md px-2 py-1 text-xs">${tag}</span>`).join('')}</div>
                </div>`;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${proj.title}. Click for technical details.`);
            const open = () => showProductionSystemModal(proj);
            card.addEventListener('click', open);
            card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
            grid.appendChild(card);
        });
    };

    renderPlaygroundApps();
    renderProductionSystems();
    renderTechnicalNotes();
    renderNotesQuickLinks();

    // Ask Me Anything — delivers to your inbox via FormSubmit
    const commentForm = document.getElementById('comment-form');
    const amaStatus = document.getElementById('ama-form-status');
    const amaSubmitBtn = document.getElementById('comment-submit-btn');

    const showAmaStatus = (message, isError = false) => {
        if (!amaStatus) return;
        amaStatus.textContent = message;
        amaStatus.classList.remove('hidden', 'text-green-400', 'text-red-400');
        amaStatus.classList.add(isError ? 'text-red-400' : 'text-green-400');
    };

    if (commentForm) {
        commentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const honey = commentForm.querySelector('[name="_honey"]');
            if (honey?.value) return;

            const name = document.getElementById('comment-name')?.value.trim();
            const contact = document.getElementById('comment-contact')?.value.trim();
            const message = document.getElementById('comment-text')?.value.trim();
            if (!name || !contact || !message) {
                showAmaStatus('Please fill in your name, how to reach you, and your question.', true);
                return;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('How to reach you', contact);
            formData.append('message', message);
            formData.append('_subject', `Portfolio AMA from ${name}`);
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
                formData.append('_replyto', contact);
            }
            formData.append('_captcha', 'false');
            formData.append('_template', 'table');

            const originalLabel = amaSubmitBtn?.textContent || 'Submit';
            if (amaSubmitBtn) {
                amaSubmitBtn.disabled = true;
                amaSubmitBtn.textContent = 'Sending…';
            }
            showAmaStatus('Sending your question…', false);
            amaStatus?.classList.remove('text-green-400');
            amaStatus?.classList.add('text-slate-400');

            try {
                const response = await fetch(FORM_SUBMIT_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' }
                });
                let payload = {};
                try {
                    payload = await response.json();
                } catch {
                    payload = {};
                }
                const ok = response.ok && String(payload.success).toLowerCase() === 'true';
                if (ok) {
                    commentForm.reset();
                    showAmaStatus('Thanks! Your message was sent—I’ll get back to you soon.', false);
                } else {
                    const hint = payload.message
                        ? String(payload.message)
                        : `Could not send. Email me at ${CONTACT_EMAIL}`;
                    showAmaStatus(hint, true);
                }
            } catch {
                showAmaStatus(`Network error. Email me directly at ${CONTACT_EMAIL}`, true);
            } finally {
                if (amaSubmitBtn) {
                    amaSubmitBtn.disabled = false;
                    amaSubmitBtn.textContent = originalLabel;
                }
            }
        });
    }
    const pollOptions = document.querySelectorAll('.poll-option');
    pollOptions.forEach(option => { option.addEventListener('click', () => { pollOptions.forEach(opt => { opt.disabled = true; opt.classList.add('opacity-50'); }); option.classList.add('bg-indigo-500'); document.getElementById('poll-feedback').classList.remove('hidden'); }); });

    // Background canvas animation
    const bgCanvas = document.getElementById('bg-canvas');
    const ctx = bgCanvas.getContext('2d');
    let particlesArray;
    const mouse = { x: null, y: null, radius: 0 };
    const resizeHandler = () => { bgCanvas.width = window.innerWidth; bgCanvas.height = window.innerHeight; mouse.radius = (bgCanvas.height / 120) * (bgCanvas.width / 120); initParticles(); };
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; }); 
    class Particle { constructor(x, y, dx, dy) { this.x = x; this.y = y; this.directionX = dx; this.directionY = dy; this.size = (Math.random() * 2) + 1; } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(139, 92, 246, 0.2)'; ctx.fill(); } update() { if (this.x > bgCanvas.width || this.x < 0) this.directionX = -this.directionX; if (this.y > bgCanvas.height || this.y < 0) this.directionY = -this.directionY; let dx = mouse.x - this.x; let dy = mouse.y - this.y; if (Math.hypot(dx, dy) < mouse.radius + this.size) { if (mouse.x < this.x && this.x < bgCanvas.width - this.size * 10) this.x += 5; if (mouse.x > this.x && this.x > this.size * 10) this.x -= 5; if (mouse.y < this.y && this.y < bgCanvas.height - this.size * 10) this.y += 5; if (mouse.y > this.y && this.y > this.size * 10) this.y -= 5; } this.x += this.directionX; this.y += this.directionY; this.draw(); } } 
    function initParticles() { particlesArray = []; let num = (bgCanvas.height * bgCanvas.width) / 9000; for (let i = 0; i < num; i++) { let x = Math.random() * innerWidth; let y = Math.random() * innerHeight; let dx = (Math.random() * .4) - 0.2; let dy = (Math.random() * .4) - 0.2; particlesArray.push(new Particle(x, y, dx, dy)); } }
    function animateParticles() { requestAnimationFrame(animateParticles); ctx.clearRect(0, 0, innerWidth, innerHeight); particlesArray.forEach(p => p.update()); connectParticles(); }
    function connectParticles() { let opacityValue = 1; for (let a = 0; a < particlesArray.length; a++) { for (let b = a; b < particlesArray.length; b++) { let distance = Math.hypot(particlesArray[a].x - particlesArray[b].x, particlesArray[a].y - particlesArray[b].y); if (distance < 120) { opacityValue = 1 - (distance / 120); ctx.strokeStyle = `rgba(167, 139, 250, ${opacityValue * 0.3})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke(); } } } }
    resizeHandler();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) animateParticles();

    // Resume viewer modal (PDF.js — plain page view, no browser PDF toolbar)
    const resumeModal = document.getElementById('resume-modal');
    const resumePages = document.getElementById('resume-pdf-pages');
    const resumeLoading = document.getElementById('resume-loading');
    const RESUME_URL = 'AayushResume.pdf';
    let resumeRendered = false;

    const renderResumePdf = async () => {
        if (!window.pdfjsLib || !resumePages) return;
        if (resumeRendered) return;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        try {
            resumeLoading.style.display = 'block';
            resumePages.innerHTML = '';
            const pdf = await pdfjsLib.getDocument(RESUME_URL).promise;
            const containerWidth = resumePages.clientWidth || 700;
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const baseViewport = page.getViewport({ scale: 1 });
                const scale = Math.min(2, (containerWidth - 8) / baseViewport.width);
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                resumePages.appendChild(canvas);
                await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
            }
            resumeRendered = true;
        } catch (err) {
            resumePages.innerHTML = '<p class="resume-loading">Unable to load resume. Use Download instead.</p>';
            console.error('Resume PDF load failed:', err);
        } finally {
            resumeLoading.style.display = 'none';
        }
    };

    const openResumeModal = () => {
        resumeModal.hidden = false;
        resumeModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => requestAnimationFrame(() => renderResumePdf()));
    };
    const closeResumeModal = () => {
        resumeModal.style.display = 'none';
        resumeModal.hidden = true;
        document.body.style.overflow = 'auto';
    };
    document.getElementById('view-resume-btn')?.addEventListener('click', openResumeModal);
    document.getElementById('view-resume-contact-btn')?.addEventListener('click', openResumeModal);
    document.getElementById('close-resume-modal')?.addEventListener('click', closeResumeModal);
    resumeModal?.addEventListener('click', (e) => { if (e.target === resumeModal) closeResumeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeModal && !resumeModal.hidden) closeResumeModal();
    });
});
