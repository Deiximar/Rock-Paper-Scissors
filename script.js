function getComputerChoice() {
  const CHOICE = Math.floor(Math.random() * 3);

  switch (CHOICE) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
  }
}

function getPlayerSelection() {
  const MYCHOICES = ["rock", "paper", "scissor"];
  let playerChoice;
  do {
    playerChoice = prompt("Let's play! Rock Paper o Scissor!");
  } while (
    MYCHOICES.indexOf(playerChoice.toLowerCase()) === -1
  );

  return playerChoice.toLowerCase();
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerSelection();

  console.log("computer choice: " + computerChoice);
  console.log("player choice: " + playerChoice);

  if (playerChoice === computerChoice) {
    return "Tie! Let's play again!";
  }

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "You lose! Paper beats Rock!";
    } else {
      return "You won! Rock beats Scissor!";
    }
  }

  if (playerChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return "You lose! Scissor beats Paper!";
    } else {
      return "You won! Paper beats Rock!";
    }
  }

  if (playerChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return "You lose! Rock beats Scissor!";
    } else {
      return "You won! Scissor beats Paper!";
    }
  }
}

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  console.log("play game");

  for (let i = 0; i < 5; i++) {
    let result = playRound();
    console.log(result);
    if (result.includes('won')) {
      playerScore += 1;
    } else if (result.includes('lose')) {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    return `You won the game! ${playerScore} vs. ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `You lose the game! ${playerScore} vs. ${computerScore}`;
  } else {
    return `There are no winners! ${playerScore} vs. ${computerScore}`;
  }

}

console.log(playGame());