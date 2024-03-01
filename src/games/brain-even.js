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

const isEven = (number) => {
  let result = "";

  if (number % 2 === 0) {
    result = "yes";
  } else {
    result = "no";
  }

  return result;
};

// * The Parity Main Function

const parityCheck = (a) => {
  const result = isEven(a);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    askQuestion(a);
    const userAnswer = getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      parityCheck(getRandomNumber(100));
    }
  }
};

export default parityCheck;
