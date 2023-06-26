
document.addEventListener("DOMContentLoaded", function () {
    startGame();
});

/*Loops through the game options and labels them as gameTiles. 
This uses the "id" attribute to identify which tile has been selected by the user. */

function startGame() {
    var gameType = document.getElementsByClassName("icons");
    for (var gameTile of gameType) {
        gameTile.addEventListener("click", function () {
            let selectedIcon = this.getAttribute("ID");
            displayBox(selectedIcon);
            cpuTile();
            checkAnswer();
        });

    }
}

/*This funtion will take the user selection and place it in the user selected button.
It will then be compared with the CPU choice .*/

function displayBox(selectedIcon) {
    document.getElementById("result-display").innerHTML = `<button class="icons" id=${selectedIcon} type="submit"></button>`;
}

// This will generate a random choice for the CPU

function cpuTile() {
    var tileArray = ["rock", "paper", "scissors", "lizard", "spock"];
    var ranNumber = Math.floor(Math.random() * 5);
    var cpuChoice = tileArray[ranNumber];
    document.getElementById("cpu-display").innerHTML = `<button class="icons" id=${cpuChoice} type="submit"></button>`;

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

/*funtions to handle sounds of button clicks. */

var rockAudio = document.getElementById("rockSound");
function rockPlay() {
    rockAudio.play();
}

var paperAudio = document.getElementById("paperSound");
function paperPlay() {
    paperAudio.play();
}

var scissorsAudio = document.getElementById("scissorsSound");
function scissorsPlay() {
    scissorsAudio.play();
}

var lizardAudio = document.getElementById("lizardSound");
function lizardPlay() {
    lizardAudio.play();
}

var spockAudio = document.getElementById("spockSound");
function spockPlay() {
    spockAudio.play();
}

/*funtions to handle sounds that alert with WIN/LOSE/DRAW */

var drawAudio = document.getElementById("drawSound");
function drawPlay() {
    drawAudio.play();
}

var winAudio = document.getElementById("winSound");
function winPlay() {
    winAudio.play();
}

var loseAudio = document.getElementById("loseSound");
function losePlay() {
    loseAudio.play();
}
