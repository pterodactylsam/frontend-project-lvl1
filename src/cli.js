import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let userName = '';
const inquireName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default inquireName;
export { userName };
