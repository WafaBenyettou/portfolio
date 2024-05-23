import React, { useState, useEffect } from 'react';

function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-widget bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{time.toLocaleTimeString()}</h2>
      <p className="text-sm">{time.toDateString()}</p>
    </div>
  );
}

export default ClockWidget;
