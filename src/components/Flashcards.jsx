import { useState } from 'react';

export default function Flashcards({ terms }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!terms || terms.length === 0) return null;
  const card = terms[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % terms.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + terms.length) % terms.length);
  };

  return (
    <div className="flashcards">
      <h4>Key Terms Flashcards ({index + 1}/{terms.length})</h4>
      <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
        {flipped ? card.def : card.term}
        <span className="flashcard-hint">{flipped ? '(definition — click to flip back)' : '(click to reveal definition)'}</span>
      </div>
      <div className="flashcard-nav">
        <button className="btn-secondary" onClick={prev}>← Prev</button>
        <button className="btn-secondary" onClick={next}>Next →</button>
      </div>
    </div>
  );
}
