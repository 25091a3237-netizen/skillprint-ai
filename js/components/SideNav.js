// SAP Fiori Horizon Side Navigation Bar
// Supports Role-Based State (Candidate vs Recruiter), Authentication Badges, and Account Switching

window.SideNav = function({
  currentView,
  setCurrentView,
  isCollapsed,
  setIsCollapsed,
  currentUser,
  onOpenCandidateLogin,
  onOpenRecruiterLogin,
  onLogout
}) {
  const isCandidate = currentUser && currentUser.role === 'candidate';
  const isRecruiter = currentUser && currentUser.role === 'recruiter';

  const navItems = [
    {
      id: 'landing',
      label: 'SkillPrint AI Overview',
      subtitle: 'Opening Overview & Core Platform',
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('path', { key: 'h1', d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
          React.createElement('polyline', { key: 'h2', points: '9 22 9 12 15 12 15 22' })
        ]);
      }
    },
    {
      id: 'candidate',
      label: 'Candidate Portal',
      subtitle: isCandidate ? `${currentUser.name} • Verified SES` : 'Evidence & Proof Identity',
      badge: isCandidate ? 'Active Profile' : (isRecruiter ? 'Review Mode' : 'Candidate'),
      badgeColor: isCandidate ? 'sap-badge-blue' : (isRecruiter ? 'sap-badge-teal' : 'sap-badge-blue'),
      action: () => {
        if (!currentUser) {
          onOpenCandidateLogin();
        } else {
          setCurrentView('candidate');
        }
      },
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('path', { key: 'u1', d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
          React.createElement('circle', { key: 'u2', cx: '12', cy: '7', r: '4' })
        ]);
      }
    },
    {
      id: 'recruiter',
      label: 'Recruiter Hub',
      subtitle: isRecruiter ? `${currentUser.name} • Active` : 'Blind Screening & Evaluation',
      badge: isRecruiter ? 'Enterprise Active' : 'Recruiter',
      badgeColor: isRecruiter ? 'sap-badge-teal' : 'sap-badge-teal',
      action: () => {
        if (!currentUser || currentUser.role !== 'recruiter') {
          onOpenRecruiterLogin();
        } else {
          setCurrentView('recruiter');
        }
      },
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('rect', { key: 'r1', width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
          React.createElement('path', { key: 'r2', d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
        ]);
      }
    },
    {
      id: 'architecture',
      label: 'SAP Architecture & Backend',
      subtitle: 'BTP, HANA, Agents API & HCM',
      badge: 'Live Engine',
      badgeColor: 'sap-badge-orange',
      action: () => setCurrentView('architecture'),
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('polygon', { key: 'p1', points: '12 2 2 7 12 12 22 7 12 2' }),
          React.createElement('polyline', { key: 'p2', points: '2 17 12 22 22 17' }),
          React.createElement('polyline', { key: 'p3', points: '2 12 12 17 22 12' })
        ]);
      }
    },
    {
      id: 'impact',
      label: 'Impact & Scalability',
      subtitle: 'Enterprise Value & Roadmap',
      action: () => setCurrentView('impact'),
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('path', { key: 't1', d: 'M22 12h-4l-3 9L9 3l-3 9H2' })
        ]);
      }
    }
  ];

  return React.createElement('aside', {
    className: `transition-all duration-300 ease-in-out border-r border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md flex flex-col justify-between ${
      isCollapsed ? 'w-16' : 'w-64 lg:w-72'
    }`
  }, [
    // Navigation List
    React.createElement('div', { key: 'nav-content', className: 'p-3' }, [
      // Item Buttons
      React.createElement('nav', { key: 'nav-list', className: 'space-y-1 mt-1', 'aria-label': 'Sidebar Navigation' },
        navItems.map(item => {
          const isActive = currentView === item.id;
          const strokeColor = isActive ? '#0070F2' : (isCollapsed ? '#64748B' : '#52667A');

          return React.createElement('button', {
            key: item.id,
            onClick: item.action || (() => setCurrentView(item.id)),
            className: `w-full text-left rounded-xl transition-all flex items-center gap-3 ${
              isCollapsed ? 'p-3 justify-center' : 'px-3.5 py-3'
            } ${
              isActive
                ? 'nav-item-active bg-blue-50 dark:bg-blue-950/40 text-[#0070F2] dark:text-blue-400 shadow-xs'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60'
            }`,
            title: isCollapsed ? item.label : undefined
          }, [
            // Icon
            React.createElement('div', {
              key: 'icon-wrap',
              className: `shrink-0 p-1.5 rounded-lg ${isActive ? 'bg-blue-100/80 dark:bg-blue-900/60' : 'bg-gray-100 dark:bg-gray-800'}`
            }, item.icon(strokeColor)),

            // Label and Subtitle
            !isCollapsed && React.createElement('div', { key: 'label-wrap', className: 'flex-1 min-w-0' }, [
              React.createElement('div', { key: 'row-1', className: 'flex items-center justify-between' }, [
                React.createElement('span', { key: 'title', className: `text-sm font-semibold truncate ${isActive ? 'text-[#0070F2] dark:text-blue-300' : ''}` }, item.label),
                item.badge && React.createElement('span', { key: 'badge', className: `sap-badge ${item.badgeColor} text-[10px] py-0.5 px-1.5` }, item.badge)
              ]),
              React.createElement('p', { key: 'sub', className: 'text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5' }, item.subtitle)
            ])
          ]);
        })
      )
    ]),

    // Bottom Section: Active User Card or Quick Logins
    React.createElement('div', { key: 'bottom-box', className: 'p-3 border-t border-gray-200 dark:border-gray-800' }, [
      !isCollapsed ? (
        currentUser ? React.createElement('div', {
          key: 'user-status-card',
          className: 'p-3 rounded-2xl bg-gradient-to-br from-blue-50/70 to-teal-50/70 dark:from-gray-800/80 dark:to-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs space-y-2.5'
        }, [
          React.createElement('div', { className: 'flex items-center gap-2.5' }, [
            React.createElement('div', {
              className: 'w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-sm shrink-0',
              style: { backgroundColor: currentUser.avatarColor || (isRecruiter ? '#0F9D8A' : '#0070F2') }
            }, currentUser.avatarInitials || (isRecruiter ? 'HR' : 'CD')),
            React.createElement('div', { className: 'min-w-0 flex-1' }, [
              React.createElement('div', { className: 'font-bold text-gray-900 dark:text-white truncate text-xs' }, currentUser.name),
              React.createElement('div', { className: 'text-[10px] text-gray-500 dark:text-gray-400 truncate' },
                isRecruiter ? 'Enterprise Evaluator' : (currentUser.email || currentUser.username)
              )
            ]),
            React.createElement('span', {
              className: `sap-badge text-[9px] py-0.5 px-1.5 ${isRecruiter ? 'sap-badge-teal' : 'sap-badge-blue'}`
            }, isRecruiter ? 'HR' : 'Cand')
          ]),

          React.createElement('div', { className: 'flex items-center gap-2 pt-1 border-t border-gray-200 dark:border-gray-700/60' }, [
            React.createElement('button', {
              type: 'button',
              onClick: isRecruiter ? onOpenCandidateLogin : onOpenRecruiterLogin,
              className: 'flex-1 py-1 px-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-[10px] font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors truncate'
            }, isRecruiter ? 'Switch to Candidate' : 'Switch to Recruiter'),
            React.createElement('button', {
              type: 'button',
              onClick: onLogout,
              className: 'py-1 px-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-[10px] font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 transition-colors'
            }, 'Sign Out')
          ])
        ]) : React.createElement('div', {
          key: 'guest-login-buttons',
          className: 'space-y-2'
        }, [
          React.createElement('button', {
            onClick: onOpenCandidateLogin,
            className: 'w-full py-2 px-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#0070F2] dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 text-xs font-bold hover:bg-blue-100 transition-all flex items-center justify-between group shadow-xs'
          }, [
            React.createElement('span', { className: 'flex items-center gap-1.5' }, [
              React.createElement('span', {}, '🎓'),
              React.createElement('span', {}, 'Candidate Login')
            ]),
            React.createElement('span', { className: 'text-[10px] font-normal text-blue-600 dark:text-blue-400 opacity-90' }, 'Email / User')
          ]),
          React.createElement('button', {
            onClick: onOpenRecruiterLogin,
            className: 'w-full py-2 px-3 rounded-xl bg-[#0F9D8A] text-white text-xs font-bold hover:bg-[#0c8272] transition-all flex items-center justify-between shadow-xs'
          }, [
            React.createElement('span', { className: 'flex items-center gap-1.5' }, [
              React.createElement('span', {}, '💼'),
              React.createElement('span', {}, 'Recruiter Portal')
            ]),
            React.createElement('span', { className: 'text-[10px] font-normal text-teal-100 opacity-90' }, 'Corporate Email')
          ])
        ])
      ) : React.createElement('div', {
        key: 'collapsed-indicator',
        className: 'flex justify-center text-xs font-bold text-blue-500'
      }, isRecruiter ? 'HR' : 'SAP')
    ])
  ]);
};
