import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  return number % 2 === 0;
};

const startEvenGame = () => {
  startGame(rule, () => {
    const question = generateRandomNumber(10);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
  });
};

export default startEvenGame;
