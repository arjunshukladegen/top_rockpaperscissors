
// Randomly picks rock, paper, or scissors
function getComputerChoice() {
  // Picks a random number (1, 2, 3)
  let randomNum = (Math.round((Math.random() * 100)));
  let randomPick = (randomNum % 3) + 1;
  if (randomPick === 1) {
    return "Rock";
  }
  else if (randomPick === 2) {
    return "Paper";
  }
  else if (randomPick === 3) {
    return "Scissors";
  }
}

console.log(getComputerChoice());

// Prompts user for them to type rock, paper, or scissors
function getHumanChoice() {
  return;
}

// Track scores for game
let humanScore = 0;
let computerScore = 0;

// Get human and computer choices and calculates winner
function playRound() {
  return;
}

// Plays a 5 round game
function playGame() {
  return;
}



/*
getComputerChoice FUNC
  return rock paper or scissors at random

getHumanChoice FUNC
  prompt user for choice

let humanScore track score
let computerScore track score

playRound FUNC (humanChoice and computerChoice)
  make human choice not case sensitive
  console log a round winner such as "You lose! Paper beats Rock"
  increment score based on winner 

playGame FUNC
  calls playRound to play 5 rounds

*/
