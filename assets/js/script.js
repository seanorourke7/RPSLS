let gameType = document.getElementsByClassName("icons");

for (let userSelection of gameType) {
    userSelection.addEventListener("click", function () {
        if (this.getAttribute("ID") === "rock") {
            alert("rock");
        } else {
            alert("not rock");
        }
    });
}

