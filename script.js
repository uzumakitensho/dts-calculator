const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    //
  })
})

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
})

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

const inputNumber = (number) => {
  if(currentNumber === '0'){
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = '';
}

const calculate = () => {
  let result = '';
  switch(calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }

  currentNumber = result;
  calculationOperator = '';
}

