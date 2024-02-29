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

// * Find the parity of the given number

const findParity = (number) => {
  let isEven = "";

  if (number % 2 === 0) {
    isEven = "yes";
  } else {
    isEven = "no";
  }

  return isEven;
};

// * The Parity Main Function

const parity = (a) => {
  const result = findParity(a);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
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
