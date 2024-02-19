#!/usr/bin/env node

// ! IMPORTS

import readlineSync from 'readline-sync';
import { name, printName } from './brain-games.js';

// ! VARIABLES

let correctAnswers = 0;

// ! FUNCTIONS
// Generate random number for a new round of game.
const randomNumber = () => Math.floor(Math.random() * 100 + 1);

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
const showRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// Check if user's answer is correct
const checkValidity = (userAnswer, parity) => {
  // Check if user has entered an invalid answer
  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(`Incorrect input!\nLet's try again, ${name}!`);

    // If the input is correct ===>
  } else if (
    (userAnswer === 'yes' && parity) ||
    (userAnswer === 'no' && !parity)
  ) {
    correctAnswers += 1;
    console.log('Correct!');

    // => Continue game with a new round
    newRound(randomNumber());

    // => Or show the correct answer
  } else {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
    );
  }
};

// Start a new round
const newRound = (number) => {
  const currentNumber = number;
  const isEven = currentNumber % 2 === 0;

  //   Check if user has won the game
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }

  //   If not
  if (correctAnswers < 3) {
    askQuestion(currentNumber);
    const answer = getAnswer();

    checkValidity(answer, isEven);
  }
};

// Start a new game
printName(name);

// Show rules
showRules();
newRound(randomNumber());
