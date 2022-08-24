// const str = 'nischal';
// const arr = ['1', '12', '1232', '1232'];
// console.log([...str, ...'puri']);
// console.log(...arr);

// function fun(...arg) {
//   console.log(arg.toLocaleString());
// }

// fun([1, 2, 3, 4]);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

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

// for (const [index, scoredPlayer] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${scoredPlayer}`);
// }
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// let sum = 0;
// for (const oddScore of Object.values(game.odds)) {
//   sum += oddScore;
// }

// console.log(`Average of odds is ${sum / 3}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the same property names �

// for (let [team, oddScore] of Object.entries(game.odds)) {
//   if (team === 'x') {
//     team = 'draw';
//   }
//   console.log(`Odd of ${team}: ${oddScore}`);
// }

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

// const copiedScored = [...game.scored];

// const scorers = copiedScored.reduce((scorersObject, player) => {
//   if (!scorersObject[player]) scorersObject[player] = 0;
//   scorersObject[player]++;
//   return scorersObject;
// }, {});

// console.log(scorers);

// for (const scorePlayer of copiedScored) {
// }

// const setSample = new Set(copiedScored);
// setSample.add('nischal');
// setSample.delete('Hummels');
// console.log(setSample.values());
// setSample.clear();

// console.log(setSample.size);
// setSample.forEach(element => {
//   console.log(element);
// });

// const mapSample = new Map([
//   ['a', 'nichal'],
//   ['b', 'puri'],
//   [true, 'it is true'],
// ]);

// console.log([...mapSample]);

/////////////////////////// SET AND MAP ///////////////////////////////////////

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '🟨 Yellow card'],
//   [69, '🟥 Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🟨 Yellow card'],
// ]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = new Set([...gameEvents.values()]);
// console.log([...events]);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// for (const [key, value] of gameEvents) {
//   if (!(key % 9)) console.log(`${key}: ${value}`);
// }

/*
Your tasks:
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL */
// const firstHalf = [];
// const secondHalf = [];
// for (const [key, value] of gameEvents) {
//   const half = key < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key} : ${value}`);
// if (key < 45) console.log(`[FIRST HALF] ${key} : ${value}`);
// if (key > 45) console.log(`[SECOND HALF] ${key} : ${value}`);
// if (key > 45) secondHalf.push([key, value]);
// if (key < 45) firstHalf.push([key, value]);
// if (key > 45) secondHalf.push([key, value]);
// }

// console.log(`first Half: `, firstHalf);
// console.log(`second Half: `, secondHalf);
//

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('A'));
// console.log(airline.slice(airline.lastIndexOf('P')));

/////////////////////// CODING CHALLENGE 4 /////////////////////////
// const textAreaEl = document.querySelector('textarea');
// const buttonEl = document.querySelector('button');
// console.log(buttonEl);

/// nischal_puri => nischalPuri

// Tasks
// split with _ into array
// loop the first splited items
// capitalize the 2nd item from inner split

// formating innterArray Item
// const camelCase = function (str) {
//   const trimItem = str.trim();
//   let [firstName, lastName] = trimItem.split('_');

//   lastName = lastName[0].toUpperCase() + lastName.slice(1);

//   const formattedWord = [firstName, lastName].join('');
//   // console.log(formattedWord);
//   return formattedWord;
// };

// const formattedArray = [];
// const capitalizedArray = array => {
//   const splitedArray = array.split('\n');
//   // console.log(splitedArray);
//   for (const item of splitedArray) {
//     formattedArray.push(camelCase(item));
//   }

//   for (const [index, item] of formattedArray.entries()) {
//     console.log(item, '✅'.repeat(index + 1));
//   }
// };

// console.log(formattedArray);
// buttonEl.addEventListener('click', () => {
//   const textAreaValue = textAreaEl.value;

//   if (textAreaValue.length < 2) {
//     alert('cannot change text!!');
//     return;
//   }

//   // const textArray = textAreaValue.split('\n'); // gives an array of words
//   // console.log(textArray);
//   capitalizedArray(textAreaValue);
// });

///// optimized version of capitalization of textare str

// const textAreaEl = document.querySelector('textarea');
// const buttonEl = document.querySelector('button');

// buttonEl.addEventListener('click', () => {
//   const textAreaValue = textAreaEl.value;

//   const rows = textAreaValue.split('\n');
//   const formattedRows = [];

//   for (const [index, row] of rows.entries()) {
//     let [firstName, lastName] = row.toLowerCase().trim().split('_');

//     // let [firstName, lastName] = trimItem.split('_');
//     const output = `${firstName}${lastName}`.replace(
//       lastName[0],
//       lastName[0].toUpperCase()
//     );
//     console.log(output.padEnd(20), '✅'.repeat(index + 1));

//     // const formattedWord = [firstName, formatedLastName].join('');

//     // formattedRows.push(formattedWord);
//   }
//   // console.log(formattedRows);
// });

/////////////// HIGHER -ORDER FUNCTION /////////////////////////
// const firstOrderTransformer = function (str, fun) {
//   console.log(`orignial Text: ${str}`);
//   console.log(`Transformed Text: ${fun(str)}`);
//   console.log(`Transformed funtion Name: ${fun.name}`); // built-in properties to get the function name.
// };

// const toUpperFirstLetter = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord[0].toUpperCase() + firstWord.slice(1), ...others].join(' ');
// };

// firstOrderTransformer('this is firstOrderFunction.', toUpperFirstLetter);

// a function returing another function as a value.

// const greeter = greet => {
//   return person => {
//     console.log(`${greet} ${person}!!`);
//   };
// };

// const greeting = greeter('Hello,');
// greeting('Nischal Puri');
// greeting('Nischant Puri');
// greeter('Hey,')('Dipendra');

/// using More lesser code
// greetMe with greet argument arrow function returning another arrow function using name.
// const greetMe = greet => name => console.log(`${greet},${name}!!`);greetMe('Hi ')('Nisal');

/////////////////// CALL AND APPLY METHODS FOR using this in regular function///////////////////
// const nepalAirline = {
//   airline: 'NepalAriline',
//   iataCode: 'NA',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// nepalAirline.book(410, 'Nischal Puri');

// const newNepalAirline = {
//   airline: 'NewNepalAirline',
//   iataCode: 'NNA',
//   bookings: [],
// };

// const book = nepalAirline.book;
// book(240, 'Nishant Puri');  // doesn't work while adding /copying other object method to newObject's method

// book.call(newNepalAirline, 220, 'Suraj Thapa');
// console.log(newNepalAirline);
// book.call(nepalAirline, 444, 'Badal Thapa');

// Apply methods

// apply methods is like a call() methods which takes the list of argument with newObject refrence but the 2nd/rest argument takes on array rather than seperate arguments

// book.apply(newNepalAirline, [111, 'Nickey Boi']);
// console.log(newNepalAirline);

// copyingMethod.apply(newObject, [arg1, arg2]);
// const bookNNA = book.bind(newNepalAirline, 100);

// bookNNA('nisal puri');
// bookNNA('mr. puri');
// console.log(newNepalAirline);
