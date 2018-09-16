

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let guesses = [];

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(letter);

function reset(){
    guessesLeft = 9;
    guesses = [];
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(letter);
}

 document.onkeyup = function (event){
    if(event.which < 65 || event.which > 90 || guesses.indexOf(event.key) >= 0){
        return false;
    }else{
        if(letter === event.key){
            wins++;
            reset();
        }else{
            guessesLeft--;
            guesses.push(event.key);
        };
    };
    if(guessesLeft === 0){
        losses++;
        reset();
    };
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("guesses").textContent = guesses.join(", ");
    
 }   