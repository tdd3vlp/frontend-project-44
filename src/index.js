import readlineSync from "readline-sync";

import { name } from "../bin/brain-games.js";

export { name };

// ! Functions

export const getRandomNumber = () => Math.floor(Math.random() * 10 + 1);

export const showRules = (text) => console.log(text);

export const askQuestion = (argument) => console.log(`Question: ${argument}`);

export const getAnswer = () => {
  const answer = readlineSync.question("Your answer: ");

  return answer;
};

export const isWon = (correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
