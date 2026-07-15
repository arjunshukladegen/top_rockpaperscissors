

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

//console.log(`You picked: ${getHumanChoice()}`);









// Plays a 5 round game
// function playGame() {
  

//   // Get human and computer choices and calculates winner
//   function playRound(humanChoice, computerChoice) {
//     console.log(`You have picked: ${humanChoice}`);
//     console.log(`Computer has picked: ${computerChoice}`);

//     let winnerName;

//     // Calculate who the winner is

//     // If they picked the same (tie)
//     if (humanChoice === computerChoice) {
//       winnerName = "Tie";
//     }

//     // If human picked Rock
//     else if (humanChoice === "rock") {
//       if (computerChoice === "paper") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }

//     // If human picked Paper
//     else if (humanChoice === "paper") {
//       if (computerChoice === "scissors") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }

//     // If human picked Scissors
//     else if (humanChoice === "scissors") {
//       if (computerChoice === "rock") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }
//     if (winnerName === "Tie") {
//       console.log("This round is a Tie!");
//     }
//     else {
//       console.log(`${winnerName} has won this round!`);
//     }
//     return winnerName;
//   }

//   for (let i = 0; i < 5; i++) {
//     console.log(`Round ${i+1} has Started!`);
//     let humanSelection = getHumanChoice().toLowerCase();
//     let computerSelection = getComputerChoice();

//     roundWinner = playRound(humanSelection, computerSelection);
//     if (roundWinner === 'Computer') {
//       computerScore = computerScore + 1;
//     }
//     else if (roundWinner === 'Human') {
//       humanScore = humanScore + 1;
//     }

//     console.log(`Round ${i+1} has Ended!`)
//     console.log(`Computer: ${computerScore} | Human ${humanScore}`)
//   }
//   let whoWon;
//   if (computerScore > humanScore) {
//     whoWon = "The Computer"
//   }
//   else if (humanScore > computerScore) {
//     whoWon = "The Human"
//   }
//   else {
//     whoWon = "No one"
//   }
//   return `Game has Ended!!! ${whoWon} has won the game!`;
// }




// playGame() - Starts 5 round game
// DOM Manipulation


let humanScore = 0;
let computerScore = 0;
let humanPick = null;
let computerPick = null;
let roundWinner = null;
let roundNumber = 0;



//function playRound(humanChoice, computerChoice) {
//     console.log(`You have picked: ${humanChoice}`);
//     console.log(`Computer has picked: ${computerChoice}`);

//     let winnerName;

//     // Calculate who the winner is

//     // If they picked the same (tie)
//     if (humanChoice === computerChoice) {
//       winnerName = "Tie";
//     }

//     // If human picked Rock
//     else if (humanChoice === "rock") {
//       if (computerChoice === "paper") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }

//     // If human picked Paper
//     else if (humanChoice === "paper") {
//       if (computerChoice === "scissors") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }

//     // If human picked Scissors
//     else if (humanChoice === "scissors") {
//       if (computerChoice === "rock") {
//         winnerName = "Computer";
//       } 
//       else {
//         winnerName = "Human"
//       }
//     }
//     if (winnerName === "Tie") {
//       console.log("This round is a Tie!");
//     }
//     else {
//       console.log(`${winnerName} has won this round!`);
//     }
//     return winnerName;
//   }

function playRound(humanChoice, computerChoice) {
  let winnerName = null;

  if (humanChoice === computerChoice) {
    winnerName = "Tie";
    return winnerName;
  }

  else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      winnerName = "computer";
    }
    else {
      winnerName = "human";
    }
  }

  else if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      winnerName = "computer";
    }
    else {
      winnerName = "human";
    }
  }
  else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winnerName = "computer";
    }
    else {
      winnerName = "human";
    }
  }
  return winnerName;
}

