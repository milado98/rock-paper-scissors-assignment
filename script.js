function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }
  
  function lowerAndCapital(text) {
    let lowerCaseText = text.toLowerCase();
    return lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
  };
  
  function singleRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      console.log("It's a Draw");
      return -1;
    } else {
      if(playerSelection === "Rock") {
        if(computerSelection === "Scissors") {
          console.log("You win! Rock beats Scissors!");
          return 1;
        } else {
          console.log("You lose! Paper beats Rock!");
          return 0;
        }
      } else if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
          console.log("You win! Paper beats Rock!");
          return 1;
        } else {
          console.log("You lose! Scissors beat Paper!")
          return 0;
        }
      } else if(playerSelection === "Scissors") {
        if(computerSelection === "Paper") {
          console.log("You win! Scissors beat Paper!")
          return 1;
        } else {
          console.log("You lose! Rock beats Scissors!")
          return 0;
        }
      } else {
        console.log("Please enter a valid option!")
        return 2;
      }
    }
  };
  
  function game() {
    let playerWon = 0;
    let computerWon = 0
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter your Option: ROCK, PAPER OR SCISSORS?");
      let currentPlayerSelection = lowerAndCapital(playerSelection);
      let currentResult = singleRound(currentPlayerSelection, computerPlay());
      while (currentResult === 2) {
        let newChoice = prompt("Enter your Option: ");
        let lowerNewChoice = lowerAndCapital(newChoice);
        currentResult = singleRound(lowerNewChoice, computerPlay());
      }
      if(currentResult === 0) {
        computerWon++;
      } else if(currentResult === 1) {
        playerWon++;
      } else {
        computerWon++;
        playerWon++;
       } 
      console.log(`Round ${i+1}!`)
    }
    console.log(`Result: Computer Score: ${computerWon} and Player1 Score: ${playerWon}`);
    if (computerWon > playerWon) {
      console.log("Computer wins!");
    } else if (playerWon > computerWon) {
      console.log("Player1 wins!")
    } else {
      console.log("It's a Draw!")
    }
    console.log("Refresh the page for a new game!")
  };
  
  game();