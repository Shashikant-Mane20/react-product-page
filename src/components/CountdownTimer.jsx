import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-gray-700">
        Time left: <span className="text-black">{formatTime(timeLeft)}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-cyan-300 h-2 rounded-full"
          style={{
            width: `${(timeLeft / initialTime) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CountdownTimer;
