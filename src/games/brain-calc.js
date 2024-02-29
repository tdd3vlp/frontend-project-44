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

// * Find the result of the given operation
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

// * The Calculator Main Function

const calculator = (firstOperator, operand, secondOperator) => {
  const expression = `${firstOperator} ${operand} ${secondOperator}`;
  const result = calc(firstOperator, operand, secondOperator);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
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
