let playerScore = 0;
let computerScore = 0;

document.getElementById("new-game-button").addEventListener("click", (event)=> {
   document.querySelector(".pop-up").classList.add("hidden");
   playerScore = 0;
   computerScore = 0;
   document.getElementById("result").innerHTML = "Press button to know who wins";
   document.getElementById("result").removeAttribute("class");
   document.getElementById("player-score").innerHTML=0;
   document.getElementById("computer-score").innerHTML=0;
});

document.querySelectorAll("button").forEach(button=>{
   button.addEventListener("click", (event)=>{
      playRound(event.target.innerHTML);
   });
});

function getComputerChoice() {
   let choiceArray = ["Rock","Paper","Scissors"];
   let i = Math.floor(Math.random()*3);
   let computerChoice = choiceArray[i];
   return computerChoice;
}
function checkWinner(player, computer) {
   if (player === 5 || computer === 5) {
      document.querySelector(".pop-up").classList.remove("hidden");
      document.getElementById("finished-game").innerHTML = (player === 5? "Player":"Computer") + " wins!";
   }
}

function nobodyWins(a,b) {
   document.getElementById("computerChoice").innerHTML = "Computer choice is: " + b;
   document.getElementById("result").innerHTML = "Nobody wins. " + a + " equals to " + b;   
   document.getElementById("result").classList.remove("win");
   document.getElementById("result").classList.remove("lose");
}
function playerWins(a,b) {
   document.getElementById("computerChoice").innerHTML = "Computer choice is: " + b;
   document.getElementById("result").innerHTML = "You Win! " + a + " beats " + b;
   document.getElementById("result").classList.remove("lose");
   document.getElementById("result").classList.add("win");
   playerScore++;
   document.getElementById("player-score").innerHTML = playerScore;
   checkWinner(playerScore, computerScore);
}
function playerLose(a,b) {
   document.getElementById("computerChoice").innerHTML = "Computer choice is: " + b;
   document.getElementById("result").innerHTML = "You Lose. " + b + " beats " + a;
   document.getElementById("result").classList.remove("win");
   document.getElementById("result").classList.add("lose");
   computerScore++;
   document.getElementById("computer-score").innerHTML = computerScore;
   checkWinner(playerScore, computerScore);

}

function playRound(playerChoice) {
   let computerChoice = getComputerChoice();
   switch(playerChoice) {
      case "Rock":
         if (computerChoice === "Rock") {
            nobodyWins(playerChoice, computerChoice);
         } else if (computerChoice === "Paper") {
            playerLose(playerChoice, computerChoice);
         } else playerWins(playerChoice, computerChoice);
         break;
      case "Paper":
         if (computerChoice === "Paper") {
            nobodyWins(playerChoice, computerChoice);
         } else if (computerChoice === "Scissors") {
            playerLose(playerChoice, computerChoice);
         } else playerWins(playerChoice, computerChoice);
         break;
      case "Scissors":
         if (computerChoice === "Scissors") {
            nobodyWins(playerChoice, computerChoice);
         } else if (computerChoice === "Rock") {
            playerLose(playerChoice, computerChoice);
         } else playerWins(playerChoice, computerChoice);
         break;
   }
}