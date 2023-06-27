
function checkLose() {
    var userChoice = document.getElementById("result-display").innerHTML;
    var aiChoice = document.getElementById("cpu-display").innerHTML;
    var rock = '<button class="icons" id="rock" type="submit"></button>';
    var paper = '<button class="icons" id="paper" type="submit"></button>';
    var scissors = '<button class="icons" id="scissors" type="submit"></button>';
    var lizard = '<button class="icons" id="lizard" type="submit"></button>';
    var spock = '<button class="icons" id="spock" type="submit"></button>';
    if (userChoice === rock && aiChoice === paper) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Covers Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 1000);
        cpuMaxScore();

    } else if (userChoice === rock && aiChoice === spock) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Vaporises Rock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();

    } else if (userChoice === paper && aiChoice === lizard) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Eats Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === paper && aiChoice === scissors) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Cuts Paper", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === scissors && aiChoice === rock) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === scissors && aiChoice === spock) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Spock Smashes Scissors", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === lizard && aiChoice === rock) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Rock Crushes Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === lizard && aiChoice === scissors) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Scissors Stabs Lizard", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === spock && aiChoice === paper) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Paper Disproves Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }
    else if (userChoice === spock && aiChoice === lizard) {
        setTimeout(function () { losePlay(); }, 700);
        incrementCpuScore();
        setTimeout(function () {
            Swal.fire({
                icon: 'error', title: "You Lose", text: "Lizard Poisons Spock", position: 'center', customClass: 'swal-height', showConfirmButton: false,
                timer: 1500
            });
        }, 750);
        cpuMaxScore();
    }

}