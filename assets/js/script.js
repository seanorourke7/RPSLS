/*listens for the page to load before starting the game, similar code from the love maths walkthrough*/
document.addEventListener("DOMContentLoaded", function () {
    startGame();
});

/*Loops through the game options and labels them as gameTiles. 
This uses the "id" attribute to identify which tile has been selected by the user. */

function startGame() {
    var gameType = document.getElementsByClassName("icons");
    for (var gameTile of gameType) {
        gameTile.addEventListener("click", function () {
            var selectedIcon = this.getAttribute("ID");
            userSelection(selectedIcon);
            cpuTile();
            checkAnswer();
        });
    }
}

/*This funtion will take the user selection and place it in the user selected button.
It will then be compared with the CPU choice .*/

function userSelection(selectedIcon) {
    document.getElementById(
        "result-display"
    ).innerHTML = `<button class="icons" id=${selectedIcon} type="submit"></button>`;
}

// This will generate a random choice for the CPU

function cpuTile() {
    var tileArray = ["rock", "paper", "scissors", "lizard", "spock"];
    var ranNumber = Math.floor(Math.random() * 5);
    var cpuChoice = tileArray[ranNumber];
    document.getElementById(
        "cpu-display"
    ).innerHTML = `<button class="icons" id=${cpuChoice} type="submit"></button>`;
}

/* funtions to increment scores for player and CPU */

function incrementPlayerScore() {
    var oldScore = parseInt(document.getElementById("playerScore").innerText);
    document.getElementById("playerScore").innerText = ++oldScore;
}

function incrementCpuScore() {
    var oldScore = parseInt(document.getElementById("cpuScore").innerText);
    document.getElementById("cpuScore").innerText = ++oldScore;
}

/*funtions to handle sounds */

function audioPlay(soundType) {
    var audio = document.getElementById(soundType);
    audio.play();
}

/*this funtion calculates the current scores, if it has reached 5 for the cpu or the player  
it congratulates or comisserates the player, removes the buttons and resfreshes the page after 8 seconds.*/

function checkMaxScore() {

    var playerMAxScore = document.getElementById("playerScore").innerText;
    var cpuMAxScore = document.getElementById("cpuScore").innerText;

    if (playerMAxScore === "5") {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("game-rules").style.display = "none";
        document.getElementById("weapon-text").style.display = "none";
        setTimeout(function () {
            Swal.fire({
                title: "Congratulations! You have beaten the Computer",
                confirmButtonColor: "#3085d6",
                confirmButtonText: '<a href="../RPSLS/game.html">Start Again!</a>',
            });
        }, 3000);
        audioPlay('gameWinner');
        setTimeout(function () {
            location.reload();
        }, 8000);
    }
    if (cpuMAxScore === "5") {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("game-rules").style.display = "none";
        document.getElementById("weapon-text").style.display = "none";
        setTimeout(function () {
            Swal.fire({
                title: "You Are No Match for This Computer",
                confirmButtonColor: "#3085d6",
                confirmButtonText: '<a href="../RPSLS/game.html">Start Again!</a>',
            });
        }, 3000);
        audioPlay('gameOver');
        setTimeout(function () {
            location.reload();
        }, 8000);
    }
}