function startGame() {

  // RESET VARIABLES TO DEFAULTS
  //  humanPick stays the same
  let humanScore = 0;
  let computerScore = 0;
  let computerPick = null;
  let roundWinner = null;
  let lockedStatus = false;
  let roundNumber = 0;


  // DOM SELECTORS

  // IMAGE FOR THE HUMAN'S CURRENT PICK
  const humanPickImage = document.querySelector("#user-pick-image");
  humanPickImage.src = 'img/eye.png';

  // IMAGE FOR THE COMPUTER'S CURRENT PICK
  const computerPickImage = document.querySelector("#computer-pick-image");
  

  // BOTTOM MIDDLE UI SCORE TEXT
  const middleScore = document.querySelector("#middle-score");
  

  // HUMAN SCORE TRACKER
  const humanScoreText = document.querySelector('#human-score');
  
  // COMPUTER SCORE TRACKER
  const computerScoreText = document.querySelector('#computer-score');

  const waitingMessage = document.querySelector('#waiting-message');
  
  const humanThink = document.querySelector('#human-think');
  const computerThink = document.querySelector('#computer-think');

  mainButton.addEventListener('click', function (e) {
      if (humanPick !== null) {
        humanPickImage.style.borderColor = "#00FF00";
        mainButton.style.backgroundColor = "#00FF00";
        humanThink.textContent = 'Locked in.';
        console.log(humanPick);
        computerPick = getComputerChoice();
        console.log(computerPick);
        let winner = playRound(humanPick, computerPick);
        console.log(winner);
        
      }
    })

  for (let i = 0; i < 5; i++) {
    

    middleScore.textContent = `Round ${roundNumber}`;
    humanScoreText.textContent = `Score: ${humanScore}`;
    computerScoreText.textContent = `Score: ${computerScore}`;
    computerPickImage.src = 'img/eye.png';
    waitingMessage.textContent = 'Battle!';
    mainButton.textContent = 'Lock In';
    humanPickImage.style.borderColor = "#FF0000";
    mainButton.style.backgroundColor = "#FFFF00";
    humanThink.textContent = 'Thinking...';
    roundNumber = 1;
    
  }


}

// DOM SELECTORS

// IMAGE FOR THE HUMAN'S CURRENT PICK
const humanPickImage = document.querySelector("#user-pick-image");
humanPickImage.src = 'img/eye.png';


// IMAGE FOR THE COMPUTER'S CURRENT PICK
const computerPickImage = document.querySelector("#computer-pick-image");
computerPickImage.src = 'img/eye.png';


// BOTTOM MIDDLE UI SCORE TEXT
const middleScore = document.querySelector("#middle-score");
middleScore.textContent = 'Round 0';

// HUMAN SCORE TRACKER
const humanScoreText = document.querySelector('#human-score');
humanScoreText.textContent = `Score: ${humanScore}`;
// COMPUTER SCORE TRACKER
const computerScoreText = document.querySelector('#computer-score');
computerScoreText.textContent = `Score: ${computerScore}`;



function humanChoice(choice) {
  if (choice === 'rock') {
    humanPickImage.src = 'img/rock.png';
    humanPickImage.style.borderColor = "#FFFF00";
    humanPick = 'rock';
    
    if (gameStarted === true) {
      mainButton.style.backgroundColor = "#FFFF00";
    }
    
  }
  else if (choice === 'paper') {
    humanPickImage.src = 'img/paper.png';
    humanPickImage.style.borderColor = "#FFFF00";
    humanPick = 'paper';

    if (gameStarted === true) {
      mainButton.style.backgroundColor = "#FFFF00";
    }
  }
  else if (choice === 'scissors') {
    humanPickImage.src = 'img/scissors.png';
    humanPickImage.style.borderColor = "#FFFF00";
    humanPick = 'scissors';
    
    if (gameStarted === true) {
      mainButton.style.backgroundColor = "#FFFF00";
    }
  }
  else {
    console.log("Error: Something went wrong, please restart.");
  }
  }

const rockButton = document.querySelector('#rock-button');
rockButton.addEventListener('click', function (e) {
  console.log("admin: rock selected");
  humanChoice('rock');
})

const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', function (e) {
  console.log("admin: paper selected");
  humanChoice('paper');
})

const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', function (e) {
  console.log("admin: scissors selected");
  humanChoice('scissors');
})


let gameStarted = false;

// START THE GAME
const mainButton = document.querySelector('#start-game');
mainButton.textContent = 'Start Game';
mainButton.style.backgroundColor = "#FBB942";
mainButton.addEventListener('click', function (e) {
  console.log("admin: main button has been clicked");
  if (gameStarted === false) {
    gameStarted = true;
    startGame();
  }
})
