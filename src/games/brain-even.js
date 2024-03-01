import {
  getRandomNumber,
  nextQuestion,
  isWon,
  checkResult,
} from '../index.js';

// ! Variables

let correctAnswers = 0;

// ! Functions

// * Find the parity of the given number

const isEven = (number) => {
  let result = '';

  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return result;
};

// * The Parity Main Function

const parityCheck = (number) => {
  const result = isEven(number);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    const userAnswer = nextQuestion(number);

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      parityCheck(getRandomNumber(60));
    }
  }
};

export default parityCheck;
