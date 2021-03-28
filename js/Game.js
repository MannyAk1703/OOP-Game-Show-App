/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Take It With a Grain Of Salt"),
      new Phrase("A Dime a Dozen"),
      new Phrase("Sharing is caring"),
      new Phrase("Bring home the bacon"),
      new Phrase("Gee Whiz"),
      new Phrase("Saved by the bell"),
      new Phrase("In stitches"),
      new Phrase("In the limelight"),
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  //Starts the Game
  startGame() {
    overlay.style.display = "none";

    this.activePhrase = this.getRandomPhrase();
    console.log(this.activePhrase);
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(userSelection) {
    // Disable Selected Button
    userSelection.disabled = true;

    // Check Letter Status
    const letterStatus = this.activePhrase.checkLetter(userSelection);

    // Actions Based On Letter Status
    if (!letterStatus) {
      userSelection.classList.add("wrong");
      this.removeLife();
    } else {
      userSelection.classList.add("chosen");
      this.activePhrase.showMatchedLetter(userSelection.textContent);
      const hasWon = this.checkForWin();

      // If User Has Won, Call Game Over
      if (hasWon) this.gameOver("You win!", "win");
    }
  }

  removeLife() {
    // Increment Missed Guesses
    this.missed++;
    if (this.missed < 5) {
      const liveHeart = document.querySelector(
        'img[src="images/liveHeart.png"]'
      );
      liveHeart.setAttribute("src", "images/lostHeart.png");
      // If User Has lost, Call Game Over
    } else {
      this.gameOver("Sorry, try again next time!", "lose");
    }
  }
  //Checks if user has guessed all characters
  checkForWin() {
    const hiddenLetters = display.querySelectorAll(".hide");
    console.log(hiddenLetters);
    return hiddenLetters.length === 0 ? true : false;
  }

  gameOver(message, status) {
    // Display Overlay
    overlay.style.display = "flex";
    overlay.className = status;

    // Set Text For Message
    overlay.querySelector("#game-over-message").textContent = message;

    // Set Text For 'Play Again' Button
    overlay.querySelector("#btn__reset").textContent = "Play Again";

    // Reset Game
    // Remove Shown Letters On Board
    display.innerHTML = "";

    // Enable All Keyboard Buttons & Reset Their Class
    qwerty.forEach((button) => {
      button.disabled = false;
      button.className = "key";
    });
    // Resets heart icon
    const hearts = document.querySelectorAll("#scoreboard img");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute("src", "images/liveHeart.png");
    }
  }
}
