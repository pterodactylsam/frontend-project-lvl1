import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculatePrime = (num) => {
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
  const answer = calculatePrime(num);

  return [question, answer];
};

const startPrimeGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return startGame(gameInstruction, gameRounds);
};

export default startPrimeGame;
