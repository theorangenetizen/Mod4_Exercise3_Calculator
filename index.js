const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = evaluateExpression(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

  if (!/^\d+([+\-*/]\d+)*$/.test(expression)) {
    throw new Error("Invalid expression");
  }

  return new Function("return " + expression)();
}
