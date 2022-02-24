import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (num1, num2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const calcNumbers = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];

  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);

  const question = `${num1} ${randomOperator} ${num2}`;
  const result = String(calculate(num1, num2, randomOperator));

  return [question, result];
};

const generateRound = () => {
  const arrayRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    arrayRounds.push(calcNumbers());
  }
  return arrayRounds;
};

startGame('What is the result of the expression?', generateRound());
