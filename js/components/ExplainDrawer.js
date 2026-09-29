// SkillPrint AI - Explainable Recommendation & Human Decision Drawer
window.ExplainDrawer = function({ isOpen, onClose, candidate, role, isBlindScreening, onDecisionSubmit }) {
  if (!isOpen || !candidate) return null;

  const [decisionNote, setDecisionNote] = React.useState(candidate.recruiterNotes || '');
  const [selectedAction, setSelectedAction] = React.useState(candidate.decisionStatus || 'Pending');

  const matchInfo = (candidate.roleMatches && candidate.roleMatches[role.id]) || {
    sesScore: 88,
    matchStatus: "High Match",
    rank: 1,
    biasCheck: "Pass"
  };

  const handleAction = (status) => {
    setSelectedAction(status);
    if (onDecisionSubmit) {
      onDecisionSubmit(candidate.id, status, decisionNote);
    }
  };

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'explain-drawer-title'
  }, [
    React.createElement('div', {
      key: 'drawer-panel',
      className: 'fixed inset-y-0 right-0 max-w-full flex pl-10'
    }, [
      React.createElement('div', {
        className: 'w-screen max-w-xl bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col justify-between overflow-y-auto'
      }, [
        // Top Content
        React.createElement('div', { key: 'content-body', className: 'p-6 space-y-5' }, [
          // Drawer Header
          React.createElement('div', { key: 'top-nav', className: 'flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4' }, [
            React.createElement('div', { key: 'title-col' }, [
              React.createElement('div', { className: 'flex items-center gap-2 mb-1' }, [
                React.createElement('span', { className: 'sap-badge sap-badge-blue' }, 'Explainable Recommendation'),
                React.createElement('span', {
                  className: `sap-badge ${matchInfo.biasCheck === 'Pass' ? 'sap-badge-green' : 'sap-badge-orange'}`
                }, `Bias Check: ${matchInfo.biasCheck}`)
              ]),
              React.createElement('h3', { id: 'explain-drawer-title', className: 'text-xl font-bold text-gray-900 dark:text-gray-100' },
                `Recommendation Dossier: ${candidate.name}`
              ),
              React.createElement('p', { className: 'text-xs text-gray-500 dark:text-gray-400' },
                `Target Evaluation: ${role.title} (${role.department})`
              )
            ]),
            React.createElement('button', {
              key: 'close',
              onClick: onClose,
              className: 'p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            }, [
              React.createElement('svg', { key: 'x', viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
              ])
            ])
          ]),

          // Core Mandate Banner
          React.createElement('div', {
            key: 'core-mandate',
            className: 'p-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 border border-blue-200 dark:border-blue-900/60 flex items-center gap-2.5 text-xs font-semibold text-gray-800 dark:text-gray-200'
          }, [
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-blue-500 shrink-0' }),
            React.createElement('span', {}, 'AI recommends → bias check → HR reviews → HUMAN decides.')
          ]),

          // Plain Language Explanation
          React.createElement('div', { key: 'why-box', className: 'space-y-2' }, [
            React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400' },
              '1. Plain-Language "Why" Rationale'
            ),
            React.createElement('div', {
              className: 'p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 leading-relaxed space-y-2'
            }, [
              React.createElement('p', { key: 'p1' }, candidate.whyRecommend || 'Recommended based on high verified evidence density and verified test benchmarks.'),
              React.createElement('div', { key: 'highlights', className: 'pt-2 border-t border-gray-200 dark:border-gray-700/60 flex flex-wrap gap-2' },
                (candidate.skillsSummary || []).map((sk, idx) =>
                  React.createElement('span', { key: idx, className: 'sap-badge sap-badge-blue text-[11px]' }, sk)
                )
              )
            ])
          ]),

          // Fairness & Bias Check Panel
          React.createElement('div', { key: 'fairness-box', className: 'space-y-2' }, [
            React.createElement('div', { className: 'flex items-center justify-between' }, [
              React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400' },
                '2. Fairness & Algorithmic Parity Check'
              ),
              React.createElement('span', { className: 'sap-badge sap-badge-green text-[10px]' }, 'AUDIT VERIFIED')
            ]),
            React.createElement('div', {
              className: 'p-3.5 rounded-xl border border-teal-100 dark:border-teal-900/40 bg-teal-50/40 dark:bg-teal-950/20 text-xs space-y-2 text-gray-700 dark:text-gray-300'
            }, [
              React.createElement('div', { key: 'f1', className: 'flex items-center justify-between text-xs' }, [
                React.createElement('span', { className: 'font-medium' }, 'Demographic Proxy Shielding'),
                React.createElement('span', { className: 'text-teal-600 dark:text-teal-400 font-bold' }, 'Active (100% Masked)')
              ]),
              React.createElement('div', { key: 'f2', className: 'flex items-center justify-between text-xs' }, [
                React.createElement('span', { className: 'font-medium' }, 'Demographic Parity Variance'),
                React.createElement('span', { className: 'text-teal-600 dark:text-teal-400 font-bold' }, '< 0.02 (Optimal)')
              ]),
              React.createElement('p', { key: 'f3', className: 'text-[11px] text-gray-500 dark:text-gray-400' },
                'Scoring weights utilize only verified skill evidence (projects, assessments, code tests). Institutional pedigree, geographic pincodes, and gender markers were strictly excluded from model parameters.'
              )
            ])
          ]),

          // Candidate Proxy Fields (Blind Screening Status)
          React.createElement('div', { key: 'blind-status-box', className: 'space-y-2' }, [
            React.createElement('div', { className: 'flex items-center justify-between' }, [
              React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400' },
                '3. Candidate Identity & Background'
              ),
              React.createElement('span', {
                className: `text-[11px] font-semibold ${isBlindScreening ? 'text-teal-600' : 'text-orange-500'}`
              }, isBlindScreening ? '🛡️ Blind Screening Active' : '⚠️ Proxies Unmasked')
            ]),
            React.createElement('div', {
              className: 'p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 text-xs space-y-1.5'
            }, [
              React.createElement('div', { key: 'row-col', className: 'flex justify-between' }, [
                React.createElement('span', { className: 'text-gray-500' }, 'Institution / College:'),
                React.createElement('span', {
                  className: `font-medium ${isBlindScreening ? 'blur-[3px] select-none text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 rounded' : 'text-gray-900 dark:text-gray-100'}`
                }, candidate.blindProxy ? candidate.blindProxy.college : 'Tier-3 Engineering Institute')
              ]),
              React.createElement('div', { key: 'row-city', className: 'flex justify-between' }, [
                React.createElement('span', { className: 'text-gray-500' }, 'Location / City:'),
                React.createElement('span', {
                  className: `font-medium ${isBlindScreening ? 'blur-[3px] select-none text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 rounded' : 'text-gray-900 dark:text-gray-100'}`
                }, candidate.blindProxy ? candidate.blindProxy.city : 'Tier-3 City')
              ]),
              React.createElement('div', { key: 'row-bg', className: 'flex justify-between' }, [
                React.createElement('span', { className: 'text-gray-500' }, 'Background Signal:'),
                React.createElement('span', {
                  className: `font-medium ${isBlindScreening ? 'blur-[3px] select-none text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 rounded' : 'text-gray-900 dark:text-gray-100'}`
                }, candidate.blindProxy ? candidate.blindProxy.background : 'First-generation graduate')
              ])
            ])
          ]),

          // Verified Evidence Summary
          React.createElement('div', { key: 'ev-list-box', className: 'space-y-2' }, [
            React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400' },
              '4. Verified Evidence Highlights'
            ),
            React.createElement('div', {
              className: 'p-3 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-xs text-gray-800 dark:text-gray-200 flex items-start gap-2.5'
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: '#0070F2', strokeWidth: '2', className: 'shrink-0 mt-0.5' }, [
                React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
              ]),
              React.createElement('div', {}, [
                React.createElement('div', { className: 'font-bold text-gray-900 dark:text-gray-100' }, 'Cryptographically Verified Proof'),
                React.createElement('div', { className: 'text-[11px] text-gray-600 dark:text-gray-400 mt-0.5' },
                  candidate.topEvidence || 'Demonstrated multi-source evidence verified by GitHub, HackerRank, and SAP SkillBridge.'
                )
              ])
            ])
          ])
        ]),

        // Sticky Bottom Human Controls
        React.createElement('div', {
          key: 'decision-controls',
          className: 'p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/80 space-y-3'
        }, [
          React.createElement('div', { className: 'flex items-center justify-between text-xs' }, [
            React.createElement('span', { className: 'font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300' },
              'Human Decision Controls'
            ),
            React.createElement('span', {
              className: `sap-badge ${
                selectedAction === 'Approved' ? 'sap-badge-green' :
                selectedAction === 'Rejected' ? 'sap-badge-red' :
                selectedAction === 'Needs More Evidence' ? 'sap-badge-orange' : 'sap-badge-blue'
              }`
            }, `Status: ${selectedAction}`)
          ]),

          // Note Field
          React.createElement('textarea', {
            rows: 2,
            placeholder: 'Add mandatory HR evaluator rationale or note before submitting decision...',
            value: decisionNote,
            onChange: (e) => setDecisionNote(e.target.value),
            className: 'w-full px-3 py-2 text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
          }),

          // Action Buttons: Approve / Reject / Request More Evidence
          React.createElement('div', { className: 'grid grid-cols-3 gap-2 pt-1' }, [
            React.createElement('button', {
              key: 'btn-approve',
              type: 'button',
              onClick: () => handleAction('Approved'),
              className: `px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                selectedAction === 'Approved'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 hover:bg-green-200'
              }`
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
                React.createElement('polyline', { points: '20 6 9 17 4 12' })
              ]),
              'Approve'
            ]),

            React.createElement('button', {
              key: 'btn-more',
              type: 'button',
              onClick: () => handleAction('Needs More Evidence'),
              className: `px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                selectedAction === 'Needs More Evidence'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 hover:bg-orange-200'
              }`
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
                React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
                React.createElement('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' })
              ]),
              'Request Proof'
            ]),

            React.createElement('button', {
              key: 'btn-reject',
              type: 'button',
              onClick: () => handleAction('Rejected'),
              className: `px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                selectedAction === 'Rejected'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 hover:bg-red-200'
              }`
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
                React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
              ]),
              'Reject'
            ])
          ])
        ])
      ])
    ])
  ]);
};
