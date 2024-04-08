import { startGame } from '../index.js';
import { generateRandomNumber } from '../../utils/generateRandomNumber.js';

export const startGCDGame = () => {
  startGame('Find the greatest common divisor of given numbers.', () => {
    const firstNumber = generateRandomNumber(10);
    const secondNumber = generateRandomNumber(10);

    const question = `${firstNumber} ${secondNumber}`;

    const findGCD = (a, b) => {
      let GCD;
      if (b === 0) {
        GCD = a;
      } else {
        GCD = findGCD(b, a % b);
      }

      return GCD;
    };

    let correctAnswer = findGCD(firstNumber, secondNumber);

    return [question, String(correctAnswer)];
  });
};
