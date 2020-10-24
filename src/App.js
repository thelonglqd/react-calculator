import "./index.css";

import {
  CgMathEqual,
  CgMathDivide,
  CgMathMinus,
  CgMathPlus,
  CgClose,
} from "react-icons/cg";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="display"></div>
        <div className="btn-clear">CLEAR</div>
        <div className="btn-equal">
          <CgMathEqual size="30" color="white" />
        </div>
        <div className="btn-add">
          <CgMathPlus size="30" color="white" />
        </div>
        <div className="btn-minus">
          <CgMathMinus size="30" color="white" />
        </div>
        <div className="btn-multiply">
          <CgClose size="30" color="white" />
        </div>
        <div className="btn-divide">
          <CgMathDivide size="30" color="white" />
        </div>
        <div className="btn-number btn0">0</div>
        <div className="btn-number btn1">1</div>
        <div className="btn-number btn2">2</div>
        <div className="btn-number btn3">3</div>
        <div className="btn-number btn4">4</div>
        <div className="btn-number btn5">5</div>
        <div className="btn-number btn6">6</div>
        <div className="btn-number btn7">7</div>
        <div className="btn-number btn8">8</div>
        <div className="btn-number btn9">9</div>
      </div>
    </div>
  );
}

export default App;
