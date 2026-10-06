const TYPE_COLORS = {
  'Rest':         { bg: '#f1f5f9', border: '#cbd5e1', text: '#64748b', dot: '#94a3b8' },
  'Easy Run':     { bg: '#f0fdf4', border: '#86efac', text: '#166534', dot: '#22c55e' },
  'Tempo':        { bg: '#fffbeb', border: '#fcd34d', text: '#92400e', dot: '#f59e0b' },
  'Intervals':    { bg: '#fef2f2', border: '#fca5a5', text: '#991b1b', dot: '#ef4444' },
  'Long Run':     { bg: '#eff6ff', border: '#93c5fd', text: '#1e3a8a', dot: '#3b82f6' },
  'Strength':     { bg: '#f5f3ff', border: '#c4b5fd', text: '#4c1d95', dot: '#8b5cf6' },
  'Race Day':     { bg: '#fdf2f8', border: '#f0abfc', text: '#701a75', dot: '#ec4899' },
  'Cross-Train':  { bg: '#f0fdfa', border: '#5eead4', text: '#0f4c3a', dot: '#14b8a6' },
  'Strides':      { bg: '#fff7ed', border: '#fdba74', text: '#7c2d12', dot: '#f97316' },
  'Hill Repeats': { bg: '#fefce8', border: '#fde047', text: '#713f12', dot: '#a16207' },
  'Active Recovery': { bg: '#f0fdfa', border: '#99f6e4', text: '#0f4c3a', dot: '#14b8a6' },
};

const DAYS_FULL = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeeklyCalendar({ week, planWeeks }) {
  const colors = (type) => TYPE_COLORS[type] || { bg: '#f9fafb', border: '#e5e7eb', text: '#374151', dot: '#6b7280' };

  return (
    <div className="weekly-calendar">
      <div className="calendar-header">
        <div className="calendar-week-label">
          <h3>Week {week.week} of {planWeeks}</h3>
          <span className="calendar-theme">{week.theme}</span>
        </div>
        <div className="calendar-legend">
          {Object.entries(TYPE_COLORS).slice(0,5).map(([type, c]) => (
            <span key={type} className="legend-item">
              <span className="legend-dot" style={{ background: c.dot }} />
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="calendar-grid">
        {week.days.map((dayData, idx) => {
          const c = colors(dayData.type);
          const isRace = dayData.type === 'Race Day';
          return (
            <div
              key={idx}
              className={`day-card${isRace ? ' race-day' : ''}`}
              style={{ background: c.bg, borderColor: c.border }}
            >
              <div className="day-header">
                <span className="day-name">{DAYS_FULL[idx]}</span>
                <span className="day-badge" style={{ background: c.dot, color: '#fff' }}>
                  {dayData.type}
                </span>
              </div>

              <div className="day-workout">{dayData.workout}</div>

              {dayData.details && (
                <div className="day-details" style={{ color: c.text }}>{dayData.details}</div>
              )}

              <div className="day-stats">
                {dayData.distance && (
                  <span className="stat-chip">
                    <span>📍</span> {dayData.distance} km
                  </span>
                )}
                {dayData.pace && (
                  <span className="stat-chip">
                    <span>⏱</span> {dayData.pace}
                  </span>
                )}
              </div>

              {isRace && (
                <div className="race-banner">🏁 Race Day!</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Weekly summary */}
      <div className="week-summary">
        <div className="summary-stat">
          <span className="stat-label">Total km this week</span>
          <span className="stat-value">
            {week.days.reduce((sum, d) => sum + (d.distance || 0), 0).toFixed(1)} km
          </span>
        </div>
        <div className="summary-stat">
          <span className="stat-label">Workout days</span>
          <span className="stat-value">
            {week.days.filter(d => d.type !== 'Rest').length} / 7
          </span>
        </div>
        <div className="summary-stat">
          <span className="stat-label">Rest days</span>
          <span className="stat-value">
            {week.days.filter(d => d.type === 'Rest').length}
          </span>
        </div>
        <div className="summary-stat">
          <span className="stat-label">Quality sessions</span>
          <span className="stat-value">
            {week.days.filter(d => ['Intervals', 'Tempo', 'Hill Repeats'].includes(d.type)).length}
          </span>
        </div>
      </div>
    </div>
  );
}
