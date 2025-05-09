document.addEventListener("DOMContentLoaded", function () {
    var guessInput = document.getElementById("Guess");
    var result = document.getElementById("Result");
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    var Score = document.getElementById("Score");
    var totalScore = 10;

    function guessNumber() {
        var guess = parseInt(guessInput.value); 

        if (totalScore <= 0) {
            result.textContent = "Game Over! You've run out of attempts.";
            document.getElementById("guessButton").disabled = true; 
            return;
        }

        if (guess === randomNumber) {
            result.textContent = "You guessed it right!";
            alert("You guessed it right! The number was " + randomNumber);
            document.getElementById("guessButton").disabled = true; 
        } else {
            totalScore -= 1; 
            Score.textContent = `Score: ${totalScore}`;
            result.textContent = guess > randomNumber ? "Too high! Try again." : "Too low! Try again.";
        }

        if (totalScore === 0) {
            result.textContent = "Game Over! You've run out of attempts.";
            document.getElementById("guessButton").disabled = true; 
        }
    }

    document.getElementById("guessButton").onclick = guessNumber;
});

