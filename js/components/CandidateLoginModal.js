// SkillPrint AI - Candidate Login & Registration Modal
// Dedicated, student-empowering portal login for Candidates (Ananya, Vikram, Priya, etc.)
// Features: 1-click Demo Candidate Logins, Credentials Authentication, New Candidate Registration, and Blind Proxy Safeguards.

window.CandidateLoginModal = function({ isOpen, onClose, onLoginSuccess, initialTab = 'login' }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = React.useState(initialTab); // 'login' or 'register'
  
  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(true);
  const [loginError, setLoginError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Registration Form State
  const [regName, setRegName] = React.useState('');
  const [regEmail, setRegEmail] = React.useState('');
  const [regPassword, setRegPassword] = React.useState('');
  const [regCollege, setRegCollege] = React.useState('');
  const [regCity, setRegCity] = React.useState('');
  const [regTargetRoleId, setRegTargetRoleId] = React.useState('role-1');
  const [regGithub, setRegGithub] = React.useState('');
  const [regError, setRegError] = React.useState('');

  const candidatesPool = (window.MOCK_DATA && window.MOCK_DATA.authUsers && window.MOCK_DATA.authUsers.candidates) || [];
  const rolesList = (window.MOCK_DATA && window.MOCK_DATA.roles) || [];

  // Reset errors on tab change
  React.useEffect(() => {
    setLoginError('');
    setRegError('');
  }, [activeTab]);

  // Handle Quick 1-Click Demo Login
  const handleQuickDemoLogin = (cand) => {
    setLoginIdentifier(cand.email);
    setLoginPassword(cand.password);
    setLoginError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess(cand);
      }
      if (onClose) onClose();
    }, 400);
  };

  // Handle Standard Credentials Submit
  const handleLoginSubmit = (e) => {
    if (e) e.preventDefault();
    setLoginError('');

    if (!loginIdentifier.trim()) {
      setLoginError('Please enter your email or username.');
      return;
    }
    if (!loginPassword) {
      setLoginError('Please enter your password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const cleanId = loginIdentifier.trim().toLowerCase();
      const matched = candidatesPool.find(c => 
        c.email.toLowerCase() === cleanId || 
        c.username.toLowerCase() === cleanId || 
        c.name.toLowerCase() === cleanId
      );

      if (matched) {
        // Successful login
        if (onLoginSuccess) {
          onLoginSuccess(matched);
        }
        if (onClose) onClose();
      } else {
        // Fallback for custom entered email or username (e.g. person1)
        const userId = 'cand-' + cleanId.replace(/[^a-zA-Z0-9]/g, '-');
        const displayName = cleanId.includes('@') ? cleanId.split('@')[0] : cleanId;
        const fallbackCandidate = {
          id: userId,
          role: 'candidate',
          name: displayName,
          email: cleanId.includes('@') ? cleanId : `${cleanId}@skillprint.ai`,
          username: cleanId,
          headline: `${displayName}'s Verified Skills & Evidence Profile`,
          institution: 'Non-Metro Engineering College (Tier-3)',
          city: 'Regional Center, India',
          avatarInitials: displayName.slice(0, 2).toUpperCase(),
          avatarColor: '#0070F2',
          profileId: userId
        };
        if (onLoginSuccess) {
          onLoginSuccess(fallbackCandidate);
        }
        if (onClose) onClose();
      }
    }, 450);
  };

  // Handle Registration Submit
  const handleRegisterSubmit = (e) => {
    if (e) e.preventDefault();
    setRegError('');

    if (!regName.trim()) {
      setRegError('Please enter your full name.');
      return;
    }
    if (!regEmail.trim() || !regEmail.includes('@')) {
      setRegError('Please enter a valid email address.');
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setRegError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const initials = regName.trim().split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'CP';
      const candId = `cand-${Date.now()}`;
      const newCand = {
        id: candId,
        role: 'candidate',
        name: regName.trim(),
        email: regEmail.trim(),
        username: regEmail.split('@')[0],
        password: regPassword,
        headline: `${regName.trim()} | Target: ${rolesList.find(r => r.id === regTargetRoleId)?.title || 'Data Analyst'}`,
        institution: regCollege.trim() || 'Tier-3 Engineering College (Autonomous)',
        city: regCity.trim() || 'Regional Center, India',
        targetRoleId: regTargetRoleId,
        githubUrl: regGithub.trim(),
        avatarInitials: initials,
        avatarColor: '#0070F2',
        profileId: candId, // unique profile ID
        isNewRegistration: true
      };

      if (onLoginSuccess) {
        onLoginSuccess(newCand);
      }
      if (onClose) onClose();
    }, 600);
  };

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn'
  }, [
    React.createElement('div', {
      key: 'modal-card',
      className: 'relative w-full max-w-xl bg-white dark:bg-[#151D28] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700/80 overflow-hidden text-[#0B1F33] dark:text-[#E6EDF5] transition-all'
    }, [
      // Top Decorative Accent Gradient
      React.createElement('div', {
        key: 'top-accent',
        className: 'h-2 w-full bg-gradient-to-r from-[#0070F2] via-[#0F9D8A] to-[#6B4FA3]'
      }),

      // Header Section
      React.createElement('div', {
        key: 'header',
        className: 'p-6 sm:p-8 pb-4 border-b border-gray-100 dark:border-gray-800'
      }, [
        React.createElement('div', { className: 'flex items-start justify-between gap-4' }, [
          React.createElement('div', { className: 'flex items-center gap-3.5' }, [
            React.createElement('div', {
              className: 'w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0070F2] to-[#0F9D8A] text-white flex items-center justify-center shadow-md shrink-0'
            }, [
              React.createElement('svg', { viewBox: '0 0 24 24', width: '24', height: '24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
                React.createElement('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
                React.createElement('circle', { cx: '12', cy: '7', r: '4' })
              ])
            ]),
            React.createElement('div', {}, [
              React.createElement('div', { className: 'flex items-center gap-2 flex-wrap' }, [
                React.createElement('h2', { className: 'text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white' }, 'Candidate Portal'),
                React.createElement('span', { className: 'sap-badge sap-badge-blue text-[11px]' }, 'Candidate Access')
              ]),
              React.createElement('p', { className: 'text-xs text-gray-500 dark:text-gray-400 mt-0.5' },
                '“Prove what you can do — not where you come from.”'
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

        // Tab Selector Switcher
        React.createElement('div', {
          key: 'tab-switch',
          className: 'flex items-center gap-2 mt-5 p-1 bg-gray-100 dark:bg-gray-800/80 rounded-xl text-xs font-semibold'
        }, [
          React.createElement('button', {
            type: 'button',
            onClick: () => setActiveTab('login'),
            className: `flex-1 py-2 px-3 rounded-lg transition-all ${
              activeTab === 'login'
                ? 'bg-white dark:bg-gray-700 text-[#0070F2] dark:text-blue-300 shadow-sm font-bold'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`
          }, 'Candidate Sign In'),
          React.createElement('button', {
            type: 'button',
            onClick: () => setActiveTab('register'),
            className: `flex-1 py-2 px-3 rounded-lg transition-all ${
              activeTab === 'register'
                ? 'bg-white dark:bg-gray-700 text-[#0070F2] dark:text-blue-300 shadow-sm font-bold'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`
          }, 'Create Skills Profile')
        ])
      ]),

      // Modal Content Body
      React.createElement('div', {
        key: 'body',
        className: 'p-6 sm:p-8 space-y-6 max-h-[72vh] overflow-y-auto'
      }, [
        // TAB 1: CANDIDATE LOGIN
        activeTab === 'login' && React.createElement('div', { key: 'login-tab', className: 'space-y-6' }, [
          
          // 1-Click Demo Candidate Selector
          React.createElement('div', {
            key: 'demo-section',
            className: 'p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-3'
          }, [
            React.createElement('div', { className: 'flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300' }, [
              React.createElement('span', { className: 'flex items-center gap-1.5' }, [
                React.createElement('span', { className: 'w-2 h-2 rounded-full bg-blue-500 animate-pulse' }),
                'Quick Demo Logins (Instant Candidate Access):'
              ]),
              React.createElement('span', { className: 'text-[10px] text-gray-400 font-mono' }, '1-Click')
            ]),

            React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1' },
              candidatesPool.map(cand => {
                return React.createElement('button', {
                  key: cand.id,
                  type: 'button',
                  onClick: () => handleQuickDemoLogin(cand),
                  className: 'p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-left hover:border-[#0070F2] dark:hover:border-blue-400 hover:shadow-md transition-all group'
                }, [
                  React.createElement('div', { className: 'flex items-center gap-2 mb-1' }, [
                    React.createElement('div', {
                      className: 'w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0',
                      style: { backgroundColor: cand.avatarColor || '#0070F2' }
                    }, cand.avatarInitials),
                    React.createElement('span', { className: 'text-xs font-bold truncate group-hover:text-[#0070F2] transition-colors' }, cand.name)
                  ]),
                  React.createElement('div', { className: 'text-[10px] text-blue-600 dark:text-blue-400 font-mono truncate' }, `@${cand.username}`),
                  React.createElement('div', { className: 'text-[9px] text-gray-400 truncate font-mono' }, cand.email),
                  React.createElement('p', { className: 'text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5' },
                    cand.headline || 'Verified Skills & Evidence Profile'
                  )
                ]);
              })
            )
          ]),

          // Standard Login Form
          React.createElement('form', {
            key: 'login-form',
            onSubmit: handleLoginSubmit,
            className: 'space-y-4'
          }, [
            loginError && React.createElement('div', {
              className: 'p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2'
            }, [
              React.createElement('span', { className: 'font-bold' }, '⚠️'),
              React.createElement('span', {}, loginError)
            ]),

            // Email or Username
            React.createElement('div', {}, [
              React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5' }, [
                React.createElement('span', {}, 'Email or Direct Username *'),
                React.createElement('span', { className: 'ml-2 text-[10px] font-normal text-blue-600 dark:text-blue-400' }, '(Sign in with email or username)')
              ]),
              React.createElement('div', { className: 'relative' }, [
                React.createElement('input', {
                  type: 'text',
                  placeholder: 'e.g. ananya-dev (Username) or ananya.candidate@skillprint.ai (Email)',
                  value: loginIdentifier,
                  onChange: (e) => setLoginIdentifier(e.target.value),
                  className: 'w-full px-4 py-2.5 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white',
                  required: true
                })
              ])
            ]),

            // Password
            React.createElement('div', {}, [
              React.createElement('div', { className: 'flex items-center justify-between mb-1.5' }, [
                React.createElement('label', { className: 'text-xs font-bold text-gray-700 dark:text-gray-300' }, 'Password'),
                React.createElement('button', {
                  type: 'button',
                  onClick: () => setShowPassword(!showPassword),
                  className: 'text-[11px] text-[#0070F2] dark:text-blue-400 hover:underline'
                }, showPassword ? 'Hide' : 'Show')
              ]),
              React.createElement('input', {
                type: showPassword ? 'text' : 'password',
                placeholder: 'Candidate@123',
                value: loginPassword,
                onChange: (e) => setLoginPassword(e.target.value),
                className: 'w-full px-4 py-2.5 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white',
                required: true
              })
            ]),

            // Remember Me & Forgot Password
            React.createElement('div', { className: 'flex items-center justify-between text-xs' }, [
              React.createElement('label', { className: 'flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400' }, [
                React.createElement('input', {
                  type: 'checkbox',
                  checked: rememberMe,
                  onChange: (e) => setRememberMe(e.target.checked),
                  className: 'rounded text-[#0070F2] focus:ring-0'
                }),
                React.createElement('span', {}, 'Keep session active')
              ]),
              React.createElement('button', {
                type: 'button',
                onClick: () => setLoginError('Demo hint: Use any quick demo button above or password "Candidate@123".'),
                className: 'text-[#0070F2] dark:text-blue-400 hover:underline'
              }, 'Forgot password?')
            ]),

            // Submit Button
            React.createElement('button', {
              type: 'submit',
              disabled: isLoading,
              className: 'w-full py-3 px-4 rounded-xl font-bold text-white text-xs bg-gradient-to-r from-[#0070F2] to-[#0F9D8A] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50'
            }, [
              isLoading
                ? React.createElement('span', { className: 'animate-spin' }, '⏳')
                : React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
                    React.createElement('path', { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' }),
                    React.createElement('polyline', { points: '10 17 15 12 10 7' }),
                    React.createElement('line', { x1: '15', y1: '12', x2: '3', y2: '12' })
                  ]),
              React.createElement('span', {}, isLoading ? 'Authenticating Skills Identity...' : 'Sign In to Candidate Dashboard')
            ])
          ])
        ]),

        // TAB 2: CANDIDATE REGISTRATION
        activeTab === 'register' && React.createElement('form', {
          key: 'register-form',
          onSubmit: handleRegisterSubmit,
          className: 'space-y-4'
        }, [
          React.createElement('div', {
            className: 'p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs text-teal-800 dark:text-teal-300'
          }, [
            React.createElement('span', { className: 'font-bold' }, '🛡️ Inclusive Identity Guarantee: '),
            'Your institution tier, gender, and regional location will be masked during recruiter blind screening. You will be evaluated purely on verified evidence.'
          ]),

          regError && React.createElement('div', {
            className: 'p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300'
          }, regError),

          // Full Name
          React.createElement('div', {}, [
            React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'Full Name *'),
            React.createElement('input', {
              type: 'text',
              placeholder: 'e.g., Ananya Roy',
              value: regName,
              onChange: (e) => setRegName(e.target.value),
              className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white',
              required: true
            })
          ]),

          // Email
          React.createElement('div', {}, [
            React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'Email Address *'),
            React.createElement('input', {
              type: 'email',
              placeholder: 'ananya@student.edu',
              value: regEmail,
              onChange: (e) => setRegEmail(e.target.value),
              className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white',
              required: true
            })
          ]),

          // Password
          React.createElement('div', {}, [
            React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'Password (min. 6 characters) *'),
            React.createElement('input', {
              type: 'password',
              placeholder: '••••••••',
              value: regPassword,
              onChange: (e) => setRegPassword(e.target.value),
              className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white',
              required: true
            })
          ]),

          // College & City (2 columns)
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' }, [
            React.createElement('div', {}, [
              React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'College / Institution'),
              React.createElement('input', {
                type: 'text',
                placeholder: 'e.g. Salem Autonomous College',
                value: regCollege,
                onChange: (e) => setRegCollege(e.target.value),
                className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white'
              })
            ]),
            React.createElement('div', {}, [
              React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'City / State'),
              React.createElement('input', {
                type: 'text',
                placeholder: 'e.g. Salem, Tamil Nadu',
                value: regCity,
                onChange: (e) => setRegCity(e.target.value),
                className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white'
              })
            ])
          ]),

          // Target Role & GitHub URL
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-3' }, [
            React.createElement('div', {}, [
              React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'Target Career Role'),
              React.createElement('select', {
                value: regTargetRoleId,
                onChange: (e) => setRegTargetRoleId(e.target.value),
                className: 'w-full px-3 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white font-medium'
              }, rolesList.map(r => React.createElement('option', { key: r.id, value: r.id }, r.title)))
            ]),
            React.createElement('div', {}, [
              React.createElement('label', { className: 'block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1' }, 'GitHub or Portfolio Link'),
              React.createElement('input', {
                type: 'text',
                placeholder: 'github.com/username',
                value: regGithub,
                onChange: (e) => setRegGithub(e.target.value),
                className: 'w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#0070F2] text-gray-900 dark:text-white'
              })
            ])
          ]),

          // Register Action Button
          React.createElement('button', {
            type: 'submit',
            disabled: isLoading,
            className: 'w-full py-3 px-4 rounded-xl font-bold text-white text-xs bg-gradient-to-r from-[#0070F2] to-[#0F9D8A] hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-2'
          }, [
            isLoading
              ? React.createElement('span', { className: 'animate-spin' }, '⏳')
              : React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' }, [
                  React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
                  React.createElement('circle', { cx: '8.5', cy: '7', r: '4' }),
                  React.createElement('line', { x1: '20', y1: '8', x2: '20', y2: '14' }),
                  React.createElement('line', { x1: '23', y1: '11', x2: '17', y2: '11' })
                ]),
            React.createElement('span', {}, isLoading ? 'Creating Verified Identity...' : 'Register & Launch Candidate SkillPrint')
          ])
        ])
      ]),

      // Modal Footer with Security & Privacy Guarantee
      React.createElement('div', {
        key: 'footer',
        className: 'px-6 py-4 bg-gray-50 dark:bg-gray-900/80 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400'
      }, [
        React.createElement('div', { className: 'flex items-center gap-2' }, [
          React.createElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14', fill: 'none', stroke: '#0F9D8A', strokeWidth: '2' }, [
            React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
          ]),
          React.createElement('span', {}, 'Consent-driven evidence ingestion • Zero pedigree proxies')
        ]),
        React.createElement('span', { className: 'font-mono text-[10px]' }, 'SAP Hackfest 2026')
      ])
    ])
  ]);
};
