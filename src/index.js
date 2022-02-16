import readlineSync from 'readline-sync';
import inquireName, { userName } from './cli.js';

const rounds = 3;

export const beginGame = () => {
  console.log('Welcome to the Brain Games!');
  inquireName();
};

const startGame = (instructionGame, generationRound) => {
  console.log(instructionGame);
  for (let i = 0; i < rounds; i += 1) {
    console.log(generationRound[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === generationRound[1]) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${generationRound[1]}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default startGame;
