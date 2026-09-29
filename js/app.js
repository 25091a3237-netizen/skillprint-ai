// SkillPrint AI - Main Application Component
// Assembles routing, role-based authentication (Candidate vs Recruiter), modals, and SAP Fiori Horizon layout

window.App = function() {
  // Authentication State: Clean initial state (null) — no default Ananya on the candidate bar
  const [currentUser, setCurrentUser] = React.useState(() => {
    try {
      const saved = localStorage.getItem('skillprint_active_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name && parsed.role) return parsed;
      }
    } catch (e) {
      console.warn('Error reading saved user session:', e);
    }
    // Default initial user: null (Guest - candidate bar does not default to Ananya)
    return null;
  });

  // Global View Navigation
  const [currentView, setCurrentView] = React.useState('landing'); // 'landing', 'candidate', 'recruiter', 'architecture', 'impact'
  
  // Theme Mode (Light / Dark SAP Horizon)
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isSideNavCollapsed, setIsSideNavCollapsed] = React.useState(false);

  // Dynamic SES Weights
  const [weights, setWeights] = React.useState(window.MOCK_DATA.defaultWeights);
  const [isWeightsModalOpen, setIsWeightsModalOpen] = React.useState(false);

  // Active Candidate Profile & Evidence
  const getCandidateProfile = (user) => {
    if (!user) return window.MOCK_DATA.ananyaProfile;
    if (window.MOCK_DATA && typeof window.MOCK_DATA.getOrCreateCandidateProfile === 'function') {
      return window.MOCK_DATA.getOrCreateCandidateProfile(user);
    }
    const profiles = window.MOCK_DATA.candidateProfiles || {};
    return profiles[user.id] || profiles[user.profileId] || window.MOCK_DATA.ananyaProfile;
  };

  const [activeCandidateProfile, setActiveCandidateProfile] = React.useState(() => getCandidateProfile(currentUser));
  const [evidenceList, setEvidenceList] = React.useState(() => activeCandidateProfile.evidenceSources || window.MOCK_DATA.ananyaProfile.evidenceSources);
  const [isAddEvidenceModalOpen, setIsAddEvidenceModalOpen] = React.useState(false);
  const [addEvidenceCategory, setAddEvidenceCategory] = React.useState('Projects');

  // Recruiter Dashboard State
  const [roles, setRoles] = React.useState(window.MOCK_DATA.roles);
  const [selectedRole, setSelectedRole] = React.useState(window.MOCK_DATA.roles[0]);
  const [candidates, setCandidates] = React.useState(window.MOCK_DATA.candidates);
  const [isBlindScreening, setIsBlindScreening] = React.useState(true); // Default: Blind Screening Active!

  // Explainability Drawer
  const [isExplainDrawerOpen, setIsExplainDrawerOpen] = React.useState(false);
  const [selectedExplainCandidate, setSelectedExplainCandidate] = React.useState(null);

  // Authentication Modals State
  const [isCandidateLoginOpen, setIsCandidateLoginOpen] = React.useState(false);
  const [isRecruiterLoginOpen, setIsRecruiterLoginOpen] = React.useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = React.useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3600);
  };

  // Sync Dark Mode class with <html> element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Candidate Login Success (Email or direct Username)
  const handleCandidateLoginSuccess = (cand) => {
    setCurrentUser(cand);
    try {
      localStorage.setItem('skillprint_active_user', JSON.stringify(cand));
    } catch (e) {}

    const profile = getCandidateProfile(cand);
    setActiveCandidateProfile(profile);
    setEvidenceList(profile.evidenceSources || window.MOCK_DATA.ananyaProfile.evidenceSources);
    setCurrentView('candidate');
    showToast(`Signed in as Candidate: ${cand.name}. Verified Skills Profile loaded.`);
  };

  // Handle Recruiter Login Success (Corporate Email or SAP SSO)
  const handleRecruiterLoginSuccess = (rec) => {
    setCurrentUser(rec);
    try {
      localStorage.setItem('skillprint_active_user', JSON.stringify(rec));
    } catch (e) {}

    setCurrentView('recruiter');
    showToast(`Signed in as Recruiter: ${rec.name} (${rec.title || 'Enterprise Talent'}).`);
  };

  // Handle Sign Out
  const handleLogout = () => {
    try {
      localStorage.removeItem('skillprint_active_user');
    } catch (e) {}
    setCurrentUser(null);
    setCurrentView('landing');
    showToast('You have been signed out.');
  };

  // Handle adding new evidence (persists to active candidate profile)
  const handleAddEvidence = (newEvidence) => {
    setEvidenceList(prev => {
      const updated = [newEvidence, ...prev];
      if (activeCandidateProfile) {
        const updatedProfile = {
          ...activeCandidateProfile,
          evidenceSources: updated
        };
        setActiveCandidateProfile(updatedProfile);
        if (window.MOCK_DATA && window.MOCK_DATA.saveCandidateProfile) {
          window.MOCK_DATA.saveCandidateProfile(updatedProfile);
        }
      }
      return updated;
    });
    showToast(`Added verified artifact: "${newEvidence.title}". SES scores recalculated.`);
  };

  // Handle recruiter visiting candidate profile (Read-Only Mode)
  const handleRecruiterVisitCandidate = (cand) => {
    const fullProfile = getCandidateProfile(cand);
    setActiveCandidateProfile(fullProfile);
    setEvidenceList(fullProfile.evidenceSources || []);
    setCurrentView('candidate');
    showToast(`Viewing ${cand.name}'s verified profile in Recruiter Read-Only mode.`);
  };

  // Handle opening explain drawer for candidate
  const handleOpenExplainDrawer = (cand) => {
    setSelectedExplainCandidate(cand);
    setIsExplainDrawerOpen(true);
  };

  // Handle human recruiter decisions
  const handleUpdateCandidateDecision = (candidateId, decision, notes) => {
    setCandidates(prev => prev.map(c => {
      if (c.id === candidateId) {
        return {
          ...c,
          decisionStatus: decision,
          recruiterNotes: notes || c.recruiterNotes
        };
      }
      return c;
    }));

    if (selectedExplainCandidate && selectedExplainCandidate.id === candidateId) {
      setSelectedExplainCandidate(prev => ({
        ...prev,
        decisionStatus: decision,
        recruiterNotes: notes || prev.recruiterNotes
      }));
    }

    showToast(`Decision recorded: ${decision} for candidate.`);
  };

  // Helper to open Add Evidence modal with specific category
  const handleOpenAddCategory = (category) => {
    setAddEvidenceCategory(category || 'Projects');
    setIsAddEvidenceModalOpen(true);
  };

  const isCandidate = currentUser && currentUser.role === 'candidate';
  const isRecruiter = currentUser && currentUser.role === 'recruiter';

  return React.createElement('div', {
    className: 'min-h-screen flex flex-col bg-[#F0F4F9] dark:bg-[#0D131C] text-[#0B1F33] dark:text-[#E6EDF5] transition-colors duration-200'
  }, [
    // 1. SAP Fiori ShellBar with Auth Actions
    React.createElement(window.ShellBar, {
      key: 'shell-bar',
      currentView,
      setCurrentView,
      isDarkMode,
      setIsDarkMode,
      activeRole: selectedRole,
      onOpenWeightsModal: () => setIsWeightsModalOpen(true),
      currentUser,
      onOpenCandidateLogin: () => setIsCandidateLoginOpen(true),
      onOpenRecruiterLogin: () => setIsRecruiterLoginOpen(true),
      onLogout: handleLogout
    }),

    // 2. Main Body: SideNav + Dynamic Content View
    React.createElement('div', { key: 'main-layout', className: 'flex-1 flex overflow-hidden' }, [
      // Left Sidebar Navigation
      React.createElement(window.SideNav, {
        key: 'side-nav',
        currentView,
        setCurrentView,
        isCollapsed: isSideNavCollapsed,
        setIsCollapsed: setIsSideNavCollapsed,
        currentUser,
        onOpenCandidateLogin: () => setIsCandidateLoginOpen(true),
        onOpenRecruiterLogin: () => setIsRecruiterLoginOpen(true),
        onLogout: handleLogout
      }),

      // Scrollable Main Content Area
      React.createElement('main', {
        key: 'main-view',
        id: 'main-content',
        className: 'flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between max-w-7xl mx-auto w-full'
      }, [
        // Active Page View Component
        React.createElement('div', { key: 'view-container', className: 'flex-1' }, [
          // View: Landing Page
          currentView === 'landing' && React.createElement(window.LandingPage, {
            onNavigateCandidate: () => {
              if (currentUser && currentUser.role === 'candidate') {
                setCurrentView('candidate');
              } else {
                setIsCandidateLoginOpen(true);
              }
            },
            onNavigateRecruiter: () => {
              if (currentUser && currentUser.role === 'recruiter') {
                setCurrentView('recruiter');
              } else {
                setIsRecruiterLoginOpen(true);
              }
            },
            onOpenWeights: () => setIsWeightsModalOpen(true),
            currentUser,
            onOpenCandidateLogin: () => setIsCandidateLoginOpen(true),
            onOpenRecruiterLogin: () => setIsRecruiterLoginOpen(true),
            onCandidateLoginSuccess: handleCandidateLoginSuccess,
            onRecruiterLoginSuccess: handleRecruiterLoginSuccess
          }),

          // View: Candidate Dashboard
          currentView === 'candidate' && (
            !currentUser ? (
              // Gateway if guest
              React.createElement('div', {
                key: 'cand-gateway',
                className: 'max-w-xl mx-auto my-12 p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl text-center space-y-5 animate-fadeIn'
              }, [
                React.createElement('div', { className: 'w-16 h-16 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-[#0070F2] flex items-center justify-center text-3xl shadow-sm' }, '🎓'),
                React.createElement('h2', { className: 'text-2xl font-black text-gray-900 dark:text-white' }, 'Candidate Sign In Required'),
                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-300' },
                  'Sign in with your email or direct username to manage your verified evidence, review your dynamic SES score, and configure recruiter consent.'
                ),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-3 justify-center pt-2' }, [
                  React.createElement('button', {
                    onClick: () => setIsCandidateLoginOpen(true),
                    className: 'sap-btn-primary px-6 py-2.5 text-xs font-bold'
                  }, 'Sign In with Email or Username'),
                  React.createElement('button', {
                    onClick: () => handleCandidateLoginSuccess(window.MOCK_DATA.authUsers.candidates[0]),
                    className: 'sap-btn-secondary px-6 py-2.5 text-xs font-semibold'
                  }, 'Explore Demo Candidate')
                ])
              ])
            ) : (
              React.createElement('div', { key: 'cand-wrapper', className: 'space-y-4' }, [
                // If logged in as Recruiter, show evaluation banner
                isRecruiter && React.createElement('div', {
                  className: 'p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 flex items-center justify-between text-xs'
                }, [
                  React.createElement('div', { className: 'flex items-center gap-2 text-teal-900 dark:text-teal-200' }, [
                    React.createElement('span', { className: 'text-base' }, '🔍'),
                    React.createElement('span', {}, `Enterprise Evaluation Mode: Reviewing candidate profile as ${currentUser.name} (${currentUser.title || 'Recruiter'}).`)
                  ]),
                  React.createElement('button', {
                    onClick: () => setIsCandidateLoginOpen(true),
                    className: 'font-bold text-teal-700 dark:text-teal-300 hover:underline'
                  }, 'Switch to Candidate Session →')
                ]),

                // Candidate Page (Supports any candidate profile & Recruiter Read-Only)
                React.createElement(window.CandidatePage, {
                  candidateProfile: activeCandidateProfile,
                  ananyaProfile: activeCandidateProfile,
                  evidenceList,
                  setEvidenceList: (updater) => {
                    // Prevent recruiter from mutating candidate evidence
                    if (isRecruiter) {
                      showToast('Read-Only Mode: Recruiters cannot alter candidate evidence.');
                      return;
                    }
                    setEvidenceList(prev => {
                      const next = typeof updater === 'function' ? updater(prev) : updater;
                      if (activeCandidateProfile) {
                        const updatedProfile = { ...activeCandidateProfile, evidenceSources: next };
                        setActiveCandidateProfile(updatedProfile);
                        if (window.MOCK_DATA && window.MOCK_DATA.saveCandidateProfile) {
                          window.MOCK_DATA.saveCandidateProfile(updatedProfile);
                        }
                      }
                      return next;
                    });
                  },
                  weights,
                  onOpenWeights: () => setIsWeightsModalOpen(true),
                  onOpenAddEvidence: isRecruiter ? null : handleOpenAddCategory,
                  roles,
                  isRecruiter,
                  onReturnToRecruiterHub: () => setCurrentView('recruiter')
                })
              ])
            )
          ),

          // View: Recruiter Hub
          currentView === 'recruiter' && (
            (!currentUser || currentUser.role !== 'recruiter') ? (
              // Recruiter Access Gateway (if candidate or guest)
              React.createElement('div', {
                key: 'rec-gateway',
                className: 'max-w-xl mx-auto my-12 p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl text-center space-y-5 animate-fadeIn'
              }, [
                React.createElement('div', { className: 'w-16 h-16 mx-auto rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-[#0F9D8A] flex items-center justify-center text-3xl shadow-sm' }, '💼'),
                React.createElement('div', {}, [
                  React.createElement('h2', { className: 'text-2xl font-black text-gray-900 dark:text-white' }, 'Recruiter Authorization Required'),
                  React.createElement('p', { className: 'text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider mt-1' }, 'Protected Enterprise Environment')
                ]),
                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-300' },
                  isCandidate
                    ? `You are currently signed in as candidate (${currentUser.name}). Enterprise screening, candidate rankings, and hiring decisions are restricted to corporate recruiters.`
                    : 'Please authenticate with your corporate email (e.g. sarah.jenkins@sap.com) or SAP Corporate SSO to access candidate blind screening and ranking.'
                ),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-3 justify-center pt-2' }, [
                  React.createElement('button', {
                    onClick: () => setIsRecruiterLoginOpen(true),
                    className: 'px-6 py-2.5 rounded-xl font-bold text-xs bg-[#0F9D8A] text-white hover:bg-[#0c8272] shadow-sm'
                  }, 'Sign In with Corporate Email'),
                  React.createElement('button', {
                    onClick: () => handleRecruiterLoginSuccess(window.MOCK_DATA.authUsers.recruiters[0]),
                    className: 'sap-btn-secondary px-6 py-2.5 text-xs font-semibold'
                  }, 'Quick Demo: Sarah Jenkins (Lead HR)')
                ]),
                isCandidate && React.createElement('div', { className: 'pt-2' }, [
                  React.createElement('button', {
                    onClick: () => setCurrentView('candidate'),
                    className: 'text-xs text-[#0070F2] dark:text-blue-400 hover:underline font-semibold'
                  }, '← Return to Candidate Dashboard')
                ])
              ])
            ) : (
              React.createElement(window.RecruiterPage, {
                candidates,
                roles,
                selectedRole,
                setSelectedRole,
                isBlindScreening,
                setIsBlindScreening,
                onOpenExplainDrawer: handleOpenExplainDrawer,
                onUpdateCandidateDecision: handleUpdateCandidateDecision,
                onVisitCandidate: handleRecruiterVisitCandidate
              })
            )
          ),

          // View: SAP Architecture & Backend
          currentView === 'architecture' && React.createElement(window.SapArchitecturePage, {
            sapArchitecture: window.MOCK_DATA.sapArchitecture,
            backendAgents: window.MOCK_DATA.agentWorkflow
          }),

          // View: Impact & Scalability
          currentView === 'impact' && React.createElement(window.ImpactScalePage, {
            impactData: window.MOCK_DATA.impactData,
            onNavigateCandidate: () => setCurrentView('candidate'),
            onNavigateRecruiter: () => setCurrentView('recruiter')
          })
        ]),

        // Mandatory Footer on Every Page
        React.createElement(window.Footer, { key: 'standard-footer' })
      ])
    ]),

    // 3. Modals and Drawers Overlays
    // Candidate Login & Registration Modal (Email or direct Username)
    React.createElement(window.CandidateLoginModal, {
      key: 'candidate-login-modal',
      isOpen: isCandidateLoginOpen,
      onClose: () => setIsCandidateLoginOpen(false),
      onLoginSuccess: handleCandidateLoginSuccess
    }),

    // Recruiter Enterprise Login Modal (Corporate Email or SAP SSO)
    React.createElement(window.RecruiterLoginModal, {
      key: 'recruiter-login-modal',
      isOpen: isRecruiterLoginOpen,
      onClose: () => setIsRecruiterLoginOpen(false),
      onLoginSuccess: handleRecruiterLoginSuccess
    }),

    // Weight Calculation Modal
    React.createElement(window.WeightModal, {
      key: 'weight-modal',
      isOpen: isWeightsModalOpen,
      onClose: () => setIsWeightsModalOpen(false),
      weights,
      setWeights,
      ananyaEvidence: evidenceList
    }),

    // Add Evidence Modal
    React.createElement(window.AddEvidenceModal, {
      key: 'add-evidence-modal',
      isOpen: isAddEvidenceModalOpen,
      onClose: () => setIsAddEvidenceModalOpen(false),
      initialCategory: addEvidenceCategory,
      onAddEvidence: handleAddEvidence
    }),

    // Explainability Recommendation Drawer
    React.createElement(window.ExplainDrawer, {
      key: 'explain-drawer',
      isOpen: isExplainDrawerOpen,
      onClose: () => setIsExplainDrawerOpen(false),
      candidate: selectedExplainCandidate,
      role: selectedRole,
      isBlindScreening,
      onDecisionSubmit: handleUpdateCandidateDecision
    }),

    // Toast Notification Banner
    toastMessage && React.createElement('div', {
      key: 'toast',
      className: 'fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-2xl flex items-center gap-3 text-xs font-medium animate-fadeIn border border-gray-700 dark:border-gray-200'
    }, [
      React.createElement('span', { className: 'w-2 h-2 rounded-full bg-teal-400' }),
      React.createElement('span', {}, toastMessage)
    ])
  ]);
};

// Render Root
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(window.App));
  }
});
