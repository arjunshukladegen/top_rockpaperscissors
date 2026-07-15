const colors = {
  blank: 'transparent',
  red: '#FF0000',
  yellow: '#FFF000',
  green: '#00FF00',
  blue: '#87CEEB',
  darkPink: '#E0186C',
  lightPink: '#F04D96',
}

const state = {
  round: 0, // the round number
  cpuScore: 0, // the computer's score
  playerScore: 0, // the player's score
  cpuSelection: null, // move selected by ai at random 
  playerSelection: null, // the move that player is hovering
  cpuName: 'Ant King', // name that appears for cpu
  playerName: 'Human', // name that appears for player
  gameStarted: false, // (checks if game has started)
  roundWinner: null, // (cpu, human, or tie)
  mainButtonName: 'Start Game',
  topStatus: 'Waiting...',
  cpuStatus: '',
  playerStatus: '',
  playerSelectionText: 'Nothing',
  cpuSelectionText: 'Hidden',
};

const ui = {
  playerName: document.querySelector('#username'),
  cpuName: document.querySelector('#cpu-name'),
  playerScore: document.querySelector('#human-score'),
  cpuScore: document.querySelector('#computer-score'),
  playerPick: document.querySelector('#human-selected'),
  cpuPick: document.querySelector('#computer-selected'),
  round: document.querySelector('#middle-score'),
  topStatus: document.querySelector('#waiting-message'),
  playerStatus: document.querySelector('#human-think'),
  cpuStatus: document.querySelector('#computer-think'),
  playerPickImg: document.querySelector('#user-pick-image'),
  cpuPickImg: document.querySelector('#computer-pick-image'),
  middleImg: document.querySelector('#middle-image'),
  extraSettings: document.querySelector('#extra-settings'),
};

const buttons = {
  main: document.querySelector('#main-game'),
  rock: document.querySelector('#rock-button'),
  paper: document.querySelector('#paper-button'),
  scissors: document.querySelector('#scissors-button'),
};


let showSettings = false;
ui.extraSettings.style.visibility = 'hidden';
const settings = document.querySelector('#settings');
settings.textContent = 'Show Settings';
settings.addEventListener('click', function (e) {
  if (showSettings === false) {
    settings.textContent = 'Hide Settings';
    ui.extraSettings.style.visibility = 'visible';
    showSettings = true;
  }
  else if (showSettings === true) {
    settings.textContent = 'Show Settings';
    ui.extraSettings.style.visibility = 'hidden';
    showSettings = false;
  }
})

const inputName = document.querySelector('#input-name');
const nameForm = document.querySelector('#name-form');
// Change name button
const changeName = document.querySelector('#change-name');
// nameForm.addEventListener('submit', function (e) {
//   event.preventDefault();
//   const freshValue = inputName.value;
//   state.playerName = freshValue;
// })

changeName.addEventListener('click', function (e) {
  event.preventDefault();
  state.playerName = inputName.value; 
  render();
});


const heading = document.querySelector('#heading');
let customHeading = '';

