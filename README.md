# JS Project: Collection of Simple Games

Create simple web browser games using vanilla Javascript. When I was young, I
really enjoy playing by these games on my computer or phone and I always want to
build this myself but never really gotten around to do it. Now I decided that it
is time to build this while learning more about Javascript.

This is an ongoing project as I intend to create more games.

## Screenshots

![memory-game](https://user-images.githubusercontent.com/100544967/169456861-7bcce5b0-461b-4cd5-92af-25cfb88a0446.PNG)
![tic-tac-toe](https://user-images.githubusercontent.com/100544967/169456877-834766bf-9c59-42e9-9471-994c234f6808.PNG)
![tic-tac-toe-board](https://user-images.githubusercontent.com/100544967/169456890-17f49835-0482-4d56-8947-e4762c4e06c6.PNG)

## Goals

Practice and deepen my knowledge in HTML, SCSS, and Javascript by building
simple games.

## Implementation Details

### Rick and Morty Memory Game

This game is loosely based on Ania Kubow's tutorial.

1. Create section for the scores and games area
2. Create array of objects for the cards and grabbing each DOM element
3. Randomize the cards using Math Random
4. Create function to generate the cards, adding elements, append it to the
   parent element, and add event listener to each of the card
5. Create function to check the cards and logic for win and lose the game
6. Create function to restart the game if the player loses the game

### Tic Tac Toe Game

This game is loosely based on Coding Nepal's tutorial

1. Create 3 sections for selecting player, board for the game, and result banner
2. Style each section using SCSS and showing only certain section at certains
   selection
3. Grabbing each DOM element, initiliazing state for the bot, assingning icons
   to X and O, and setting the starting sign
4. Create function when the page loads and add event listener to the buttons
5. Create function for the user and bot
6. Create function to check the combination and decide the winner
7. Add event listener to the button to replay the game once the result has been
   given

### Tech Stack

- [x] HTML
- [x] CSS/SCSS
- [x] Javascript
- [x] Git and Github
