const colors = {
  blank: '',
  red: '#FF0000',
  yellow: '#FFF000',
  green: '#00FF00',
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
    ui.playerPickImg.style.borderColor = colors.red;
  }
  else {
    ui.playerPickImg.src = 'img/' + state.playerSelection + '.png';
    if (state.playerLocked === true) {
      ui.playerPickImg.style.borderColor = colors.green;
    }
    else {
      ui.playerPickImg.style.borderColor = colors.yellow;
    }
  }
  ui.playerPick.textContent = state.playerSelectionText;

  if (gameStarted === false) {
    ui.playerPickImg.style.borderColor = colors.blank;
  }
  

  if (state.cpuSelection === null) {
    ui.cpuPickImg.src = 'img/eye.png';
    state.cpuSelectionText = 'Hidden';
    ui.cpuPickImg.style.borderColor = colors.yellow;
  }
  else {
    ui.cpuPickImg.src = `img/${state.cpuSelection}.png`;
    ui.cpuPickImg.style.borderColor = colors.green;
  }
  ui.cpuPick.textContent = state.cpuSelectionText;
};

// function get user input

// function get cpu input

// play round

// play game



buttons.main.addEventListener('click', function (e) {
  // If button says 'Start Game'
  if (state.mainButtonName === 'Start Game') {
    state.gameStarted = true;
    state.round = 1;
    state.playerSelection = null;
    state.playerLocked = false;
    state.mainButtonName = 'Lock In';
    state.topStatus = 'Battle!';
    render();
  }

  else if (state.mainButtonName === 'Lock In') {

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