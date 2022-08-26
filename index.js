'use strict'
//destructuring, spread operators and short circuiting
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

  //Coding Challenge #1
  //Create one player array for each team (variables 'players1' and 'players2')
  const [players1, players2] = game.players;
  console.log(players1, players2);
  
  //For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  const [gk, ...fieldPlayers] = players1
  console.log(gk, fieldPlayers);

  //Create an array 'allPlayers' containing all players of both teams (22 players)
  const allPlayers = [...players1, ...players2]
  console.log(allPlayers);

  //So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
  console.log(players1Final)

  //Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  const {team1, x:draw, team2} = game.odds
  console.log(team1, draw, team2)

  //write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    const printGoals = function(...playerName) {
        console.log(...playerName)
        console.log(`${playerName.length} goals were scored`)
    }
    printGoals(...game.scored)

    //The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
    team1 < team2 && console.log(`Team 1 is more likely to win the game`)
    team1 > team2 && console.log(`Team 2 is more likely to win the game`)

//Coding Challenge #2
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  const player = game.scored.entries()
  for(const [i, eachPlayer] of player){
    console.log(`Goal ${i + 1}: ${eachPlayer}`)
  }

//Use a loop to calculate the average odd and log it to the console  
const odd = Object.values(game.odds)
let avg = 0
  for( const oddScore of odd)
  avg += oddScore
  avg /= odd.length
  console.log(avg)

/*3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉 */

const oddsTeam = Object.entries(game.odds)
for(const [name, odd] of oddsTeam){
const teamName = name === 'x' ? 'draw': `victory ${game[name]}`
console.log(`Odd of ${teamName} ${odd}`)


//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

const scorers = {}
for (const player of game.scored) 
  scorers[player] ? scorers[player]++ : scorers[player] = 1
  console.log(scorers)
}

//Coding Challenge #3
/*Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).*/

      const gameEvents = new Map([
        [17, '⚽️ GOAL'],
        [36, '🔁 Substitution'],
        [47, '⚽️ GOAL'],
        [61, '🔁 Substitution'],
        [64, '🔶 Yellow card'],
        [69, '🔴 Red card'],
        [70, '🔁 Substitution'],
        [72, '🔁 Substitution'],
        [76, '⚽️ GOAL'],
        [80, '⚽️ GOAL'],
        [92, '🔶 Yellow card'],
      ]);
//1. Create an array 'events' of the different game events that happened (no duplicates)
//using sets in order to prevent duplicates
const events = [...new Set(gameEvents.values())]
console.log(events)

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64)
console.log(gameEvents)

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const size = gameEvents.size
const minutes = [...gameEvents.keys()]
const minute = minutes.pop()
const avG =  minute / size
console.log(
  `An event happened, on average, every ${avG} minutes.`
);

/*4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL */

for (const [time, event] of gameEvents.entries()){
  const timing = time > 45 ? 'SECOND HALF' : 'FIRST HALF' 
  console.log(`[${timing}] ${time}: ${event}`)
}

//Coding Challenge #4
//Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
const text = document.querySelector('textarea').value;
const textSp = text.split('\n')
  for (const [a, b] of textSp.entries()){
 const [firstWord, secondWord] = b.toLowerCase().trim().split('_')
  let result = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`
  console.log(result)
  console.log(`${result.padEnd(18)}${'✅'.repeat(a + 1)}`);
  }
})
