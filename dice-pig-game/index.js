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
];

// buttons
const newGameButtonEl = document.querySelector('.btn--new');
const rollDiceButtonEl = document.querySelector('.btn--roll');
const holdButtonEl = document.querySelector('.btn--hold');

// variables
let diceNo;
let currentScore = 0;
let playerScore;

// methods
const getDiceNo = () => {
  diceNo = Math.trunc(Math.random() * 6 + 1);
  console.log(`Random dice ${diceNo}`);
  return diceNo;
};

// tasks
rollDiceButtonEl.addEventListener('click', () => {
  currentScore += getDiceNo();
  //   console.log(currentScore);
});
