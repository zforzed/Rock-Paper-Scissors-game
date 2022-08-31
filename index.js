let choiceArray = ["Rock","Paper","Scissors"];

function getComputerChoice() {
   let i = Math.floor(Math.random()*3);
   let computerSelection = choiceArray[i];
   return computerSelection;
}
function inputCorrection(input) {
   let corrected = input[0].toUpperCase() + input.slice(1).toLowerCase();
   return corrected;
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
}
function playerLose(a,b) {
   document.getElementById("computerChoice").innerHTML = "Computer choice is: " + b;
   document.getElementById("result").innerHTML = "You Lose. " + b + " beats " + a;
   document.getElementById("result").classList.remove("win");
   document.getElementById("result").classList.add("lose");
}
function whoWins() {
   let playerInput = document.getElementById("playerInput").value;
   let playerSelection = inputCorrection(playerInput);
   document.getElementById("playerInput").value = playerSelection;
   let computerSelection = getComputerChoice();
   switch(playerSelection) {
      case "Rock":
         if (computerSelection === "Rock") {
            nobodyWins(playerSelection, computerSelection);
         } else if (computerSelection === "Paper") {
            playerLose(playerSelection, computerSelection);
         } else playerWins(playerSelection, computerSelection);
         break;
      case "Paper":
         if (computerSelection === "Paper") {
            nobodyWins(playerSelection, computerSelection);
         } else if (computerSelection === "Scissors") {
            playerLose(playerSelection, computerSelection);
         } else playerWins(playerSelection, computerSelection);
         break;
      case "Scissors":
         if (computerSelection === "Scissors") {
            nobodyWins(playerSelection, computerSelection);
         } else if (computerSelection === "Rock") {
            playerLose(playerSelection, computerSelection);
         } else playerWins(playerSelection, computerSelection);
         break;
   }
}