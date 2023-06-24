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
    if (userChoice === aiChoice) {
        alert("DRAW");
    }
}
