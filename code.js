getComputerChoice = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "ROCK";
    } else if (computerSelection === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

getHumanChoice = () => {
    let humanSelection = prompt("Make your decision:\nRock\nPaper\nScissors").toUpperCase();
    if (!["ROCK", "PAPER", "SCISSORS"].includes(humanSelection)) {
        alert("Wrong input..");
        getHumanChoice()
    }
    return humanSelection;
}

playRound = (human, computer) => {
    if (human === computer) {
        return
    } else if ((human === "ROCK" && computer === "SCISSORS") ||
        (human === "PAPER" && computer === "ROCK") ||
        (human === "SCISSORS" && computer === "PAPER")) {
        console.log(`You win this round! ${human} beats ${computer}.`);
        return "player"
    } else if ((human === "PAPER" && computer === "SCISSORS") ||
        (human === "SCISSORS" && computer === "ROCK") ||
        (human === "ROCK" && computer === "PAPER")) {
        console.log(`You lose this round! ${computer} beats ${human}.`);
        return "computer"
    }
}

playGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        if (roundWinner === "computer") {
            computerScore++;
        } else if (roundWinner === "player") {
            playerScore++;
        }
    }
    if (playerScore === computerScore) {
        console.log(`It's a tie with ${playerScore} points each.`)
    } else if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}`)
    } else {
        console.log(`Computer wins ${computerScore} to ${playerScore}`)
    }
}

playGame();