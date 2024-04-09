import startGame from '../index.js';
import generateRandomNumber from '../../utils/generateRandomNumber.js';

const rule = 'What is the result of the expression?';
const operands = ['+', '-', '*'];
const operand = operands[Math.floor(Math.random() * operands.length)];

const startCalcGame = () => {
  startGame(rule, () => {
    const firstOperator = generateRandomNumber(20);
    const secondOperator = generateRandomNumber(10);

    const question = `${firstOperator} ${operand} ${secondOperator}`;
    const correctAnswer = calculate(firstOperator, operand, secondOperator);

    return [question, String(correctAnswer)];
  });
};

const calculate = (firstNumber, sign, secondNumber) => {
  let result = 0;

  switch (sign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error('Invalid sign');
  }

  return result;
};

export default startCalcGame;
