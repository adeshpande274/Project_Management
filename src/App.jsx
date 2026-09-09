import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard.jsx';
import WeekPage from './pages/WeekPage.jsx';
import LessonPage from './pages/LessonPage.jsx';
import { useProgress } from './hooks/useProgress.js';
import './App.css';

export default function App() {
  const { markVisit } = useProgress();

  useEffect(() => {
    markVisit();
  }, [markVisit]);

  return (
    <HashRouter>
      <nav className="topnav">
        <Link to="/" className="brand">🎓 PMP Academy</Link>
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/week/:weekNum" element={<WeekPage />} />
          <Route path="/week/:weekNum/day/:dayNum" element={<LessonPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
