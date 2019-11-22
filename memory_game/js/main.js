console.log("Up and running!");

// var Score = 0

var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png",
},
];
var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i ++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function checkForMatch() {

if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("equal");
			alert("You found a match!");
			// increaseScore()
		}
		else {
			console.log("not equal");
			alert("Sorry try again");
		}
};

function flipCard() {

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		console.log("Picked 2");

	checkForMatch();
	}
}

// function increaseScore() {
// 	var currentScore = document.getElementByClassName("Score");
// 	var newScore = currentScore + 1;
// 	currentScore.textContent(newScore);
// }

// function refresh() {
	
// 	createBoard()
// }

// document.getElementsByTagName('button')[0].addEventListener('click', refresh);

createBoard();