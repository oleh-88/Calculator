function addToResult(value) {
    result.value += value;
  }
  
  function clearResult() {
    result.value = "";
  }
  
  function calculateResult() {
    let expression = result.value;
    let operators = ["+", "-", "*", "/", "%", "sin", "cos", "tan", "sqrt", "^"];
    let operator = null;
  
    for (let i = 0; i < operators.length; i++) {
      if (expression.indexOf(operators[i]) > -1) {
        operator = operators[i];
        break;
      }
    }
  
    let operands = expression.split(operator);
    if (operands.length < 2) {
      return null;
    }
  
    let operand1 = parseFloat(operands[0]);
    let operand2 = parseFloat(operands[1]);
  
    switch (operator) {
      case "+":
        result.value = operand1 + operand2;
        break;
      case "-":
        result.value = operand1 - operand2;
        break;
      case "*":
        result.value = operand1 * operand2;
        break;
      case "/":
        result.value = operand1 / operand2;
        break;
      case "%":
        let percent = operand2 / 100;
        result.value = operand1 * percent;
        break;
      case "sin":
        result.value = Math.sin(operand1);
        break;
      case "cos":
        result.value = Math.cos(operand1);
        break;
      case "tan":
        result.value = Math.tan(operand1);
        break;
      case "sqrt":
        result.value = Math.sqrt(operand1);
        break;
      case "^":
        result.value = operand1 ** 2;
        break;
    }
  }