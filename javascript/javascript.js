const weapons = ["rock","paper","scrissors"];


function getComputerChoice() {
let choice = weapons[Math.floor(Math.random() * weapons.length)];
return(choice);
}


let computerChoice = getComputerChoice();
let userChoice = prompt ("Choose your weapon:");


function playRound(userChoice, computerChoice) {

    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (userChoice === computerChoice) {
        return("It's even!") + (" ") + ("Score:") + (score = 0)
    }
    else if ((userChoice === "rock") && (computerChoice === "scrissors")) {
        return("You win! Rock beats scrissors.") + (" ") + (
            "Computer  Score:") + (" ")  + (score=1)
    }
    else if ((userChoice === "rock") && (computerChoice === "paper")) {
         return("You loose! Paper wraps the rock!") + (" ") + (
            "Computer  Score:") + (" ")  + (computerScore=1)
    }
    else if ((userChoice === "paper") && (computerChoice === "scrissors")) {
        return("You loose! Scrissors cut the paper.") + (" ") + (
            "Computer  Score:") + (" ")  + (computerScore=1)
    }
    else if ((userChoice === "paper") && (computerChoice === "rock")) {
        return("You win! Paper beats rock.") + (" ") + (
            "Score:") + (" ")   + (score = 1)
    }
    else if ((userChoice === "scrissors") && (computerChoice === "rock")) {
        return("You loose! Rock smashes the srissors") + (" ") + (
            "Computer Score:") + (" ") + (computerScore=1)
    }
    else if ((userChoice === "scrissors") && (computerChoice === "paper")) {
        return("You win! Cheers!") + (" ") + (
            "Score:") + (" ") + (score = 1)
    }
}

console.log(getComputerChoice());
console.log(playRound(userChoice,computerChoice))





    