function render() {
  // Top Bar
  if (state.mainButtonName === 'Start Game') {
    heading.textContent = `ROCK PAPER SCISSORS`;
    ui.middleImg.style.visibility = 'hidden';
  }
  else if (state.mainButtonName === 'Lock In') {
    heading.textContent = `Game: Round ${state.round}`;
    ui.middleImg.style.visibility = 'hidden';
  }
  else if (state.mainButtonName === 'Next Round') {
    heading.textContent = customHeading;
    ui.middleImg.style.visibility = 'hidden';
  }
  else if (state.mainButtonName === 'Restart') {
    heading.textContent = customHeading;
    ui.middleImg.style.visibility = 'hidden';
  }

  // Buttons
  buttons.main.textContent = state.mainButtonName;
  buttons.main.style.backgroundColor = colors.darkPink;
  buttons.paper.style.backgroundColor = colors.darkPink;
  buttons.rock.style.backgroundColor = colors.darkPink;
  buttons.scissors.style.backgroundColor = colors.darkPink;

  if (state.playerSelection === 'rock') buttons.rock.style.backgroundColor = colors.lightPink;
  if (state.playerSelection === 'paper') buttons.paper.style.backgroundColor = colors.lightPink;
  if (state.playerSelection === 'scissors') buttons.scissors.style.backgroundColor = colors.lightPink;


  // Standard UI Content
  ui.playerName.textContent = state.playerName;
  ui.cpuName.textContent = state.cpuName;
  ui.playerScore.textContent = `Score: ${state.playerScore}`;
  ui.cpuScore.textContent = `Score: ${state.cpuScore}`;
  ui.playerPick.textContent = state.playerPick;
  ui.cpuPick.textContent = state.cpuPick;
  if (state.mainButtonName === 'Next Round') {
    ui.round.textContent = `Round ${state.round} (end)`;
  }
  else if (state.mainButtonName === 'Lock In') {
    ui.round.textContent = `Round ${state.round} (pre)`;
  }
  else {
    ui.round.textContent = ``;
  }
  
  ui.topStatus.textContent = state.topStatus;

  // Check for lock in status
  if (state.mainButtonName === 'Next Round') {
    ui.playerStatus.textContent = state.playerStatus;
    ui.cpuStatus.textContent = state.cpuStatus;
  }
  else if (state.mainButtonName === 'Lock In') {
    ui.playerStatus.textContent = 'Picking Move...';
    ui.cpuStatus.textContent = 'Picking Move...';
  }

  // Check for selection images
  if (state.playerSelection === null) {
    ui.playerPickImg.src = 'img/eye.png';
    state.playerSelectionText = 'Nothing';
  }
  else {
    ui.playerPickImg.src = 'img/' + state.playerSelection + '.png';
  }
  ui.playerPick.textContent = state.playerSelectionText;
  

  if (state.cpuSelection === null) {
    ui.cpuPickImg.src = 'img/eye.png';
    state.cpuSelectionText = 'Hidden';
  }
  else {
    ui.cpuPickImg.src = `img/${state.cpuSelection}.png`;
  }
  ui.cpuPick.textContent = state.cpuSelectionText;

  if (state.roundWinner === 'player') {
    ui.playerPickImg.style.borderBottomColor = colors.green;
    ui.cpuPickImg.style.borderBottomColor = colors.red;
  }
  else if (state.roundWinner === 'cpu') {
    ui.playerPickImg.style.borderBottomColor = colors.red;
    ui.cpuPickImg.style.borderBottomColor = colors.green;
  }
  else if (state.roundWinner === 'tie') {
    ui.playerPickImg.style.borderBottomColor = colors.yellow;
    ui.cpuPickImg.style.borderBottomColor = colors.yellow;
  }
  else {
    ui.playerPickImg.style.borderBottomColor = colors.blue;
    ui.cpuPickImg.style.borderBottomColor = colors.blue;
  }
};


// function get cpu input

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

// play round
function playRound(playerMove, cpuMove) {
  let winnerName = null;

  if (playerMove === cpuMove) winnerName = 'tie';
  
  else if (playerMove === 'rock') {
    if (cpuMove === 'scissors') {
      winnerName = 'player';
    }
    else if (cpuMove === 'paper') {
      winnerName = 'cpu';
    }
  }

  else if (playerMove === 'paper') {
    if (cpuMove === 'rock') {
      winnerName = 'player';
    }
    else if (cpuMove === 'scissors') {
      winnerName = 'cpu';
    }
  }

  else if (playerMove === 'scissors') {
    if (cpuMove === 'rock') {
      winnerName = 'cpu';
    }
    else if (cpuMove === 'paper') {
      winnerName = 'player';
    }
  }

  return winnerName;
}
// play game



