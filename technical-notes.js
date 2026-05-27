const technicalNotesData = [
    {
        id: 'note-av-inventory',
        category: 'production',
        projectTitle: 'AV Inventory Ops',
        title: 'India-compliant ops on Amplify Gen 2',
        tags: ['Amplify Gen 2', 'DynamoDB', 'Compliance'],
        excerpt: 'Allwave’s back-office ran on spreadsheets—no audit trail, no single inventory truth, and manual GST/MSME risk. I built the platform that replaced that.',
        sections: [
            {
                label: 'What I built',
                text: 'A full operations backbone on AWS Amplify Gen 2 (ap-south-1): 36 DynamoDB tables, AppSync GraphQL, 19 Lambdas, and a React PWA for procurement, unit-level inventory, invoicing, AMC/service tickets, client portal, and Tally XML export.'
            },
            {
                label: 'How it works',
                bullets: [
                    'Scheduled jobs handle FY rollover, TDS creation, MSME checks, payment reminders, depreciation, and warranty/AMC alerts—so finance doesn’t rely on manual calendar work.',
                    'Shared TypeScript utilities enforce GSTIN validation, HSN codes, invoice numbering, and FY boundaries—one source of truth before data hits Tally.',
                    'Cmd+K navigation, QR scanning, TanStack tables, and a floating Gemini assistant on core screens keep daily ops fast for non-technical users.'
                ]
            },
            {
                label: 'Takeaway',
                text: 'Once real money flowed through automated billing, deletion protection and PITR on every table became non-negotiable. This taught me production data governance matters as much as UI polish.'
            }
        ]
    },
    {
        id: 'note-bingo',
        category: 'production',
        projectTitle: 'BINGO',
        title: 'AVIXA-grounded BOQ generation with RAG',
        tags: ['RAG', 'Gemini', 'AVIXA'],
        excerpt: 'Presales engineers spent days on manual BOQs that were inconsistent and hard to validate against AVIXA rules. BINGO turns requirements into export-ready, brand-safe proposals.',
        sections: [
            {
                label: 'What I built',
                text: 'Bill of Quantities Intelligent Next-Gen Optimizer—presales software on Amplify Gen 2 that generates AVIXA CTS-D compliant BOQs from 2,000+ curated products, with AI assistance grounded in that catalog—not the open web.'
            },
            {
                label: 'How it works',
                bullets: [
                    'Ask BINGO RAG: vector + legacy DB search, IndexedDB cache, and exact-model matching before any web fallback—so the LLM can’t invent SKUs.',
                    'Async Gemini job queue for large BOQ runs so generations don’t die on API Gateway timeouts.',
                    'AVIXA calculators (DMD viewing distance, ACE audio, camera FOV) plus DXF/Stardraw export with 27+ CAD layers for engineering handoff.'
                ]
            },
            {
                label: 'Takeaway',
                text: 'Database-first sourcing with strict per-category brand rules stopped “helpful” model substitutions that broke client contracts. Grounding isn’t a feature—it’s a compliance requirement in presales.'
            }
        ]
    },
    {
        id: 'note-pronto',
        category: 'production',
        projectTitle: 'PRONTO',
        title: 'Support AI grounded in your KB—not ChatGPT',
        tags: ['FAISS', 'LangChain', 'Jira'],
        excerpt: 'AV support needed answers from internal documentation and wanted AI analysis on Jira tickets without losing trust. PRONTO is the production copilot for that workflow.',
        sections: [
            {
                label: 'What I built',
                text: 'Enterprise support platform: FAISS RAG over Allwave’s knowledge base, LangChain + Gemini chains, Jira ticket intelligence, bilingual voice I/O, and one-click AI solutions posted as auditable Jira comments.'
            },
            {
                label: 'How it works',
                bullets: [
                    'RAGEngine, JiraService, and EscalationService are lazy-loaded so Lambda cold starts stay under INIT limits; FAISS indexes sync from S3 after boot.',
                    'SupportWorkflow drives smart chat, ticket analysis, apply-solution, and feedback loops—with ADF parsing for rich Jira comment formatting.',
                    'JWT approval gates, admin analytics, and browser alerts for high-priority incidents keep humans in control of escalations.'
                ]
            },
            {
                label: 'Takeaway',
                text: 'Heavy imports during Lambda INIT caused timeouts until we split services and deferred KB hydration. Production RAG is as much about deployment constraints as it is about retrieval quality.'
            }
        ]
    },
    {
        id: 'note-rag',
        category: 'personal',
        projectTitle: 'Aura RAG Platform',
        title: 'Private document Q&A with cited sources',
        tags: ['RAG', 'FastAPI', 'Gemini 2.0', 'ChromaDB'],
        excerpt: 'Teams shouldn’t paste confidential docs into public chat UIs. Aura is a self-hosted RAG stack where every answer cites the source—with real API boundaries and session memory.',
        sections: [
            {
                label: 'What I built',
                text: 'Modular FastAPI backend (app/api/v1, ingestion, services) plus a separate web UI repo: ChromaDB + Gemini 2.0 Flash, document upload/delete/reindex, session APIs, and /metrics + /ready probes.'
            },
            {
                label: 'How it works',
                bullets: [
                    'History-aware RAG reformulates follow-ups; MMR retrieval reduces redundant chunks in answers.',
                    'Optional API key, rate limits, and Docker Compose—same patterns I later applied at scale on PRONTO and BINGO.',
                    'Frontend exports chats, supports light/dark themes, and ships demo prompts for live walkthroughs.'
                ]
            },
            {
                label: 'Takeaway',
                text: 'Aura was deliberate practice for production RAG—sessions, observability, and document lifecycle matter as much as the LLM prompt.'
            }
        ]
    },
    {
        id: 'note-churn',
        category: 'personal',
        projectTitle: 'RetainAI Churn ML',
        title: 'When 95% accuracy is useless',
        tags: ['XGBoost', 'Calibration', 'Streamlit'],
        excerpt: 'Churn is rare—naive classifiers look accurate by predicting “no churn” every time. RetainAI optimizes thresholds, calibration, and business ROI—not headline accuracy.',
        sections: [
            {
                label: 'What I built',
                text: 'RetainAI command center: modular churnai/ package, XGBoost pipeline with 7 engineered features, five Streamlit workspaces, and a Business ROI tab for retention campaign modeling.'
            },
            {
                label: 'How it works',
                bullets: [
                    'Fast vs accurate training modes compare XGBoost, Random Forest, and logistic models with calibrated thresholds.',
                    'PR-AUC and calibration curves surface real trade-offs; Live Score and Batch workspaces support ops-style workflows.',
                    'Docker + train_model.py + start-demo scripts mirror how I package ML products for demos and handoff.'
                ]
            },
            {
                label: 'Takeaway',
                text: 'Retention teams care about expected lift and cost—not accuracy alone. Build the ROI view first, then tune the model threshold to match.'
            }
        ]
    }
];

