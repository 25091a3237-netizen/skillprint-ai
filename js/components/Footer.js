// SkillPrint AI - Standard Enterprise Footer
window.Footer = function() {
  return React.createElement('footer', {
    className: 'w-full py-5 px-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-xs text-gray-500 dark:text-gray-400 mt-auto'
  }, [
    React.createElement('div', {
      key: 'inner-wrap',
      className: 'max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left'
    }, [
      // Required exact text
      React.createElement('div', { key: 'mandatory-copy', className: 'flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300' }, [
        React.createElement('span', { key: 'bullet-symbol', className: 'w-2 h-2 rounded-full bg-[#0070F2]' }),
        React.createElement('span', { key: 'text' }, 'SkillPrint AI • SAP Hackfest 2026')
      ]),

      // Tagline and Team credit
      React.createElement('div', { key: 'team-copy', className: 'flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]' }, [
        React.createElement('span', { key: 'tag', className: 'italic text-gray-500 dark:text-gray-400' }, '"Prove what you can do — not where you come from."'),
        React.createElement('span', { key: 'sep', className: 'hidden md:inline text-gray-300 dark:text-gray-700' }, '|'),
        React.createElement('span', { key: 'innovexa', className: 'font-mono text-gray-400 dark:text-gray-500' },
          'Team Innovexa1: B. Ajitesh, M. Abhilash, K. Diwakar Reddy, Shaik Faizan Basha, B. Harshavardhan'
        )
      ])
    ])
  ]);
};
