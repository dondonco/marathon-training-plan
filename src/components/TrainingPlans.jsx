import { useState } from 'react';
import { DISTANCES, LEVELS, getPlansByDistanceAndLevel, getPlanById } from '../data/trainingPlans';
import WeeklyCalendar from './WeeklyCalendar';

export default function TrainingPlans() {
  const [selectedDistance, setSelectedDistance] = useState('5k');
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const plans = getPlansByDistanceAndLevel(selectedDistance, selectedLevel);
  const activePlan = selectedPlanId ? getPlanById(selectedPlanId) : (plans[0] || null);

  const handleDistanceChange = (distId) => {
    setSelectedDistance(distId);
    setSelectedPlanId(null);
    setSelectedWeek(1);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    setSelectedPlanId(null);
    setSelectedWeek(1);
  };

  const handlePlanChange = (planId) => {
    setSelectedPlanId(planId);
    setSelectedWeek(1);
  };

  const currentPlans = getPlansByDistanceAndLevel(selectedDistance, selectedLevel);
  const currentPlan = selectedPlanId
    ? getPlanById(selectedPlanId)
    : (currentPlans[0] || null);

  const weekData = currentPlan?.weeklyPlan?.find(w => w.week === selectedWeek);

  return (
    <div className="training-plans">
      {/* Distance selector */}
      <section className="selector-section">
        <h2 className="section-title">Select Race Distance</h2>
        <div className="distance-grid">
          {DISTANCES.map(dist => (
            <button
              key={dist.id}
              className={`distance-card${selectedDistance === dist.id ? ' active' : ''}`}
              onClick={() => handleDistanceChange(dist.id)}
            >
              <span className="distance-km">{dist.label}</span>
              <span className="distance-sub">{dist.km} km</span>
            </button>
          ))}
        </div>
      </section>

      {/* Level selector */}
      <section className="selector-section">
        <h2 className="section-title">Fitness Level</h2>
        <div className="level-tabs">
          {LEVELS.map(lvl => (
            <button
              key={lvl.id}
              className={`level-tab${selectedLevel === lvl.id ? ' active' : ''}`}
              onClick={() => handleLevelChange(lvl.id)}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </section>

      {/* Sub-category / Plan selector */}
      {currentPlans.length > 0 ? (
        <section className="selector-section">
          <h2 className="section-title">Goal / Sub-Category</h2>
          <div className="subcategory-list">
            {currentPlans.map(plan => (
              <button
                key={plan.id}
                className={`subcategory-card${(currentPlan?.id === plan.id) ? ' active' : ''}`}
                onClick={() => handlePlanChange(plan.id)}
              >
                <span className="sub-cat-badge">{plan.subCategory}</span>
                <span className="sub-cat-weeks">{plan.weeks} weeks</span>
                <span className="sub-cat-prereq">{plan.prerequisite}</span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <div className="no-plans">
          <p>No plans available for this combination yet. Try a different level or distance.</p>
        </div>
      )}

      {/* Plan detail */}
      {currentPlan && (
        <section className="plan-detail">
          <div className="plan-header">
            <div>
              <h2 className="plan-title">{currentPlan.label} — {currentPlan.subCategory}</h2>
              <p className="plan-meta">
                <span className="badge badge-level">{currentPlan.level}</span>
                <span className="badge badge-weeks">{currentPlan.weeks} weeks</span>
              </p>
              <p className="plan-description">{currentPlan.description}</p>
              <p className="plan-prereq">
                <strong>Prerequisite:</strong> {currentPlan.prerequisite}
              </p>
            </div>
          </div>

          {/* Week selector */}
          <div className="week-nav">
            <h3>Training Weeks</h3>
            <div className="week-chips">
              {currentPlan.weeklyPlan.map(w => (
                <button
                  key={w.week}
                  className={`week-chip${selectedWeek === w.week ? ' active' : ''}`}
                  onClick={() => setSelectedWeek(w.week)}
                >
                  <span>W{w.week}</span>
                  <span className="week-theme-chip">{w.theme}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Weekly calendar */}
          {weekData && (
            <WeeklyCalendar week={weekData} planWeeks={currentPlan.weeks} />
          )}
        </section>
      )}
    </div>
  );
}
