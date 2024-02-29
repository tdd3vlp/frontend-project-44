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

const findGCD = (a, b) => {
  let GCD;

  if (b === 0) {
    GCD = a;
  } else {
    GCD = findGCD(b, a % b);
  }

  return GCD;
};

const GCD = (a, b) => {
  const expression = `${a} ${b}`;
  const result = findGCD(a, b);

  isWon(correctAnswers);

  if (correctAnswers < 3) {
    askQuestion(expression);
    const userAnswer = +getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      GCD(getRandomNumber(), getRandomNumber());
    }
  }
};

export default GCD;
