/* Project 4 - OOP Game App
 *  app.js*/
const startGame = document.querySelector("#btn__reset");
const overlay = document.querySelector("#overlay");
const qwerty = document.querySelectorAll("#qwerty button");
let game;

////////// Events//////////

// Start Game
startGame.addEventListener("click", () => {
  // Initiate Game Class
  game = new Game();
  game.startGame();
});

// Keys (Click);
qwerty.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userGuess = e.target;

    game.handleInteraction(userGuess);
  });
});

// Keys (Keyup)
document.addEventListener("keyup", (e) => {
  const userGuess = e.key.toLowerCase();

  qwerty.forEach((button) => {
    if (userGuess === button.textContent && !button.disabled) {
      game.handleInteraction(button);
    }
  });
});
