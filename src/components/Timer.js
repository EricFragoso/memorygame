import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(interval);
      onTimeUp();
    }

    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  return <div className="text-xl font-bold">{`Time Left: ${time}s`}</div>;
};

export default Timer;
