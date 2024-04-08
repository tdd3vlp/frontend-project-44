import { startGame } from '../index.js';
import { generateRandomNumber } from '../../utils/generateRandomNumber.js';

const startCalcGame = () => {
  startGame('What is the result of the expression?', () => {
    const operands = ['+', '-', '*'];
    const firstOperator = generateRandomNumber(10);
    const secondOperator = generateRandomNumber(10);
    const operand = operands[Math.floor(Math.random() * operands.length)];

    const question = `${firstOperator} ${operand} ${secondOperator}`;
    let correctAnswer = 0;

    if (operand === '+') {
      correctAnswer = firstOperator + secondOperator;
    }

    if (operand === '-') {
      correctAnswer = firstOperator - secondOperator;
    }

    if (operand === '*') {
      correctAnswer = firstOperator * secondOperator;
    }

    return [question, String(correctAnswer)];
  });
};

export default startCalcGame;
