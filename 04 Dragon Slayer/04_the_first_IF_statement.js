// One loop program.  If youHit randomly = 1, you win. Else you lose

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRounc = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying){
	if (youHit === 1) {
		// IF do something
		console.log("Congratulations! You hit the dragon with your sword!")
	}
	else {
		// ELSE do something
		console.log("You have been DEFEATED by the dragon")
	};
	// WHILE do something
	slaying = false;
};