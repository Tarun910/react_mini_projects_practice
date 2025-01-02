import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("ffffff");
  return (
    <>
      <h1>Choose your color!</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div
        style={{ backgroundColor: color, height: "100px", width: "100px" }}
      ></div>
    </>
  );
}

export default ColorPicker;



// added one more feature

/*
import React, {useState} from 'react'

function colorPicker () {
    const [color, setColor] = useState('orange')
    
    return(
        <>
        <div>
            <h1>which color you want to choose?</h1>
            <input
                type ='text'
                value={color}
                onChange = {(e) => setColor(e.target.value)}
                />
        <h3>So, you have choosed : {color} Color!</h3>
        </div>
            <div style={{
            backgroundColor : color,
            height: "100px",
            width:"100px"
            }} >

                
            
            </div>
        </>
    );
}


export default colorPicker;
/*