// const select=document.querySelector('select');
// const list=document.querySelector('ul');
// const h1=document.querySelector('h1');

// select.addEventListener('change', () => {
//     const choice=select.value;
//     createCalendar(choice);
// }) 
// function createCalendar(month){
//     let days =31;
//     if (month === "February"){
//         days=28;
//     }else if (month === "April" || month === "June" || month === "September"){
//         days=30;
//     }
// }
// h1.textContent=month;
// for (let i=1; i<=days, i++;) {

// }
// select.value="January";
// createCalendar("January");

// function Greeting(x){
//     console.log(x);
// }
// Greeting("Hello World");

function getComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
   let choice = prompt("Enter your choice: rock, paper or scissors");
   choice.toLocaleLowerCase();
    return choice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'It is a tie';
    }
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore++;
            return 'You lose! Paper beats Rock';
        }else{
            humanScore++;
            return 'You win! Rock beats Scissors';
        }
    }
    if(humanChoice === 'paper'){
        if(computerChoice === 'scissors'){
            computerScore++;
            return 'You lose! Scissors beats Paper';
        }else{
            humanScore++;
            return 'You win! Paper beats Rock';
        }
    }
    if(humanChoice === 'scissors'){
        if(computerChoice === 'rock'){
            computerScore++;
            return 'You lose! Rock beats Scissors';
        }else{
            humanScore++;
            return 'You win! Scissors beats Paper';
        }
    }
}
        
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));

function playGame(){
    for(let i=0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    if(humanScore > computerScore){
        return 'You win!';
    }else if(humanScore < computerScore){
        return 'You lose!';
    }else{
        return 'It is a tie';
    }
}
console.log(playGame());