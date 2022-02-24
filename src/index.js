import readlineSync from 'readline-sync';
import inquireName, { userName } from './cli.js';

export const rounds = 3;

const startGame = (gameInstruction, generationRound) => {
  console.log('Welcome to the Brain Games!');
  inquireName();
  console.log(gameInstruction);
  for (let i = 0; i < rounds; i += 1) {
    const [question, result] = generationRound[i];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default startGame;
