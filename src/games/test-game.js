import startGame from '../index.js';

const instructionGame = () => 'Calc this example';
const generateRound = () => ['2+2', '4'];

startGame(instructionGame(), generateRound());
