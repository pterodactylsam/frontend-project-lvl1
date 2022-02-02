#!/usr/bin/env node
import inquireName from '../src/cli.js';

const welcomeGame = () => {
  console.log('Welcome to the Brain Games!');
  inquireName();
};

welcomeGame();
