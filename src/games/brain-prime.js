import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const num = generateRandomNumber(1, 10);
  const question = `Question: ${num}`;
  const result = calculate(num);

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
