import { useState } from "react";

import Title from '../components/common/Title';
import Display from "../components/calculator/Display";
import Keyboard from "../components/calculator/Keyboard";

import EvaluateExpression from "../utils/EvaluateExpression";
import { arrayOperators as operators, arrayDigits as digits } from '../data/keys';

function Calculator() {
  const [resultValue, setResultValue] = useState("");
  const handleClick = (value) => setResultValue(EvaluateExpression(value, resultValue));

  return (
    <div className=" text-center mx-auto overflow-hidden mt-10  mb-2 bg-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-500  shadow-xl border rounded-lg md:w-3/6 sm:w-4/6">
      <Title title="Calculator" />
      <Display value={resultValue} />
      <Keyboard onClickKey={handleClick} data={{ operators, digits }} />
    </div>
  );
}

export default Calculator;