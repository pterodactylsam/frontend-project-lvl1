import inquireName, { userName } from './cli.js';

export const beginGame = () => {
  console.log('Welcome to the Brain Games!');
  inquireName();
};

export const instructionGameCalc = () => {
  console.log('What is the result of the expression?');
};

export const instructionGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const instructionGamePrime = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const instructionGameProg = () => {
  console.log('What number is missing in the progression?');
};

export const generateRandomNumber = () => {
  const maxRandomNumber = 20;
  const avoidZero = 1; // избежать 0 при рандоме
  const randomNumber = Math.floor(Math.random() * maxRandomNumber) + avoidZero;

  return randomNumber;
};

export const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};
