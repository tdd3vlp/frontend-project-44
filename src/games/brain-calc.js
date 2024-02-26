import { name } from "../../bin/brain-games.js";

import { getRandomNumber, askQuestion, getAnswer, isWon } from "../index.js";

// ! Variables

const operands = ["+", "-", "*"];
let correctAnswers = 0;

// ! Functions

export const getRandomOperand = () =>
  operands[Math.floor(Math.random() * operands.length)];

const throwError = (answer, result) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
  );
};

function checkResult(answer, result) {
  let isValidated = false;

  if (Number(answer) === result) {
    console.log("Correct!");
    correctAnswers += 1;
    isValidated = true;
  } else {
    throwError(answer, result);
  }

  return isValidated;
}

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
    const userAnswer = getAnswer();

    if (checkResult(userAnswer, result)) {
      calculator(getRandomNumber(), getRandomOperand(), getRandomNumber());
    }
  }
};

export default calculator;
