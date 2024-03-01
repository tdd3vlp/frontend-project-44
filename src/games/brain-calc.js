import {
  getRandomNumber,
  askQuestion,
  getAnswer,
  isWon,
  checkResult,
} from '../index.js';

// ! Variables

const operands = ['+', '-', '*'];
let correctAnswers = 0;

// ! Functions

export function getRandomOperand() {
  return operands[Math.floor(Math.random() * operands.length)];
}

// * Find the result of the given operation
function getResult(firstOperator, operand, secondOperator) {
  let result = 0;

  if (operand === '+') {
    result = firstOperator + secondOperator;
  }

  if (operand === '-') {
    result = firstOperator - secondOperator;
  }

  if (operand === '*') {
    result = firstOperator * secondOperator;
  }

  return result;
}

// * The Calculator Main Function

const calculator = (firstOperator, operand, secondOperator) => {
  const expression = `${firstOperator} ${operand} ${secondOperator}`;
  const result = getResult(firstOperator, operand, secondOperator);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    askQuestion(expression);
    const userAnswer = +getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      calculator(getRandomNumber(10), getRandomOperand(), getRandomNumber(10));
    }
  }
};

export default calculator;
