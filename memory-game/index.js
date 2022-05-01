//generating object
const getData = () => [
	{
		name: "morty",
		img: "images/morty.png",
	},

	{
		name: "rick",
		img: "images/rick.png",
	},
	{
		name: "evil-morty",
		img: "images/evilmorty.png",
	},
	{
		name: "meeseeks",
		img: "images/meeseeks.png",
	},
	{
		name: "birdperson",
		img: "images/birdperson.png",
	},
	{
		name: "summer",
		img: "images/summer.png",
	},
	{
		name: "morty",
		img: "images/morty.png",
	},

	{
		name: "rick",
		img: "images/rick.png",
	},
	{
		name: "evil-morty",
		img: "images/evilmorty.png",
	},
	{
		name: "meeseeks",
		img: "images/meeseeks.png",
	},
	{
		name: "birdperson",
		img: "images/birdperson.png",
	},
	{
		name: "summer",
		img: "images/summer.png",
	},
];

//Selecting element from id
const grid = document.querySelector("#grid");
const playerLivesCount = document.querySelector("span");

let playerLives = 6;
playerLivesCount.textContent = playerLives;

//Card randomization
const randomize = () => {
	const cardData = getData();
	cardData.sort(() => 0.5 - Math.random());
	return cardData;
};

//Generating cards
const cardGenerator = () => {
	const cardData = randomize();

	//generate HTML element by mapping through the array
	cardData.map((item) => {
		const card = document.createElement("div");
		const face = document.createElement("img");
		const back = document.createElement("div");
		card.classList = "card";
		face.classList = "face";
		back.classList = "back";

		//attach image to cards
		face.src = item.img;

		//attach name to cards
		card.setAttribute("name", item.name);

		//append element to parent element
		grid.appendChild(card);
		card.appendChild(face);
		card.appendChild(back);

		card.addEventListener("click", (e) => {
			card.classList.toggle("toggleCard");
			checkCards(e);
		});
	});
};

//Checking cards
const checkCards = (e) => {
	const clickedCard = e.target;
	clickedCard.classList.add("flipped");
	const flippedCards = document.querySelectorAll(".flipped");
	const toggleCard = document.querySelectorAll(".toggleCard");

	//Check the card and create logic if player lose the game
	if (flippedCards.length === 2) {
		if (
			flippedCards[0].getAttribute("name") ===
			flippedCards[1].getAttribute("name")
		) {
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				//change the card to be unclickable
				card.style.pointerEvents = "none";
			});
		} else {
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				setTimeout(() => card.classList.remove("toggleCard"), 1200);
			});
			playerLives -= 1;
			playerLivesCount.textContent = playerLives;
			if (playerLives === 0) {
				restartGame("😢Try again");
			}
		}
	}

	// if player win the game

	if (toggleCard.length === 16) {
		restartGame("🙌You won!");
	}
};

// Restart game
const restartGame = (text) => {
	const cardData = randomize();
	const faces = document.querySelectorAll(".face");
	const cards = document.querySelectorAll(".card");
	grid.style.pointerEvents = "none";

	//closing all the cards then randomize the picture and names again
	cardData.map((item, index) => {
		cards[index].classList.remove("toggleCard");

		setTimeout(() => {
			cards[index].style.pointerEvents = "all";
			faces[index].src = item.img;
			cards[index].setAttribute("name", item.name);
			grid.style.pointerEvents = "all";
		}, 1000);
	});
	playerLives = 6;
	playerLivesCount.textContent = playerLives;

	setTimeout(() => window.alert(text), 100);
};

document.addEventListener("DOMContentLoaded", () => {
	cardGenerator();
});
