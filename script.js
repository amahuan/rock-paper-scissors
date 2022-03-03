function computerPlay(){
    let num=Math.floor(Math.random()*3)+1;
    if(num===3){return 'Scissors';}
    else if(num===2){return 'Paper';}
    else if(num===1){return 'Rock';}
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerResult(playerSelection)===computerResult(computerSelection)){return `Draw, play again!`;}
    else if(playerResult(playerSelection)>computerResult(computerSelection)){return "You win! " + playerSelection[0].toUpperCase()+playerSelection.slice(1,playerSelection.length) 
    + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1,computerSelection.length) +"!";}
    else if(playerResult(playerSelection)<computerResult(computerSelection)){return "You lose! " + computerSelection[0].toUpperCase()+computerSelection.slice(1,computerSelection.length) + " beats " + playerSelection[0].toUpperCase()+playerSelection.slice(1,playerSelection.length) + "!"}
   }
  
  const playerSelection = prompt("Rock, paper, scissors?");
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));

    function game() {
      for(let i=1;i<=5;i++){
            console.log(playRound());
      }
  }
  //if  

function playerResult(playerSelection){
    if(playerSelection==='rock'){return 1;}
    else if(playerSelection==='paper'){return 2;}
    else if(playerSelection==='scissors'){return 3;}
}

function computerResult(computerSelection) {
    if(computerSelection==='rock'){return 1;}
    else if(computerSelection==='paper'){return 2;}
    else if(computerSelection==='scissors'){return 3;}
}