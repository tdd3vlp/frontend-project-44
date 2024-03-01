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

// * Find the greatest common divisor of two numbers

const findGCD = (a, b) => {
  let GCD;

  if (b === 0) {
    GCD = a;
  } else {
    GCD = findGCD(b, a % b);
  }

  return GCD;
};

// * The Greatest Common Divisor Main Function

const greatestCommonDivisor = (a, b) => {
  const expression = `${a} ${b}`;
  const result = findGCD(a, b);

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    askQuestion(expression);
    const userAnswer = +getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      greatestCommonDivisor(getRandomNumber(20), getRandomNumber(20));
    }
  }
};

export default greatestCommonDivisor;
