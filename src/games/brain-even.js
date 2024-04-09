import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  startGame(rule, () => {
    const question = generateRandomNumber(10);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  });
};

export default startEvenGame;
