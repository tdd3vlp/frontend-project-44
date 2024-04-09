import readlineSync from 'readline-sync';

const roundsCount = 3;

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

const greetUser = (user) => {
  console.log(`Hello, ${user}!`);
};

const showInstructions = (rule) => {
  console.log(rule);
};

const showQuestion = (text) => {
  console.log(`Question: ${text}`);
};

const startGame = (instruction, getRoundData) => {
  welcomeUser();
  const userName = readlineSync.question('May I have your name? ');
  greetUser(userName);
  showInstructions(instruction);

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = getRoundData();
    showQuestion(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }

    console.log('Correct!');
    correctAnswersCount += 1;

    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
