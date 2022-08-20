// const str = 'nischal';
// const arr = ['1', '12', '1232', '1232'];
// console.log([...str, ...'puri']);
// console.log(...arr);

// function fun(...arg) {
//   console.log(arg.toLocaleString());
// }

// fun([1, 2, 3, 4]);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// const { players } = game;
// console.log(players);

// const [player1, player2] = players;
// console.log(player1, player2);

// 2. The first player in any player array is the goalkeeper and the others are field

// const [goalkeeper1, ...team1Player] = player1;
// const [goalkeeper2, ...team2Player] = player2;

// console.log(goalkeeper1, team1Player);
// console.log(goalkeeper2, team2Player);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const [...allPlayers] = [...player1, ...player2];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// const substitutePlayer = ['Thiago', 'Coutinho', 'Perisic'];

// const [...players1Final] = [...player1, ...substitutePlayer];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// function printGoals(...players) {
//   console.log(`Players scored total of ${players.length} goals.`);
// }

// printGoals('Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// team1 < team2 && console.log('Team 1 is more likely to win!!');
// team1 > team2 && console.log('Team 2 is more likely to win!!');

/*
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.score
*/

// =================CHALLENGE 2 Object Literal==================

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, scoredPlayer] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${scoredPlayer}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

let sum = 0;
for (const oddScore of Object.values(game.odds)) {
  sum += oddScore;
}

console.log(`Average of odds is ${sum / 3}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the same property names �

for (let [team, oddScore] of Object.entries(game.odds)) {
  if (team === 'x') {
    team = 'draw';
  }
  console.log(`Odd of ${team}: ${oddScore}`);
}

/* 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

// const scorers = {};

// const copiedScored = [...game.scored];

// const scorers = copiedScored.reduce((scorersObject, player) => {
//   if (!scorersObject[player]) scorersObject[player] = 0;
//   scorersObject[player] = scorersObject[player] + 1;
//   return scorersObject;
// }, {});

// console.log(scorers);

// for (const scorePlayer of copiedScored) {
// }
