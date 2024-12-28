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
