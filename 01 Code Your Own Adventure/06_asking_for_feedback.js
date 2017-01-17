// Check if the user is ready to play!
confirm("Are you ready to play?")
// Check age > 13
var age = prompt("What's your age?");
if (age > 13) {
    console.log("Let's play!");
}
else {
    console.log("We assume no responsibility")
}
// Begin story
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")
// First decision
var userAnswer = prompt("Do you want to race Beiber on stage?")
if (userAnswer === "yes") {
    console.log("You and Beiber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! Beiber shakes his head and sings 'I set a pace, so I can race without pacing'")
}
// Get user feedback
var feedback = prompt("Please rate game out of 10")
if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.")
}
