#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js'; // импорт имени пользователя из cli.js
import {
  beginGame,
  generateRandomNumber,
  instructionGameGcd,
  congratulations,
} from '../../src/index.js';

let result = 'Correct';

const calcGcdNumber = () => {
  let randomNumber1 = generateRandomNumber();
  let randomNumber2 = generateRandomNumber();

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  while (randomNumber1 !== randomNumber2) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 -= randomNumber2;
    } else {
      randomNumber2 -= randomNumber1;
    }
  }

  const resultAnswer = randomNumber1; // сохраняем нод в переменную
  const answer = readlineSync.question('Your answer: ');
  if (resultAnswer === Number(answer)) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${resultAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    result = 'Wrong';
  }
};

beginGame(); // приветствие и спрашиваем имя
instructionGameGcd(); // инструкция для игры калькулятор
calcGcdNumber();

for (let i = 0; i < 2; i += 1) { // 2 повтора, в функции calcGcdNumber при запуске считается нод
  if (result === 'Correct') {
    calcGcdNumber();
  }
}

if (result === 'Correct') {
  congratulations();
}
