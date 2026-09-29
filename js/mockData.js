// SkillPrint AI - Comprehensive Mock Data & Configuration
// Designed for SAP Hackfest 2026 (Inclusive Workforce Theme)
// Fictitious personas and realistic non-prestige tier-2/tier-3 profiles
// v1.1 — Updated: added 2 new Ananya evidence items, enriched skill gaps,
//         tuned SES scores, updated candidate profiles, added survey placeholder.

window.MOCK_DATA = {
  // Configurable default SES weights (sum = 100%)
  defaultWeights: {
    diversity: 0.25,      // Evidence Diversity (25%)
    performance: 0.35,    // Demonstrated Performance (35%)
    recency: 0.20,        // Recency (20%)
    relevance: 0.20       // Role Relevance (20%)
  },

  // ─── REAL SURVEY FINDING PLACEHOLDER ───────────────────────────────────────
  // Team Innovexa1: Replace this object's fields with your actual field study results
  // before Round 1 submission (referenced from Slide 2 of your deck).
  surveyFinding: {
    isPlaceholder: true,           // Set to false once your real data is filled in
    summary: "INSERT TEAM'S PRIMARY FINDING HERE",
    context: "e.g., 'In our survey of 120 tier-2/3 engineering students across 5 colleges in Tamil Nadu, 78% reported being auto-rejected before reaching a human interviewer.'",
    methodology: "e.g., Online survey + 8 structured telephonic interviews with students and 3 campus placement officers (Sep 2026).",
    source: "Field Research: Team Innovexa1 Primary Data Collection, Sep 2026"
  },

  // ─── FOCUS PERSONA: ANANYA ──────────────────────────────────────────────────
  ananyaProfile: {
    id: "cand-1",
    name: "Ananya",
    age: 21,
    pronouns: "She/Her",
    headline: "Final-year CS Student | Applied ML & SQL Practitioner | SAP SkillBridge Certified",
    targetRoleId: "role-1", // Data Analyst Trainee
    blindProxy: {
      college: "Dr. B.R. Ambedkar Institute of Tech (Tier-3 Rural Autonomous)",
      city: "Salem, Tamil Nadu",
      gender: "Female",
      gradYear: 2026,
      cgpa: "8.4 / 10.0"
    },
    bio: "Passionate about turning unstructured operational records into actionable decisions. Built end-to-end data analytics and ML pipelines independently through open-source datasets, hackathons, and certified assessments. Actively contributing to the SAP developer community and exploring BTP data services.",
    evidenceSources: [
      {
        id: "ev-1",
        category: "Projects",
        title: "Healthcare Readmission Prediction Pipeline",
        description: "Built end-to-end binary classification system using Scikit-Learn, Pandas & XGBoost with automated hyperparameter tuning via Optuna and SHAP feature explainability. Achieved 91.3% AUC-ROC on hold-out test set.",
        date: "2026-07-15",
        recencyMonths: 2,
        performanceScore: 94,
        relevanceScore: 91,
        verifiedBy: "GitHub Code Scanner & Automated Unit Tests (97.4% passing rate, 84 commits)",
        verificationUrl: "github.com/ananya-dev/hospital-readmit-ai",
        isAuthorized: true,
        skillsDemonstrated: ["Python", "Machine Learning", "Data Visualization"]
      },
      {
        id: "ev-2",
        category: "Projects",
        title: "Retail Supply Chain SQL Analytics Engine",
        description: "Authored 47 optimized analytical SQL queries utilizing window functions (NTILE, LAG, LEAD, RANK), recursive CTEs, and partial index strategies to compute live store replenishment times, reducing query runtime by 62%.",
        date: "2026-06-10",
        recencyMonths: 3,
        performanceScore: 91,
        relevanceScore: 96,
        verifiedBy: "PostgreSQL Database Log Analysis & Explain Plan Execution Trace",
        verificationUrl: "github.com/ananya-dev/retail-sql-optimizer",
        isAuthorized: true,
        skillsDemonstrated: ["SQL", "Data Modeling", "Optimization"]
      },
      {
        id: "ev-3",
        category: "Certifications",
        title: "PostgreSQL Data Modeling & High Performance Querying",
        description: "12-week verified proctored specialization covering entity-relationship modeling, 3NF normalization, B-tree & GIN index structures, query execution plans, MVCC concurrency, and partitioned tables.",
        date: "2026-08-01",
        recencyMonths: 1,
        performanceScore: 95,
        relevanceScore: 90,
        verifiedBy: "Coursera Credential Engine (ID: PG-9824-V)",
        verificationUrl: "coursera.org/verify/PG-9824-V",
        isAuthorized: true,
        skillsDemonstrated: ["SQL", "Data Modeling"]
      },
      {
        id: "ev-4",
        category: "Certifications",
        title: "Applied Machine Learning with Scikit-Learn & Pandas",
        description: "Comprehensive 40-hour hands-on track: feature engineering, stratified cross-validation, gradient boosted trees, calibration curves, and model evaluation with AUC-ROC, F1, and Brier Score.",
        date: "2026-05-18",
        recencyMonths: 4,
        performanceScore: 88,
        relevanceScore: 84,
        verifiedBy: "DeepLearning.AI Certificate Authority",
        verificationUrl: "deeplearning.ai/certificates/ML-4412",
        isAuthorized: true,
        skillsDemonstrated: ["Python", "Machine Learning"]
      },
      {
        id: "ev-5",
        category: "Assessments",
        title: "Advanced SQL Query & Relational Optimization Benchmark",
        description: "Timed 90-minute proctored assessment solving 7 advanced challenges: recursive hierarchies, PIVOT aggregation, CTE-driven window frames, and time-series gap detection under production-like concurrency.",
        date: "2026-08-20",
        recencyMonths: 1,
        performanceScore: 96,
        relevanceScore: 96,
        verifiedBy: "HackerRank Proctored Skill Assessment (Top 4th Percentile — 1,243 participants)",
        verificationUrl: "hackerrank.com/certificates/sql-adv-96p",
        isAuthorized: true,
        skillsDemonstrated: ["SQL"]
      },
      {
        id: "ev-6",
        category: "Assessments",
        title: "SAP SkillBridge Applied Data Analytics Evaluation",
        description: "SAP Hackfest SkillBridge proctored technical evaluation covering hypothesis testing (Chi-square, t-test), ANOVA, linear regression assumptions, and automated data quality pipelines.",
        date: "2026-09-05",
        recencyMonths: 0.5,
        performanceScore: 91,
        relevanceScore: 92,
        verifiedBy: "SAP Hackfest Technical Assessment SandBox (Invigilated, anti-cheat enabled)",
        verificationUrl: "sap-skillbridge.internal/eval/ananya-91",
        isAuthorized: true,
        skillsDemonstrated: ["Python", "Data Visualization", "SQL"]
      },
      {
        id: "ev-7",
        category: "Hackathons",
        title: "Tamil Nadu Smart Agriculture Hackathon 2025 — 2nd Prize",
        description: "Team Lead. Designed and deployed a predictive crop yield telemetry system processing 200k IoT sensor readings per hour into real-time agronomic advisories using Pandas, ARIMA forecasting, and a Streamlit dashboard.",
        date: "2026-04-12",
        recencyMonths: 5,
        performanceScore: 92,
        relevanceScore: 83,
        verifiedBy: "TN State Innovation Council Hackathon Jury Citation (12 competing teams)",
        verificationUrl: "tnhacks.org/winners/2025/crop-telemetry",
        isAuthorized: true,
        skillsDemonstrated: ["Python", "Machine Learning", "Data Visualization"]
      },
      {
        id: "ev-8",
        category: "Portfolio",
        title: "Interactive Open-Data Demographic Analytics Dashboard",
        description: "Deployed live Streamlit web app using Plotly, Folium, and DuckDB enabling interactive geospatial census data exploration with demographic cross-filters, choropleth maps, and PDF export capabilities.",
        date: "2026-08-14",
        recencyMonths: 1.5,
        performanceScore: 89,
        relevanceScore: 88,
        verifiedBy: "Live Hosted Web Application & Public Git Commits (streamlit.io verified)",
        verificationUrl: "share.streamlit.io/ananya/census-explorer",
        isAuthorized: true,
        skillsDemonstrated: ["Data Visualization", "Python"]
      },
      // ── NEW EVIDENCE ITEM 1 (Added in v1.1) ─────────────────────────────────
      {
        id: "ev-9",
        category: "Projects",
        title: "SAP BTP Data Ingestion Proof-of-Concept (Open-Source Dataset)",
        description: "Built a prototype SAP BTP integration flow that ingests public government spending CSV datasets via HTTP source adapter, transforms using JavaScript mapping functions, and loads into an OData v4 target endpoint — validated against SAP Integration Suite trial environment.",
        date: "2026-09-18",
        recencyMonths: 0.3,
        performanceScore: 86,
        relevanceScore: 93,
        verifiedBy: "SAP Integration Suite Trial Account Log Export (BTP Subaccount: trial-ananya-dev)",
        verificationUrl: "github.com/ananya-dev/sap-btp-ingestion-poc",
        isAuthorized: true,
        skillsDemonstrated: ["SQL", "Python", "Data Modeling"]
      },
      // ── NEW EVIDENCE ITEM 2 (Added in v1.1) ─────────────────────────────────
      {
        id: "ev-10",
        category: "Hackathons",
        title: "SAP Hackfest 2026 — SkillPrint AI Prototype Delivery",
        description: "Team Innovexa1 co-architect for SkillPrint AI end-to-end prototype. Responsible for SES scoring algorithm design, mockData schema, Candidate Dashboard component implementation, and Blind Screening logic review.",
        date: "2026-09-28",
        recencyMonths: 0.0,
        performanceScore: 97,
        relevanceScore: 97,
        verifiedBy: "SAP Hackfest 2026 Submission Registry — Team Innovexa1 (Inclusive Workforce)",
        verificationUrl: "sap-hackfest-2026.sap.com/submissions/innovexa1",
        isAuthorized: true,
        skillsDemonstrated: ["Python", "Machine Learning", "SQL", "Data Visualization"]
      }
    ],
    // Candidate's specific skills breakdown
    skills: [
      {
        name: "SQL",
        category: "Data Engineering",
        evidenceCount: 5,
        proficiency: "Advanced",
        confidence: 97,
        roleRelevance: 95,
        description: "Expertise in complex window functions, recursive CTEs, query plan optimization, multi-table joins, partial indexing, schema normalization, and MVCC concurrency control."
      },
      {
        name: "Python",
        category: "Programming & Data Science",
        evidenceCount: 6,
        proficiency: "Advanced",
        confidence: 93,
        roleRelevance: 91,
        description: "Clean functional Python, vectorized Pandas operations, Scikit-learn ML pipelines, Streamlit app deployment, Optuna hyperparameter tuning, and API integrations."
      },
      {
        name: "Machine Learning",
        category: "AI & Predictive Modeling",
        evidenceCount: 4,
        proficiency: "Intermediate",
        confidence: 87,
        roleRelevance: 83,
        description: "Supervised classification & regression, XGBoost, Random Forest, ARIMA time-series forecasting, SHAP explainability, cross-validation, calibration, and evaluation metrics."
      },
      {
        name: "Data Visualization",
        category: "Analytics & Reporting",
        evidenceCount: 4,
        proficiency: "Intermediate",
        confidence: 89,
        roleRelevance: 86,
        description: "Streamlit, Plotly, Folium (geo-mapping), Seaborn, interactive charting, choropleth maps, PDF export, and executive summary dashboard design."
      },
      {
        name: "Data Modeling",
        category: "Database Architecture",
        evidenceCount: 3,
        proficiency: "Intermediate",
        confidence: 85,
        roleRelevance: 81,
        description: "Star/Snowflake schema design, entity-relationship modeling, 3NF normalization, OData v4 entity data models, and transactional indexing strategies."
      }
    ]
  },

  // ─── JOB ROLES ─────────────────────────────────────────────────────────────
  roles: [
    {
      id: "role-1",
      title: "Data Analyst Trainee",
      department: "Global Analytics & Business Intelligence",
      location: "Bengaluru / Hyderabad (Hybrid)",
      type: "Early Career / Campus",
      openings: 8,
      requiredSkills: [
        { name: "SQL", weight: 0.35, minProficiency: "Intermediate" },
        { name: "Python", weight: 0.25, minProficiency: "Intermediate" },
        { name: "Data Visualization", weight: 0.25, minProficiency: "Intermediate" },
        { name: "Data Modeling", weight: 0.15, minProficiency: "Beginner" }
      ],
      description: "Extract, transform, and analyze enterprise operational data using SQL and Python to build automated executive reporting dashboards and real-time KPI monitoring pipelines.",
      whyMatchExplanation: {
        ananya: "Strong 94% match based on 5 verified SQL artifacts (including 96th-percentile HackerRank proctored test and a live SAP BTP ingestion PoC), 6 Python projects with deployed ML pipelines and geo-dashboard. Verified capability exceeds the typical graduate baseline without needing tier-1 institutional credential proxies."
      },
      skillGaps: {
        ananya: [
          {
            skill: "SAP Analytics Cloud (SAC) Storyboarding",
            severity: "Minor Gap",
            priority: "High",
            estimatedHours: 4.5,
            reason: "The enterprise role publishes boardroom dashboards via SAC Stories using live BTP data connections — a skill Ananya doesn't yet have verified artifacts for.",
            learningAction: "Complete the SAP Learning Journey: 'Getting Started with SAP Analytics Cloud — Explore Stories'. Free on SAP Learning Hub.",
            officialLink: "https://learning.sap.com/learning-journeys/get-started-with-sap-analytics-cloud",
            linkText: "Open SAP Learning Hub"
          },
          {
            skill: "Automated ETL Orchestration (Airflow / SAP Data Intelligence)",
            severity: "Recommended",
            priority: "Medium",
            estimatedHours: 8,
            reason: "Production data pipelines require scheduled DAG orchestration for incremental SQL transformation loads. Ananya's current projects run ad-hoc; she needs one pipeline-as-code artifact.",
            learningAction: "Build a mini GitHub Actions + Python workflow that triggers a scheduled SQL transformation and loads to a target table. Commit it to a public repo as verifiable proof.",
            officialLink: "https://docs.github.com/en/actions/examples",
            linkText: "View GitHub Actions Examples"
          },
          {
            skill: "SAP HANA Cloud Basic Querying",
            severity: "Nice-to-Have",
            priority: "Low",
            estimatedHours: 3,
            reason: "Familiarity with column-store HANA SQL syntax and SAP HANA Cloud Trial environment improves enterprise tool-fit.",
            learningAction: "Complete the free SAP Discovery Center Mission: 'Get Started with SAP HANA Cloud'.",
            officialLink: "https://discovery-center.cloud.sap/missiondetail/3702/3748/",
            linkText: "Start SAP Discovery Center Mission"
          }
        ]
      }
    },
    {
      id: "role-2",
      title: "Junior ML Engineer",
      department: "Enterprise AI & Intelligent Automation",
      location: "Bengaluru (On-site)",
      type: "Early Career",
      openings: 4,
      requiredSkills: [
        { name: "Python", weight: 0.30, minProficiency: "Advanced" },
        { name: "Machine Learning", weight: 0.35, minProficiency: "Intermediate" },
        { name: "MLOps & Docker", weight: 0.20, minProficiency: "Intermediate" },
        { name: "SQL", weight: 0.15, minProficiency: "Intermediate" }
      ],
      description: "Design, train, and deploy predictive ML models and LLM orchestration microservices into SAP AI Core runtime environments using Argo Workflows and OCI-compatible containers.",
      whyMatchExplanation: {
        ananya: "Moderate 79% match. Ananya demonstrates verified Python (93 SES) and Scikit-Learn expertise with a deployed Streamlit ML app, but has a documented gap in containerized model serving (Docker/MLOps) and REST API wrapping contracts — critical skills for SAP AI Core deployment."
      },
      skillGaps: {
        ananya: [
          {
            skill: "Docker Containerization & FastAPI Model Serving",
            severity: "Key Gap",
            priority: "High",
            estimatedHours: 10,
            reason: "All SAP AI Core deployments require OCI-compatible Docker images with a serving endpoint exposing a /v1/predict REST route. None of Ananya's current artifacts demonstrate this pattern.",
            learningAction: "Build and publish a Dockerized FastAPI service wrapping your healthcare readmission model. Push image to Docker Hub and link in your GitHub README as verifiable proof.",
            officialLink: "https://fastapi.tiangolo.com/deployment/docker/",
            linkText: "Open FastAPI Docker Guide"
          },
          {
            skill: "SAP AI Core Model Deployment Workflow",
            severity: "Growth Opportunity",
            priority: "Medium",
            estimatedHours: 6,
            reason: "Familiarity with ArgoWorkflow templates, AI Core serving templates, and BTP subaccount configuration will close the gap from ML engineer to SAP AI Core-certified practitioner.",
            learningAction: "Follow the official SAP Discovery Center Mission: 'Deploy Your First Machine Learning Model Using SAP AI Core'.",
            officialLink: "https://discovery-center.cloud.sap/missiondetail/4282/4528/",
            linkText: "Start SAP Discovery Center Mission"
          },
          {
            skill: "MLOps Pipeline Monitoring (MLflow / AI Launchpad)",
            severity: "Recommended",
            priority: "Low",
            estimatedHours: 4,
            reason: "Production models need drift monitoring, versioned artifact registries, and experiment tracking — tools like MLflow or SAP AI Launchpad cover this.",
            learningAction: "Add MLflow experiment tracking to your healthcare readmission project and push tracked runs to a public DagsHub registry.",
            officialLink: "https://dagshub.com/docs/integration_guide/mlflow_tracking/",
            linkText: "Integrate MLflow on DagsHub"
          }
        ]
      }
    },
    {
      id: "role-3",
      title: "SAP Junior Developer (CAP & Fiori)",
      department: "Cloud ERP Engineering",
      location: "Pune / Bengaluru",
      type: "Graduate Engineer",
      openings: 6,
      requiredSkills: [
        { name: "SQL", weight: 0.30, minProficiency: "Intermediate" },
        { name: "JavaScript", weight: 0.25, minProficiency: "Intermediate" },
        { name: "SAP Cloud Application Programming (CAP)", weight: 0.30, minProficiency: "Beginner" },
        { name: "Data Modeling", weight: 0.15, minProficiency: "Intermediate" }
      ],
      description: "Develop cloud-native extensions for SAP S/4HANA using SAP Cloud Application Programming Model (CAP), CDS data models, OData v4 services, and SAP Fiori Elements UI.",
      whyMatchExplanation: {
        ananya: "68% match. Ananya has exceptional SQL and CDS-adjacent data modeling skills (PostgreSQL 3NF, OData v4 PoC), strong logical reasoning, and a recent BTP integration PoC. Bridge gaps: JavaScript fundamentals and CAP service handler patterns to become SAP-developer ready within 3–4 weeks of focused learning."
      },
      skillGaps: {
        ananya: [
          {
            skill: "SAP CAP (Cloud Application Programming) — CDS & Service Handlers",
            severity: "Core Gap",
            priority: "High",
            estimatedHours: 12,
            reason: "SAP CAP is the foundational framework for BTP extension development. CDS schema definition and Node.js/TypeScript service handlers are required daily in this role.",
            learningAction: "Complete the full free tutorial: 'Build an Application with SAP Cloud Application Programming Model' — covers CDS, OData, SQLite, and remote service integration.",
            officialLink: "https://developers.sap.com/group.cp-apm-getting-started.html",
            linkText: "Start SAP Developers CAP Tutorial"
          },
          {
            skill: "JavaScript & Node.js Fundamentals",
            severity: "Prerequisite",
            priority: "High",
            estimatedHours: 8,
            reason: "CAP service handlers are authored in Node.js JavaScript or TypeScript. Ananya needs ES6+ syntax fluency before CAP concepts click.",
            learningAction: "Complete the freeCodeCamp JavaScript Algorithms and Data Structures (300-hour curriculum) or the condensed Scrimba 6-hour 'JavaScript Crash Course for Beginners'.",
            officialLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
            linkText: "Start freeCodeCamp JavaScript"
          },
          {
            skill: "SAP Fiori Elements App — List Report & Object Page",
            severity: "Nice-to-Have",
            priority: "Low",
            estimatedHours: 5,
            reason: "Role involves UI delivery using SAP Fiori Elements; a basic Floor Plan understanding differentiates CAP developers.",
            learningAction: "Complete 'Develop a Fiori App with SAP Build Code' mission on SAP Discovery Center (Guided Development).",
            officialLink: "https://discovery-center.cloud.sap/missiondetail/4368/4645/",
            linkText: "Open SAP Discovery Center Mission"
          }
        ]
      }
    },
    {
      id: "role-4",
      title: "Business Analytics Associate",
      department: "Strategic Workforce & Market Operations",
      location: "Gurugram / Remote",
      type: "Early Career",
      openings: 5,
      requiredSkills: [
        { name: "Data Visualization", weight: 0.35, minProficiency: "Advanced" },
        { name: "SQL", weight: 0.25, minProficiency: "Intermediate" },
        { name: "Business Process Modeling", weight: 0.25, minProficiency: "Beginner" },
        { name: "Data Storytelling", weight: 0.15, minProficiency: "Intermediate" }
      ],
      description: "Bridge business requirements with analytical telemetry — translate enterprise KPI movements into stakeholder narratives, SAP Analytics Cloud stories, and Signavio process improvement recommendations.",
      whyMatchExplanation: {
        ananya: "85% match. Ananya's live Streamlit geo-demographic dashboard, hackathon presentations to jury panels, and state-level data visualization work demonstrate strong data storytelling and analytical structuring. Minor gap in formal BPMN process notation and SAP Signavio familiarity."
      },
      skillGaps: {
        ananya: [
          {
            skill: "Business Process Modeling (BPMN 2.0 Notation)",
            severity: "Recommended",
            priority: "Medium",
            estimatedHours: 4,
            reason: "Translating analytics insights into enterprise process improvement recommendations requires structured BPMN diagrams — a foundational skill for working with SAP Signavio.",
            learningAction: "Complete the free 'Introduction to Business Process Management' course on Coursera (University of Queensland, 4 hours) — covers BPMN notation and process analysis.",
            officialLink: "https://www.coursera.org/learn/business-process-management",
            linkText: "Start Free BPM Course (Coursera)"
          },
          {
            skill: "SAP Analytics Cloud (SAC) — Predictive Scenarios",
            severity: "Nice-to-Have",
            priority: "Low",
            estimatedHours: 3,
            reason: "The role occasionally builds Smart Predict scenarios in SAC for time-series forecasting of business KPIs.",
            learningAction: "Complete the SAP Learning Hub module: 'Intelligent Analytics in SAP Analytics Cloud — Smart Predict Essentials'.",
            officialLink: "https://learning.sap.com/learning-journeys/get-started-with-sap-analytics-cloud",
            linkText: "Open SAP Learning Hub"
          }
        ]
      }
    },
    {
      id: "role-5",
      title: "Cloud Integration Associate",
      department: "BTP Integration & Digital Core",
      location: "Bengaluru / Hyderabad",
      type: "Early Career",
      openings: 3,
      requiredSkills: [
        { name: "REST APIs & JSON", weight: 0.35, minProficiency: "Intermediate" },
        { name: "Python", weight: 0.30, minProficiency: "Intermediate" },
        { name: "Cloud Architecture Basics", weight: 0.20, minProficiency: "Beginner" },
        { name: "SQL", weight: 0.15, minProficiency: "Beginner" }
      ],
      description: "Configure SAP Integration Suite iFlows, REST API proxies, and event-driven webhooks connecting third-party SaaS systems to SAP S/4HANA Cloud and SAP BTP services.",
      whyMatchExplanation: {
        ananya: "78% match. Ananya's SAP BTP ingestion PoC project (ev-9) is a strong direct signal — she has successfully consumed HTTP sources and produced OData targets in SAP Integration Suite trial. Python API consumption experience (ev-6) confirms REST client proficiency. Key gap: she hasn't yet built a full iFlow with error handling and monitoring steps."
      },
      skillGaps: {
        ananya: [
          {
            skill: "SAP Integration Suite — iFlow Design & Error Handling",
            severity: "Key Gap",
            priority: "High",
            estimatedHours: 7,
            reason: "Production-grade iFlows require exception subprocesses, dead-letter queue configuration, retry policies, and monitoring dashboard setup — skills beyond the basic HTTP adapter she used in the PoC.",
            learningAction: "Complete the SAP Discovery Center Guided Mission: 'Set Up Your SAP Integration Suite Trial and Design Your First Integration Flow with Error Handling'.",
            officialLink: "https://discovery-center.cloud.sap/missiondetail/3258/3327/",
            linkText: "Start Integration Suite Mission"
          },
          {
            skill: "Event-Driven Webhooks & SAP Event Mesh",
            severity: "Recommended",
            priority: "Medium",
            estimatedHours: 5,
            reason: "Modern BTP architectures use asynchronous event-driven patterns via SAP Event Mesh — replacing polling-based API calls for real-time data flows.",
            learningAction: "Follow the official SAP Learning Journey: 'Developing Event-Driven Solutions with SAP Event Mesh'. Free on SAP Learning Hub.",
            officialLink: "https://learning.sap.com/learning-journeys/develop-event-driven-solutions-using-sap-integration-suite-advanced-event-mesh",
            linkText: "Open SAP Learning Journey"
          }
        ]
      }
    }
  ],

  // ─── CANDIDATES POOL ────────────────────────────────────────────────────────
  candidates: [
    {
      id: "cand-1",
      name: "Ananya",
      avatarInitials: "AN",
      avatarColor: "#0070F2",
      lastActive: "2026-09-28",
      roleMatches: {
        "role-1": { sesScore: 94, matchStatus: "High Match", rank: 1, biasCheck: "Pass" },
        "role-2": { sesScore: 79, matchStatus: "Promising Match", rank: 2, biasCheck: "Pass" },
        "role-3": { sesScore: 70, matchStatus: "Growth Potential", rank: 4, biasCheck: "Pass" },
        "role-4": { sesScore: 85, matchStatus: "Strong Match", rank: 2, biasCheck: "Pass" },
        "role-5": { sesScore: 78, matchStatus: "Promising Match", rank: 3, biasCheck: "Pass" }
      },
      skillsSummary: ["SQL (97)", "Python (93)", "ML (87)", "Data Viz (89)", "BTP PoC"],
      evidenceCount: 10,
      topEvidence: "HackerRank SQL 96th %ile · 3 GitHub repos (47 SQL optimizations) · SAP BTP ingestion PoC · State Hackathon 2nd Prize · SAP Hackfest 2026 Co-Architect",
      blindProxy: {
        college: "Tier-3 Rural Autonomous Engineering College",
        city: "Salem, Tamil Nadu",
        gender: "Female",
        gradYear: "2026",
        background: "First-generation engineering graduate, no campus recruitment access"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Verified evidence density is in the top 4% of the candidate pool. Exceptional demonstrated SQL query optimization (96th percentile, proctored), ML pipeline delivery (SHAP-explained XGBoost), and a live SAP BTP integration PoC — all achieved without reliance on institutional pedigree or alumni networks."
    },
    {
      id: "cand-2",
      name: "Vikram Sharma",
      avatarInitials: "VS",
      avatarColor: "#0F9D8A",
      lastActive: "2026-09-25",
      roleMatches: {
        "role-1": { sesScore: 83, matchStatus: "Strong Match", rank: 2, biasCheck: "Pass" },
        "role-2": { sesScore: 91, matchStatus: "High Match", rank: 1, biasCheck: "Pass" },
        "role-3": { sesScore: 60, matchStatus: "Growth Potential", rank: 6, biasCheck: "Pass" },
        "role-4": { sesScore: 71, matchStatus: "Potential Match", rank: 5, biasCheck: "Pass" },
        "role-5": { sesScore: 76, matchStatus: "Promising Match", rank: 2, biasCheck: "Pass" }
      },
      skillsSummary: ["Python (94)", "ML (91)", "Docker (84)", "FastAPI (88)", "SQL (79)"],
      evidenceCount: 8,
      topEvidence: "Kaggle Silver Medal (Top 8%) · 3 Dockerized FastAPI Microservices · AWS Cloud Practitioner · MLflow Experiment Tracking Registry",
      blindProxy: {
        college: "Government Engineering College Bhopal (Tier-2 State)",
        city: "Bhopal, Madhya Pradesh",
        gender: "Male",
        gradYear: "2025",
        background: "Semi-urban regional state university, self-financed"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Strong Python & containerized ML deployment track record. 3 live FastAPI model endpoints independently verified by automated health-check benchmarks. Kaggle Silver places him in the top 8% of global competition participants for that dataset."
    },
    {
      id: "cand-3",
      name: "Priya Patel",
      avatarInitials: "PP",
      avatarColor: "#6B4FA3",
      lastActive: "2026-09-22",
      roleMatches: {
        "role-1": { sesScore: 72, matchStatus: "Promising Match", rank: 5, biasCheck: "Pass" },
        "role-2": { sesScore: 55, matchStatus: "Low Match", rank: 7, biasCheck: "Needs Review" },
        "role-3": { sesScore: 93, matchStatus: "High Match", rank: 1, biasCheck: "Pass" },
        "role-4": { sesScore: 87, matchStatus: "Strong Match", rank: 1, biasCheck: "Pass" },
        "role-5": { sesScore: 84, matchStatus: "Strong Match", rank: 1, biasCheck: "Pass" }
      },
      skillsSummary: ["SAP CAP (91)", "BPMN (90)", "JavaScript (86)", "SQL (85)", "OData (82)"],
      evidenceCount: 9,
      topEvidence: "SAP Developer Challenge Community Winner (500+ participants) · SAP Certified Associate — Business Process Modeling · 2 CAP Extension Projects on BTP Trial · GitHub ERP Extension with BPMN Process Diagrams",
      blindProxy: {
        college: "IGNOU Distance Learning Open University (Reskilling Path)",
        city: "Surat, Gujarat",
        gender: "Female",
        gradYear: "2024",
        background: "Career returner (3-year caregiving gap), fully self-taught SAP developer"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Outstanding ERP workflow domain knowledge combined with hands-on SAP CAP CDS model artifacts and BPMN process documentation. Traditional ATS resume screening would systematically exclude her due to the 3-year career gap — this is exactly the bias SkillPrint AI is designed to correct."
    },
    {
      id: "cand-4",
      name: "Rahul Verma",
      avatarInitials: "RV",
      avatarColor: "#F58B1F",
      lastActive: "2026-09-20",
      roleMatches: {
        "role-1": { sesScore: 76, matchStatus: "Promising Match", rank: 4, biasCheck: "Pass" },
        "role-2": { sesScore: 63, matchStatus: "Growth Potential", rank: 5, biasCheck: "Pass" },
        "role-3": { sesScore: 74, matchStatus: "Promising Match", rank: 3, biasCheck: "Pass" },
        "role-4": { sesScore: 68, matchStatus: "Growth Potential", rank: 6, biasCheck: "Pass" },
        "role-5": { sesScore: 91, matchStatus: "High Match", rank: 1, biasCheck: "Pass" }
      },
      skillsSummary: ["REST APIs (93)", "Integration Patterns (88)", "Python (85)", "Postman (90)", "SQL (76)"],
      evidenceCount: 7,
      topEvidence: "Postman Student Expert (Verified Badge) · Open-Source Transit API Aggregator (1.2k GitHub stars) · 2 Hackathon Runner-Up Citations · Webhook-driven ETL Pipeline Repo",
      blindProxy: {
        college: "Polytechnic Diploma → Lateral Entry Degree College (Tier-3)",
        city: "Gorakhpur, Uttar Pradesh",
        gender: "Male",
        gradYear: "2026",
        background: "Lateral-entry diploma graduate, first-generation engineer in family"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Proven integration architecture competence through practical REST API design and webhook implementation. Open-source transit API aggregator with 1.2k community stars is independently verifiable community proof of quality. Postman Student Expert badge is a proctored industry credential."
    },
    {
      id: "cand-5",
      name: "Sneha Kulkarni",
      avatarInitials: "SK",
      avatarColor: "#2BA05A",
      lastActive: "2026-09-24",
      roleMatches: {
        "role-1": { sesScore: 80, matchStatus: "Strong Match", rank: 3, biasCheck: "Pass" },
        "role-2": { sesScore: 52, matchStatus: "Low Match", rank: 8, biasCheck: "Needs Review" },
        "role-3": { sesScore: 58, matchStatus: "Low Match", rank: 7, biasCheck: "Pass" },
        "role-4": { sesScore: 94, matchStatus: "High Match", rank: 1, biasCheck: "Pass" },
        "role-5": { sesScore: 64, matchStatus: "Growth Potential", rank: 6, biasCheck: "Pass" }
      },
      skillsSummary: ["Data Storytelling (95)", "Tableau/Plotly (91)", "SQL (82)", "ESG Analytics (89)", "SAC (80)"],
      evidenceCount: 8,
      topEvidence: "Tableau Public Featured Author (Selected by Tableau Community) · Published ESG Corporate Governance Analysis (2,400+ reads on Medium) · SAC Story Dashboard (BTP Trial) · College Capstone Dataset Lead",
      blindProxy: {
        college: "Government Women's Polytechnic College (Tier-3 Regional)",
        city: "Solapur, Maharashtra",
        gender: "Female",
        gradYear: "2026",
        background: "Non-metro interdisciplinary commerce & science, no industry internship history"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Highest Data Storytelling SES index in cohort (95). Exceptional narrative clarity translating quantitative distributions into board-ready insights. Tableau Public Featured Author status is community-peer-verified — a strong independent quality signal."
    },
    {
      id: "cand-6",
      name: "Devansh Naidu",
      avatarInitials: "DN",
      avatarColor: "#D13B47",
      lastActive: "2026-09-21",
      roleMatches: {
        "role-1": { sesScore: 78, matchStatus: "Promising Match", rank: 5, biasCheck: "Pass" },
        "role-2": { sesScore: 89, matchStatus: "High Match", rank: 2, biasCheck: "Pass" },
        "role-3": { sesScore: 53, matchStatus: "Low Match", rank: 8, biasCheck: "Pass" },
        "role-4": { sesScore: 62, matchStatus: "Growth Potential", rank: 7, biasCheck: "Pass" },
        "role-5": { sesScore: 73, matchStatus: "Potential Match", rank: 4, biasCheck: "Pass" }
      },
      skillsSummary: ["PyTorch (92)", "Python (93)", "Computer Vision (90)", "FastAPI (84)", "HuggingFace (88)"],
      evidenceCount: 7,
      topEvidence: "State-Level Computer Vision Hackathon Winner (Agri Leaf Disease Detection) · 2 Published HuggingFace Model Spaces (1,800 combined downloads) · PyTorch Deep Learning Certificate (Top 6%) · Paper-Ready Crop Disease Dataset (GitHub)",
      blindProxy: {
        college: "Private College of Science & Technology (Tier-3, Warangal)",
        city: "Warangal, Telangana",
        gender: "Male",
        gradYear: "2025",
        background: "Self-financed regional college, no metropolitan campus recruitment visits"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Exceptional deep learning specialization with HuggingFace-published model spaces available for live evaluation. Computer Vision hackathon win is jury-verified. 1,800 community model downloads constitutes independent peer quality validation."
    },
    {
      id: "cand-7",
      name: "Aisha Khan",
      avatarInitials: "AK",
      avatarColor: "#0070F2",
      lastActive: "2026-09-19",
      roleMatches: {
        "role-1": { sesScore: 69, matchStatus: "Growth Potential", rank: 6, biasCheck: "Pass" },
        "role-2": { sesScore: 59, matchStatus: "Low Match", rank: 6, biasCheck: "Pass" },
        "role-3": { sesScore: 88, matchStatus: "Strong Match", rank: 2, biasCheck: "Pass" },
        "role-4": { sesScore: 73, matchStatus: "Promising Match", rank: 4, biasCheck: "Pass" },
        "role-5": { sesScore: 81, matchStatus: "Strong Match", rank: 2, biasCheck: "Pass" }
      },
      skillsSummary: ["SAP UI5 (87)", "JavaScript (89)", "OData v4 (82)", "Clean Code (91)", "SQL (80)"],
      evidenceCount: 7,
      topEvidence: "SAP Community Developer Code Challenge Runner-Up (2026) · Clean Architecture GitHub Repo (670 stars) · OpenUI5 Walkthrough Certification Badge · SAP Fiori Elements App (BTP Trial, Live Demo)",
      blindProxy: {
        college: "AMU-Affiliated Engineering College (Tier-2 Minority Institution)",
        city: "Aligarh, Uttar Pradesh",
        gender: "Female",
        gradYear: "2026",
        background: "Minority institution with limited corporate outreach, community-driven learning path"
      },
      decisionStatus: "Pending",
      recruiterNotes: "",
      whyRecommend: "Rigorous adherence to modular enterprise frontend architecture and clean code SOLID principles. SAP Community recognition and a live Fiori Elements app on BTP Trial are independently auditable artifacts. Clean Code repo stars reflect peer validation."
    }
  ],

  // ─── 6 COLLABORATIVE AGENTS ─────────────────────────────────────────────────
  agentWorkflow: [
    {
      id: 1,
      name: "Evidence Discovery Agent",
      shortTitle: "Evidence Discovery",
      icon: "search",
      badge: "Ingestion & Consent",
      color: "#0070F2",
      description: "Continuously scans authorized candidate repositories, learning portals, hackathon platforms, and proctored assessment providers under cryptographic candidate consent tokens.",
      inputSpec: "OAuth token, Git commit hashes, assessment API payload, certificate credential IDs, SAP BTP subaccount audit log, and explicit candidate consent flags (isAuthorized: true/false).",
      outputSpec: "Normalized JSON evidence graphs containing ISO timestamp, artifact SHA-256 hash, issuer trust tier (Tier-1/2/3), and verifiable execution execution logs.",
      ananyaMockResult: {
        agentStatus: "Completed (10 of 10 items verified)",
        consentStatus: "100% Authorized by Ananya",
        evidenceHarvested: [
          "3 GitHub Repos (healthcare-readmission, retail-sql-optimizer, sap-btp-ingestion-poc)",
          "2 Certifications (Coursera PostgreSQL 3NF, DeepLearning.AI ML Applied)",
          "2 Assessments (HackerRank Proctored SQL 96th %ile, SAP SkillBridge 91%)",
          "2 Hackathons (TN Agri Hackfest 2nd Prize, SAP Hackfest 2026 Co-Architect)",
          "1 Live Portfolio (Streamlit Geo-Demographic Open-Data Dashboard)"
        ],
        rawTelemetry: {
          scannedCommits: 131,
          unitTestPassingRate: "97.4%",
          hashSignature: "sha256:8f92a10b4847eec03d9c21f4...",
          btpAuditLogConfirmation: "SAP BTP Subaccount: trial-ananya-dev — 1 iFlow execution confirmed"
        }
      }
    },
    {
      id: 2,
      name: "Skill Inference Agent",
      shortTitle: "Skill Inference",
      icon: "cpu",
      badge: "Knowledge Graph Mapping",
      color: "#0F9D8A",
      description: "Parses abstract artifacts (code ASTs, SQL execution query plans, benchmark test vectors, certificate syllabi) using LLM semantic reasoning grounded in the SAP Global Workforce Taxonomy v4.2.",
      inputSpec: "Code syntax trees (Python & SQL ASTs), SQL execution query plans, certification syllabi JSON, and project architecture README documents.",
      outputSpec: "Extracted skill vectors mapped to standard ESCO / SAP taxonomy nodes with granular concept tags, evidence-of-use frequency, and semantic confidence scores.",
      ananyaMockResult: {
        agentStatus: "Completed (5 Core Skills Inferred, 3 Emerging Skills Flagged)",
        skillsMapped: [
          { skill: "SQL", mappedFrom: ["Window functions (NTILE, LAG, LEAD) in retail repo", "Recursive CTE in HackerRank test", "OData v4 entity model in BTP PoC"], confidence: 97 },
          { skill: "Python", mappedFrom: ["Pandas vectorized operations", "Scikit-learn Pipeline() objects", "Streamlit multi-page app architecture"], confidence: 93 },
          { skill: "Machine Learning", mappedFrom: ["XGBoost hyperparameter grid via Optuna", "SHAP force plots in notebook", "ARIMA forecast RMSE evaluation"], confidence: 87 },
          { skill: "Data Visualization", mappedFrom: ["Folium choropleth map layer", "Plotly multi-axis time-series chart", "Streamlit PDF export component"], confidence: 89 },
          { skill: "Data Modeling", mappedFrom: ["PostgreSQL 3NF schema DDL", "Foreign key index strategy", "SAP BTP CDS entity definition"], confidence: 85 }
        ],
        emergingSignals: ["SAP Integration Suite (BTP PoC)", "FastAPI REST Design (hackathon codebase)", "BPMN Awareness (hackathon presentation slides)"],
        taxonomyStandard: "SAP Global Workforce Taxonomy v4.2 + ESCO v1.1.2 Crosswalk"
      }
    },
    {
      id: 3,
      name: "Skill Verification Agent",
      shortTitle: "Skill Verification",
      icon: "shield-check",
      badge: "Integrity & Scoring",
      color: "#6B4FA3",
      description: "Computes the multidimensional Skill Evidence Score (SES) by calculating evidence diversity, verified performance, exponential recency decay, and domain relevance — applying only candidate-authorized artifacts.",
      inputSpec: "Inferred skill vectors, proof-of-origin artifact hashes, proctored performance scores, Git commit timestamps, and configurable algorithmic weight vector (w_div, w_perf, w_rec, w_rel).",
      outputSpec: "Deterministic SES (0–100) per skill, overall SES, confidence interval, and four-component breakdowns (Diversity, Performance, Recency, Relevance).",
      ananyaMockResult: {
        agentStatus: "Verification Complete — Zero Evidence Tampering Detected",
        overallSES: 94,
        proficiencyTier: "Advanced Practitioner",
        formulaBreakdown: {
          evidenceDiversity: "92/100 — All 5 evidence formats present: Projects (3), Certifications (2), Assessments (2), Hackathons (2), Portfolio (1)",
          demonstratedPerformance: "93/100 — Weighted average across proctored scores and competitive rankings (HackerRank 96, SAP SkillBridge 91, Hackathon Jury 92)",
          recencyIndex: "96/100 — 7 of 10 artifacts created or renewed within last 90 days; two items within last 10 days",
          roleRelevance: "94/100 — Strong direct alignment with Data Analyst Trainee requirements (SQL, Python, visualization)"
        },
        integrityChecks: {
          hashValidation: "PASS",
          provenanceChain: "PASS",
          consentTokenVerified: "PASS",
          crossSourceCorroboration: "PASS"
        }
      }
    },
    {
      id: 4,
      name: "Opportunity Matching Agent",
      shortTitle: "Opportunity Matching",
      icon: "git-merge",
      badge: "Semantic Alignment",
      color: "#F58B1F",
      description: "Evaluates verified candidate skill prints against open enterprise role requirements in SAP SuccessFactors — ranking opportunities purely on verified capability with demographic proxy fields masked from the matching tensor.",
      inputSpec: "Verified SkillPrint vector (skill name, SES, proficiency tier) and enterprise job requisition specifications with required skill weights from SAP SuccessFactors Recruiting.",
      outputSpec: "Candidate-to-Role match affinity percentage, plain-language match rationale, comparative ranking, and masked-field audit confirmation.",
      ananyaMockResult: {
        agentStatus: "Matching Complete Across 5 Active Enterprise Roles",
        topRoleMatch: "Data Analyst Trainee — 94% Match Score (Rank #1 of 7 candidates)",
        secondaryMatch: "Business Analytics Associate — 85% Match Score (Rank #2)",
        tertiaryMatch: "Junior ML Engineer — 79% Match Score (Rank #2)",
        blindMatchingAudit: "CONFIRMED — Institutional Name, City, Pincode, Gender, and Graduation Year excluded from matching tensor.",
        counterfactualCheck: "Re-running match with proxies unmasked produces IDENTICAL ranking (Δrank = 0). Capability-only scoring is consistent."
      }
    },
    {
      id: 5,
      name: "Skill Gap & Growth Agent",
      shortTitle: "Skill Gap & Growth",
      icon: "trending-up",
      badge: "Personalized Upskilling",
      color: "#2BA05A",
      description: "Identifies precise missing capabilities for desired career paths and synthesizes bite-sized, actionable learning roadmaps with effort estimates linked to SAP Learning Hub, Discovery Center, and freeCodeCamp resources.",
      inputSpec: "Candidate skill delta vs. target role competency rubric, time availability preference, preferred learning modality (video, hands-on, text), and SAP Learning Hub course catalog.",
      outputSpec: "Structured gap analysis per role, prioritized learning missions with estimated hours, and projected SES boost upon completion.",
      ananyaMockResult: {
        agentStatus: "Growth Paths Generated for All 5 Target Roles",
        primaryGapForDataAnalyst: "SAP Analytics Cloud (SAC) Story Design — not yet demonstrated in Ananya's verified artifacts.",
        prescribedLearningPath: [
          { resource: "SAP Learning Hub: Getting Started with SAC", hours: 4.5, priority: "High", projectedSESBoost: "+3.8 points" },
          { resource: "GitHub Actions ETL Orchestration Lab", hours: 8, priority: "Medium", projectedSESBoost: "+4.1 points" },
          { resource: "SAP Discovery Center: HANA Cloud Trial", hours: 3, priority: "Low", projectedSESBoost: "+2.2 points" }
        ],
        totalEstimatedHoursToRoleReadiness: "15.5 hours",
        projectedNewSES: "97–98 (Advanced Practitioner)",
        timelineEstimate: "2–3 weeks part-time (5 hours/week)"
      }
    },
    {
      id: 6,
      name: "Fairness & Explainability Agent",
      shortTitle: "Fairness & Explainability",
      icon: "eye",
      badge: "Auditing & Human Agency",
      color: "#0B1F33",
      description: "Performs real-time demographic parity audits, detects proxy discrimination risks via SHAP attribution analysis, generates plain-language 'Why' explanation cards, and enforces HUMAN DECISION control gates at every hiring action.",
      inputSpec: "Matching rankings, algorithmic attribution weight tensors, masked demographic metrics, counterfactual test results, and recruiter action audit logs.",
      outputSpec: "Fairness scorecard (demographic parity variance, equal opportunity delta), counterfactual audit log, plain-language explanation card, and HR-gate decision hooks.",
      ananyaMockResult: {
        agentStatus: "Bias Check PASSED | Explainability: 100% Deterministic Attribution",
        demographicParityVariance: "0.014 (threshold: < 0.05 — COMPLIANT)",
        equalOpportunityDelta: "0.009 (threshold: < 0.05 — COMPLIANT)",
        proxyExclusionAudit: "College tier, city pincode, gender marker, and family income entirely absent from ranking computation tensor.",
        counterfactualResult: "Re-ranking with proxies restored produces IDENTICAL order. Capability-only scoring is verified consistent.",
        plainLanguageExplanation: "Ananya is ranked #1 for Data Analyst Trainee because she holds 5 verified SQL artifacts — including a 96th-percentile HackerRank proctored test, 3 real GitHub repositories with production-grade SQL optimization, and a live SAP BTP integration proof-of-concept. Her evidence diversity score (92/100) exceeds 96% of candidates in the pool. No demographic factor contributed to this ranking.",
        humanControlBanner: "AI recommends → bias check → HR reviews → HUMAN decides."
      }
    }
  ],

  // ─── SAP ARCHITECTURE LAYERS ────────────────────────────────────────────────
  sapArchitecture: {
    layers: [
      {
        id: "layer-1",
        title: "1. Verified Evidence Ingestion Layer",
        badge: "Candidate Multi-Source Ground Truth",
        color: "#0070F2",
        status: "LIVE_IN_PROTOTYPE",
        description: "Captures tangible proof of candidate capabilities under cryptographic candidate consent. Multi-source evidence with issuer trust scoring ensures no unverified third-party data pollutes scores.",
        components: [
          { name: "GitHub / GitLab Repositories", role: "Commit velocity, unit test coverage, code review quality, and README documentation scoring", status: "LIVE_IN_PROTOTYPE" },
          { name: "Proctored Skill Assessments", role: "HackerRank, LeetCode, SAP SkillBridge verified percentile-ranked benchmarks", status: "LIVE_IN_PROTOTYPE" },
          { name: "Accredited Certifications", role: "Coursera, DeepLearning.AI, SAP Learning Hub verifiable credential IDs", status: "LIVE_IN_PROTOTYPE" },
          { name: "Hackathons & Competitions", role: "State, national, and SAP Hackfest competitive jury citations and prize records", status: "LIVE_IN_PROTOTYPE" },
          { name: "Live Portfolio Deployments", role: "Streamlit, Docker Hub, HuggingFace Model Spaces live demo endpoints", status: "LIVE_IN_PROTOTYPE" }
        ]
      },
      {
        id: "layer-2",
        title: "2. SAP Business Technology Platform (BTP)",
        badge: "Enterprise AI & Integration Backbone",
        color: "#0F9D8A",
        status: "INTEGRATION_READY",
        description: "Orchestrates multi-agent AI inference, secure data pipeline connectors, and workflow automation using native SAP BTP services. The SES scoring engine in this prototype is designed as a BTP AI Core microservice interface.",
        components: [
          { name: "SAP AI Core / AI Foundation", role: "Hosts LLM Skill Inference agent, vector embedding service, and SES computation microservice", status: "MOCKED_BTP_API" },
          { name: "SAP Integration Suite", role: "Connects external evidence providers (GitHub API, HackerRank, Coursera) via secure iFlow adapters", status: "MOCKED_BTP_API" },
          { name: "SAP Analytics Cloud (SAC)", role: "Aggregates enterprise Skill Evidence Scores and workforce diversity compliance KPIs for HR leadership", status: "MOCKED_BTP_API" },
          { name: "SAP Build Process Automation", role: "Automates candidate evidence consent approval workflows and HR notification triggers", status: "PLANNED_ENTERPRISE" }
        ]
      },
      {
        id: "layer-3",
        title: "3. Data & Experience Engine (HANA & Fiori)",
        badge: "Vector Storage & Horizon UI",
        color: "#6B4FA3",
        status: "HYBRID",
        description: "SAP HANA Cloud provides high-performance hybrid transactional/analytical processing with a vector engine for cosine similarity skill matching. SAP Build & Fiori Horizon delivers the responsive enterprise UI.",
        components: [
          { name: "SAP HANA Cloud (Vector Engine)", role: "Stores skill embeddings, candidate evidence graphs, and cosine-similarity role matching results", status: "MOCKED_BTP_API" },
          { name: "SAP Build Apps & Fiori Horizon", role: "Responsive, accessible, enterprise candidate & recruiter web prototype — live in this demo", status: "LIVE_IN_PROTOTYPE" },
          { name: "SAP Cloud Identity Services", role: "OAuth 2.0 Zero-Trust authentication and candidate evidence consent token management", status: "PLANNED_ENTERPRISE" }
        ]
      },
      {
        id: "layer-4",
        title: "4. SAP SuccessFactors HCM Core",
        badge: "Enterprise Workforce Transformation",
        color: "#F58B1F",
        status: "ENTERPRISE_ALIGNED",
        description: "Injects verified skills identity directly into SAP SuccessFactors Talent Acquisition and Opportunity Marketplace — enabling inclusive, evidence-first hiring and internal talent mobility at enterprise scale.",
        components: [
          { name: "SuccessFactors Recruiting", role: "Evidence-first blind candidate evaluation with structured human hiring decision records", status: "LIVE_IN_PROTOTYPE" },
          { name: "SuccessFactors Opportunity Marketplace", role: "Internal mobility matching, reskilling pathways, and gig project assignments based on SES scores", status: "PLANNED_ENTERPRISE" },
          { name: "Workforce Analytics & Planning", role: "Enterprise skill gap heatmaps, regional talent discovery dashboards, and DEI hiring compliance reporting", status: "MOCKED_BTP_API" },
          { name: "SAP Trust Center & Audit Log", role: "Immutable fairness check records, algorithmic explainability audit trails, and GDPR/DPDP 2023 compliance", status: "LIVE_IN_PROTOTYPE" }
        ]
      }
    ]
  },

  // ─── IMPACT & SCALE DATA ────────────────────────────────────────────────────
  impactData: {
    pillars: [
      {
        target: "Candidate",
        icon: "user-check",
        color: "#0070F2",
        headline: "Visibility Through Verified Capability",
        points: [
          "Overcomes institutional pedigree barriers: tier-2/3 students compete on verified code output, not postal code or college brand.",
          "Full data agency and ownership: candidates choose cryptographically exactly which evidence artifacts are authorized for recruiter evaluation.",
          "Actionable growth intelligence: understand precisely why a match didn't occur and the exact learning steps (with hour estimates) that close the gap.",
          "Portable skills passport: verifiable credentials persist across jobs, internships, career gaps, and sector transitions."
        ]
      },
      {
        target: "Employer",
        icon: "building-2",
        color: "#0F9D8A",
        headline: "Broader Pool & Confident, Bias-Audited Hiring",
        points: [
          "Expands addressable talent pool into 3,500+ untapped non-metro institutions and non-traditional learning pathways.",
          "Reduces résumé screening noise: eliminates keyword inflation by demanding proof — verified code, proctored scores, competition citations.",
          "Mitigates systemic hiring bias: blind screening + parity audits guard against pedigree, gender, and regional demographic bias at every ranking step.",
          "Accelerates time-to-productivity: hires demonstrate verified capability before day one — reducing onboarding failure risk and early attrition."
        ]
      },
      {
        target: "Institution",
        icon: "graduation-cap",
        color: "#6B4FA3",
        headline: "Curriculum Intelligence & Graduate Equity",
        points: [
          "Direct labor market feedback loops: reveals in aggregate exactly which industry-critical skills students lack before graduation.",
          "Enhanced placement equity: gives students from tier-3 and rural colleges equitable, evidence-based visibility at top enterprise recruiters.",
          "Data-driven curriculum modernization: align programme learning outcomes with SAP BTP, ML engineering, and modern data engineering taxonomies.",
          "Incentivizes project-based, outcome-oriented pedagogy over rote examination performance proxies."
        ]
      }
    ],
    scalabilityPhases: [
      {
        phase: "Phase 1",
        title: "Tier-2/3 Engineering Colleges",
        reach: "3,500+ Regional Colleges across India",
        description: "Empower final-year students like Ananya who possess self-driven technical skills but lack campus recruitment visits from premier enterprises. Partner with AICTE, NBA, and state technical education boards for adoption at scale.",
        milestone: "50,000+ Verified Student SkillPrints at program launch"
      },
      {
        phase: "Phase 2",
        title: "First-Generation Job Seekers",
        reach: "Semi-Urban & Rural Talent Ecosystems",
        description: "Partner with state skill development missions, polytechnic institutions, NSDC-affiliated training centres, and vocational academies to build verified capability profiles without requiring legacy résumés or reference networks.",
        milestone: "150,000+ Inclusive Talent Identities across 10 states"
      },
      {
        phase: "Phase 3",
        title: "Career Returners & Reskilling Workers",
        reach: "Caregivers, Career Switchers & Displaced Workers",
        description: "Enable professionals returning after caregiving gaps, parental leave, or health breaks — and workers transitioning from sunset industries — to prove refreshed skills without pedigree or recency penalties from career hiatus.",
        milestone: "75,000+ Successful Career Transition Matches"
      },
      {
        phase: "Phase 4",
        title: "Enterprise Internal Talent Mobility",
        reach: "SAP SuccessFactors Customer Base (170+ Countries)",
        description: "Embed SkillPrint inside SAP SuccessFactors Opportunity Marketplace for Fortune 2000 enterprises to identify hidden proven talent within their existing workforce — enabling data-driven internal mobility and reskilling at global scale.",
        milestone: "1,000,000+ Internal Mobility Matches across SAP Customer Network"
      }
    ]
  }
};
