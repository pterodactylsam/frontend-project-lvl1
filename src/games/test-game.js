import startGame, { beginGame } from '../index.js';

export const instructionGame = () => 'Calc this example';
export const generateRound = () => ['2+2', '4'];

beginGame();
startGame(instructionGame(), generateRound());
