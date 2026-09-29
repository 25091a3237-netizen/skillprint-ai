// SkillPrint AI - "Add Evidence" Modal for Candidate Dashboard
window.AddEvidenceModal = function({ isOpen, onClose, initialCategory = 'Projects', onAddEvidence }) {
  if (!isOpen) return null;

  const [category, setCategory] = React.useState(initialCategory);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [skills, setSkills] = React.useState('SQL, Python');
  const [performanceScore, setPerformanceScore] = React.useState(92);
  const [relevanceScore, setRelevanceScore] = React.useState(90);
  const [verifiedBy, setVerifiedBy] = React.useState('GitHub Automated CI/CD & Unit Tests');
  const [verificationUrl, setVerificationUrl] = React.useState('github.com/ananya-dev/new-evidence');
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  // Sync category if initialCategory changes
  React.useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
  }, [initialCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const skillList = skills.split(',').map(s => s.trim()).filter(Boolean);

    const newEvidence = {
      id: `ev-${Date.now()}`,
      category,
      title: title.trim(),
      description: description.trim() || 'Verified hands-on demonstration of technical capability.',
      date: new Date().toISOString().split('T')[0],
      recencyMonths: 0.1, // Freshly added!
      performanceScore: Number(performanceScore),
      relevanceScore: Number(relevanceScore),
      verifiedBy: verifiedBy.trim() || 'Verified Cryptographic Signature',
      verificationUrl: verificationUrl.trim() || 'credential-registry.org/verify',
      isAuthorized,
      skillsDemonstrated: skillList.length > 0 ? skillList : ['SQL', 'Python']
    };

    onAddEvidence(newEvidence);
    onClose();
  };

  const categories = ['Projects', 'Certifications', 'Assessments', 'Hackathons', 'Portfolio'];

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'add-ev-title'
  }, [
    React.createElement('div', {
      key: 'modal-card',
      className: 'sap-card w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl space-y-4'
    }, [
      // Header
      React.createElement('div', { key: 'hdr', className: 'flex items-start justify-between border-b border-gray-100 dark:border-gray-800 pb-3' }, [
        React.createElement('div', { key: 'txt' }, [
          React.createElement('div', { key: 'b-row', className: 'flex items-center gap-2 mb-1' }, [
            React.createElement('span', { key: 'pill', className: 'sap-badge sap-badge-teal' }, 'Proof of Capability'),
            React.createElement('span', { key: 'sub-t', className: 'text-xs text-gray-400 font-mono' }, 'Dynamic Ingestion')
          ]),
          React.createElement('h3', { id: 'add-ev-title', key: 'h3', className: 'text-xl font-bold text-gray-900 dark:text-gray-100' },
            'Add Verified Evidence Artifact'
          ),
          React.createElement('p', { key: 'sub', className: 'text-xs text-gray-500 dark:text-gray-400 mt-0.5' },
            'Adding evidence immediately recomputes your Skill Evidence Score (SES) across all matched roles.'
          )
        ]),
        React.createElement('button', {
          key: 'close-btn',
          onClick: onClose,
          className: 'p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
        }, [
          React.createElement('svg', { key: 'x', viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
            React.createElement('line', { key: 'l1', x1: '18', y1: '6', x2: '6', y2: '18' }),
            React.createElement('line', { key: 'l2', x1: '6', y1: '6', x2: '18', y2: '18' })
          ])
        ])
      ]),

      // Form
      React.createElement('form', { key: 'form', onSubmit: handleSubmit, className: 'space-y-4 pt-1' }, [
        // Category Selector
        React.createElement('div', { key: 'cat-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5' }, 'Evidence Category'),
          React.createElement('div', { className: 'grid grid-cols-2 sm:grid-cols-5 gap-2' },
            categories.map(c => React.createElement('button', {
              key: c,
              type: 'button',
              onClick: () => setCategory(c),
              className: `px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                category === c
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-[#0070F2] dark:text-blue-300 shadow-xs'
                  : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`
            }, c))
          )
        ]),

        // Title
        React.createElement('div', { key: 'title-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Artifact Title *'),
          React.createElement('input', {
            type: 'text',
            required: true,
            placeholder: 'e.g., E-Commerce Churn Analysis Pipeline or Advanced PostgreSQL Indexing',
            value: title,
            onChange: (e) => setTitle(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Description
        React.createElement('div', { key: 'desc-group' }, [
          React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Description / Technical Scope'),
          React.createElement('textarea', {
            rows: 2,
            placeholder: 'Briefly explain what was built, algorithms used, and tangible outcomes...',
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
            placeholder: 'SQL, Python, Machine Learning, Data Visualization',
            value: skills,
            onChange: (e) => setSkills(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          })
        ]),

        // Performance & Relevance Sliders
        React.createElement('div', { key: 'metrics-group', className: 'grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700' }, [
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

        // Verification Provider & URL
        React.createElement('div', { key: 'ver-group', className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' }, [
          React.createElement('div', { key: 'v-provider' }, [
            React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Verified By / Issuing Authority'),
            React.createElement('input', {
              type: 'text',
              value: verifiedBy,
              onChange: (e) => setVerifiedBy(e.target.value),
              className: 'w-full px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            })
          ]),
          React.createElement('div', { key: 'v-url' }, [
            React.createElement('label', { className: 'block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1' }, 'Verification Proof Link / ID'),
            React.createElement('input', {
              type: 'text',
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

        // Buttons
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
            'Add & Recompute SES'
          ])
        ])
      ])
    ])
  ]);
};
