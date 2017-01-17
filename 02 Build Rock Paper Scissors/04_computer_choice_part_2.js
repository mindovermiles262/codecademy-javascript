// Ask user to pick R,P or S
var userChoice = prompt("Do you choose rock, paper, or scissors?");

// Get random computer choice
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice <= 0.33){
  computerChoice = "rock"
}
else if (computerChoice <= 0.66) {
  computerChoice = "paper"
}
else {
  computerChoice = "scissors"
};
