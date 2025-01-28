import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;






import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}