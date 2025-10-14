import React, { useEffect, useState } from "react";

interface TimerProps {
  min: number;
  className?: string;
  state?: any;
}

const Timer: React.FC<TimerProps> = ({ min, className, state }) => {
  const storageKey = state?.id ? `exam_timer_${state.id}` : null;

  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window === "undefined") return min * 60;

    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved) as number;
      }
    }
    return min * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newVal = prev - 1;
        if (storageKey) {
          localStorage.setItem(storageKey, JSON.stringify(newVal));
        }
        return newVal;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, storageKey]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return <div className={`font-bold ${className}`}>{formatTime(timeLeft)}</div>;
};

export default Timer;
