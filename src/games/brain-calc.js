#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../cli.js'; // импорт имени пользователя из cli.js
import {
  beginGame,
  generateRandomNumber,
  instructionGameCalc,
  congratulations,
} from '../index.js';

let result = 'Correct';

const calcNumbers = () => {
  const avoidZero = 1; // избежать 0 при рандоме
  const randomOperator = Math.floor(Math.random() * 3) + avoidZero; // случайное число от 1 до 3
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  let resultAnswer; // сохранить правильный ответ на вопрос

  if (randomOperator === 1) {
    resultAnswer = randomNumber1 + randomNumber2;
    console.log(`Question: ${randomNumber1} + ${randomNumber2}`);
  } else if (randomOperator === 2) {
    resultAnswer = randomNumber1 - randomNumber2;
    console.log(`Question: ${randomNumber1} - ${randomNumber2}`);
  } else {
    resultAnswer = randomNumber1 * randomNumber2;
    console.log(`Question: ${randomNumber1} * ${randomNumber2}`);
  }

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
instructionGameCalc(); // инструкция для игры калькулятор

for (let i = 0; i < 3; i += 1) {
  if (result === 'Correct') {
    calcNumbers();
  }
}

if (result === 'Correct') {
  congratulations();
}
