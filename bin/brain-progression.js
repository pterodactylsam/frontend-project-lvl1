#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'; // импорт имени пользователя из cli.js
import {
  beginGame,
  instructionGameProg,
  congratulations,
} from '../src/index.js';

let result = 'Correct';

const calcProgNumber = () => {
  const numbersProg = [];

  const maxIterationCount = 5;
  const avoidZero = 1; // избежать 0 при рандоме
  const randomIterationCount = Math.floor(Math.random() * maxIterationCount) + avoidZero;

  const maxLengthArray = 30;
  const minimumLengthArray = 25; // минимум длина массива 5 элементов
  const randomLengthCount = Math.floor(Math.random() * maxLengthArray) + minimumLengthArray;

  for (let i = 0; i < randomLengthCount; i += randomIterationCount) {
    numbersProg.push(i);
  }

  const maxRandomNumber = numbersProg.length;
  const randomElement = Math.floor(Math.random() * maxRandomNumber);
  const basicElement = numbersProg[randomElement];
  numbersProg[randomElement] = '..';

  const textNumbersProg = numbersProg.join(' ');
  console.log(`Question: ${textNumbersProg}`);
  const answer = readlineSync.question('Your answer: ');

  if (basicElement === Number(answer)) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${basicElement}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    result = 'Wrong';
  }
};

beginGame(); // приветствие и спрашиваем имя
instructionGameProg(); // инструкция для игры прогрессия
calcProgNumber();

for (let i = 0; i < 2; i += 1) {
  // 2 повтора, в функции calcGcdNumber при запуске считается нод
  if (result === 'Correct') {
    calcProgNumber();
  }
}

if (result === 'Correct') {
  congratulations();
}
