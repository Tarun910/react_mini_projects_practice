import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const clear = () => {
    setCount("0");
  };

  return (
    <div>
      <h1>Counter :: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clear}>Clear</button>

      {/* <button onClick={ () => setCount(count + 1)}>+</button>
      <button onClick={ () => setCount(count-1)}>-</button>
      <button onClick={ () => setCount(0)}>clear</button> */}
    </div>
  );
}

export default Counter;





