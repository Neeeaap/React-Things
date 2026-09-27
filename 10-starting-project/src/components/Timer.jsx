import { useEffect, useState } from "react";

export default function Timer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timerTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <progress
      className={mode}
      id="question-time"
      max={timeout}
      value={remainingTime}
    />
  );
}
