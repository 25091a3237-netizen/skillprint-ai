// SkillPrint AI - SAP Architecture Page Component
// Visual enterprise architecture diagram showing multi-source evidence ingestion,
// SAP BTP, SAP HANA Cloud, SAP Build & Fiori, and SAP SuccessFactors HCM Core.
// Explicitly and honestly labels which parts are live in this prototype vs mocked or planned.

window.SapArchitecturePage = function({ sapArchitecture }) {
  const [selectedLayerId, setSelectedLayerId] = React.useState('layer-1');
  const [statusFilter, setStatusFilter] = React.useState('ALL');

  const selectedLayer = sapArchitecture.layers.find(l => l.id === selectedLayerId) || sapArchitecture.layers[0];

  return React.createElement('div', { className: 'space-y-8 pb-12 animate-fadeIn' }, [
    
    // Header & Transparency Disclaimer
    React.createElement('div', {
      key: 'hdr',
      className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl space-y-3'
    }, [
      React.createElement('div', { className: 'flex flex-wrap items-center justify-between gap-3' }, [
        React.createElement('div', { className: 'space-y-1' }, [
          React.createElement('div', { className: 'flex items-center gap-2' }, [
            React.createElement('span', { className: 'sap-badge sap-badge-blue' }, 'Enterprise Solution Architecture'),
            React.createElement('span', { className: 'text-xs text-gray-400 font-mono' }, 'SAP Hackfest 2026')
          ]),
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 dark:text-gray-100' },
            'Powered by SAP Business Technology Platform & HCM'
          ),
          React.createElement('p', { className: 'text-xs text-gray-500 max-w-2xl' },
            'SAP provides the secure enterprise operating backbone for explainable skill identity, verifiable data ingestion, and inclusive workforce transformation.'
          )
        ]),

        // Legend tags
        React.createElement('div', { className: 'flex flex-wrap items-center gap-2 text-xs font-mono' }, [
          React.createElement('span', { className: 'sap-badge sap-badge-green text-[10px]' }, '● LIVE IN PROTOTYPE'),
          React.createElement('span', { className: 'sap-badge sap-badge-blue text-[10px]' }, '● MOCKED BTP API'),
          React.createElement('span', { className: 'sap-badge sap-badge-orange text-[10px]' }, '● PLANNED ENTERPRISE')
        ])
      ]),

      // Mandatory Transparency Callout
      React.createElement('div', {
        className: 'p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5'
      }, [
        React.createElement('svg', { viewBox: '0 0 24 24', width: '16', height: '16', fill: 'none', stroke: '#0070F2', strokeWidth: '2', className: 'shrink-0 mt-0.5' }, [
          React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
          React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
          React.createElement('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' })
        ]),
        React.createElement('div', {}, [
          React.createElement('span', { className: 'font-bold' }, 'Architecture Transparency Note: '),
          'The candidate/recruiter UI, dynamic mathematical SES scoring engine, explainability drawer, and blind screening safeguards are fully operational in this prototype. Backend SAP BTP, HANA Vector Engine, and SuccessFactors HCM services represent the documented production target.'
        ])
      ])
    ]),

    // 4 Architectural Layers Diagram Flow
    React.createElement('div', { key: 'arch-diagram', className: 'space-y-4' }, [
      React.createElement('div', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider' },
        'End-to-End Architectural Pipeline Flow'
      ),

      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' },
        sapArchitecture.layers.map((layer, idx) => {
          const isSelected = selectedLayerId === layer.id;

          return React.createElement('div', {
            key: layer.id,
            onClick: () => setSelectedLayerId(layer.id),
            className: `sap-card p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
              isSelected
                ? 'border-2 border-blue-500 bg-blue-50/40 dark:bg-blue-950/30 shadow-md'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
            }`
          }, [
            React.createElement('div', { key: 'top', className: 'space-y-2' }, [
              React.createElement('div', { className: 'flex items-center justify-between' }, [
                React.createElement('span', {
                  className: 'w-7 h-7 rounded-lg text-white font-bold text-xs flex items-center justify-center shrink-0',
                  style: { backgroundColor: layer.color }
                }, idx + 1),
                React.createElement('span', {
                  className: `sap-badge ${
                    layer.status === 'LIVE_IN_PROTOTYPE' ? 'sap-badge-green' :
                    layer.status === 'INTEGRATION_READY' ? 'sap-badge-blue' : 'sap-badge-orange'
                  } text-[9px]`
                }, layer.badge)
              ]),

              React.createElement('h3', { className: 'font-bold text-sm text-gray-900 dark:text-gray-100 leading-snug' }, layer.title),
              React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' }, layer.description)
            ]),

            // Components Pill List
            React.createElement('div', { key: 'comps', className: 'space-y-1.5 pt-3 border-t border-gray-100 dark:border-gray-700/60' }, [
              React.createElement('div', { className: 'text-[10px] uppercase font-bold text-gray-400' }, 'Modules:'),
              layer.components.map((c, i) => React.createElement('div', {
                key: i,
                className: 'text-xs flex items-center justify-between py-0.5'
              }, [
                React.createElement('span', { className: 'text-gray-700 dark:text-gray-300 font-medium truncate max-w-[140px]' }, c.name),
                React.createElement('span', {
                  className: `text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                    c.status === 'LIVE_IN_PROTOTYPE' ? 'text-green-600 bg-green-50 dark:bg-green-950/60' :
                    c.status === 'MOCKED_BTP_API' ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/60' : 'text-orange-600 bg-orange-50 dark:bg-orange-950/60'
                  }`
                }, c.status === 'LIVE_IN_PROTOTYPE' ? 'LIVE' : c.status === 'MOCKED_BTP_API' ? 'MOCKED' : 'PLANNED')
              ]))
            ])
          ]);
        })
      )
    ]),

    // Deep Drilldown Detail for Selected Architectural Layer
    React.createElement('div', {
      key: 'detail-card',
      className: 'sap-card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl space-y-6 shadow-sm'
    }, [
      React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-700 pb-4' }, [
        React.createElement('div', { className: 'space-y-1' }, [
          React.createElement('span', { className: 'text-xs font-bold uppercase tracking-wider text-gray-400' }, 'Layer Deep-Dive'),
          React.createElement('h3', { className: 'text-xl font-bold text-gray-900 dark:text-gray-100' }, selectedLayer.title),
          React.createElement('p', { className: 'text-xs text-gray-500' }, selectedLayer.description)
        ]),
        React.createElement('span', { className: 'sap-badge sap-badge-blue text-xs' }, 'SAP Cloud Architecture Framework')
      ]),

      // Component Breakdown Grid
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        selectedLayer.components.map((comp, idx) => React.createElement('div', {
          key: idx,
          className: 'p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/40 space-y-2'
        }, [
          React.createElement('div', { className: 'flex items-center justify-between' }, [
            React.createElement('h4', { className: 'font-bold text-xs text-gray-900 dark:text-gray-100' }, comp.name),
            React.createElement('span', {
              className: `sap-badge ${
                comp.status === 'LIVE_IN_PROTOTYPE' ? 'sap-badge-green' :
                comp.status === 'MOCKED_BTP_API' ? 'sap-badge-blue' : 'sap-badge-orange'
              } text-[10px]`
            }, comp.status.replace(/_/g, ' '))
          ]),
          React.createElement('p', { className: 'text-xs text-gray-600 dark:text-gray-400 leading-relaxed' }, comp.role),
          React.createElement('div', { className: 'pt-2 text-[10px] font-mono text-gray-400 border-t border-gray-200 dark:border-gray-700' },
            `API Integration Protocol: REST / OData v4 with OAuth 2.0 Client Credentials`
          )
        ]))
      ),

      // Cross-Cutting Enterprise Security & Authorization Banner
      React.createElement('div', {
        className: 'p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs'
      }, [
        React.createElement('div', { className: 'flex items-center gap-3' }, [
          React.createElement('div', { className: 'w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#0F9D8A] flex items-center justify-center font-bold text-base shrink-0' }, [
            React.createElement('svg', { viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
              React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
            ])
          ]),
          React.createElement('div', {}, [
            React.createElement('div', { className: 'font-bold text-gray-900 dark:text-gray-100 text-sm' },
              'Security & Authorization Across Every Layer'
            ),
            React.createElement('div', { className: 'text-gray-600 dark:text-gray-400 mt-0.5' },
              'SAP Cloud Identity Services enforces candidate consent tokens. No unverified third-party data is ingested without cryptographic candidate signature.'
            )
          ])
        ]),
        React.createElement('span', { className: 'sap-badge sap-badge-teal text-[10px] shrink-0 font-mono' },
          'GDPR & DPDP 2023 Compliant'
        )
      ])
    ])
  ]);
};
