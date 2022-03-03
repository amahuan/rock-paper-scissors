let playerWin=0;
let computerWin=0;

function game() {
    //play a 5 round game
    for (let i = 0; i < 5; i++) {
        // players make a choice each time
        const playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
        // if player inputs invalid option, they are alerted and asked to re-enter choice.  i is reduced so that it does not get included in the 5 rounds
            if((playerSelection!=='rock')&&(playerSelection!=='paper')&&(playerSelection!=='scissors')){
                alert('Only enter rock, paper or scissors');
                i--;
            }
        const computerSelection = computerPlay();
        // prints winning statement
        console.log(playRound(playerSelection, computerSelection));
        //prints tally of wins
        console.log(`Player: ${playerWin}, Computer: ${computerWin}`);
    }
    //if player's number of wins is greater than the computer's, player is declared the winner.  if computer's number of wins is greater, computer is declared the winner.  if tied, draw. 
    if(playerWin>computerWin){
        console.log('Player WINS!')
    }
    else if(playerWin<computerWin){
        console.log('Computer WINS!')
    }
    else{
        console.log('Draw. Play Again')
    }
    //asks player if she wants a rematch at the end of the 5 rounds
    const newGame=confirm("Rematch?");
    if (newGame===true){
        console.clear();
        playerWin=0;
        computerWin=0;
        game();
    }
}

game();

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
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "Draw, play again!";
    }
    else if((playerSelection==='rock'&&computerSelection==='scissors')||(playerSelection==='paper'&&computerSelection==='rock')||(playerSelection==='scissors'&&computerSelection==='paper')){
        playerWin++;
        return "You win! " + playerSelection[0].toUpperCase()+playerSelection.slice(1,playerSelection.length) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1,computerSelection.length) +"!";
    }
    else if((playerSelection!=='rock')&&(playerSelection!=='paper')&&(playerSelection!=='scissors')){
        return "Only enter valid item";
    }
    else {
        computerWin++;
        return "You lose! " + computerSelection[0].toUpperCase()+computerSelection.slice(1,computerSelection.length) + " beats " + playerSelection[0].toUpperCase()+playerSelection.slice(1,playerSelection.length) + "!";
    }
}
  
//   const playerSelection = prompt("Rock, paper, scissors?");
//   const computerSelection = computerPlay();
//   console.log(computerSelection);
//   console.log(playRound(playerSelection, computerSelection));


// function playerResult(playerSelection){
//     if(playerSelection==='rock'){return 1;}
//     else if(playerSelection==='paper'){return 2;}
//     else if(playerSelection==='scissors'){return 3;}
// }

// function computerResult(computerSelection) {
//     if(computerSelection==='rock'){return 1;}
//     else if(computerSelection==='paper'){return 2;}
//     else if(computerSelection==='scissors'){return 3;}
// }

