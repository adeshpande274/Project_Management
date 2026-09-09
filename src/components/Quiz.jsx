import { useState } from 'react';

export default function Quiz({ questions, onFinish }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const select = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = questions.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);

  const submit = () => {
    setSubmitted(true);
    onFinish?.(score, questions.length);
  };

  return (
    <div className="quiz">
      {questions.map((q, i) => (
        <div key={i} className="quiz-question">
          <p className="quiz-q-text">
            {i + 1}. {q.q}
          </p>
          <div className="quiz-options">
            {q.options.map((opt, j) => {
              const isSelected = answers[i] === j;
              const isCorrect = submitted && j === q.answer;
              const isWrongSelected = submitted && isSelected && j !== q.answer;
              return (
                <button
                  key={j}
                  className={
                    'quiz-option' +
                    (isSelected && !submitted ? ' selected' : '') +
                    (isCorrect ? ' correct' : '') +
                    (isWrongSelected ? ' wrong' : '')
                  }
                  onClick={() => select(i, j)}
                  disabled={submitted}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="quiz-explain">
              {answers[i] === q.answer ? '✅ Correct. ' : '❌ '}
              {q.explain}
            </p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button
          className="btn-primary"
          onClick={submit}
          disabled={Object.keys(answers).length < questions.length}
        >
          Submit Answers
        </button>
      ) : (
        <div className="quiz-result">
          Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
        </div>
      )}
    </div>
  );
}
