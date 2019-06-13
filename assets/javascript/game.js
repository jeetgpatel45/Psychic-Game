var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = ["",];

var userGuess = ["f","g","h","j"];


var changeGuessLeft = function() {
    document.getElementById("#guess-left").innerHTML = guessesLeft;
};

var CGuess = function() {
    computerGuess = userGuess[Math.floor(Math.random() * computerGuess.length)];
};

var userGuesses = function () {
    document.getElementById("#your-letters").innerHTML = guessesSoFar;
};

var reset = function() {
    guessesLeft = 10;
    guessesSoFar = [];
    changeGuessLeft();
    CGuess();
    userGuess();
}

changeGuessLeft();
CGuess();
userGuess();

document.onkeydown = function() {
    guessesLeft --;
    var playerGuess = event.key;
    guessesSoFar.push(playerGuess);

    changeGuessLeft();
    userGuess();

    if (playerGuess === userGuess) {
        wins++;
        document.getElementById("#wins").innerHTML = wins;

        reset();
    }
    if ( guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;

        reset();
    };

}