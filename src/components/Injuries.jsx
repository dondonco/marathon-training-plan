import { useState } from 'react';
import { INJURIES, BODY_REGIONS } from '../data/injuries';

// ─── SVG Human Body Diagram ───────────────────────────────────────────────────
function BodyDiagram({ selectedRegion, onRegionClick, injuryCounts }) {
  const regionColor = (regionId) => {
    const count = injuryCounts[regionId] || 0;
    if (selectedRegion === regionId) return '#ef4444';
    if (count > 0) return '#fb923c';
    return '#cbd5e1';
  };

  const labelColor = (regionId) => selectedRegion === regionId ? '#fff' : '#374151';

  // Map region IDs to SVG element styles
  const r = (id) => ({
    fill: regionColor(id),
    cursor: 'pointer',
    transition: 'fill 0.2s',
  });

  return (
    <div className="body-diagram-wrap">
      <svg viewBox="0 0 200 420" className="body-svg" aria-label="Human body diagram for injury selection">
        {/* ── Head ── */}
        <ellipse cx="100" cy="30" rx="22" ry="26" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

        {/* ── Neck ── */}
        <rect x="90" y="54" width="20" height="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* ── Torso / Upper Body ── */}
        <g onClick={() => onRegionClick('upper_body')} style={{ cursor: 'pointer' }}>
          <rect x="68" y="70" width="64" height="75" rx="8"
            style={r('upper_body')} stroke={selectedRegion === 'upper_body' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="112" textAnchor="middle" fontSize="8" fontWeight="600" fill={labelColor('upper_body')}>Upper</text>
          <text x="100" y="122" textAnchor="middle" fontSize="8" fontWeight="600" fill={labelColor('upper_body')}>Body</text>
        </g>

        {/* ── Lower Back (overlapping lower torso) ── */}
        <g onClick={() => onRegionClick('lower_back')} style={{ cursor: 'pointer' }}>
          <rect x="72" y="138" width="56" height="30" rx="6"
            style={r('lower_back')} stroke={selectedRegion === 'lower_back' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="157" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('lower_back')}>Lower Back</text>
        </g>

        {/* ── Pelvis / Hip-Glute area ── */}
        <g onClick={() => onRegionClick('hip')} style={{ cursor: 'pointer' }}>
          <rect x="68" y="168" width="64" height="34" rx="8"
            style={r('hip')} stroke={selectedRegion === 'hip' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="189" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('hip')}>Hip &amp; Glute</text>
        </g>

        {/* ── Left Thigh ── */}
        <g onClick={() => onRegionClick('thigh')} style={{ cursor: 'pointer' }}>
          <rect x="70" y="202" width="26" height="55" rx="10"
            style={r('thigh')} stroke={selectedRegion === 'thigh' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
        </g>

        {/* ── Right Thigh ── */}
        <g onClick={() => onRegionClick('thigh')} style={{ cursor: 'pointer' }}>
          <rect x="104" y="202" width="26" height="55" rx="10"
            style={r('thigh')} stroke={selectedRegion === 'thigh' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="232" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('thigh')}>Thigh</text>
        </g>

        {/* ── Left Knee ── */}
        <g onClick={() => onRegionClick('knee')} style={{ cursor: 'pointer' }}>
          <ellipse cx="83" cy="265" rx="16" ry="12"
            style={r('knee')} stroke={selectedRegion === 'knee' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
        </g>

        {/* ── Right Knee ── */}
        <g onClick={() => onRegionClick('knee')} style={{ cursor: 'pointer' }}>
          <ellipse cx="117" cy="265" rx="16" ry="12"
            style={r('knee')} stroke={selectedRegion === 'knee' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="268" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('knee')}>Knee</text>
        </g>

        {/* ── Left Shin/Calf ── */}
        <g onClick={() => onRegionClick('shin')} style={{ cursor: 'pointer' }}>
          <rect x="71" y="278" width="24" height="60" rx="10"
            style={r('shin')} stroke={selectedRegion === 'shin' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
        </g>

        {/* ── Right Shin/Calf ── */}
        <g onClick={() => onRegionClick('shin')} style={{ cursor: 'pointer' }}>
          <rect x="105" y="278" width="24" height="60" rx="10"
            style={r('shin')} stroke={selectedRegion === 'shin' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="313" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('shin')}>Shin/Calf</text>
        </g>

        {/* ── Left Ankle ── */}
        <g onClick={() => onRegionClick('ankle')} style={{ cursor: 'pointer' }}>
          <rect x="72" y="338" width="22" height="18" rx="6"
            style={r('ankle')} stroke={selectedRegion === 'ankle' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
        </g>

        {/* ── Right Ankle ── */}
        <g onClick={() => onRegionClick('ankle')} style={{ cursor: 'pointer' }}>
          <rect x="106" y="338" width="22" height="18" rx="6"
            style={r('ankle')} stroke={selectedRegion === 'ankle' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="351" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('ankle')}>Ankle</text>
        </g>

        {/* ── Left Foot ── */}
        <g onClick={() => onRegionClick('foot')} style={{ cursor: 'pointer' }}>
          <ellipse cx="80" cy="368" rx="16" ry="10"
            style={r('foot')} stroke={selectedRegion === 'foot' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
        </g>

        {/* ── Right Foot ── */}
        <g onClick={() => onRegionClick('foot')} style={{ cursor: 'pointer' }}>
          <ellipse cx="120" cy="368" rx="16" ry="10"
            style={r('foot')} stroke={selectedRegion === 'foot' ? '#ef4444' : '#94a3b8'} strokeWidth="1.5" />
          <text x="100" y="390" textAnchor="middle" fontSize="7.5" fontWeight="600" fill={labelColor('foot')}>Foot</text>
        </g>

        {/* ── Arms ── */}
        <rect x="32" y="72" width="34" height="68" rx="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="134" y="72" width="34" height="68" rx="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      </svg>

      {/* Legend */}
      <div className="body-legend">
        <div className="legend-item"><span className="legend-swatch" style={{ background: '#fb923c' }} />Has injuries</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: '#ef4444' }} />Selected</div>
        <div className="legend-item"><span className="legend-swatch" style={{ background: '#cbd5e1' }} />No injuries</div>
      </div>
    </div>
  );
}

// ─── Injury Card ──────────────────────────────────────────────────────────────
function InjuryCard({ injury, isSelected, onSelect }) {
  return (
    <div
      className={`injury-card${isSelected ? ' selected' : ''}`}
      onClick={onSelect}
    >
      <div className="injury-card-header">
        <span className="injury-icon">{injury.icon}</span>
        <div className="injury-card-title">
          <h4>{injury.name}</h4>
          <span className="injury-body-part">{injury.bodyPart}</span>
        </div>
        <span className={`prevalence-badge ${injury.prevalence.toLowerCase().replace(/ /g, '-').split('—')[0].trim()}`}>
          {injury.prevalence}
        </span>
      </div>
    </div>
  );
}

// ─── Cross-Training Option Banner ─────────────────────────────────────────────
function CrossTrainingBanner() {
  return (
    <div className="cross-train-banner">
      <div className="cross-train-icon">🚴</div>
      <div>
        <h4>Injured? Maintain Fitness with Cross-Training</h4>
        <p>Most running injuries allow cardio cross-training. Options by injury severity:</p>
        <div className="cross-train-options">
          <div className="ct-option"><span className="ct-label">Pool Running / Aqua Jogging</span><span className="ct-desc">Best replacement — mimics exact running motion, zero impact. Use flotation belt in deep water.</span></div>
          <div className="ct-option"><span className="ct-label">Stationary / Road Cycling</span><span className="ct-desc">Excellent for most lower-limb injuries. Avoid if knee pain is severe or if bone stress fracture of foot/ankle.</span></div>
          <div className="ct-option"><span className="ct-label">Swimming</span><span className="ct-desc">Full-body non-impact cardio. Ideal for stress fractures, shin splints, plantar fasciitis.</span></div>
          <div className="ct-option"><span className="ct-label">Elliptical / Cross-Trainer</span><span className="ct-desc">Low-impact but some residual knee/hip load. Good for mild lower limb injuries.</span></div>
          <div className="ct-option"><span className="ct-label">Rowing Machine</span><span className="ct-desc">Good for upper-body and core. Avoid if lower back or knee pain is acute.</span></div>
        </div>
      </div>
    </div>
  );
}

// ─── Injury Detail Panel ──────────────────────────────────────────────────────
function InjuryDetail({ injury }) {
  const [openSection, setOpenSection] = useState('causes');

  const sections = [
    { id: 'causes', label: '⚡ Causes & Risk Factors' },
    { id: 'acute', label: '🧊 Acute Management (First Aid)' },
    { id: 'rehab', label: '💪 Rehab Exercises' },
    { id: 'prevention', label: '🛡 Prevention' },
    { id: 'return', label: '🏃 Return to Run' },
  ];

  return (
    <div className="injury-detail">
      <div className="injury-detail-header">
        <span className="injury-detail-icon">{injury.icon}</span>
        <div>
          <h2 className="injury-detail-name">{injury.name}</h2>
          <p className="injury-detail-location">📍 {injury.bodyPart}</p>
          <span className={`prevalence-badge ${injury.prevalence.toLowerCase().replace(/ /g, '-').split('—')[0].trim()} large`}>
            {injury.prevalence}
          </span>
        </div>
      </div>

      {/* Symptoms */}
      <div className="injury-symptoms">
        <h4>Symptoms</h4>
        <p>{injury.symptoms}</p>
      </div>

      {/* Accordion sections */}
      <div className="injury-accordion">
        {sections.map(sec => (
          <div key={sec.id} className={`accordion-item${openSection === sec.id ? ' open' : ''}`}>
            <button
              className="accordion-trigger"
              onClick={() => setOpenSection(openSection === sec.id ? null : sec.id)}
            >
              <span>{sec.label}</span>
              <span className="accordion-arrow">{openSection === sec.id ? '▲' : '▼'}</span>
            </button>
            {openSection === sec.id && (
              <div className="accordion-body">
                {sec.id === 'causes' && (
                  <ul className="bullet-list">
                    {injury.causes.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                )}
                {sec.id === 'acute' && (
                  <ul className="bullet-list">
                    {injury.acuteManagement.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                )}
                {sec.id === 'rehab' && (
                  <div className="rehab-exercises">
                    {injury.rehabExercises.map((ex, i) => (
                      <div key={i} className="rehab-exercise-card">
                        <div className="rehab-exercise-header">
                          <span className="rehab-exercise-number">{i + 1}</span>
                          <div>
                            <h5 className="rehab-exercise-name">{ex.name}</h5>
                            <span className="rehab-sets-badge">{ex.sets}</span>
                          </div>
                        </div>
                        <p className="rehab-cue">{ex.cue}</p>
                      </div>
                    ))}
                  </div>
                )}
                {sec.id === 'prevention' && (
                  <ul className="bullet-list">
                    {injury.preventionTips.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                )}
                {sec.id === 'return' && (
                  <div className="return-to-run-section">
                    <p className="return-timeline">{injury.returnToRun}</p>
                    <div className="see-doctor-box">
                      <span className="doctor-icon">🏥</span>
                      <div>
                        <strong>When to See a Doctor / Sports PT</strong>
                        <p>{injury.seeDoctor}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Injuries Component ──────────────────────────────────────────────────
export default function Injuries() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedInjury, setSelectedInjury] = useState(null);

  // Count injuries per region for coloring the diagram
  const injuryCounts = INJURIES.reduce((acc, inj) => {
    acc[inj.region] = (acc[inj.region] || 0) + 1;
    return acc;
  }, {});

  const filteredInjuries = selectedRegion
    ? INJURIES.filter(i => i.region === selectedRegion)
    : INJURIES;

  const handleRegionClick = (regionId) => {
    setSelectedRegion(prev => prev === regionId ? null : regionId);
    setSelectedInjury(null);
  };

  const handleInjurySelect = (injury) => {
    setSelectedInjury(prev => prev?.id === injury.id ? null : injury);
  };

  const selectedRegionLabel = selectedRegion
    ? BODY_REGIONS.find(r => r.id === selectedRegion)?.label
    : null;

  return (
    <div className="injuries-page">
      <div className="injuries-intro">
        <h2 className="section-title">🩺 Running Injuries Guide</h2>
        <p className="injuries-subtitle">
          Evidence-based injury information for runners — causes, sports PT rehab protocols, recovery timelines, and prevention strategies.
          Click a body region on the diagram or browse all injuries below.
        </p>
      </div>

      <CrossTrainingBanner />

      <div className="injuries-main-layout">
        {/* Left: Body Diagram + Region Filter */}
        <aside className="injuries-sidebar">
          <div className="body-diagram-card">
            <h3>Tap Body Region</h3>
            <BodyDiagram
              selectedRegion={selectedRegion}
              onRegionClick={handleRegionClick}
              injuryCounts={injuryCounts}
            />
            {/* Region buttons */}
            <div className="region-buttons">
              <button
                className={`region-btn${!selectedRegion ? ' active' : ''}`}
                onClick={() => { setSelectedRegion(null); setSelectedInjury(null); }}
              >
                All Regions
              </button>
              {BODY_REGIONS.map(r => (
                <button
                  key={r.id}
                  className={`region-btn${selectedRegion === r.id ? ' active' : ''}`}
                  onClick={() => handleRegionClick(r.id)}
                >
                  {r.label}
                  <span className="region-count">{injuryCounts[r.id] || 0}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right: Injury List + Detail */}
        <div className="injuries-content">
          {/* Injury list */}
          <div className="injury-list-section">
            <h3 className="injury-list-title">
              {selectedRegionLabel ? `${selectedRegionLabel} Injuries` : 'All Running Injuries'}
              <span className="injury-count-badge">{filteredInjuries.length}</span>
            </h3>
            <div className="injury-cards-grid">
              {filteredInjuries.map(inj => (
                <InjuryCard
                  key={inj.id}
                  injury={inj}
                  isSelected={selectedInjury?.id === inj.id}
                  onSelect={() => handleInjurySelect(inj)}
                />
              ))}
            </div>
          </div>

          {/* Injury detail */}
          {selectedInjury && (
            <InjuryDetail injury={selectedInjury} />
          )}

          {!selectedInjury && (
            <div className="injury-select-prompt">
              <div className="prompt-icon">👆</div>
              <p>Select an injury above to see detailed rehab protocol, exercises, and recovery timeline</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
