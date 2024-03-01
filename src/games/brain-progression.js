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

const createProgression = (length) => {
  const progression = [];

  const step = getRandomNumber(5);
  const start = getRandomNumber(10);

  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }

  return progression;
};

const arithmeticProgression = () => {
  const progression = createProgression(10);
  const index = Math.floor(Math.random() * progression.length);
  const extracted = progression.splice(index, 1, "..");
  const result = parseInt(extracted.join(""), 10);
  const question = progression.join(" ");

  // Check if the game is won
  isWon(correctAnswers);

  // Else do the following...
  if (correctAnswers < 3) {
    askQuestion(question);
    const userAnswer = +getAnswer();

    if (checkResult(userAnswer, result)) {
      correctAnswers += 1;
      arithmeticProgression();
    }
  }
};

export default arithmeticProgression;
