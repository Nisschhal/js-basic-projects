'use strict';
// get all the required element
const bodyEl = document.querySelector('body');

const numberEl = document.querySelector('.number');
// numberEl.textContent = '12';

const guessEl = document.querySelector('.guess');

// guessedNumber = 12;

const messageEl = document.querySelector('.message');
// messageEl.textContent = '🎊 correct guessed!';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = -1;

const highScoreEl = document.querySelector('.highscore');
// highScoreEl.innerText = scoreEl.textContent;

const checkButtonEl = document.querySelector('.check');
const againButtonEl = document.querySelector('.again');

// functions
const displayMessage = message => {
  messageEl.textContent = message;
};

const updateBackground = () => {
  bodyEl.style.backgroundColor = 'green';
};
const showCorrectNumber = () => {
  numberEl.textContent = correctNumber;
};
const getRandomNumber = () => {
  const ran = Math.trunc(Math.random() * 20 + 1);
  console.log(ran);
  return ran;
};
const resetGame = () => {
  bodyEl.style.backgroundColor = '#222';
  correctNumber = getRandomNumber();
  numberEl.textContent = '?';
  guessEl.value = '';
  messageEl.textContent = 'Start Guessing !!';
  scoreEl.textContent = 20;
  highScoreEl.textContent = 0;
  numberEl.style.width = '15rem';
};

// tasks
// 1 check if all the element import works fine

// define corrent number between 1-20
let correctNumber = getRandomNumber(); // gives the number between (0 to <1) with * 20, gives number of 0 to <20, with + 1 gives 1 to <21, with Math.trunc gives number 0 to 10

checkButtonEl.addEventListener('click', () => {
  let currentScore = Number(scoreEl.textContent);
  const guessedNumber = guessEl.value;
  if (currentScore == 0) {
    displayMessage('💥 Game Over, You lost it!!!!!');
    return;
  }

  if (!guessedNumber) {
    displayMessage('⛔ No Number...');
  } else if (guessedNumber != correctNumber) {
    guessedNumber < correctNumber
      ? displayMessage('📉 Number guessed to low!!')
      : displayMessage('📈  Number guessed to high!!');

    scoreEl.textContent = --currentScore;
  } else {
    displayMessage('🎉 correct guessed!');
    highScoreEl.textContent = currentScore;
    updateBackground();
    showCorrectNumber();
  }
});

againButtonEl.addEventListener('click', () => {
  resetGame();
});

// -- no number
// when no number show, message 'guess some number'
// -- wrong guessed number
// if wrong guess, deduct score by -1
// if score is 0, game over

// - correct guessed number
// if correct guess
// update ? number element
// update current score to highscore
