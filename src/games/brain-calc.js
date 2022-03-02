import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const gameInstruction = 'What is the result of the expression?';

const calculate = (num1, num2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];

  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);

  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  const answer = String(calculate(num1, num2, randomOperator));

  return [question, answer];
};

const startCalcGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return startGame(gameInstruction, gameRounds);
};

export default startCalcGame;
