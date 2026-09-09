import { Link, useParams } from 'react-router-dom';
import { curriculum, DOMAINS } from '../data/curriculum.js';
import { useProgress } from '../hooks/useProgress.js';

export default function WeekPage() {
  const { weekNum } = useParams();
  const week = curriculum.find((w) => w.week === Number(weekNum));
  const { isDayComplete, getQuizScore } = useProgress();

  if (!week || !week.days) {
    return (
      <div className="week-page">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <p>This week's content isn't published yet.</p>
      </div>
    );
  }

  return (
    <div className="week-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      <h1>Week {week.week}: {week.title}</h1>
      <p className="week-blurb">{week.blurb}</p>

      <div className="day-list">
        {week.days.map((d) => {
          const done = isDayComplete(week.week, d.day);
          const quizScore = getQuizScore(week.week, d.day);
          const domain = DOMAINS[d.domain] || DOMAINS.FOUNDATIONS;
          return (
            <Link key={d.day} to={`/week/${week.week}/day/${d.day}`} className="day-card">
              <div className="day-card-left">
                <span className="day-number">Day {d.day}</span>
                <h3>{d.title}</h3>
                <span className="domain-tag" style={{ borderColor: domain.color, color: domain.color }}>
                  {domain.label}
                </span>
              </div>
              <div className="day-card-right">
                <span className="day-minutes">{d.minutes} min</span>
                {done && <span className="done-badge">✓ Done</span>}
                {quizScore && (
                  <span className="quiz-score-badge">
                    {quizScore.score}/{quizScore.total}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
