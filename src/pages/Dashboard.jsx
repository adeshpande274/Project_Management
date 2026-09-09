import { Link } from 'react-router-dom';
import { curriculum, totalWeeks, DOMAINS } from '../data/curriculum.js';
import { useProgress } from '../hooks/useProgress.js';

function countDaysInWeek(week) {
  return week.days ? week.days.length : 0;
}

export default function Dashboard() {
  const { progress } = useProgress();

  const totalLessonDays = curriculum.reduce((sum, w) => sum + countDaysInWeek(w), 0);
  const completedCount = Object.keys(progress.completedDays).length;
  const overallPct = totalLessonDays ? Math.round((completedCount / totalLessonDays) * 100) : 0;

  const months = [1, 2, 3, 4];

  return (
    <div className="dashboard">
      <section className="hero">
        <h1>PMP Academy</h1>
        <p className="hero-sub">Your 4-month, 90-min/day journey from PM basics to PMP-ready.</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">{progress.streak}</span>
            <span className="stat-label">Day Streak 🔥</span>
          </div>
          <div className="stat">
            <span className="stat-value">{overallPct}%</span>
            <span className="stat-label">Overall Progress</span>
          </div>
          <div className="stat">
            <span className="stat-value">{completedCount}/{totalLessonDays}</span>
            <span className="stat-label">Sessions Done</span>
          </div>
        </div>
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${overallPct}%` }} />
        </div>
      </section>

      {months.map((m) => (
        <section key={m} className="month-block">
          <h2>Month {m}</h2>
          <div className="week-grid">
            {curriculum
              .filter((w) => w.month === m)
              .map((w) => {
                const dayCount = countDaysInWeek(w);
                const doneInWeek = w.days
                  ? w.days.filter((d) => progress.completedDays[`${w.week}-${d.day}`]).length
                  : 0;
                const locked = dayCount === 0;
                return (
                  <Link
                    key={w.week}
                    to={locked ? '#' : `/week/${w.week}`}
                    className={`week-card ${locked ? 'locked' : ''}`}
                    onClick={(e) => locked && e.preventDefault()}
                  >
                    <div className="week-card-head">
                      <span className="week-badge">Week {w.week}</span>
                      {!locked && <span className="week-progress">{doneInWeek}/{dayCount}</span>}
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.blurb}</p>
                    {locked && <span className="coming-soon">Content added as you progress</span>}
                  </Link>
                );
              })}
          </div>
        </section>
      ))}

      <section className="legend">
        <h4>Domain Legend</h4>
        <div className="legend-items">
          {Object.entries(DOMAINS).map(([key, val]) => (
            <span key={key} className="legend-item" style={{ borderColor: val.color }}>
              {val.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
