import readlineSync from "readline-sync";

export const name = readlineSync.question("May I have your name? ");

export const printName = function (name) {
	console.log(`Hello, ${name}!`);
};
