import { useState } from 'react';
import TrainingPlans from './components/TrainingPlans';
import RunningLog from './components/RunningLog';
import Injuries from './components/Injuries';
import Glossary from './components/Glossary';
import './App.css';

const TABS = [
  { id: 'plans',    label: '🏃 Training Plans'        },
  { id: 'log',      label: '📝 Running Log'            },
  { id: 'injuries', label: '🩺 Injuries'               },
  { id: 'glossary', label: '📖 Glossary'               },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('plans');

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-logo">
            <span className="logo-icon">🏅</span>
            <div>
              <h1>Runner Training Plan</h1>
              <p>Coach-designed plans for every distance &amp; runner</p>
            </div>
          </div>
          <nav className="app-nav">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`nav-btn${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="app-main">
        {activeTab === 'plans'    && <TrainingPlans />}
        {activeTab === 'log'      && <RunningLog />}
        {activeTab === 'injuries' && <Injuries />}
        {activeTab === 'glossary' && <Glossary />}
      </main>
    </div>
  );
}
