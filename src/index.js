import readlineSync from 'readline-sync';

const roundsCount = 3;

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserInput = () => {
  return readlineSync.question('May I have your name? ');
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
  const userName = getUserInput();
  greetUser(userName);
  showInstructions(instruction);

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const [question, correctAnswer] = getRoundData();
    showQuestion(question);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      break;
    }

    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
