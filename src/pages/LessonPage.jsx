import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { curriculum, DOMAINS } from '../data/curriculum.js';
import { useProgress } from '../hooks/useProgress.js';
import LessonContent from '../components/LessonContent.jsx';
import Flashcards from '../components/Flashcards.jsx';
import Quiz from '../components/Quiz.jsx';
import WorkedExamples from '../components/WorkedExamples.jsx';
import PracticeQuestions from '../components/PracticeQuestions.jsx';
import InterviewPrep from '../components/InterviewPrep.jsx';
import { renderInline } from '../utils/textFormat.jsx';

export default function LessonPage() {
  const { weekNum, dayNum } = useParams();
  const navigate = useNavigate();
  const week = curriculum.find((w) => w.week === Number(weekNum));
  const day = week?.days?.find((d) => d.day === Number(dayNum));
  const { markDayComplete, isDayComplete, recordQuizScore } = useProgress();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [weekNum, dayNum]);

  if (!week || !day) {
    return (
      <div className="lesson-page">
        <Link to="/" className="back-link">← Back to Dashboard</Link>
        <p>Lesson not found.</p>
      </div>
    );
  }

  const domain = DOMAINS[day.domain] || DOMAINS.FOUNDATIONS;
  const nextDay = week.days.find((d) => d.day === day.day + 1);
  const completed = isDayComplete(week.week, day.day);

  const handleQuizFinish = (score, total) => {
    recordQuizScore(week.week, day.day, score, total);
    markDayComplete(week.week, day.day);
  };

  return (
    <div className="lesson-page">
      <Link to={`/week/${week.week}`} className="back-link">← Back to Week {week.week}</Link>

      <header className="lesson-header">
        <span className="domain-tag" style={{ borderColor: domain.color, color: domain.color }}>
          {domain.label}
        </span>
        <h1>Day {day.day}: {day.title}</h1>
        <p className="lesson-meta">⏱ {day.minutes} minutes {completed && '• ✓ Completed'}</p>
      </header>

      <section className="objectives">
        <h4>Learning Objectives</h4>
        <ul>
          {day.objectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      {day.intro && (
        <section className="lesson-intro">
          <p>{renderInline(day.intro)}</p>
        </section>
      )}

      <LessonContent sections={day.sections} />

      <WorkedExamples key={`we-${week.week}-${day.day}`} examples={day.workedExamples} />

      {day.keyTerms && day.keyTerms.length > 0 && (
        <Flashcards key={`${week.week}-${day.day}`} terms={day.keyTerms} />
      )}

      <section className="quiz-section">
        <h4>{day.isTest ? 'Test' : 'Quick Check Quiz'}</h4>
        <Quiz key={`${week.week}-${day.day}`} questions={day.quiz} onFinish={handleQuizFinish} />
      </section>

      <PracticeQuestions key={`pq-${week.week}-${day.day}`} questions={day.practiceQuestions} />

      <InterviewPrep key={`ip-${week.week}-${day.day}`} items={day.interviewPrep} />

      <div className="lesson-footer">
        {!completed && (
          <button className="btn-secondary" onClick={() => markDayComplete(week.week, day.day)}>
            Mark Complete (skip quiz)
          </button>
        )}
        {nextDay ? (
          <button className="btn-primary" onClick={() => navigate(`/week/${week.week}/day/${nextDay.day}`)}>
            Next: Day {nextDay.day} →
          </button>
        ) : (
          <button className="btn-primary" onClick={() => navigate('/')}>
            Back to Dashboard
          </button>
        )}
      </div>
    </div>
  );
}
