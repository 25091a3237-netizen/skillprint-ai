// SkillPrint AI - Landing Page Component
// Includes Hero, Invisible Skills Problem Flow, Real Survey Placeholder Card, Two-User Needs, and How It Works
window.LandingPage = function({ onNavigateCandidate, onNavigateRecruiter, onOpenWeights }) {
  const survey = window.MOCK_DATA.surveyFinding;
  return React.createElement('div', { className: 'space-y-12 lg:space-y-16 pb-12 animate-fadeIn' }, [
    
    // 1. Hero Section
    React.createElement('section', {
      key: 'hero',
      className: 'relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-100 dark:border-blue-900/50',
      style: {
        background: 'radial-gradient(circle at top right, rgba(0, 112, 242, 0.08) 0%, rgba(15, 157, 138, 0.05) 50%, transparent 100%)'
      }
    }, [
      React.createElement('div', { key: 'hero-grid', className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' }, [
        // Left Copy
        React.createElement('div', { key: 'left-col', className: 'lg:col-span-7 space-y-5' }, [
          React.createElement('div', { key: 'kicker-row', className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/60 text-[#0070F2] dark:text-blue-300 text-xs font-bold tracking-wide uppercase' }, [
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-[#0070F2]' }),
            'SAP Hackfest 2026 • Inclusive Workforce Theme'
          ]),

          React.createElement('h1', {
            key: 'h1',
            className: 'text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1F33] dark:text-white tracking-tight leading-[1.12]'
          }, [
            'Ananya is skilled. ',
            React.createElement('span', {
              key: 'highlight',
              className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#0070F2] to-[#0F9D8A]'
            }, 'But is she visible?')
          ]),

          React.createElement('p', {
            key: 'tagline',
            className: 'text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 italic'
          }, '“Prove what you can do — not where you come from.”'),

          React.createElement('p', {
            key: 'lead',
            className: 'text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed'
          }, 'Ananya is a 21-year-old final-year engineering student in a tier-3 city. Her self-driven projects, micro-certifications, competitive hackathons, and code repositories prove rigorous capability in SQL, Python, and Machine Learning. Traditional automated ATS keyword filters and institutional proxies keep her invisible. SkillPrint AI creates an explainable, evidence-first skills identity that makes her capability undeniable.'),

          // Two Primary CTAs
          React.createElement('div', {
            key: 'cta-row',
            className: 'flex flex-wrap items-center gap-4 pt-2'
          }, [
            React.createElement('button', {
              key: 'cta-cand',
              onClick: onNavigateCandidate,
              className: 'sap-btn-primary px-6 py-3 text-sm flex items-center gap-2 group shadow-lg hover:shadow-xl'
            }, [
              React.createElement('span', {}, "I'm a Candidate (Ananya)"),
              React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', className: 'group-hover:translate-x-1 transition-transform' }, [
                React.createElement('polyline', { points: '9 18 15 12 9 6' })
              ])
            ]),

            React.createElement('button', {
              key: 'cta-rec',
              onClick: onNavigateRecruiter,
              className: 'sap-btn-secondary px-6 py-3 text-sm flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 hover:border-[#0F9D8A] hover:text-[#0F9D8A]'
            }, [
              React.createElement('span', {}, "I'm a Recruiter (Evaluate Proof)"),
              React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('path', { d: 'M15 3h6v6' }),
                React.createElement('path', { d: 'M10 14L21 3' }),
                React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' })
              ])
            ])
          ])
        ]),

        // Right Hero Visual Card: Mini Interactive Preview of Ananya
        React.createElement('div', { key: 'right-col', className: 'lg:col-span-5' }, [
          React.createElement('div', {
            className: 'sap-card p-6 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl space-y-4'
          }, [
            React.createElement('div', { className: 'flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3' }, [
              React.createElement('div', { className: 'flex items-center gap-3' }, [
                React.createElement('div', {
                  className: 'w-11 h-11 rounded-full bg-gradient-to-tr from-[#0070F2] to-[#0F9D8A] text-white flex items-center justify-center font-bold text-base'
                }, 'AN'),
                React.createElement('div', {}, [
                  React.createElement('div', { className: 'font-bold text-gray-900 dark:text-gray-100 text-sm' }, 'Ananya, 21'),
                  React.createElement('div', { className: 'text-xs text-gray-500' }, 'Target: Data Analyst Trainee')
                ])
              ]),
              React.createElement('span', { className: 'sap-badge sap-badge-green text-xs' }, '92 SES Score')
            ]),

            // Evidence Snippets
            React.createElement('div', { className: 'space-y-2' }, [
              React.createElement('div', { className: 'text-xs font-semibold text-gray-500 dark:text-gray-400' }, 'Verified Evidence Sources:'),
              React.createElement('div', { className: 'grid grid-cols-2 gap-2 text-xs' }, [
                React.createElement('div', { key: 'ev-1', className: 'p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700' }, [
                  React.createElement('span', { className: 'font-bold text-[#0070F2]' }, '4 SQL Artifacts'),
                  React.createElement('p', { className: 'text-[11px] text-gray-500 truncate' }, 'HackerRank 96th %ile')
                ]),
                React.createElement('div', { key: 'ev-2', className: 'p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700' }, [
                  React.createElement('span', { className: 'font-bold text-[#0F9D8A]' }, '5 Python Repos'),
                  React.createElement('p', { className: 'text-[11px] text-gray-500 truncate' }, 'Clean OOP & Pandas')
                ]),
                React.createElement('div', { key: 'ev-3', className: 'p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700' }, [
                  React.createElement('span', { className: 'font-bold text-[#6B4FA3]' }, 'State Hackathon'),
                  React.createElement('p', { className: 'text-[11px] text-gray-500 truncate' }, '2nd Prize Winner')
                ]),
                React.createElement('div', { key: 'ev-4', className: 'p-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700' }, [
                  React.createElement('span', { className: 'font-bold text-[#F58B1F]' }, 'Live Streamlit App'),
                  React.createElement('p', { className: 'text-[11px] text-gray-500 truncate' }, 'Demographic Explorer')
                ])
              ])
            ]),

            // Blind Screening Masked Tag
            React.createElement('div', {
              className: 'p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs text-teal-800 dark:text-teal-300 flex items-center justify-between'
            }, [
              React.createElement('span', { className: 'font-medium' }, 'Pedigree Proxies Masked'),
              React.createElement('span', { className: 'font-bold' }, 'Shield Active')
            ])
          ])
        ])
      ])
    ]),

    // 2. The Invisible Skills Problem Section
    React.createElement('section', { key: 'problem-sec', className: 'space-y-6' }, [
      React.createElement('div', { className: 'text-center max-w-3xl mx-auto space-y-2' }, [
        React.createElement('span', { className: 'sap-badge sap-badge-blue' }, 'The Root Failure'),
        React.createElement('h2', { className: 'text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100' },
          'The Invisible Skills Problem'
        ),
        React.createElement('p', { className: 'text-sm sm:text-base text-gray-600 dark:text-gray-300' },
          'When legacy hiring signals outweigh demonstrated capability, extraordinary talent gets screened out before anyone looks at what they can build.'
        )
      ]),

      // 4-Stage Broken Pipeline Flow
      React.createElement('div', {
        className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800'
      }, [
        { step: '01', title: 'Real Capability', desc: 'Working code, complex SQL queries, ML models, and competitive hackathon projects.', color: '#0070F2' },
        { step: '02', title: 'Résumé Signals', desc: 'Compressed into generic bullet points, buzzwords, and institutional credentials.', color: '#F58B1F', alert: 'Signal Degraded' },
        { step: '03', title: 'Screening', desc: 'Automated ATS filters filter by college pedigree, pincode, or keyword density.', color: '#D13B47', alert: 'Talent Excluded' },
        { step: '04', title: 'Opportunity', desc: 'Interviews granted only to candidates who match legacy prestige signals.', color: '#0F9D8A' }
      ].map((item, idx) => React.createElement('div', {
        key: idx,
        className: 'p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xs relative flex flex-col justify-between'
      }, [
        React.createElement('div', { key: 'top' }, [
          React.createElement('div', { className: 'flex items-center justify-between mb-2' }, [
            React.createElement('span', { className: 'text-xs font-mono font-bold', style: { color: item.color } }, `STAGE ${item.step}`),
            item.alert && React.createElement('span', { className: 'sap-badge sap-badge-red text-[10px]' }, item.alert)
          ]),
          React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100 mb-1' }, item.title),
          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' }, item.desc)
        ]),
        idx < 3 && React.createElement('div', {
          key: 'arrow',
          className: 'hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-400 text-xs shadow-xs'
        }, '→')
      ]))),

      // The 3 Hiding Factors + Survey Placeholder Card
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' }, [
        // Factor 1
        React.createElement('div', { key: 'f1', className: 'sap-card p-5 space-y-2' }, [
          React.createElement('div', { className: 'w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-[#F58B1F] flex items-center justify-center font-bold text-sm' }, '1'),
          React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, 'Keyword-Heavy Résumés'),
          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' },
            'Traditional resumes reward candidates skilled at keyword packing rather than those with actual technical proficiency.'
          )
        ]),

        // Factor 2
        React.createElement('div', { key: 'f2', className: 'sap-card p-5 space-y-2' }, [
          React.createElement('div', { className: 'w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/60 text-[#D13B47] flex items-center justify-center font-bold text-sm' }, '2'),
          React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, 'Credential & Pedigree Proxies'),
          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' },
            'Recruiters use tier-1 college names and brand-name past internships as lazy proxies for competence, discarding tier-3 strivers.'
          )
        ]),

        // Factor 3
        React.createElement('div', { key: 'f3', className: 'sap-card p-5 space-y-2' }, [
          React.createElement('div', { className: 'w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-[#6B4FA3] flex items-center justify-center font-bold text-sm' }, '3'),
          React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, 'Limited Opportunity History'),
          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' },
            'Without alumni networks or metro placement access, talented candidates are denied their very first opportunity to demonstrate ability.'
          )
        ]),

        // MANDATORY REQUIREMENT: Visible placeholder card (data-driven from MOCK_DATA.surveyFinding)
        React.createElement('div', {
          key: 'survey-placeholder',
          className: 'sap-card p-5 survey-placeholder-card space-y-2.5 flex flex-col justify-between'
        }, [
          React.createElement('div', { key: 'ph-top', className: 'space-y-2' }, [
            React.createElement('div', { className: 'flex items-center gap-2 flex-wrap' }, [
              React.createElement('span', {
                className: 'sap-badge text-[10px] ' + (survey.isPlaceholder ? 'sap-badge-orange' : 'sap-badge-green')
              }, survey.isPlaceholder ? 'Placeholder (Edit mockData.js surveyFinding)' : 'Real Research Finding'),
              React.createElement('span', { className: 'text-[10px] text-orange-600 dark:text-orange-400 font-mono font-bold' }, 'Slide 2 Slot')
            ]),
            React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100 leading-snug' },
              survey.isPlaceholder ? "Insert the team's real survey/interview finding here." : survey.summary
            ),
            React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 italic leading-relaxed' },
              survey.context
            ),
            React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-600 leading-snug' },
              survey.methodology
            )
          ]),
          React.createElement('div', {
            key: 'ph-bot',
            className: 'text-[10px] font-mono font-semibold text-orange-600 dark:text-orange-400 pt-2 border-t border-orange-200 dark:border-orange-800 truncate'
          }, survey.source)
        ])
      ])
    ]),

    // 3. Two-User Needs Section (Candidate vs Recruiter)
    React.createElement('section', { key: 'needs-sec', className: 'space-y-6' }, [
      React.createElement('div', { className: 'text-center max-w-2xl mx-auto space-y-2' }, [
        React.createElement('span', { className: 'sap-badge sap-badge-teal' }, 'Inclusive Alignment'),
        React.createElement('h2', { className: 'text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100' },
          'Two Users, One Broken Signal'
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-gray-600 dark:text-gray-400' },
          'SkillPrint AI solves the asymmetric information gap between job seekers and hiring teams.'
        )
      ]),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' }, [
        // Candidate Needs Card
        React.createElement('div', {
          key: 'cand-card',
          className: 'sap-card p-6 border-l-4 border-l-[#0070F2] bg-white dark:bg-gray-800/80 space-y-4'
        }, [
          React.createElement('div', { className: 'flex items-center gap-3' }, [
            React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-[#0070F2] flex items-center justify-center font-bold' }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
                React.createElement('circle', { cx: '12', cy: '7', r: '4' })
              ])
            ]),
            React.createElement('div', {}, [
              React.createElement('h3', { className: 'font-bold text-base text-gray-900 dark:text-gray-100' }, 'What Ananya (Candidate) Needs'),
              React.createElement('p', { className: 'text-xs text-gray-500' }, 'Tier-3 Engineering Student Seeking Visibility')
            ])
          ]),

          React.createElement('ul', { className: 'space-y-2 text-xs text-gray-700 dark:text-gray-300' }, [
            React.createElement('li', { key: 'c1', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-blue-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Be discovered despite weaker conventional signals (no elite college brand).')
            ]),
            React.createElement('li', { key: 'c2', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-blue-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Prove technical skills through verifiable evidence rather than unsubstantiated claims.')
            ]),
            React.createElement('li', { key: 'c3', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-blue-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Understand transparently WHY she matches — or why she does not — for target roles.')
            ]),
            React.createElement('li', { key: 'c4', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-blue-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'See exact, granular skill gaps and actionable next learning steps.')
            ]),
            React.createElement('li', { key: 'c5', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-blue-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Maintain complete cryptographic consent over which proof items recruiters can evaluate.')
            ])
          ])
        ]),

        // Recruiter Needs Card
        React.createElement('div', {
          key: 'rec-card',
          className: 'sap-card p-6 border-l-4 border-l-[#0F9D8A] bg-white dark:bg-gray-800/80 space-y-4'
        }, [
          React.createElement('div', { className: 'flex items-center gap-3' }, [
            React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 text-[#0F9D8A] flex items-center justify-center font-bold' }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('rect', { width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
                React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
              ])
            ]),
            React.createElement('div', {}, [
              React.createElement('h3', { className: 'font-bold text-base text-gray-900 dark:text-gray-100' }, 'What Recruiters & HR Need'),
              React.createElement('p', { className: 'text-xs text-gray-500' }, 'Enterprise Talent Acquisition & Diversity Leaders')
            ])
          ]),

          React.createElement('ul', { className: 'space-y-2 text-xs text-gray-700 dark:text-gray-300' }, [
            React.createElement('li', { key: 'r1', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-teal-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Discover overlooked high-aptitude talent outside standard tier-1 campus lists.')
            ]),
            React.createElement('li', { key: 'r2', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-teal-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Verify claimed capabilities with proof before scheduling costly technical interviews.')
            ]),
            React.createElement('li', { key: 'r3', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-teal-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Eliminate biased pedigree filtering through automated Blind Screening safeguards.')
            ]),
            React.createElement('li', { key: 'r4', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-teal-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Understand clear AI reasoning behind every ranking without black-box confusion.')
            ]),
            React.createElement('li', { key: 'r5', className: 'flex items-start gap-2' }, [
              React.createElement('span', { className: 'text-teal-500 font-bold' }, '✓'),
              React.createElement('span', {}, 'Retain final human hiring agency: AI recommends, humans decide.')
            ])
          ])
        ])
      ])
    ]),

    // 4. How It Works Section: Skill → Evidence → Proficiency → Confidence → Role Relevance
    React.createElement('section', { key: 'how-it-works', className: 'space-y-6' }, [
      React.createElement('div', { className: 'text-center max-w-2xl mx-auto space-y-2' }, [
        React.createElement('span', { className: 'sap-badge sap-badge-purple' }, 'Deterministic Chain'),
        React.createElement('h2', { className: 'text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100' },
          'How SkillPrint Works'
        ),
        React.createElement('p', { className: 'text-xs sm:text-sm text-gray-600 dark:text-gray-400' },
          'A transparent 5-stage progression from raw capability to verified enterprise opportunity.'
        )
      ]),

      React.createElement('div', {
        className: 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3'
      }, [
        { num: '1', title: 'Skill', desc: 'Identified capability (e.g. SQL, Python, ML)', color: '#0070F2' },
        { num: '2', title: 'Evidence', desc: 'Multi-source verified artifacts (Code, Certs, Tests, Hackathons)', color: '#0F9D8A' },
        { num: '3', title: 'Proficiency', desc: 'Demonstrated mastery tier (Beginner, Intermediate, Advanced)', color: '#6B4FA3' },
        { num: '4', title: 'Confidence', desc: 'Mathematical reliability index based on proof density & recency', color: '#F58B1F' },
        { num: '5', title: 'Role Relevance', desc: 'Direct semantic match with enterprise job competency requisites', color: '#2BA05A' }
      ].map((st, i) => React.createElement('div', {
        key: i,
        className: 'sap-card p-4 text-center space-y-2 relative'
      }, [
        React.createElement('div', {
          className: 'w-10 h-10 mx-auto rounded-full text-white font-bold flex items-center justify-center text-sm shadow-sm',
          style: { backgroundColor: st.color }
        }, st.num),
        React.createElement('h4', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100' }, st.title),
        React.createElement('p', { className: 'text-[11px] text-gray-600 dark:text-gray-400' }, st.desc)
      ]))),

      // Callout linking to the SES Calculation Modal
      React.createElement('div', {
        className: 'p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs'
      }, [
        React.createElement('div', { className: 'flex items-center gap-3' }, [
          React.createElement('div', { className: 'w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-[#0070F2] flex items-center justify-center font-bold shrink-0' }, '∑'),
          React.createElement('div', {}, [
            React.createElement('div', { className: 'font-bold text-gray-900 dark:text-gray-100 text-sm' }, 'Dynamic Skill Evidence Score (SES) Model'),
            React.createElement('div', { className: 'text-gray-600 dark:text-gray-400 mt-0.5' },
              'Weights: Evidence Diversity (25%) + Demonstrated Performance (35%) + Recency (20%) + Role Relevance (20%).'
            )
          ])
        ]),
        React.createElement('button', {
          onClick: onOpenWeights,
          className: 'sap-btn-secondary text-xs shrink-0 font-semibold'
        }, 'Adjust SES Weights Live')
      ])
    ]),

    // 5. Closing Banner
    React.createElement('section', {
      key: 'closing-banner',
      className: 'rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl',
      style: {
        background: 'linear-gradient(135deg, #0B1F33 0%, #0070F2 60%, #0F9D8A 100%)'
      }
    }, [
      React.createElement('div', { className: 'max-w-3xl mx-auto space-y-4' }, [
        React.createElement('span', { className: 'inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs' },
          'Inclusive Workforce Mandate'
        ),
        React.createElement('h2', { className: 'text-2xl sm:text-4xl font-extrabold tracking-tight' },
          '“From invisible talent to visible potential.”'
        ),
        React.createElement('p', { className: 'text-sm sm:text-base text-blue-100 leading-relaxed' },
          "Let's not screen people by opportunity history or postal code. Let's discover them by verified proof of what they can do."
        ),
        React.createElement('div', { className: 'flex flex-wrap items-center justify-center gap-3 pt-2' }, [
          React.createElement('button', {
            onClick: onNavigateCandidate,
            className: 'px-5 py-2.5 rounded-lg bg-white text-[#0B1F33] font-bold text-xs hover:bg-gray-100 transition-colors shadow-md'
          }, "Explore Ananya's SkillPrint"),
          React.createElement('button', {
            onClick: onNavigateRecruiter,
            className: 'px-5 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-xs border border-white/30 transition-colors'
          }, 'Recruiter Blind Screening')
        ])
      ])
    ])
  ]);
};
