/* Project 4 - OOP Game App
 * Phrase.js */
let display = document.getElementById("phrase").childNodes[1];
let li = display.children;

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.randomRGB = `rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)} )`;
  }

  //Adds phrase to display
  addPhraseToDisplay() {
    let splitPhrase = this.phrase.split("");
    splitPhrase.forEach((a) => {
      let li = document.createElement("li");
      li.innerHTML += a;
      if (a !== " ") {
        li.classList.add(`letter`);
        li.classList.add(`hide`);
      } else {
        li.classList.add("space");
      }
      display.appendChild(li);
    });
  }

  //Checks if selected letter isn in phrase
  checkLetter(userSelection) {
    return this.phrase.includes(userSelection.textContent) ? true : false;
  }

  showMatchedLetter(userSelection) {
    Object.values(li).forEach((a) => {
      if (userSelection === a.textContent) {
        a.classList.replace("hide", "show");
        a.style.background = this.randomRGB;
      }
    });
  }
}
