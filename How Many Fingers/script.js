document.getElementById("checkNumber").onclick = function(){
    var numberEntered = document.getElementById("guessedNumber").value;
    var actualFinger = Math.floor(Math.random() * 6);
    if (numberEntered==actualFinger) {
        alert("You are correct I am holding " + actualFinger + " fingers");
    }
    else {
        alert ("Your guess is incorrect, I am holding " + actualFinger + " fingers");
    }
    //for If Statements
}

function doAGuess (correctAnswer) {

    var guess = Math.floor(Math.random() * 6); 
        
        if (guess==correctAnswer) {
            return (true);
        }
        else {
            return (false);
        }
}

document.getElementById("enterNumber").onclick = function(){
    var myNumber = document.getElementById("myFinger").value;
    var gotIt = false;
    var numberOfGuesses = 1;
    
    while (gotIt==false){
        
        if (doAGuess(myNumber)==true) {
            gotIt = true;
            alert ("Got It, You are holding " + myNumber + " fingers, it took me " + numberOfGuesses + " guesses")
        }
        else {
            numberOfGuesses++;
        }
    }
}