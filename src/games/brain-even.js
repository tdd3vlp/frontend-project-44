import { startGame } from '../index.js';
import { generateRandomNumber } from '../../utils/generateRandomNumber.js';

const startEvenGame = () => {
  startGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    () => {
      const question = generateRandomNumber(10);
      let correctAnswer = '';

      if (question % 2 === 0) {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }

      return [question, correctAnswer];
    },
  );
};

export default startEvenGame;
