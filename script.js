function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');

    score.textContent = score.textContent || 0

    if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent  = "You Lose! Paper beats Rock";
        score.textContent = parseInt(score.textContent) - 1;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        result.textContent  = "You Lose! scissor beats paper";
        score.textContent = parseInt(score.textContent) - 1;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        result.textContent  = "You Lose! rock beats scissor";
        score.textContent = parseInt(score.textContent) - 1;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        result.textContent  = "You Win! Rock beats scissor";
        score.textContent = parseInt(score.textContent) + 1;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        result.textContent  = "You Win! scissor beats paper";
        score.textContent = parseInt(score.textContent) + 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent  = "You Win! paper beats rock";
        score.textContent = parseInt(score.textContent) + 1;
    } else {
        result.textContent  = "Tie";
    }

    if(parseInt(score.textContent) == 5){
        alert("You win")
    }
    if(parseInt(score.textContent) == -5){
        alert("You lose")
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

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click',() => playRound(button.innerHTML,  computerPlay() ));
});