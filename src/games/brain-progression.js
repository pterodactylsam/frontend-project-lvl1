import startGame, { rounds } from '../index.js';
import generateRandomNumber from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';

const generateProgression = (startNum, lengthCount, iterationCount) => {
  const numbersProg = [];

  for (let i = startNum; i < lengthCount; i += iterationCount) {
    numbersProg.push(i);
  }

  return numbersProg;
};

const generateRound = () => {
  const randomStartNum = generateRandomNumber(0, 5);
  const randomLengthCount = generateRandomNumber(12, 25);
  const randomIterationCount = generateRandomNumber(1, 3);

  const progression = generateProgression(randomStartNum, randomLengthCount, randomIterationCount);
  const randomElement = generateRandomNumber(0, progression.length);
  const basicElement = progression[randomElement];
  progression[randomElement] = '..';

  const question = `Question: ${progression.join(' ')}`;
  const answer = String(basicElement);

  return [question, answer];
};

const startProgGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  return startGame(gameInstruction, gameRounds);
};

export default startProgGame;
