// SkillPrint AI - Impact & Scale Page Component
// Value breakdown for Candidate, Employer, and Institution.
// Scalability path: Tier-2/3 engineering students → First-gen job seekers →
// Career returners/reskilling workers → Enterprise internal talent mobility.
// Adheres strictly to guidelines: No fake testimonials or invented statistics.

window.ImpactScalePage = function({ impactData, onNavigateCandidate, onNavigateRecruiter }) {
  const [activePhaseIndex, setActivePhaseIndex] = React.useState(0);

  return React.createElement('div', { className: 'space-y-10 pb-12 animate-fadeIn' }, [
    
    // Page Header
    React.createElement('div', {
      key: 'hdr',
      className: 'sap-card p-6 lg:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl space-y-2'
    }, [
      React.createElement('div', { className: 'flex items-center gap-2' }, [
        React.createElement('span', { className: 'sap-badge sap-badge-teal' }, 'Inclusive Workforce Impact'),
        React.createElement('span', { className: 'text-xs text-gray-400 font-mono' }, 'Sustainable Ecosystem')
      ]),
      React.createElement('h2', { className: 'text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100' },
        'Fair. Explainable. Scalable.'
      ),
      React.createElement('p', { className: 'text-xs sm:text-sm text-gray-500 max-w-3xl leading-relaxed' },
        'Inclusion is an architectural foundation, not an afterthought. SkillPrint AI creates systemic value across the entire talent lifecycle by replacing prestige proxies with verified proof of capability.'
      )
    ]),

    // 1. Value for Candidate, Employer, and Institution (3 Distinct Pillars)
    React.createElement('div', { key: 'value-pillars', className: 'space-y-4' }, [
      React.createElement('div', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider' },
        '1. Stakeholder Value Proposition'
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        impactData.pillars.map((pillar, idx) => React.createElement('div', {
          key: idx,
          className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col justify-between space-y-4 shadow-xs'
        }, [
          React.createElement('div', { key: 'top', className: 'space-y-3' }, [
            React.createElement('div', { className: 'flex items-center justify-between' }, [
              React.createElement('span', {
                className: 'w-10 h-10 rounded-xl text-white font-bold flex items-center justify-center text-sm shadow-xs',
                style: { backgroundColor: pillar.color }
              }, pillar.target.substring(0, 1)),
              React.createElement('span', { className: 'sap-badge sap-badge-blue text-[10px]' }, pillar.target)
            ]),
            React.createElement('h3', { className: 'text-lg font-bold text-gray-900 dark:text-gray-100' }, pillar.headline),
            React.createElement('ul', { className: 'space-y-2 text-xs text-gray-600 dark:text-gray-300' },
              pillar.points.map((pt, pIdx) => React.createElement('li', {
                key: pIdx,
                className: 'flex items-start gap-2 leading-relaxed'
              }, [
                React.createElement('span', { className: 'text-blue-500 font-bold shrink-0 mt-0.5' }, '✓'),
                React.createElement('span', {}, pt)
              ]))
            )
          ]),

          React.createElement('div', { key: 'ftr', className: 'pt-3 border-t border-gray-100 dark:border-gray-700 text-[11px] text-gray-400 font-medium' },
            `Strategic Core: ${pillar.target} Agency & Empowerment`
          )
        ]))
      )
    ]),

    // 2. Scalability Path: 4 Phases
    React.createElement('div', { key: 'scale-path-sec', className: 'space-y-4' }, [
      React.createElement('div', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider' },
        '2. Four-Stage Scalability Roadmap'
      ),

      React.createElement('div', {
        className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700'
      }, impactData.scalabilityPhases.map((phase, idx) => {
        const isSelected = activePhaseIndex === idx;

        return React.createElement('div', {
          key: idx,
          onClick: () => setActivePhaseIndex(idx),
          className: `sap-card p-5 rounded-xl cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
            isSelected
              ? 'border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 shadow-sm'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
          }`
        }, [
          React.createElement('div', { key: 'p-top', className: 'space-y-1.5' }, [
            React.createElement('div', { className: 'flex items-center justify-between text-xs' }, [
              React.createElement('span', { className: 'font-mono font-bold text-blue-600 dark:text-blue-400' }, phase.phase),
              React.createElement('span', { className: 'sap-badge sap-badge-teal text-[9px]' }, phase.reach)
            ]),
            React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, phase.title),
            React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' }, phase.description)
          ]),

          React.createElement('div', { key: 'p-btm', className: 'pt-2 border-t border-gray-100 dark:border-gray-700/60 text-[11px] font-mono text-gray-500' },
            `Milestone: ${phase.milestone}`
          )
        ]);
      }))
    ]),

    // Deep-dive detail card for selected scalability phase
    React.createElement('div', {
      key: 'selected-phase-detail',
      className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl space-y-4'
    }, [
      React.createElement('div', { className: 'flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3' }, [
        React.createElement('div', {}, [
          React.createElement('span', { className: 'sap-badge sap-badge-blue text-xs' }, impactData.scalabilityPhases[activePhaseIndex].phase),
          React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100 mt-1' },
            impactData.scalabilityPhases[activePhaseIndex].title
          )
        ]),
        React.createElement('span', { className: 'text-xs font-mono text-gray-400' },
          `Cohort Target: ${impactData.scalabilityPhases[activePhaseIndex].reach}`
        )
      ]),

      React.createElement('p', { className: 'text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed' },
        impactData.scalabilityPhases[activePhaseIndex].description
      ),

      React.createElement('div', { className: 'p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 text-xs flex items-center justify-between' }, [
        React.createElement('div', { className: 'font-semibold text-gray-800 dark:text-gray-200' },
          `Enterprise Readiness Target: ${impactData.scalabilityPhases[activePhaseIndex].milestone}`
        ),
        React.createElement('div', { className: 'text-teal-600 dark:text-teal-400 font-bold' },
          'Fully Integrable with SAP SuccessFactors'
        )
      ])
    ]),

    // 3. Closing Call to Action Banner
    React.createElement('div', {
      key: 'closing-banner',
      className: 'rounded-2xl p-8 text-center text-white space-y-3 shadow-lg',
      style: { background: 'linear-gradient(135deg, #0B1F33 0%, #0070F2 60%, #0F9D8A 100%)' }
    }, [
      React.createElement('h3', { className: 'text-2xl font-extrabold tracking-tight' },
        '“From invisible talent to visible potential.”'
      ),
      React.createElement('p', { className: 'text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed' },
        'SkillPrint AI proves capability where it matters most: at the point of initial opportunity. Explore the prototype as a candidate or recruiter.'
      ),
      React.createElement('div', { className: 'flex justify-center gap-3 pt-2' }, [
        React.createElement('button', {
          onClick: onNavigateCandidate,
          className: 'px-5 py-2.5 rounded-lg bg-white text-[#0B1F33] font-bold text-xs hover:bg-gray-100 shadow-md'
        }, "Candidate Dashboard (Ananya)"),
        React.createElement('button', {
          onClick: onNavigateRecruiter,
          className: 'px-5 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-xs border border-white/30'
        }, "Recruiter Hub")
      ])
    ])
  ]);
};
