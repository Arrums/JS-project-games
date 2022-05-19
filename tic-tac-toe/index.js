//Selecting DOM elements

const selectBox = document.querySelector(".select-box"),
	selectXbtn = selectBox.querySelector("#xBtn"),
	selectObtn = selectBox.querySelector("#oBtn");

const board = document.querySelector(".board");
const allBox = document.querySelectorAll(".board__play__tile span");
const players = document.querySelector("#players");
const resultBox = document.querySelector(".result-box");
const wonText = document.querySelector(".result-box__won-text");
const replayBtn = resultBox.querySelector("button");

//initially player will start as X
let playerSign = "X";
//initiliaze state for the bot
let runBot = true;
//icon for each player
const playerXIcon = "fas fa-times";
const playerOIcon = "far fa-circle";

//On page loads

window.onload = () => {
	// add click attribute to all the tiles on the board
	for (let i = 0; i < allBox.length; i++) {
		allBox[i].setAttribute("onclick", "clickedBox(this)");
	}
	// hide the select box when playerX button has been clicked
	// show board when playerX button has been been clicked
	selectXbtn.addEventListener("click", (e) => {
		e.preventDefault;
		selectBox.classList.add("hide");
		board.classList.add("show");
	});

	//adding active-plyr class when playerO button has been clicked
	//add player class to playerO button for the control flow
	selectObtn.addEventListener("click", (e) => {
		e.preventDefault;
		selectBox.classList.add("hide");
		board.classList.add("show");
		players.setAttribute("class", "board__details__players active-plyr player");
	});
};

// selecting winner
const getId = (idname) => {
	//returning id name
	return document.querySelector(".box" + idname).id;
};

const checkIds = (val1, val2, val3, sign) => {
	if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
		return true;
	}
};

const selectWinner = () => {
	//if one of the combination match, it will be selected as winner
	if (
		checkIds(1, 2, 3, playerSign) ||
		checkIds(4, 5, 6, playerSign) ||
		checkIds(7, 8, 9, playerSign) ||
		checkIds(1, 4, 7, playerSign) ||
		checkIds(2, 5, 8, playerSign) ||
		checkIds(3, 6, 9, playerSign) ||
		checkIds(1, 5, 9, playerSign) ||
		checkIds(3, 5, 7, playerSign)
	) {
		//once somebody win, the bot will stop
		runBot = false;
		//show the result box with sign but with delayed time
		setTimeout(() => {
			board.classList.remove("show");
			resultBox.classList.add("show");
		}, 700);

		wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
	} else {
		//check all id and if all boxes have id then the result is draw
		if (
			getId(1) !== "" &&
			getId(2) !== "" &&
			getId(3) !== "" &&
			getId(4) !== "" &&
			getId(5) !== "" &&
			getId(6) !== "" &&
			getId(7) !== "" &&
			getId(8) !== "" &&
			getId(9) !== ""
		) {
			runBot = false;
			setTimeout(() => {
				board.classList.remove("show");
				resultBox.classList.add("show");
			}, 700);

			wonText.textContent = `It's a draw!`;
		}
	}
};

// control flow for user
const clickedBox = (element) => {
	//if players element contains player(user choose O), add O to the selected box, change the player sign to O, move the slider by removing active-plyr class, and set selected box attribute to X
	if (players.classList.contains("player")) {
		element.innerHTML = `<i class="${playerOIcon}"></i>`;
		players.classList.remove("active-plyr");
		playerSign = "O";
		element.setAttribute("id", playerSign);
	} else {
		// if user choose X, add X to the selected box, move the slider by adding active-plyr class, and set selected box attribute to X
		element.innerHTML = `<i class="${playerXIcon}"></i>`;
		players.classList.add("active-plyr");
		element.setAttribute("id", playerSign);
	}
	//calling winner function
	selectWinner();
	//once user select then user can't select any other box until box select
	board.style.pointerEvents = "none";

	//once the box has been selected, it can't be selected anymore
	element.style.pointerEvents = "none";

	//calling the function with passing random delay time
	setTimeout(() => {
		botClick(runBot);
	}, 1400);
};

//control flow for bot
const botClick = (runBot) => {
	//if runBot is true then run the code
	if (runBot) {
		const arr = []; //initialising empty array to store unselected box

		//if a unselected boxes doesn't have any child element, we will push it into the array using for loops
		for (let index = 0; index < allBox.length; index++) {
			if (allBox[index].childElementCount == 0) {
				arr.push(index);
			}
		}

		//getting random index from array for bot to select the unselected box
		let randomBox = arr[Math.floor(Math.random() * arr.length)];

		if (arr.length > 0) {
			if (players.classList.contains("player")) {
				allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
				players.classList.add("active-plyr");
				//if player is O the bot is X
				playerSign = "X";
				allBox[randomBox].setAttribute("id", playerSign);
			} else {
				allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
				players.classList.remove("active-plyr");
				//if the user is X then the bot will be O
				playerSign = "O";
				allBox[randomBox].setAttribute("id", playerSign);
			}
			selectWinner();
		}

		//once the bot select the box, user can't select the box
		allBox[randomBox].style.pointerEvents = "none";
		//once user select then user can't select any other box until box select
		board.style.pointerEvents = "auto";
		playerSign = "X";
	}
};

replayBtn.addEventListener("click", () => {
	window.location.reload();
});
