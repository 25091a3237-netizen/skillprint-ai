// SkillPrint AI - Agentic Workflow Page Component
// Visual, interactive, and animated 6-agent collaborative pipeline:
// (1) Evidence Discovery, (2) Skill Inference, (3) Skill Verification,
// (4) Opportunity Matching, (5) Skill Gap & Growth, (6) Fairness & Explainability.

window.AgenticWorkflowPage = function({ agentWorkflow, candidateName }) {
  const [selectedAgentId, setSelectedAgentId] = React.useState(1);
  const [isSimulating, setIsSimulating] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(1);

  // Simulation execution runner
  const handleStartSimulation = () => {
    setIsSimulating(true);
    let current = 1;
    setActiveStep(current);
    setSelectedAgentId(current);

    const interval = setInterval(() => {
      current++;
      if (current > 6) {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveStep(6);
        setSelectedAgentId(6);
      } else {
        setActiveStep(current);
        setSelectedAgentId(current);
      }
    }, 1400);
  };

  const selectedAgent = agentWorkflow.find(a => a.id === selectedAgentId) || agentWorkflow[0];

  return React.createElement('div', { className: 'space-y-8 pb-12 animate-fadeIn' }, [
    
    // Header & Pipeline Simulation Trigger
    React.createElement('div', {
      key: 'hdr',
      className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4'
    }, [
      React.createElement('div', { className: 'space-y-1' }, [
        React.createElement('div', { className: 'flex items-center gap-2' }, [
          React.createElement('span', { className: 'sap-badge sap-badge-purple' }, 'Collaborative Agent Architecture'),
          React.createElement('span', { className: 'text-xs text-gray-400 font-mono' }, 'SAP BTP AI Core Orchestration')
        ]),
        React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 dark:text-gray-100' },
          'Autonomous 6-Agent Skill Pipeline'
        ),
        React.createElement('p', { className: 'text-xs text-gray-500 max-w-2xl' },
          'Six specialized micro-agents collaborate sequentially to ingest verified evidence, infer taxonomy-aligned skills, compute deterministic SES scores, match opportunities, and audit fairness.'
        )
      ]),

      React.createElement('button', {
        onClick: handleStartSimulation,
        disabled: isSimulating,
        className: `sap-btn-primary text-xs flex items-center gap-2 shrink-0 ${isSimulating ? 'opacity-70 cursor-not-allowed' : ''}`
      }, [
        React.createElement('svg', {
          viewBox: '0 0 24 24',
          width: '16',
          height: '16',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2.5',
          className: isSimulating ? 'animate-spin' : ''
        }, [
          React.createElement('polygon', { points: '5 3 19 12 5 21 5 3' })
        ]),
        isSimulating ? `Executing Agent ${activeStep} of 6...` : `Simulate Pipeline for ${candidateName || 'Candidate'}`
      ])
    ]),

    // Visual Animated 6-Agent Pipeline Strip
    React.createElement('div', { key: 'pipeline-strip', className: 'space-y-2' }, [
      React.createElement('div', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider' },
        `Collaborative Agent Pipeline (Click any agent to inspect specs & ${candidateName || 'candidate'} telemetry)`
      ),

      React.createElement('div', {
        className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3'
      }, agentWorkflow.map((agent) => {
        const isSelected = selectedAgentId === agent.id;
        const isActivePulse = isSimulating && activeStep === agent.id;

        return React.createElement('div', {
          key: agent.id,
          onClick: () => setSelectedAgentId(agent.id),
          className: `sap-card p-4 rounded-xl cursor-pointer transition-all relative flex flex-col justify-between space-y-3 ${
            isActivePulse ? 'agent-node-active ring-2 ring-blue-500' : ''
          } ${
            isSelected
              ? 'border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 shadow-md'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 bg-white dark:bg-gray-800'
          }`
        }, [
          React.createElement('div', { key: 'top' }, [
            React.createElement('div', { className: 'flex items-center justify-between mb-2' }, [
              React.createElement('span', {
                className: 'w-6 h-6 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0',
                style: { backgroundColor: agent.color }
              }, agent.id),
              React.createElement('span', { className: 'text-[10px] font-mono text-gray-400' }, `v1.2`)
            ]),
            React.createElement('h4', { className: 'font-bold text-xs text-gray-900 dark:text-gray-100 leading-tight mb-1' }, agent.shortTitle),
            React.createElement('span', { className: 'sap-badge sap-badge-blue text-[9px] py-0' }, agent.badge)
          ]),

          React.createElement('p', { key: 'desc', className: 'text-[11px] text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed' },
            agent.description
          ),

          React.createElement('div', { key: 'footer', className: 'pt-2 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-[10px]' }, [
            React.createElement('span', { className: isSelected ? 'text-blue-600 font-bold' : 'text-gray-400' },
              isSelected ? '● Selected' : 'Inspect →'
            )
          ])
        ]);
      }))
    ]),

    // Detailed Inspector Panel for Selected Agent
    React.createElement('div', {
      key: 'inspector-panel',
      className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl space-y-6 shadow-md'
    }, [
      // Inspector Header
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-700 pb-4' }, [
        React.createElement('div', { className: 'flex items-center gap-3' }, [
          React.createElement('div', {
            className: 'w-12 h-12 rounded-xl text-white font-bold text-xl flex items-center justify-center shadow-xs',
            style: { backgroundColor: selectedAgent.color }
          }, selectedAgent.id),
          React.createElement('div', {}, [
            React.createElement('div', { className: 'flex items-center gap-2' }, [
              React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100' }, selectedAgent.name),
              React.createElement('span', { className: 'sap-badge sap-badge-teal text-xs' }, selectedAgent.badge)
            ]),
            React.createElement('p', { className: 'text-xs text-gray-500' }, selectedAgent.description)
          ])
        ]),

        React.createElement('div', { className: 'text-right shrink-0' }, [
          React.createElement('span', { className: 'sap-badge sap-badge-blue text-xs' }, 'SAP BTP Microservice'),
          React.createElement('div', { className: 'text-[11px] text-gray-400 mt-1 font-mono' }, 'Endpoint: /api/v1/agents/' + selectedAgent.id)
        ])
      ]),

      // 2-Column Inspector Specs
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' }, [
        // Left Column: I/O Specifications
        React.createElement('div', { className: 'space-y-4' }, [
          React.createElement('div', { className: 'space-y-1.5' }, [
            React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500' }, 'Input Specification'),
            React.createElement('div', { className: 'p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 font-mono leading-relaxed' },
              selectedAgent.inputSpec
            )
          ]),

          React.createElement('div', { className: 'space-y-1.5' }, [
            React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500' }, 'Output Specification'),
            React.createElement('div', { className: 'p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 font-mono leading-relaxed' },
              selectedAgent.outputSpec
            )
          ])
        ]),

        // Right Column: Ananya's Live Mock Execution Result
        React.createElement('div', { className: 'space-y-2' }, [
          React.createElement('div', { className: 'flex items-center justify-between' }, [
            React.createElement('h4', { className: 'text-xs font-bold uppercase tracking-wider text-gray-500' },
              `Sample Mock Result for ${candidateName || 'Candidate'}`
            ),
            React.createElement('span', { className: 'sap-badge sap-badge-green text-[10px]' }, 'EXECUTION SUCCESS')
          ]),

          React.createElement('div', {
            className: 'p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs text-gray-800 dark:text-gray-200 space-y-2.5 font-sans'
          }, [
            React.createElement('div', { className: 'font-semibold text-blue-700 dark:text-blue-300 flex items-center justify-between' }, [
              React.createElement('span', {}, `Telemetry: ${selectedAgent.ananyaMockResult.agentStatus || 'Verified'}`),
              React.createElement('span', { className: 'text-[11px] font-mono' }, 'Time: 42ms')
            ]),

            // Dynamic JSON or Structured Mock display
            React.createElement('pre', {
              className: 'p-3 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 overflow-x-auto text-[11px] font-mono text-gray-700 dark:text-gray-300 leading-relaxed'
            }, JSON.stringify(selectedAgent.ananyaMockResult, null, 2))
          ])
        ])
      ]),

      // Human Precedence Mandate Banner
      React.createElement('div', {
        className: 'p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-center text-xs font-semibold text-gray-700 dark:text-gray-300'
      }, 'AI recommends → bias check → HR reviews → HUMAN decides.')
    ])
  ]);
};
