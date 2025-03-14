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

const buttons = document.querySelectorAll('button');
const resultDiv = document.createElement('div'); // Create a div for results
const scoreDiv = document.createElement('div'); // Create a div for scores
document.body.appendChild(resultDiv); 
document.body.appendChild(scoreDiv);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    
    if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (humanScore === 5 || computerScore === 5) return; // Stop if there's already a winner

        const humanChoice = button.textContent.trim();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        // Update resultDiv with round result
        resultDiv.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}. ${result}`;

        // Update scoreDiv with running score
        scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

        // Check for a winner
        if (humanScore === 5) {
            resultDiv.textContent += ' 🎉 You won the game!';
            disableButtons();
        } else if (computerScore === 5) {
            resultDiv.textContent += ' 😞 Computer won the game!';
            disableButtons();
        }
    });
});

// Function to disable buttons when game ends
function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}



// function playGame(){
//     for(let i=0; i<5; i++){
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         console.log(playRound(humanChoice, computerChoice));
//     }
//     if(humanScore > computerScore){
//         return 'You win!';
//     }else if(humanScore < computerScore){
//         return 'You lose!';
//     }else{
//         return 'It is a tie';
//     }
// }
// console.log(playGame());