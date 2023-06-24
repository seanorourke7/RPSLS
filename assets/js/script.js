
/*Loops through the game options and labels them as gameTiles. 
This uses the "id" attribute to identify which tile has been selected by the user. */

let gameType = document.getElementsByClassName("icons");
for (let gameTile of gameType) {
    gameTile.addEventListener("click", function () {
        let selectedIcon = this.getAttribute("ID");
        displayBox(selectedIcon);
        cpuTile();
        checkAnswer();
    });

};

/*This funtion will take the user selection and place it in the user selected button.
It will then be compared with the CPU choice.*/

function displayBox(selectedIcon) {
    document.getElementById("result-display").innerHTML = `<button class="icons" id=${selectedIcon} type="submit"></button>`;
}

// This will generate a random choice for the CPU

function cpuTile() {
    let tileArray = ["rock", "paper", "scissors", "lizard", "spock"];
    let ranNumber = Math.floor(Math.random() * 5);
    let cpuChoice = tileArray[ranNumber];
    document.getElementById("cpu-display").innerHTML = `<button class="icons" id=${cpuChoice} type="submit"></button>`;

}

/*This function will check the User answer 
and compare it to the CPU's random answer and display an alert based on the outcome*/

function checkAnswer() {
    let userChoice = document.getElementById("result-display").innerHTML;
    let aiChoice = document.getElementById("cpu-display").innerHTML;
    let rock = '<button class="icons" id="rock" type="submit"></button>';
    let paper = '<button class="icons" id="paper" type="submit"></button>';
    let scissors = '<button class="icons" id="scissors" type="submit"></button>';
    let lizard = '<button class="icons" id="lizard" type="submit"></button>';
    let spock = '<button class="icons" id="spock" type="submit"></button>';

    if (userChoice === aiChoice) {
        setTimeout(function () {
            Swal.fire({
                icon: 'info', title: "DRAW", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);

    }
    else if (userChoice === rock && aiChoice === paper) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Covers Rock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 1000);
    }
    else if (userChoice === rock && aiChoice === spock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Vaporises Rock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === rock && aiChoice === lizard) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Lizard", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === rock && aiChoice === scissors) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Rock Crushes Scissors", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === rock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Covers Rock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === lizard) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Eats Paper", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === scissors) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Cuts Paper", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === paper && aiChoice === spock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Paper Disproves Spock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === rock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Scissors", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === lizard) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Decapitates Lizard", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === paper) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Scissors Cuts Paper", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === scissors && aiChoice === spock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Smashes Scissors", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === rock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Lizard", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === scissors) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Decapitates Lizard", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === paper) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Eats Paper", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === lizard && aiChoice === spock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Lizard Poisons Spock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === rock) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Vaporises Rock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === scissors) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success', title: "You Win", text: "Spock Smashes Scissors", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === paper) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Disproves Spock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }
    else if (userChoice === spock && aiChoice === lizard) {
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Poisons Spock", position: 'bottom', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
    }



}

