import {
  getRandomNumber,
  askQuestion,
  getAnswer,
  isWon,
  checkResult,
} from '../index.js';

// ! Variables

let correctAnswers = 0;

// ! Functions

const checkPrimality = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrime = (number) => {
  let result = '';

  if (checkPrimality(number)) {
    result = 'yes';
  } else {
    result = 'no';
  }

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    askQuestion(number);
    const userAnswer = getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      isPrime(getRandomNumber(100));
    }
  }
};

export default isPrime;
