'use strict';

/*  1- define required variables
        - rollDice: to roll random no.
        - currentNo: to store dice numbers.
        - playerScore: to hold player total score
    2-- get the required elments
    3--roll Dice/click roll-dice
      - generate no between 1-6
      - and update the dice no. into current
      - if dice == 1
            - remove currentValue 
            - pass the dice to next player
*/

// playerScores
const playerOneScoreEl = document.querySelector('#score--0');
// playerOneScore.textContent = 100;
const playerTowScoreEl = document.getElementById('score--1');
// playerTowScore.textContent = 100;

const playerOneCurrentScoreEl = document.getElementById('current-0');
// playerOneCurrentScore.textContent = 100;
const playerTwoCurrentScoreEl = document.getElementById('current-1');
// playerTwoCurrentScore.textContent = 100;

// dice list
const diceList = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

// buttons
const newGameButtonEl = document.querySelector('.btn--new');
const rollDiceButtonEl = document.querySelector('.btn--roll');
const holdButtonEl = document.querySelector('.btn--hold');

// img
const diceImageEl = document.querySelector('.dice');

// variables
let rolledDiceNo;
let currentScore = 0;
let playerScore;
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;

// methods
const getDiceNo = () => {
  return Math.trunc(Math.random() * 6 + 1);
  //   console.log(`Random dice ${diceNo}`);
  //   return diceNo;
};

// tasks
rollDiceButtonEl.addEventListener('click', () => {
  // get Random no of dice
  rolledDiceNo = getDiceNo();
  // update image based on dice no.
  let diceImage = `./images/${diceList[rolledDiceNo - 1]}`;
  diceImageEl.src = diceImage;

  console.log('random Dice no: ', rolledDiceNo);
  // if dice no. == 1
  if (rolledDiceNo == 1) {
    currentScore = 0;
    playerOneTotalScore += currentScore;
    console.log(playerOneTotalScore);
    playerOneCurrentScoreEl.textContent = playerOneTotalScore;
    playerOneScoreEl.textContent = playerOneTotalScore;
    playerOneCurrentScoreEl.textContent = currentScore;
    // console.log(playerOneCurrentScoreEl.textContent);
  } else {
    // if dice no. != 1
    // console.log('not rolled 1:', rolledDiceNo);
    currentScore += rolledDiceNo;
    playerOneCurrentScoreEl.textContent = currentScore;
  }

  //   console.log(currentScore);
});

holdButtonEl.addEventListener('click', () => {
  playerOneTotalScore += currentScore;
  console.log(playerOneTotalScore);
  playerOneCurrentScoreEl.textContent = playerOneTotalScore;
  currentScore = 0;
  playerOneScoreEl.textContent = playerOneTotalScore;
  playerOneCurrentScoreEl.textContent = currentScore;

  if (playerOneScoreEl.textContent == '100') {
    document.querySelector('body').style.backgroundColor = 'green';
  }
});
