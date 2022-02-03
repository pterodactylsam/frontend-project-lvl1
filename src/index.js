import inquireName, { userName } from './cli.js';

export const beginGame = () => {
  console.log('Welcome to the Brain Games!');
  inquireName();
};

export const instructionGameCalc = () => {
  console.log('What is the result of the expression?');
};

export const generateRandomNumber = () => {
  const maxRandomNumber = 10;
  const avoidZero = 1; // избежать 0 при рандоме
  const randomNumber = Math.floor(Math.random() * maxRandomNumber) + avoidZero;

  return randomNumber;
};

export const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};
