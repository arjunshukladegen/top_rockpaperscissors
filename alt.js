const colors = {
  blank: 'transparent',
  red: '#FF0000',
  yellow: '#FFF000',
  green: '#00FF00',
  blue: '#000FFF',
}

const state = {
  round: 0, // the round number
  cpuScore: 0, // the computer's score
  playerScore: 0, // the player's score
  cpuSelection: null, // move selected by ai at random 
  playerSelection: null, // the move that player is hovering
  cpuName: 'Computer', // name that appears for cpu
  playerName: 'Human', // name that appears for player
  gameStarted: false, // (checks if game has started)
  roundWinner: null, // (cpu, human, or tie)
  playerLocked: false, // (true if player is locked in)
  mainButtonName: 'Start Game',
  topStatus: 'Waiting...',
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
};

const buttons = {
  main: document.querySelector('#main-game'),
  rock: document.querySelector('#rock-button'),
  paper: document.querySelector('#paper-button'),
  scissors: document.querySelector('#scissors-button'),
};

const heading = document.querySelector('#heading');

function render() {
  // Top Bar
  if (state.gameStarted === true) {
  heading.textContent = `Game Started (Round ${state.round})`;
  }

  // Buttons
  buttons.main.textContent = state.mainButtonName;

  // Standard UI Content
  ui.playerName.textContent = state.playerName;
  ui.cpuName.textContent = state.cpuName;
  ui.playerScore.textContent = `Score: ${state.playerScore}`;
  ui.cpuScore.textContent = `Score: ${state.cpuScore}`;
  ui.playerPick.textContent = state.playerPick;
  ui.cpuPick.textContent = state.cpuPick;
  ui.round.textContent = `Round ${state.round}`;
  ui.topStatus.textContent = state.topStatus;

  // Check for lock in status
  if (state.playerLocked === true) {
    ui.playerStatus.textContent = 'Locked in.';
    ui.cpuStatus.textContent = 'Locked in.';
  }
  else if (state.playerLocked === false) {
    ui.playerStatus.textContent = 'Thinking...';
    ui.cpuStatus.textContent = 'Thinking...';
  }

  // Check for selection images
  if (state.playerSelection === null) {
    ui.playerPickImg.src = 'img/eye.png';
    state.playerSelectionText = 'Nothing';
    if (state.gameStarted === false) {
      ui.playerPickImg.style.borderBottomColor = colors.blank;
    }
    else {
      ui.playerPickImg.style.borderBottomColor = colors.yellow;
    }
  }
  else {
    ui.playerPickImg.src = 'img/' + state.playerSelection + '.png';
    if (state.playerLocked === true) {
      ui.playerPickImg.style.borderBottomColor = colors.green;
    }
    else {
      ui.playerPickImg.style.borderBottomColor = colors.blue;
    }
  }
  ui.playerPick.textContent = state.playerSelectionText;
  

  if (state.cpuSelection === null) {
    ui.cpuPickImg.src = 'img/eye.png';
    state.cpuSelectionText = 'Hidden';
    if (state.gameStarted === false) {
      ui.cpuPickImg.style.borderColor = colors.blank;
    }
    else {
      ui.cpuPickImg.style.borderColor = colors.blue;
    }
  }
  else {
    ui.cpuPickImg.src = `img/${state.cpuSelection}.png`;
    ui.cpuPickImg.style.borderColor = colors.green;
  }
  ui.cpuPick.textContent = state.cpuSelectionText;
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
    else if (cpuuMove === 'paper') {
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
    state.playerSelection = null;
    state.playerLocked = false;
    state.mainButtonName = 'Lock In';
    state.topStatus = 'Battle!';
    render();
  }

  else if (state.mainButtonName === 'Lock In') {
    if (playerPick === 'null') {
      state.topStatus = 'Pick a move!';
      render();
    }
    else {
      state.cpuSelection = getComputerChoice();
      state.roundWinner = playRound(state.playerSelection, state.cpuSelection);
      
      if (roundWinner === 'player') {
        state.playerScore = state.playerScore + 1;
        state.topStatus = `${state.playerName} has won!`;
        state.playerStatus = 'Won the round!';
        state.cpuStatus = 'Lost the round!';
      }
      else if (roundWinner === 'cpu') {
        state.cpuScore = state.cpuScore + 1;
        state.topStatus = `${state.cpuName} has won!`;
        state.playerStatus = 'Lost the round!';
        state.cpuStatus = 'Won the round!';
      }
      else {
        state.topStatus = 'Round is a tie!';
        state.playerStatus = 'Tied round!';
        state.cpuStatus = 'Tied round!';
      }
      //figure out who won function//
      if (state.cpuSelection === 'rock') state.cpuSelectionText = 'Rock';
      if (state.cpuSelection === 'paper') state.cpuSelectionText = 'Paper';
      if (state.cpuSelection === 'scissors') state.cpuSelectionText = 'Scissors';
      render();
    }
  }

  else if (state.mainButtonName === 'Next Round') {

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