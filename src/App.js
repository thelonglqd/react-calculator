import "./index.css";

import React, { useState } from "react";
import {
  CgMathEqual,
  CgMathDivide,
  CgMathMinus,
  CgMathPlus,
  CgClose,
} from "react-icons/cg";

const isASign = (input) => {
  return (
    input.trim() === "+" ||
    input.trim() === "-" ||
    input.trim() === "x" ||
    input.trim() === ":"
  );
};

function App() {
  const [display, setDisplay] = useState([]);

  const handleEqualClick = () => {
    const replaced = display.map((item) => {
      if (item.trim() === "x") return " * ";
      else return item;
    });

    console.log("replaced: ", replaced);
    setDisplay([eval(replaced.join("")) + ""]);
  };

  const handleClear = () => setDisplay([]);

  const handleSignsClick = (sign) => {
    display.length &&
      !isASign(display[display.length - 1]) &&
      setDisplay([...display, ` ${sign} `]);
  };

  const handleNumberClick = (numb) => {
    if (!display.length || isASign(display[display.length - 1])) {
      setDisplay([...display, numb + ""]);
    } else {
      const newDisplay = display;
      newDisplay.splice(
        newDisplay.length - 1,
        1,
        newDisplay[newDisplay.length - 1] + numb
      );
      console.log("newDisplay: ", newDisplay);
      setDisplay([...newDisplay]);
    }
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
        <div onClick={handleEqualClick} className="btn-equal">
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
