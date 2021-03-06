import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const num = generateRandomNumber(1, 10);
  const question = `Question: ${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

const startEvenGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return startGame(gameInstruction, gameRounds);
};

export default startEvenGame;
