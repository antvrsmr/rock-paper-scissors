function getComputerChoice(choices) {
    let randomChoice = Math.floor(Math.random() * choices.length);
    let chosen = choices[randomChoice];
    return chosen;
}

//let playerSelection = prompt("rock, paper, or scissors?:")
//let computerSelection = getComputerChoice(["rock", "paper", "scissors"])

let player=0
let computer=0

function playRound (playerSelection, computerSelection) {
    let playerCase = playerSelection.toLowerCase();

    if (playerCase === "rock" && computerSelection === "paper"){
        decision = "Lose";
        computer += 1;
        return decision;
    } else if (playerCase === "paper" && computerSelection === "scissors"){
        decision = "Lose";
        computer +=1;
        return decision;
    } else if (playerCase === "rock" && computerSelection === "scissors") {
        decision = "Win"
        player += 1;
        return decision;
    } else if (playerCase === "paper" && computerSelection === "rock") {
        decision = "Win";
        player += 1;
        return decision;
    } else if (playerCase === "scissors" && computerSelection === "paper"){
        decision = "Win";
        player += 1;
        return decision;
    } else if (playerCase === "scissors" && computerSelection === "rock") {
        decision = "Lose"
        computer += 1;
        return decision;
    } else {
        decision = "Tie"
        return decision
    }
}

function whoWins() {
    if (player > computer) {
        console.log("Player Wins")
    }
    else if (player == computer) {
        console.log("TIE!!!!")
    }
    else {
        console.log("Computer Wins")
    }
}

// Tallying score //
//let playRound2 = (playRound(playerSelection, computerSelection))
for (let i = 0; i < 5; ++i){

    if (player == 3 || computer == 3) {
        whoWins();
    } else {
    let playerSelection = prompt("rock, paper, or scissors?:")
    let computerSelection = getComputerChoice(["rock", "paper", "scissors"])
    let playRound2 = (playRound(playerSelection, computerSelection))
    playRound2;
    
    console.log(`Computer: ${computerSelection}`)
    console.log(`You: ${playerSelection}`)
    // console.log(playRound(playerSelection, computerSelection))

    console.log (`You: ${player}, Computer: ${computer}`)
    }
}

whoWins();


// console.log(gameOn(playRound2))

function user(name){
    console.log(name)
}
names = "ivy"
user(names)