// SAP Fiori Horizon Side Navigation Bar
window.SideNav = function({ currentView, setCurrentView, isCollapsed, setIsCollapsed }) {
  const navItems = [
    {
      id: 'landing',
      label: '1. Landing & Overview',
      subtitle: 'The Invisible Skills Problem',
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('path', { key: 'h1', d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
          React.createElement('polyline', { key: 'h2', points: '9 22 9 12 15 12 15 22' })
        ]);
      }
    },
    {
      id: 'candidate',
      label: '2. Candidate Dashboard',
      subtitle: 'Ananya • Evidence & Score',
      badge: 'Active Profile',
      badgeColor: 'sap-badge-blue',
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('path', { key: 'u1', d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
          React.createElement('circle', { key: 'u2', cx: '12', cy: '7', r: '4' })
        ]);
      }
    },
    {
      id: 'recruiter',
      label: '3. Recruiter Hub',
      subtitle: 'Blind Screening & Decision',
      badge: '7 Candidates',
      badgeColor: 'sap-badge-teal',
      icon: function(color) {
        return React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
          React.createElement('rect', { key: 'r1', width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
          React.createElement('path', { key: 'r2', d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
        ]);
      }
    },
    {
      id: 'architecture',
      label: '4. SAP Architecture & Backend',
      subtitle: 'BTP, HANA, Agents API & HCM',
      badge: 'Live Engine',
      badgeColor: 'sap-badge-orange',
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
      label: '5. Impact & Scalability',
      subtitle: 'Enterprise Value & Roadmap',
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
      // Section header
      !isCollapsed && React.createElement('div', {
        key: 'section-hdr',
        className: 'px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500'
      }, 'Navigation Flow'),

      // Item Buttons
      React.createElement('nav', { key: 'nav-list', className: 'space-y-1 mt-1', 'aria-label': 'Sidebar Navigation' },
        navItems.map(item => {
          const isActive = currentView === item.id;
          const strokeColor = isActive ? '#0070F2' : (isCollapsed ? '#64748B' : '#52667A');

          return React.createElement('button', {
            key: item.id,
            onClick: () => setCurrentView(item.id),
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

    // Bottom info box
    React.createElement('div', { key: 'bottom-box', className: 'p-3 border-t border-gray-200 dark:border-gray-800' }, [
      !isCollapsed ? React.createElement('div', {
        key: 'hackfest-card',
        className: 'p-3 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border border-blue-100 dark:border-blue-900/40 text-xs'
      }, [
        React.createElement('div', { key: 'hdr', className: 'flex items-center gap-1.5 font-bold text-gray-900 dark:text-gray-100' }, [
          React.createElement('span', { key: 'pulse', className: 'w-2 h-2 rounded-full bg-green-500 animate-pulse' }),
          'SAP Hackfest 2026'
        ]),
        React.createElement('p', { key: 'body', className: 'text-[11px] text-gray-600 dark:text-gray-400 mt-1 leading-relaxed' },
          'Inclusive Workforce Track: Overcoming proxy hiring through verified proof of capability.'
        ),
        React.createElement('div', { key: 'team', className: 'mt-2 text-[10px] text-gray-400 dark:text-gray-500 font-mono' },
          'Team Innovexa1'
        )
      ]) : React.createElement('div', {
        key: 'collapsed-indicator',
        className: 'flex justify-center text-xs font-bold text-blue-500'
      }, 'SAP')
    ])
  ]);
};
