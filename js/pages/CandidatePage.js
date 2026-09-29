// SkillPrint AI - Candidate Dashboard Component (Ananya)
// Evidence-first verified skills identity, dynamic SES radial gauge, component breakdowns,
// granular authorization consent toggles, skills table, and skill gap & growth roadmap.

window.CandidatePage = function({
  ananyaProfile,
  evidenceList,
  setEvidenceList,
  weights,
  onOpenWeights,
  onOpenAddEvidence,
  roles
}) {
  const [selectedRoleId, setSelectedRoleId] = React.useState(ananyaProfile.targetRoleId || 'role-1');
  const [selectedSkillFilter, setSelectedSkillFilter] = React.useState('ALL');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = React.useState('ALL');

  // Compute dynamic candidate SES based on authorized evidence and active weights
  const overallSES = window.SES_ENGINE.computeCandidateSES(evidenceList, weights);

  // Toggle individual evidence authorization consent
  const handleToggleConsent = (id) => {
    setEvidenceList(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, isAuthorized: !item.isAuthorized };
      }
      return item;
    }));
  };

  const selectedRole = roles.find(r => r.id === selectedRoleId) || roles[0];

  // Dynamically compute skills table items based on current authorized evidence
  const coreSkillNames = ['SQL', 'Python', 'Machine Learning', 'Data Visualization', 'Data Modeling'];
  const computedSkills = coreSkillNames.map(name => {
    const res = window.SES_ENGINE.computeSkillSES(name, evidenceList, weights);
    return {
      name,
      ...res
    };
  });

  // Calculate Radial Gauge offset (circumference = 2 * PI * 42 ≈ 263.89)
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallSES.sesScore / 100) * circumference;

  // Group evidence by category
  const categories = ['Projects', 'Certifications', 'Assessments', 'Hackathons', 'Portfolio'];

  return React.createElement('div', { className: 'space-y-8 pb-12 animate-fadeIn' }, [
    
    // 1. Candidate Persona & Overall SES Radial Gauge Hero Card
    React.createElement('div', {
      key: 'persona-card',
      className: 'sap-card p-6 lg:p-8 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl'
    }, [
      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-center' }, [
        // Left Column: Candidate Info
        React.createElement('div', { key: 'cand-meta', className: 'lg:col-span-7 space-y-4' }, [
          React.createElement('div', { className: 'flex flex-wrap items-center gap-3' }, [
            React.createElement('div', {
              className: 'w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0070F2] via-[#0F9D8A] to-[#6B4FA3] text-white flex items-center justify-center font-extrabold text-xl shadow-md'
            }, 'AN'),
            React.createElement('div', {}, [
              React.createElement('div', { className: 'flex items-center gap-2' }, [
                React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 dark:text-gray-100' }, ananyaProfile.name),
                React.createElement('span', { className: 'text-sm text-gray-500' }, `(${ananyaProfile.age} yrs • ${ananyaProfile.pronouns})`),
                React.createElement('span', { className: 'sap-badge sap-badge-blue text-[11px]' }, 'Student Persona')
              ]),
              React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-300 font-medium' }, ananyaProfile.headline)
            ])
          ]),

          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' }, ananyaProfile.bio),

          // Target Role Quick Selector
          React.createElement('div', { className: 'pt-2 flex flex-wrap items-center gap-2' }, [
            React.createElement('span', { className: 'text-xs font-semibold text-gray-500 dark:text-gray-400' }, 'Target Career Role:'),
            React.createElement('select', {
              value: selectedRoleId,
              onChange: (e) => setSelectedRoleId(e.target.value),
              className: 'px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
            }, roles.map(r => React.createElement('option', { key: r.id, value: r.id }, r.title)))
          ]),

          // Consent status banner
          React.createElement('div', {
            className: 'p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 flex items-center justify-between text-xs'
          }, [
            React.createElement('div', { className: 'flex items-center gap-2 text-teal-900 dark:text-teal-200 font-medium' }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: '#0F9D8A', strokeWidth: '2.5' }, [
                React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
              ]),
              React.createElement('span', {}, `${overallSES.authorizedCount} of ${overallSES.totalCount} Evidence Artifacts Authorized for Recruiter Discovery`)
            ]),
            React.createElement('span', { className: 'text-[11px] font-mono text-teal-600 dark:text-teal-400 font-bold' }, 'Consent Active')
          ])
        ]),

        // Right Column: Radial Gauge & Breakdown Component Bars
        React.createElement('div', { key: 'ses-gauge-col', className: 'lg:col-span-5 p-5 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/80 space-y-4' }, [
          React.createElement('div', { className: 'flex items-center justify-between' }, [
            React.createElement('div', {}, [
              React.createElement('span', { className: 'text-xs font-bold uppercase tracking-wider text-gray-400' }, 'Verified Skillprint'),
              React.createElement('h3', { className: 'text-base font-bold text-gray-900 dark:text-gray-100' }, 'Skill Evidence Score (SES)')
            ]),
            React.createElement('button', {
              onClick: onOpenWeights,
              className: 'px-2 py-1 text-xs font-semibold rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:text-blue-600'
            }, 'Tune Weights')
          ]),

          // Radial Gauge + Score Level
          React.createElement('div', { className: 'flex items-center justify-center gap-6 py-1' }, [
            // SVG Circular Gauge
            React.createElement('div', { className: 'relative w-28 h-28 flex items-center justify-center' }, [
              React.createElement('svg', { className: 'w-full h-full -rotate-90 transform', viewBox: '0 0 100 100' }, [
                // Track circle
                React.createElement('circle', {
                  cx: '50',
                  cy: '50',
                  r: radius,
                  fill: 'transparent',
                  stroke: 'currentColor',
                  strokeWidth: '8',
                  className: 'text-gray-200 dark:text-gray-700'
                }),
                // Progress circle
                React.createElement('circle', {
                  cx: '50',
                  cy: '50',
                  r: radius,
                  fill: 'transparent',
                  stroke: '#0070F2',
                  strokeWidth: '8',
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                  strokeLinecap: 'round',
                  className: 'gauge-circle'
                })
              ]),
              React.createElement('div', { className: 'absolute inset-0 flex flex-col items-center justify-center text-center' }, [
                React.createElement('span', { className: 'text-3xl font-black text-gray-900 dark:text-gray-100' }, overallSES.sesScore),
                React.createElement('span', { className: 'text-[10px] font-semibold text-gray-400 uppercase tracking-wider' }, 'OUT OF 100')
              ])
            ]),

            // Level text
            React.createElement('div', { className: 'space-y-1' }, [
              React.createElement('span', { className: `sap-badge ${overallSES.badgeClass} text-xs font-bold` }, overallSES.level),
              React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-400 leading-tight max-w-[150px]' },
                'Derived dynamically from verified project commits, hackathons, and proctored tests.'
              )
            ])
          ]),

          // 4 Breakdown Component Bars
          React.createElement('div', { className: 'space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-xs' }, [
            // Diversity
            React.createElement('div', { key: 'b-div', className: 'space-y-0.5' }, [
              React.createElement('div', { className: 'flex justify-between text-[11px] text-gray-600 dark:text-gray-400' }, [
                React.createElement('span', { className: 'font-medium' }, `Evidence Diversity (${Math.round(weights.diversity * 100)}% wt)`),
                React.createElement('span', { className: 'font-mono font-bold text-[#0070F2]' }, `${overallSES.diversity}%`)
              ]),
              React.createElement('div', { className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                React.createElement('div', { className: 'h-full bg-[#0070F2] rounded-full transition-all duration-500', style: { width: `${overallSES.diversity}%` } })
              ])
            ]),

            // Demonstrated Performance
            React.createElement('div', { key: 'b-perf', className: 'space-y-0.5' }, [
              React.createElement('div', { className: 'flex justify-between text-[11px] text-gray-600 dark:text-gray-400' }, [
                React.createElement('span', { className: 'font-medium' }, `Demonstrated Performance (${Math.round(weights.performance * 100)}% wt)`),
                React.createElement('span', { className: 'font-mono font-bold text-[#0F9D8A]' }, `${overallSES.performance}%`)
              ]),
              React.createElement('div', { className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                React.createElement('div', { className: 'h-full bg-[#0F9D8A] rounded-full transition-all duration-500', style: { width: `${overallSES.performance}%` } })
              ])
            ]),

            // Recency
            React.createElement('div', { key: 'b-rec', className: 'space-y-0.5' }, [
              React.createElement('div', { className: 'flex justify-between text-[11px] text-gray-600 dark:text-gray-400' }, [
                React.createElement('span', { className: 'font-medium' }, `Recency Factor (${Math.round(weights.recency * 100)}% wt)`),
                React.createElement('span', { className: 'font-mono font-bold text-[#6B4FA3]' }, `${overallSES.recency}%`)
              ]),
              React.createElement('div', { className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                React.createElement('div', { className: 'h-full bg-[#6B4FA3] rounded-full transition-all duration-500', style: { width: `${overallSES.recency}%` } })
              ])
            ]),

            // Role Relevance
            React.createElement('div', { key: 'b-rel', className: 'space-y-0.5' }, [
              React.createElement('div', { className: 'flex justify-between text-[11px] text-gray-600 dark:text-gray-400' }, [
                React.createElement('span', { className: 'font-medium' }, `Role Relevance (${Math.round(weights.relevance * 100)}% wt)`),
                React.createElement('span', { className: 'font-mono font-bold text-[#F58B1F]' }, `${overallSES.relevance}%`)
              ]),
              React.createElement('div', { className: 'w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                React.createElement('div', { className: 'h-full bg-[#F58B1F] rounded-full transition-all duration-500', style: { width: `${overallSES.relevance}%` } })
              ])
            ])
          ])
        ])
      ])
    ]),

    // 2. Verified Skills Table (Skill, Evidence count, Proficiency, Confidence %, Role Relevance)
    React.createElement('div', { key: 'skills-table-sec', className: 'space-y-4' }, [
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3' }, [
        React.createElement('div', {}, [
          React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100' }, 'Verified Skill Capabilities'),
          React.createElement('p', { className: 'text-xs text-gray-500' },
            'Scores and confidence dynamically recompute as you toggle evidence authorization.'
          )
        ]),
        React.createElement('button', {
          onClick: () => onOpenAddEvidence('Projects'),
          className: 'sap-btn-primary text-xs flex items-center gap-1.5 shrink-0'
        }, [
          React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
            React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
            React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
          ]),
          'Add New Evidence'
        ])
      ]),

      // Table Container
      React.createElement('div', {
        className: 'sap-card overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xs'
      }, [
        React.createElement('div', { className: 'overflow-x-auto' }, [
          React.createElement('table', { className: 'w-full text-left text-xs' }, [
            React.createElement('thead', { className: 'bg-gray-50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700 text-gray-500 font-semibold uppercase tracking-wider text-[11px]' }, [
              React.createElement('tr', {}, [
                React.createElement('th', { className: 'py-3.5 px-4' }, 'Skill Name'),
                React.createElement('th', { className: 'py-3.5 px-4' }, 'Authorized Proof Items'),
                React.createElement('th', { className: 'py-3.5 px-4' }, 'Proficiency Tier'),
                React.createElement('th', { className: 'py-3.5 px-4' }, 'Model Confidence'),
                React.createElement('th', { className: 'py-3.5 px-4' }, 'Target Role Relevance'),
                React.createElement('th', { className: 'py-3.5 px-4 text-right' }, 'Skill SES')
              ])
            ]),
            React.createElement('tbody', { className: 'divide-y divide-gray-100 dark:divide-gray-700/60' },
              computedSkills.map((sk, idx) => React.createElement('tr', {
                key: idx,
                className: 'hover:bg-gray-50/80 dark:hover:bg-gray-750 transition-colors'
              }, [
                React.createElement('td', { className: 'py-3.5 px-4 font-bold text-gray-900 dark:text-gray-100' }, sk.name),
                React.createElement('td', { className: 'py-3.5 px-4' }, [
                  React.createElement('span', { className: 'inline-flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300' }, [
                    React.createElement('span', { className: 'w-2 h-2 rounded-full bg-blue-500' }),
                    `${sk.evidenceCount} verified artifacts`
                  ])
                ]),
                React.createElement('td', { className: 'py-3.5 px-4' }, [
                  React.createElement('span', { className: `sap-badge ${sk.badgeClass}` }, sk.proficiency)
                ]),
                React.createElement('td', { className: 'py-3.5 px-4' }, [
                  React.createElement('div', { className: 'flex items-center gap-2' }, [
                    React.createElement('div', { className: 'w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                      React.createElement('div', { className: 'h-full bg-teal-500 rounded-full', style: { width: `${sk.confidence}%` } })
                    ]),
                    React.createElement('span', { className: 'font-mono text-gray-600 dark:text-gray-400 text-[11px]' }, `${sk.confidence}%`)
                  ])
                ]),
                React.createElement('td', { className: 'py-3.5 px-4' }, [
                  React.createElement('div', { className: 'flex items-center gap-2' }, [
                    React.createElement('div', { className: 'w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden' }, [
                      React.createElement('div', { className: 'h-full bg-blue-500 rounded-full', style: { width: `${sk.roleRelevance}%` } })
                    ]),
                    React.createElement('span', { className: 'font-mono text-gray-600 dark:text-gray-400 text-[11px]' }, `${sk.roleRelevance}%`)
                  ])
                ]),
                React.createElement('td', { className: 'py-3.5 px-4 text-right font-mono font-bold text-sm text-[#0070F2] dark:text-blue-400' },
                  sk.sesScore
                )
              ]))
            )
          ])
        ])
      ])
    ]),

    // 3. Evidence Sources Breakdown (Projects, Certifications, Assessments, Hackathons, Portfolio)
    React.createElement('div', { key: 'evidence-sources-sec', className: 'space-y-4' }, [
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-2' }, [
        React.createElement('div', {}, [
          React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100' }, 'Evidence Sources & Authorization Controls'),
          React.createElement('p', { className: 'text-xs text-gray-500' },
            'Candidates own their data. Toggle consent to exclude any artifact from recruiter discovery.'
          )
        ]),
        React.createElement('div', { className: 'text-xs text-gray-400 font-mono' },
          'Cryptographic Proof Registry'
        )
      ]),

      // Evidence Category Filter Pills
      React.createElement('div', { key: 'cat-filter-pills', className: 'flex flex-wrap items-center gap-2 pb-1' },
        ['ALL', ...categories].map(c => {
          const isSelected = selectedCategoryFilter === c;
          const count = c === 'ALL' ? evidenceList.length : evidenceList.filter(e => e.category === c).length;
          return React.createElement('button', {
            key: c,
            type: 'button',
            onClick: () => setSelectedCategoryFilter(c),
            className: `px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
              isSelected
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/70 text-[#0070F2] dark:text-blue-300 shadow-xs ring-1 ring-blue-500/20'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`
          }, [
            React.createElement('span', { key: 'name' }, c === 'ALL' ? 'All Categories' : c),
            React.createElement('span', {
              key: 'cnt',
              className: `px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                isSelected ? 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`
            }, count)
          ]);
        })
      ),

      // 5 Evidence Category Sections
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' },
        (selectedCategoryFilter === 'ALL' ? categories : categories.filter(c => c === selectedCategoryFilter)).map(cat => {
          const itemsInCat = evidenceList.filter(e => e.category === cat);
          return React.createElement('div', {
            key: cat,
            className: 'sap-card p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4'
          }, [
            React.createElement('div', { key: 'cat-top', className: 'space-y-3' }, [
              React.createElement('div', { className: 'flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2' }, [
                React.createElement('div', { className: 'flex items-center gap-2' }, [
                  React.createElement('span', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, cat),
                  React.createElement('span', { className: 'sap-badge sap-badge-blue text-[10px]' }, `${itemsInCat.length} Items`)
                ]),
                React.createElement('button', {
                  onClick: () => onOpenAddEvidence(cat),
                  className: 'text-xs font-semibold text-[#0070F2] hover:underline flex items-center gap-1'
                }, '+ Add')
              ]),

              // Items in category
              React.createElement('div', { className: 'space-y-3' },
                itemsInCat.map(item => React.createElement('div', {
                  key: item.id,
                  className: `p-3 rounded-xl border transition-all ${
                    item.isAuthorized
                      ? 'bg-gray-50/70 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700'
                      : 'bg-red-50/30 dark:bg-red-950/20 border-red-200 dark:border-red-900/40 opacity-70'
                  }`
                }, [
                  React.createElement('div', { className: 'flex items-start justify-between gap-2 mb-1.5' }, [
                    React.createElement('h5', { className: 'font-bold text-xs text-gray-900 dark:text-gray-100 leading-snug' }, item.title),
                    // Authorization Toggle Switch
                    React.createElement('label', {
                      className: 'toggle-switch shrink-0',
                      title: item.isAuthorized ? 'Authorized (Included in SES)' : 'Unauthorized (Excluded from SES)'
                    }, [
                      React.createElement('input', {
                        type: 'checkbox',
                        checked: item.isAuthorized !== false,
                        onChange: () => handleToggleConsent(item.id)
                      }),
                      React.createElement('span', { className: 'toggle-slider' })
                    ])
                  ]),

                  React.createElement('p', { className: 'text-[11px] text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed' }, item.description),

                  // Metadata Row: Verification & Performance
                  React.createElement('div', { className: 'mt-2.5 pt-2 border-t border-gray-200 dark:border-gray-700/60 flex items-center justify-between text-[10px]' }, [
                    React.createElement('span', { className: 'text-gray-500 truncate max-w-[140px]' }, `✓ ${item.verifiedBy}`),
                    React.createElement('span', { className: 'font-mono font-bold text-teal-600 dark:text-teal-400' }, `Score: ${item.performanceScore}%`)
                  ])
                ]))
              )
            ])
          ]);
        })
      )
    ]),

    // 4. Skill Gap & Growth Section + "Why I Match / Don't Match"
    React.createElement('div', { key: 'gap-growth-sec', className: 'space-y-4' }, [
      React.createElement('div', {}, [
        React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100' }, 'Skill Gap & Growth Roadmap'),
        React.createElement('p', { className: 'text-xs text-gray-500' },
          `Personalized readiness roadmap for target role: ${selectedRole.title}`
        )
      ]),

      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-6' }, [
        // "Why I Match / Don't Match" Explanation Panel
        React.createElement('div', {
          key: 'why-panel',
          className: 'lg:col-span-5 sap-card p-6 bg-gradient-to-br from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-800 border border-blue-200 dark:border-gray-700 space-y-4'
        }, [
          React.createElement('div', { className: 'flex items-center gap-2' }, [
            React.createElement('span', { className: 'sap-badge sap-badge-blue' }, 'Explainability Rationale'),
            React.createElement('span', { className: 'text-xs text-gray-400 font-mono' }, selectedRole.title)
          ]),

          React.createElement('h4', { className: 'text-base font-bold text-gray-900 dark:text-gray-100' },
            'Why Ananya Matches (or Needs Growth)'
          ),

          React.createElement('div', { className: 'p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 leading-relaxed' },
            (selectedRole.whyMatchExplanation && selectedRole.whyMatchExplanation.ananya) ||
            "Ananya exhibits strong technical foundations in SQL and Python with verified multi-source evidence. Gap analysis highlights opportunities for enterprise framework familiarity."
          ),

          React.createElement('div', { className: 'space-y-2 text-xs pt-1' }, [
            React.createElement('div', { className: 'font-bold text-gray-800 dark:text-gray-200' }, 'Role Competency Alignment:'),
            React.createElement('div', { className: 'space-y-1.5' },
              (selectedRole.requiredSkills || []).map((req, i) => {
                const match = computedSkills.find(s => s.name.toLowerCase() === req.name.toLowerCase());
                const score = match ? match.sesScore : 40;
                return React.createElement('div', { key: i, className: 'flex items-center justify-between text-[11px]' }, [
                  React.createElement('span', { className: 'text-gray-600 dark:text-gray-400' }, `${req.name} (req: ${req.minProficiency})`),
                  React.createElement('span', { className: `font-bold ${score >= 70 ? 'text-green-600' : 'text-orange-500'}` },
                    score >= 70 ? `Matched (${score} SES)` : `Gap (${score} SES)`
                  )
                ]);
              })
            )
          ])
        ]),

        // Suggested Next Learning Steps
        React.createElement('div', {
          key: 'steps-panel',
          className: 'lg:col-span-7 sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4'
        }, [
          React.createElement('div', { className: 'flex items-center justify-between' }, [
            React.createElement('h4', { className: 'text-base font-bold text-gray-900 dark:text-gray-100' },
              'Actionable Next Learning Steps'
            ),
            React.createElement('span', { className: 'sap-badge sap-badge-teal text-[11px]' }, 'Linked to SAP Learning Hub')
          ]),

          React.createElement('div', { className: 'space-y-3' },
            (selectedRole.skillGaps && selectedRole.skillGaps.ananya && selectedRole.skillGaps.ananya.length > 0)
              ? selectedRole.skillGaps.ananya.map((gap, i) => React.createElement('div', {
                  key: i,
                  className: 'p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/40 space-y-2'
                }, [
                  React.createElement('div', { className: 'flex items-center justify-between' }, [
                    React.createElement('span', { className: 'font-bold text-xs text-gray-900 dark:text-gray-100' }, gap.skill),
                    React.createElement('span', {
                      className: `sap-badge ${gap.severity === 'Core Gap' || gap.severity === 'Key Gap' ? 'sap-badge-orange' : 'sap-badge-blue'} text-[10px]`
                    }, gap.severity)
                  ]),
                  React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400' }, gap.reason),
                  React.createElement('div', { className: 'pt-2 flex items-center justify-between text-xs border-t border-gray-200 dark:border-gray-700' }, [
                    React.createElement('span', { className: 'text-gray-700 dark:text-gray-300 font-medium' }, gap.learningAction),
                    React.createElement('button', {
                      onClick: () => alert(`Opening guided resource: "${gap.learningAction}"`),
                      className: 'text-[#0070F2] dark:text-blue-400 font-semibold hover:underline shrink-0'
                    }, gap.linkText || 'Open Tutorial →')
                  ])
                ]))
              : React.createElement('div', { className: 'p-4 text-xs text-gray-500' }, 'All required skills meet or exceed target threshold.')
          )
        ])
      ])
    ])
  ]);
};
