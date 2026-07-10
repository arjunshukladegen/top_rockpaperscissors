
// Randomly picks rock, paper, or scissors
function getComputerChoice() {
  // Picks a random number (1, 2, 3)
  let randomNum = (Math.round((Math.random() * 100)));
  let randomPick = (randomNum % 3) + 1;
  if (randomPick === 1) {
    return "rock";
  }
  else if (randomPick === 2) {
    return "paper";
  }
  else if (randomPick === 3) {
    return "scissors";
  }
}
//console.log(`Computer picked: ${getComputerChoice()}`);


// Prompts user for them to type rock, paper, or scissors
function getHumanChoice() {
  let playerPick = prompt("Pick 'Rock', 'Paper', or 'Scissors'!");
  return playerPick;
}
//console.log(`You picked: ${getHumanChoice()}`);









// Plays a 5 round game
function playGame() {
  // Track scores for game
  let humanScore = 0;
  let computerScore = 0;
  let roundWinner;

  // Get human and computer choices and calculates winner
  function playRound(humanChoice, computerChoice) {
    console.log(`You have picked: ${humanChoice}`);
    console.log(`Computer has picked: ${computerChoice}`);

    let winnerName;

    // Calculate who the winner is

    // If they picked the same (tie)
    if (humanChoice === computerChoice) {
      winnerName = "Tie";
    }

    // If human picked Rock
    else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        winnerName = "Computer";
      } 
      else {
        winnerName = "Human"
      }
    }

    // If human picked Paper
    else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        winnerName = "Computer";
      } 
      else {
        winnerName = "Human"
      }
    }

    // If human picked Scissors
    else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        winnerName = "Computer";
      } 
      else {
        winnerName = "Human"
      }
    }
    if (winnerName === "Tie") {
      console.log("This round is a Tie!");
    }
    else {
      console.log(`${winnerName} has won this round!`);
    }
    return winnerName;
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1} has Started!`);
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();

    roundWinner = playRound(humanSelection, computerSelection);
    if (roundWinner === 'Computer') {
      computerScore = computerScore + 1;
    }
    else if (roundWinner === 'Human') {
      humanScore = humanScore + 1;
    }

    console.log(`Round ${i+1} has Ended!`)
    console.log(`Computer: ${computerScore} | Human ${humanScore}`)
  }
  return;
}
