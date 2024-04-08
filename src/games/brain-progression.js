import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const startProgressionGame = () => {
  startGame('What number is missing in the progression?', () => {
    const createProgression = (length) => {
      const result = [];

      const step = generateRandomNumber(5);
      const start = generateRandomNumber(10);

      for (let i = start; result.length < length; i += step) {
        result.push(i);
      }

      return result;
    };

    const progression = createProgression(10);
    const extractedNumberIndex = Math.floor(Math.random() * progression.length);
    const extractedNumber = progression.splice(extractedNumberIndex, 1, '..');

    const correctAnswer = parseInt(extractedNumber.join(''), 10);
    const question = progression.join(' ');

    return [question, String(correctAnswer)];
  });
};

export default startProgressionGame;
