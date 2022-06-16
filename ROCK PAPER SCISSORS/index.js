function computerPlay(){
    let words = ["paper","scissorc","rock"];
    let random = Math.floor(Math.random()*words.length);
let word = words[random];
return word;
}
let playerScore = 0;
let computerScore = 0;

function round(playerSelection,computerSelection){
    if (computerSelection === "paper" && playerSelection ==="scissorc" ){
        playerScore++;
        console.log(`You win!${playerScore}-${computerScore}`);
       
    }else if(computerSelection === "scissorc" && playerSelection === "rock"){
        playerScore++;
        console.log(`You win!${playerScore}-${computerScore}`);
       
    }else if (computerSelection === "rock"&& playerSelection ==="paper"){
        playerScore++;
        console.log(`You win!${playerScore}-${computerScore}`);
     
    }else if (playerSelection === "paper" && computerSelection ==="scissorc" ){
        computerScore++;
        console.log(`You lose :( ${playerScore}-${computerScore}`);
        
    }else if(playerSelection === "scissorc" && computerSelection  === "rock"){
        computerScore++;
        console.log(`You lose :( ${playerScore}-${computerScore}`);
       
    }else if (playerSelection === "rock"&& computerSelection  ==="paper"){
        computerScore++;
        console.log(`You lose :( ${playerScore}-${computerScore}`);
        
}else if(playerSelection == computerSelection){
    console.log("Draw!");
}else{
    console.log("Enter normal format");
}
}




function game(){

    for(let i=0;i<5;i++){
        const playerSelection = prompt("enter your choose").toLowerCase();
        const computerSelection = computerPlay();
       console.log( round(playerSelection,computerSelection));
    }
}


console.log(game());