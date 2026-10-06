import { useState, useMemo } from 'react';
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from '../data/glossary';

const CATEGORY_COLORS = {
  "Pace":             { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af' },
  "Training Type":    { bg: '#f0fdf4', border: '#86efac', text: '#166534' },
  "Race Strategy":    { bg: '#fef3c7', border: '#fcd34d', text: '#92400e' },
  "Physiology":       { bg: '#f5f3ff', border: '#c4b5fd', text: '#4c1d95' },
  "Workout":          { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412' },
  "Volume":           { bg: '#fef2f2', border: '#fecaca', text: '#991b1b' },
  "Form & Equipment": { bg: '#f0fdfa', border: '#99f6e4', text: '#0f4c3a' },
  "Form & Drills":    { bg: '#fdf4ff', border: '#e9d5ff', text: '#6b21a8' },
  "Nutrition":        { bg: '#fdfce9', border: '#fef08a', text: '#713f12' },
  "Injury & Recovery":{ bg: '#fff1f2', border: '#fecdd3', text: '#9f1239' },
  "Training":         { bg: '#f0f9ff', border: '#bae6fd', text: '#0c4a6e' },
  "Race":             { bg: '#fdf2f8', border: '#fbcfe8', text: '#831843' },
};

function CategoryBadge({ category }) {
  const c = CATEGORY_COLORS[category] || { bg: '#f1f5f9', border: '#cbd5e1', text: '#475569' };
  return (
    <span
      className="glossary-category-badge"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
    >
      {category}
    </span>
  );
}

function GlossaryCard({ term }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`glossary-card${expanded ? ' expanded' : ''}`} onClick={() => setExpanded(e => !e)}>
      <div className="glossary-card-header">
        <div className="glossary-term-row">
          <h4 className="glossary-term">{term.term}</h4>
          <CategoryBadge category={term.category} />
        </div>
        <span className="glossary-expand-icon">{expanded ? '▲' : '▼'}</span>
      </div>
      <p className={`glossary-definition${expanded ? '' : ' clamped'}`}>{term.definition}</p>
      {expanded && term.example && (
        <div className="glossary-example">
          <span className="glossary-example-label">Example:</span>
          <span className="glossary-example-text">{term.example}</span>
        </div>
      )}
    </div>
  );
}

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return GLOSSARY_TERMS.filter(t => {
      const matchCat = activeCategory === 'All' || t.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  // Unique categories that have entries
  const availableCategories = useMemo(() => {
    const set = new Set(GLOSSARY_TERMS.map(t => t.category));
    return GLOSSARY_CATEGORIES.filter(c => c === 'All' || set.has(c));
  }, []);

  return (
    <div className="glossary-page">
      <div className="glossary-header">
        <h2 className="section-title">📖 Running Glossary</h2>
        <p className="glossary-subtitle">
          Definitions for every running term, abbreviation, and training concept used in this app and in the wider running world.
        </p>
      </div>

      {/* Search */}
      <div className="glossary-search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search terms or definitions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="glossary-search-input"
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* Category filters */}
      <div className="glossary-category-filters">
        {availableCategories.map(cat => (
          <button
            key={cat}
            className={`glossary-cat-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {cat !== 'All' && (
              <span className="cat-count">
                {GLOSSARY_TERMS.filter(t => t.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="glossary-stats-bar">
        <span>Showing <strong>{filtered.length}</strong> of {GLOSSARY_TERMS.length} terms</span>
        {(search || activeCategory !== 'All') && (
          <button
            className="clear-filters-btn"
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Terms list */}
      {filtered.length > 0 ? (
        <div className="glossary-terms-list">
          {filtered.map(t => (
            <GlossaryCard key={t.term} term={t} />
          ))}
        </div>
      ) : (
        <div className="glossary-empty">
          <div className="empty-icon">🔍</div>
          <h3>No terms found</h3>
          <p>Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
