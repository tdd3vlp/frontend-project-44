import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');

export function printName(firstName) {
  console.log(`Hello, ${firstName}!`);
}
