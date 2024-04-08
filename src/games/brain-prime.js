import { startGame } from '../index.js';
import { generateRandomNumber } from '../../utils/generateRandomNumber.js';

const startPrimeGame = () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    () => {
      const question = generateRandomNumber(100);
      let correctAnswer = 'yes';

      if (question <= 1) {
        correctAnswer = 'no';
      }

      for (let i = 2; i <= question / 2; i += 1) {
        if (question % i === 0) {
          correctAnswer = 'no';
        }
      }

      return [question, correctAnswer];
    },
  );
};

export default startPrimeGame;
