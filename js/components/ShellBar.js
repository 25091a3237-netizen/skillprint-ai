// SAP Fiori Horizon ShellBar Component
window.ShellBar = function({ currentView, setCurrentView, isDarkMode, setIsDarkMode, activeRole, onOpenWeightsModal, notificationsCount = 2 }) {
  const [showNotifications, setShowNotifications] = React.useState(false);

  return React.createElement('header', {
    className: 'sap-shell-bar sticky top-0 z-40 w-full px-4 lg:px-6 py-2.5 flex items-center justify-between transition-colors duration-200'
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
          className: 'w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white shadow-sm overflow-hidden',
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
            React.createElement('span', { key: 'title', className: 'text-lg font-bold tracking-tight' }, 'SkillPrint AI'),
            React.createElement('span', {
              key: 'hackfest-tag',
              className: 'hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 dark:bg-blue-900/40 text-[#0070F2] dark:text-blue-300'
            }, 'SAP Hackfest 2026')
          ]),
          React.createElement('span', { key: 'subtitle', className: 'text-[11px] text-gray-500 dark:text-gray-400 font-medium' },
            'Inclusive Workforce • Explainable Skills Identity'
          )
        ])
      ])
    ]),

    // Center Quick Mode Switcher
    React.createElement('div', { key: 'center', className: 'hidden md:flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium' }, [
      React.createElement('button', {
        key: 'btn-landing',
        onClick: () => setCurrentView('landing'),
        className: `px-3 py-1.5 rounded-md transition-all ${currentView === 'landing' ? 'bg-white dark:bg-gray-700 shadow-sm font-semibold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, 'Overview'),
      React.createElement('button', {
        key: 'btn-cand',
        onClick: () => setCurrentView('candidate'),
        className: `px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${currentView === 'candidate' ? 'bg-white dark:bg-gray-700 shadow-sm font-semibold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, [
        React.createElement('span', { key: 'dot', className: 'w-2 h-2 rounded-full bg-blue-500' }),
        'Candidate (Ananya)'
      ]),
      React.createElement('button', {
        key: 'btn-rec',
        onClick: () => setCurrentView('recruiter'),
        className: `px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${currentView === 'recruiter' ? 'bg-white dark:bg-gray-700 shadow-sm font-semibold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, [
        React.createElement('span', { key: 'dot', className: 'w-2 h-2 rounded-full bg-teal-500' }),
        'Recruiter Hub'
      ]),
      React.createElement('button', {
        key: 'btn-arch',
        onClick: () => setCurrentView('architecture'),
        className: `px-3 py-1.5 rounded-md transition-all ${currentView === 'architecture' ? 'bg-white dark:bg-gray-700 shadow-sm font-semibold text-[#0070F2] dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'}`
      }, 'SAP Arch & Backend')
    ]),

    // Right Utilities (Weights, Dark mode, notifications, profile)
    React.createElement('div', { key: 'right', className: 'flex items-center gap-2 sm:gap-3' }, [
      // SES Weights Button
      React.createElement('button', {
        key: 'weights-btn',
        onClick: onOpenWeightsModal,
        className: 'px-2.5 py-1.5 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1.5 text-gray-700 dark:text-gray-300',
        title: 'View or adjust Skill Evidence Score weights'
      }, [
        React.createElement('svg', { key: 'slider-icon', viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
          React.createElement('line', { key: 'l1', x1: '4', y1: '21', x2: '4', y2: '14' }),
          React.createElement('line', { key: 'l2', x1: '4', y1: '10', x2: '4', y2: '3' }),
          React.createElement('line', { key: 'l3', x1: '12', y1: '21', x2: '12', y2: '12' }),
          React.createElement('line', { key: 'l4', x1: '12', y1: '8', x2: '12', y2: '3' }),
          React.createElement('line', { key: 'l5', x1: '20', y1: '21', x2: '20', y2: '16' }),
          React.createElement('line', { key: 'l6', x1: '20', y1: '12', x2: '20', y2: '3' }),
          React.createElement('line', { key: 'l7', x1: '1', y1: '14', x2: '7', y2: '14' }),
          React.createElement('line', { key: 'l8', x1: '9', y1: '8', x2: '15', y2: '8' }),
          React.createElement('line', { key: 'l9', x1: '17', y1: '16', x2: '23', y2: '16' })
        ]),
        React.createElement('span', { key: 'text', className: 'hidden sm:inline' }, 'SES Weights')
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
          ? React.createElement('svg', { key: 'sun', viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: '#F58B1F', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
              React.createElement('circle', { key: 'c', cx: '12', cy: '12', r: '5' }),
              React.createElement('line', { key: 'l1', x1: '12', y1: '1', x2: '12', y2: '3' }),
              React.createElement('line', { key: 'l2', x1: '12', y1: '21', x2: '12', y2: '23' }),
              React.createElement('line', { key: 'l3', x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
              React.createElement('line', { key: 'l4', x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
              React.createElement('line', { key: 'l5', x1: '1', y1: '12', x2: '3', y2: '12' }),
              React.createElement('line', { key: 'l6', x1: '21', y1: '12', x2: '23', y2: '12' }),
              React.createElement('line', { key: 'l7', x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
              React.createElement('line', { key: 'l8', x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
            ])
          : React.createElement('svg', { key: 'moon', viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: '#0070F2', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
              React.createElement('path', { key: 'm', d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
            ])
      ]),

      // Persona Indicator Badge
      React.createElement('div', {
        key: 'persona-chip',
        className: 'flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700'
      }, [
        React.createElement('div', {
          key: 'avatar',
          className: 'w-7 h-7 rounded-full bg-gradient-to-tr from-[#0070F2] to-[#0F9D8A] text-white flex items-center justify-center font-bold text-xs shadow-sm'
        }, currentView === 'recruiter' ? 'HR' : 'AN'),
        React.createElement('div', { key: 'info', className: 'hidden xl:flex flex-col' }, [
          React.createElement('span', { key: 'user-name', className: 'text-xs font-semibold leading-tight' },
            currentView === 'recruiter' ? 'Enterprise Evaluator' : 'Ananya (Candidate)'
          ),
          React.createElement('span', { key: 'user-role', className: 'text-[10px] text-gray-500 dark:text-gray-400' },
            currentView === 'recruiter' ? 'SAP Recruiting Lead' : 'Tier-3 Engineering (2026)'
          )
        ])
      ])
    ])
  ]);
};
