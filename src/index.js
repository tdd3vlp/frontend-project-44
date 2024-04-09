import readlineSync from 'readline-sync';

const roundsCount = 3;

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const showInstructions = (instruction) => {
  console.log(instruction);
};

const playRounds = (correctAnswersCount, callback, user) => {
  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = callback();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`,
      );
      break;
    }

    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};

const startGame = (instruction, getRoundData) => {
  welcomeUser();
  const userName = greetUser();
  showInstructions(instruction);

  let correctAnswersCount = 0;

  playRounds(correctAnswersCount, getRoundData, userName);
};

export default startGame;
