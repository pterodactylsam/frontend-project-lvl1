#!/usr/bin/env node
import readlineSync from 'readline-sync';

let userName = '';
const inquireName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default inquireName;
export { userName };
