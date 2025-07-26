console.log("Hello, Welcome to Rock-Paper-Scissors game!!");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const human = document.querySelector('.human');
const computer = document.querySelector('.computer');

let humanScore = 0, computerScore = 0, roundsPlayed = 0;

human.textContent = 'Human: 0';
computer.textContent = 'Computer: 0';

function getComputerChoice() {

    const random = Math.random();
    if(random <= 0.33){
        alert('Computer chooses Paper');
        return 'paper';
    }else if(random <= 0.67){
        alert('Computer chooses Scissors');
        return 'scissors';
    }else{
        alert('Computer chooses Rock');
        return 'rock';
    }
}

function updateResultInUi(result){
    
    if(result === 'Human'){
        humanScore++;
        human.textContent = 'Human: ' + humanScore;
    }else if(result === 'Computer'){
        computerScore++;
        computer.textContent = 'Computer: ' + computerScore;
    }else{
        console.log('Its a Draw!');
    }
    console.log('Scores: Human - ' + humanScore + ' , Computer - ' + computerScore);
}

function playRound(humanChoice, computerChoice){

    console.log('Human Choice is: ' + humanChoice);
    console.log('Computer Choice is: ' + computerChoice);

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

function checkWinner(){
    if(humanScore > computerScore){
        console.log('Congratulations!! Human has Won!!');
        alert('Congratulations!! Human has Won!!');
    }else if(humanScore < computerScore){   
        console.log('Congratulations!! Computer has Won!!');
        alert('Congratulations!! Computer has Won!!');
    }else{
        console.log('Its a TIE!!');
        alert('Its a TIE!!');
    }
}

rock.addEventListener("click", () => {
    if(roundsPlayed < 5){
        console.log('--- Round ' + (roundsPlayed + 1) + " ---");
        let result = playRound("rock" , getComputerChoice());
        updateResultInUi(result);
        roundsPlayed++;
        if(roundsPlayed === 5) { checkWinner(); }
    }
    
});

paper.addEventListener("click", () => {
    if(roundsPlayed < 5){
        console.log('--- Round ' + (roundsPlayed + 1) + " ---");
        let result = playRound("paper" , getComputerChoice());
        updateResultInUi(result);
        roundsPlayed++;
        if(roundsPlayed === 5) { checkWinner(); }
    }
})
;
scissors.addEventListener("click", () => {
    if(roundsPlayed < 5){
        console.log('--- Round ' + (roundsPlayed + 1) + " ---");
        let result = playRound("scissors" , getComputerChoice());
        updateResultInUi(result);
        roundsPlayed++;
        if(roundsPlayed === 5) { checkWinner(); }
    }
});
