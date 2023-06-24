let gameType = document.getElementsByClassName("icons");
for (let gameTile of gameType) {
    gameTile.addEventListener("click", function () {
        let selectedIcon = this.getAttribute("ID");
        displayBox(selectedIcon);
        cpuTile();
        checkAnswer();
    });

};

function displayBox(selectedIcon) {
    document.getElementById("result-display").innerHTML = `<button class="icons" id=${selectedIcon} type="submit"></button>`;
}

function cpuTile() {
    let tileArray = ["rock", "paper", "scissors", "lizard", "spock"];
    let ranNumber = Math.floor(Math.random() * 4);
    let cpuChoice = tileArray[ranNumber];
    document.getElementById("cpu-display").innerHTML = `<button class="icons" id=${cpuChoice} type="submit"></button>`;

}


function checkAnswer() {
    let userChoice = document.getElementById("result-display").innerHTML;
    let aiChoice = document.getElementById("cpu-display").innerHTML;
    let rock = '<button class="icons" id="rock" type="submit"></button>';
    let paper = '<button class="icons" id="paper" type="submit"></button>';
    let scissors = '<button class="icons" id="scissors" type="submit"></button>';
    let lizard = '<button class="icons" id="lizard" type="submit"></button>';
    let spock = '<button class="icons" id="spock" type="submit"></button>';

    if (userChoice === aiChoice) {
        setTimeout(function () { Swal.fire("DRAW"); }, 500);
    }
    else if (userChoice === rock && aiChoice === paper) {
        setTimeout(function () { Swal.fire("You Lose", "Paper Covers Rock"); }, 500);
    }
    else if (userChoice === rock && aiChoice === spock) {
        setTimeout(function () { Swal.fire("You Lose", "Spock Vaporises Rock"); }, 500);
    }
    else if (userChoice === rock && aiChoice === lizard) {
        setTimeout(function () { Swal.fire("You Win", "Rock Crushes Lizard"); }, 500);
    }
    else if (userChoice === rock && aiChoice === scissors) {
        setTimeout(function () { Swal.fire("You Win", "Rock Crushes Scissors"); }, 500);
    }
    else if (userChoice === paper && aiChoice === rock) {
        setTimeout(function () { Swal.fire("You Win", "Paper Covers Rock"); }, 500);
    }
    else if (userChoice === paper && aiChoice === lizard) {
        setTimeout(function () { Swal.fire("You Lose", "Lizard Eats Paper"); }, 500);
    }
    else if (userChoice === paper && aiChoice === scissors) {
        setTimeout(function () { Swal.fire("You Lose", "Scissors Cuts Paper"); }, 500);
    }
    else if (userChoice === paper && aiChoice === spock) {
        setTimeout(function () { Swal.fire("You Win", "Paper Disproves Spock"); }, 500);
    }
    else if (userChoice === scissors && aiChoice === rock) {
        setTimeout(function () { Swal.fire("You Lose", "Rock Crushes Scissors"); }, 500);
    }
    else if (userChoice === scissors && aiChoice === lizard) {
        setTimeout(function () { Swal.fire("You Win", "Scissors Decapitates Lizard"); }, 500);
    }
    else if (userChoice === scissors && aiChoice === paper) {
        setTimeout(function () { Swal.fire("You Win", "Scissors Cuts Paper"); }, 500);
    }
    else if (userChoice === scissors && aiChoice === spock) {
        setTimeout(function () { Swal.fire("You Lose", "Spock Smashes Scissors"); }, 500);
    }
    else if (userChoice === lizard && aiChoice === rock) {
        setTimeout(function () { Swal.fire("You Lose", "Rock Crushes Lizard"); }, 500);
    }
    else if (userChoice === lizard && aiChoice === scissors) {
        setTimeout(function () { Swal.fire("You Lose", "Scissors Decapitates Lizard"); }, 500);
    }
    else if (userChoice === lizard && aiChoice === paper) {
        setTimeout(function () { Swal.fire("You Win", "Lizard Eats Paper"); }, 500);
    }
    else if (userChoice === lizard && aiChoice === spock) {
        setTimeout(function () { Swal.fire("You Win", "Lizard Poisons Spock"); }, 500);
    }
    else if (userChoice === spock && aiChoice === rock) {
        setTimeout(function () { Swal.fire("You Win", "Spock Vaporises Rock"); }, 500);
    }
    else if (userChoice === spock && aiChoice === scissors) {
        setTimeout(function () { Swal.fire("You Win", "Spock Smashes Scissors"); }, 500);
    }
    else if (userChoice === spock && aiChoice === paper) {
        setTimeout(function () { Swal.fire("You Lose", "Paper Disproves Spock"); }, 500);
    }
    else if (userChoice === spock && aiChoice === lizard) {
        setTimeout(function () { Swal.fire("You Lose", "Lizard Poisons Spock"); }, 500);
    }



}

