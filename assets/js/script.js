
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

/*This function will check the User answer 
and compare it to the CPU's random answer and display an alert based on the outcome*/

function checkAnswer() {
    var userChoice = document.getElementById("result-display").innerHTML;
    var aiChoice = document.getElementById("cpu-display").innerHTML;
    var rock = '<button class="icons" id="rock" type="submit"></button>';
    var paper = '<button class="icons" id="paper" type="submit"></button>';
    var scissors = '<button class="icons" id="scissors" type="submit"></button>';
    var lizard = '<button class="icons" id="lizard" type="submit"></button>';
    var spock = '<button class="icons" id="spock" type="submit"></button>';

    if (userChoice === aiChoice) {
        setTimeout(function () { drawPlay(); }, 500);
        setTimeout(function () {
            Swal.fire({
                icon: 'info', title: "DRAW", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === rock && aiChoice === paper) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Covers Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 1000);
    }
    else if (userChoice === rock && aiChoice === spock) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Vaporises Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === rock && aiChoice === lizard) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === rock && aiChoice === scissors) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === rock) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Covers Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === lizard) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Eats Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === scissors) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Cuts Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === spock) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Disproves Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === rock) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === lizard) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Stabs Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === paper) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Cuts Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === spock) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Smashes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === rock) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === scissors) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Stabs Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === paper) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Eats Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === spock) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Poisons Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === rock) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Vaporises Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === scissors) {
        incrementPlayerScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Smashes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === paper) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Disproves Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === lizard) {
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Poisons Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }



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

/*funtions to handle sounds. */

var buttonAudio = document.getElementById("buttonSound");
function buttonPlay() {
    buttonAudio.play();
}

var drawAudio = document.getElementById("drawSound");
function drawPlay() {
    drawAudio.play();
}

