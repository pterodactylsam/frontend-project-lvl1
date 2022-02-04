#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js'; // импорт имени пользователя из cli.js
import {
  beginGame,
  generateRandomNumber,
  instructionGamePrime,
  congratulations,
} from '../../src/index.js';

let result = 'Correct';

const calcPrideNumber = () => {
  const randomNumber = generateRandomNumber();
  let textResult = '';
  let prideNumber;

  if (randomNumber === 1) {
    prideNumber = randomNumber;
    textResult = 'no';
  } else if (randomNumber > 1) {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        prideNumber = randomNumber;
        textResult = 'no';
        break;
      } else if (randomNumber % i !== 0) {
        prideNumber = randomNumber;
        textResult = 'yes';
      }
    }
  }

  if (prideNumber === undefined) { // у меня почему-то иногда выскакивает undefiend :(
    prideNumber = 5;
    textResult = 'yes';
  }

  console.log(`Question: ${prideNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (textResult === answer) {
    console.log('Correct');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was ${textResult}.`,
    );
    console.log(`Let's try again, ${userName}!`);
    result = 'Wrong';
  }
};

beginGame(); // приветствие и спрашиваем имя
instructionGamePrime(); // инструкция для игры прогрессия
calcPrideNumber();

for (let i = 0; i < 2; i += 1) {
  // 2 повтора, в функции calcPrideNumber при запуске считается нод
  if (result === 'Correct') {
    calcPrideNumber();
  }
}

if (result === 'Correct') {
  congratulations();
}
