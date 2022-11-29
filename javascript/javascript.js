const weapons = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');


function getComputerChoice() {
let choice = weapons[Math.floor(Math.random() * weapons.length)];
return(choice);
}


function playRound(userChoice, computerChoice) {
        const outcome = document.querySelector('.outcome');

    if (userChoice === computerChoice) {
     const p = document.createElement('p');
        p.textContent = `${computerChoice}! It's even!`;
        outcome.appendChild(p);  
    }
    else if ((userChoice === "rock") && (computerChoice === "scissors")) {
        playerScore++ ;
        const p = document.createElement('p');
        p.textContent = `${computerChoice}! You win! Rock beats scissors. Your score: ${playerScore} Computer score: ${computerScore}`
        outcome.appendChild(p);
    }
    else if ((userChoice === "rock") && (computerChoice === "paper")) {
         computerScore++ ;
         const p = document.createElement('p');
         p.textContent = `${computerChoice}! You loose! Paper wraps the rock! Your score: ${playerScore} Computer score: ${computerScore}`
         outcome.appendChild(p);
    }
    else if ((userChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++ ;
        const p = document.createElement('p');
        p.textContent =`${computerChoice}! You loose! Scissors cut the paper. Your score: ${playerScore} Computer score: ${computerScore}`;
        outcome.appendChild(p);
    }
    else if ((userChoice === "paper") && (computerChoice === "rock")) {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `${computerChoice}! You win! Paper beats rock. Your score: ${playerScore} Computer score: ${computerScore}`;
        outcome.appendChild(p);
    } 
    else if ((userChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++ ;
        const p = document.createElement('p');
        p.textContent = `${computerChoice}! You loose! Rock smashes the scissors. Your score: ${playerScore} Computer score: ${computerScore}`;
        outcome.appendChild(p);
        
    }
    else if ((userChoice === "scissors") && (computerChoice === "paper")) {
        playerScore++ ;
        const p = document.createElement('p');
        p.textContent = `${computerChoice}! You win! Cheers! Your score: ${playerScore} Computer score: ${computerScore}`;
        outcome.appendChild(p);
         
    }
}


    const body = document.querySelector('body');
    const winner = document.createElement('div');
    winner.classList.add('winner');
    body.appendChild(winner);


function checkForWinner (playerScore,computerScore){

    if (playerScore === 5) {
    const h2 = document.createElement('h2');
    h2.textContent= "Yohoo! Winner of the day!!";
    h2.setAttribute('style', 'color: green')
    winner.appendChild(h2);}

    else if (computerScore === 5) {
    const h2 = document.createElement('h2');
    h2.textContent= "Ouch, you lost this match unfortunatelly..";
    h2.setAttribute('style', 'color: red')
    winner.appendChild(h2);
    }

    
}






rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const userSelection = "rock";
    console.log(playRound(userSelection,computerSelection));
    console.log(checkForWinner(playerScore,computerScore));
    
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const userSelection = "paper";
    console.log(playRound(userSelection,computerSelection));
    console.log(checkForWinner(playerScore,computerScore));
    


});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const userSelection = "scissors";
    console.log(playRound(userSelection,computerSelection));
    console.log(checkForWinner(playerScore,computerScore));

}); 







    //function game () {
        // outcome = document.querySelector('.outcome');
      //  if (round === 4) {

                        

         //   if (computerScore === 5) {
          //      const p = document.createElement('p');
          //      p.textContent = "Ouch, you lost this match unfortunatelly..."
            //    outcome.appendChild(p);
          //  }
          //  else if ( playerScore === 5) {
          //      const p = document.createElement('p');
            //    p.textContent = "Yohoo! Winner of the day!!"
            //    outcome.appendChild(p);
           // }
      //  }}; 

        
        
    
   
    

    
