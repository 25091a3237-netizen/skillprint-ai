// SAP Fiori Horizon ShellBar Component
// Integrates Navigation, Theme Toggle, Weights Modal, and Separate Candidate & Recruiter Authentication

window.ShellBar = function({
  currentView,
  setCurrentView,
  isDarkMode,
  setIsDarkMode,
  activeRole,
  onOpenWeightsModal,
  currentUser,
  onOpenCandidateLogin,
  onOpenRecruiterLogin,
  onLogout,
  onSwitchUser
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  // Close menu on click outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCandidate = currentUser && currentUser.role === 'candidate';
  const isRecruiter = currentUser && currentUser.role === 'recruiter';

  return React.createElement('header', {
    className: 'sap-shell-bar sticky top-0 z-40 w-full px-3 sm:px-4 lg:px-6 py-2.5 flex items-center justify-between transition-colors duration-200'
  }, [
    // Brand left section
    React.createElement('div', { key: 'left', className: 'flex items-center gap-3 md:gap-4' }, [
      // SAP Emblem
      React.createElement('div', {
        key: 'sap-brand',
        className: 'flex items-center gap-2.5 cursor-pointer',
        onClick: () => setCurrentView('landing')
      }, [
        React.createElement('div', {
          key: 'logo-box',
          className: 'w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm overflow-hidden shrink-0',
          style: { background: 'linear-gradient(135deg, #0070F2 0%, #0F9D8A 100%)' }
        }, [
          React.createElement('svg', { key: 'svg-ico', viewBox: '0 0 24 24', width: '22', height: '22', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
            React.createElement('path', { key: 'p1', d: 'M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10' }),
            React.createElement('path', { key: 'p2', d: 'm9 12 2 2 4-4' }),
            React.createElement('path', { key: 'p3', d: 'M12 6a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6' })
          ])
        ]),
        React.createElement('div', { key: 'text-box', className: 'flex flex-col' }, [
          React.createElement('div', { key: 'title-row', className: 'flex items-center gap-2' }, [
            React.createElement('span', { key: 'title', className: 'text-base sm:text-lg font-black tracking-tight text-gray-900 dark:text-white' }, 'SkillPrint AI'),
            React.createElement('span', {
              key: 'hackfest-tag',
              className: 'hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 dark:bg-blue-950/70 text-[#0070F2] dark:text-blue-300'
            }, 'SAP Hackfest 2026')
          ]),
          React.createElement('span', { key: 'subtitle', className: 'text-[11px] text-gray-500 dark:text-gray-400 font-medium hidden xs:inline' },
            'Inclusive Workforce • Verified Proof Over Pedigree'
          )
        ])
      ])
    ]),

    // Center Quick Mode Switcher
    React.createElement('div', { key: 'center', className: 'hidden md:flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl text-xs font-medium' }, [
      React.createElement('button', {
        key: 'btn-landing',
        onClick: () => setCurrentView('landing'),
        className: `px-3 py-1.5 rounded-lg transition-all ${currentView === 'landing' ? 'bg-white dark:bg-gray-700 shadow-sm font-bold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, 'SkillPrint AI Overview'),

      React.createElement('button', {
        key: 'btn-cand',
        onClick: () => {
          if (!currentUser) {
            onOpenCandidateLogin();
          } else {
            setCurrentView('candidate');
          }
        },
        className: `px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${currentView === 'candidate' ? 'bg-white dark:bg-gray-700 shadow-sm font-bold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, [
        React.createElement('span', { key: 'dot', className: 'w-2 h-2 rounded-full bg-blue-500' }),
        'Candidate Portal'
      ]),

      React.createElement('button', {
        key: 'btn-rec',
        onClick: () => {
          if (!currentUser || currentUser.role !== 'recruiter') {
            onOpenRecruiterLogin();
          } else {
            setCurrentView('recruiter');
          }
        },
        className: `px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${currentView === 'recruiter' ? 'bg-white dark:bg-gray-700 shadow-sm font-bold text-[#0F9D8A] dark:text-teal-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, [
        React.createElement('span', { key: 'dot', className: 'w-2 h-2 rounded-full bg-teal-500' }),
        isRecruiter ? `Recruiter Hub (${currentUser.name.split(' ')[0]})` : 'Recruiter Hub'
      ]),

      React.createElement('button', {
        key: 'btn-arch',
        onClick: () => setCurrentView('architecture'),
        className: `px-3 py-1.5 rounded-lg transition-all ${currentView === 'architecture' ? 'bg-white dark:bg-gray-700 shadow-sm font-bold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, 'SAP Arch & Backend')
    ]),

    // Right Utilities (Weights, Theme, Logins or User Chip)
    React.createElement('div', { key: 'right', className: 'flex items-center gap-2 sm:gap-2.5' }, [
      // SES Weights Button
      React.createElement('button', {
        key: 'weights-btn',
        onClick: onOpenWeightsModal,
        className: 'px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1.5 text-gray-700 dark:text-gray-300',
        title: 'View or adjust Skill Evidence Score weights'
      }, [
        React.createElement('svg', { key: 'slider-icon', viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
          React.createElement('line', { key: 'l1', x1: '4', y1: '21', x2: '4', y2: '14' }),
          React.createElement('line', { key: 'l2', x1: '4', y1: '10', x2: '4', y2: '3' }),
          React.createElement('line', { key: 'l3', x1: '12', y1: '21', x2: '12', y2: '12' }),
          React.createElement('line', { key: 'l4', x1: '12', y1: '8', x2: '12', y2: '3' }),
          React.createElement('line', { key: 'l5', x1: '20', y1: '21', x2: '20', y2: '16' }),
          React.createElement('line', { key: 'l6', x1: '20', y1: '12', x2: '20', y2: '3' })
        ]),
        React.createElement('span', { key: 'text', className: 'hidden xl:inline' }, 'SES Weights')
      ]),

      // Dark/Light Mode Switcher
      React.createElement('button', {
        key: 'theme-toggle',
        onClick: () => setIsDarkMode(!isDarkMode),
        className: 'p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
        'aria-label': 'Toggle Dark/Light Mode',
        title: isDarkMode ? 'Switch to SAP Horizon Light' : 'Switch to SAP Horizon Dark'
      }, [
        isDarkMode
          ? React.createElement('svg', { key: 'sun', viewBox: '0 0 24 24', width: '15', height: '15', fill: 'none', stroke: '#F58B1F', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
              React.createElement('circle', { key: 'c', cx: '12', cy: '12', r: '5' }),
              React.createElement('line', { key: 'l1', x1: '12', y1: '1', x2: '12', y2: '3' }),
              React.createElement('line', { key: 'l2', x1: '12', y1: '21', x2: '12', y2: '23' })
            ])
          : React.createElement('svg', { key: 'moon', viewBox: '0 0 24 24', width: '15', height: '15', fill: 'none', stroke: '#0070F2', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
              React.createElement('path', { key: 'm', d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
            ])
      ]),

      // AUTHENTICATION SECTION: Separate Candidate & Recruiter Logins OR Logged In Profile
      !currentUser ? React.createElement('div', {
        key: 'auth-actions',
        className: 'flex items-center gap-1.5 sm:gap-2 pl-2 border-l border-gray-200 dark:border-gray-700'
      }, [
        // Candidate Login Button
        React.createElement('button', {
          key: 'btn-cand-login',
          onClick: onOpenCandidateLogin,
          className: 'px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-950/50 text-[#0070F2] dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-all flex items-center gap-1.5',
          title: 'Sign in with Candidate Email or Username'
        }, [
          React.createElement('svg', { key: 'u-ico', viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
            React.createElement('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
            React.createElement('circle', { cx: '12', cy: '7', r: '4' })
          ]),
          React.createElement('span', {}, 'Candidate Sign In')
        ]),

        // Recruiter Login Button
        React.createElement('button', {
          key: 'btn-rec-login',
          onClick: onOpenRecruiterLogin,
          className: 'px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0F9D8A] text-white hover:bg-[#0c8272] shadow-sm transition-all flex items-center gap-1.5',
          title: 'Sign in with Corporate Email'
        }, [
          React.createElement('svg', { key: 'b-ico', viewBox: '0 0 24 24', width: '13', height: '13', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
            React.createElement('rect', { width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
            React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
          ]),
          React.createElement('span', {}, 'Recruiter Portal')
        ])
      ]) : React.createElement('div', {
        key: 'logged-in-profile',
        ref: menuRef,
        className: 'relative pl-2 border-l border-gray-200 dark:border-gray-700'
      }, [
        // Persona Clickable Trigger
        React.createElement('button', {
          type: 'button',
          onClick: () => setIsUserMenuOpen(!isUserMenuOpen),
          className: 'flex items-center gap-2 p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left focus:outline-none'
        }, [
          React.createElement('div', {
            className: 'w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-white dark:ring-gray-900',
            style: { backgroundColor: currentUser.avatarColor || (isRecruiter ? '#0F9D8A' : '#0070F2') }
          }, currentUser.avatarInitials || (isRecruiter ? 'HR' : 'AN')),
          
          React.createElement('div', { className: 'hidden lg:flex flex-col' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5' }, [
              React.createElement('span', { className: 'text-xs font-bold leading-tight text-gray-900 dark:text-white' }, currentUser.name),
              React.createElement('span', {
                className: `sap-badge text-[10px] py-0 px-1.5 ${isRecruiter ? 'sap-badge-teal' : 'sap-badge-blue'}`
              }, isRecruiter ? 'Recruiter' : 'Candidate')
            ]),
            React.createElement('span', { className: 'text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1 max-w-[150px]' },
              currentUser.title || (isRecruiter ? 'SAP Talent Evaluator' : 'Student Persona')
            )
          ]),

          React.createElement('svg', {
            viewBox: '0 0 24 24',
            width: '14',
            height: '14',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            className: `text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`
          }, [
            React.createElement('polyline', { points: '6 9 12 15 18 9' })
          ])
        ]),

        // Interactive Dropdown Menu Popover
        isUserMenuOpen && React.createElement('div', {
          className: 'absolute right-0 mt-2 w-72 bg-white dark:bg-[#151D28] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 py-3 z-50 text-xs animate-fadeIn'
        }, [
          // User Card Header
          React.createElement('div', { className: 'px-4 pb-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3' }, [
            React.createElement('div', {
              className: 'w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shrink-0',
              style: { backgroundColor: currentUser.avatarColor || (isRecruiter ? '#0F9D8A' : '#0070F2') }
            }, currentUser.avatarInitials || (isRecruiter ? 'HR' : 'AN')),
            React.createElement('div', { className: 'min-w-0' }, [
              React.createElement('div', { className: 'font-bold text-sm text-gray-900 dark:text-white truncate' }, currentUser.name),
              React.createElement('div', { className: 'text-[11px] text-gray-500 truncate font-mono' }, currentUser.email || currentUser.username),
              React.createElement('span', {
                className: `sap-badge mt-1 text-[10px] py-0 px-2 ${isRecruiter ? 'sap-badge-teal' : 'sap-badge-blue'}`
              }, isRecruiter ? 'Enterprise Recruiter' : 'Verified Candidate')
            ])
          ]),

          // Switch / Navigation Actions
          React.createElement('div', { className: 'py-2 px-1' }, [
            // Go to Primary View
            React.createElement('button', {
              onClick: () => {
                setIsUserMenuOpen(false);
                setCurrentView(isRecruiter ? 'recruiter' : 'candidate');
              },
              className: 'w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2.5 text-gray-700 dark:text-gray-200'
            }, [
              React.createElement('span', { className: 'text-base' }, isRecruiter ? '📊' : '🎯'),
              React.createElement('span', { className: 'font-semibold' }, isRecruiter ? 'Open Recruiter Hub' : 'Open Candidate Dashboard')
            ]),

            // Switch to Candidate Login (if recruiter)
            isRecruiter && React.createElement('button', {
              onClick: () => {
                setIsUserMenuOpen(false);
                onOpenCandidateLogin();
              },
              className: 'w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center gap-2.5 text-[#0070F2] dark:text-blue-300'
            }, [
              React.createElement('span', { className: 'text-base' }, '🎓'),
              React.createElement('span', { className: 'font-semibold' }, 'Switch to Candidate Login (Email / Username)')
            ]),

            // Switch to Recruiter Login (if candidate)
            isCandidate && React.createElement('button', {
              onClick: () => {
                setIsUserMenuOpen(false);
                onOpenRecruiterLogin();
              },
              className: 'w-full text-left px-3 py-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950/40 flex items-center gap-2.5 text-[#0F9D8A] dark:text-teal-300'
            }, [
              React.createElement('span', { className: 'text-base' }, '💼'),
              React.createElement('span', { className: 'font-semibold' }, 'Switch to Recruiter Portal (Corporate Email)')
            ])
          ]),

          // Sign Out Divider & Button
          React.createElement('div', { className: 'pt-2 px-2 border-t border-gray-100 dark:border-gray-800' }, [
            React.createElement('button', {
              onClick: () => {
                setIsUserMenuOpen(false);
                if (onLogout) onLogout();
              },
              className: 'w-full text-left px-3 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-2.5 font-bold'
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '15', height: '15', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
                React.createElement('path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' }),
                React.createElement('polyline', { points: '16 17 21 12 16 7' }),
                React.createElement('line', { x1: '21', y1: '12', x2: '9', y2: '12' })
              ]),
              React.createElement('span', {}, 'Sign Out')
            ])
          ])
        ])
      ])
    ])
  ]);
};
