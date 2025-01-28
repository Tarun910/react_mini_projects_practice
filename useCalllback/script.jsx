import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

// Use React.memo to prevent unnecessary re-renders
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Child component re-rendered");
  return <button onClick={onIncrement}>Child Increment</button>;
});

export default ParentComponent;
