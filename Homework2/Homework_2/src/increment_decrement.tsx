import  { useState } from 'react';

const CounterBy = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIncrement = () => {
    const incrementValue = parseFloat(inputValue) || 1; 
    if (incrementValue < 0) return; 
    if (isNaN(incrementValue)) {
      setErrorMessage('The input is not a number, please change it.');
    } else {
      setErrorMessage('');
      setCounter(counter + incrementValue);
    }
  };

  const handleDecrement = () => {
    const decrementValue = parseFloat(inputValue) || 1; 
    if (decrementValue < 0) return; 
    if (isNaN(decrementValue)) {
      setErrorMessage('The input is not a number, please change it.');
    } else {
      setErrorMessage('');
      setCounter(counter - decrementValue);
    }
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter increment/decrement value"
      />
      <button onClick={handleIncrement} disabled={parseFloat(inputValue) < 0}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={parseFloat(inputValue) < 0}>
        Decrement
      </button>
      {errorMessage && (
        <div style={{ color: 'white', backgroundColor: 'red' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default CounterBy;