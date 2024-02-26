import {
  name,
  getRandomNumber,
  askQuestion,
  getAnswer,
  isWon,
} from "../index.js";

// ! Variables

let correctAnswers = 0;

// ! Functions

const throwError = (answer) => {
  if (answer === "yes") {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
    );
  }

  if (answer === "no") {
    console.log(
      `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`,
    );
  }

  if (answer !== "yes" && answer !== "no") {
    console.log(`Incorrect input!\nLet's try again, ${name}!`);
  }
};

function checkResult(userAnswer, parity) {
  let isValidated = false;

  if ((userAnswer === "yes" && parity) || (userAnswer === "no" && !parity)) {
    console.log("Correct!");
    correctAnswers += 1;
    isValidated = true;
  } else {
    throwError(userAnswer);
  }

  return isValidated;
}

const checkParity = (number) => {
  const currentNumber = number;
  const parity = currentNumber % 2 === 0;

  isWon(correctAnswers);

  if (correctAnswers < 3) {
    askQuestion(currentNumber);
    const userAnswer = getAnswer();

    if (checkResult(userAnswer, parity)) {
      checkParity(getRandomNumber());
    }
  }
};

export default checkParity;
