import {
  getRandomNumber,
  askQuestion,
  getAnswer,
  isWon,
  checkResult,
} from "../index.js";

// ! Variables

let correctAnswers = 0;

// ! Functions

const findParity = (number) => {
  let isEven = "";

  if (number % 2 === 0) {
    isEven = "yes";
  } else {
    isEven = "no";
  }

  return isEven;
};

const parity = (a) => {
  const result = findParity(a);

  isWon(correctAnswers);

  if (correctAnswers < 3) {
    askQuestion(a);
    const userAnswer = getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      parity(getRandomNumber());
    }
  }
};

export default parity;
