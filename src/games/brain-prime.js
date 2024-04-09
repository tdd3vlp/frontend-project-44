import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const startPrimeGame = () => {
  startGame(rule, () => {
    const question = generateRandomNumber(100);
    let correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, correctAnswer];
  });
};

export default startPrimeGame;
