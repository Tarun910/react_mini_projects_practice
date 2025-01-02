// import React, {useState} from 'react';

// function Counter(){

// const [count, setCount] = useState(0);

// const increment = () => {
//     setCount(count + 1);
// }

// const decrement = () => {
//     setCount(count -1);
// }

// const reset  = () => {
//     setCount(0);
// }

//     count = 0;
//     return(
//         <div>
//             <h1>Counter is {count}</h1>
//             <button onClick={ increment}>Increment</button>
//             <button onClick={ decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// }
// export default Counter;

//Calculator Project

// import React, { useState } from 'react';

// function Counter(){
//    const [count, setCount] = setCount(0);

//    //functions
//    const Increament = () => {
//     setCount(count+1);
//    }

//    const Decrement = () => {
//     setCount(count-1);
//    }

//    const Reset = () => {
//     setCount(0);
//    }

//     return(
//         <div>
//             <h1>Counter is {count}</h1>
//             {/* <button>{Increament}</button>
//             <button>{Decrement}</button>
//             <button>{Reset}</button> */}

//             <button onClick = { () => setCount(count+1)}>increament</button>
//             <button onClick = { () => setCount(count-1)}>decrement</button>
//             <button onClick = { () => setCount(0)}>reset</button>

//         </div>
//     );
// }

// export default Counter;

// Color Picker
// import React from 'react'

// function ColorPicker() {
//     const [color, setColor] = useState('ffffff');
//     return(
//         <>
//             <h1>Choose your Color</h1>
//             <input
//             type='color'
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//             />
//             <h2 onChange={() => setColor(color)}> You Choosed {color} Color!</h2>

//             <div>
//                 style={{backgroundColor: color,
//                     height: "100px", widht: "100px"}}
//             </div>

//             </>
//     );
// }

// export default ColorPicker;

//Calculator App

import { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");

  const calculation = () => {
    setData(eval(data).toString());
  };

  const clear = () => {
    setData("");
  };

  const getValue = (event) => {
    console.log(event.target.value);
    setData(data.concat(event.target.value));
  };

  return (
    <>
      <div className="container">
        <div>
          <input placeholder="00" value={data} readOnly></input>
        </div>
        <div className="row">
          <button onClick={getValue} value="1">
            1
          </button>
          <button onClick={clear}>clear</button>
          <button onClick={calculation}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
