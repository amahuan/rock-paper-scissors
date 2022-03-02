function computerPlay(){
    let num=Math.floor(Math.random()*3)+1;
    if(num===3){return 'Scissors';}
    else if(num===2){return 'Paper';}
    else if(num===1){return 'Rock';}
    else
}


function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));