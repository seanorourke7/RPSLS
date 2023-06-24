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
        alert("DRAW");
    }
    else if (userChoice === rock && aiChoice === paper) {
        alert("You Lose");
    }
    else if (userChoice === rock && aiChoice === scissors) {
        alert("You Win");
    }
    else if (userChoice === rock && aiChoice === lizard) {
        alert("You Win");
    }

}
