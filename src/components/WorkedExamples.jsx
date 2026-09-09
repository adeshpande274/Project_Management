import { useState } from 'react';
import { renderInline } from '../utils/textFormat.jsx';

export default function WorkedExamples({ examples }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!examples || examples.length === 0) return null;

  return (
    <section className="worked-examples">
      <h4>📘 Worked Examples</h4>
      {examples.map((ex, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className="worked-example-card">
            <p className="we-title">Example {i + 1}: {ex.title}</p>
            <p className="we-problem">{renderInline(ex.problem)}</p>
            <button className="btn-secondary" onClick={() => setOpenIndex(open ? null : i)}>
              {open ? 'Hide Solution' : 'Show Step-by-Step Solution'}
            </button>
            {open && (
              <div className="we-solution">
                <ol>
                  {ex.steps.map((step, j) => (
                    <li key={j}>{renderInline(step)}</li>
                  ))}
                </ol>
                <p className="we-answer">✅ Answer: {renderInline(ex.answer)}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
