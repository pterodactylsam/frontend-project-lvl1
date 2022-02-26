import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';

const generateRound = () => {
  const randomLengthCount = generateRandomNumber(12, 25);
  const randomIterationCount = generateRandomNumber(1, 3);
  const numbersProg = [];

  for (let i = 0; i < randomLengthCount; i += randomIterationCount) {
    numbersProg.push(i);
  }

  const randomElement = generateRandomNumber(0, numbersProg.length);
  const basicElement = numbersProg[randomElement];
  numbersProg[randomElement] = '..';

  const question = `Question: ${numbersProg}`;
  const result = String(basicElement);

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
