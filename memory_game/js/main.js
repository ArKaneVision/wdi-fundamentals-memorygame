console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch() {

if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("equal");
			alert("You found a match!");
		}
		else {
			console.log("not equal");
			alert("Sorry try again");
		}
}

function flipCard(cardId) {

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		console.log("Picked 2");

	checkForMatch();
	}
}

flipCard(0);
flipCard(2);