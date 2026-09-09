import { useState } from 'react';
import { renderInline } from '../utils/textFormat.jsx';

const TIERS = [
  { key: 'easy', label: 'Easy', color: '#16a34a' },
  { key: 'intermediate', label: 'Intermediate', color: '#d97706' },
  { key: 'challenging', label: 'Challenging', color: '#dc2626' },
];

function QuestionCard({ question, index }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="pq-card">
      <p className="pq-q">
        {index + 1}. {question.q}
        {question.type === 'numerical' && <span className="pq-type-tag"> 🔢 Numerical</span>}
      </p>
      <button className="btn-secondary" onClick={() => setRevealed((r) => !r)}>
        {revealed ? 'Hide Answer' : 'Reveal Answer & Solution'}
      </button>
      {revealed && (
        <div className="pq-answer">
          <p><strong>Answer:</strong> {renderInline(question.answer)}</p>
          {question.solution && <p className="pq-solution">{renderInline(question.solution)}</p>}
        </div>
      )}
    </div>
  );
}

export default function PracticeQuestions({ questions }) {
  const [tab, setTab] = useState('easy');
  if (!questions) return null;

  return (
    <section className="practice-questions">
      <h4>✍️ Practice Questions — Strengthen Your Concepts</h4>
      <div className="pq-tabs">
        {TIERS.map((t) => (
          <button
            key={t.key}
            className={`pq-tab ${tab === t.key ? 'active' : ''}`}
            style={tab === t.key ? { borderColor: t.color, color: t.color } : undefined}
            onClick={() => setTab(t.key)}
          >
            {t.label} ({(questions[t.key] || []).length})
          </button>
        ))}
      </div>
      <div className="pq-list">
        {(questions[tab] || []).map((q, i) => (
          <QuestionCard key={i} question={q} index={i} />
        ))}
      </div>
    </section>
  );
}
