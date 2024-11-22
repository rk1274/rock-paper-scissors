let rockButton = document.querySelector(".ROCK");
let paperButton = document.querySelector(".PAPER");
let scissorsButton = document.querySelector(".SCISSORS");
let resultScreen = document.querySelector(".result");
let computerScoreScreen = document.querySelector(".display .cScore");
let playerScoreScreen = document.querySelector(".display .pScore");

let computerDisplay = document.querySelector(".display .computer")
let playerDisplay = document.querySelector(".display .player")

let playerScore = 0;
let computerScore = 0;

let playing = false;

rockButton.addEventListener('click', () => {
    playerDisplay.src = "images/ROCK.png"
    playGame("ROCK")
})

const playGame = (humanChoice) => {
    if (!playing) {
        playerScore = 0;
        computerScore = 0;
        computerScoreScreen.textContent = 0;
        playerScoreScreen.textContent = 0;
        playing = true;
    }

    let roundWinner = playRound(humanChoice, getComputerChoice());
    if (roundWinner === "computer") {
        computerScore++;
        computerScoreScreen.textContent = computerScore;
    } else if (roundWinner === "player") {
        playerScore++;
        playerScoreScreen.textContent = playerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore === computerScore) {
            resultScreen.textContent = `It's a tie with ${playerScore} points each.`
        } else if (playerScore > computerScore) {
            resultScreen.textContent = `Player wins ${playerScore} to ${computerScore}`
        } else {
            resultScreen.textContent = `Computer wins ${computerScore} to ${playerScore}`
        }

        playing = false;
    }
}

const getComputerChoice = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerDisplay.src = "images/ROCK.png"
        return "ROCK";
    } else if (computerSelection === 1) {
        computerDisplay.src = "images/PAPER.png"
        return "PAPER";
    } else {
        computerDisplay.src = "images/SCISSORS.png"
        return "SCISSORS";
    }
}

const playRound = (human, computer) => {
    if (human === computer) {
        resultScreen.textContent = `A tie`;
        return 
    } else if ((human === "ROCK" && computer === "SCISSORS") ||
        (human === "PAPER" && computer === "ROCK") ||
        (human === "SCISSORS" && computer === "PAPER")) {
        resultScreen.textContent = `You win this round! ${human} beats ${computer}.`;
        return "player"
    } else if ((human === "PAPER" && computer === "SCISSORS") ||
        (human === "SCISSORS" && computer === "ROCK") ||
        (human === "ROCK" && computer === "PAPER")) {
        resultScreen.textContent = `You lose this round! ${computer} beats ${human}.`;
        return "computer"
    }
}
paperButton.addEventListener('click', () => {
    playerDisplay.src = "images/PAPER.png"
    playGame("PAPER")
})
scissorsButton.addEventListener('click', () => {
    playerDisplay.src = "images/SCISSORS.png"
    playGame("SCISSORS")
})




