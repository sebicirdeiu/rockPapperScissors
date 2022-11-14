const weapons = ["rock","paper","scrissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
let choice = weapons[Math.floor(Math.random() * weapons.length)];
return(choice);
}


function playRound(userChoice, computerChoice) {
    
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
        return("It's even!")  
    }
    else if ((userChoice === "rock") && (computerChoice === "scrissors")) {
        playerScore++
        return(`You win! Rock beats scrissors. Your score: ${playerScore} Computer score: ${computerScore}`)
        
    }
    else if ((userChoice === "rock") && (computerChoice === "paper")) {
         computerScore++ 
         return(`You loose! Paper wraps the rock! Your score: ${playerScore} Computer score: ${computerScore}`)
        
    }
    else if ((userChoice === "paper") && (computerChoice === "scrissors")) {
        computerScore++
        return(`You loose! Scrissors cut the paper. Your score: ${playerScore} Computer score: ${computerScore}`)
        
    }
    else if ((userChoice === "paper") && (computerChoice === "rock")) {
        playerScore++
        return(`You win! Paper beats rock. Your score: ${playerScore} Computer score: ${computerScore}`)
    } 
    else if ((userChoice === "scrissors") && (computerChoice === "rock")) {
        computerScore++
        return(`You loose! Rock smashes the scrissors. Your score: ${playerScore} Computer score: ${computerScore}`)
        
    }
    else if ((userChoice === "scrissors") && (computerChoice === "paper")) {
        playerScore++
        return(`You win! Cheers! Your score: ${playerScore} Computer score: ${computerScore}`)
         
    }
}




function game() {
    for (let i=0; i<5; i++) {
    const userChoice = prompt("Choose your weapon:,", "Rock? Paper? Scrissors?");
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(playRound(userChoice,computerChoice)) }

    if (playerScore > computerScore) {
        alert("You won the match!  Congrat's!")
    }
    else if (computerScore > playerScore) {
        alert("Better luck next time! You lost this one...")
    }
    else if (computerScore === playerScore) {
        alert("It's a tie! One more match to decide the winner!")
    }

}
game()





    