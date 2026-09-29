// SkillPrint AI - "Add Evidence" Modal for Candidate Dashboard
// Dynamic, responsive category switching for Projects, Certifications, Assessments, Hackathons, Portfolio
// Adapts form fields, placeholders, verification authorities, and presets based on selected category.

window.AddEvidenceModal = function({ isOpen, onClose, initialCategory = 'Projects', onAddEvidence }) {
  if (!isOpen) return null;

  // Category Configuration and Metadata
  const CATEGORY_CONFIG = {
    Projects: {
      label: 'Projects',
      tagline: 'Technical implementations, code repositories, data pipelines, and algorithms.',
      badgeClass: 'sap-badge-blue',
      titleLabel: 'Project Title *',
      titlePlaceholder: 'e.g., Retail Supply Chain SQL Analytics Engine or Churn ML Pipeline',
      descPlaceholder: 'Explain system architecture, algorithms used (e.g. XGBoost, Window Functions), datasets, and performance gains...',
      skillsPlaceholder: 'SQL, Python, PostgreSQL, Machine Learning',
      defaultSkills: 'SQL, Python, Data Modeling',
      verifiedByLabel: 'Verified By / CI/CD Authority',
      verifiedByPlaceholder: 'GitHub Code Scanner & Automated Unit Tests (CI/CD)',
      defaultVerifiedBy: 'GitHub Automated CI/CD & Unit Tests',
      urlLabel: 'Repository / Code Verification URL',
      urlPlaceholder: 'github.com/ananya-dev/retail-sql-optimizer',
      defaultUrl: 'github.com/ananya-dev/retail-sql-optimizer',
      customFieldLabel: 'Repository Branch / Commit Hash',
      customFieldPlaceholder: 'main @ commit 8f42d1e (97.4% test passing rate)',
      defaultCustomField: 'main branch (84 commits, 98% test coverage)',
      presets: [
        {
          label: '⚡ Preset: Supply Chain SQL Engine',
          title: 'Retail Supply Chain SQL Analytics Engine',
          skills: 'SQL, PostgreSQL, Window Functions, CTEs',
          desc: 'Authored 47 analytical SQL queries using window functions and CTEs to compute store replenishment times, reducing runtime by 62%.',
          verifiedBy: 'PostgreSQL Database Log Analysis & Explain Plan Trace',
          url: 'github.com/ananya-dev/retail-sql-optimizer',
          custom: 'main branch (47 SQL routines, tested on 1.2M rows)',
          perf: 92,
          rel: 95
        },
        {
          label: '⚡ Preset: Healthcare ML Pipeline',
          title: 'Healthcare Readmission Prediction Pipeline',
          skills: 'Python, Scikit-Learn, XGBoost, SHAP',
          desc: 'End-to-end binary classification system with automated hyperparameter tuning via Optuna and SHAP explainability. 91.3% AUC-ROC.',
          verifiedBy: 'GitHub Code Scanner & Automated Unit Tests',
          url: 'github.com/ananya-dev/hospital-readmit-ai',
          custom: 'commit 8f42d1e (97.4% unit test pass rate)',
          perf: 94,
          rel: 91
        }
      ]
    },
    Certifications: {
      label: 'Certifications',
      tagline: 'Proctored exams, accredited industry specializations, and verified credentials.',
      badgeClass: 'sap-badge-purple',
      titleLabel: 'Certification Name *',
      titlePlaceholder: 'e.g., SAP Certified Associate - Data Engineering with SAP BTP',
      descPlaceholder: 'Proctored curriculum covered, syllabus competencies, practical lab milestones, and accredited credential details...',
      skillsPlaceholder: 'SAP BTP, SQL, Data Engineering, SAP HANA',
      defaultSkills: 'SAP BTP, SQL, Data Modeling',
      verifiedByLabel: 'Issuing Credential Authority',
      verifiedByPlaceholder: 'SAP Credential Registry / Coursera / AWS',
      defaultVerifiedBy: 'SAP Credential Registry (ID: SAP-BTP-DE-2026)',
      urlLabel: 'Credential Verification URL / ID',
      urlPlaceholder: 'cert.sap.com/verify/SAP-DE-8924',
      defaultUrl: 'cert.sap.com/verify/SAP-DE-8924',
      customFieldLabel: 'Credential License ID',
      customFieldPlaceholder: 'e.g., SAP-BTP-9041-V or PG-9824-V',
      defaultCustomField: 'SAP-BTP-9041-V',
      presets: [
        {
          label: '⚡ Preset: SAP Certified Associate',
          title: 'SAP Certified Associate - Data Engineering with SAP BTP',
          skills: 'SAP BTP, SAP HANA, SQL, Data Modeling',
          desc: 'Official SAP proctored credential validating hands-on data integration, Core Data Services (CDS), SAP HANA Cloud modeling, and pipeline security.',
          verifiedBy: 'SAP Credential Registry (ID: SAP-BTP-DE-2026)',
          url: 'cert.sap.com/verify/SAP-BTP-DE-2026',
          custom: 'SAP-BTP-9041-V (Proctored Score: 94%)',
          perf: 95,
          rel: 96
        },
        {
          label: '⚡ Preset: PostgreSQL Specialization',
          title: 'PostgreSQL Data Modeling & High Performance Querying',
          skills: 'SQL, Database Indexing, Query Optimization',
          desc: '12-week verified proctored specialization covering normalization, B-tree indexes, execution plans, MVCC concurrency, and table partitioning.',
          verifiedBy: 'Coursera Credential Engine (ID: PG-9824-V)',
          url: 'coursera.org/verify/PG-9824-V',
          custom: 'PG-9824-V (Honors Track Distinction)',
          perf: 95,
          rel: 90
        }
      ]
    },
    Assessments: {
      label: 'Assessments',
      tagline: 'Standardized algorithmic benchmarks, timed coding tests, and proctored scoring.',
      badgeClass: 'sap-badge-teal',
      titleLabel: 'Assessment Title *',
      titlePlaceholder: 'e.g., HackerRank Proctored Advanced SQL Benchmark',
      descPlaceholder: 'Standardized assessment duration, percentile achieved, topics evaluated (e.g. complex joins, indexing, query optimization)...',
      skillsPlaceholder: 'SQL, Problem Solving, Database Querying',
      defaultSkills: 'SQL, Algorithms, Database Querying',
      verifiedByLabel: 'Proctoring Body / Assessment Platform',
      verifiedByPlaceholder: 'HackerRank Proctored Engine / CodeSignal Certified',
      defaultVerifiedBy: 'HackerRank Proctored Assessment Engine',
      urlLabel: 'Assessment Result URL / Certificate ID',
      urlPlaceholder: 'hackerrank.com/certificates/SQL-PRO-2026',
      defaultUrl: 'hackerrank.com/certificates/SQL-PRO-2026',
      customFieldLabel: 'Score & Percentile Standing',
      customFieldPlaceholder: 'e.g., Score: 98/100 (Top 2% Nationwide)',
      defaultCustomField: '98/100 (Top 2% Nationwide Benchmark)',
      presets: [
        {
          label: '⚡ Preset: HackerRank Proctored SQL',
          title: 'HackerRank Proctored Advanced SQL Benchmark',
          skills: 'SQL, Window Functions, Query Tuning',
          desc: 'Proctored 90-minute timed SQL assessment testing window functions, multi-table joins, subquery optimization, and schema constraints. Scored 98/100.',
          verifiedBy: 'HackerRank Automated Proctoring & Test Sandbox',
          url: 'hackerrank.com/certificates/ananya-sql-advanced',
          custom: 'Score 98/100 (Top 2% Nationwide Benchmark)',
          perf: 98,
          rel: 94
        },
        {
          label: '⚡ Preset: CodeSignal General Coding',
          title: 'CodeSignal Certified General Coding Evaluation',
          skills: 'Python, Algorithms, Data Structures',
          desc: 'Proctored algorithmic screening measuring speed, memory optimization, and edge-case handling. Scored 842/850 (Level 10 Master).',
          verifiedBy: 'CodeSignal Assessment Engine & Verification Signature',
          url: 'codesignal.com/verify/ananya-gc-2026',
          custom: 'Score 842/850 (Top 1.5% Percentile Band)',
          perf: 92,
          rel: 88
        }
      ]
    },
    Hackathons: {
      label: 'Hackathons',
      tagline: 'Time-boxed collaborative build sprints, live jury pitches, and prototype demos.',
      badgeClass: 'sap-badge-orange',
      titleLabel: 'Hackathon & Solution Name *',
      titlePlaceholder: 'e.g., SAP Hackfest 2026 - Inclusive Workforce Track Solution',
      descPlaceholder: 'Problem statement tackled, solution architecture, team contribution, live demo link, and jury evaluation award...',
      skillsPlaceholder: 'Python, SAP BTP, Machine Learning, UI/UX',
      defaultSkills: 'Python, SAP BTP, Machine Learning',
      verifiedByLabel: 'Hackathon Organizer & Jury Committee',
      verifiedByPlaceholder: 'SAP Hackfest 2026 Jury & Devpost Project Verification',
      defaultVerifiedBy: 'SAP Hackfest 2026 Evaluation Committee',
      urlLabel: 'Submission URL / Devpost Link',
      urlPlaceholder: 'devpost.com/software/skillprint-ai',
      defaultUrl: 'devpost.com/software/skillprint-ai',
      customFieldLabel: 'Award / Finalist Standing',
      customFieldPlaceholder: 'e.g., Track Finalist / Top 5 National Innovator',
      defaultCustomField: 'Inclusive Workforce Track Finalist',
      presets: [
        {
          label: '⚡ Preset: SAP Hackfest 2026',
          title: 'SAP Hackfest 2026 - SkillPrint AI Platform',
          skills: 'SAP BTP, Python, Scikit-Learn, Explainable AI',
          desc: 'Built explainable skill evidence platform replacing résumé screening with SES capability scores. Evaluated live by SAP technical jury panel.',
          verifiedBy: 'SAP Hackfest 2026 Jury Committee & Devpost',
          url: 'devpost.com/software/skillprint-ai',
          custom: 'National Finalist - Top 5 Innovators',
          perf: 96,
          rel: 97
        },
        {
          label: '⚡ Preset: Smart India Hackathon',
          title: 'Smart India Hackathon - Agritech Demand Forecasting',
          skills: 'Python, Time-Series ML, Streamlit',
          desc: '48-hour continuous sprint building predictive crop price engine for smallholder farmers. 2nd Place Regional Winner.',
          verifiedBy: 'SIH Technical Evaluation Panel',
          url: 'github.com/ananya-dev/sih-agritech-predict',
          custom: '2nd Place Regional Winner / Ministry Citation',
          perf: 90,
          rel: 86
        }
      ]
    },
    Portfolio: {
      label: 'Portfolio',
      tagline: 'Live production applications, interactive dashboards, and design case studies.',
      badgeClass: 'sap-badge-green',
      titleLabel: 'Portfolio Artifact Title *',
      titlePlaceholder: 'e.g., Interactive Streamlit Analytics Dashboard or Live Public Tableau Story',
      descPlaceholder: 'Interactive features, live audience user metrics, responsive design, data visualization techniques, and deployment host...',
      skillsPlaceholder: 'Data Visualization, Streamlit, Python, UI/UX',
      defaultSkills: 'Data Visualization, Streamlit, UI/UX',
      verifiedByLabel: 'Hosting Platform / Live Production Engine',
      verifiedByPlaceholder: 'Streamlit Cloud / Vercel Production Deployment',
      defaultVerifiedBy: 'Streamlit Community Cloud Live Production Service',
      urlLabel: 'Live Interactive URL',
      urlPlaceholder: 'share.streamlit.io/ananya/analytics-dashboard',
      defaultUrl: 'share.streamlit.io/ananya/analytics-dashboard',
      customFieldLabel: 'Deployment Host & Live Status',
      customFieldPlaceholder: 'e.g., Streamlit Community Cloud (99.9% uptime, 1.2k views)',
      defaultCustomField: 'Streamlit Cloud (99.9% uptime, verified public access)',
      presets: [
        {
          label: '⚡ Preset: Streamlit Retail Analytics',
          title: 'Interactive Retail Performance Streamlit Dashboard',
          skills: 'Streamlit, Data Visualization, Plotly, Python',
          desc: 'Production dashboard visualizing retail sales trajectories, inventory turnover rates, and geo-spatial store metrics with sub-second response times.',
          verifiedBy: 'Streamlit Community Cloud & GitHub Live CD',
          url: 'share.streamlit.io/ananya/retail-analytics',
          custom: 'Streamlit Cloud (1,450 unique views, 99.8% uptime)',
          perf: 93,
          rel: 92
        },
        {
          label: '⚡ Preset: SHAP Model Explorer GUI',
          title: 'Healthcare Readmission Public Interactive Model Explorer',
          skills: 'Data Visualization, SHAP Plots, Streamlit',
          desc: 'Interactive web GUI allowing doctors and recruiters to simulate patient factors and view real-time SHAP force plots explaining risk predictions.',
          verifiedBy: 'Vercel Production Deployment & Web Analytics',
          url: 'hospital-readmit-ai.vercel.app',
          custom: 'Vercel Edge Network Deployed (Verified SSL)',
          perf: 91,
          rel: 89
        }
      ]
    }
  };

  const categories = ['Projects', 'Certifications', 'Assessments', 'Hackathons', 'Portfolio'];
  const validInitial = categories.includes(initialCategory) ? initialCategory : 'Projects';

  const [category, setCategory] = React.useState(validInitial);
  const currentConfig = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.Projects;

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [skills, setSkills] = React.useState(currentConfig.defaultSkills);
  const [performanceScore, setPerformanceScore] = React.useState(92);
  const [relevanceScore, setRelevanceScore] = React.useState(90);
  const [verifiedBy, setVerifiedBy] = React.useState(currentConfig.defaultVerifiedBy);
  const [verificationUrl, setVerificationUrl] = React.useState(currentConfig.defaultUrl);
  const [customField, setCustomField] = React.useState(currentConfig.defaultCustomField);
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  // Sync category if initialCategory changes externally
  React.useEffect(() => {
    if (initialCategory && categories.includes(initialCategory)) {
      handleCategorySwitch(initialCategory);
    }
  }, [initialCategory]);

  // Handle switching category cleanly
  const handleCategorySwitch = (newCat) => {
    setCategory(newCat);
    const cfg = CATEGORY_CONFIG[newCat] || CATEGORY_CONFIG.Projects;
    
    // Smoothly update defaults to match the new category
    setVerifiedBy(cfg.defaultVerifiedBy);
    setVerificationUrl(cfg.defaultUrl);
    setCustomField(cfg.defaultCustomField);
    setSkills(cfg.defaultSkills);
  };

  // Quick preset loader
  const handleLoadPreset = (preset) => {
    setTitle(preset.title);
    setDescription(preset.desc);
    setSkills(preset.skills);
    setVerifiedBy(preset.verifiedBy);
    setVerificationUrl(preset.url);
    setCustomField(preset.custom);
    setPerformanceScore(preset.perf);
    setRelevanceScore(preset.rel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const skillList = skills.split(',').map(s => s.trim()).filter(Boolean);
    const combinedDesc = customField && customField.trim()
      ? `${description.trim() || 'Verified hands-on demonstration of technical capability.'} [${currentConfig.customFieldLabel}: ${customField.trim()}]`
      : (description.trim() || 'Verified hands-on demonstration of technical capability.');

    const newEvidence = {
      id: `ev-${Date.now()}`,
      category,
      title: title.trim(),
      description: combinedDesc,
      date: new Date().toISOString().split('T')[0],
      recencyMonths: 0.1, // Freshly added!
      performanceScore: Number(performanceScore),
      relevanceScore: Number(relevanceScore),
      verifiedBy: verifiedBy.trim() || currentConfig.defaultVerifiedBy,
      verificationUrl: verificationUrl.trim() || currentConfig.defaultUrl,
      isAuthorized,
      skillsDemonstrated: skillList.length > 0 ? skillList : ['SQL', 'Python']
    };

    onAddEvidence(newEvidence);
    onClose();
  };

  // Helper icons for category buttons
  const renderCategoryIcon = (cat) => {
    switch (cat) {
      case 'Projects':
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', className: 'shrink-0' }, [
          React.createElement('polyline', { key: 'p1', points: '16 18 22 12 16 6' }),
          React.createElement('polyline', { key: 'p2', points: '8 6 2 12 8 18' })
        ]);
      case 'Certifications':
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', className: 'shrink-0' }, [
          React.createElement('circle', { key: 'c', cx: '12', cy: '8', r: '5' }),
          React.createElement('path', { key: 'p', d: 'm14.5 12.5 1.5 8.5-4-2.5-4 2.5 1.5-8.5' })
        ]);
      case 'Assessments':
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', className: 'shrink-0' }, [
          React.createElement('path', { key: 'p', d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
          React.createElement('polyline', { key: 'p2', points: '22 4 12 14.01 9 11.01' })
        ]);
      case 'Hackathons':
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', className: 'shrink-0' }, [
          React.createElement('path', { key: 'p1', d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }),
          React.createElement('path', { key: 'p2', d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }),
          React.createElement('path', { key: 'p3', d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' }),
          React.createElement('path', { key: 'p4', d: 'M4 22h16' })
        ]);
      case 'Portfolio':
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', className: 'shrink-0' }, [
          React.createElement('rect', { key: 'r', x: '2', y: '3', width: '20', height: '14', rx: '2' }),
          React.createElement('line', { key: 'l1', x1: '8', y1: '21', x2: '16', y2: '21' }),
          React.createElement('line', { key: 'l2', x1: '12', y1: '17', x2: '12', y2: '21' })
        ]);
      default:
        return null;
    }
  };

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'add-ev-title'
  }, [
    React.createElement('div', {
      key: 'modal-card',
      className: 'sap-card w-full max-w-xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl space-y-4'
    }, [
      // 1. Header
      React.createElement('div', { key: 'hdr', className: 'flex items-start justify-between border-b border-gray-100 dark:border-gray-800 pb-3' }, [
        React.createElement('div', { key: 'txt' }, [
          React.createElement('div', { key: 'b-row', className: 'flex items-center gap-2 mb-1' }, [
            React.createElement('span', { key: 'pill', className: 'sap-badge sap-badge-teal' }, 'Proof of Capability'),
            React.createElement('span', { key: 'sub-t', className: 'text-xs text-gray-400 font-mono' }, 'Dynamic Ingestion')
          ]),
          React.createElement('h3', { id: 'add-ev-title', key: 'h3', className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100' },
            'Add Verified Evidence Artifact'
          ),
          React.createElement('p', { key: 'sub', className: 'text-xs text-gray-500 dark:text-gray-400 mt-0.5' },
            'Adding evidence immediately recomputes your Skill Evidence Score (SES) across all matched roles.'
          )
        ]),
        React.createElement('button', {
          key: 'close-btn',
          onClick: onClose,
          className: 'p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
        }, [
          React.createElement('svg', { key: 'x', viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
            React.createElement('line', { key: 'l1', x1: '18', y1: '6', x2: '6', y2: '18' }),
            React.createElement('line', { key: 'l2', x1: '6', y1: '6', x2: '18', y2: '18' })
          ])
        ])
      ]),

      // 2. Form Body
      React.createElement('form', { key: 'form', onSubmit: handleSubmit, className: 'space-y-4 pt-1' }, [
        
        // Category Selector Buttons
        React.createElement('div', { key: 'cat-group' }, [
          React.createElement('div', { className: 'flex items-center justify-between mb-1.5' }, [
            React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300' }, 'Evidence Category'),
            React.createElement('span', { className: 'text-[11px] text-gray-400' }, 'Click any button to switch category')
          ]),
          React.createElement('div', { className: 'grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2' },
            categories.map(c => {
              const isSelected = category === c;
              return React.createElement('button', {
                key: c,
                id: `btn-cat-${c.toLowerCase()}`,
                type: 'button',
                onClick: (e) => {
                  e.preventDefault();
                  handleCategorySwitch(c);
                },
                className: `px-2 py-2 text-xs font-semibold rounded-xl border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/70 text-[#0070F2] dark:text-blue-300 shadow-sm ring-2 ring-blue-500/20 font-bold scale-[1.02]'
                    : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300'
                }`
              }, [
                renderCategoryIcon(c),
                React.createElement('span', { key: 'lbl' }, c)
              ]);
            })
          )
        ]),

        // Dynamic Category Context Banner & Quick Presets
        React.createElement('div', {
          key: 'cat-banner',
          className: 'p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-2'
        }, [
          React.createElement('div', { className: 'flex items-center justify-between text-xs' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5 font-semibold text-blue-900 dark:text-blue-200' }, [
              renderCategoryIcon(category),
              React.createElement('span', {}, `${currentConfig.label} Mode:`)
            ]),
            React.createElement('span', { className: `sap-badge ${currentConfig.badgeClass} text-[10px]` },
              currentConfig.label
            )
          ]),
          React.createElement('p', { className: 'text-[11px] text-blue-800/80 dark:text-blue-300/80 leading-relaxed' },
            currentConfig.tagline
          ),
          // Clickable One-Click Preset Chips
          React.createElement('div', { className: 'pt-1 border-t border-blue-100 dark:border-blue-900/30 flex flex-wrap items-center gap-1.5' }, [
            React.createElement('span', { className: 'text-[10px] font-semibold text-gray-500 dark:text-gray-400' }, 'Quick Fill Demo:'),
            currentConfig.presets.map((pr, pIdx) => React.createElement('button', {
              key: pIdx,
              type: 'button',
              onClick: () => handleLoadPreset(pr),
              title: `Click to autofill with: ${pr.title}`,
              className: 'text-[10px] font-medium px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/60 transition-colors shadow-xs'
            }, pr.label))
          ])
        ]),

        // Artifact Title (Dynamic label and placeholder)
        React.createElement('div', { key: 'title-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, currentConfig.titleLabel),
          React.createElement('input', {
            type: 'text',
            required: true,
            placeholder: currentConfig.titlePlaceholder,
            value: title,
            onChange: (e) => setTitle(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Category-Specific Detail Field
        React.createElement('div', { key: 'custom-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, currentConfig.customFieldLabel),
          React.createElement('input', {
            type: 'text',
            placeholder: currentConfig.customFieldPlaceholder,
            value: customField,
            onChange: (e) => setCustomField(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Description
        React.createElement('div', { key: 'desc-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Description / Technical Scope'),
          React.createElement('textarea', {
            rows: 2,
            placeholder: currentConfig.descPlaceholder,
            value: description,
            onChange: (e) => setDescription(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Skills Demonstrated
        React.createElement('div', { key: 'skills-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Demonstrated Skills (Comma-separated)'),
          React.createElement('input', {
            type: 'text',
            placeholder: currentConfig.skillsPlaceholder,
            value: skills,
            onChange: (e) => setSkills(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Performance & Relevance Sliders
        React.createElement('div', { key: 'metrics-group', className: 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700' }, [
          React.createElement('div', { key: 'p-slider', className: 'space-y-1' }, [
            React.createElement('div', { className: 'flex justify-between text-xs font-medium' }, [
              React.createElement('span', { className: 'text-gray-700 dark:text-gray-300' }, 'Performance Score'),
              React.createElement('span', { className: 'font-mono font-bold text-teal-600 dark:text-teal-400' }, `${performanceScore}%`)
            ]),
            React.createElement('input', {
              type: 'range',
              min: 50,
              max: 100,
              value: performanceScore,
              onChange: (e) => setPerformanceScore(e.target.value),
              className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-600'
            })
          ]),
          React.createElement('div', { key: 'r-slider', className: 'space-y-1' }, [
            React.createElement('div', { className: 'flex justify-between text-xs font-medium' }, [
              React.createElement('span', { className: 'text-gray-700 dark:text-gray-300' }, 'Role Relevance'),
              React.createElement('span', { className: 'font-mono font-bold text-blue-600 dark:text-blue-400' }, `${relevanceScore}%`)
            ]),
            React.createElement('input', {
              type: 'range',
              min: 50,
              max: 100,
              value: relevanceScore,
              onChange: (e) => setRelevanceScore(e.target.value),
              className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600'
            })
          ])
        ]),

        // Verification Provider & URL (Dynamic labels & placeholders)
        React.createElement('div', { key: 'ver-group', className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' }, [
          React.createElement('div', { key: 'v-provider' }, [
            React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, currentConfig.verifiedByLabel),
            React.createElement('input', {
              type: 'text',
              placeholder: currentConfig.verifiedByPlaceholder,
              value: verifiedBy,
              onChange: (e) => setVerifiedBy(e.target.value),
              className: 'w-full px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            })
          ]),
          React.createElement('div', { key: 'v-url' }, [
            React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, currentConfig.urlLabel),
            React.createElement('input', {
              type: 'text',
              placeholder: currentConfig.urlPlaceholder,
              value: verificationUrl,
              onChange: (e) => setVerificationUrl(e.target.value),
              className: 'w-full px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            })
          ])
        ]),

        // Mandatory Consent Toggle
        React.createElement('div', {
          key: 'consent-box',
          className: 'flex items-center justify-between p-3 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20'
        }, [
          React.createElement('div', { className: 'pr-3' }, [
            React.createElement('div', { className: 'text-xs font-bold text-gray-900 dark:text-gray-100 flex items-center gap-1.5' }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: '#0F9D8A', strokeWidth: '2.5' }, [
                React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
              ]),
              'Candidate Data Consent & Authorization'
            ]),
            React.createElement('div', { className: 'text-[11px] text-gray-600 dark:text-gray-400 mt-0.5' },
              'I authorize this artifact to be scored by SkillPrint AI for recruiter discovery.'
            )
          ]),
          React.createElement('label', { className: 'toggle-switch shrink-0' }, [
            React.createElement('input', {
              type: 'checkbox',
              checked: isAuthorized,
              onChange: (e) => setIsAuthorized(e.target.checked)
            }),
            React.createElement('span', { className: 'toggle-slider' })
          ])
        ]),

        // Action Buttons
        React.createElement('div', { key: 'actions', className: 'flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100 dark:border-gray-800' }, [
          React.createElement('button', {
            key: 'cancel',
            type: 'button',
            onClick: onClose,
            className: 'sap-btn-secondary text-xs'
          }, 'Cancel'),
          React.createElement('button', {
            key: 'submit',
            type: 'submit',
            className: 'sap-btn-primary text-xs flex items-center gap-1.5'
          }, [
            React.createElement('svg', { key: 'plus', viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
              React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
              React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
            ]),
            `Add to ${category} & Recompute SES`
          ])
        ])
      ])
    ])
  ]);
};
