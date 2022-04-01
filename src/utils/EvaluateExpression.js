const EvaluateExpression = (value, resultValue) =>  {
  if (value === "=") {
    return String(eval(resultValue));
  }
  if (value === "DEL") {
    return resultValue.slice(0, -1);
  }
  return resultValue.concat(value);  
};
export default EvaluateExpression;
