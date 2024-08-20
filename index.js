const letters = document.getElementById("letters");
const underlineDiv = document.getElementById("underlineDiv");
const randomWord = "hello";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
for (let i = 0; i < randomWord.length; i++) {
  const underline = document.createElement("div");
  underline.innerHTML = "_";
  underline.className = "underscore";
  underlineDiv.appendChild(underline);
}
let lives = 10;

const myLives = document.getElementById("myLives");
myLives.innerHTML = "You have " + lives + " lives";

for (let i = 0; i < alphabet.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = alphabet[i];
  button.id = "letter";
  letters.className = "container";

  button.addEventListener("click", function () {
    const underscore = document.getElementsByClassName("underscore");
    button.style.pointerEvents = "none";
    button.style.opacity = "0.5";

    if (randomWord.includes(alphabet[i])) {
      for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === alphabet[i]) {
          underscore[j].innerHTML = alphabet[i];
        }
      }
    } else {
      lives--;
      myLives.innerHTML = "You have " + lives + " lives";
    }
    if (lives < 1) {
      myLives.innerHTML = "Game over";
    }
    if (underlineDiv.innerHTML.includes("_") === false) {
      myLives.innerHTML = "You win!";
    }
    // if (randomWord.includes(alphabet[i]) == true) {
    //   const index = randomWord.indexOf(alphabet[i]);
    //   underscore[index].innerHTML = alphabet[i];
    // } else {
    //   lives--;
    //   myLives.innerHTML = "You have " + lives + " lives";
    // }
  });
  letters.appendChild(button);
}
