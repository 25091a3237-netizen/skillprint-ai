// SkillPrint AI - Landing Page Component
// Includes Hero, Invisible Skills Problem Flow, Real Survey Placeholder Card, Two-User Needs, and Separate Candidate / Recruiter Login Portals
window.LandingPage = function({
  onNavigateCandidate,
  onNavigateRecruiter,
  onOpenWeights,
  currentUser,
  onOpenCandidateLogin,
  onOpenRecruiterLogin,
  onCandidateLoginSuccess,
  onRecruiterLoginSuccess
}) {
  const survey = window.MOCK_DATA.surveyFinding;
  const isCandidate = currentUser && currentUser.role === 'candidate';
  const isRecruiter = currentUser && currentUser.role === 'recruiter';

  return React.createElement('div', { className: 'space-y-12 lg:space-y-16 pb-12 animate-fadeIn' }, [
    
    // 1. SkillPrint AI Opening Overview & Interactive Role Login Portals
    React.createElement('section', {
      key: 'opening-overview',
      className: 'relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14 border border-blue-100 dark:border-blue-900/50 shadow-xl',
      style: {
        background: 'radial-gradient(circle at top right, rgba(0, 112, 242, 0.09) 0%, rgba(15, 157, 138, 0.06) 45%, transparent 100%)'
      }
    }, [
      React.createElement('div', { key: 'overview-container', className: 'space-y-8' }, [
        // Top Header Row
        React.createElement('div', { key: 'top-header', className: 'space-y-4 max-w-4xl' }, [
          React.createElement('div', { key: 'kicker-row', className: 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/70 text-[#0070F2] dark:text-blue-300 text-xs font-bold tracking-wide uppercase shadow-2xs' }, [
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-[#0070F2] animate-pulse' }),
            'SAP Hackfest 2026 • Inclusive Workforce Theme • Platform Opening Overview'
          ]),

          React.createElement('h1', {
            key: 'main-heading',
            className: 'text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B1F33] dark:text-white tracking-tight leading-[1.12]'
          }, [
            'SkillPrint AI ',
            React.createElement('span', {
              key: 'highlight',
              className: 'bg-clip-text text-transparent bg-gradient-to-r from-[#0070F2] via-[#0F9D8A] to-[#6B4FA3]'
            }, '— Opening Overview')
          ]),

          React.createElement('p', {
            key: 'tagline',
            className: 'text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 italic'
          }, '“Prove what you can do — not where you come from.”'),

          React.createElement('p', {
            key: 'lead',
            className: 'text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl'
          }, 'Traditional campus recruitment relies on keyword-stuffed résumés and tier-1 institutional proxies, excluding millions of high-capability candidates in tier-2 and tier-3 colleges. SkillPrint AI replaces pedigree proxies with an explainable, tamper-evident skills identity built from verified multi-source artifacts: production code, competitive hackathons, and proctored assessments. Enterprise hiring teams discover hidden talent through bias-audited blind screening and transparent Skill Evidence Scores (SES).')
        ]),

        // Interactive Role Portals & Logins Section (Candidate vs Recruiter)
        React.createElement('div', {
          key: 'login-gateways',
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6 pt-2'
        }, [
          // CARD 1: CANDIDATE PORTAL LOGIN (EMAIL OR USERNAME)
          React.createElement('div', {
            key: 'cand-login-card',
            className: 'sap-card p-6 rounded-2xl bg-white dark:bg-gray-800/90 border-2 border-blue-200 dark:border-blue-900/60 shadow-lg flex flex-col justify-between space-y-4 hover:border-[#0070F2] transition-all'
          }, [
            React.createElement('div', { className: 'space-y-3' }, [
              React.createElement('div', { className: 'flex items-center justify-between' }, [
                React.createElement('div', { className: 'flex items-center gap-2.5' }, [
                  React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-[#0070F2] flex items-center justify-center font-bold text-xl shadow-xs' }, '🎓'),
                  React.createElement('div', {}, [
                    React.createElement('h3', { className: 'font-bold text-base text-gray-900 dark:text-white' }, 'Candidate Portal'),
                    React.createElement('span', { className: 'text-[11px] font-semibold text-blue-600 dark:text-blue-400' }, 'Sign in through Email or Username')
                  ])
                ]),
                React.createElement('span', { className: 'sap-badge sap-badge-blue text-[10px]' }, 'Job Seekers & Students')
              ]),

              React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-300 leading-relaxed' },
                'Authenticate to view and curate your verified skills identity, connect proof artifacts (GitHub, HackerRank, Hackathons), inspect your dynamic SES score, and configure recruiter disclosure consent.'
              ),

              // Supported formats hint
              React.createElement('div', { className: 'p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-[11px] text-blue-900 dark:text-blue-200 space-y-1' }, [
                React.createElement('div', { className: 'font-semibold' }, 'Supported Candidate Logins (Multiple Profiles):'),
                React.createElement('div', { className: 'text-[10px] text-blue-700 dark:text-blue-300 font-mono flex flex-wrap gap-x-3 gap-y-1' }, [
                  React.createElement('span', {}, '• Email: person1@skillprint.ai, ananya.candidate@skillprint.ai'),
                  React.createElement('span', {}, '• Username: person1, vikram-ml, priya-cap (or any name)')
                ])
              ])
            ]),

            React.createElement('div', { className: 'space-y-3 pt-2 border-t border-gray-100 dark:border-gray-700/60' }, [
              // Main Action Button
              React.createElement('button', {
                type: 'button',
                onClick: () => {
                  if (isCandidate) onNavigateCandidate();
                  else if (onOpenCandidateLogin) onOpenCandidateLogin();
                  else onNavigateCandidate();
                },
                className: 'w-full sap-btn-primary py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 group shadow-md hover:shadow-lg'
              }, [
                React.createElement('span', {}, '🎓'),
                React.createElement('span', {}, isCandidate ? `Open Dashboard (${currentUser.name})` : 'Candidate Sign In (Email or Username)'),
                React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', className: 'group-hover:translate-x-1 transition-transform' }, [
                  React.createElement('polyline', { points: '9 18 15 12 9 6' })
                ])
              ]),

              // Quick 1-Click Demo Candidates (Multi-Profile)
              React.createElement('div', { className: 'flex items-center gap-1.5 flex-wrap text-[10px]' }, [
                React.createElement('span', { className: 'text-gray-400 font-medium' }, 'Quick Demo:'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const c = window.MOCK_DATA.authUsers.candidates.find(x => x.username === 'person1') || {
                      id: 'cand-person1',
                      role: 'candidate',
                      name: 'person1',
                      email: 'person1@skillprint.ai',
                      username: 'person1'
                    };
                    if (onCandidateLoginSuccess) onCandidateLoginSuccess(c);
                    else if (onOpenCandidateLogin) onOpenCandidateLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 hover:bg-blue-200 text-blue-800 dark:text-blue-200 font-bold'
                }, 'person1 (New Profile)'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const c = window.MOCK_DATA.authUsers.candidates[0];
                    if (onCandidateLoginSuccess) onCandidateLoginSuccess(c);
                    else if (onOpenCandidateLogin) onOpenCandidateLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'Ananya'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const c = window.MOCK_DATA.authUsers.candidates[1];
                    if (onCandidateLoginSuccess) onCandidateLoginSuccess(c);
                    else if (onOpenCandidateLogin) onOpenCandidateLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'Vikram Sharma'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const c = window.MOCK_DATA.authUsers.candidates[2];
                    if (onCandidateLoginSuccess) onCandidateLoginSuccess(c);
                    else if (onOpenCandidateLogin) onOpenCandidateLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'Priya Patel')
              ])
            ])
          ]),

          // CARD 2: RECRUITER ENTERPRISE PORTAL LOGIN (CORPORATE EMAIL)
          React.createElement('div', {
            key: 'rec-login-card',
            className: 'sap-card p-6 rounded-2xl bg-white dark:bg-gray-800/90 border-2 border-teal-200 dark:border-teal-900/60 shadow-lg flex flex-col justify-between space-y-4 hover:border-[#0F9D8A] transition-all'
          }, [
            React.createElement('div', { className: 'space-y-3' }, [
              React.createElement('div', { className: 'flex items-center justify-between' }, [
                React.createElement('div', { className: 'flex items-center gap-2.5' }, [
                  React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-[#0F9D8A] flex items-center justify-center font-bold text-xl shadow-xs' }, '💼'),
                  React.createElement('div', {}, [
                    React.createElement('h3', { className: 'font-bold text-base text-gray-900 dark:text-white' }, 'Recruiter Enterprise Hub'),
                    React.createElement('span', { className: 'text-[11px] font-semibold text-teal-600 dark:text-teal-400' }, 'Sign in through Corporate Email')
                  ])
                ]),
                React.createElement('span', { className: 'sap-badge sap-badge-teal text-[10px]' }, 'Talent Acquisition & HR')
              ]),

              React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-300 leading-relaxed' },
                'Access protected enterprise blind screening where candidate demographic proxies are shielded. Compare candidate rankings by verified SES scores, inspect explainability drawers, and record decisions.'
              ),

              // Supported formats hint
              React.createElement('div', { className: 'p-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/40 text-[11px] text-teal-900 dark:text-teal-200 space-y-1' }, [
                React.createElement('div', { className: 'font-semibold' }, 'Required Corporate Email Authentication:'),
                React.createElement('div', { className: 'text-[10px] text-teal-700 dark:text-teal-300 font-mono flex flex-wrap gap-x-3 gap-y-1' }, [
                  React.createElement('span', {}, '• sarah.jenkins@sap.com (Lead HR)'),
                  React.createElement('span', {}, '• rajiv.menon@sap.com or corporate SSO')
                ])
              ])
            ]),

            React.createElement('div', { className: 'space-y-3 pt-2 border-t border-gray-100 dark:border-gray-700/60' }, [
              // Main Action Button
              React.createElement('button', {
                type: 'button',
                onClick: () => {
                  if (isRecruiter) onNavigateRecruiter();
                  else if (onOpenRecruiterLogin) onOpenRecruiterLogin();
                  else onNavigateRecruiter();
                },
                className: 'w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#0F9D8A] text-white hover:bg-[#0c8272] transition-all flex items-center justify-center gap-2 group shadow-md hover:shadow-lg'
              }, [
                React.createElement('span', {}, '💼'),
                React.createElement('span', {}, isRecruiter ? `Open Recruiter Hub (${currentUser.name.split(' ')[0]})` : 'Recruiter Portal (Corporate Email)'),
                React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5', className: 'group-hover:translate-x-1 transition-transform' }, [
                  React.createElement('polyline', { points: '9 18 15 12 9 6' })
                ])
              ]),

              // Quick 1-Click Demo Recruiters
              React.createElement('div', { className: 'flex items-center gap-1.5 flex-wrap text-[10px]' }, [
                React.createElement('span', { className: 'text-gray-400 font-medium' }, 'Quick Demo:'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const r = window.MOCK_DATA.authUsers.recruiters[0];
                    if (onRecruiterLoginSuccess) onRecruiterLoginSuccess(r);
                    else if (onOpenRecruiterLogin) onOpenRecruiterLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'Sarah Jenkins (Lead HR)'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const r = window.MOCK_DATA.authUsers.recruiters[1];
                    if (onRecruiterLoginSuccess) onRecruiterLoginSuccess(r);
                    else if (onOpenRecruiterLogin) onOpenRecruiterLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'Rajiv Menon (Director)'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => {
                    const r = window.MOCK_DATA.authUsers.recruiters[0];
                    if (onRecruiterLoginSuccess) onRecruiterLoginSuccess(r);
                    else if (onOpenRecruiterLogin) onOpenRecruiterLogin();
                  },
                  className: 'px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-gray-700 dark:text-gray-200 font-medium'
                }, 'SAP IAS SSO')
              ])
            ])
          ])
        ]),

        // Overview Highlights Summary Bar
        React.createElement('div', {
          key: 'overview-pills',
          className: 'grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs'
        }, [
          React.createElement('div', { key: 'p1', className: 'space-y-0.5' }, [
            React.createElement('div', { className: 'font-bold text-[#0070F2] text-sm' }, 'Evidence Ingestion'),
            React.createElement('div', { className: 'text-[11px] text-gray-500' }, 'Multi-source proof artifacts')
          ]),
          React.createElement('div', { key: 'p2', className: 'space-y-0.5' }, [
            React.createElement('div', { className: 'font-bold text-[#0F9D8A] text-sm' }, 'Blind Screening'),
            React.createElement('div', { className: 'text-[11px] text-gray-500' }, 'Pedigree proxies masked')
          ]),
          React.createElement('div', { key: 'p3', className: 'space-y-0.5' }, [
            React.createElement('div', { className: 'font-bold text-[#6B4FA3] text-sm' }, 'Explainable SES'),
            React.createElement('div', { className: 'text-[11px] text-gray-500' }, 'Deterministic 4-factor math')
          ]),
          React.createElement('div', { key: 'p4', className: 'space-y-0.5' }, [
            React.createElement('div', { className: 'font-bold text-[#F58B1F] text-sm' }, 'SAP Ecosystem'),
            React.createElement('div', { className: 'text-[11px] text-gray-500' }, 'BTP, HANA, HCM Integration')
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
              React.createElement('h3', { className: 'font-bold text-base text-gray-900 dark:text-gray-100' }, 'What Candidates Need'),
              React.createElement('p', { className: 'text-xs text-gray-500' }, 'Students & Talent Seeking Visibility via Real Capability')
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
          ]),

          // Candidate Action Buttons
          React.createElement('div', { className: 'pt-2 flex flex-wrap items-center gap-2 border-t border-gray-100 dark:border-gray-700/60' }, [
            React.createElement('button', {
              type: 'button',
              onClick: () => {
                if (isCandidate) onNavigateCandidate();
                else if (onOpenCandidateLogin) onOpenCandidateLogin();
                else onNavigateCandidate();
              },
              className: 'flex-1 py-2 px-3 rounded-xl font-bold text-xs bg-[#0070F2] text-white hover:bg-blue-600 shadow-sm transition-all flex items-center justify-center gap-1.5'
            }, [
              React.createElement('span', {}, '🎓'),
              React.createElement('span', {}, isCandidate ? 'Go to Candidate Dashboard' : 'Candidate Sign In (Email / Username)')
            ])
          ])
        ]),

        // Recruiter Needs Card
        React.createElement('div', {
          key: 'rec-card',
          className: 'sap-card p-6 border-l-4 border-l-[#0F9D8A] bg-white dark:bg-gray-800/80 space-y-4 flex flex-col justify-between'
        }, [
          React.createElement('div', { className: 'space-y-4' }, [
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
          ]),

          // Recruiter Action Buttons
          React.createElement('div', { className: 'pt-2 flex flex-wrap items-center gap-2 border-t border-gray-100 dark:border-gray-700/60' }, [
            React.createElement('button', {
              type: 'button',
              onClick: () => {
                if (isRecruiter) onNavigateRecruiter();
                else if (onOpenRecruiterLogin) onOpenRecruiterLogin();
                else onNavigateRecruiter();
              },
              className: 'flex-1 py-2 px-3 rounded-xl font-bold text-xs bg-[#0F9D8A] text-white hover:bg-[#0c8272] shadow-sm transition-all flex items-center justify-center gap-1.5'
            }, [
              React.createElement('span', {}, '💼'),
              React.createElement('span', {}, isRecruiter ? 'Go to Recruiter Hub' : 'Recruiter Portal (Corporate Email)')
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
          }, "Explore Candidate Portal"),
          React.createElement('button', {
            onClick: onNavigateRecruiter,
            className: 'px-5 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-xs border border-white/30 transition-colors'
          }, 'Recruiter Blind Screening')
        ])
      ])
    ])
  ]);
};
