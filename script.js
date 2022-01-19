
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "You Lose! scissor beats paper";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You Lose! rock beats scissor";
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return "You Win! Rock beats scissor";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "You Win! scissor beats paper"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! paper beats rock";
    } else {
        return "Tie";
    }

}

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        return "rock";
    } else if (rand == 1) {
        return "paper";
    } else {
        return "scissor";
    }


}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);