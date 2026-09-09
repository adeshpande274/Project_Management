import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'pmp-academy-progress-v1';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completedDays: {}, quizScores: {}, lastVisit: null, streak: 0 };
  } catch {
    return { completedDays: {}, quizScores: {}, lastVisit: null, streak: 0 };
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function dayKey(week, day) {
  return `${week}-${day}`;
}

function isConsecutiveDay(prevISO, nowISO) {
  if (!prevISO) return false;
  const prev = new Date(prevISO);
  const now = new Date(nowISO);
  const diffDays = Math.round((now - prev) / 86400000);
  return diffDays === 1;
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markVisit = useCallback(() => {
    setProgress((prev) => {
      const today = new Date().toDateString();
      if (prev.lastVisit === today) return prev;
      const streak = isConsecutiveDay(prev.lastVisit, today) ? prev.streak + 1 : 1;
      return { ...prev, lastVisit: today, streak };
    });
  }, []);

  const markDayComplete = useCallback((week, day) => {
    setProgress((prev) => ({
      ...prev,
      completedDays: { ...prev.completedDays, [dayKey(week, day)]: true },
    }));
  }, []);

  const isDayComplete = useCallback(
    (week, day) => Boolean(progress.completedDays[dayKey(week, day)]),
    [progress.completedDays]
  );

  const recordQuizScore = useCallback((week, day, score, total) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [dayKey(week, day)]: { score, total, at: new Date().toISOString() } },
    }));
  }, []);

  const getQuizScore = useCallback(
    (week, day) => progress.quizScores[dayKey(week, day)] || null,
    [progress.quizScores]
  );

  const resetProgress = useCallback(() => {
    const fresh = { completedDays: {}, quizScores: {}, lastVisit: null, streak: 0 };
    setProgress(fresh);
  }, []);

  return { progress, markVisit, markDayComplete, isDayComplete, recordQuizScore, getQuizScore, resetProgress };
}
