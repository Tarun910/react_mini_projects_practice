import React, { useState, useMemo } from 'react';

function ExpensiveCalculationExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 1000;
  }, [count]); // Recalculates only when `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />
    </div>
  );
}

export default ExpensiveCalculationExample;
