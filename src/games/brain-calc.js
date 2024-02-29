import {
  getRandomNumber,
  askQuestion,
  getAnswer,
  isWon,
  checkResult,
} from "../index.js";

// ! Variables

const operands = ["+", "-", "*"];
let correctAnswers = 0;

// ! Functions

export const getRandomOperand = () =>
  operands[Math.floor(Math.random() * operands.length)];

function calc(firstOperator, operand, secondOperator) {
  let result = 0;

  if (operand === "+") {
    result = firstOperator + secondOperator;
  }

  if (operand === "-") {
    result = firstOperator - secondOperator;
  }

  if (operand === "*") {
    result = firstOperator * secondOperator;
  }

  return result;
}

const calculator = (firstOperator, operand, secondOperator) => {
  const expression = `${firstOperator} ${operand} ${secondOperator}`;
  const result = calc(firstOperator, operand, secondOperator);

  isWon(correctAnswers);

  if (correctAnswers < 3) {
    askQuestion(expression);
    const userAnswer = +getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      calculator(getRandomNumber(), getRandomOperand(), getRandomNumber());
    }
  }
};

export default calculator;
