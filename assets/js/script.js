let gameType = document.getElementsByClassName("icons");

for (let gameTile of gameType) {
    gameTile.addEventListener("click", function () {
        let selectedIcon = this.getAttribute("ID");
        displayBox(selectedIcon);
    });

};

function displayBox(selectedIcon) {
    document.getElementById("result-display").innerHTML = `<button class="icons" id=${selectedIcon} type="submit"></button>`;
}
