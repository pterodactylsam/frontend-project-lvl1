#!/usr/bin/env node
import readlineSync from 'readline-sync';
import inquireName, { userName } from '../../src/cli.js'; // импорт имени пользователя из cli.js

let result = 'Correct';

const instructionGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};

const evenNumbers = () => {
  const maxRandomNumber = 20;
  const avoidZero = 1; // избежать 0 при рандоме
  const randomNumber = Math.floor(Math.random() * maxRandomNumber) + avoidZero;
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    result = 'Correct';
  } else if (randomNumber % 2 === 1 && answer === 'no') {
    console.log('Correct!');
    result = 'Correct';
  } else {
    if (randomNumber % 2 === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      result = 'Wrong';
    }
    if (randomNumber % 2 === 1) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      result = 'Wrong';
    }
  }
};

console.log('Welcome to the Brain Games!');
inquireName(); /* Приветствие пользователя */
instructionGame(); /* Инструкиця к игре */

for (let i = 0; i < 3; i += 1) {
  if (result === 'Correct') {
    evenNumbers();
  }
}

if (result === 'Correct') {
  congratulations();
}
