import { useState } from "react";
const Calculator = () => {
  const [data, setData] = useState("");

  const calculation = () => {
    setData(eval(data).toString());
  };

  const remove = () => {
    setData(data.slice(0, -1));
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
          <button onClick={getValue} value="(">
            (
          </button>
          <button onClick={getValue} value=")">
            )
          </button>
          <button onClick={getValue} value="%">
            %
          </button>
          <button onClick={clear}>AC</button>
        </div>
        <div className="row">
          <button onClick={getValue} value="7">
            7
          </button>
          <button onClick={getValue} value="8">
            8
          </button>
          <button onClick={getValue} value="9">
            9
          </button>
          <button onClick={getValue} value="*">
            *
          </button>
        </div>
        <div className="row">
          <button onClick={getValue} value="1">
            1
          </button>
          <button onClick={getValue} value="2">
            2
          </button>
          <button onClick={getValue} value="3">
            3
          </button>
          <button onClick={getValue} value="+">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={getValue} value="0">
            0
          </button>
          <button onClick={remove} value="x">
            x
          </button>
          <button onClick={calculation}>=</button>
          <button onClick={getValue} value="/">
            /
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