function renderNoteSections(note) {
    return note.sections.map((section) => {
        const bullets = section.bullets
            ? `<ul class="tech-note-bullets">${section.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>`
            : '';
        return `
            <div class="tech-note-block">
                <p class="tech-note-block__label">${section.label}</p>
                ${section.text ? `<p class="tech-note-block__text">${section.text}</p>` : ''}
                ${bullets}
            </div>`;
    }).join('');
}

function renderTechnicalNotes() {
    const container = document.getElementById('technical-notes-container');
    const filtersEl = document.getElementById('technical-notes-filters');
    if (!container || !filtersEl) return;

    const filters = [
        { id: 'All', label: 'All' },
        { id: 'production', label: 'Production' },
        { id: 'personal', label: 'Personal' }
    ];

    let activeFilter = 'All';

    const getFiltered = () => activeFilter === 'All'
        ? technicalNotesData
        : technicalNotesData.filter((n) => n.category === activeFilter);

    const renderCards = () => {
        container.innerHTML = '';
        getFiltered().forEach((note) => {
            const badgeClass = note.category === 'production'
                ? 'tech-note-badge tech-note-badge--production'
                : 'tech-note-badge tech-note-badge--personal';
            const badgeLabel = note.category === 'production' ? 'Production' : 'Personal';
            const linkHref = note.category === 'production' ? '#production-systems' : '#projects';

            const article = document.createElement('article');
            article.className = 'tech-note-card card-bg rounded-xl';
            article.innerHTML = `
                <div class="tech-note-card__inner">
                    <div class="tech-note-card__head">
                        <span class="${badgeClass}">${badgeLabel}</span>
                        <span class="text-indigo-300/90 text-sm font-medium">${note.projectTitle}</span>
                    </div>
                    <h3 class="tech-note-card__title">${note.title}</h3>
                    <p class="tech-note-card__excerpt">${note.excerpt}</p>
                    <div class="tech-note-card__details">
                        ${renderNoteSections(note)}
                    </div>
                    <div class="tech-note-card__footer">
                        <div class="tech-note-card__tags">
                            ${note.tags.map((t) => `<span class="tag rounded px-2 py-0.5 text-xs">${t}</span>`).join('')}
                        </div>
                        <a href="${linkHref}" class="tech-note-link">View in ${note.category === 'production' ? 'Production Systems' : 'Projects'} →</a>
                    </div>
                </div>`;
            container.appendChild(article);
        });
    };

    filtersEl.innerHTML = filters.map((f) =>
        `<button type="button" class="notes-filter tag px-3 py-1.5 rounded-lg text-sm ${f.id === activeFilter ? 'active' : ''}" data-filter="${f.id}">${f.label}</button>`
    ).join('');

    filtersEl.querySelectorAll('.notes-filter').forEach((btn) => {
        btn.addEventListener('click', () => {
            activeFilter = btn.dataset.filter;
            filtersEl.querySelectorAll('.notes-filter').forEach((b) => b.classList.toggle('active', b.dataset.filter === activeFilter));
            renderCards();
        });
    });

    renderCards();
}

function renderNotesQuickLinks() {
    const container = document.getElementById('notes-quick-links');
    if (!container) return;

    container.innerHTML = `
        <a href="#production-systems" class="notes-quick-link card-bg p-4 rounded-xl block border border-transparent hover:border-indigo-500/40 transition-colors">
            <p class="text-sm font-semibold text-white">Production Systems</p>
            <p class="text-xs text-slate-400 mt-1">6 platforms at Allwave</p>
        </a>
        <a href="#projects" class="notes-quick-link card-bg p-4 rounded-xl block border border-transparent hover:border-indigo-500/40 transition-colors">
            <p class="text-sm font-semibold text-white">Personal Projects</p>
            <p class="text-xs text-slate-400 mt-1">ML, RAG & full-stack demos</p>
        </a>
    `;
}
