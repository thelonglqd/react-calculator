import "./index.css";

import React, { useState, useCallback, useEffect } from "react";
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

const validNumberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const validSignKeys = ["+", "-", "*", ":", "=", "Enter"];

function App() {
  const [display, setDisplay] = useState([]);

  const handleEqualClick = useCallback(() => {
    const formartter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    if (!display.length) return;

    const replaced = display.map((item) => {
      if (item.trim() === "x") return " * ";
      if (item.trim() === ":") return " / ";
      return item;
    });

    setDisplay([formartter.format(eval(replaced.join("")))]);
  }, [display]);

  const handleClear = () => setDisplay([]);

  const handleSignsClick = useCallback(
    (sign) => {
      display.length &&
        !isASign(display[display.length - 1]) &&
        setDisplay([...display, ` ${sign} `]);
    },
    [display]
  );

  const handleNumberClick = useCallback(
    (numb) => {
      if (!display.length || isASign(display[display.length - 1])) {
        setDisplay([...display, numb + ""]);
      } else {
        const newDisplay = display;
        newDisplay.splice(
          newDisplay.length - 1,
          1,
          newDisplay[newDisplay.length - 1] + numb
        );
        setDisplay([...newDisplay]);
      }
    },
    [display]
  );

  useEffect(() => {
    const keyboardInputListener = ({ key }) => {
      console.log("key: ", key);
      if ([...validNumberKeys, ...validSignKeys].indexOf(key) >= 0) {
        switch (key) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "0":
            handleNumberClick(key);
            break;
          case "+":
          case "-":
          case "*":
          case "/":
            handleSignsClick(key);
            break;
          case "=":
          case "Enter":
            handleEqualClick();
            break;
          default:
            return;
        }
      }
    };
    window.addEventListener("keyup", keyboardInputListener);

    return () => {
      window.removeEventListener("keyup", keyboardInputListener);
    };
  }, [handleNumberClick, handleSignsClick, handleEqualClick]);

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
