let result = document.getElementById('result');
let expression = '';

function appendNumber(num) {
  expression += num;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function calculateResult() {
  try {
    result.value = eval(expression);
    expression = '';
  } catch (error) {
    result.value = 'Error';
    expression = '';
  }
}

function clearResult() {
  result.value = '';
  expression = '';
}