console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped" + " " + cardsInPlay);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log("Picked 2");

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("equal");
		alert("You found a match!");
	}
	else {
		console.log("not equal");
		alert("Sorry try again");
	}
}