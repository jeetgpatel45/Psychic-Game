var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","P","q","r","s","t","u","v","w","x","y","z"];
var userGuesses = [];
var computerChoice; 
var userChoice;

function randomCharacter() {
    computerChoice = computerGuess[Math.floor((Math.random() * 25))];
    console.log("random Character: " + computerChoice);
}
randomCharacter();

document.getElementById("guess-left").innerHTML = guessesLeft;

document.getElementById("wins").innerHTML = wins;

document.getElementById("losses").innerHTML = losses;


document.onkeypress = function(userGuess) {

    var playerGuess = userGuess.key;
    userGuesses.push(playerGuess);
    document.getElementById("your-letters").innerHTML = userGuesses;
    
    if (playerGuess === computerChoice) {
        wins++;
        document.getElementById("wins").innerHTML = wins 
    };
    if ( playerGuess !== computerChoice) {
        guessesLeft--;
        document.getElementById("guess-left").innerHTML = guessesLeft;
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }
};

// document.onkeyup() = function(userGuess) {
//     var playerGuess = userGuess.key;
//     console.log(playerGuess)
//     var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
//     if (playerGuess === computerGuess) {
//         wins++;
//         document.getElementById("#wins").innerHTML = wins 
//     }
// };
  





//var wins = 0;
//var losses = 0;
//var guessesLeft = 10;
//var guessSoFar = userGuess + computerGuess;

//var userGuess = ["h", "j", "k", "z", "a", "q",];
//var computerGuess = ["w","e","r","t","y","u","i","o","p","s","d","f","g","l","x","c","v","b","n","m","z","a","q","h","j","k"];

//document.onkeypress() = function(userGuess) {
//    var playerGuess = userGuess.key;
//    var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
//    if (playerGuess === computerGuess) {
//        wins++;
//        document.getElementById("#wins").innerHTML = wins 
//    }