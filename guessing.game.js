

let guessNum = prompt('I thuoght of a random number betwween 1 and 10.')
let numToGuess = Math.floor(Math.random() * 10) + 1;

if (numToGuess == guessNum) {
    alert("Bravo!");
} else {
    alert(" Hard Luck! " + numToGuess);
}
