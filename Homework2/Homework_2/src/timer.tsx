
import  { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const handleReset = () => {
    setTimer(1);
  };

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;