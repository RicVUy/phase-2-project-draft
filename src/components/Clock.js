import React, { useEffect, useState } from 'react';


// fetching data (key!), setInterval, update part of the page outside React
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}

/*function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
} */
export default Clock;
