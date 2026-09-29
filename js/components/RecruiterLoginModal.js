// SkillPrint AI - Recruiter Enterprise Login Modal
// Dedicated enterprise login portal for Corporate Recruiters and Hiring Managers
// Enforces login through Corporate Email (e.g. sarah.jenkins@sap.com, rajiv.menon@sap.com) or SAP IAS SSO.

window.RecruiterLoginModal = function({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [department, setDepartment] = React.useState('Global Analytics & Talent Acquisition');
  const [rememberSession, setRememberSession] = React.useState(true);
  const [loginError, setLoginError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [ssoLoading, setSsoLoading] = React.useState(false);

  const recruitersPool = (window.MOCK_DATA && window.MOCK_DATA.authUsers && window.MOCK_DATA.authUsers.recruiters) || [];

  // Handle Quick 1-Click Demo Recruiter Login
  const handleQuickRecruiterLogin = (rec) => {
    setEmail(rec.email);
    setPassword(rec.password);
    setLoginError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess(rec);
      }
      if (onClose) onClose();
    }, 400);
  };

  // Handle SAP Cloud Identity Services SSO
  const handleSsoLogin = () => {
    setSsoLoading(true);
    setLoginError('');

    setTimeout(() => {
      setSsoLoading(false);
      const defaultRecruiter = recruitersPool[0] || {
        id: 'rec-1',
        role: 'recruiter',
        name: 'Sarah Jenkins',
        email: 'sarah.jenkins@sap.com',
        title: 'Lead Technical Talent Partner',
        department: 'SAP Labs India • Global Talent Acquisition',
        org: 'SAP SE',
        ssoProvider: 'SAP Cloud Identity Services (IAS)',
        avatarInitials: 'SJ',
        avatarColor: '#0F9D8A',
        badge: 'Lead Technical Recruiter'
      };

      if (onLoginSuccess) {
        onLoginSuccess(defaultRecruiter);
      }
      if (onClose) onClose();
    }, 650);
  };

  // Handle Email Credentials Submit (Strictly requires Email for recruiters)
  const handleEmailLoginSubmit = (e) => {
    if (e) e.preventDefault();
    setLoginError('');

    const cleanEmail = email.trim().toLowerCase();

    // Enforce email format for recruiters
    if (!cleanEmail) {
      setLoginError('Corporate email is required for recruiter authentication.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setLoginError('Please enter a valid corporate email address (e.g. sarah.jenkins@sap.com).');
      return;
    }
    if (!password) {
      setLoginError('Please enter your recruiter portal password or access key.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const matched = recruitersPool.find(r => r.email.toLowerCase() === cleanEmail);

      if (matched) {
        if (onLoginSuccess) {
          onLoginSuccess(matched);
        }
        if (onClose) onClose();
      } else {
        // Create authenticated recruiter session for any corporate email
        const corporateName = cleanEmail.split('@')[0]
          .split('.')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');

        const customRecruiter = {
          id: `rec-${Date.now()}`,
          role: 'recruiter',
          name: corporateName || 'Enterprise Recruiter',
          email: cleanEmail,
          title: 'Technical Talent Partner',
          department: department || 'Talent Acquisition & Workforce Operations',
          org: cleanEmail.includes('sap.com') ? 'SAP SE' : cleanEmail.split('@')[1],
          ssoProvider: 'Corporate Email Auth',
          avatarInitials: corporateName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'HR',
          avatarColor: '#0F9D8A',
          badge: 'Enterprise Recruiter'
        };

        if (onLoginSuccess) {
          onLoginSuccess(customRecruiter);
        }
        if (onClose) onClose();
      }
    }, 450);
  };

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn'
  }, [
    React.createElement('div', {
      key: 'modal-card',
      className: 'relative w-full max-w-xl bg-white dark:bg-[#111822] rounded-3xl shadow-2xl border border-gray-200 dark:border-teal-900/60 overflow-hidden text-[#0B1F33] dark:text-[#E6EDF5] transition-all'
    }, [
      // Top Decorative Accent Gradient (Enterprise Teal & SAP Navy)
      React.createElement('div', {
        key: 'top-accent',
        className: 'h-2 w-full bg-gradient-to-r from-[#0F9D8A] via-[#0070F2] to-[#6B4FA3]'
      }),

      // Header Section
      React.createElement('div', {
        key: 'header',
        className: 'p-6 sm:p-8 pb-5 border-b border-gray-100 dark:border-gray-800'
      }, [
        React.createElement('div', { className: 'flex items-start justify-between gap-4' }, [
          React.createElement('div', { className: 'flex items-center gap-3.5' }, [
            React.createElement('div', {
              className: 'w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F9D8A] to-[#0070F2] text-white flex items-center justify-center shadow-md shrink-0'
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '24', height: '24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
                React.createElement('rect', { width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
                React.createElement('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
              ])
            ]),
            React.createElement('div', {}, [
              React.createElement('div', { className: 'flex items-center gap-2 flex-wrap' }, [
                React.createElement('h2', { className: 'text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white' }, 'Recruiter Portal'),
                React.createElement('span', { className: 'sap-badge sap-badge-teal text-[11px]' }, 'Enterprise Access')
              ]),
              React.createElement('p', { className: 'text-xs text-gray-500 dark:text-gray-400 mt-0.5' },
                'Corporate Talent Acquisition & Bias-Audited Candidate Screening'
              )
            ])
          ]),

          // Close Button
          React.createElement('button', {
            onClick: onClose,
            className: 'p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
            title: 'Close Modal'
          }, [
            React.createElement('svg', { viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
              React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
              React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
            ])
          ])
        ]),

        // Enterprise Compliance Banner
        React.createElement('div', {
          key: 'guardrail-badge',
          className: 'mt-4 p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-200'
        }, [
          React.createElement('span', { className: 'text-base shrink-0' }, '🔒'),
          React.createElement('div', { className: 'leading-tight' }, [
            React.createElement('strong', { className: 'font-semibold' }, 'Protected Enterprise Environment: '),
            React.createElement('span', {}, 'Blind screening active by default. Candidates demographic proxies are masked until human interview stages.')
          ])
        ])
      ]),

      // Modal Content Body
      React.createElement('div', {
        key: 'body',
        className: 'p-6 sm:p-8 space-y-6 max-h-[72vh] overflow-y-auto'
      }, [
        // 1-Click Quick Demo Recruiter Accounts
        React.createElement('div', {
          key: 'demo-recruiters',
          className: 'p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 space-y-3'
        }, [
          React.createElement('div', { className: 'flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300' }, [
            React.createElement('span', { className: 'flex items-center gap-1.5' }, [
              React.createElement('span', { className: 'w-2 h-2 rounded-full bg-teal-500 animate-pulse' }),
              'Quick Demo Logins (Instant Recruiter Access):'
            ]),
            React.createElement('span', { className: 'text-[10px] text-teal-600 dark:text-teal-400 font-mono font-bold' }, '1-Click HR Demo')
          ]),

          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-2.5' },
            recruitersPool.map(rec => {
              return React.createElement('button', {
                key: rec.id,
                type: 'button',
                onClick: () => handleQuickRecruiterLogin(rec),
                className: 'p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-left hover:border-[#0F9D8A] dark:hover:border-teal-400 hover:shadow-md transition-all group'
              }, [
                React.createElement('div', { className: 'flex items-center gap-2.5 mb-1.5' }, [
                  React.createElement('div', {
                    className: 'w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0',
                    style: { backgroundColor: rec.avatarColor || '#0F9D8A' }
                  }, rec.avatarInitials),
                  React.createElement('div', { className: 'min-w-0' }, [
                    React.createElement('div', { className: 'text-xs font-bold truncate group-hover:text-[#0F9D8A] transition-colors' }, rec.name),
                    React.createElement('div', { className: 'text-[10px] text-gray-400 truncate font-mono' }, rec.email)
                  ])
                ]),
                React.createElement('p', { className: 'text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1' },
                  rec.department
                )
              ]);
            })
          )
        ]),

        // SSO Option Button
        React.createElement('div', { key: 'sso-section' }, [
          React.createElement('button', {
            type: 'button',
            onClick: handleSsoLogin,
            disabled: ssoLoading,
            className: 'w-full py-3 px-4 rounded-xl border-2 border-[#0070F2] dark:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 font-bold text-xs text-[#0070F2] dark:text-blue-300 flex items-center justify-center gap-2.5 transition-all shadow-sm'
          }, [
            ssoLoading
              ? React.createElement('span', { className: 'animate-spin' }, '⏳')
              : React.createElement('svg', { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' }, [
                  React.createElement('path', { d: 'M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10' }),
                  React.createElement('path', { d: 'm9 12 2 2 4-4' }),
                  React.createElement('path', { d: 'M12 6a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6' })
                ]),
            React.createElement('span', {}, ssoLoading ? 'Connecting to SAP Cloud Identity Services...' : 'Sign In with SAP Corporate SSO (IAS / SAML 2.0)')
          ]),

          React.createElement('div', { className: 'relative flex py-4 items-center' }, [
            React.createElement('div', { className: 'flex-grow border-t border-gray-200 dark:border-gray-800' }),
            React.createElement('span', { className: 'flex-shrink mx-3 text-[11px] text-gray-400 font-semibold uppercase tracking-wider' }, 'Or Sign In with Corporate Email'),
            React.createElement('div', { className: 'flex-grow border-t border-gray-200 dark:border-gray-800' })
          ])
        ]),

        // Standard Corporate Email Login Form
        React.createElement('form', {
          key: 'email-form',
          onSubmit: handleEmailLoginSubmit,
          className: 'space-y-4'
        }, [
          loginError && React.createElement('div', {
            className: 'p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2'
          }, [
            React.createElement('span', { className: 'font-bold' }, '⚠️'),
            React.createElement('span', {}, loginError)
          ]),

          // Corporate Email Input (Strictly requires Email)
          React.createElement('div', {}, [
            React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5' },
              'Corporate Email *'
            ),
            React.createElement('input', {
              type: 'email',
              placeholder: 'sarah.jenkins@sap.com',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: 'w-full px-4 py-2.5 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0F9D8A] text-gray-900 dark:text-white',
              required: true
            }),
            React.createElement('p', { className: 'text-[10px] text-gray-400 mt-1' },
              'Recruiters must authenticate using a verified enterprise email address.'
            )
          ]),

          // Password / Token
          React.createElement('div', {}, [
            React.createElement('div', { className: 'flex items-center justify-between mb-1.5' }, [
              React.createElement('label', { className: 'text-xs font-bold text-gray-700 dark:text-gray-300' }, 'Password / Enterprise Token *'),
              React.createElement('button', {
                type: 'button',
                onClick: () => setShowPassword(!showPassword),
                className: 'text-[11px] text-[#0F9D8A] dark:text-teal-400 hover:underline'
              }, showPassword ? 'Hide' : 'Show')
            ]),
            React.createElement('input', {
              type: showPassword ? 'text' : 'password',
              placeholder: 'Recruiter@2026',
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: 'w-full px-4 py-2.5 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0F9D8A] text-gray-900 dark:text-white',
              required: true
            })
          ]),

          // Department Selector
          React.createElement('div', {}, [
            React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5' }, 'Hiring Department / Business Unit'),
            React.createElement('select', {
              value: department,
              onChange: (e) => setDepartment(e.target.value),
              className: 'w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0F9D8A] text-gray-900 dark:text-white font-medium'
            }, [
              React.createElement('option', { value: 'Global Analytics & Business Intelligence' }, 'Global Analytics & Business Intelligence'),
              React.createElement('option', { value: 'Enterprise AI & Intelligent Automation' }, 'Enterprise AI & Intelligent Automation'),
              React.createElement('option', { value: 'Cloud ERP Engineering (CAP & Fiori)' }, 'Cloud ERP Engineering (CAP & Fiori)'),
              React.createElement('option', { value: 'Strategic Workforce & Market Operations' }, 'Strategic Workforce & Market Operations'),
              React.createElement('option', { value: 'BTP Integration & Digital Core' }, 'BTP Integration & Digital Core')
            ])
          ]),

          // Remember Session
          React.createElement('div', { className: 'flex items-center justify-between text-xs pt-1' }, [
            React.createElement('label', { className: 'flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400' }, [
              React.createElement('input', {
                type: 'checkbox',
                checked: rememberSession,
                onChange: (e) => setRememberSession(e.target.checked),
                className: 'rounded text-[#0F9D8A] focus:ring-0'
              }),
              React.createElement('span', {}, 'Keep session active for 8 hours')
            ]),
            React.createElement('button', {
              type: 'button',
              onClick: () => setLoginError('Demo hint: Use the quick demo buttons or password "Recruiter@2026".'),
              className: 'text-[#0F9D8A] dark:text-teal-400 hover:underline'
            }, 'Need help?')
          ]),

          // Submit Action Button
          React.createElement('button', {
            type: 'submit',
            disabled: isLoading,
            className: 'w-full py-3 px-4 rounded-xl font-bold text-white text-xs bg-gradient-to-r from-[#0F9D8A] to-[#0070F2] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50'
          }, [
            isLoading
              ? React.createElement('span', { className: 'animate-spin' }, '⏳')
              : React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
                  React.createElement('path', { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' }),
                  React.createElement('polyline', { points: '10 17 15 12 10 7' }),
                  React.createElement('line', { x1: '15', y1: '12', x2: '3', y2: '12' })
                ]),
            React.createElement('span', {}, isLoading ? 'Verifying Corporate Credentials...' : 'Sign In with Corporate Email to Recruiter Hub')
          ])
        ])
      ]),

      // Modal Footer with Security & Fair Hiring Guarantee
      React.createElement('div', {
        key: 'footer',
        className: 'px-6 py-4 bg-gray-50 dark:bg-gray-900/80 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400'
      }, [
        React.createElement('div', { className: 'flex items-center gap-2' }, [
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-teal-500' }),
          React.createElement('span', {}, 'SAP Hackfest 2026 • Inclusive Workforce HR Guardrail')
        ]),
        React.createElement('span', { className: 'font-mono text-[10px]' }, 'IAS SSO Verified')
      ])
    ])
  ]);
};
