let playerWin=0;
let computerWin=0;
const buttons=document.querySelectorAll('button');

//random computer play
function computerPlay(){
    let num=Math.floor(Math.random()*3)+1;
    if(num===3){
        return 'Scissors';
    }
    else if(num===2){
        return 'Paper';
    }
    else if(num===1){
        return 'Rock';
    }
}
//based on the player's choice and computer's choice, this function determines the winner and increases their tally of wins
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    var results='';
    var score='';
    if(playerSelection==computerSelection){
        results+="Tie! Both player and computer drew " + playerSelection + ".";
        score+=`Player: ${playerWin}
        Computer: ${computerWin}`;       
    }
    else if((playerSelection=='Rock'&&computerSelection=='Scissors')||(playerSelection=='Paper'&&computerSelection=='Rock')||(playerSelection=='Scissors'&&computerSelection=='Paper')){
        playerWin+=1;
        results+="Player wins this round! " + playerSelection + " beats " + computerSelection + "!";
        score+=`Player: ${playerWin}
        Computer: ${computerWin}`;
        //once player reaches 5 wins, game ends and player has option to reset and play again
        if(playerWin===5){
            score+=`<br><br>PLAYER WINS THE GAME.`;
            disableButtons();
            addResetButton();
        }
    }
    else {
        computerWin+=1;
        results+="You lose this round! " + computerSelection + " beats " + playerSelection + "!";
        score+=`Player: ${playerWin}
        Computer: ${computerWin}`;
        //once computer reaches 5 wins, game ends and player has option to reset and play again
        if(computerWin===5){
            score+=`<br><br>COMPUTER WINS THE GAME.`;
            disableButtons();
            addResetButton()
        }
    }
    document.getElementById('results').textContent=results;
    document.getElementById('outcome').innerHTML=score;
}
//adds eventListener for each of rock, paper and scissors buttons
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        playRound(button.id);
      });
    })
//when the reset button is generated after the game and is clicked, all scores reset to 0 and score elements are blanked out
function resetGame(){
    playerWin=0;
    computerWin=0;
    document.getElementById('results').textContent='';
    document.getElementById('outcome').innerHTML='';
    reset.innerHTML='';
    enableButtons();
}
//generates reset function at the end of the game
function addResetButton(){
    let resetButton;
    const reset=document.querySelector('#reset');
    reset.innerHTML='<button id="resetButton">RESET</button>';
    resetButton=document.querySelector('#resetButton');
    resetButton.addEventListener('click',resetGame);
}
//when game finishes, rock/paper/scissor buttons are disabled to prevent further clicking
function disableButtons(){
    buttons.forEach((button) => {
        button.disabled=true;
    });   
}
//when game is reset, rock/paper/scissor buttons are re-enabled
function enableButtons(){
    buttons.forEach((button) => {
        button.disabled=false;
    });   
}