buttons.main.addEventListener('click', function (e) {
  // If button says 'Start Game'
  if (state.mainButtonName === 'Start Game') {
    state.gameStarted = true;
    state.round = 1;
    state.cpuScore = 0;
    state.playerScore = 0;
    state.mainButtonName = 'Lock In';
    state.topStatus = 'Battle!';
    render();
  }

  else if (state.mainButtonName === 'Lock In') {
    if (state.playerSelection === null) {
      state.topStatus = 'Pick a move!';
      render();
    }

    else {
      state.cpuSelection = getComputerChoice();
      state.roundWinner = playRound(state.playerSelection, state.cpuSelection);
      
      if (state.roundWinner === 'player') {
        state.playerScore = state.playerScore + 1;
        state.topStatus = `${state.playerName} has won!`;
        state.playerStatus = 'Won!';
        state.cpuStatus = 'Lost!';
        customHeading = `Round ${state.round}: ${state.playerName} wins!`;
      }

      else if (state.roundWinner === 'cpu') {
        state.cpuScore = state.cpuScore + 1;
        state.topStatus = `${state.cpuName} has won!`;
        state.playerStatus = 'Lost!';
        state.cpuStatus = 'Won!';
        customHeading = `Round ${state.round}: ${state.cpuName} wins!`;
      }

      else {
        state.topStatus = 'Round is a tie!';
        state.playerStatus = 'Tied round!';
        state.cpuStatus = 'Tied round!';
        customHeading = `Round ${state.round}: It's a Tie!`;
      }

      if (state.cpuSelection === 'rock') state.cpuSelectionText = 'Rock';
      if (state.cpuSelection === 'paper') state.cpuSelectionText = 'Paper';
      if (state.cpuSelection === 'scissors') state.cpuSelectionText = 'Scissors';
      state.mainButtonName = 'Next Round';
      render();
    }
  }

  else if (state.mainButtonName === 'Next Round') {
    

    if (state.playerScore > 4 || state.cpuScore > 4) {
      state.mainButtonName === 'Restart';
      state.round = 0;
      state.cpuScore = 0;
      state.playerScore = 0;
      state.cpuSelection = null;
      state.playerSelection = null;
      state.topStatus = 'Game over!';
      state.cpuStatus = '';
      state.playerStatus = '';
      state.playerSelectionText = '';
      state.cpuSelectionText = ''; 
      if (state.roundWinner === 'player') {
        customHeading = `${state.playerName} has Won the Game!!!`;
      }
      else if (state.roundWinner === 'cpu') {
        customHeading = `${state.cpuName} has Won the Game!!!`;
      }

      // Hide everything when game over, force user to refresh page
      buttons.main.style.visibility = 'hidden';
      buttons.paper.style.visibility = 'hidden';
      buttons.rock.style.visibility = 'hidden';
      buttons.scissors.style.visibility = 'hidden';
      ui.playerScore.style.visibility = 'hidden';
      ui.cpuScore.style.visibility = 'hidden';
      ui.playerStatus.style.visibility = 'hidden';
      ui.cpuStatus.style.visibility = 'hidden';
      ui.playerPickImg.style.visibility = 'hidden';
      ui.cpuPickImg.style.visibility = 'hidden';
      ui.playerPick.style.visibility = 'hidden';
      ui.cpuPick.style.visibility = 'hidden';
      ui.topStatus.style.visibility = 'hidden';
      ui.round.style.visibility = 'hidden';
      if (state.roundWinner === 'player') {
        ui.cpuName.style.visibility = 'hidden';
      }
      else if (state.roundWinner === 'cpu') {
        ui.playerName.style.visibility = 'hidden';
      }
      ui.middleImg.style.visibility = 'hidden';
    }
    else {
      state.round = state.round + 1;
      state.cpuSelection = null;
      state.cpuStatus = 'Thinking...';
      state.playerStatus = 'Thinking...';
      state.playerSelectionText = 'Nothing';
      state.cpuSelectionText = 'Hidden';
      state.topStatus = 'Waiting...';
      state.mainButtonName = 'Lock In';
      state.roundWinner = null;
    }
    
    render()
  }

  else if (state.mainButtonName === 'Restart') {
    state.mainButtonName = 'Start Game';
  }

});

buttons.rock.addEventListener('click', function (e) {
  state.playerSelection = 'rock';
  state.playerSelectionText = 'Rock';
  render();
});

buttons.paper.addEventListener('click', function (e) {
  state.playerSelection = 'paper';
  state.playerSelectionText = 'Paper';
  render();
});

buttons.scissors.addEventListener('click', function (e) {
  state.playerSelection = 'scissors';
  state.playerSelectionText = 'Scissors';
  render();
});


render();
console.log(ui.cpuPickImg.style.borderColor);
console.log(ui.playerPickImg.style.borderColor);