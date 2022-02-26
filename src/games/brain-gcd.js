import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const calculate = (num1, num2) => {
  if (num2 > num1) return calculate(num2, num1);
  if (!num2) return num1;
  return calculate(num2, num1 % num2);
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 50);
  const num2 = generateRandomNumber(1, 50);
  const question = `Question: ${num1} ${num2}`;
  const result = String(calculate(num1, num2));

  return [question, result];
};

const generateRounds = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return gameRounds;
};

startGame(gameInstruction, generateRounds());
