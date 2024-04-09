import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'What number is missing in the progression?';
const createProgression = (length) => {
  const result = [];

  const step = generateRandomNumber(5);
  const start = generateRandomNumber(10);

  for (let i = start; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const startProgressionGame = () => {
  startGame(rule, () => {
    const progression = createProgression(10);
    const extractedNumberIndex = Math.floor(Math.random() * progression.length);
    const extractedNumber = progression.splice(extractedNumberIndex, 1, '..');

    const question = progression.join(' ');
    const correctAnswer = parseInt(extractedNumber.join(''), 10);

    return [question, String(correctAnswer)];
  });
};

export default startProgressionGame;
