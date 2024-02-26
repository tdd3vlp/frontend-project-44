// ! IMPORTS

import readlineSync from 'readline-sync';
import { name, printName } from '../bin/brain-games.js';

// ! VARIABLES

// Generate random number for a new round of game.
export const randomNumber = () => Math.floor(Math.random() * 100 + 1);

// Count correct answers to stop the game
let correctAnswers = 0;

// ! FUNCTIONS

// Ask question with current random number
const askQuestion = (number) => {
  console.log(`Question: ${number}`);
};

// Get user's answer
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Show rules on game start
export const showRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// Throw error
const throwError = (answer) => {
  if (answer === 'yes') {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
    );
  }

  if (answer === 'no') {
    console.log(
      `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`
    );
  }

  if (answer !== 'yes' && answer !== 'no') {
    console.log(`Incorrect input!\nLet's try again, ${name}!`);
  }
};

// Check if user's answer is correct
function validateAnswer(userAnswer, parity) {
  let result;

  // If the input is correct ===>
  if ((userAnswer === 'yes' && parity) || (userAnswer === 'no' && !parity)) {
    result = true;
  } else {
    throwError(userAnswer);
  }

  return result;
}

// Start a new round
export const startNewRound = (number) => {
  const currentNumber = number;
  const parity = currentNumber % 2 === 0;

  //   Check if user has won the game
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }

  //   If the game is continued
  if (correctAnswers < 3) {
    askQuestion(currentNumber);
    const answer = getAnswer();

    if (validateAnswer(answer, parity)) {
      correctAnswers += 1;
      console.log('Correct!');
      startNewRound(randomNumber());
    }
  }
};
