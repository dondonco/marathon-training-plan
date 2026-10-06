import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ScatterChart, Scatter, ZAxis,
  BarChart, Bar
} from 'recharts';

const INITIAL_ENTRIES = [];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function paceToSeconds(paceStr) {
  // "5:30" => 330 seconds
  if (!paceStr) return null;
  const parts = paceStr.split(':');
  if (parts.length !== 2) return null;
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function secondsToPace(s) {
  if (!s) return '';
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function calcPace(distKm, timeStr) {
  // timeStr: "HH:MM:SS" or "MM:SS"
  if (!distKm || !timeStr) return '';
  const parts = timeStr.split(':').map(Number);
  let totalSec = 0;
  if (parts.length === 3) totalSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
  else if (parts.length === 2) totalSec = parts[0] * 60 + parts[1];
  else return '';
  const paceSecPerKm = totalSec / distKm;
  return secondsToPace(Math.round(paceSecPerKm));
}

function timeToMinutes(timeStr) {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 60 + parts[1] + parts[2] / 60;
  if (parts.length === 2) return parts[0] + parts[1] / 60;
  return 0;
}

export default function RunningLog() {
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    distance: '',
    time: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [chartType, setChartType] = useState('pace');
  const [sortField, setSortField] = useState('date');
  const [sortDir, setSortDir] = useState('desc');
  const [editId, setEditId] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.date) e.date = 'Date is required';
    if (!form.distance || isNaN(form.distance) || +form.distance <= 0) e.distance = 'Enter a valid distance in km';
    if (!form.time || !/^\d{1,2}:\d{2}(:\d{2})?$/.test(form.time)) e.time = 'Enter time as MM:SS or HH:MM:SS';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const pace = calcPace(parseFloat(form.distance), form.time);
    const entry = {
      id: editId || generateId(),
      date: form.date,
      distance: parseFloat(form.distance),
      time: form.time,
      pace,
      notes: form.notes,
    };
    if (editId) {
      setEntries(prev => prev.map(en => en.id === editId ? entry : en));
      setEditId(null);
    } else {
      setEntries(prev => [entry, ...prev]);
    }
    setForm({ date: new Date().toISOString().split('T')[0], distance: '', time: '', notes: '' });
  };

  const handleEdit = (entry) => {
    setEditId(entry.id);
    setForm({ date: entry.date, distance: String(entry.distance), time: entry.time, notes: entry.notes });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setEntries(prev => prev.filter(e => e.id !== id));
    if (editId === id) { setEditId(null); setForm({ date: new Date().toISOString().split('T')[0], distance: '', time: '', notes: '' }); }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm({ date: new Date().toISOString().split('T')[0], distance: '', time: '', notes: '' });
    setErrors({});
  };

  const sorted = useMemo(() => {
    return [...entries].sort((a, b) => {
      let av = a[sortField], bv = b[sortField];
      if (sortField === 'pace') { av = paceToSeconds(av) || 9999; bv = paceToSeconds(bv) || 9999; }
      if (sortField === 'distance' || sortField === 'distance') { av = +av; bv = +bv; }
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [entries, sortField, sortDir]);

  // Chart data: sorted by date ascending
  const chartData = useMemo(() => {
    return [...entries]
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((e, i) => ({
        ...e,
        run: i + 1,
        paceNum: paceToSeconds(e.pace),
        timeMin: timeToMinutes(e.time),
        label: `${e.date} (${e.distance}km)`,
      }));
  }, [entries]);

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('asc'); }
  };

  const stats = useMemo(() => {
    if (!entries.length) return null;
    const totalKm = entries.reduce((s, e) => s + e.distance, 0);
    const avgDist = totalKm / entries.length;
    const paces = entries.map(e => paceToSeconds(e.pace)).filter(Boolean);
    const avgPaceSec = paces.length ? paces.reduce((s, p) => s + p, 0) / paces.length : null;
    const bestPaceSec = paces.length ? Math.min(...paces) : null;
    const longest = Math.max(...entries.map(e => e.distance));
    return { totalKm: totalKm.toFixed(1), avgDist: avgDist.toFixed(1), avgPace: avgPaceSec ? secondsToPace(Math.round(avgPaceSec)) : '—', bestPace: bestPaceSec ? secondsToPace(bestPaceSec) : '—', longest, runs: entries.length };
  }, [entries]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0]?.payload;
    return (
      <div className="chart-tooltip">
        <p className="tooltip-date">{d?.date}</p>
        <p>Distance: <strong>{d?.distance} km</strong></p>
        <p>Time: <strong>{d?.time}</strong></p>
        <p>Pace: <strong>{d?.pace}/km</strong></p>
        {d?.notes && <p className="tooltip-notes">"{d.notes}"</p>}
      </div>
    );
  };

  return (
    <div className="running-log">
      <h2 className="section-title">Running Log &amp; Progress</h2>

      {/* Stats summary */}
      {stats && (
        <div className="stats-grid">
          <div className="stat-card"><span className="stat-label">Total Runs</span><span className="stat-big">{stats.runs}</span></div>
          <div className="stat-card"><span className="stat-label">Total Distance</span><span className="stat-big">{stats.totalKm} km</span></div>
          <div className="stat-card"><span className="stat-label">Longest Run</span><span className="stat-big">{stats.longest} km</span></div>
          <div className="stat-card"><span className="stat-label">Avg Pace</span><span className="stat-big">{stats.avgPace}/km</span></div>
          <div className="stat-card best"><span className="stat-label">Best Pace</span><span className="stat-big">{stats.bestPace}/km</span></div>
          <div className="stat-card"><span className="stat-label">Avg Distance</span><span className="stat-big">{stats.avgDist} km</span></div>
        </div>
      )}

      {/* Input form */}
      <div className="log-form-card">
        <h3>{editId ? '✏️ Edit Entry' : '➕ Log a Run'}</h3>
        <form onSubmit={handleSubmit} className="log-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))} className={errors.date ? 'error' : ''} />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>
            <div className="form-group">
              <label>Distance (km)</label>
              <input type="number" step="0.01" min="0.1" placeholder="e.g. 10.5" value={form.distance} onChange={e => setForm(f => ({...f, distance: e.target.value}))} className={errors.distance ? 'error' : ''} />
              {errors.distance && <span className="form-error">{errors.distance}</span>}
            </div>
            <div className="form-group">
              <label>Time (MM:SS or HH:MM:SS)</label>
              <input type="text" placeholder="e.g. 52:30 or 1:45:00" value={form.time} onChange={e => setForm(f => ({...f, time: e.target.value}))} className={errors.time ? 'error' : ''} />
              {errors.time && <span className="form-error">{errors.time}</span>}
            </div>
          </div>
          <div className="form-group full-width">
            <label>Notes (optional)</label>
            <textarea placeholder="How did it go? Felt strong, tired, weather conditions, route..." value={form.notes} onChange={e => setForm(f => ({...f, notes: e.target.value}))} rows={2} />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">{editId ? 'Update Entry' : 'Log Run'}</button>
            {editId && <button type="button" className="btn-secondary" onClick={handleCancelEdit}>Cancel</button>}
          </div>
        </form>
      </div>

      {/* Charts */}
      {entries.length > 0 && (
        <div className="charts-section">
          <div className="charts-tabs">
            <h3>Progress Charts</h3>
            <div className="chart-type-tabs">
              {[
                { id: 'pace', label: '⚡ Pace Over Time' },
                { id: 'distance', label: '📏 Distance Over Time' },
                { id: 'volume', label: '📊 Weekly Volume' },
              ].map(t => (
                <button key={t.id} className={`chart-tab${chartType === t.id ? ' active' : ''}`} onClick={() => setChartType(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="chart-wrapper">
            {chartType === 'pace' && (
              <>
                <p className="chart-note">Lower pace = faster. Trend line shows improvement over time.</p>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis
                      tickFormatter={(v) => secondsToPace(v)}
                      domain={['auto', 'auto']}
                      tick={{ fontSize: 11 }}
                      label={{ value: 'min/km', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="paceNum" name="Pace (min/km)" stroke="#ef4444" strokeWidth={2} dot={{ r: 4, fill: '#ef4444' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}

            {chartType === 'distance' && (
              <>
                <p className="chart-note">Distance of each run over time.</p>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} label={{ value: 'km', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="distance" name="Distance (km)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}

            {chartType === 'volume' && (
              <WeeklyVolumeChart entries={entries} />
            )}
          </div>
        </div>
      )}

      {/* Log table */}
      {entries.length > 0 && (
        <div className="log-table-section">
          <h3>Run History ({entries.length} runs)</h3>
          <div className="table-wrapper">
            <table className="log-table">
              <thead>
                <tr>
                  {['date', 'distance', 'time', 'pace'].map(f => (
                    <th key={f} onClick={() => handleSort(f)} className="sortable">
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                      {sortField === f && <span>{sortDir === 'asc' ? ' ↑' : ' ↓'}</span>}
                    </th>
                  ))}
                  <th>Notes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(entry => (
                  <tr key={entry.id} className={editId === entry.id ? 'editing' : ''}>
                    <td>{entry.date}</td>
                    <td><strong>{entry.distance} km</strong></td>
                    <td>{entry.time}</td>
                    <td>
                      <span className="pace-badge">{entry.pace}/km</span>
                    </td>
                    <td className="notes-cell">{entry.notes || <span className="muted">—</span>}</td>
                    <td>
                      <button className="icon-btn edit" onClick={() => handleEdit(entry)} title="Edit">✏️</button>
                      <button className="icon-btn delete" onClick={() => handleDelete(entry.id)} title="Delete">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {entries.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🏃</div>
          <h3>No runs logged yet</h3>
          <p>Log your first run above to start tracking your progress!</p>
        </div>
      )}
    </div>
  );
}

function WeeklyVolumeChart({ entries }) {
  // Group by ISO week
  const weekMap = {};
  entries.forEach(e => {
    const d = new Date(e.date);
    const week = getISOWeek(d);
    const key = `${d.getFullYear()}-W${week.toString().padStart(2,'0')}`;
    weekMap[key] = (weekMap[key] || 0) + e.distance;
  });
  const data = Object.entries(weekMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, km]) => ({ week, km: parseFloat(km.toFixed(1)) }));

  return (
    <>
      <p className="chart-note">Total km run per ISO week.</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="week" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} label={{ value: 'km', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
          <Tooltip formatter={(v) => [`${v} km`, 'Volume']} />
          <Bar dataKey="km" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
