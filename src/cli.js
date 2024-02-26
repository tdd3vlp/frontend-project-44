import readlineSync from 'readline-sync';

// Greet user
console.log('Welcome to the Brain Games!');

// Ask for user's name
export const name = readlineSync.question('May I have your name? ');

export function printName(firstName) {
  console.log(`Hello, ${firstName}!`);
}
