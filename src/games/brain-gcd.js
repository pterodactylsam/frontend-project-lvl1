import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  if (num2 > num1) return calculateGcd(num2, num1);
  if (!num2) return num1;
  return calculateGcd(num2, num1 % num2);
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 50);
  const num2 = generateRandomNumber(1, 50);
  const question = `Question: ${num1} ${num2}`;
  const answer = String(calculateGcd(num1, num2));

  return [question, answer];
};

const startGcdGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return startGame(gameInstruction, gameRounds);
};

export default startGcdGame;
