console.log("Hello, Welcome to Rock-Paper-Scissors game!!");

function getComputerChoice() {

    const random = Math.random();
    if(random <= 0.33){
        console.log('Computer chooses Paper');
        return 'paper';
    }else if(random <= 0.67){
        console.log('Computer chooses Scissors');
        return 'scissors';
    }else{
        console.log('Computer chooses Rock');
        return 'rock';
    }
}

function getHumanChoice(){

    const humanChoice = prompt('Whats your choice: ');
    console.log('Human chooses ' + humanChoice.toLowerCase());
    return humanChoice.toLowerCase();
}


function playGame(){
    let humanScore = 0, computerScore = 0;
    for(let i = 1; i <= 5; i++){
        console.log('--- Round ' + i + " ---")
        let result = playRound(getHumanChoice(), getComputerChoice());
        if(result === 'Human'){
            humanScore++;
        }else if(result === 'Computer'){
            computerScore++;
        }else{
            console.log('Round ' + i + ' is a Draw!');
        }
        console.log('Scores: Human - ' + humanScore + ' , Computer - ' + computerScore);
    }

    if(humanScore > computerScore){
        console.log('Congratulations!! Human has Won!!');
    }else if(humanScore < computerScore){   
        console.log('Congratulations!! Computer has Won!!');
    }else{
        console.log('Its a TIE!!');
    }
}


function playRound(humanChoice, computerChoice){

    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('Computer loses! Scissors beats Paper');
        return 'Human';
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('Computer loses! Rock beats Scissors');
        return 'Human';
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('Computer loses! Paper beats Rock');
        return 'Human';
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('Human loses! Rock beats Scissors');
        return 'Computer';
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('Human loses! Scissors beats Paper');
        return 'Computer';
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('Human loses! Paper beats Rock');
        return 'Computer';
    }else {
        console.log('No one wins. Same choice made!!')
    }
}

playGame();
