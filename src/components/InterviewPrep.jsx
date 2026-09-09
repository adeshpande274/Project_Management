import { useState } from 'react';
import { renderInline } from '../utils/textFormat.jsx';

export default function InterviewPrep({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  if (!items || items.length === 0) return null;

  return (
    <section className="interview-prep">
      <h4>💼 Interview Angle — How This Comes Up in Job Interviews</h4>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className="interview-card">
            <button className="interview-q" onClick={() => setOpenIndex(open ? null : i)}>
              {open ? '▾' : '▸'} {item.q}
            </button>
            {open && <p className="interview-a">{renderInline(item.a)}</p>}
          </div>
        );
      })}
    </section>
  );
}
