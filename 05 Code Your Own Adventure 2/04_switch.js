var user = prompt("You're walking down the trail when a troll appears. He demands you pay the troll toll to cross the bridge or there will be a price to pay. Do you PAY the toll, TURN back and run, or FIGHT the troll?").toLowerCase();

switch (user) {
	case 'pay':
		var userpay = prompt("Do you have the toll for the troll? YES or NO").toLowerCase();
		var usercurrency = prompt("Is it in troll coins? YES or NO").toLowerCase();
		if (userpay && usercurrency === "yes") {
			console.log("You are free from the troll");
			break;
		}
		else {
			console.log("The troll eats you. GAME OVER");
			break;
		};
	case 'turn':
		var userfast = prompt("Can you run fast? YES or NO").toLowerCase();
		var usercamo = prompt("Are you wearing camouflage? YES or NO").toLowerCase();
		if (userfast === "yes" || usercamo === "yes") {
			console.log("You've sucessfully lost the troll");
			break;
		}
		else {
			console.log("The troll eats you. GAME OVER");
			break;
		};
	case 'fight':
		console.log("You fight the troll and lose. GAME OVER");
		break;
	default:
		console.log("Your indecisiveness allows the troll to attack. GAME OVER");
		break;
}