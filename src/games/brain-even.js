import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => {
  startGame(rule, () => {
    const question = generateRandomNumber(10);
    const correctAnswer = isEven(question);

    return [question, correctAnswer];
  });
};

export default startEvenGame;
