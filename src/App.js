import "./index.css";

import React, { useState } from "react";
import {
  CgMathEqual,
  CgMathDivide,
  CgMathMinus,
  CgMathPlus,
  CgClose,
} from "react-icons/cg";

function App() {
  const [display, setDisplay] = useState([]);

  const calculate = () => {};

  const handleClear = () => setDisplay([]);

  const handleSignsClick = (sign) => {
    sign === "=" ? calculate() : setDisplay([...display, ` ${sign} `]);
  };

  const handleNumberClick = (numb) => {
    setDisplay([...display, numb + ""]);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="display">
          <div className="inner-display">{display.join("")}</div>
        </div>
        <div onClick={handleClear} className="btn-clear">
          CLEAR
        </div>
        <div onClick={() => handleSignsClick("=")} className="btn-equal">
          <CgMathEqual size="30" color="white" />
        </div>
        <div onClick={() => handleSignsClick("+")} className="btn-add">
          <CgMathPlus size="30" color="white" />
        </div>
        <div onClick={() => handleSignsClick("-")} className="btn-minus">
          <CgMathMinus size="30" color="white" />
        </div>
        <div onClick={() => handleSignsClick("x")} className="btn-multiply">
          <CgClose size="30" color="white" />
        </div>
        <div onClick={() => handleSignsClick(":")} className="btn-divide">
          <CgMathDivide size="30" color="white" />
        </div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((numb) => (
          <div
            onClick={() => handleNumberClick(numb)}
            key={numb}
            className={`btn-number btn${numb}`}
          >
            {numb}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
