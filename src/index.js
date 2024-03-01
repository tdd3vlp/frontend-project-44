import readlineSync from "readline-sync";

import { name } from "../bin/brain-games.js";

// ! Functions

export const getRandomNumber = (limit) => Math.floor(Math.random() * limit + 1);

export const showRules = (text) => console.log(text);

export const askQuestion = (argument) => console.log(`Question: ${argument}`);

export const getAnswer = () => {
  const answer = readlineSync.question("Your answer: ");

  return answer;
};

export const throwError = (answer, result) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
  );
};

export function checkResult(answer, result) {
  let isValidated = false;

  if (answer === result) {
    console.log("Correct!");
    isValidated = true;
  } else {
    throwError(answer, result);
  }

  return isValidated;
}

export const isWon = (correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
