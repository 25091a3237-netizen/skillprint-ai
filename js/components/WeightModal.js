// SkillPrint AI - "How SES is Calculated" Modal
window.WeightModal = function({ isOpen, onClose, weights, setWeights, ananyaEvidence }) {
  if (!isOpen) return null;

  // Local state for interactive sliders
  const [localWeights, setLocalWeights] = React.useState({ ...weights });

  const total = Math.round(
    ((localWeights.diversity || 0) + (localWeights.performance || 0) + (localWeights.recency || 0) + (localWeights.relevance || 0)) * 100
  );

  const handleSliderChange = (key, val) => {
    const updated = { ...localWeights, [key]: Number(val) / 100 };
    setLocalWeights(updated);
    setWeights(updated); // Real-time live recomputation across the app!
  };

  const handlePreset = (preset) => {
    setLocalWeights(preset);
    setWeights(preset);
  };

  const previewSES = window.SES_ENGINE.computeCandidateSES(ananyaEvidence, localWeights);

  return React.createElement('div', {
    className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'ses-modal-title'
  }, [
    React.createElement('div', {
      key: 'modal-card',
      className: 'sap-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl space-y-5'
    }, [
      // Header
      React.createElement('div', { key: 'hdr', className: 'flex items-start justify-between border-b border-gray-100 dark:border-gray-800 pb-4' }, [
        React.createElement('div', { key: 'title-box' }, [
          React.createElement('div', { key: 'badge-row', className: 'flex items-center gap-2 mb-1' }, [
            React.createElement('span', { key: 'pill', className: 'sap-badge sap-badge-blue' }, 'Explainable Algorithm'),
            React.createElement('span', { key: 'status', className: 'text-xs text-gray-400 font-mono' }, 'v2.4 Dynamic')
          ]),
          React.createElement('h3', { id: 'ses-modal-title', key: 'h3', className: 'text-xl font-bold text-gray-900 dark:text-gray-100' },
            'How Skill Evidence Score (SES) is Calculated'
          ),
          React.createElement('p', { key: 'sub', className: 'text-xs text-gray-500 dark:text-gray-400 mt-0.5' },
            'SES replaces arbitrary institution prestige with a 4-component weighted model. Adjust weights to test impact live.'
          )
        ]),
        React.createElement('button', {
          key: 'close-btn',
          onClick: onClose,
          className: 'p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
          'aria-label': 'Close dialog'
        }, [
          React.createElement('svg', { key: 'x', viewBox: '0 0 24 24', width: '20', height: '20', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }, [
            React.createElement('line', { key: 'l1', x1: '18', y1: '6', x2: '6', y2: '18' }),
            React.createElement('line', { key: 'l2', x1: '6', y1: '6', x2: '18', y2: '18' })
          ])
        ])
      ]),

      // Formula Mathematical Card
      React.createElement('div', {
        key: 'formula-box',
        className: 'p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 font-mono text-xs text-gray-800 dark:text-gray-200'
      }, [
        React.createElement('div', { key: 'f-title', className: 'text-[11px] font-sans font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1' }, 'Scoring Formula'),
        React.createElement('div', { key: 'eq', className: 'font-semibold text-blue-600 dark:text-blue-400' },
          'SES (0–100) = (w_div × Diversity) + (w_perf × Performance) + (w_rec × Recency) + (w_rel × Relevance)'
        ),
        React.createElement('div', { key: 'note', className: 'text-[11px] font-sans text-gray-500 dark:text-gray-400 mt-1' },
          '*Only candidate-authorized evidence items are ingested into the formula.'
        )
      ]),

      // 4 Interactive Sliders
      React.createElement('div', { key: 'sliders-list', className: 'space-y-4 pt-1' }, [
        // Slider 1: Diversity
        React.createElement('div', { key: 's-div', className: 'space-y-1.5' }, [
          React.createElement('div', { className: 'flex justify-between items-center text-xs' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200' }, [
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-[#0070F2]' }),
              '1. Evidence Diversity'
            ]),
            React.createElement('span', { className: 'font-mono font-bold text-[#0070F2]' }, `${Math.round(localWeights.diversity * 100)}%`)
          ]),
          React.createElement('input', {
            type: 'range',
            min: 5,
            max: 60,
            value: Math.round(localWeights.diversity * 100),
            onChange: (e) => handleSliderChange('diversity', e.target.value),
            className: 'w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#0070F2]'
          }),
          React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-400' },
            'Rewards breadth across 5 formats: Projects, Certifications, Assessments, Hackathons, and Portfolio work.'
          )
        ]),

        // Slider 2: Demonstrated Performance
        React.createElement('div', { key: 's-perf', className: 'space-y-1.5' }, [
          React.createElement('div', { className: 'flex justify-between items-center text-xs' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200' }, [
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-[#0F9D8A]' }),
              '2. Demonstrated Performance'
            ]),
            React.createElement('span', { className: 'font-mono font-bold text-[#0F9D8A]' }, `${Math.round(localWeights.performance * 100)}%`)
          ]),
          React.createElement('input', {
            type: 'range',
            min: 10,
            max: 70,
            value: Math.round(localWeights.performance * 100),
            onChange: (e) => handleSliderChange('performance', e.target.value),
            className: 'w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#0F9D8A]'
          }),
          React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-400' },
            'Measured test percentiles, unit test passing rates, hackathon placement, and verified project code ratings.'
          )
        ]),

        // Slider 3: Recency
        React.createElement('div', { key: 's-rec', className: 'space-y-1.5' }, [
          React.createElement('div', { className: 'flex justify-between items-center text-xs' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200' }, [
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-[#6B4FA3]' }),
              '3. Recency Factor'
            ]),
            React.createElement('span', { className: 'font-mono font-bold text-[#6B4FA3]' }, `${Math.round(localWeights.recency * 100)}%`)
          ]),
          React.createElement('input', {
            type: 'range',
            min: 5,
            max: 50,
            value: Math.round(localWeights.recency * 100),
            onChange: (e) => handleSliderChange('recency', e.target.value),
            className: 'w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#6B4FA3]'
          }),
          React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-400' },
            'Applies exponential decay (λ = 0.06/month) to prioritize fresh or recently exercised capabilities.'
          )
        ]),

        // Slider 4: Role Relevance
        React.createElement('div', { key: 's-rel', className: 'space-y-1.5' }, [
          React.createElement('div', { className: 'flex justify-between items-center text-xs' }, [
            React.createElement('div', { className: 'flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200' }, [
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-[#F58B1F]' }),
              '4. Role Relevance'
            ]),
            React.createElement('span', { className: 'font-mono font-bold text-[#F58B1F]' }, `${Math.round(localWeights.relevance * 100)}%`)
          ]),
          React.createElement('input', {
            type: 'range',
            min: 5,
            max: 50,
            value: Math.round(localWeights.relevance * 100),
            onChange: (e) => handleSliderChange('relevance', e.target.value),
            className: 'w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#F58B1F]'
          }),
          React.createElement('p', { className: 'text-[11px] text-gray-500 dark:text-gray-400' },
            'Evaluates semantic similarity between verified evidence context and target job requirements.'
          )
        ])
      ]),

      // Presets & Live Preview
      React.createElement('div', { key: 'preview-row', className: 'p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4' }, [
        React.createElement('div', { key: 'presets', className: 'flex flex-wrap items-center gap-1.5' }, [
          React.createElement('span', { key: 'lbl', className: 'text-xs text-gray-500 dark:text-gray-400 font-medium' }, 'Presets:'),
          React.createElement('button', {
            key: 'p-def',
            onClick: () => handlePreset({ diversity: 0.25, performance: 0.35, recency: 0.20, relevance: 0.20 }),
            className: 'px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-blue-600'
          }, 'Default (25/35/20/20)'),
          React.createElement('button', {
            key: 'p-perf',
            onClick: () => handlePreset({ diversity: 0.15, performance: 0.55, recency: 0.15, relevance: 0.15 }),
            className: 'px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-blue-600'
          }, 'Performance (55%)'),
          React.createElement('button', {
            key: 'p-div',
            onClick: () => handlePreset({ diversity: 0.40, performance: 0.30, recency: 0.15, relevance: 0.15 }),
            className: 'px-2 py-1 text-xs font-semibold rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-blue-600'
          }, 'Diversity (40%)')
        ]),

        React.createElement('div', { key: 'score-tag', className: 'flex items-center gap-2.5 shrink-0' }, [
          React.createElement('div', { className: 'text-right' }, [
            React.createElement('div', { className: 'text-[10px] text-gray-400 uppercase font-semibold' }, "Ananya's Live SES"),
            React.createElement('div', { className: 'text-xs font-semibold text-gray-700 dark:text-gray-300' }, previewSES.level)
          ]),
          React.createElement('div', {
            className: 'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-sm',
            style: { background: 'linear-gradient(135deg, #0070F2 0%, #0F9D8A 100%)' }
          }, previewSES.sesScore)
        ])
      ]),

      // Actions footer
      React.createElement('div', { key: 'ftr-actions', className: 'flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100 dark:border-gray-800' }, [
        React.createElement('button', {
          key: 'reset-btn',
          onClick: () => handlePreset({ diversity: 0.25, performance: 0.35, recency: 0.20, relevance: 0.20 }),
          className: 'sap-btn-secondary text-xs'
        }, 'Reset Defaults'),
        React.createElement('button', {
          key: 'apply-btn',
          onClick: onClose,
          className: 'sap-btn-primary text-xs'
        }, 'Apply & Close')
      ])
    ])
  ]);
};
