import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const startPrimeGame = () => {
  startGame(rule, () => {
    const question = generateRandomNumber(100);
    const correctAnswer = isPrime(question);

    return [question, correctAnswer];
  });
};

export default startPrimeGame;
