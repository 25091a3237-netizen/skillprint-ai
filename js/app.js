// SkillPrint AI - Main Application Component
// Assembles routing, state management, modals, and SAP Fiori Horizon layout

window.App = function() {
  // Global View Navigation
  const [currentView, setCurrentView] = React.useState('landing'); // 'landing', 'candidate', 'recruiter', 'agents', 'architecture', 'impact'
  
  // Theme Mode (Light / Dark SAP Horizon)
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isSideNavCollapsed, setIsSideNavCollapsed] = React.useState(false);

  // Dynamic SES Weights
  const [weights, setWeights] = React.useState(window.MOCK_DATA.defaultWeights);
  const [isWeightsModalOpen, setIsWeightsModalOpen] = React.useState(false);

  // Evidence State for Ananya
  const [evidenceList, setEvidenceList] = React.useState(window.MOCK_DATA.ananyaProfile.evidenceSources);
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

  // Toast Notification
  const [toastMessage, setToastMessage] = React.useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Sync Dark Mode class with <html> element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle adding new evidence
  const handleAddEvidence = (newEvidence) => {
    setEvidenceList(prev => [newEvidence, ...prev]);
    showToast(`Added verified artifact: "${newEvidence.title}". SES scores recalculated.`);
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

  return React.createElement('div', {
    className: 'min-h-screen flex flex-col bg-[#F0F4F9] dark:bg-[#0D131C] text-[#0B1F33] dark:text-[#E6EDF5] transition-colors duration-200'
  }, [
    // 1. SAP Fiori ShellBar
    React.createElement(window.ShellBar, {
      key: 'shell-bar',
      currentView,
      setCurrentView,
      isDarkMode,
      setIsDarkMode,
      activeRole: selectedRole,
      onOpenWeightsModal: () => setIsWeightsModalOpen(true)
    }),

    // 2. Main Body: SideNav + Dynamic Content View
    React.createElement('div', { key: 'main-layout', className: 'flex-1 flex overflow-hidden' }, [
      // Left Sidebar Navigation
      React.createElement(window.SideNav, {
        key: 'side-nav',
        currentView,
        setCurrentView,
        isCollapsed: isSideNavCollapsed,
        setIsCollapsed: setIsSideNavCollapsed
      }),

      // Scrollable Main Content Area
      React.createElement('main', {
        key: 'main-view',
        id: 'main-content',
        className: 'flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between max-w-7xl mx-auto w-full'
      }, [
        // Active Page View Component
        React.createElement('div', { key: 'view-container', className: 'flex-1' }, [
          currentView === 'landing' && React.createElement(window.LandingPage, {
            onNavigateCandidate: () => setCurrentView('candidate'),
            onNavigateRecruiter: () => setCurrentView('recruiter'),
            onOpenWeights: () => setIsWeightsModalOpen(true)
          }),

          currentView === 'candidate' && React.createElement(window.CandidatePage, {
            ananyaProfile: window.MOCK_DATA.ananyaProfile,
            evidenceList,
            setEvidenceList,
            weights,
            onOpenWeights: () => setIsWeightsModalOpen(true),
            onOpenAddEvidence: handleOpenAddCategory,
            roles
          }),

          currentView === 'recruiter' && React.createElement(window.RecruiterPage, {
            candidates,
            roles,
            selectedRole,
            setSelectedRole,
            isBlindScreening,
            setIsBlindScreening,
            onOpenExplainDrawer: handleOpenExplainDrawer,
            onUpdateCandidateDecision: handleUpdateCandidateDecision
          }),

          currentView === 'agents' && React.createElement(window.AgenticWorkflowPage, {
            agentWorkflow: window.MOCK_DATA.agentWorkflow
          }),

          currentView === 'architecture' && React.createElement(window.SapArchitecturePage, {
            sapArchitecture: window.MOCK_DATA.sapArchitecture
          }),

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
