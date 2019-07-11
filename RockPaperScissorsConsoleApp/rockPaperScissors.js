const getUserChoice = userInput =>{
  userInput = 
  userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { return userInput; 
} else {
  console.log('ERROR!');
}
};
/*console.log(getUserChoice('Paper'));
console.log(getUserChoice('rock'));
console.log(getUserChoice('scissors'));
console.log(getUserChoice('knife'));*/
const getComputerChoice = function() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: 
    	return 'rock';
    case 1:
    	return 'paper';
    case 2:
    	return 'scissors';
  };
}
//console.log(getComputerChoice());
const determineWinner = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie';
  };
  if (userChoice === 'bomb') {
    return 'Player WINS!';
  };
  
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
};
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  
console.log(determineWinner(userChoice, computerChoice));
};
playGame();